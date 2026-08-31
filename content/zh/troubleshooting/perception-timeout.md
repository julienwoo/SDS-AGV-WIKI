---
title: 货物检测超时
severity: yellow
accessLevel: 1
alarmCode: NoGoodsDetected 0x02400027
---

🧭 **预防** — 见《[现场操作规范](../reference/site-best-practices.md)》第 5 节(托盘摆放):在托盘到达 AGV 之前先修正好侧偏/角度。

## 症状

- AGV 在取货前尝试校验托盘时超时停止,尽管表面上看不出明显问题
- 显示的故障名称:货物检测超时

## 报警 / 错误

AGV 屏幕和 RCS 上显示:

- `NoGoodsDetected`(0x02400027)——"货物检测超时,请检查是否有货物"

通常是摆放位置或托盘尺寸问题,不是硬件故障。

## 恢复步骤

1. 侧偏或角度过大?修正托盘摆放位置,然后重试。
2. 修正摆放后仍然超时 → 很可能是系统里没有登记该托盘的尺寸。将托盘移到指定测量区域进行测量,然后在 RoboTune 中登记尺寸(Handling Solution Management → Basic Data Management → Pallet)——这项操作通常由负责现场 RoboTune 调试的人员完成,如果你没有相应权限,请上报给他们处理。
3. 如果需要在尺寸问题解决之前先清掉当前任务,可以[手动完成](../operations/manual-task-complete.md)当前任务。
