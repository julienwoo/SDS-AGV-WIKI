---
title: Auto / Manual Mode Switching
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this whenever an AGV needs to be switched between Automatic (RCS-controlled) operation and Manual (handheld-device) driving, using the vehicle's manual/auto rotary switch.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

### Switching to Manual

1. Ensure the AGV is stationary and the surrounding area is clear.
2. Turn the rotary manual/auto switch on the AGV control panel to the **Manual** position. This enables the handheld device.
3. **Swipe the vehicle's built-in ID card** before operating the handheld controls — the manual requires this ID card swipe as a safety measure specifically for manual driving, in addition to switching the rotary knob.
4. Confirm the AGV's tri-color light shows the Manual-mode pattern (red, flashing slowly, per [Indicator Lights](../reference/indicator-lights.md)).
5. The AGV will no longer accept new automatic tasks while in Manual.

### Switching back to Auto

1. Ensure the AGV is stationary, safely positioned, and clear of obstacles.
2. Turn the rotary switch to the **Automatic** position.
3. Confirm the tri-color light returns to the Automatic-standby pattern (yellow, solid) and RCS shows the AGV as available.
4. The AGV can now accept tasks again.

## Notes

- There is also a **Maintenance** position on the same rotary switch on some units — this is separate from Manual and is intended for service work, not day-to-day manual driving.
- A `ManualMode` alarm (0x0240001C — "Switched to manual mode, please reset the vehicle") is expected after leaving Manual mode; press Reset before expecting the AGV to resume Automatic tasks.

## Expected Result

The tri-color light pattern and RCS status both match the intended mode, and behavior (accepting tasks vs. manual control) matches that mode.

## If Not Solved

If the AGV does not respond to the mode switch, or shows a mismatched mode between its own light pattern and RCS, treat this as a fault — see [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md).

## Escalation

If mode switching is unreliable or inconsistent after checking the ID card swipe step, record what was observed and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Mode shown on the AGV vs. mode shown in RCS
- Time of occurrence
