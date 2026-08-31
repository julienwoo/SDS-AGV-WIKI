---
title: Cargo Detection Timeout
severity: yellow
accessLevel: 1
alarmCode: NoGoodsDetected 0x02400027
---

🧭 **Prevention** — see Section 5 (Pallet Placement) of [Site Operation Best Practices](../reference/site-best-practices.md): correct lateral offset/angle before it reaches the AGV.

## Symptom

- AGV stops trying to verify the cargo before pickup, even though nothing looks obviously wrong
- Fault name shown: 货物检测超时 (cargo detection timeout)

## Alarm / Error

Shown on AGV screen and RCS:

- `NoGoodsDetected` (0x02400027) — "Cargo detection timeout, please check if any cargo present"

Usually a pallet-placement or pallet-dimension issue, not a hardware fault.

## Recovery Steps

1. Lateral offset or angle too large? Correct the pallet's placement, then retry.
2. Still timing out after correcting placement → the pallet's dimensions are likely not registered in the system. Move the pallet to the designated measurement area and measure it, then have the dimensions registered in RoboTune (Handling Solution Management → Basic Data Management → Pallet) — this is normally done by whoever manages your site's RoboTune commissioning, so escalate to them if you don't have access yourself.
3. [Manually complete](../operations/manual-task-complete.md) the current task if it needs to be cleared while the dimensions get fixed.
