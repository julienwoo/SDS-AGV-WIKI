---
title: AGV Stopped / Not Moving
severity: red
accessLevel: 1
alarmCode: Varies (see Alarm Codes reference)
---

## Symptom

The AGV is powered on but will not move and does not accept or execute new tasks.

## Alarm Code

There isn't a single "AGV stopped" code — several distinct alarms from the Operation Manual (Appendix 7) can present this way. Check the AGV screen or RCS for the exact code first:

- `StoppedLongTime` (0x02400013) — vehicle has been stationary for an extended period
- `MainThreadTimeout` (0x0240001A) — main process cycle timeout
- `LowDiskSpace` (0x02400019) — insufficient disk space on the onboard computer
- `ManualMode` (0x0240001C) — vehicle was switched to Manual and needs a reset before it will run in Auto again
- `ControlRegionSlowdown` / `ControlRegionStop` (0x0220020A / 0x0220020B) — vehicle stopped or slowed due to an unauthorized control region
- `ControlCenterStoppedLongTime` (0x0240020E) — long stop tied to a control-region condition

If the screen shows a different code entirely, go to [Alarm Codes](../reference/alarm-codes.md) and follow that article instead — this page only covers generic "won't move, no obvious cause yet" triage.

## Severity

🔴 High — production impact. AGV is not performing tasks.

## Access Level

🟢 **Operator – Level 1** — the checks below (mode, E-Stop, path, battery, Reset button) are within normal operator duties per the manual's operator task list.

## Possible Causes

- AGV is in Manual mode instead of Automatic mode (rotary switch position)
- An Emergency Stop button is pressed — on the VNP model there are four E-Stop positions on the vehicle (front and rear)
- AGV is waiting for a blocked path (another AGV, obstacle, closed door)
- Battery is low enough that the AGV is holding position
- One of the codes listed above is active but the alarm banner wasn't noticed
- AGV genuinely has no task assigned — this is normal Automatic-mode standby, not a fault (see [AGV Status](../reference/agv-status.md))

## Step-by-Step Troubleshooting

1. **Check the tri-color light and screen** for any alarm — see [Indicator Lights](../reference/indicator-lights.md) to read what the current light/voice combination means.
2. **Check all E-Stop buttons** on the vehicle (front and rear positions) and any wireless remote E-Stop in use — make sure none are pressed. Per the manual, a pressed E-Stop shows a flashing red light in Auto mode and blocks the vehicle from operating until it is pulled back out.
3. **Check the mode switch** — confirm the rotary switch is in the Automatic position, not Manual or Maintenance (see [Auto / Manual Mode](../operations/auto-manual-mode.md)).
4. **Check battery level** on the AGV screen — if critically low, go to [Charging Problem](charging.md).
5. **Check the path ahead** for another AGV, a person, a pallet, or a closed door blocking the route.
6. **Read the exact code** shown, if any, and cross-check it against [Alarm Codes](../reference/alarm-codes.md).
7. If no E-Stop is pressed and the mode is correct: press **Reset** on the AGV control panel (this clears the current error code and abnormal status marks, per the manual), then press **Start**.
8. If the AGV was recently in Manual mode (`ManualMode` code), a Reset is specifically required before it will resume Automatic operation.
9. Resume or reassign the task from RCS if it did not resume automatically.

## Expected Result

The alarm clears, the tri-color light returns to the normal Automatic-standby or moving pattern (see [Indicator Lights](../reference/indicator-lights.md)), and the current or next task proceeds normally.

## If Not Solved

If the AGV still will not move after checking E-Stops, mode, path, and battery, and a Reset does not clear it, do not keep pressing Reset repeatedly. Note the exact alarm name/code shown and proceed to Escalation.

## Escalation

This is beyond routine Level 1 checks. Record the exact alarm name/code, the AGV ID, and what you already checked, and hand this off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact, per your site's internal process. This project does not currently have an online or phone VisionNav support line, so escalation is handled internally rather than through a support hotline.

## Information Required

- AGV ID
- Exact alarm name/code shown (if any)
- What was checked already (E-Stop, mode, path, battery)
- Location / Station ID
- Task ID (if applicable)
- Time of occurrence
