---
title: Insufficient Adaptive Insertion Space
severity: yellow
accessLevel: 2
alarmCode: No formal alarm code documented — shown as fault name on RCS/AGV
---

## Symptom

- AGV can't find enough clearance to insert its forks into a pallet it can otherwise reach
- Fault name shown: 自适应空间不足 (insufficient adaptive insertion space)

## Alarm / Error

The AGV's adaptive picking can't find enough clearance to insert the forks.

## Recovery Steps

Try in order:

1. **Plan 1**: manually move the vehicle to a position where it can insert the forks, then continue the task
2. **Plan 2**: cancel the order → confirm the AGV is clear of the path → [unlock the vehicle](../reference/rcs-ui-basics.md#3-vehicle-and-storagebin-lock-unlock) → [reset](../operations/reset.md) and start → have RCS manually complete the order
3. **Plan 3**: enter the barcode by hand and [manually complete the task](../operations/manual-task-complete.md), then manually insert the pallet by hand and continue
