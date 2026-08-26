---
title: RCS UI Basic Concepts
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this page

This page explains six concepts you'll see constantly in the RCS web UI (Vehicle Management, StorageBin Management, Order Management), taken from the RCS UI Guide. It's background knowledge — read it once to understand what the fields and icons on screen actually mean, then use [System Architecture Overview](../system-knowledge/architecture.md) and [Diagnosing System-Level Issues](../system-knowledge/diagnosis-guide.md) when you're actually working a problem.

## 1. AGV Indicator Lights (AGV灯语)

Not covered by the RCS UI — the RCS screen doesn't reproduce the AGV's physical tri-color light. That light lives on the vehicle itself and is documented separately: see [Indicator Lights](indicator-lights.md).

## 2. AGV Work State in RCS (Vehicle Status)

On the Vehicle List page, the **Vehicle Status** field shows the AGV's current operational state as RCS sees it:

| Vehicle Status | What it means |
|---|---|
| Invalid | RCS does not currently have a valid status reading for this AGV |
| Standby | AGV is idle and not currently executing a task |
| Auto Mode | AGV is in Automatic mode |
| Manual Mode | AGV is in Manual mode |
| Abnormal | AGV has an active error/fault |
| Shutdown | AGV is powered off |
| Offline | AGV is not connected to RCS |

The RCS UI Guide lists these seven values without further breakdown — treat this field as a quick, at-a-glance read of what the AGV is doing right now, not a diagnostic code. It is a different list from the AGV's own mode/status vocabulary (Initialization, Paused, Automatic charging, Level-3 error, etc.) documented from the AGV manual in [AGV Status Meanings](agv-status.md) — the two come from different systems and don't map one-to-one.

## 3. AGV Operating Mode

Also on the Vehicle List page, and editable via the "Control" button on a specific AGV's row, **Operating Mode** is a separate field from Vehicle Status, with exactly four values:

| Operating Mode | Meaning |
|---|---|
| Assignable | AGV can normally receive tasks |
| Unassignable | AGV is connected to RCS but not receiving tasks — typically set deliberately to temporarily lock the AGV out of task assignment |
| Disconnected | AGV has dropped its connection but is still physically in its last known position; RCS keeps accounting for that position when planning other AGVs' paths, to avoid collisions |
| Offline | AGV has been physically moved away and does not need a live RCS connection; RCS no longer needs to account for its position |

## 4. Vehicle and StorageBin Lock / Unlock

Both AGVs and storage locations (StorageBins) can end up "locked" in RCS, and both have a dedicated manual unlock action for when a lock gets stuck:

- **Vehicle**: setting Operating Mode to **Unassignable** is the normal way to deliberately lock an AGV out of new task assignment. Separately, the Vehicle List has its own **Unlock** button/action for manually unlocking an AGV.
- **StorageBin**: a location can show a **Lock** mark (bottom-right corner of its square on the map) — this means the location is currently reserved, most often by a task that's in progress against it. The StorageBin Status page has an **Unlock Inventory Location** action for manually clearing that lock.

Manual unlock is a recovery action, not a routine one — it's meant for a lock left stuck behind by an interrupted or failed task, not for a vehicle or location that's genuinely still in use. Confirm the AGV or slot isn't actually mid-task before unlocking it; forcing an unlock too early risks a collision or two tasks claiming the same spot.

## 5. Task and Order States

RCS tracks two related but distinct things: **Orders** (what a system like WMS asked RCS to do) and **Tasks** (what RCS actually dispatches to an AGV to do it).

**Order lifecycle**, from the Current Orders / Order List pages:

1. **Received** — order has arrived at RCS. Can still be Cancelled, or have its priority, expiration date, or required vehicle modified.
2. **In Progress** (shown as "Started Execution" in the modify dialog) — an AGV task is underway. Can be Cancelled, Manually Completed, Safely Reassigned, or Transferred to another AGV.
3. Finishes as **Completed**, **Cancelled**, or **Expired** — once finished, the order drops off the "Current Orders" view (which only shows unfinished orders) and is only visible afterward in the Order List.

**Tasks** are what RCS generates from an order for one or more AGVs to actually execute; the Task List lets you query by Task ID, Order ID, AGV ID, and Task Stage. The concrete stage-by-stage progression an individual task moves through (Begin Execution → Loaded → Unloaded → Completed, or diverted to Task Error) is documented in the Task progress table in [AGV Status Meanings](agv-status.md#task-progress-from-the-sites-rcswms-task-flow) and walked through in detail in [Site Workflows](../system-knowledge/site-workflows.md).

## 6. StorageBin Occupancy and Usage Status

StorageBin (inventory location) status is tracked along two independent axes:

- **Location Status** — **Free** or **Occupied**. This reflects whether cargo is physically present in the bin right now.
- **Usage Status** — **Available** or **Disabled**. This reflects whether the bin is currently allowed to be assigned to new tasks at all (an admin can Disable a bin, e.g. for a damaged rack, independent of whether it happens to be empty or full).

On the map view, each bin is a small square: white = empty, blue = contains goods; a **Disabled** mark (bottom-left) means the bin is taken out of service; a **Lock** mark (bottom-right) means it's currently reserved (see section 4 above). Double-clicking a square shows full detail — availability, lock info, and cargo info — and supports multi-layer shelving, where each layer's occupancy is shown separately.
