---
title: AGV Shut-down
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this to safely take an AGV out of service at the end of a shift or before maintenance.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

1. **Wait for the AGV to finish or safely pause its current task** — do not power off an AGV mid-task unless it is an emergency.
2. **Set to Manual mode** or use the "Take Offline" function in RCS so it stops receiving new tasks.
3. **Drive or send the AGV to its designated parking / charging location.**
4. **Dock for charging** if it will be idle for an extended period (see [Charging](charging.md)).
5. **Power off** using the main power switch, only if the AGV needs to be fully powered down (e.g. for maintenance) — otherwise leave it docked and charging.
6. **Confirm in RCS** that the AGV shows as **Offline** or **Parked**, as expected.

## Expected Result

AGV is safely parked or charging, out of the active task pool, and RCS reflects its correct state.

## If Not Solved

If the AGV cannot be moved to its parking location due to a fault, resolve the underlying fault first (see relevant Troubleshooting article) before forcing a shutdown.

## Escalation

Contact **VisionNav Service** if the AGV cannot be safely parked or powered down.

## Information Required

- AGV ID
- Reason for shutdown (end of shift / maintenance / other)
- Time of occurrence
