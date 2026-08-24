---
title: Alarm Codes
severity: green
accessLevel: 1
alarmCode: All
---

## Overview

This table lists example alarm codes referenced throughout this wiki. Codes are project-specific — always confirm exact codes and thresholds against your project's SOP, as your VisionNav engineer adds more over time.

| Code | Category | Meaning | Severity | Related Article |
|---|---|---|---|---|
| SL-101 | Safety | Object in protective field (front) | 🔴 Red | [Safety Laser Alarm](../troubleshooting/safety-laser.md) |
| SL-102 | Safety | Object in protective field (rear) | 🔴 Red | [Safety Laser Alarm](../troubleshooting/safety-laser.md) |
| SL-201 | Safety | Safety laser fault / contamination | 🔴 Red | [Safety Laser Alarm](../troubleshooting/safety-laser.md) |
| LOC-301 | Navigation | Localization confidence low | 🔴 Red | [Localization Problem](../troubleshooting/localization.md) |
| LOC-302 | Navigation | Position lost / relocalization required | 🔴 Red | [Localization Problem](../troubleshooting/localization.md) |
| CHG-401 | Power | Charging contact fault / not charging | 🟡 Yellow | [Charging Problem](../troubleshooting/charging.md) |
| CHG-402 | Power | Charging timeout | 🟡 Yellow | [Charging Problem](../troubleshooting/charging.md) |
| COM-501 | Network | AGV offline / heartbeat lost | 🟡 Yellow | [Communication Problem](../troubleshooting/communication.md) |
| COM-502 | Network | Network communication fault | 🟡 Yellow | [Communication Problem](../troubleshooting/communication.md) |
| TSK-601 | Task | Task timeout / stuck in progress | 🟡 Yellow | [Task Execution Problem](../troubleshooting/task-execution.md) |
| TSK-602 | Task | Load handling (fork/mechanism) fault | 🟡 Yellow | [Task Execution Problem](../troubleshooting/task-execution.md) |
| ESTOP-001 | Safety | Emergency stop active | 🔴 Red | [Emergency Stop Recovery](../operations/emergency-stop.md) |

## Severity Legend

- 🔴 **Red** — Stops operation. Requires immediate attention.
- 🟡 **Yellow** — Degrades operation. Should be addressed promptly but is not an immediate safety issue.
- 🟢 **Green** — Informational / normal operating state.

## Adding New Codes

VisionNav engineers: when a new alarm code is introduced on a project, add a row here and create/update the matching troubleshooting article, then update `content/manifest.json` with the new keywords. See the README for the full content maintenance workflow.
