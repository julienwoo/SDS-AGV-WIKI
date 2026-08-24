---
title: Safety Laser Alarm
severity: red
accessLevel: 1
alarmCode: SL-101 / SL-102 / SL-201
---

## Symptom

AGV stops abruptly and a **Safety Laser** (or "Safety Field", "Obstacle Detected") alarm is shown on the AGV screen and/or in RCS.

## Alarm Code

`SL-101` — Object in protective field (front)
`SL-102` — Object in protective field (rear)
`SL-201` — Safety laser fault / contamination

## Severity

🔴 High — this is a safety-critical stop. Always treat it seriously, even if it seems like a false trigger.

## Access Level

🟢 **Operator – Level 1**

## Possible Causes

- A person, forklift, pallet, or object entered the safety field
- Reflective or shiny surfaces near the laser causing a false reading
- Dust, dirt, or condensation on the laser lens
- Safety field size incorrectly triggered on a ramp, slope, or doorway threshold
- Laser hardware fault

## Step-by-Step Troubleshooting

1. **Check the safety area** around the AGV (front and rear) for people, objects, or obstacles.
2. **Remove the obstacle** if one is present, and make sure the path is fully clear.
3. **Check the laser status** on the AGV screen — confirm no fault icon is shown for the laser itself.
4. **Wipe the laser lens** gently with a clean, dry, lint-free cloth if it looks dusty or dirty. Do not use solvents.
5. **Reset the AGV** using the Reset button on the control panel.
6. **Confirm Ready** — the status should return to `Ready` or `Idle` with no active alarm.
7. **Resume the task** from the AGV panel or RCS.

## Expected Result

Alarm clears, AGV status returns to `Ready`/`Idle`, and the task resumes automatically or after a manual resume.

## If Not Solved

If the alarm re-triggers immediately with no visible obstacle, or the laser fault code (`SL-201`) persists after cleaning, stop attempting resets — repeated resets do not fix a hardware or configuration issue and may mask a real safety concern.

## Escalation

Contact **VisionNav Service** immediately. Do not modify safety field parameters yourself — this is a **Level 3** configuration item.

## Information Required

- AGV ID
- Alarm Code (SL-101 / SL-102 / SL-201)
- Screenshot of the alarm screen
- Location / Station ID
- Task ID (if applicable)
- Time of occurrence
- Description of what was near the AGV when it stopped
