---
title: 3D Protection Close-Range Trigger
severity: yellow
accessLevel: 1
alarmCode: No formal alarm code documented — shown as fault name on RCS/AGV
---

🧭 **Prevention** — see Section 4 (Stretch Wrap Film) of [Site Operation Best Practices](../reference/site-best-practices.md): no loose or protruding film, fully adhered to the load.

## Symptom

- AGV stops even though the path looks clear
- Fault name shown: 立体防护触发 (3D protection close-range trigger)

## Alarm / Error

Loose or flapping plastic wrap, or loose paper, around the pallet trips the AGV's 3D protection zone — a separate system from the safety laser (see [Close-Range Laser Triggered](laser-triggered.md) if the fault name is laser-related instead).

## Recovery Steps

1. Check for and remove any loose or flapping plastic wrap or paper around the pallet and goods.
2. Still triggering? Check the AGV's Servo Display to pinpoint the obstacle's exact location, then clear it.
3. Retry.
