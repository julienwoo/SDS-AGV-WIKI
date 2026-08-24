---
title: Auto / Manual Mode Switching
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this whenever an AGV needs to be switched between automatic (RCS-controlled) operation and manual (operator-controlled) driving.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

### Switching to Manual

1. Ensure the AGV is stationary and the surrounding area is clear.
2. Use the mode switch on the AGV control panel (or the handheld pendant) to select **Manual**.
3. Confirm the AGV screen shows **Manual Mode** and RCS reflects the same.
4. The AGV will no longer accept new automatic tasks while in Manual.

### Switching back to Auto

1. Ensure the AGV is stationary, safely positioned, and clear of obstacles.
2. Use the mode switch to select **Auto**.
3. Confirm the AGV screen shows **Auto Mode** and status returns to **Ready/Idle** in RCS.
4. The AGV can now accept tasks again.

## Expected Result

Mode indicator on the AGV and in RCS matches the intended mode, and behavior (accepting tasks vs. manual control) matches that mode.

## If Not Solved

If the AGV does not respond to the mode switch, or is stuck showing a mismatched mode between the AGV screen and RCS, treat this as a fault — see [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md).

## Escalation

Contact **VisionNav Service** if mode switching is unreliable or inconsistent.

## Information Required

- AGV ID
- Mode shown on AGV vs. mode shown in RCS
- Time of occurrence
