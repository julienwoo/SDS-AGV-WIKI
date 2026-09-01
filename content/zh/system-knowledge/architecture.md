---
title: 系统架构概览
severity: green
accessLevel: 1
alarmCode: N/A
---

## 本页的作用

单个 AGV 报警代码指向的是车辆本身的问题。但在本项目中,AGV 只是一条更大链路中的一环——任务卡住或"没有任何动静"这类现象,很多时候是 AGV 上游或下游某个环节导致的,而不是 AGV 自身的问题。本页给出系统的整体结构,帮助你判断该从哪一层入手排查。具体的分步流程见[现场工作流程](site-workflows.md)。

## 涉及的系统

- **Cello WMS** —— 仓库管理系统。操作员在这里发起运输请求(例如"移动这个托盘"),WMS 将其转化为一个订单(Order)。
- **RCS** —— VisionNav 的中央控制系统。接收来自 WMS 的订单,将其拆分为 AGV 任务(扫码、装货、移动、卸货),将任务派发给可用的 AGV,并跟踪任务和库位状态。
- **AGV 车队** —— VNP15(VL)-66 车辆本身,执行 RCS 派发的任务。
- **Mujin 机器人工作站** —— 外部机器人工作站。当站内某个位置准备好接收货物或可供取货时,会向 RCS 发出信号。
- **Aranco 输送线 / VAS 输送线** —— 进出货输送线,各自配有自己的 PLC,向 RCS 发送托盘存在及输送线就绪状态的信号。
- **充电站** —— AGV 空闲且电量偏低时自动对接充电的充电桩。
- **BES** —— 工作流程文档中提到的系统,用于跟踪库位状态,专门用于拒收位处理(reject-position handling)。

## 系统之间如何连接

- **WMS ↔ RCS**:通过 WebAPI。订单信息包含来源、目的地和货物条码。
- **RCS ↔ AGV**:通过现场无线网络。RCS 派发任务;AGV 执行并回报状态。
- **RCS ↔ Mujin 机器人工作站**:通过每个站内位置各自的信号标签(例如 `moveInLocationXContainer` / `moveOutLocationXContainer` / `locationXHasContainer`,其中 X 为站内的位置编号)。
- **RCS ↔ 输送线 PLC**:通过诸如输送线出口是否有托盘就绪、目标输送线是否可以接收等信号。

## 任务生命周期

无论由哪个工作流程触发,RCS 派发的每一个 AGV 任务都会经历相同的状态推进:

**Begin Execution(开始执行) → Loaded(已装载) → Unloaded(已卸货) → Completed(已完成)**,如果出现不匹配的情况则为 **→ Task Error(任务错误)**(见现场工作流程中的[To Reject Position](site-workflows.md#to-reject-position))。

各状态的完整含义见[AGV 状态含义](../reference/agv-status.md)。

## 出现异常时如何使用本页

- **AGV 显示报警代码** → 属于车辆级问题。查看当前的[故障排查](#/category/troubleshooting)列表,查找对应的故障。
- **没有 AGV 报警,但任务卡住或没有任何动静** → 更可能是 WMS 订单尚未到达、Mujin/输送线信号尚未传来,或条码不匹配导致托盘被转去了拒收位。见[现场工作流程](site-workflows.md)中的处理方式。
