---
title: Charging Problem
severity: yellow
accessLevel: 1
alarmCode: ChargingError 0x0240002D / RatherLowBattery 0x02400012 / LowBattery 0x02200103
---

## Symptom

AGV will not start charging when docked, charges much slower than usual, or the battery level drops unusually fast during normal operation.

## Alarm Code

- `ChargingError` (0x0240002D) — "Charging speed too slow repeatedly"
- `RatherLowBattery` (0x02400012) — "Low battery power, please charge it manually"
- `LowBattery` (0x02200103) — low battery (general)

## Severity

🟡 Medium — usually not an immediate safety issue, but left unresolved it can take the AGV out of service mid-shift.

## Access Level

🟢 **Operator – Level 1**

## Background: how charging works on this AGV

The vehicle uses a lithium iron phosphate battery (48V 200Ah) and can charge automatically at a docking-style automatic charger (model VN-SAC-48V200A) or manually via a connector on the battery. At the automatic charging station: the AGV drives in and stops at the charging position, the station's push rod extends until its brush block presses against the AGV's brush plate, the AGV opens its battery port relay, and once the station detects battery voltage it begins charging. Charging stops automatically once the BMS reports the battery full (charge time reached or cut-off current reached), or if the charger detects a fault (its own panel shows "overheated" or "abnormal").

The charging **station** has its own three-color light: green = charging, yellow = standby, red + buzzer = station fault. If the station shows red, the problem is very likely the station itself, not the AGV.

## Possible Causes

- AGV did not dock precisely at the charging position — the brush block/brush plate never made proper contact
- Charging contacts (AGV or station) are dirty, oxidized, or misaligned — the manual specifies the brush block and brush plate heights must be matched within ±5 mm across vehicles
- Charging station itself is in fault (red light + buzzer / "overheated" or "abnormal" indicator on the charger panel) — this is a station problem, not the AGV
- Charging is repeatedly slow enough to trigger `ChargingError` — may point to a station output issue or a battery nearing end of life
- Battery has dropped low enough during normal operation to trigger `RatherLowBattery` / `LowBattery` before the AGV reached a charging station

## Step-by-Step Troubleshooting

1. **Check the charging station's own light** — if it's red with a buzzer, the fault is at the station (see the station's own fault indicators); don't just keep redocking the AGV against a faulty station.
2. **Check docking alignment** — confirm the AGV is fully and squarely at the charging position, not stopped short or at an angle, so the brush block and brush plate are actually making contact.
3. **Check the charging contacts** on both the AGV and the station for dirt, dust, or corrosion; wipe gently with a dry cloth if needed (power off per the shutdown procedure before touching any electrical contact).
4. **Undock and redock** the AGV once, either automatically via RCS or by re-triggering the charging task.
5. **Watch for the sequence** described above (contact detected → battery voltage detected → charging light goes to "working"/green) over 2–3 minutes on the station display if you have access to it.
6. **If the alarm is `RatherLowBattery` or `LowBattery`** and the AGV is not yet at a charger, move/route it to the nearest charging station manually or via RCS before the battery drops further.

## Expected Result

The charging station shows a green (charging) light, the AGV's battery percentage increases, and the alarm clears within a few minutes of a successful redock.

## If Not Solved

If the AGV still will not charge after redocking and cleaning the contacts, or the charging station itself shows a fault light, remove the AGV from the active task pool to avoid a mid-task shutdown, and escalate. Do not open the charger's electrical enclosure or attempt to adjust its internal parameters (rated voltage/current) — the manual states these must not be modified after the unit leaves the factory.

## Escalation

Charging-station hardware faults and battery replacement are not something to resolve on site without training. Record the exact alarm name/code, whether the station's own light was red, and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Charging station ID
- Exact alarm name/code
- Charging station's own indicator light color (green/yellow/red)
- Screenshot of charging status / battery percentage trend
- Location / Station ID
- Time of occurrence
