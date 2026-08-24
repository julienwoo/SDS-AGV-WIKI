---
title: Localization Problem
severity: red
accessLevel: 2
alarmCode: LOC-301 / LOC-302
---

## Symptom

AGV reports lost position, low localization confidence, drifts visibly off the expected path, or stops with a localization-related alarm.

## Alarm Code

`LOC-301` — Localization confidence low
`LOC-302` — Position lost / relocalization required

## Severity

🔴 High — AGV cannot safely navigate until localization is restored.

## Access Level

🟡 **Supervisor – Level 2** — operators should not attempt to relocalize or move the AGV manually without supervisor involvement, since incorrect manual driving can make the problem worse.

## Possible Causes

- Floor markers, reflectors, or QR tags used for localization are dirty, moved, or missing
- New objects/racking permanently changed the environment used by the map
- AGV was manually moved (e.g. lifted, pushed) while powered off
- Lighting conditions changed significantly (for vision-based localization)
- Wheel slippage on a wet or contaminated floor

## Step-by-Step Troubleshooting

1. **Do not drive the AGV manually** yet — first observe where it believes it is versus where it actually is.
2. **Check RCS** — compare the AGV's shown position on the map against its real position on the floor.
3. **Check reflectors/markers** near the AGV's last known good position — look for anything missing, dirty, or displaced.
4. **Check the floor** for new obstacles, spills, or layout changes not present on the map.
5. If the discrepancy is minor, use the **RCS relocalization / re-init function** (Supervisor access) to reset the AGV's position at a known reference point.
6. **Confirm the AGV re-establishes confidence** above the normal threshold shown in RCS.
7. **Resume the task**.

## Expected Result

Localization confidence returns to normal range, AGV position on the map matches its real position, and navigation resumes accurately.

## If Not Solved

If confidence remains low after relocalization, or the AGV repeatedly loses position in the same area, stop running AGVs through that zone and escalate — this often indicates a map or environment change that needs engineering review.

## Escalation

Contact **VisionNav Service**. Map edits, reflector layout changes, and localization parameter tuning are **Level 3** items and must not be changed on site without VisionNav involvement.

## Information Required

- AGV ID
- Alarm Code (LOC-301 / LOC-302)
- Screenshot of RCS map showing AGV position vs. actual position
- Location / Station ID / Zone
- Task ID (if applicable)
- Time of occurrence
- Any recent changes to the area (new racking, spill, moved markers)
