---
title: Storage Bin Status Mismatch
severity: yellow
accessLevel: 1
alarmCode: No formal alarm code documented — shown as fault name on RCS
---

## Symptom

- A storage bin's status on RCS doesn't match what's actually in it
- Fault name shown: 明眸库位状态异常 (storage bin status mismatch, "明眸" vision system)

## Alarm / Error

The bin actually has cargo, but the system reads it as empty (see [StorageBin Occupancy and Usage Status](../reference/rcs-ui-basics.md#5-storagebin-occupancy-and-usage-status)).

## Recovery Steps

1. Manually clear all cargo from that location
