---
title: Task Execution Problem
severity: yellow
accessLevel: 2
alarmCode: See table below (ForkCollision, LoadSafetyCheckFail, NoGoodsDetected, etc.)
---

## Symptom

AGV accepts a task from RCS but fails to complete it — it stops mid-task, fails a load/unload check, cannot find the expected cargo or storage location, or the task shows **Task Error** in RCS instead of progressing to Loaded / Unloaded / Completed (see [AGV Status](../reference/agv-status.md)).

## Alarm Code

This is the broadest category of alarm in the manual — most load/fork/cargo-detection faults land here. Common ones:

| Code | Name | Meaning |
|---|---|---|
| 0x02400001 | ForkCollision | Fork collision — move the vehicle manually or clear obstacles |
| 0x02400002 | Collision | Vehicle collision — drive manually or remove obstacles |
| 0x02400010 | ForkObliquity | Fork inclination angle not zero when moving in/out |
| 0x02400011 | LiftZCheckFail | Fork height verification failure |
| 0x02400015 | GoodsWidthCheckFail | Cargo too wide |
| 0x02400016 | GoodsHeightCheckFail | Cargo too high |
| 0x0240001D | UnrecognizedBarcode | Cargo barcode not recognized |
| 0x0240001E | LoadError | Fork press switches not pressed at the same time when loading |
| 0x02400025 | UnloadSafetyCheckFail | Not enough space for cargo unloading |
| 0x02400026 | LoadSafetyCheckFail | Cargo loading security exception (perception module) |
| 0x02400027 | NoGoodsDetected | Cargo detection timeout — no cargo present |
| 0x02400028 | GoodsDetected | Detected height doesn't match target (front-alignment unloading) |
| 0x02400029 | NoStorageDetected | No storage location detected |
| 0x0240002A | EarlyTouchGoods | Touching cargo too early |
| 0x0240002B | LargeGoodsAngle | Excessive cargo angle |
| 0x0240002C | LargeGoodsShift | Cargo shifted too far left/right |
| 0x0240002F | NoneTargetBarcode | Target barcode not recognized |

Full list: [Alarm Codes](../reference/alarm-codes.md).

## Severity

🟡 Medium — impacts throughput and may indicate a load, station, or mechanical issue.

## Access Level

🟡 **Supervisor – Level 2** — cancelling or reassigning a task should be done by a supervisor to avoid losing track of load state.

## Possible Causes

- Load (pallet/cargo) is mispositioned, oversized, angled, or shifted at the pickup point (`GoodsWidthCheckFail`, `GoodsHeightCheckFail`, `LargeGoodsAngle`, `LargeGoodsShift`)
- No cargo actually present at the expected pickup point (`NoGoodsDetected`)
- Cargo barcode is missing, damaged, or unreadable (`UnrecognizedBarcode`, `NoneTargetBarcode`)
- Destination storage location doesn't have room, or isn't detected correctly (`UnloadSafetyCheckFail`, `NoStorageDetected`)
- Fork mechanism didn't seat the load correctly (`ForkObliquity`, `LiftZCheckFail`, `LoadError`)
- Physical collision with an obstacle at the fork or vehicle body (`ForkCollision`, `Collision`)

## Step-by-Step Troubleshooting

1. **Read the exact code** on the AGV screen or in RCS — the table above tells you which category of problem it is (cargo condition vs. destination vs. fork mechanism vs. collision).
2. **Check the AGV's physical state** — is it correctly positioned at the pickup/drop-off point, and is the fork in a normal, level position?
3. **Check the load** — is the pallet/cargo present, correctly placed, within size limits (max cargo dimensions per spec: 2000×2000×2500 mm), and is its barcode legible?
4. **Check the destination location** — confirm it's clear, not already occupied, and matches what RCS expects.
5. **If safe**, clear any physical obstruction around the fork/mechanism (`ForkCollision`/`Collision`).
6. **Cancel the task** in RCS (Supervisor action) if it cannot proceed, rather than leaving it stuck in **Task Error**.
7. **Manually verify load state** — is the load still on the AGV, on the station, or on the floor? — before reassigning.
8. **Reassign or re-create the task** once the physical situation is confirmed safe and correct.

## Expected Result

The physical issue (cargo condition, destination, or fork position) is resolved, the task either resumes or is safely cancelled, and a fresh task progresses through Begin Execution → Loaded → Unloaded → Completed normally.

## If Not Solved

If the fork mechanism does not respond correctly, makes abnormal noise, or the same code fires repeatedly at the same station regardless of load condition, stop sending tasks to that station/AGV pairing and escalate — repeated `ForkObliquity`/`LiftZCheckFail`/`ForkCollision` in particular can indicate a mechanical issue, not a load-placement issue.

## Escalation

Fork/lift mechanism repairs and repeated task failures that aren't explained by load condition are handled by trained maintenance personnel, not resolved on the floor. Record the exact alarm name/code, the task ID, and station(s) involved, and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Task ID
- Exact alarm name/code
- Screenshot of RCS task detail
- Station ID (pickup and destination)
- Load description (type, approximate size/weight)
- Time of occurrence
