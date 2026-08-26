---
title: Communication Problem
severity: yellow
accessLevel: 2
alarmCode: NetworkError 0x02300023 / ControlCenterCommunicationError 0x02300020
---

📁 **Reference material** — full alarm-code detail, kept for lookup. For the current field procedure, see [AGV Disconnected](agv-disconnected.md) in Troubleshooting.

## Symptom

- Shows offline/disconnected in RCS, status stops updating
- AGV itself looks powered on and otherwise fine

## Alarm / Error

Shown on AGV screen and RCS:

- `ControlCenterCommunicationError` (0x02300020) — disconnected from control center
- `NetworkError` (0x02300023) — network connection abnormal
- `ControlCenterCommunicateDelayed` (0x02200105) / `Network` (0x02200106) — short-time abnormality, may self-clear
- `McuCommunicationError` / `McuCommunicationError1` (0x0220020C / 0x02300004) — onboard controller issue, not Wi-Fi

## Recovery Steps

1. Check RCS — is it just this one AGV, or multiple?
2. Multiple AGVs affected → network/RCS-side issue, escalate now, skip the rest
3. One AGV, code is `NetworkError`/`ControlCenterCommunicationError`/`Network`/`ControlCenterCommunicateDelayed` → check AGV's Wi-Fi status on screen, check for known weak-signal area
4. Wait 1–2 min — short-time codes often self-clear
5. Code is `McuCommunicationError`/`McuCommunicationError1` → not a network issue, do not attempt a network fix, pull AGV from task pool and escalate
6. Still fully offline after waiting → carrying a load? Have RCS [Manually Complete](../reference/rcs-ui-basics.md#4-task-and-order-states) the order first — then shut down and restart the AGV's onboard control (AGVpro). No load → just shut down and restart AGVpro directly
