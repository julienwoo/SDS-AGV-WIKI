---
title: Perception Detection Timeout
severity: yellow
accessLevel: 2
alarmCode: No formal alarm code documented — shown as fault name on RCS/AGV
---

🧭 **Prevention** — see Section 5 (Pallet Placement) of [Site Operation Best Practices](../reference/site-best-practices.md): correct lateral offset/angle before it reaches the AGV.

## Symptom

- AGV stops trying to verify the pallet before pickup, even though nothing looks obviously wrong
- Fault name shown: 感知检测超时 (Perception detection timeout)

## Alarm / Error

The AGV's perception system times out trying to verify the pallet — usually a placement or pallet-dimension issue, not a hardware fault.

## Recovery Steps

1. Check the pallet's placement — lateral offset or angle too large? Correct it
2. Still timing out after correcting placement → the pallet's dimensions are likely not registered in the system: move the pallet by hand to the designated measurement area, measure it, and enter the dimensions into the system
3. [Manually complete](../operations/manual-task-complete.md) the current task
