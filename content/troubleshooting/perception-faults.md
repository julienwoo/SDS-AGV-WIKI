---
title: Perception System Faults
severity: yellow
accessLevel: 2
alarmCode: See fault names below — no formal alarm codes documented for these
---

## Symptom

- AGV stops or won't proceed even though the path itself looks clear — its own vision/perception system won't verify the pallet or the space around it
- A storage bin's status on RCS doesn't match what's actually in the bin
- AGV can't find enough clearance to insert its forks into a pallet it can otherwise reach

## Alarm / Error

No formal alarm code documented — identified by the fault name shown on RCS/AGV. If your RCS shows a code alongside one of these, record it and use the steps below as a starting point:

| Fault Name | What it means |
|---|---|
| 托盘塑料膜触发立体防护 (3D guard triggered by pallet wrap) | Loose/flapping plastic wrap around the pallet trips the 3D protection zone — a separate system from the safety laser, see [Safety Laser Alarm](safety-laser.md) |
| 感知检测超时 (Perception detection timeout) | AGV's perception system times out trying to verify the pallet |
| 明眸库位状态异常 (Storage bin status mismatch) | Bin actually has cargo, but the system reads it as empty |
| 自适应空间不足 (Insufficient adaptive insertion space) | AGV's adaptive picking can't find enough clearance to insert the forks |

## Recovery Steps

**3D guard triggered by pallet wrap:**
1. Remove any loose or flapping plastic wrap from around the pallet and goods
2. Check the AGV's ServoDisplay to pinpoint the obstacle's exact location

**Perception detection timeout:**
1. Check the pallet's placement — lateral offset or angle too large? Correct it
2. Still timing out after correcting placement → the pallet's dimensions are likely not registered in the system: move the pallet by hand to the designated measurement area, measure it, enter the dimensions into the system, then manually complete the current task

**Storage bin status mismatch:**
1. Manually clear all cargo from that location

**Insufficient adaptive insertion space** — try in order:
1. **Plan 1**: manually move the vehicle to a position where it can insert the forks, then continue the task
2. **Plan 2**: cancel the order → confirm the AGV is clear of the path → [unlock the vehicle](../reference/rcs-ui-basics.md#3-vehicle-and-storagebin-lock-unlock) → [reset](../operations/reset.md) and start → have RCS manually complete the order
3. **Plan 3**: enter the barcode by hand and [manually complete the task](../operations/manual-task-complete.md), then manually insert the pallet by hand and continue
