---
title: Charging (Daily Operation)
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Standard process for the AGV docking to charge automatically, or using the manual charger, and undocking afterward.

## Access Level

🟢 **Operator – Level 1**

## Background

The AGV runs on a lithium iron phosphate battery. In Automatic mode, when a vehicle's battery is low and it's idle, RCS automatically selects an available charging station and sends it there — no operator action is normally required. The station (model VN-SAC-48V200A) uses an extending push-rod mechanism: the AGV drives in and stops at the charging position, the station's brush block extends to press against the AGV's brush plate, the AGV opens its battery port relay, and charging begins once the station detects battery voltage. A manual charger (model VN-SAD-48V40A) is also available for sites that use it, connecting via a dedicated manual charging port on the battery.

## Step-by-Step Procedure

### Automatic Charging (normal operation)

1. RCS automatically routes an idle, low-battery AGV to an available charging station — no operator action required.
2. The AGV docks itself; watch for the charging station's light to turn **green** (charging) — see [Indicator Lights](../reference/indicator-lights.md) for the full light reference.
3. Charging stops automatically once the battery management system reports the battery full, or the configured charge time/cut-off current is reached.
4. Once sufficiently charged, RCS automatically releases the AGV back into the task pool.

### Manual Charging (when needed)

1. Switch the AGV to Manual mode if it needs to be moved to the charging station or connector by hand (see [Auto / Manual Mode](auto-manual-mode.md)).
2. Position the AGV so its charging contacts align with the station's or manual charger's contacts.
3. Confirm the charging station's indicator light shows the active charging (green) state, not standby (yellow) or fault (red + buzzer).
4. Switch back to Auto mode once docked, if the AGV should resume automatic charging management.
5. To undock, drive the AGV forward away from the station, or release it via RCS.

## Expected Result

The charging station shows a green light, the AGV's battery percentage increases steadily while docked, and it undocks cleanly when charging completes or is intentionally interrupted.

## If Not Solved

If the AGV does not begin charging once docked, or the station shows a yellow/red light instead of green, see [Charging Problem](../troubleshooting/charging.md).

## Escalation

For repeated charging failures, charging-station hardware faults, or anything involving the charger's internal electrical components, do not open the unit yourself. Record the AGV ID, station ID, and what the station's light showed, and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Charging station ID
- Time of occurrence
