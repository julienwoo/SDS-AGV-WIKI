---
title: 3D Guard Triggered by Pallet Wrap
severity: yellow
accessLevel: 1
alarmCode: No formal alarm code documented — shown as fault name on RCS/AGV
---

## Symptom

- AGV stops even though the path looks clear
- Fault name shown: 托盘塑料膜触发立体防护 (3D guard triggered by pallet wrap)

## Alarm / Error

Loose or flapping plastic wrap around the pallet trips the AGV's 3D protection zone — a separate system from the safety laser (see [Close-Range Laser Triggered](laser-triggered.md) if the fault name is laser-related instead).

## Recovery Steps

1. Remove any loose or flapping plastic wrap from around the pallet and goods
2. Check the AGV's ServoDisplay to pinpoint the obstacle's exact location
3. Retry
