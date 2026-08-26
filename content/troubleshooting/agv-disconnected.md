---
title: AGV Disconnected
severity: yellow
accessLevel: 2
alarmCode: Shown as Offline / Disconnected in RCS Vehicle Status
---

## Symptom

- Shows offline/disconnected in RCS, status stops updating
- AGV itself looks powered on and otherwise fine

## Alarm / Error

RCS Vehicle Status shows **Offline** or **Disconnected** (see [RCS UI Basic Concepts](../reference/rcs-ui-basics.md)). A network-related code may also be present — see [Communication Problem](communication.md) (Reference) for the full code table.

## Recovery Steps

1. Check RCS — is it just this one AGV, or multiple?
2. Multiple AGVs affected → network/RCS-side issue, escalate now, skip the rest
3. One AGV → wait 1–2 min, short-time drops often self-clear
4. Still offline, carrying a load → have RCS [Manually Complete](../reference/rcs-ui-basics.md#4-task-and-order-states) the order first, then shut down and restart the AGV's onboard control (AGVpro)
5. Still offline, no load → just shut down and restart AGVpro directly
