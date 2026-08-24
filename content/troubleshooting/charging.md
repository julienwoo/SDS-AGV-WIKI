---
title: Charging Problem
severity: yellow
accessLevel: 1
alarmCode: CHG-401 / CHG-402
---

## Symptom

AGV will not start charging when docked, charges much slower than usual, or the battery level drops unusually fast during normal operation.

## Alarm Code

`CHG-401` — Charging contact fault / not charging
`CHG-402` — Charging timeout

## Severity

🟡 Medium — usually not an immediate safety issue, but left unresolved it can take the AGV out of service.

## Access Level

🟢 **Operator – Level 1**

## Possible Causes

- Charging contacts (AGV or station) are dirty, oxidized, or misaligned
- AGV did not dock precisely at the charging station
- Charging station has no power (breaker tripped, cable unplugged)
- Battery is nearing end of life
- Ambient temperature is outside the normal charging range

## Step-by-Step Troubleshooting

1. **Check the charging station power** — confirm the indicator light on the station is on and the breaker/plug is connected.
2. **Check docking alignment** — confirm the AGV is fully and squarely docked at the charging point, not stopped short or at an angle.
3. **Check the charging contacts** on both the AGV and the station for dirt, dust, or corrosion; wipe gently with a dry cloth if needed.
4. **Undock and redock** the AGV once, either automatically via RCS or using the manual charging trigger.
5. **Check the AGV screen / RCS** for the charging current or percentage increasing over 2–3 minutes.
6. **Reset the AGV** if the charging alarm persists after redocking.

## Expected Result

AGV shows an increasing charge percentage and the charging alarm clears within a few minutes of redocking.

## If Not Solved

If the AGV still will not charge after redocking and cleaning the contacts, or the battery drains abnormally fast during normal runtime, remove the AGV from the active task pool to avoid a mid-task shutdown, and escalate.

## Escalation

Contact **VisionNav Service**. Battery replacement and charging-station hardware repair are handled by VisionNav or the designated hardware vendor.

## Information Required

- AGV ID
- Charging station ID
- Alarm Code (CHG-401 / CHG-402)
- Screenshot of charging status / battery percentage trend
- Location / Station ID
- Time of occurrence
