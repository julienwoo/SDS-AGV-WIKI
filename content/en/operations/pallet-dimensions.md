---
title: Pallet & Cargo Dimensions
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Reference, not a fault. Standard pallet/cargo dimensions and orientation rules for this project, per the project's technical agreement.

## Access Level

🟢 **Operator – Level 1**

## Pallets used on this project

Wooden pallets of varying shapes, up to **1400 mm (L) × 2100 mm (W) × 2500 mm (H)**. Maximum combined weight (cargo + carrier): **500 kg**.

## Orientation — which side faces the AGV

This is the rule behind [Site Operation Best Practices](../reference/site-best-practices.md) Section 5:

- A pallet with a depth of **1.2 m or less** can be presented to the AGV from its **short side**.
- A pallet deeper than **1.2 m — including the 1.4 m pallets used on this site** — must be **rotated by the operator** and presented to the AGV from its **long side** instead.

Getting this wrong doesn't just risk a rejected pickup — a deep pallet presented the wrong way leaves the AGV carrying an unstable load that can sway in transit.

## If a pallet's dimensions aren't recognized

If the AGV repeatedly times out trying to detect a pallet that looks correctly placed, its dimensions may not be registered in the system yet — see [Cargo Detection Timeout](../troubleshooting/perception-timeout.md) for what to do.

## Escalation

For a pallet type not covered here, or any non-standard/damaged pallet, do not run it through the automated AGV flow — see Section 6 (Non-Standard Pallets) of [Site Operation Best Practices](../reference/site-best-practices.md) and hand off to your site's process.
