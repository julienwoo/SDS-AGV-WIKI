---
title: Localization Problem
severity: red
accessLevel: 2
alarmCode: LowReliability 0x02300014 / OffPath 0x0230001B
---

## Symptom

AGV reports low positioning confidence, drifts off its expected path, or stops with a localization-related alarm.

## Alarm Code

- `LowReliability` (0x02300014) — "Pose not reliable, please calibrate the vehicle and relocalize it"
- `OffPath` (0x0230001B) — "Vehicle off track, please drive the vehicle to the track manually"

## Severity

🔴 High — the AGV positions itself using its 3D laser (positioning and perception method per the vehicle's technical spec); it should not be left to navigate automatically once confidence is low.

## Access Level

🟡 **Supervisor – Level 2** — operators should not attempt to relocalize or drive the AGV back onto the path without supervisor involvement, since incorrect manual driving can make the problem worse.

## Possible Causes

- Environment used for 3D laser positioning has changed (new racking, parked equipment, large objects moved into the mapped area)
- AGV was manually moved (lifted, pushed, transported) while powered off, so its stored position no longer matches reality
- The vehicle genuinely deviated from its planned path (e.g. after a manual driving session, or after an obstacle detour) and needs to be driven back manually
- Wheel slippage on a wet, oily, or contaminated floor affecting odometry

## Step-by-Step Troubleshooting

1. **Do not drive the AGV manually yet** — first read the exact alarm: `LowReliability` means the system doesn't trust its own position; `OffPath` means it knows it's off the planned route.
2. **Check RCS** — compare the AGV's shown position on the map against its real position on the floor.
3. **Check the surrounding area** for anything that changed recently — new racking, parked pallets/equipment, or objects that weren't there when the site was mapped.
4. **For `OffPath`**: switch to Manual mode (see [Auto / Manual Mode](../operations/auto-manual-mode.md)) and drive the AGV carefully back onto its known path, watching your surroundings the whole time, per the manual's manual-driving safety rules.
5. **For `LowReliability`**: per the manual's own guidance, the vehicle needs to be manually calibrated and relocalized — this should be done by a supervisor or trained project team member using the site's established relocalization procedure, not improvised on the spot.
6. **Confirm the alarm clears** and the AGV's shown position matches its real position before switching back to Automatic.
7. **Resume the task**.

## Expected Result

The alarm clears, the AGV's position on the map matches its real position, and Automatic navigation resumes accurately.

## If Not Solved

If reliability remains low after relocalization, or the AGV repeatedly loses position in the same area, stop running AGVs through that zone and escalate — this usually indicates a map or environment change that needs engineering review, not something to keep working around manually.

## Escalation

Map edits and 3D-laser localization parameter tuning are **Level 3** items and must not be changed on site without proper review. Record the exact alarm name/code, what changed in the area (if anything), and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Exact alarm name/code (`LowReliability` / `OffPath`)
- Screenshot of RCS map showing AGV position vs. actual position
- Location / Station ID / Zone
- Task ID (if applicable)
- Time of occurrence
- Any recent changes to the area (new racking, spill, moved equipment)
