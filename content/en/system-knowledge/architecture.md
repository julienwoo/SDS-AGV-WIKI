---
title: System Architecture Overview
severity: green
accessLevel: 1
alarmCode: N/A
---

## Why this page exists

A single AGV alarm code (see [Alarm Codes](../reference/alarm-codes.md)) points at a problem on the vehicle itself. But on this project, an AGV is one part of a larger chain — a stuck task or a "nothing is happening" symptom is often caused by something upstream or downstream of the AGV, not the AGV itself. This page gives the overall shape of the system so you can tell which layer to look at. For the actual step-by-step processes, see [Site Workflows](site-workflows.md).

## The systems involved

- **Cello WMS** — the warehouse management system. Operators trigger transport requests here (e.g. "move this pallet"); WMS turns that into an order.
- **RCS** — VisionNav's central control system. Receives orders from WMS, breaks them into AGV tasks (scanning, loading, moving, unloading), dispatches the tasks to available AGVs, and tracks task and location status.
- **AGV fleet** — the VNP15(VL)-66 vehicles themselves, executing the tasks RCS dispatches.
- **Mujin robot cells** — external robotic work cells. They signal RCS when a location inside the cell is ready to receive or ready to be picked up.
- **Aranco Conveyor / VAS Conveyor** — inbound and outbound conveyors, each with their own PLC, that signal RCS about pallet presence and conveyor readiness.
- **Charging stations** — automatic docking stations the AGV uses to recharge itself when idle and low on battery.
- **BES** — referenced in the workflow documentation as the system that tracks storage-location status and is used specifically for reject-position handling.

## How they connect

- **WMS ↔ RCS**: over a WebAPI. An order carries a source, a destination, and the cargo's barcode.
- **RCS ↔ AGV**: over the site's wireless network. RCS dispatches tasks; the AGV executes and reports status back.
- **RCS ↔ Mujin robot cells**: via signal tags per cell location (for example `moveInLocationXContainer` / `moveOutLocationXContainer` / `locationXHasContainer`, where X is a location number inside the cell).
- **RCS ↔ Conveyor PLCs**: via signals such as whether the conveyor output has a pallet ready, or whether the destination conveyor is clear to receive one.

## Task lifecycle

Every AGV task RCS dispatches moves through the same progress states, regardless of which workflow triggered it:

**Begin Execution → Loaded → Unloaded → Completed**, or **→ Task Error** if something didn't match up (see [To Reject Position](site-workflows.md#to-reject-position) in Site Workflows).

Full state meanings: [AGV Status Meanings](../reference/agv-status.md).

## How to use this when something looks wrong

- An **AGV alarm code is showing** → it's a vehicle-level problem. Check the current [Troubleshooting](#/category/troubleshooting) list, or look it up in the full [Alarm Codes](../reference/alarm-codes.md) reference.
- **No AGV alarm, but a task is stuck or nothing is happening** → it's more likely a WMS order that hasn't arrived, a Mujin/conveyor signal that hasn't come through, or a barcode mismatch redirecting the pallet to reject position. See [Diagnosing System-Level Issues](diagnosis-guide.md).
