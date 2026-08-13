// ═══════════════════════════════════════════════════════════
// Robonix Website — All bilingual content (en / zh)
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────
// Navigation
// ───────────────────────────────────────────

export const NAV_LINKS: { label: { en: string; zh: string }; href: string }[] = [];

export const NAV_EXTERNAL_LINKS = [
  { label: { en: 'Docs', zh: '文档' }, href: 'https://book.robonix.ai/' },
  { label: { en: 'Packages', zh: '包目录' }, href: 'https://packages.robonix.ai/' },
  { label: { en: 'Skill Forge', zh: '技能工坊' }, href: '/skill-forge' },
];

export const NAV_RESOURCES = [
  { label: { en: 'Papers & Reports', zh: '论文与报告' }, href: '/papers' },
];

// ───────────────────────────────────────────
// Hero
// ───────────────────────────────────────────

export const HERO = {
  tagline: {
    en: 'Model-Physical Decoupling · Task-Centered Runtime',
    zh: '模型-物理解耦 · 任务中心运行时',
  },
  title: 'Robonix',
  subtitle: {
    en: 'One OS, Intelligence Across Embodiments.',
    zh: '一个操作系统，让智能跨越万千本体。',
  },
  description: {
    en: 'Robonix is the open, agentic operating system that turns models, skills, services, and hardware into composable capabilities. Define once, deploy anywhere, and without vendor lock-in or repeated integration.',
    zh: 'Robonix 是开放、智能体原生的具身智能操作系统，将模型、技能、服务与硬件统一为智能体可理解、可组合、可调用的能力。能力一次定义，随处部署，告别厂商锁定与重复集成。',
  },
  cta: {
    en: 'Get Started',
    zh: '快速开始',
  },
  cta2: {
    en: 'Read the Docs',
    zh: '阅读文档',
  },
  cta3: {
    en: 'Watch Demo',
    zh: '观看演示',
  },
  cta4: {
    en: 'Developer Community',
    zh: '开发者社区',
  },
  ctaGithub: {
    en: '⭐ Star on GitHub',
    zh: '⭐ 点亮 GitHub',
  },
  badges: [
    { label: { en: 'Robot Vendors', zh: '本体厂商' }, value: '10+' },
    { label: { en: 'Robot Form Factors', zh: '本体形态' }, value: '6' },
    { label: { en: 'Simulation Engines', zh: '仿真引擎' }, value: '3' },
    { label: { en: 'Fully Open Skill Forge', zh: '完全开放的技能工坊' }, value: '' },
  ],
};

// ───────────────────────────────────────────
// Why Robonix — pain points & solutions (2×2 grid)
// ───────────────────────────────────────────

export const WHY_ROBONIX = {
  title: {
    en: 'Problem Robonix Solves',
    zh: 'Robonix 解决什么问题',
  },
  subtitle: {
    en: 'Robonix aims to address the tight coupling of robot models and skills with specific embodiments, which results in duplicated development, poor portability and reuse, and difficulties in scaling robotic applications.',
    zh: 'Robonix 瞄准解决机器人模型和技能与特定本体强耦合、缺乏统一接口，导致重复开发、难以迁移复用和规模化应用的问题。',
  },
  cards: [
    {
      pain: {
        en: 'Tightly coupled robot hardware and AI models',
        zh: '机器人硬件与智能模型紧耦合',
      },
      solution: {
        en: 'System-layer hardware-model-skill decoupling',
        zh: '系统层解耦硬件、模型与技能',
      },
      description: {
        en: 'Robonix abstracts robot bodies and heterogeneous hardware capabilities downward, while connecting upward to LLMs, VLMs, VLAs, and world models through stable system contracts.',
        zh: 'Robonix 向下统一抽象不同机器人本体及异构硬件能力，向上接入 LLM、VLM、VLA 和世界模型等智能模型，让模型、技能和硬件不再彼此硬绑定。',
      },
    },
    {
      pain: {
        en: 'Fragmented interfaces across vendors and devices',
        zh: '厂商与设备接口不统一',
      },
      solution: {
        en: 'Unified primitives, services, skills, and tasks',
        zh: '统一原语、服务、技能与任务抽象',
      },
      description: {
        en: 'Robot vendors wrap joints, sensors, mobile bases, arms, and other capabilities as hardware primitives. Applications and skills call perception, mapping, navigation, speech, and motion through consistent interfaces.',
        zh: '机器人厂商可将关节、传感器、移动底盘、机械臂等能力封装为硬件原语；应用和技能开发者则通过统一接口调用感知、建图、导航、语音和运动控制等能力。',
      },
    },
    {
      pain: {
        en: 'High cost to reuse and migrate robot software',
        zh: '机器人软件复用与迁移成本高',
      },
      solution: {
        en: 'Install, compose, reuse, and migrate skills',
        zh: '技能可安装、可组合、可复用、可迁移',
      },
      description: {
        en: 'Robonix aims to make acquiring new robot capabilities as easy as installing applications: skills can be developed once, combined with services, and moved across compatible robot bodies.',
        zh: 'Robonix 的目标是让机器人获得新能力像安装应用一样容易：技能可以开发、组合、复用并迁移到兼容的机器人本体上。',
      },
    },
    {
      pain: {
        en: 'Robots need a brain system, not isolated scripts',
        zh: '机器人需要“大脑系统”，而不是零散脚本',
      },
      solution: {
        en: 'Task planning, validation, execution, management, and safety',
        zh: '任务规划验证、技能编排执行、任务管理与安全守护',
      },
      description: {
        en: 'Positioned as the robot brain system, Robonix connects user interaction, task planning, skill orchestration, service calls, hardware primitives, task lifecycle management, and safety guards into one runtime.',
        zh: 'Robonix 定位于机器人的“大脑系统”，将用户交互、任务规划、技能编排、服务调用、硬件原语、任务生命周期管理与安全守护连接为统一运行时。',
      },
    },
  ],
};

// ───────────────────────────────────────────
// Core Concepts / Architecture tabs
// ───────────────────────────────────────────

export const ARCHITECTURE = {
  title: {
    en: 'Robot Brain System: Agentic Native Architecture',
    zh: '机器人大脑系统：智能体原生架构',
  },
  subtitle: {
    en: 'From user intent to physical action, Robonix separates interaction, planning, execution, scene state, body state, transport, and capability discovery into clear runtime roles.',
    zh: '从用户意图到物理行动, Robonix 将交互、规划、执行、场景、本体、通信和能力发现拆成清晰的运行时角色。',
  },
  principles: [
    {
      title: { en: 'Task-Centered Runtime', zh: '任务中心运行时' },
      description: {
        en: 'Every user request becomes an explicit RTDL plan that can be observed, streamed, cancelled, and broken into concurrent capability calls.',
        zh: '每个用户请求都会变成显式 RTDL 计划，可以被观察、流式返回、取消，并拆分为并发能力调用。',
      },
    },
    {
      title: { en: 'Capability Contracts', zh: '能力合约' },
      description: {
        en: 'Users build hardware-specific primitives. Services and skills consume stable interfaces, independent of hardware. Contracts remain unchanged; implementations are replaceable.',
        zh: '用户根据不同的硬件编写原语。服务和技能消费稳定接口，不感知底层硬件差异。合约保持不变，具体实现可以替换。',
      },
    },
    {
      title: { en: 'Runtime Discovery', zh: '运行时发现' },
      description: {
        en: 'Atlas keeps the current capability catalog. Pilot and Executor resolve the providers that are alive for this deployment at plan time and dispatch time.',
        zh: 'Atlas 维护当前能力目录。Pilot 和 Executor 在规划与调度时解析当前部署中真实在线的提供者。',
      },
    },
    {
      title: { en: 'Body and Scene State', zh: '本体与场景状态' },
      description: {
        en: 'Soma describes the robot body and Scene maintains the live environment estimate, giving models a grounded view before action.',
        zh: 'Soma 描述机器人本体，Scene 维护实时环境估计，让模型在行动前拥有具身上下文。',
      },
    },
    {
      title: { en: 'Multi-Transport Runtime', zh: '多传输运行时' },
      description: {
        en: 'Nexus projects contracts over gRPC, MCP, and ROS 2, so high-rate robot data and model-facing tools can use the transport that fits.',
        zh: 'Nexus 将合约投射到 gRPC、MCP 和 ROS 2，让高频机器人数据与面向模型的工具分别使用合适传输。',
      },
    },
    {
      title: { en: 'Extensible Roadmap', zh: '可扩展演进' },
      description: {
        en: 'Vitals is active for health monitoring. Sentinel, Keystone, and Chronos are represented as system roles and are staged for deeper policy and timing support.',
        zh: 'Vitals 已承担健康监控。Sentinel、Keystone、Chronos 作为系统角色保留，并将继续补齐策略与时间同步能力。',
      },
    },
  ],
  layers: {
    trackA: {
      label: { en: 'Cognitive Layer', zh: '认知层' },
      components: [
        { name: 'Pilot', desc: { en: 'VLM-driven planning & decision loop', zh: 'VLM 驱动的规划与决策循环' } },
        { name: 'Context Builder', desc: { en: 'Assembles task context from memory & scene', zh: '从记忆和场景组装任务上下文' } },
        { name: 'Multi-Agent Critic', desc: { en: 'Validates plans before execution', zh: '执行前验证计划' } },
        { name: 'Memory (memsearch)', desc: { en: 'Long-term fact & preference store', zh: '长期事实与偏好存储' } },
      ],
    },
    shared: {
      label: { en: 'Shared Middleware', zh: '共享中间层' },
      components: [
        { name: 'Atlas', desc: { en: 'Capability registry & discovery', zh: '能力注册与发现' } },
        { name: 'Nexus', desc: { en: 'Multi-transport comms (gRPC/MCP/ROS 2)', zh: '多传输通信' } },
        { name: 'Scribe', desc: { en: 'Structured audit journal', zh: '结构化审计日志' } },
        { name: 'Chronos', desc: { en: 'Unified clock & timestamp alignment', zh: '统一时钟与时间戳对齐' } },
      ],
    },
    trackB: {
      label: { en: 'Execution Layer', zh: '执行层' },
      components: [
        { name: 'Executor', desc: { en: 'RTDL plan execution engine', zh: 'RTDL 计划执行引擎' } },
        { name: 'Sentinel', desc: { en: 'Safety gate per dispatch', zh: '每次调度的安全门禁' } },
        { name: 'Soma', desc: { en: 'Robot body model & URDF', zh: '机器人机体模型与 URDF' } },
        { name: 'Vitals', desc: { en: 'Power & component health', zh: '电量与组件健康监控' } },
      ],
    },
    adapters: {
      label: { en: 'Hardware Adapters', zh: '硬件适配层' },
      components: [
        { name: 'Primitives', desc: { en: 'Per-device capability adapters', zh: '每设备能力适配器' } },
        { name: 'Services', desc: { en: 'Runtime functionality providers', zh: '运行时功能提供者' } },
        { name: 'Skills', desc: { en: 'Task-facing execution flows', zh: '面向任务的执行流程' } },
      ],
    },
  },
};

// ───────────────────────────────────────────
// Features
// ───────────────────────────────────────────

export const FEATURES = [
  {
    icon: '🧩',
    title: { en: 'Modular Primitives', zh: '模块化原语' },
    description: {
      en: 'Each hardware device — camera, lidar, chassis, arm — is wrapped as a swappable primitive with a standard capability contract. Integrate a new sensor without touching any skill code.',
      zh: '每个硬件设备——相机、激光雷达、底盘、机械臂——都被封装为可替换的原语，具有标准能力合约。集成新传感器无需修改任何技能代码。',
    },
  },
  {
    icon: '📋',
    title: { en: 'Atlas Contract System', zh: 'Atlas 合约系统' },
    description: {
      en: 'Typed capability interfaces (TOML + ROS IDL) define every contract. Providers register with Atlas; consumers discover them at runtime. No hard-coded dependencies.',
      zh: '类型化的能力接口（TOML + ROS IDL）定义每个合约。提供者向 Atlas 注册；消费者在运行时发现。无硬编码依赖。',
    },
  },
  {
    icon: '⚡',
    title: { en: 'One-Command Boot', zh: '一键启动' },
    description: {
      en: '\'rbnx boot\' brings up the entire robot stack — Atlas, Soma, Pilot, Executor, Liaison, plus all primitives, services, and skills. Dependency resolution and configuration are automatic.',
      zh: 'rbnx boot 启动整个机器人栈——Atlas、Soma、Pilot、Executor、Liaison，以及所有原语、服务和技能。依赖解析和配置全自动完成。',
    },
  },
  {
    icon: '🤖',
    title: { en: 'VLM-Native Planning', zh: '原生 VLM 规划' },
    description: {
      en: 'Pilot uses vision-language models to understand scenes and generate RTDL plans. Models see the live capability catalog — they plan with what the robot can actually do.',
      zh: 'Pilot 使用视觉语言模型理解场景并生成 RTDL 计划。模型看到实时的能力目录——它们基于机器人实际能做的事情进行规划。',
    },
  },
  {
    icon: '📦',
    title: { en: 'Package Ecosystem', zh: '包生态系统' },
    description: {
      en: 'Discover, share, and reuse robot packages. Primitives, services, and skills are independently installable and composable. The package catalog exposes a machine-readable JSON API.',
      zh: '发现、分享和复用机器人包。原语、服务和技能可独立安装和组合。包目录提供机器可读的 JSON API。',
    },
  },
  {
    icon: '🌐',
    title: { en: 'ROS 2 & Zenoh Native', zh: '原生 ROS 2 与 Zenoh' },
    description: {
      en: 'First-class ROS 2 interoperability with Zenoh as the recommended RMW. Access ROS 2 topics, services, and actions alongside native gRPC and MCP transports — without tying the system to a single middleware.',
      zh: '一流的 ROS 2 互操作性，推荐 Zenoh 作为 RMW。在原生 gRPC 和 MCP 传输的同时访问 ROS 2 话题、服务和动作——不将系统绑定到单一中间件。',
    },
  },
];

// ───────────────────────────────────────────
// Architecture diagram data (interactive nodes)
// ───────────────────────────────────────────

export const ARCH_NODES = {
  pilot: {
    id: 'pilot',
    label: 'Pilot',
    layer: 'cognitive',
    description: {
      en: 'VLM-driven planning engine. Queries Atlas for capabilities, builds prompts, emits RTDL plans for Executor.',
      zh: 'VLM 驱动的规划引擎。查询 Atlas 获取能力，构建提示词，为 Executor 生成 RTDL 计划。',
    },
    capability: { en: 'Understand task, inspect scene/body state, generate and validate task plans.', zh: '理解任务，查询场景与本体状态，生成并验证任务方案。' },
  },
  atlas: {
    id: 'atlas',
    label: 'Atlas',
    layer: 'shared',
    description: {
      en: 'Live capability registry. Every primitive, service, and skill registers here. Pilot and Executor discover providers at runtime.',
      zh: '实时能力注册中心。每个原语、服务和技能在此注册。Pilot 和 Executor 在运行时发现提供者。',
    },
    capability: { en: 'Capability directory, lifecycle state, contract metadata, provider channels.', zh: '能力目录、生命周期状态、合约元数据、提供者通道。' },
  },
  executor: {
    id: 'executor',
    label: 'Executor',
    layer: 'execution',
    description: {
      en: 'RTDL execution engine. Dispatches do/sequence/parallel nodes to capability providers with cancellation and async polling.',
      zh: 'RTDL 执行引擎。将 do/sequence/parallel 节点调度到能力提供者，支持取消和异步轮询。',
    },
    capability: { en: 'Execute structured plans, stream node states, cancel plans, poll async capabilities.', zh: '执行结构化计划，流式返回节点状态，取消计划，轮询异步能力。' },
  },
  soma: {
    id: 'soma',
    label: 'Soma',
    layer: 'execution',
    description: {
      en: 'Robot self-description service. Serves the soma.yaml body model and URDF to Pilot and other components.',
      zh: '机器人自描述服务。向 Pilot 和其他组件提供 soma.yaml 机体模型和 URDF。',
    },
    capability: { en: 'Body model, URDF, primitive bring-up, component capability exports.', zh: '本体模型、URDF、原语启动、部件能力导出。' },
  },
  sentinel: {
    id: 'sentinel',
    label: 'Sentinel',
    layer: 'execution',
    description: {
      en: 'Safety-supervision role for policy checks before side-effecting capability calls.',
      zh: '安全监管角色，用于在有副作用能力调用前进行策略检查。',
    },
    capability: { en: 'Policy gate using operator identity, scene, vitals, and allow/deny rules.', zh: '结合操作者身份、场景、健康状态与规则进行策略门控。' },
  },
  liaison: {
    id: 'liaison',
    label: 'Liaison',
    layer: 'shared',
    description: {
      en: 'Human-machine interaction gateway. Supports chat, voice, and TUI interfaces.',
      zh: '人机交互网关。支持聊天、语音和 TUI 界面。',
    },
    capability: { en: 'Text/API submission, push-to-talk voice path, user metadata, optional voice gate.', zh: '文本/API 提交、按键语音链路、用户元数据、可选声纹门控。' },
  },
  scribe: {
    id: 'scribe',
    label: 'Scribe',
    layer: 'shared',
    description: {
      en: 'Structured logging facade used by system components, writing per-component JSON-lines logs.',
      zh: '系统组件使用的结构化日志门面，输出按组件分组的 JSON-lines 日志。',
    },
    capability: { en: 'Component log files, durable system journal, and replay support.', zh: '组件日志文件、持久系统日志与回放支持。' },
  },
  scene: {
    id: 'scene',
    label: 'Scene',
    layer: 'shared',
    description: {
      en: 'Live environment estimate. Maintains object registry, semantic relations, and occupancy grid.',
      zh: '实时环境估计。维护对象注册表、语义关系和占据网格。',
    },
    capability: { en: 'Object registry, semantic relations, occupancy map, approach goals, 2D/3D viewer.', zh: '对象注册、语义关系、占据地图、接近目标、2D/3D 查看器。' },
  },
  keystone: {
    id: 'keystone',
    label: 'Keystone',
    layer: 'shared',
    description: {
      en: 'Identity, persistent configuration, and access-policy source of truth.',
      zh: '身份、持久化配置与访问策略事实源。',
    },
    capability: { en: 'Operators, deployment config, fleet identity, and capability allow-lists.', zh: '操作者、部署配置、集群身份与能力允许列表。' },
  },
  vitals: {
    id: 'vitals',
    label: 'Vitals',
    layer: 'execution',
    description: {
      en: 'Robot power and component health monitoring.',
      zh: '机器人电量与组件健康监控。',
    },
    capability: { en: 'Health snapshots, thresholds, body/joint telemetry, fault-oriented demos.', zh: '健康快照、阈值规则、本体/关节遥测、故障演示。' },
  },
  chronos: {
    id: 'chronos',
    label: 'Chronos',
    layer: 'shared',
    description: {
      en: 'Unified monotonic clock and cross-sensor timestamp alignment.',
      zh: '统一单调时钟与跨传感器时间戳对齐。',
    },
    capability: { en: 'PTP/IEEE-1588 alignment and drift metrics for multimodal sensing.', zh: 'PTP/IEEE-1588 对齐与多模态传感漂移指标。' },
  },
  nexus: {
    id: 'nexus',
    label: 'Nexus',
    layer: 'shared',
    description: {
      en: 'Communication libraries for gRPC, MCP, and ROS 2 transports.',
      zh: 'gRPC、MCP 和 ROS 2 传输的通信库。',
    },
    capability: { en: 'Transport-agnostic contracts projected to gRPC, MCP, and ROS 2 clients/servers.', zh: '将传输无关合约投射为 gRPC、MCP、ROS 2 客户端/服务端。' },
  },
};

// ───────────────────────────────────────────
// Scenarios
// ───────────────────────────────────────────

export const SCENARIOS = {
  title: {
    en: 'Application Scenarios',
    zh: '应用场景演示',
  },
  subtitle: {
    en: 'The same task runtime spans simulation, real robots, natural-language interaction, scene understanding, and VLA skill deployment.',
    zh: '同一套任务运行时覆盖仿真、真实机器人、自然语言交互、场景理解与 VLA 技能部署。',
  },
  items: [
    {
      icon: 'SIM',
      title: { en: 'Webots Simulation', zh: 'Webots 仿真验证' },
      description: {
        en: 'Run office, apartment, complete apartment, break-room, and kitchen worlds with RGB-D camera, lidar, IMU, mapping, navigation, and task execution in one reproducible stack.',
        zh: '在办公室、公寓、完整公寓、休息室、厨房等世界中运行 RGB-D、雷达、IMU、建图、导航和任务执行，形成可复现实验栈。',
      },
      highlights: {
        en: ['5 built-in worlds', 'Multi-container ROS graph', 'rmw_zenoh by default', 'CI-friendly bring-up'],
        zh: ['5 个内置世界', '多容器 ROS 图', '默认 rmw_zenoh', '适合 CI 验证'],
      },
    },
    {
      icon: 'MAP',
      title: { en: 'Scene-Aware Tasks', zh: '场景感知任务' },
      description: {
        en: 'Scene maintains live objects, semantic relations, occupancy grids, and approach goals. Pilot can ask what exists now and plan against the current environment.',
        zh: 'Scene 维护实时对象、语义关系、占据栅格与接近目标。Pilot 可以查询当下场景，并据此生成任务方案。',
      },
      highlights: {
        en: ['Object registry', 'Semantic relations', '2D/3D web viewer', 'Goal-near planning'],
        zh: ['对象注册表', '语义关系', '2D/3D 查看器', '接近目标规划'],
      },
    },
    {
      icon: 'BOT',
      title: { en: 'Real Robot Deployment', zh: '真实机器人部署' },
      description: {
        en: 'Published deployments cover AgileX Ranger Mini v3 and DEEP Robotics Lite3, with manifests that assemble primitives, services, skills, and body descriptions.',
        zh: '已发布部署覆盖 AgileX Ranger Mini v3 与 DEEP Robotics Lite3，通过清单组合原语、服务、技能和本体描述。',
      },
      highlights: {
        en: ['Mobile robot', 'Quadruped', 'RGB-D + lidar', 'Robot catalog'],
        zh: ['轮式移动机器人', '四足机器人', 'RGB-D + 雷达', '机器人目录'],
      },
    },
    {
      icon: 'VLA',
      title: { en: 'Skill Installation', zh: '技能安装与迁移' },
      description: {
        en: 'Skills wrap reusable task flows or learned VLA policies. The Robonix Skill Toolkit supports data collection, OpenVLA-OFT fine-tuning, and robot-arm deployment.',
        zh: '技能封装可复用任务流或学习到的 VLA 策略。Robonix Skill Toolkit 支持数据采集、OpenVLA-OFT 微调和机械臂部署。',
      },
      highlights: {
        en: ['Task-facing packages', 'VLA policy workflow', 'Independent install', 'Composable services'],
        zh: ['面向任务的包', 'VLA 策略流程', '独立安装', '服务可组合'],
      },
    },
  ],
};

// ───────────────────────────────────────────
// Live Demo
// ───────────────────────────────────────────

export const DEMO = {
  title: {
    en: 'Live Demo',
    zh: '演示视频',
  },
  subtitle: {
    en: 'See Robonix in action — from natural language commands to real robot execution.',
    zh: '观看 Robonix 的实际运行——从自然语言命令到真实机器人执行。',
  },
  videos: [
    {
      id: 'hardware-decoupling',
      title: { en: 'Cross-Platform Hardware Decoupling Verification', zh: '跨平台硬件解耦验证' },
      description: {
        en: 'To verify its hardware decoupling execution capabilities, Robonix successfully conducted cross-platform demonstrations of the same task workflow on both the AgileX Ranger rover and the DeepRobotics Lite3 quadruped robot. The tests confirm that Robonix can seamlessly bridge different hardware morphologies, directly mapping natural language navigation commands into the robot\'s actual execution behaviors, while maintaining a real-time feedback mechanism based on environmental perception.',
        zh: '为验证硬件解耦执行能力，Robonix 在松灵 Ranger 小车和云深处 Lite3 机器狗上完成了同一套任务流程的跨平台演示。测试证实，Robonix 能够跨越不同硬件形态，将自然语言导航指令直接映射为机器的实际运行行为，并具备基于环境感知的实时反馈机制。',
      },
      src: 'https://wheatfox.oss-cn-beijing.aliyuncs.com/robonix/videos/20260804/robonix-cross-embodiment-demo.mp4',
      duration: '2:36',
    },
    {
      id: 'autonomous-pick-delivery',
      title: { en: 'Autonomous Pick & Delivery Closed-Loop Demo', zh: '自主取送闭环演示' },
      description: {
        en: 'Demonstrating a complete autonomous pick-and-delivery workflow: the robot navigates to a target location, picks up an object, transports it to the destination, and returns without human intervention.',
        zh: '展示完整的自主取送闭环工作流：机器人自主导航至目标位置、拾取物品、运送至目的地并返回，全程无需人工干预。',
      },
      src: 'https://wheatfox.oss-cn-beijing.aliyuncs.com/robonix/videos/20260804/robonix-autonomous-pick-and-delivery-demo.mp4',
      duration: '3:29',
    },
    {
      id: 'interruptible-multitask',
      title: { en: 'Interruptible Multi-Task Execution Demo', zh: '可中断多任务执行演示' },
      description: {
        en: 'Showcasing Robonix\'s ability to handle multiple concurrent tasks and respond to real-time interruptions. When a higher-priority command arrives mid-execution, the robot gracefully suspends the current task, switches context, and resumes seamlessly.',
        zh: '展示 Robonix 处理多个并发任务并响应实时中断的能力。当高优先级指令在任务执行中途到达时，机器人能够优雅地挂起当前任务、切换上下文并无缝恢复。',
      },
      src: 'https://wheatfox.oss-cn-beijing.aliyuncs.com/robonix/videos/20260804/robonix-interruptible-multitask-execution-demo.mp4',
      duration: '6:24',
    },
    {
      id: 'dynamic-navigation',
      title: { en: 'Dynamic Navigation Speed Demo', zh: '动态导航速度演示' },
      description: {
        en: 'Showcasing Robonix\'s dynamic navigation: real-time speed adjustment while the robot is in motion.',
        zh: '展示 Robonix 的动态导航能力：支持用户在导航任务执行期间，实时调节机器人的行进速度。',
      },
      src: 'https://wheatfox.oss-cn-beijing.aliyuncs.com/robonix/videos/20260804/robonix-dynamic-navigation-speed-demo.mp4',
      duration: '1:47',
    },
  ],
};

// ───────────────────────────────────────────
// Hardware Support
// ───────────────────────────────────────────

export const HARDWARE = {
  title: {
    en: 'Supported Hardware',
    zh: '支持的硬件',
  },
  subtitle: {
    en: 'Real robot platforms, standalone devices, and simulation targets validated with Robonix.',
    zh: '已通过 Robonix 验证的真实机器人平台、单独设备与仿真目标。',
  },
  filters: [
    { label: { en: 'All', zh: '全部' }, value: 'all' },
    { label: { en: 'Integrated Systems', zh: '集成系统' }, value: 'integrated' },
    { label: { en: 'Standalone Devices', zh: '单独设备' }, value: 'standalone' },
    { label: { en: 'Arms & Hands', zh: '机械臂与灵巧手' }, value: 'manipulator' },
    { label: { en: 'Quadrupeds', zh: '四足机器人' }, value: 'quadruped' },
    { label: { en: 'Simulation', zh: '仿真平台' }, value: 'simulation' },
  ],
  robots: [
    {
      name: 'AgileX Ranger Mini v3',
      type: 'wheeled',
      status: 'integrated',
      task: { en: 'Navigation & Patrol', zh: '导航、巡检' },
      image: '/images/ranger.jpg',
      manufacturer: 'AgileX Robotics',
      specs: [
        'NVIDIA Jetson AGX Orin',
        'AgileX Piper arm',
        'Livox MID-360 LiDAR/IMU',
        'Orbbec Gemini 336L RGB-D',
        'Orbbec Dabai DC1 wrist camera',
      ],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.agilex.ranger_mini_v3/',
      description: {
        en: 'AgileX\'s mobile manipulation platform combines a Ranger Mini v3 wheeled base, NVIDIA Jetson AGX Orin compute, and an AgileX Piper arm into a single integrated system — ready for autonomous navigation, patrol, and mobile grasping tasks.',
        zh: '松灵旗下的移动操作平台，将 Ranger Mini v3 轮式底盘、NVIDIA Jetson AGX Orin 计算单元与 AgileX Piper 机械臂整合为集成系统，可执行自主导航、巡检与移动抓取任务。',
      },
    },
    {
      name: 'Wheeltec R550 MiniTank',
      type: 'wheeled',
      status: 'integrated',
      task: { en: 'Navigation & Education', zh: '导航、教育' },
      image: '/images/wheeltec.jpg',
      manufacturer: 'Wheeltec',
      specs: [
        'ROS educational robot',
        'Lightweight tracked chassis',
        'Highly expandable platform',
      ],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.wheeltec.r550/',
      description: {
        en: 'Wheeltec\'s R550 MiniTank is a lightweight ROS educational robot featuring a rugged tracked chassis. Designed for robotics education, algorithm research, and rapid prototyping, it offers strong expandability with support for a wide range of sensors and accessories.',
        zh: '轮趣科技推出的 R550 MiniTank 轻量级 ROS 教育机器人，采用履带式底盘，专为机器人教育、算法研究与快速原型开发而设计，具备强大的扩展性，支持多种传感器与配件。',
      },
    },
    {
      name: 'Yobotics Y20W',
      type: 'wheeled-quadruped',
      status: 'integrated',
      task: { en: 'Navigation & Interaction', zh: '导航、交互' },
      image: '/images/y20w.jpg',
      manufacturer: 'Yobotics',
      specs: [
        'Wheeled-legged quadruped',
        'Livox MID-360 LiDAR',
        'Intel RealSense D435i RGB-D',
        'ROS 2 navigation & localization',
        'Speech ASR & wake-word',
        'VLM scene understanding',
      ],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.yobotics.y20w/',
      description: {
        en: 'Yobotics\' Y20W wheeled-legged quadruped robot dog, integrated with the Robonix runtime to expose chassis motion, Livox LiDAR, RealSense RGB-D, ROS 2 navigation, speech, and vision-based scene understanding as composable primitives, services, and skills — validated for autonomous navigation and natural-language interaction.',
        zh: '优宝特推出的 Y20W 轮足式四足机器狗，通过 Robonix 运行时将底盘运动、Livox 激光雷达、RealSense RGB-D 相机、ROS 2 导航、语音交互与视觉场景理解封装为可组合的 primitives、services 与 skills，已完成自主导航与自然语言交互验证。',
      },
    },
    {
      name: 'DEEP Robotics Lite3',
      type: 'quadruped',
      status: 'integrated',
      task: { en: 'Navigation & Patrol', zh: '导航、巡检' },
      image: '/images/lite3.jpg',
      manufacturer: 'DEEP Robotics',
      specs: [
        'Livox MID-360 LiDAR/IMU',
        'Orbbec RGB-D camera',
      ],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.deep_robotics.lite3/',
      description: {
        en: 'DEEP Robotics\' flagship quadruped robot dog. Lite3 is a lightweight, agile legged platform widely used in research and industry for terrain traversal, inspection, and patrol.',
        zh: '云深处科技的旗舰四足机器狗。Lite3 是一款轻量、敏捷的足式平台，广泛应用于科研与工业场景，用于地形穿越、巡检与巡逻。',
      },
    },
    {
      name: 'AgileX Piper',
      type: 'arm',
      status: 'standalone',
      task: { en: 'Grasping', zh: '抓取' },
      image: '/images/piper.png',
      manufacturer: 'AgileX Robotics',
      specs: ['6-DOF collaborative arm'],
      tested: false,
      url: '',
      description: {
        en: 'A 6-DOF collaborative robotic arm by AgileX Robotics, designed for lightweight manipulation tasks. Works standalone or as a modular payload on mobile bases.',
        zh: '松灵机器人推出的六自由度协作机械臂，面向轻量级操作任务，可独立使用或作为模块化负载挂载于移动底盘上。',
      },
    },
    {
      name: 'AgileX Nero',
      type: 'arm',
      status: 'standalone',
      task: { en: 'Grasping', zh: '抓取' },
      image: '/images/nero.png',
      manufacturer: 'AgileX Robotics',
      specs: ['Force-controlled robotic arm'],
      tested: false,
      url: '',
      description: {
        en: 'A force-controlled robotic arm by AgileX Robotics with advanced torque sensing, suited for precision assembly and contact-rich manipulation tasks.',
        zh: '松灵机器人推出的力控机械臂，具备关节力矩传感能力，适用于精密装配与接触式操作任务。',
      },
    },
    {
      name: 'BeingBeyond D1',
      type: 'hand',
      status: 'standalone',
      task: { en: 'Grasping', zh: '抓取' },
      image: '/images/D1.png',
      manufacturer: 'BeingBeyond',
      specs: ['Dexterous hand'],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.beingbeyond.d1/',
      description: {
        en: 'BeingBeyond\'s D1 dexterous hand delivers fine-grained finger control for complex grasping and in-hand manipulation. Designed as a modular end-effector for research and industrial robot arms.',
        zh: 'BeingBeyond 推出的 D1 灵巧手，提供精细的手指控制能力，可完成复杂抓取与手中操作。设计为模块化末端执行器，适配科研与工业机械臂。',
      },
    },
    {
      name: 'Hantewin Benben',
      type: 'service',
      status: 'standalone',
      task: { en: 'Service', zh: '服务' },
      image: '/images/Benben.png',
      manufacturer: 'Hantewin',
      specs: ['Service robot', 'Integrating with Robonix'],
      tested: false,
      url: '',
      description: {
        en: 'Hantewin\'s intelligent service robot platform, designed for indoor delivery, reception, and guided tours. Currently being integrated with Robonix for autonomous service workflows.',
        zh: '汉特云推出的智能服务机器人平台，面向室内配送、接待与导览场景。正在与 Robonix 集成，实现自主服务工作流。',
      },
    },
    {
      name: 'Unitree Go2',
      type: 'quadruped',
      status: 'standalone',
      task: { en: 'Navigation & Patrol', zh: '导航、巡检' },
      image: '/images/go2.png',
      manufacturer: 'Unitree',
      specs: ['Quadruped platform'],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.unitree.go2/',
      description: {
        en: 'Unitree\'s latest consumer-grade quadruped robot dog. Go2 features enhanced mobility and obstacle avoidance, suitable for patrol, inspection, and education use cases.',
        zh: '宇树科技最新一代消费级四足机器狗。Go2 具备更强的运动能力和避障性能，适用于巡逻、巡检与教育场景。',
      },
    },
    {
      name: 'DEEP Robotics Lynx',
      type: 'wheeled-quadruped',
      status: 'standalone',
      task: { en: 'Navigation & Patrol', zh: '导航、巡检' },
      image: '/images/山猫.png',
      manufacturer: 'DEEP Robotics',
      specs: ['Wheeled-legged quadruped'],
      tested: false,
      url: '',
      description: {
        en: 'DEEP Robotics\' Lynx is a rugged wheeled-legged hybrid quadruped that combines wheel efficiency with legged terrain adaptability — ideal for outdoor patrol and rough-terrain inspection.',
        zh: '云深处科技推出的山猫轮足混合四足机器人，结合轮式高效与足式越障能力，适用于户外巡逻与复杂地形巡检。',
      },
    },
    {
      name: 'Minecraft',
      type: 'simulation',
      status: 'simulation',
      task: { en: 'Simulation', zh: '仿真' },
      image: '/images/MineCraft.png',
      manufacturer: 'Mojang / Forge',
      specs: [
        'Minecraft Java 1.20.4',
        'Forge 49.2.0',
        'OpenJDK 17',
        'ROS 2 Jazzy + Fast DDS',
      ],
      tested: true,
      url: 'https://packages.robonix.ai/robots/robonix.robot.syswonder.minecraft_bot/',
      description: {
        en: 'A Minecraft-based simulation sandbox for embodied AI. Robonix agents can navigate, build, and interact in procedurally generated block worlds — a low-cost, high-variation test environment for planning and exploration algorithms.',
        zh: '基于 Minecraft 的具身智能仿真沙盒。Robonix agent 可在程序生成的方块世界中导航、建造与交互——为规划与探索算法提供低成本、高多样性的测试环境。',
      },
    },
  ],
  matrixColumns: [
    { key: 'manufacturer', label: { en: 'Manufacturer', zh: '制造商' } },
    { key: 'name', label: { en: 'Model', zh: '型号' } },
    { key: 'type', label: { en: 'Type', zh: '类型' } },
    { key: 'status', label: { en: 'Status', zh: '状态' } },
    { key: 'task', label: { en: 'Task', zh: '任务' } },
    { key: 'tested', label: { en: 'Tested', zh: '已测试' } },
  ],
};

// ───────────────────────────────────────────
// Benchmark / Performance
// ───────────────────────────────────────────

export const BENCHMARK = {
  title: {
    en: 'Performance & Reliability',
    zh: '性能与可靠性',
  },
  subtitle: {
    en: 'Robonix improves task success rates through retry mechanisms, safety gating, and structured execution.',
    zh: 'Robonix 通过重试机制、安全门控和结构化执行提升任务成功率。',
  },
  charts: [
    {
      title: { en: 'Task Success Rate Improvement', zh: '任务成功率提升' },
      description: {
        en: 'With Robonix\'s retry and recovery mechanisms, VLA policies achieve significantly higher success rates on long-horizon tasks.',
        zh: '借助 Robonix 的重试和恢复机制，VLA 策略在长周期任务上取得了显著更高的成功率。',
      },
      before: { label: { en: 'Without Robonix', zh: '无 Robonix' }, value: 74.5 },
      after: { label: { en: 'With Robonix', zh: '有 Robonix' }, value: 92.8 },
    },
    {
      title: { en: 'Multi-Platform Consistency', zh: '多平台一致性' },
      description: {
        en: 'The same skill code, tested across simulation and real hardware, achieves consistent results through standardized capability contracts.',
        zh: '相同的技能代码在仿真和真实硬件上通过标准化的能力合约进行测试，取得了一致的结果。',
      },
      platforms: [
        { name: 'Simulation Env A', value: 95 },
        { name: 'Simulation Env B', value: 91 },
        { name: 'Real Robot A', value: 88 },
        { name: 'Real Robot B', value: 85 },
        { name: 'Robot Arm', value: 90 },
      ],
    },
  ],
};

// ───────────────────────────────────────────
// Roadmap
// ───────────────────────────────────────────

export const ROADMAP = {
  title: {
    en: 'Development Roadmap',
    zh: '发展路线图',
  },
  subtitle: {
    en: 'Our path to a general-purpose embodied AI operating system.',
    zh: '通往通用具身智能操作系统的路线图。',
  },
  phases: [
    {
      version: 'v0.1.0',
      date: '20XX QX',
      title: { en: 'Session-Centered Runtime', zh: '会话中心运行时' },
      status: { en: 'Released', zh: '已发布' },
      items: {
        en: [
          'Atlas capability registry and discovery',
          'RTDL plan execution (sequence/parallel/do)',
          'VLM-driven Pilot with OpenAI-compatible endpoints',
          'Soma robot body model with URDF support',
          'Simulator integration (office, apartment, kitchen)',
          'Multi-container ROS 2 with rmw_zenoh',
          'Liaison chat and voice interfaces',
          'Scribe structured audit journal',
        ],
        zh: [
          'Atlas 能力注册与发现',
          'RTDL 计划执行（sequence/parallel/do）',
          'VLM 驱动的 Pilot，兼容 OpenAI API',
          'Soma 机器人机体模型，支持 URDF',
          '仿真器集成（办公室、公寓、厨房）',
          '多容器 ROS 2 + rmw_zenoh',
          'Liaison 聊天与语音界面',
          'Scribe 结构化审计日志',
        ],
      },
    },
    {
      version: 'v0.2.0',
      date: '20XX QX',
      title: { en: 'Verification & Fleet', zh: '验证与集群' },
      status: { en: 'In Progress', zh: '进行中' },
      items: {
        en: [
          'Sentinel safety rule engine',
          'Vitals health monitoring dashboard',
          'Chronos cross-sensor time synchronization',
          'Scene live 3D environment model',
          'Multi-robot fleet coordination',
          'Keystone auth & access control',
          'Expanded hardware support (humanoid, drone)',
        ],
        zh: [
          'Sentinel 安全规则引擎',
          'Vitals 健康监控面板',
          'Chronos 跨传感器时间同步',
          'Scene 实时 3D 环境模型',
          '多机器人集群协调',
          'Keystone 认证与访问控制',
          '扩展硬件支持（人形、无人机）',
        ],
      },
    },
    {
      version: 'v1.0.0',
      date: '20XX QX',
      title: { en: 'Autonomy & Ecosystem', zh: '自主性与生态系统' },
      status: { en: 'Future', zh: '后续' },
      items: {
        en: [
          'Autonomous task decomposition and replanning',
          'Cross-embodiment skill transfer',
          'Community package marketplace',
          'Production-grade safety certification',
          'Edge deployment (multiple platforms)',
          'Cloud-to-edge offloading',
          'Public benchmark leaderboard',
        ],
        zh: [
          '自主任务分解与重规划',
          '跨形态技能迁移',
          '社区包市场',
          '生产级安全认证',
          '边缘部署（多种平台）',
          '云端到边缘卸载',
          '公共基准排行榜',
        ],
      },
    },
  ],
};

// ───────────────────────────────────────────
// Team, Metrics & Testimonials
// ───────────────────────────────────────────

export const TEAM = {
  title: {
    en: 'Team & Community',
    zh: '团队与社区',
  },
  subtitle: {
    en: 'Backed by the CCF Ubiquitous Operating System Open Community, developed by the Syswonder open-source community, and powered by researchers and engineers from leading institutions.',
    zh: '依托CCF泛在操作系统开放社区，矽望开源社区组织研发，汇聚来自顶尖机构的研究者。',
  },
  members: [
    { name: 'CCF', logo: '/images/CCF.png', url: 'https://www.gitlink.org.cn/zone/uos' },
    { name: 'Syswonder', logo: '/images/Syswonder.svg', url: 'https://syswonder.org' },
    { name: 'Peking University', logo: '/images/PKU.png', url: 'https://www.pku.edu.cn' },
    { name: 'Tsinghua University', logo: '/images/THU.png', url: 'https://www.tsinghua.edu.cn' },
    { name: 'ICT-CAS', logo: '/images/ICT-CAS.png', url: 'https://www.ict.ac.cn' },
    { name: 'Shanghai Jiao Tong University', logo: '/images/SJTU.png', url: 'https://www.sjtu.edu.cn' },
    { name: 'Zhejiang University', logo: '/images/ZJU.webp', url: 'https://www.zju.edu.cn' },
    { name: 'Northwestern Polytechnical University', logo: '/images/NWPU.png', url: 'https://www.nwpu.edu.cn' },
    { name: 'Beihang University', logo: '/images/BUAA.png', url: 'https://www.buaa.edu.cn/' },
    { name: 'Harbin Institute of Technology', logo: '/images/HIT.png', url: 'https://www.hit.edu.cn/' },
    { name: 'Beijing University of PT', logo: '/images/BUPT.png', url: 'https://www.bupt.edu.cn/' },
    { name: 'University of CAS', logo: '/images/UCAS.png', url: 'https://www.ucas.ac.cn' },
    { name: 'University of ESTC', logo: '/images/UESTC.png', url: 'https://www.uestc.edu.cn' },
    { name: 'FuZhou University', logo: '/images/FZU.png', url: 'https://www.fzu.edu.cn/' },
    { name: 'Donghua University', logo: '/images/DHU.png', url: 'https://www.dhu.edu.cn/' },
    { name: 'Hangzhou Dianzi University', logo: '/images/HZDU.svg', url: 'https://www.hdu.edu.cn' },
    { name: 'Zhejiang University of Technology', logo: '/images/ZJUT.png', url: 'https://www.zjut.edu.cn' },
    { name: 'Advanced Institute of Information Technology Peking University', logo: '/images/AIIT.png', url: 'https://aiit.org.cn/' },
    { name: 'TLAIC', logo: '/images/TLAIOS.svg', url: 'https://www.tlaic.ac.cn' },
  ],
};

// ───────────────────────────────────────────
// Supported Vendors
// ───────────────────────────────────────────

export const VENDORS = {
  title: {
    en: 'Ecosystem',
    zh: '生态',
  },
  subtitle: {
    en: 'Robot vendors, model providers, and application developers in the Robonix ecosystem.',
    zh: 'Robonix 生态中的机器人厂商、模型提供商、应用开发者等。',
  },
  partners: [
    { name: 'DEEP Robotics', logo: '/images/DeepRobotics.png', url: 'https://www.deeprobotics.cn' },
    { name: 'AGILE·X', logo: '/images/agilex.png', url: 'https://www.agilex.ai/' },
    { name: 'HANTEWIN', logo: '/images/Hantewin.png', url: 'https://www.hantewin.com/' },
    { name: 'LINKERBOT', logo: '/images/LinkerBot.png', url: 'https://www.linkerbot.cn/' },
    { name: 'YOBOTICS', logo: '/images/Yobotics.png', url: 'https://yobotics.cn' },
    { name: 'INSPIRE-ROBOTS', logo: '/images/Inspire.png', url: 'https://www.inspire-robots.com/' },
    { name: 'AUBO', logo: '/images/Aubo.png', url: 'https://www.aubo-robotics.cn/' },
    { name: 'BeingBeyond', logo: '/images/BeingBeyond.svg', url: 'https://beingbeyond.com' },
    { name: 'JAKA', logo: '/images/Jaka.png', url: 'https://www.jaka.com/zh' },
    { name: 'ModelBest', logo: '/images/ModelBest.svg', url: 'https://modelbest.cn' },
  ],
};

// ───────────────────────────────────────────
// Documentation Cards
// ───────────────────────────────────────────

export const DOCS = {
  title: {
    en: 'Documentation',
    zh: '文档资源',
  },
  subtitle: {
    en: 'Everything you need to get started with Robonix.',
    zh: '开始使用 Robonix 所需的一切。',
  },
  cards: [
    {
      icon: '📖',
      title: { en: 'Technical Documentation', zh: '技术文档' },
      description: {
        en: 'Architecture overview, namespace & contract system, API reference, and interface catalog. Understand how Robonix works under the hood.',
        zh: '架构概览、命名空间与合约系统、API 参考和接口目录。深入了解 Robonix 的内部工作原理。',
      },
      href: 'https://book.robonix.ai/',
    },
    {
      icon: '🚀',
      title: { en: 'Installation & Operation', zh: '安装与操作' },
      description: {
        en: 'Quickstart guide, deployment walkthrough, simulator setup, and robot integration tutorial.',
        zh: '快速入门指南、部署演练、仿真器设置和机器人集成教程。',
      },
      href: 'https://robonix.syswonder.org/getting-started/quickstart.html',
    },
    {
      icon: '🔧',
      title: { en: 'Developer Guide', zh: '开发者指南' },
      description: {
        en: 'Package development guide, capability contract authoring, skill toolkit, and contribution workflow.',
        zh: '包开发指南、能力合约编写、技能工具包和贡献工作流。',
      },
      href: 'https://robonix.syswonder.org/integration-guide/package-catalog.html',
    },
  ],
};

// ───────────────────────────────────────────
// Papers & Reports
// ───────────────────────────────────────────

export const PAPERS = {
  title: {
    en: 'Papers & Reports',
    zh: '论文与报告',
  },
  subtitle: {
    en: 'Technical whitepapers, research reports, and publications from the Robonix team.',
    zh: '来自 Robonix 团队的技术白皮书、研究报告与学术发表。',
  },
  papers: [
    {
      icon: '📄',
      category: { en: 'Whitepaper', zh: '白皮书' },
      title: {
        en: 'Robonix: Embodied AI Operating System — Technical Whitepaper',
        zh: '具身智能操作系统技术白皮书',
      },
      description: {
        en: 'Published by the CCF Ubiquitous Operating System Open Community, this white paper starts from the current development status of the embodied intelligence industry. It systematically reviews and analyzes several issues in the development of current embodied intelligence software systems, and proposes a novel operating system design tailored for embodied intelligence. The initiative aims to reconstruct the engineering foundation of embodied intelligence through the operating system paradigm, providing support for building a large-scale and sustainable industrial ecosystem for embodied intelligence.',
        zh: '本书由CCF泛在操作系统开放社区发布，白皮书从当前具身智能产业的发展现状出发，系统梳理并分析了当前具身智能软件系统开发中的若干问题，提出了一种面向具身智能的新型操作系统设计，旨在以操作系统范式重构具身智能的工程基础，并为构建大规模、可持续的具身智能产业生态提供支撑。',
      },
      authors: { en: 'Robonix Team', zh: 'Robonix 团队' },
      date: '2026',
      href: 'http://syswonder-cdn.oscommunity.cn/Syswonder_EAIOS_whitepaper-v0.1.pdf',
    },
  ],
};

// ───────────────────────────────────────────
// Ecosystem
// ───────────────────────────────────────────

export const ECOSYSTEM = {
  title: {
    en: 'Ecosystem',
    zh: '生态系统',
  },
  items: [
    {
      icon: '📖',
      title: { en: 'Documentation', zh: '文档' },
      description: {
        en: 'Comprehensive guides, API references, and tutorials to help you get the most out of Robonix.',
        zh: '全面的指南、API 参考和教程，帮助你充分发挥 Robonix 的潜力。',
      },
      href: 'https://book.robonix.ai/',
    },
    {
      icon: '📦',
      title: { en: 'Package Catalog', zh: '包目录' },
      description: {
        en: 'Browse and search the registry of Robonix packages — primitives, services, and skills.',
        zh: '浏览和搜索 Robonix 包注册表——原语、服务和技能。',
      },
      href: 'https://packages.robonix.ai/',
    },
    {
      icon: '🔬',
      title: { en: 'CI Reports', zh: '持续集成报告' },
      description: {
        en: 'Automated testing and integration reports for the Robonix platform and its packages.',
        zh: 'Robonix 平台及其包的自动化测试和集成报告。',
      },
      href: 'https://robonix-ci-reports.syswonder.org/reports/',
    },
  ],
};

// ───────────────────────────────────────────
// CTA
// ───────────────────────────────────────────

export const CTA = {
  title: {
    en: 'Ready to build the future of embodied AI?',
    zh: '准备好构建具身智能未来了吗？',
  },
  description: {
    en: 'Read the docs or star the repository. The next robot capability should install like software.',
    zh: '阅读文档或点亮仓库。下一项机器人能力，应该像软件一样安装。',
  },
  buttons: [
    {
      label: { en: '⭐ Star on GitHub', zh: '⭐ 点亮 GitHub' },
      href: 'https://github.com/syswonder/robonix',
      primary: true,
    },
    {
      label: { en: 'Read Documentation', zh: '阅读文档' },
      href: 'https://book.robonix.ai/',
      primary: false,
    },
  ],
};

// ───────────────────────────────────────────
// Announcement
// ───────────────────────────────────────────

export const ANNOUNCEMENT = {
  text: {
    en: '🏛️ Releasing at CCF China Open Source Conference on August 15th — Stay tuned!',
    zh: '🏛️ 8月15日将于CCF中国开源大会上发布，敬请期待！',
  },
};

// ───────────────────────────────────────────
// Footer
// ───────────────────────────────────────────

export const FOOTER = {
  description: {
    en: 'Let robots understand you and act for you.',
    zh: '让机器人懂你所想，行你所愿。',
  },
  product: [
    { label: { en: 'Why', zh: '问题' }, href: '#why' },
    { label: { en: 'Architecture', zh: '架构' }, href: '#architecture' },
    { label: { en: 'Hardware', zh: '硬件' }, href: '#hardware' },
    { label: { en: 'Ecosystem', zh: '生态' }, href: '#vendors' },
  ],
  resources: [
    { label: { en: 'Documentation', zh: '文档' }, href: 'https://book.robonix.ai/' },
    { label: { en: 'Package Catalog', zh: '包目录' }, href: 'https://packages.robonix.ai/' },
    { label: { en: 'CI Reports', zh: 'CI 报告' }, href: 'https://ci-reports.robonix.ai/' },
    { label: { en: 'Template Repository', zh: '模板仓库' }, href: 'https://github.com/syswonder/template-rbnx' },
  ],
  community: [
    { label: { en: 'GitHub', zh: 'GitHub' }, href: 'https://github.com/syswonder/robonix' },
    { label: { en: 'Gitlink', zh: 'Gitlink' }, href: 'https://www.gitlink.org.cn/syswonder/robonix' },
    { label: { en: 'Discussions', zh: '讨论区' }, href: 'https://github.com/syswonder/robonix/discussions' },
    { label: { en: 'Syswonder Community', zh: '矽望社区' }, href: 'https://syswonder.org/' },
  ],
  techStack: {
    en: 'Built with React, Three.js & GSAP',
    zh: '使用 React、Three.js 和 GSAP 构建',
  },
  license: {
    en: 'MulanPSL-2.0',
    zh: '木兰宽松许可证 v2',
  },
  copyright: {
    en: '© 2026 Syswonder Community Robonix',
    zh: '© 2026 矽望社区 Robonix',
  },
};
