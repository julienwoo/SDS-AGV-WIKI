---
title: AGV Shut-down
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this to safely take an AGV out of service. The manual describes two levels: a routine power-down (end of shift), and a full power-off (before any maintenance, or extended parking) that includes disconnecting the battery.

## Access Level

🟢 **Operator – Level 1** for routine power-down. Full power-off before maintenance should be coordinated with a supervisor.

## Step-by-Step Procedure — Routine Power-Down (end of shift)

1. **Wait for the AGV to finish or safely pause its current task** — do not power off an AGV mid-task unless it is an emergency.
2. **Stop the vehicle in a controllable manner** and route it to its designated parking/charging location (via RCS or manually).
3. **Switch to Manual mode** using the rotary switch.
4. **Lower the forks to their lowest position** using the fork-lowering control on the handheld device.
5. **Click "Shut down" on the AGV's software interface** to close the AGV software.
6. **Shut down the computer's operating system.**
7. **Once the screen shows "no signal,"** turn the power key counter-clockwise to cut power to the vehicle.

## Step-by-Step Procedure — Full Power-Off (before maintenance, or extended parking)

Do the routine power-down above first, then:

8. **Open the battery cover.**
9. **Unplug the battery discharge plug** to completely cut off power.

Per the manual, this full disconnection is the required state before any oil change, electrical work, or other maintenance task — it should not be treated as a routine daily step unless the AGV will be parked for an extended period or is going into maintenance.

## Expected Result

AGV is safely parked, powered down per the level appropriate to the situation, and out of the active task pool. RCS reflects that it is no longer available for dispatch.

## If Not Solved

If the AGV cannot be moved to its parking location due to a fault, resolve the underlying fault first (check [Troubleshooting](#/category/troubleshooting) for a matching fault) before forcing a shutdown. If the AGV cannot be stopped in a controlled manner, use the Emergency Stop — see [Emergency Stop Recovery](emergency-stop.md).

## Escalation

If the AGV cannot be safely parked or powered down through the steps above, do not force it. Record what was attempted and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Reason for shutdown (end of shift / maintenance / extended parking / other)
- Time of occurrence
