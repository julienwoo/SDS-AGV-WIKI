---
title: Storage Bin Status Mismatch
severity: yellow
accessLevel: 1
alarmCode: No formal alarm code documented — shown as fault name on RCS
---

## Symptom

- In an area monitored by the "明眸" (Mingmou) vision camera system, the AGV is dispatched to deliver a pallet to a storage bin that the camera shows as already occupied
- Fault name shown: 明眸库位状态异常 (storage bin status mismatch, "明眸" vision system)

## Alarm / Error

RCS's bin status disagrees with what the vision camera actually sees at that location — the destination bin already has cargo in it, but the task was dispatched there anyway (see [StorageBin Occupancy and Usage Status](../reference/rcs-ui-basics.md#4-storagebin-occupancy-and-usage-status)).

## Recovery Steps

1. Do not let the AGV drop off at that location. Pause or cancel the task before it unloads.
2. Confirm what is actually in the bin, then correct the bin's status in RCS so it matches reality.
3. Reassign the delivery to an available location.
