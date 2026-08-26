---
title: Close-Range Laser Triggered
severity: red
accessLevel: 1
alarmCode: LaserClose 0x02100206
---

## Symptom

- Stops abruptly mid-travel
- Red flashing light + alarm sound (see [Indicator Lights](../reference/indicator-lights.md))

## Alarm / Error

Shown on AGV screen and RCS:

- `LaserClose` (0x02100206) — object detected in the short-range zone

Different code (`LaserBreakdown`, `LaserCloseDisabled`)? → [Safety Laser Alarm](safety-laser.md) (Reference)

## Recovery Steps

1. Check front/side/rear — remove any obstacle or person in the AGV's path
2. Confirm exactly which laser tripped, then check right around it for anything fallen, blocking it, or dust (wipe the lens if dusty)
3. Path and laser confirmed clear → [Reset](../operations/reset.md), then Start
4. Still trips at the same spot → manually move the AGV past that path segment, then Reset + Start to resume from there
5. Still not resolved → [manually complete the task](../operations/manual-task-complete.md), then log the exact location + AGV ID and hand off per your site's process
