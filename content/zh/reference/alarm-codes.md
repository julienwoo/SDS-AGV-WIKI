---
title: 报警代码大全
severity: green
accessLevel: 1
alarmCode: All
---

## 关于此列表

本表直接摘自 VNP15(VL)-66《操作手册》附录 7("错误代码信息列表")。**Name(代码名)**和**Code(代码)**两列与手册原文保持一致。AGV 屏幕和 RCS 通常会显示 **Name** 或 **Code**(十六进制)——用其中任意一个都可以在下表中查找对应行。**相关文章**一列在存在对应快速参考页面时会给出链接;显示"—"的表示目前还没有专门页面——请查看当前的[故障排查](#/category/troubleshooting)列表,或按现场流程上报。

如果现场看到的代码不在本表中,不要凭猜测判断其含义。记录屏幕上显示的准确文字和十六进制代码,交给现场经过培训的维修人员或项目团队联系人。

## 1–2 级代码(操作员/主管可处理)

| 代码 | 名称 | 手册描述 | 相关文章 |
|---|---|---|---|
| 0x02400001 | ForkCollision | 货叉碰撞,请手动移动车辆或清除障碍物 | — |
| 0x02400002 | Collision | 车辆碰撞,请手动驾驶车辆或移除障碍物 | — |
| 0x02400003 | EmergencyStop | 急停按钮已按下,请拉起并在危险解除后手动标定车辆重定位 | [急停恢复](../operations/emergency-stop.md) |
| 0x02400010 | ForkObliquity | 货叉进出时倾角不为零,请手动调平 | — |
| 0x02400011 | LiftZCheckFail | 货叉高度校验失败 | — |
| 0x02400012 | RatherLowBattery | 电量偏低,请手动充电 | — |
| 0x02400013 | StoppedLongTime | 长时间停止 | — |
| 0x02300014 | LowReliability | 位姿不可靠,请标定车辆并重定位 | — |
| 0x02400015 | GoodsWidthCheckFail | 货物过宽,请手动处理货物 | — |
| 0x02400016 | GoodsHeightCheckFail | 货物过高,请手动调整货物 | — |
| 0x02400019 | LowDiskSpace | 磁盘空间不足,请清理磁盘 | — |
| 0x0240001A | MainThreadTimeout | 主流程周期超时异常 | — |
| 0x0230001B | OffPath | 车辆偏离轨道,请手动将车辆开回轨道 | — |
| 0x0240001C | ManualMode | 已切换到手动模式,请复位车辆 | [自动/手动模式切换](../operations/auto-manual-mode.md) |
| 0x0240001D | UnrecognizedBarcode | 货物条码未识别 | [货物条码识别失败](../troubleshooting/barcode-not-recognized.md) |
| 0x0240001E | LoadError | 装载时货叉压力开关未同时触发,请检查货物是否正常装载 | — |
| 0x02300020 | ControlCenterCommunicationError | 与控制中心通信断开,请检查网络 | — |
| 0x02300021 | LaserBreakdown | 激光传感器故障 | — |
| 0x02300023 | NetworkError | 网络连接异常,请检查 | — |
| 0x02400025 | UnloadSafetyCheckFail | 卸货空间不足,请清除障碍物 | — |
| 0x02400026 | LoadSafetyCheckFail | 装货安全异常(由感知模块上报) | — |
| 0x02400027 | NoGoodsDetected | 货物检测超时,请检查是否有货物 | [货物检测超时](../troubleshooting/perception-timeout.md) |
| 0x02400028 | GoodsDetected | (前对齐卸货方式)检测结果与目标高度误差超过 0.1 | — |
| 0x02400029 | NoStorageDetected | 未检测到库位 | — |
| 0x0240002A | EarlyTouchGoods | 过早触碰货物,请检查路径或货物位置 | — |
| 0x0240002B | LargeGoodsAngle | 货物角度过大(主机检测) | — |
| 0x0240002C | LargeGoodsShift | 货物左右偏移过大(上位机检测) | — |
| 0x0240002D | ChargingError | 充电速度反复过慢 | — |
| 0x0240002F | NoneTargetBarcode | 目标条码未识别 | [货物条码识别失败](../troubleshooting/barcode-not-recognized.md) |
| 0x02400030 | ModeChange | 模式切换异常 | [自动/手动模式切换](../operations/auto-manual-mode.md) |
| 0x02200031 | UnableToHalt | 关机过程中,请松开手柄使车辆保持静止 | [AGV 开机 / 关机](../operations/power-on-off.md) |
| 0x02400032 | HandleEnable | 自动模式下手柄被按下,请手动复位 | [自动/手动模式切换](../operations/auto-manual-mode.md) |
| 0x02200103 | LowBattery | 电量低 | — |
| 0x02200105 | ControlCenterCommunicateDelayed | 与控制中心短时通信异常 | — |
| 0x02200106 | Network | 网络短时断开 | — |
| 0x02100206 | LaserClose | 近距离激光触发 | [近距激光触发](../troubleshooting/laser-triggered.md) |
| 0x02200209 | LaserCloseDisabled | 近距离防护已屏蔽 | — |
| 0x0220020A | ControlRegionSlowdown | 因未授权控制区而停止 | — |
| 0x0220020B | ControlRegionStop | 因未授权控制区而降速 | — |
| 0x0220020C | McuCommunicationError | MCU 通信同步短时异常 | — |
| 0x0240020D | InvalidControlRegion | 未找到有效的控制区文件,请检查 | 🔴 3 级——请勿自行编辑控制区文件 |
| 0x0240020E | ControlCenterStoppedLongTime | 因控制区导致长时间停止 | — |
| 0x02300004 | McuCommunicationError1 | MCU 通信同步异常 | — |

## 3 级代码(现场不要尝试处理——硬件/接线级别)

这些是底层的 CAN 总线、编码器和控制板通信类故障。手册中列出了名称和十六进制代码,但底层接线不是操作员或主管应该拆开处理的部分。如果出现这类代码,请安全停止 AGV,记录屏幕上显示的准确代码,并按现场流程上报——不要打开电气箱。

| 代码 | 名称 |
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

**关于此表的说明:** 在原始手册中,这一部分每一行代码名称都配有一句描述(大多是 CAN 总线/控制板/传感器通信类故障)。在内容提取过程中,这个范围内的描述文字无法可靠地与正确的代码一一对应——原始手册附录表格中这两列从某处开始出现错位。与其猜测哪段描述对应哪个代码,本站在这个范围内只列出已核实的名称/代码对应关系。请始终以 AGV/RCS 屏幕上实时显示的准确描述文字为准,不要依赖这里的转述,并将此表中的任何代码都视为需要交给经过培训的维修人员处理。

## 相关内容

- [指示灯说明](indicator-lights.md) —— 三色灯和语音播报在各种车辆状态下分别代表什么
- [AGV 状态含义](agv-status.md)
