---
title: Safety Laser Alarm
severity: red
accessLevel: 1
alarmCode: LaserBreakdown 0x02300021 / LaserClose 0x02100206 / LaserCloseDisabled 0x02200209
---

## Symptom

- Stops abruptly mid-travel
- Red flashing light + alarm sound (see [Indicator Lights](../reference/indicator-lights.md))

## Alarm / Error

Shown on AGV screen and RCS:

- `LaserClose` (0x02100206) — object in short-range zone
- `LaserBreakdown` (0x02300021) — sensor hardware fault, not a normal stop
- `LaserCloseDisabled` (0x02200209) — proximity protection shielded/disabled

## Recovery Steps

1. Check front/side/rear — remove any person or object in the AGV's path
2. Code is `LaserBreakdown`? → **Stop here** — hardware fault, do not reset, escalate now
3. Code is `LaserClose`? → wipe laser lens with a dry cloth if dusty
4. Code is `LaserCloseDisabled` and no special zone active right now? → do not re-enable it yourself, escalate
5. Path clear + code is `LaserClose` → [Reset](../operations/reset.md), then Start
