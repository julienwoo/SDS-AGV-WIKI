---
title: Safety Laser Alarm
severity: red
accessLevel: 1
alarmCode: LaserBreakdown 0x02300021 / LaserClose 0x02100206 / LaserCloseDisabled 0x02200209
---

## Symptom

AGV stops abruptly and a laser-related alarm is shown on the AGV screen and/or in RCS.

## Alarm Code

- `LaserBreakdown` (0x02300021) — laser sensor malfunction (hardware-level fault, not a normal obstacle stop)
- `LaserClose` (0x02100206) — close-range laser trigger (an object entered the short-range protection zone)
- `LaserCloseDisabled` (0x02200209) — close-range/proximity protection has been shielded or disabled

## Severity

🔴 High — this is a safety-critical stop. Always treat it seriously, even if it seems like a false trigger.

## Access Level

🟢 **Operator – Level 1** for a normal obstacle-triggered stop. Escalate immediately (do not attempt fixes) for `LaserBreakdown` or if `LaserCloseDisabled` appears unexpectedly.

## How the laser protection works

The VNP15(VL)-66 uses a 2D safety laser scanner with three concentric zones in the direction of travel — short-range, medium-range, and long-range — plus lateral protection width. Per the manual: in the short-range zone the vehicle stops immediately when an object appears; in the medium- and long-range zones it decelerates instead of stopping outright. The size of these zones grows with vehicle speed and with the width of the vehicle/cargo, and shrinks as speed drops — so the same object can trigger a slowdown at high speed but nothing at all when the vehicle is nearly stopped. The laser is mounted to detect at ankle height; objects entirely above or below the 2D scan plane will not be detected by it. This is why the anti-collision bumper and fork-tip protection exist as backup layers, not why they're a substitute for keeping the laser field clear.

## Possible Causes

- A person, forklift, pallet, or object entered the laser's protection zone (`LaserClose`)
- Dust, dirt, or condensation on the laser lens causing a false or intermittent reading
- Reflective or shiny surfaces near the laser interfering with the scan
- The laser has been shielded/disabled for a special zone or maintenance reason and wasn't re-enabled (`LaserCloseDisabled`)
- Laser hardware fault (`LaserBreakdown`) — not something clearing the path will fix

## Step-by-Step Troubleshooting

1. **Check the area around the AGV** (front, sides, and rear, per the zone directions) for people, objects, or obstacles that could have entered the protection field.
2. **Remove the obstacle** if one is present, and make sure the path is fully clear before proceeding.
3. **Read the exact alarm name** on screen — if it says `LaserBreakdown`, stop here and go to Escalation; do not clean the lens or reset repeatedly, this is a sensor hardware fault.
4. **If it's `LaserClose`**, gently wipe the laser lens with a clean, dry, lint-free cloth if it looks dusty or dirty. Do not use solvents.
5. **Check for `LaserCloseDisabled`** — if this is shown and the AGV is not supposed to be in a special/shielded-protection area right now, do not manually re-enable or bypass laser settings yourself; this touches Level 3 safety configuration.
6. **Reset the AGV** using the Reset button on the control panel (only after confirming the path is clear and the code is `LaserClose`, not `LaserBreakdown`).
7. **Confirm the alarm clears** and the AGV returns to its normal standby/moving light pattern.
8. **Resume the task** from the AGV panel or RCS.

## Expected Result

Alarm clears, the AGV's tri-color light returns to normal, and the task resumes automatically or after a manual resume.

## If Not Solved

If the alarm re-triggers immediately with no visible obstacle, if `LaserBreakdown` is shown at any point, or if cleaning the lens doesn't help, stop attempting resets — repeated resets do not fix a hardware or configuration issue and can mask a real safety concern.

## Escalation

Do not modify laser protection zones, speed/zone tables, or safety parameters yourself — these are **Level 3** configuration items defined per the vehicle's safety design (see the manual's 2D Laser Protection specifications) and changing them without proper revalidation is a safety risk. Record the exact alarm name/code, what was near the AGV, and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Exact alarm name/code (`LaserBreakdown` / `LaserClose` / `LaserCloseDisabled`)
- Screenshot of the alarm screen
- Location / Station ID
- Task ID (if applicable)
- Time of occurrence
- Description of what was near the AGV when it stopped
