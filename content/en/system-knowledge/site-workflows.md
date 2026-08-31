---
title: Site Workflows
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this page

This walks through the actual material-flow workflows configured for this project (from the site's VN25447 workflow drawing). Each one shows which system does what, in order, and the point where things can be redirected to [Reject Position](site-workflows.md#to-reject-position) if a barcode doesn't match. Use [System Architecture Overview](architecture.md) first if you want the big picture before the detail.

## 1. Direct PutAway → Inbound Rack

1. An operator places a pallet in the direct putaway area and starts a transport request in Cello WMS.
2. WMS sends RCS an order via API: source (exact position), destination (an exact position, or a lane for multi-deep storage), and the pallet's barcode.
3. RCS generates a **scanning task** first and dispatches an AGV to the source to scan the pallet's barcode. The AGV locks in place once scanning is done.
4. **If the scanned barcode doesn't match the order's barcode** → the pallet goes to [Reject Position](site-workflows.md#to-reject-position) instead.
5. If it matches: RCS generates a Loading + Moving task (when the destination is a lane) or a combined Loading-and-Unloading task (single location), and dispatches the same AGV.
6. AGV picks up the pallet (RCS reports **Loaded**), moves to the destination, and drops it off (RCS reports **Unloaded**), then returns to standby.
7. RCS reports **Completed** and updates the destination location's status; WMS is notified.
8. An operator manually moves the pallet from the Inbound Rack Area into the storage rack — this last step is not done by the AGV.

## 2. Robot Buffer → Mujin Robot Cell

1. An operator places a pallet in the robot buffer area and starts a request in WMS. The order's destination is a **Mujin cell number**, not a fixed position.
2. RCS dispatches an AGV to scan the pallet's barcode at the source; the AGV locks after scanning.
3. **Barcode mismatch** → [Reject Position](site-workflows.md#to-reject-position).
4. In parallel, RCS reads the Mujin cell's own signal tags to find an available destination location inside the cell (`moveInLocationXContainer = true`). The cell has 4 locations (1, 2, 4, 5); only locations 1 and 2 accept full pallets.
5. RCS generates an Unloading task to that cell location and dispatches the (locked, waiting) AGV.
6. AGV drops the pallet at the destination (RCS reports **Unloaded**), then moves out and locks.
7. RCS reports **Completed** and updates the storage bin location; WMS is notified.

## 3. Mujin Robot Cell → Inbound Rack Area

1. RCS continuously reads the robot cells' signals, watching for `moveOutLocationXContainer = true` (again, only locations 1 and 2 hold full pallets).
2. RCS generates a scanning task at that cell location and dispatches a waiting AGV, which moves into the cell and scans the pallet's barcode.
3. RCS checks whether an order exists in Cello WMS for that pallet's barcode.
4. **Important:** the AGV pauses at a configured waiting point inside the cell while this is resolved. If it does not receive a pickup signal within that window, **it enters Error mode** — this is a real, documented condition, not a hardware fault. If no matching order is found at all, an alarm is triggered (the exact alarm is project-configurable).
5. Once an order is found, RCS reports **Begin Execution**, generates an Unloading + Moving task to the destination lane, and dispatches the AGV.
6. AGV drops the pallet (RCS reports **Unloaded**), returns to standby, and RCS reports **Completed**.
7. As in workflow 1, an operator manually moves the pallet from the Inbound Rack Area into the storage rack.

## 4. Empty Pallet Buffer → Mujin Robot Cell

1. Operators keep the empty pallet buffer area stocked with empty pallet stacks.
2. RCS reads the robot cells' signals for `moveInLocationXContainer = true` — for this workflow, only locations **4 and 5** (the empty-pallet-stack locations) are relevant. There are two buffer locations total, each tied to one specific cell location.
3. RCS generates a combined Loading-and-Unloading task and dispatches an available AGV, which picks the empty pallet stack up from the buffer and drops it at the calling cell location.
4. AGV moves out of the cell and continues its next task.
5. RCS writes signals back to Mujin (`locationXContainer` = the pallet barcode, `locationXHasContainer = true`) so the cell knows the empty pallets have arrived, and the cell resumes production.
6. **Safety note:** RCS performs a safety handshake with the cell's safety door whenever an AGV passes through it.

## 5. Aranco Conveyor → Inbound Rack Area

1. WMS sends RCS an order when an inbound pallet is waiting on the Aranco Conveyor (source = conveyor location number). Because WMS can send further orders before the current pallet is cleared, **a queue is built into this workflow by design** — seeing multiple queued orders here is expected, not a fault.
2. RCS dispatches an AGV to the conveyor output to scan the pallet's barcode, once the conveyor signals a pallet is present.
3. RCS matches the scanned barcode against the barcode WMS gave it. **Mismatch** → [Reject Position](site-workflows.md#to-reject-position).
4. If it matches: the AGV picks the pallet up off the conveyor (RCS reports **Loaded**), moves to the destination, drops it off (RCS reports **Unloaded**), and returns to standby.
5. RCS reports **Completed**, updates the location, and WMS is notified.
6. As before, an operator moves the pallet from Inbound Rack Area into the storage rack by hand.

## 6. Outbound VAS buffer → VAS Conveyor

1. An operator manually places a pallet in the Outbound VAS buffer and starts a request in WMS.
2. RCS dispatches an AGV to scan the pallet's barcode at the buffer location, then matches it against the barcode WMS provided. **Mismatch** → [Reject Position](site-workflows.md#to-reject-position).
3. If it matches, RCS reports **Begin Execution**, and the AGV picks up the pallet (RCS reports **Loaded**) and moves toward the destination conveyor's decision point.
4. RCS continuously watches the conveyor's own signal for **`conveyorIsClear`**. If the conveyor isn't clear yet, the AGV waits — this is expected conveyor-side behavior, not an AGV fault.
5. Once `conveyorIsClear = true`, RCS dispatches the waiting AGV to unload: it moves into the conveyor, drops the pallet, and leaves.
6. RCS reports **Unloaded**, the AGV returns to standby, and RCS reports **Completed**; WMS is notified.

## To Reject Position

This is the shared fallback used by every workflow above whenever a scanned barcode doesn't match what WMS expected.

1. RCS generates a combined Loading-and-Unloading task to move the mismatched pallet from its scan location to an available slot in the reject position area (availability comes from BES).
2. The AGV that already has the pallet locked executes this task — loads it from the source, unloads it at the reject position.
3. RCS reports the task's progress as **Task Error** (not Completed) and notifies WMS.

**What this means on the floor:** if a pallet ends up in the reject position area, the AGV did exactly what it was supposed to do — the actual problem is a barcode/label or WMS data mismatch upstream, not a vehicle fault. Don't troubleshoot the AGV for this; flag the mismatched pallet and its expected order to whoever manages WMS data at your site. See [Diagnosing System-Level Issues](diagnosis-guide.md).
