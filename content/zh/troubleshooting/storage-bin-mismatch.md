---
title: 库位状态异常
severity: yellow
accessLevel: 1
alarmCode: 未见正式报警代码记录 — RCS 上以故障名称显示
---

## 症状

- 在"明眸"视觉相机监控的区域内,AGV 被派往一个相机显示已经有货物的库位送货
- 显示的故障名称:明眸库位状态异常(storage bin status mismatch,"明眸"为视觉识别系统)

## 报警 / 错误

RCS 中的库位状态与视觉相机实际看到的情况不一致——目的库位实际已有货物,但任务仍被派发到该处(见[库位占用与使用状态](../reference/rcs-ui-basics.md#4-storagebin-occupancy-and-usage-status))。

## 恢复步骤

1. 不要让 AGV 在该位置卸货——在卸货动作发生前暂停或取消该任务。
2. 确认该库位实际存放的情况,然后在 RCS 中将库位状态更正为与实际一致。
3. 将该次送货重新分配到一个可用的库位。
