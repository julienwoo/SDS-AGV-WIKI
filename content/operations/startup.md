---
title: AGV Start-up
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this to bring an AGV from powered-off/parked to ready-for-task at the start of a shift.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

1. **Visual inspection** — check the AGV for visible damage, obstructions on sensors/laser, and that the charging area is clear.
2. **Power on** the AGV using the main power switch.
3. **Wait for boot** — allow the onboard system and screen to fully start (typically under a minute).
4. **Check indicator lights** — confirm no red fault light (see [Indicator Lights](../reference/indicator-lights.md)).
5. **Check RCS** — confirm the AGV appears **Online** with a normal battery level.
6. **Release any E-Stop** if the AGV was left in an E-Stop state (see [Emergency Stop Recovery](emergency-stop.md)).
7. **Set to Auto mode** (see [Auto / Manual Mode](auto-manual-mode.md)).
8. **Confirm Ready** status on the AGV screen and in RCS.

## Expected Result

AGV shows **Ready / Idle** in both its own screen and RCS, in Auto mode, with sufficient battery to begin task work.

## If Not Solved

If the AGV does not boot, shows a fault immediately, or will not go Ready, see [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md).

## Escalation

Contact **VisionNav Service** if the AGV fails to complete start-up after the steps above.

## Information Required

- AGV ID
- Screenshot of AGV screen / RCS status
- Time of occurrence
