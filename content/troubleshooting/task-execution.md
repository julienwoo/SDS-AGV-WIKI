---
title: Task Execution Problem
severity: yellow
accessLevel: 2
alarmCode: See table below (ForkCollision, LoadSafetyCheckFail, NoGoodsDetected, etc.)
---

## Symptom

- Accepts a task but stalls, fails a load/unload check, or can't find expected cargo/location
- RCS shows **Task Error** instead of progressing Loaded → Unloaded → Completed (see [AGV Status](../reference/agv-status.md))
- Pallet ends up rejected/diverted instead of at its normal destination — this can be expected system behavior, not a fault → see [Diagnosing System-Level Issues](../system-knowledge/diagnosis-guide.md)

## Alarm / Error

Shown on AGV screen and RCS — common ones:

| Code | Name | Meaning |
|---|---|---|
| 0x02400001 | ForkCollision | Fork collision |
| 0x02400002 | Collision | Vehicle collision |
| 0x02400015 | GoodsWidthCheckFail | Cargo too wide |
| 0x0240001D | UnrecognizedBarcode | Cargo barcode not recognized |
| 0x02400026 | LoadSafetyCheckFail | Cargo loading security exception |
| 0x02400027 | NoGoodsDetected | No cargo detected at pickup |
| 0x02400029 | NoStorageDetected | No storage location detected |
| 0x0240002F | NoneTargetBarcode | Target barcode not recognized |

Full list: [Alarm Codes](../reference/alarm-codes.md)

## Recovery Steps

1. Read the exact code — cargo condition vs. destination vs. fork mechanism vs. collision
2. Check AGV is correctly positioned at the pickup/drop-off point, fork level
3. Check the load — present, correctly placed, barcode legible
4. Check destination location — clear, not already occupied
5. Clear any physical obstruction around the fork (`ForkCollision`/`Collision`) if safe
6. Can't proceed → cancel the task in RCS rather than leaving it stuck in Task Error
7. Verify load state (on AGV / station / floor) before reassigning
8. If a Level 4+ RoboTune error required you to finish the pickup/drop-off by hand → [Manually Complete a Task](../operations/manual-task-complete.md) to notify RCS
