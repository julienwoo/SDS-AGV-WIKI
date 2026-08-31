---
title: 现场工作流程
severity: green
accessLevel: 1
alarmCode: N/A
---

## 关于本页

本页梳理本项目实际配置的物料流转工作流程(依据现场 VN25447 工作流程图)。每个流程都展示了各系统按顺序分别做什么,以及在条码不匹配时会被转去[Reject Position](site-workflows.md#to-reject-position)的具体节点。如果想先了解整体框架再看细节,建议先看[系统架构概览](architecture.md)。

## 1. 直接上架(Direct PutAway) → 进货货架区

1. 操作员将托盘放置在直接上架区,并在 Cello WMS 中发起运输请求。
2. WMS 通过接口向 RCS 发送订单:来源(精确位置)、目的地(精确位置,或多深位存储时的一个巷道)、以及托盘条码。
3. RCS 先生成一个**扫描任务**,派发 AGV 前往源位置扫描托盘条码。扫描完成后 AGV 原地锁定。
4. **如果扫描到的条码与订单条码不一致** → 托盘将被转去[Reject Position](site-workflows.md#to-reject-position)。
5. 如果匹配:RCS 生成装载+移动任务(目的地为巷道时)或装卸合并任务(目的地为单一位置),并派发给同一台 AGV。
6. AGV 取货(RCS 报告 **Loaded**),移动到目的地并放货(RCS 报告 **Unloaded**),然后返回待机。
7. RCS 报告 **Completed**,更新目的地库位状态;WMS 收到通知。
8. 操作员手动将托盘从进货货架区移入存储货架——这最后一步不由 AGV 完成。

## 2. 机器人缓存区(Robot Buffer) → Mujin 机器人工作站

1. 操作员将托盘放置在机器人缓存区,并在 WMS 中发起请求。该订单的目的地是一个 **Mujin 站编号**,而不是固定位置。
2. RCS 派发 AGV 前往源位置扫描托盘条码;扫描后 AGV 锁定。
3. **条码不匹配** → 转去[Reject Position](site-workflows.md#to-reject-position)。
4. 与此同时,RCS 读取 Mujin 站自身的信号标签,以找到站内可用的目的地位置(`moveInLocationXContainer = true`)。该站共有 4 个位置(1、2、4、5);只有位置 1 和 2 可以接收满托盘。
5. RCS 生成一个卸货任务到该站内位置,并派发(已锁定、等待中的)AGV。
6. AGV 在目的地放下托盘(RCS 报告 **Unloaded**),随后驶出并锁定。
7. RCS 报告 **Completed**,更新库位状态;WMS 收到通知。

## 3. Mujin Robot Cell → Inbound Rack Area

1. RCS 持续读取机器人站的信号,监测 `moveOutLocationXContainer = true`(同样,只有位置 1 和 2 存放满托盘)。
2. RCS 在该站内位置生成一个扫描任务,并派发一台等待中的 AGV,使其驶入站内扫描托盘条码。
3. RCS 检查 Cello WMS 中是否存在与该托盘条码对应的订单。
4. **重要:** 在这一判断过程中,AGV 会在站内一个预设的等待点暂停。如果在该等待时间内未收到取货信号,**它会进入 Error 模式**——这是一种真实存在、有文档记录的正常情况,不是硬件故障。如果完全找不到匹配的订单,则会触发一个报警(具体报警代码可按项目配置)。
5. 一旦找到订单,RCS 报告 **Begin Execution**,生成一个卸货+移动任务到目的地巷道,并派发该 AGV。
6. AGV 放下托盘(RCS 报告 **Unloaded**),返回待机,RCS 报告 **Completed**。
7. 与流程 1 相同,操作员需手动将托盘从进货货架区移入存储货架。

## 4. 空托盘缓存区 → Mujin 机器人工作站

1. 操作员负责保持空托盘缓存区内有空托盘堆垛。
2. RCS 读取机器人站的信号,监测 `moveInLocationXContainer = true`——在此流程中,只有位置 **4 和 5**(空托盘堆垛位置)与之相关。缓存区共有两个位置,各自对应一个特定的站内位置。
3. RCS 生成一个装卸合并任务,并派发一台可用的 AGV,从缓存区取走空托盘堆垛,放到发出请求的站内位置。
4. AGV 驶出该站,继续执行下一个任务。
5. RCS 向 Mujin 回写信号(`locationXContainer` = 托盘条码,`locationXHasContainer = true`),使该站得知空托盘已经到达,站点恢复生产。
6. **安全提示:** 每当 AGV 通过该站的安全门时,RCS 都会与安全门执行一次安全握手。

## 5. Aranco Conveyor → Inbound Rack Area

1. 当 Aranco 输送线上有进货托盘等待时(源位置 = 输送线位置编号),WMS 向 RCS 发送订单。由于 WMS 可能在当前托盘被清空之前就发送后续订单,**排队机制是本流程设计中内置的一部分**——在这里看到多个排队订单属于预期现象,而不是故障。
2. 一旦输送线发出托盘存在信号,RCS 派发 AGV 前往输送线出口扫描托盘条码。
3. RCS 将扫描到的条码与 WMS 给出的条码进行比对。**不匹配** → 转去[Reject Position](site-workflows.md#to-reject-position)。
4. 如果匹配:AGV 从输送线上取走托盘(RCS 报告 **Loaded**),移动到目的地并放货(RCS 报告 **Unloaded**),然后返回待机。
5. RCS 报告 **Completed**,更新库位状态,WMS 收到通知。
6. 与之前相同,操作员需手动将托盘从进货货架区移入存储货架。

## 6. Outbound VAS buffer → VAS Conveyor

1. 操作员手动将托盘放置在出货 VAS 缓存区,并在 WMS 中发起请求。
2. RCS 派发 AGV 在缓存区位置扫描托盘条码,然后与 WMS 提供的条码进行比对。**不匹配** → 转去[Reject Position](site-workflows.md#to-reject-position)。
3. 如果匹配,RCS 报告 **Begin Execution**,AGV 取货(RCS 报告 **Loaded**)并驶向目标输送线的判断点。
4. RCS 持续监测输送线自身的 **`conveyorIsClear`** 信号。如果输送线尚未清空,AGV 会等待——这是输送线侧的预期行为,不是 AGV 故障。
5. 一旦 `conveyorIsClear = true`,RCS 派发等待中的 AGV 执行卸货:驶入输送线、放下托盘、驶离。
6. RCS 报告 **Unloaded**,AGV 返回待机,RCS 报告 **Completed**;WMS 收到通知。

## To Reject Position

这是上述所有流程在扫描条码与 WMS 预期不一致时,共用的兜底处理方式。

1. RCS 生成一个装卸合并任务,将不匹配的托盘从扫描位置移动到拒收位区域的一个可用槽位(可用性信息来自 BES)。
2. 已经锁定该托盘的 AGV 执行此任务——从源位置装货,在拒收位卸货。
3. RCS 将该任务的进度报告为 **Task Error**(而非 Completed),并通知 WMS。

**这在现场意味着什么:** 如果一个托盘最终出现在拒收位区域,说明 AGV 完全按照设计正常执行了任务——真正的问题是上游的条码/标签或 WMS 数据不匹配,而不是车辆故障。不要为此排查 AGV;应将不匹配的托盘及其预期订单反馈给负责本站 WMS 数据的人员。见[系统级问题诊断](diagnosis-guide.md)。
