---
title: Emergency Stop Recovery
severity: red
accessLevel: 1
alarmCode: EmergencyStop 0x02400003
---

## Symptom

An Emergency Stop (E-Stop) button has been pressed — on the vehicle itself, or on the optional wireless remote-control device — and the AGV is halted with motion locked out.

## Alarm Code

`EmergencyStop` (0x02400003) — "Emergency stop button pressed, please pull it up and manually calibrate vehicle for relocalization after danger cleared"

## Severity

🔴 High — this is a hard safety stop by design. Always confirm the area is safe before releasing it.

## Access Level

🟢 **Operator – Level 1**

## Background

The VNP model has **four E-Stop button positions**, at the front and rear of the vehicle. Behavior differs by mode: in **Automatic** mode, a pressed E-Stop shows a flashing red light and an alarm, and the vehicle cannot operate until it's released; in **Manual** mode, there is no alarm, but the handheld device's controls are disabled while the E-Stop is pressed. If the site has the optional wireless remote-control E-Stop device, its four buttons (A/B/C/D) correspond to Emergency Stop, Pause, Start, and Reset respectively.

## Step-by-Step Procedure

1. **Identify why the E-Stop was pressed** — was it a genuine emergency, an accidental press, or a test?
2. **Check the area around the AGV thoroughly** for people, obstacles, or any unsafe condition — check all four E-Stop positions, since more than one may have been pressed.
3. **Confirm it is safe to resume.** If there was a genuine safety incident, do not proceed — report it through your site's safety process first.
4. **Pull the E-Stop button back out** to release it. Per the manual, only pull it out once the danger has actually been cleared.
5. **Manually calibrate/relocalize the vehicle if prompted** — the alarm text specifically calls for this after the danger is cleared, since a hard stop can affect the vehicle's confidence in its own position (see [Localization Problem](../troubleshooting/localization.md) if the alarm persists as a localization issue rather than clearing).
6. **Reset the AGV** using the Reset button on the control panel to clear the alarm.
7. **Confirm the tri-color light returns to normal** and RCS shows the AGV as available.
8. **Switch to Auto mode** if needed and resume the task.

## Expected Result

The E-Stop alarm clears, the AGV returns to its normal standby light pattern, and resumes normal operation.

## If Not Solved

If the AGV does not reset after releasing the E-Stop, or the alarm reappears immediately, do not keep resetting — check whether a second E-Stop position is still pressed, or whether there is a hardware fault.

## Escalation

If the AGV will not reset after a genuine E-Stop release, or the E-Stop was triggered by a real safety incident, do not keep attempting resets. Record which E-Stop position was pressed and why, and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process — and follow your site's safety incident reporting process for any genuine incident, separately from this technical escalation.

## Information Required

- AGV ID
- Which E-Stop was pressed (vehicle position — front/rear — or wireless remote)
- Reason for the E-Stop
- Screenshot of AGV/RCS status
- Time of occurrence
