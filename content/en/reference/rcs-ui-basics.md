---
title: Common RCS Status Definitions
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this page

Quick reference for fields you'll see constantly in the RCS web UI. For actual troubleshooting, use [System Architecture Overview](../system-knowledge/architecture.md) and [Diagnosing System-Level Issues](../system-knowledge/diagnosis-guide.md) instead.

## 1. AGV Operating Mode

Vehicle List page, **Operating Mode** field (edit via the row's "Control" button):

| Operating Mode | Meaning |
|---|---|
| Assignable | Can receive tasks normally |
| Unassignable | Connected, but not receiving tasks — used to deliberately lock the AGV out |
| Disconnected | Lost connection, still in last known position — RCS avoids routing other AGVs through it |
| Offline | Physically moved away — RCS ignores its position entirely |

## 2. Vehicle and StorageBin Lock / Unlock

| Object | Gets locked by | Manual unlock |
|---|---|---|
| Vehicle | Setting Operating Mode to **Unassignable** | "Unlock" button, Vehicle List |
| StorageBin | A task reserving it (shown as a **Lock** mark on the map) | "Unlock Inventory Location," StorageBin Status |

⚠️ Manual unlock is for a lock stuck behind an interrupted/failed task — confirm the AGV or slot isn't genuinely still in use first, or you risk a collision or a double-claimed slot.

## 3. Task and Order States

**Order** (what WMS asked for) lifecycle:

| State | Meaning | Actions available |
|---|---|---|
| Received | Order arrived at RCS | Cancel, modify priority/expiration/required vehicle |
| In Progress | AGV task underway | Cancel, Manually Complete, Safely Reassign, Transfer |
| Completed / Cancelled / Expired | Finished — drops off "Current Orders," visible only in Order List | — |

**Task** (what RCS dispatches to an AGV) — one order can generate multiple tasks. Task-by-task stage progression (Begin Execution → Loaded → Unloaded → Completed / Task Error) is in [AGV Status Meanings](agv-status.md#task-progress-from-the-sites-rcswms-task-flow) and [Site Workflows](../system-knowledge/site-workflows.md).

## 4. StorageBin Occupancy and Usage Status

| Field | Values | Meaning |
|---|---|---|
| Location Status | Free / Occupied | Whether cargo is physically present |
| Usage Status | Available / Disabled | Whether the bin can be assigned to new tasks at all |

Map icon legend:

- White square — empty
- Blue square — contains goods
- "Disabled" mark (bottom-left) — taken out of service
- "Lock" mark (bottom-right) — currently reserved (see section 2)

Double-click a square for full detail (availability, lock info, cargo) — supports multi-layer shelving.
