---
title: AGV Status Meanings
severity: green
accessLevel: 1
alarmCode: N/A
---

## Vehicle mode/status (from the AGV itself)

These come from the Operation Manual's audible-visual alarm table (Appendix 6) and the mode-switching sections (4.4/4.5) — they describe what state the vehicle control system itself is in, which is also what drives the tri-color light (see [Indicator Lights](indicator-lights.md)).

Looking at this from the RCS screen instead? RCS has its own, separate **Vehicle Status** and **Operating Mode** fields — see [RCS UI Basic Concepts](rcs-ui-basics.md), sections 2 and 3. The two vocabularies don't map one-to-one.

| Status | Meaning | Action Needed |
|---|---|---|
| Initialization | AGV is booting / starting its software | None — wait for it to reach Standby |
| Manual mode | Rotary switch is set to Manual; hand-held device is active | None — expected while driving manually, see [Manual Driving](../operations/manual-driving.md) |
| Maintenance mode | Rotary switch is set to Maintenance | Expected only during service work |
| Automatic mode, on standby | In Auto mode, no task assigned, waiting | None — normal, equivalent to "idle" |
| Paused | An operator (or RCS) has paused the current task | Press Start to resume, or see [AGV Stopped](../troubleshooting/agv-stopped.md) if it does not resume |
| Executing a task (moving) | AGV is driving to/from a task location | None — normal |
| Automatic charging | AGV is docked at an automatic charging station | None — normal, see [Charging (Daily Operation)](../operations/charging.md) |
| Manual charging | AGV is connected to a manual charger | None — normal during manual charging |
| Low battery | Battery has dropped below the low-battery threshold | Dock and charge — see [Charging (Daily Operation)](../operations/charging.md) |
| Level-3 error active | A serious fault has been triggered | Check the exact alarm code on screen; see [Alarm Codes](alarm-codes.md) and check [Troubleshooting](#/category/troubleshooting) for a matching fault |

## Task progress (from the site's RCS/WMS task flow)

The project's workflow documentation (VN25447 Workflow Drawing) shows tasks moving through these states as RCS coordinates the AGV, the WMS, and other site systems (Mujin robot cells, conveyors, etc.):

| Task State | Meaning |
|---|---|
| Begin Execution | RCS has dispatched the task and the AGV has started moving to execute it |
| Loaded | The AGV has picked up the load at the source location |
| Unloaded | The AGV has placed the load at the destination location |
| Completed | The task has finished successfully end-to-end |
| Task Error | The task did not complete normally and needs attention |

If a task shows **Task Error**, check the AGV for an active alarm code first (see [Alarm Codes](alarm-codes.md)) — most task errors trace back to a specific vehicle-level fault (a load-detection check failing, an off-path condition, a communication drop, etc.) rather than being a standalone RCS problem.

## Notes

- This site does not have visibility into every internal RCS status label your project's WMS/RCS may show (those are configured per-project). The statuses above are the ones directly documented in the AGV's own manual and the project's workflow drawing.
- If RCS shows a status not listed here, don't assume it matches one of the rows above — check with your supervisor or the party who configured your RCS/WMS integration.
