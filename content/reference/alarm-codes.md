---
title: Alarm Codes
severity: green
accessLevel: 1
alarmCode: All
---

## About this list

This table is taken directly from the VNP15(VL)-66 Operation Manual, Appendix 7 ("List of Error Code Information"). The **Name** and **Code** columns are manual-verbatim. The AGV screen and RCS normally show the **Name** or the **Code** (hex) — use either to find the row below, then open the matching troubleshooting article if one exists.

If a code you see on-site is not in this table, do not guess at its meaning. Record the exact on-screen text and hex code and hand it to your site's trained maintenance/repair personnel or project team contact — see [FAQ](faq.md).

## Level 1–2 codes (operator/supervisor actionable)

| Code | Name | Manual Description | Related Article |
|---|---|---|---|
| 0x02400001 | ForkCollision | Fork collision, please move the vehicle manually or clear the obstacles | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400002 | Collision | Vehicle collision, please drive vehicle manually or remove obstacles | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400003 | EmergencyStop | Emergency stop button pressed, please pull it up and manually calibrate vehicle for relocalization after danger cleared | [Emergency Stop Recovery](../operations/emergency-stop.md) |
| 0x02400010 | ForkObliquity | Fork inclination angle not zero when moving in/out, please level it manually | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400011 | LiftZCheckFail | Fork height verification failure | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400012 | RatherLowBattery | Low battery power, please charge it manually | [Charging Problem](../troubleshooting/charging.md) |
| 0x02400013 | StoppedLongTime | Long time stop | [AGV Stopped](../troubleshooting/agv-stopped.md) |
| 0x02300014 | LowReliability | Pose not reliable, please calibrate the vehicle and relocalize it | [Localization Problem](../troubleshooting/localization.md) |
| 0x02400015 | GoodsWidthCheckFail | Cargo too wide, please handle the cargo manually | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400016 | GoodsHeightCheckFail | Cargo too high, please adjust cargo manually | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400019 | LowDiskSpace | Insufficient disk space, please clean up the disk | [AGV Stopped](../troubleshooting/agv-stopped.md) |
| 0x0240001A | MainThreadTimeout | Main process cycle timeout exception | [AGV Stopped](../troubleshooting/agv-stopped.md) |
| 0x0230001B | OffPath | Vehicle off track, please drive the vehicle to the track manually | [Localization Problem](../troubleshooting/localization.md) |
| 0x0240001C | ManualMode | Switched to manual mode, please reset the vehicle | [Auto / Manual Mode](../operations/auto-manual-mode.md) |
| 0x0240001D | UnrecognizedBarcode | Cargo barcode not recognized | [Task Execution](../troubleshooting/task-execution.md) |
| 0x0240001E | LoadError | Fork press switches not pressed at the same time when loading, please check if cargo loaded normally | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02300020 | ControlCenterCommunicationError | Communication disconnection with control center, please check network | [Communication Problem](../troubleshooting/communication.md) |
| 0x02300021 | LaserBreakdown | Laser sensor malfunction | [Safety Laser Alarm](../troubleshooting/safety-laser.md) |
| 0x02300023 | NetworkError | Network connection abnormality, please check it | [Communication Problem](../troubleshooting/communication.md) |
| 0x02400025 | UnloadSafetyCheckFail | Not enough space for cargo unloading, please clear obstacles | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400026 | LoadSafetyCheckFail | Cargo loading security exception (reported by perception module) | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400027 | NoGoodsDetected | Cargo detection timeout, please check if any cargo present | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400028 | GoodsDetected | (Front-alignment unloading method) error over 0.1 between detection result and target height | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400029 | NoStorageDetected | No storage location detected | [Task Execution](../troubleshooting/task-execution.md) |
| 0x0240002A | EarlyTouchGoods | Touching cargo too early, please check the path or cargo position | [Task Execution](../troubleshooting/task-execution.md) |
| 0x0240002B | LargeGoodsAngle | Excessive angle of cargo (detected by host computer) | [Task Execution](../troubleshooting/task-execution.md) |
| 0x0240002C | LargeGoodsShift | Too large left-right deviation of cargo (detected by upper computer) | [Task Execution](../troubleshooting/task-execution.md) |
| 0x0240002D | ChargingError | Charging speed too slow repeatedly | [Charging Problem](../troubleshooting/charging.md) |
| 0x0240002F | NoneTargetBarcode | Target barcode not recognized | [Task Execution](../troubleshooting/task-execution.md) |
| 0x02400030 | ModeChange | Mode switching abnormality | [Auto / Manual Mode](../operations/auto-manual-mode.md) |
| 0x02200031 | UnableToHalt | During shutdown, please release the handle to make the vehicle stationary | [AGV Shut-down](../operations/shutdown.md) |
| 0x02400032 | HandleEnable | The handle pulled down in Auto mode, please reset manually | [Auto / Manual Mode](../operations/auto-manual-mode.md) |
| 0x02200103 | LowBattery | Low battery | [Charging Problem](../troubleshooting/charging.md) |
| 0x02200105 | ControlCenterCommunicateDelayed | Short-time communication abnormality with control center | [Communication Problem](../troubleshooting/communication.md) |
| 0x02200106 | Network | Network short-time disconnection | [Communication Problem](../troubleshooting/communication.md) |
| 0x02100206 | LaserClose | Close-range laser trigger | [Safety Laser Alarm](../troubleshooting/safety-laser.md) |
| 0x02200209 | LaserCloseDisabled | Shielding proximity protection | [Safety Laser Alarm](../troubleshooting/safety-laser.md) |
| 0x0220020A | ControlRegionSlowdown | Stop due to unauthorized control region | [AGV Stopped](../troubleshooting/agv-stopped.md) |
| 0x0220020B | ControlRegionStop | Lower speed due to unauthorized control region | [AGV Stopped](../troubleshooting/agv-stopped.md) |
| 0x0220020C | McuCommunicationError | MCU communication synchronization short-time abnormality | [Communication Problem](../troubleshooting/communication.md) |
| 0x0240020D | InvalidControlRegion | No valid control region file found, please check | 🔴 Level 3 — do not edit control region files yourself |
| 0x0240020E | ControlCenterStoppedLongTime | Long time stop due to control region | [AGV Stopped](../troubleshooting/agv-stopped.md) |
| 0x02300004 | McuCommunicationError1 | MCU communication sync abnormality | [Communication Problem](../troubleshooting/communication.md) |

## Level 3 codes (do not attempt on-site fixes — hardware/wiring level)

These are low-level CAN bus, encoder, and control-board communication faults. The manual lists them by name and hex code, but the underlying wiring is not something an operator or supervisor should open up. If one of these appears, stop the AGV safely, record the exact code shown on screen, and hand off per your site's escalation process — do not open electrical enclosures.

| Code | Name |
|---|---|
| 0x04300010 | CANComInitFail |
| 0x04300011 | CANComHalfWayFail |
| 0x04300012 | RunTargetSpeedExceedLimit |
| 0x04300013 | TurnTargetAngleExceedLimit |
| 0x04300014 | ForkUpDownTargetSpeedExceedLimit |
| 0x04300015 | ForkFrontBackTargetSpeedExceedLimit |
| 0x04300016 | ForkLeftRightTargetSpeedExceedLimit |
| 0x04300017 | ForkTiltAngleTargetSpeedExceedLimit |
| 0x04300018 | LeftMotorRunTargetSpeedExceedLimit |
| 0x0430001A | FrontLaserShortTargetSpeedExceedLimit |
| 0x0430001B | LeftLaserShortTargetSpeedExceedLimit |
| 0x0430001C | RightLaserShortTargetSpeedExceedLimit |
| 0x04300025 | MainBoardSafetyLock |
| 0x04300026 | SubBoardSafetyLock |
| 0x0430002F | LeftLaserShortTrigger |
| 0x04300030 | RightLaserShortTrigger |
| 0x04200033 | SafetyProtectLockNeedManualReset |
| 0x04300028 | PauseButtonPress |

**Note on this table:** in the source manual, each row in this section pairs a code name with a one-line description (mostly CAN-bus/board/sensor communication faults). During extraction, the description text for this row range could not be reliably matched to the correct code — the two columns appear to shift out of alignment partway through the printed appendix table. Rather than guess which description belongs to which code, this site lists only the verified Name/Code pairs for this range. Always read the exact description text shown live on the AGV/RCS screen rather than relying on a paraphrase here, and treat any code in this table as a hand-off to trained maintenance personnel.

## Related

- [Indicator Lights](indicator-lights.md) — what the tri-color light and voice announcements mean for each vehicle state
- [AGV Status Meanings](agv-status.md)
