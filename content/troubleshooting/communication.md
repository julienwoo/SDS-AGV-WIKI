---
title: Communication Problem
severity: yellow
accessLevel: 2
alarmCode: NetworkError 0x02300023 / ControlCenterCommunicationError 0x02300020
---

## Symptom

AGV shows as offline/disconnected in RCS, its status stops updating, or a network/communication alarm appears even though the AGV appears powered on and stationary.

## Alarm Code

- `ControlCenterCommunicationError` (0x02300020) — "Communication disconnection with control center, please check network"
- `NetworkError` (0x02300023) — "Network connection abnormality, please check it"
- `ControlCenterCommunicateDelayed` (0x02200105) — short-time communication abnormality with control center
- `Network` (0x02200106) — short-time network disconnection
- `McuCommunicationError` / `McuCommunicationError1` (0x0220020C / 0x02300004) — MCU (onboard controller) communication sync abnormality — this is closer to an internal hardware communication fault than a network/Wi-Fi issue

## Severity

🟡 Medium — the AGV may still be physically fine, but RCS cannot dispatch or monitor it while disconnected.

## Access Level

🟡 **Supervisor – Level 2** — checking multiple AGVs and basic network status is a supervisor task.

## Possible Causes

- Local Wi-Fi access point in that zone is down, overloaded, or the AGV is roaming between access points
- Site network switch/router issue affecting the wireless network the AGV was configured to join during setup (Control Panel → Network and Internet)
- RCS server-side issue affecting multiple AGVs at once
- Onboard MCU communication sync issue (`McuCommunicationError`/`McuCommunicationError1`) — this points at the vehicle's internal controller communication rather than the site Wi-Fi, and is not something a network check will fix

## Step-by-Step Troubleshooting

1. **Check RCS** — is only this one AGV affected, or are multiple AGVs showing the same issue?
2. If **multiple AGVs** are affected at once, this is likely a network or RCS-side issue — escalate immediately rather than troubleshooting each AGV individually.
3. If only **one AGV** is affected, read the exact code: `NetworkError`/`ControlCenterCommunicationError`/`Network`/`ControlCenterCommunicateDelayed` point to the network path; `McuCommunicationError`/`McuCommunicationError1` point to the vehicle's own internal communication.
4. For a network-path code: check the AGV's Wi-Fi/network status on its screen, and check whether it's sitting in a known weak-signal area.
5. Move the AGV (manually, if safe) slightly, or wait, in case it's in a temporary dead zone or between access points.
6. For an `Mcu...` code: do not attempt a network fix — this needs the AGV taken out of the task pool and inspected by trained personnel.
7. Check RCS again after 1–2 minutes to see if the connection resumes on its own — short-time codes (`ControlCenterCommunicateDelayed`, `Network`) are explicitly described as short-time abnormalities in the manual and may self-clear.

## Expected Result

AGV reappears as connected in RCS with status updating normally, and can accept/report tasks again.

## If Not Solved

If the AGV remains disconnected after checking Wi-Fi coverage, or multiple AGVs are affected, do not keep power-cycling equipment — escalate with details of scope (how many AGVs, which zone, which exact code).

## Escalation

Network infrastructure changes and RCS server configuration are **Level 3** items. Record the exact alarm name/code, whether one or multiple AGVs are affected, and hand off to your site's trained maintenance/repair personnel, your network administrator, or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID(s) affected
- Exact alarm name/code
- Screenshot of RCS AGV list showing disconnected status
- Location / Zone / Access point (if known)
- Time disconnection started
- Whether one AGV or multiple AGVs are affected
