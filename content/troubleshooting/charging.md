---
title: Charging Problem
severity: yellow
accessLevel: 1
alarmCode: ChargingError 0x0240002D / RatherLowBattery 0x02400012 / LowBattery 0x02200103
---

📁 **Reference material** — full alarm-code detail from the AGV manual, kept for lookup; not part of the current Troubleshooting quick-reference list.

## Symptom

- Docked at charger but battery % not rising, or charging much slower than usual
- Battery drains unusually fast during normal operation
- Charging station's own light is red + buzzer (station fault, not AGV)

## Alarm / Error

Shown on AGV screen and RCS:

- `ChargingError` (0x0240002D) — charging speed too slow repeatedly
- `RatherLowBattery` (0x02400012) — low battery, charge manually
- `LowBattery` (0x02200103) — low battery (general)

## Recovery Steps

1. Check the charging station's own light — red + buzzer = station fault, not the AGV → escalate
2. Confirm AGV is docked squarely at the charging position, not stopped short or angled
3. Wipe charging contacts (AGV + station) with a dry cloth if dusty → see [Charging (Daily Operation)](../operations/charging.md) for the full dock/undock steps
4. Undock and redock once
5. Watch 2–3 min — station light should go green (charging)
6. Alarm is `RatherLowBattery`/`LowBattery` and AGV isn't at a charger yet → route it to the nearest one now
