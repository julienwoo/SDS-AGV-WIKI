---
title: Manual Relocalization / Calibration
severity: green
accessLevel: 2
alarmCode: N/A
---

## What it is

The AGV positions itself using its 3D laser positioning system. After certain events — an Emergency Stop, a `LowReliability` alarm, or the AGV being moved while powered off — the manual calls for the vehicle to be "manually calibrated and relocalized" before it can be trusted to navigate automatically again.

## What's documented, and what isn't

The AGV's alarm text confirms this step is required after specific alarms (`EmergencyStop`, `LowReliability` — see [Alarm Codes](../reference/alarm-codes.md)), but the operator/safety manuals reviewed for this site do not spell out the exact on-screen button sequence. That level of detail lives in the RoboTune debugging software or a site-specific commissioning procedure, not in the material this wiki is built from — so this page does not invent one.

## What to do

1. Do not keep driving the AGV automatically while its position is flagged unreliable.
2. Have a supervisor or trained team member open **RoboTune** (browser interface, same Wi-Fi network as the AGV — see the AGV's network setup in [AGV Start-up](startup.md)) and use its relocalization function, or follow your site's own documented commissioning/relocalization SOP if one exists.
3. If neither is available to you, don't guess — escalate and keep the AGV out of the automatic task pool until someone who knows the procedure has restored confidence in its position.

## Access Level

🟡 **Supervisor – Level 2** or above. This is not a routine operator action.
