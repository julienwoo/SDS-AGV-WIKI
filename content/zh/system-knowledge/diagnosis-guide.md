---
title: 系统级问题诊断
severity: green
accessLevel: 1
alarmCode: N/A
---

## 判断原则

**车辆上或 RCS 中显示 AGV 报警代码 = 车辆级问题。** 查看当前的[故障排查](#/category/troubleshooting)列表,或在完整的[报警代码大全](../reference/alarm-codes.md)中查找。

**任务卡住、延迟或行为异常,但完全没有 AGV 报警代码 = 很可能是集成层面的情况**——即 WMS 订单、Mujin 信号、输送线信号或条码不匹配,发生在 AGV 的上游或下游。在断定是车辆故障之前,先阅读[现场工作流程](site-workflows.md)和[系统架构概览](architecture.md)。

## 常见现象模式

**托盘意外出现在拒收位区域,RCS 显示 Task Error。**
这是系统按设计正常运行的结果——见[To Reject Position](site-workflows.md#to-reject-position)。这说明扫描到的条码与 WMS 预期的不一致。这不是 AGV 故障。不要排查车辆,而应将不匹配的托盘/标签及预期订单反馈给负责本站 WMS 数据的人员。

**AGV 停在 Mujin 机器人工作站内不动,没有任何报警。**
根据[Mujin Robot Cell → Inbound Rack](site-workflows.md#3-mujin-robot-cell-inbound-rack-area)工作流程,AGV 被设计为在站内的等待点暂停,直到收到取货信号。这是预期行为——只有当它真正进入 Error 模式时才需要上报(如果等待时间超时仍未收到信号,它会自行进入该模式)。

**AGV 停在输送线前不远处,没有显示任何报警。**
检查输送线是否已发出 `conveyorIsClear` 信号。如果尚未发出,说明 AGV 在正确地等待输送线/PLC 一侧——见[Outbound VAS buffer → VAS Conveyor](site-workflows.md#6-outbound-vas-buffer-vas-conveyor)。这不是 AGV 故障;如果卡住的时间超出预期,应上报给负责输送线 PLC 的人员,而不是 AGV 维修人员。

**同一条输送线的托盘出现多个订单排队,或 WMS 重复发送一个看似已处理过的订单。**
这是[Aranco Conveyor → Inbound Rack](site-workflows.md#5-aranco-conveyor-inbound-rack-area)工作流程按设计产生的预期现象——WMS 可能在当前托盘离开输送线之前就发送后续订单,因此排队机制是内置设计的一部分。

**任务显示 Begin Execution 后一直不推进到 Loaded。**
检查 RCS 是否确实已经派发了 AGV 执行该任务(RCS 侧),以及该 AGV 是否显示通信或运动类报警(AGV 侧)——查看[报警代码大全](../reference/alarm-codes.md)中是否有匹配的代码。如果两边都没有异常,这更可能是 RCS/WMS 协调层面的问题,而不是车辆本身可以解决的。

## 如果你确实无法判断是哪一层的问题

准确记录你所观察到的情况——哪个系统显示了什么、是否存在任何 AGV 报警——并交给现场流程处理,而不要凭猜测判断。把集成层面的问题误判为 AGV 故障(或反过来),会浪费双方的时间。
