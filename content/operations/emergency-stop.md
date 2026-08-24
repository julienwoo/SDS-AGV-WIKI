---
title: Emergency Stop Recovery
severity: red
accessLevel: 1
alarmCode: ESTOP-001
---

## Symptom

An Emergency Stop (E-Stop) button has been pressed — either on the AGV itself or a nearby wall/pendant E-Stop — and the AGV is fully halted with all motion locked out.

## Alarm Code

`ESTOP-001` — Emergency stop active

## Severity

🔴 High — this is a hard safety stop by design. Always confirm the area is safe before releasing it.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

1. **Identify why the E-Stop was pressed** — was it a genuine emergency, an accidental press, or a test?
2. **Check the area around the AGV** thoroughly for people, obstacles, or any unsafe condition.
3. **Confirm it is safe to resume** — if there was a genuine safety incident, do not proceed; report it through your site's safety process first.
4. **Release the E-Stop button** by twisting/pulling it out as designed for your AGV model.
5. **Reset the AGV** using the Reset button on the control panel.
6. **Confirm Ready** status on the AGV screen and in RCS.
7. **Switch to Auto mode** if needed and resume the task.

## Expected Result

E-Stop alarm clears, AGV returns to **Ready** status, and resumes normal operation.

## If Not Solved

If the AGV does not reset after releasing the E-Stop, or the E-Stop alarm reappears immediately, do not keep resetting — there may be a second E-Stop still engaged elsewhere, or a hardware fault.

## Escalation

Contact **VisionNav Service** if the AGV will not reset after a genuine E-Stop release, or if the E-Stop was triggered by a real safety incident.

## Information Required

- AGV ID
- Which E-Stop was pressed (AGV body / pendant / wall unit / location)
- Reason for the E-Stop
- Screenshot of AGV/RCS status
- Time of occurrence
