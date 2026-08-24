---
title: Charging (Daily Operation)
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Standard process for docking an AGV to charge and undocking it afterward.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

### Automatic Charging (normal operation)

1. RCS automatically sends idle AGVs with low battery to an available charging station.
2. The AGV docks itself and begins charging — no operator action required.
3. Once sufficiently charged, RCS automatically releases the AGV back into the task pool.

### Manual Charging (when needed)

1. Switch the AGV to Manual mode if it needs to be moved to the charging station by hand.
2. Position the AGV so its charging contacts align with the station's contacts.
3. Confirm the charging indicator (on the AGV or station) shows an active charging state.
4. Switch back to Auto mode once docked, if the AGV should resume automatic charging management.
5. To undock, drive the AGV forward away from the station, or release it via RCS.

## Expected Result

AGV battery percentage increases steadily while docked, and it undocks cleanly when charging is complete or interrupted intentionally.

## If Not Solved

If the AGV does not begin charging once docked, see [Charging Problem](../troubleshooting/charging.md).

## Escalation

Contact **VisionNav Service** for repeated charging failures or hardware concerns.

## Information Required

- AGV ID
- Charging station ID
- Time of occurrence
