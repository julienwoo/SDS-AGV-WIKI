---
title: Communication Problem
severity: yellow
accessLevel: 2
alarmCode: COM-501 / COM-502
---

## Symptom

AGV shows as **Offline** in RCS, its status stops updating, or a network/communication alarm appears even though the AGV appears powered on and stationary.

## Alarm Code

`COM-501` — AGV offline / heartbeat lost
`COM-502` — Network communication fault

## Severity

🟡 Medium — the AGV may still be physically fine, but RCS cannot control or monitor it while offline.

## Access Level

🟡 **Supervisor – Level 2** — checking multiple AGVs and basic network status is a supervisor task.

## Possible Causes

- Local Wi-Fi access point in that zone is down or overloaded
- AGV is in a Wi-Fi dead zone or roaming between access points
- Site network switch/router issue
- AGV's onboard communication module fault
- RCS server-side issue affecting multiple AGVs at once

## Step-by-Step Troubleshooting

1. **Check RCS** — is only this one AGV offline, or are multiple AGVs affected?
2. If **multiple AGVs** are offline at once, this is likely a network or RCS-side issue — escalate immediately rather than troubleshooting each AGV individually.
3. If only **one AGV** is offline: check its Wi-Fi/network status indicator on the AGV screen.
4. **Move the AGV (manually, if safe)** slightly, or wait, in case it is in a temporary dead zone or between access points.
5. **Power-cycle the AGV's communication module** if the AGV supports a soft network reset (refer to the project-specific SOP for the exact button/menu).
6. **Check RCS again** after 1–2 minutes to see if the heartbeat resumes.

## Expected Result

AGV reappears as **Online** in RCS with status updating normally, and can accept/report tasks again.

## If Not Solved

If the AGV remains offline after a network reset, or multiple AGVs are affected, do not keep power-cycling equipment — escalate with details of scope (how many AGVs, which zone).

## Escalation

Contact **VisionNav Service**. Network infrastructure changes and RCS server configuration are **Level 3** items.

## Information Required

- AGV ID(s) affected
- Alarm Code (COM-501 / COM-502)
- Screenshot of RCS AGV list showing offline status
- Location / Zone / Access point (if known)
- Time offline started
- Whether one AGV or multiple AGVs are affected
