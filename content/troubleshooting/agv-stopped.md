---
title: AGV Stopped / Not Moving
severity: red
accessLevel: 1
alarmCode: Varies (see Alarm Codes reference)
---

## Symptom

The AGV is powered on, shows no critical alarm on its screen, but it will not move and does not accept or execute new tasks from RCS.

## Alarm Code

May appear with no code (idle/blocked) or with a generic motion-fault code. Check the AGV's screen or RCS AGV Status panel for any active alarm before proceeding — if one is shown, follow that specific alarm's article instead (see **Alarm Codes** reference).

## Severity

🔴 High — production impact. AGV is not performing tasks.

## Access Level

🟢 **Operator – Level 1** — you can perform this check yourself.

## Possible Causes

- AGV is in Manual mode instead of Auto mode
- An unconfirmed alarm is present but not visible at a glance
- AGV is waiting for a blocked path (another AGV, obstacle, closed door)
- AGV battery is too low to run a task
- AGV has no task assigned (idle is normal — not a fault)
- E-Stop is pressed on the AGV or nearby pendant

## Step-by-Step Troubleshooting

1. **Check the AGV screen** for any alarm banner, even a minor one.
2. **Check E-Stop buttons** on the AGV body and any nearby wall/pendant E-Stops — make sure none are pressed.
3. **Check the mode indicator** — confirm the AGV is in **Auto** mode, not **Manual** (see [Auto / Manual Mode](../operations/auto-manual-mode.md)).
4. **Check battery level** — if critically low, move to [Charging Problem](charging.md).
5. **Check the path ahead** — look for another AGV, a person, a pallet, or a closed door blocking the route.
6. **Check RCS AGV Status** — confirm the AGV shows as `Idle`, `Blocked`, or `Fault` (see [AGV Status](../reference/agv-status.md)).
7. If status is `Blocked`: clear the obstruction, wait 10–15 seconds for the AGV to re-plan.
8. If status is `Fault`: perform a **Reset** on the AGV control panel, then confirm **Ready**.
9. Resume or reassign the task from RCS if it did not resume automatically.

## Expected Result

AGV status returns to `Idle` or `Running`, motion resumes, and the current or next task proceeds normally.

## If Not Solved

If the AGV still will not move after the steps above, do not repeatedly reset the AGV. Note the exact status shown in RCS and proceed to Escalation.

## Escalation

Contact **VisionNav Service** — see [Contact VisionNav Service](../reference/faq.md#contact-visionnav-service).

## Information Required

- AGV ID
- Alarm Code (if any)
- Screenshot of AGV screen and RCS status
- Location / Station ID
- Task ID (if applicable)
- Time of occurrence
