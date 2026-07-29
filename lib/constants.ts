// ═══════════════════════════════════════════════════════════
// Robonix Website — All bilingual content (en / zh)
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────
// Navigation
// ───────────────────────────────────────────

export const NAV_LINKS = [
  { label: { en: 'Features', zh: '特性' }, href: '#features' },
  { label: { en: 'Architecture', zh: '架构' }, href: '#architecture' },
  { label: { en: 'Scenarios', zh: '场景' }, href: '#scenarios' },
  { label: { en: 'Live Demo', zh: '演示' }, href: '#demo' },
  { label: { en: 'Hardware', zh: '硬件' }, href: '#hardware' },
  { label: { en: 'Roadmap', zh: '路线图' }, href: '#roadmap' },
  { label: { en: 'Team', zh: '团队' }, href: '#team' },
  { label: { en: 'Vendors', zh: '支持厂家' }, href: '#vendors' },
];

export const NAV_EXTERNAL_LINKS = [
  { label: { en: 'Docs', zh: '文档' }, href: 'https://robonix-book.syswonder.org/' },
  { label: { en: 'Packages', zh: '包目录' }, href: 'https://robonix-package-catalog.syswonder.org/' },
];

// ───────────────────────────────────────────
// Hero
// ───────────────────────────────────────────

export const HERO = {
  tagline: {
    en: 'Cognitive-Physical Decoupling · Session-Centered Runtime',
    zh: '认知-物理解耦 · 会话中心运行时',
  },
  title: 'Robonix',
  subtitle: {
    en: 'The Embodied AI Operating System',
    zh: '具身智能操作系统',
  },
  description: {
    en: 'A system substrate for building embodied intelligence across heterogeneous robots. Models perceive, plan, and act through diverse robot bodies — without being rewritten for every vendor SDK.',
    zh: '为异构机器人构建具身智能的系统基座。模型通过多样化的机器人身体感知、规划和行动——无需为每个厂商 SDK 重新编写。',
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
  badges: [
    { label: { en: 'Supported Robots', zh: '支持机器人' }, value: 'XX+' },
    { label: { en: 'Open Source', zh: '开源' }, value: 'Open Source License' },
    { label: { en: 'ROS 2 Compatible', zh: '兼容 ROS 2' }, value: 'ROS 2' },
    { label: { en: 'Cross-Platform', zh: '跨平台' }, value: 'x86_64 / arm64' },
  ],
};

// ───────────────────────────────────────────
// Why Robonix — pain points & solutions (2×2 grid)
// ───────────────────────────────────────────

export const WHY_ROBONIX = {
  title: {
    en: 'Solving the hardest problems in embodied AI',
    zh: '解决具身智能中最困难的问题',
  },
  subtitle: {
    en: 'Robonix decouples AI models from hardware, making robot applications portable, composable, and scalable.',
    zh: 'Robonix 将 AI 模型与硬件解耦，使机器人应用可移植、可组合、可扩展。',
  },
  cards: [
    {
      pain: {
        en: 'LLM-direct-to-hardware coupling',
        zh: '大模型与硬件的直接耦合',
      },
      solution: {
        en: 'Cognitive-Physical Decoupling',
        zh: '认知-物理解耦',
      },
      description: {
        en: 'Models and skills use shared capability contracts instead of vendor-specific SDKs. Integrate a robot body once — ~XXX lines of YAML — and every model and skill that speaks the contract can drive it.',
        zh: '模型和技能使用共享的能力合约而非厂商专用 SDK。一次集成机器人本体（约 XXX 行 YAML），所有遵循合约的模型和技能即可驱动它。',
      },
    },
    {
      pain: {
        en: 'Fragile, single-shot task execution',
        zh: '脆弱的单次任务执行',
      },
      solution: {
        en: 'Session-Centered Runtime',
        zh: '会话中心运行时',
      },
      description: {
        en: 'Long-running plans have explicit identity and state. Observe, steer, pause, and cancel tasks without embedding lifecycle management into every skill — the system handles it.',
        zh: '长时间运行的计划具有显式的身份标识和状态。观察、引导、暂停和取消任务，无需在每个技能中嵌入生命周期管理——系统统一处理。',
      },
    },
    {
      pain: {
        en: 'Every robot requires a full-stack rewrite',
        zh: '每个机器人需要全栈重写',
      },
      solution: {
        en: 'Train Once, Deploy on Any Robot',
        zh: '一次训练，任意部署',
      },
      description: {
        en: 'Hardware capabilities are discoverable through Atlas. A VLA policy trained on one manipulator transfers to another that exposes the same arm/gripper contracts — no model retraining required.',
        zh: '硬件能力通过 Atlas 可发现。在一种机械臂上训练的 VLA 策略可迁移到暴露相同手臂/夹爪合约的其他机械臂——无需重新训练模型。',
      },
    },
    {
      pain: {
        en: 'No safety net between AI plans and physical action',
        zh: 'AI 计划与物理行动之间缺乏安全防护',
      },
      solution: {
        en: 'Built-in Safety & Audit Trail',
        zh: '内置安全与审计追踪',
      },
      description: {
        en: 'Sentinel enforces safety rules before every capability dispatch. Scribe records a structured, replayable journal of every decision and action for compliance and debugging.',
        zh: 'Sentinel 在每次能力调度前强制执行安全规则。Scribe 为合规和调试记录结构化、可回放的决策与行动日志。',
      },
    },
  ],
};

// ───────────────────────────────────────────
// Core Concepts / Architecture tabs
// ───────────────────────────────────────────

export const ARCHITECTURE = {
  title: {
    en: 'System Architecture',
    zh: '系统架构',
  },
  subtitle: {
    en: 'Twelve system components keep planning, execution, state, communication, health, and safety separate from hardware drivers and skills.',
    zh: '十二个系统组件将规划、执行、状态、通信、健康和安全与硬件驱动和技能分离。',
  },
  principles: [
    {
      title: { en: 'Session-Centered Runtime', zh: '会话中心运行时' },
      description: {
        en: 'Every task is a session with explicit identity, state, and lifecycle. Observe, steer, and cancel without per-skill instrumentation.',
        zh: '每个任务都是有明确标识、状态和生命周期的会话。观察、引导和取消无需按技能单独实现。',
      },
    },
    {
      title: { en: 'Adapter + Bridge Pattern', zh: '适配器 + 桥接模式' },
      description: {
        en: 'Hardware vendors expose capabilities through primitives. Models consume capabilities through contracts. The system bridges them at runtime.',
        zh: '硬件厂商通过原语暴露能力。模型通过合约消费能力。系统在运行时将它们桥接起来。',
      },
    },
    {
      title: { en: 'Dual Skill Runtimes', zh: '双技能运行时' },
      description: {
        en: 'Skills run as either Python services or Rust-native binaries. Both use the same gRPC/MCP transport and capability contracts.',
        zh: '技能以 Python 服务或 Rust 原生二进制运行。两者使用相同的 gRPC/MCP 传输和能力合约。',
      },
    },
    {
      title: { en: 'Capability Discovery', zh: '能力发现' },
      description: {
        en: 'Atlas maintains the live catalog of every running provider. Pilot queries it at plan time — models always see the current robot\'s real capabilities.',
        zh: 'Atlas 维护每个运行中提供者的实时目录。Pilot 在规划时查询——模型始终看到当前机器人的真实能力。',
      },
    },
    {
      title: { en: 'Structured Execution Plans', zh: '结构化执行计划' },
      description: {
        en: 'RTDL (Robot Task Description Language) encodes plans as sequence/parallel/do trees. Executor dispatches them while preserving concurrency and cancellation.',
        zh: 'RTDL（机器人任务描述语言）将计划编码为 sequence/parallel/do 树。Executor 在保留并发和取消语义的同时调度它们。',
      },
    },
    {
      title: { en: 'Multi-Transport Communication', zh: '多传输通信' },
      description: {
        en: 'Nexus provides gRPC, MCP, and ROS 2 transports. Choose the right transport per capability without changing the contract.',
        zh: 'Nexus 提供 gRPC、MCP 和 ROS 2 传输。在不变更合约的前提下为每个能力选择合适的传输方式。',
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
  },
  atlas: {
    id: 'atlas',
    label: 'Atlas',
    layer: 'shared',
    description: {
      en: 'Live capability registry. Every primitive, service, and skill registers here. Pilot and Executor discover providers at runtime.',
      zh: '实时能力注册中心。每个原语、服务和技能在此注册。Pilot 和 Executor 在运行时发现提供者。',
    },
  },
  executor: {
    id: 'executor',
    label: 'Executor',
    layer: 'execution',
    description: {
      en: 'RTDL execution engine. Dispatches do/sequence/parallel nodes to capability providers with cancellation and async polling.',
      zh: 'RTDL 执行引擎。将 do/sequence/parallel 节点调度到能力提供者，支持取消和异步轮询。',
    },
  },
  soma: {
    id: 'soma',
    label: 'Soma',
    layer: 'execution',
    description: {
      en: 'Robot self-description service. Serves the soma.yaml body model and URDF to Pilot and other components.',
      zh: '机器人自描述服务。向 Pilot 和其他组件提供 soma.yaml 机体模型和 URDF。',
    },
  },
  sentinel: {
    id: 'sentinel',
    label: 'Sentinel',
    layer: 'execution',
    description: {
      en: 'Rule-based safety gate. Checks every capability dispatch against safety policies before execution.',
      zh: '基于规则的安全门禁。在执行前对每个能力调度进行安全策略检查。',
    },
  },
  liaison: {
    id: 'liaison',
    label: 'Liaison',
    layer: 'shared',
    description: {
      en: 'Human-machine interaction gateway. Supports chat, voice, and TUI interfaces.',
      zh: '人机交互网关。支持聊天、语音和 TUI 界面。',
    },
  },
  scribe: {
    id: 'scribe',
    label: 'Scribe',
    layer: 'shared',
    description: {
      en: 'Structured, persistent, replayable journal. Records every decision and action for audit and debugging.',
      zh: '结构化、持久化、可回放的日志。记录每个决策和行动以供审计和调试。',
    },
  },
  scene: {
    id: 'scene',
    label: 'Scene',
    layer: 'shared',
    description: {
      en: 'Live environment estimate. Maintains object registry, semantic relations, and occupancy grid.',
      zh: '实时环境估计。维护对象注册表、语义关系和占据网格。',
    },
  },
  keystone: {
    id: 'keystone',
    label: 'Keystone',
    layer: 'shared',
    description: {
      en: 'User identity, persistent configuration, and access policy management.',
      zh: '用户身份、持久化配置和访问策略管理。',
    },
  },
  vitals: {
    id: 'vitals',
    label: 'Vitals',
    layer: 'execution',
    description: {
      en: 'Robot power and component health monitoring.',
      zh: '机器人电量与组件健康监控。',
    },
  },
  chronos: {
    id: 'chronos',
    label: 'Chronos',
    layer: 'shared',
    description: {
      en: 'Unified clock and cross-sensor timestamp alignment (PTP/IEEE-1588).',
      zh: '统一时钟与跨传感器时间戳对齐（PTP/IEEE-1588）。',
    },
  },
  nexus: {
    id: 'nexus',
    label: 'Nexus',
    layer: 'shared',
    description: {
      en: 'Communication libraries for gRPC, MCP, and ROS 2 transports.',
      zh: 'gRPC、MCP 和 ROS 2 传输的通信库。',
    },
  },
};

// ───────────────────────────────────────────
// Scenarios
// ───────────────────────────────────────────

export const SCENARIOS = {
  title: {
    en: 'One Runtime, Multiple Environments',
    zh: '一个运行时，多种环境',
  },
  subtitle: {
    en: 'Robonix runs the same code across simulation, game environments, and real hardware.',
    zh: 'Robonix 在仿真、游戏环境和真实硬件上运行相同的代码。',
  },
  items: [
    {
      icon: '🎮',
      title: { en: 'Simulation', zh: '仿真' },
      description: {
        en: 'Physics-based simulator with multiple built-in environments: office, apartment, kitchen, warehouse. Full sensor simulation including RGB-D cameras, lidar, and IMU.',
        zh: '基于物理的仿真器，内置多种环境：办公室、公寓、厨房、仓库。完整的传感器仿真，包括 RGB-D 相机、激光雷达和 IMU。',
      },
      highlights: {
        en: ['Indoor & outdoor worlds', 'RGB-D + LiDAR + IMU', 'Container-based deployment', 'Multi-container ROS graph'],
        zh: ['室内外场景', 'RGB-D + LiDAR + IMU', '基于容器部署', '多容器 ROS 图'],
      },
    },
    {
      icon: '🔬',
      title: { en: 'Research Benchmarks', zh: '研究基准' },
      description: {
        en: 'Standardized task suites for evaluating embodied AI models. Consistent interfaces across different benchmarks — swap the environment, keep your model.',
        zh: '用于评估具身 AI 模型的标准化任务套件。不同基准之间接口一致——更换环境，保留模型。',
      },
      highlights: {
        en: ['Navigation benchmarks', 'Manipulation tasks', 'Multi-step reasoning', 'Open-vocabulary object search'],
        zh: ['导航基准', '操作任务', '多步推理', '开放词汇物体搜索'],
      },
    },
    {
      icon: '🏭',
      title: { en: 'Real Robots', zh: '真实机器人' },
      description: {
        en: 'Deploy the same stack on physical hardware. Currently supports wheeled mobile robots, quadrupeds, robotic arms, and humanoids. More platforms in development.',
        zh: '在物理硬件上部署相同的技术栈。目前支持轮式移动机器人、四足机器人、机械臂和人形机器人。更多平台正在开发中。',
      },
      highlights: {
        en: ['Wheeled mobile robots', 'Quadruped robots', 'Robotic arms', 'Real-time safety gating'],
        zh: ['轮式移动机器人', '四足机器人', '机械臂', '实时安全门控'],
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
      id: 'sim-office',
      title: { en: 'Simulated Office Navigation', zh: '仿真办公室导航' },
      description: {
        en: 'Natural language task execution in a simulated office environment. The robot navigates, explores rooms, and responds to voice commands.',
        zh: '在仿真办公室环境中执行自然语言任务。机器人导航、探索房间并响应语音命令。',
      },
      thumbnail: '/images/demo-thumbnails/office.jpg',
      duration: 'X:XX',
    },
    {
      id: 'deployment',
      title: { en: 'Deployment Demo', zh: '部署演示' },
      description: {
        en: 'One-command boot: see how rbnx boot brings up the full robot stack with dependency resolution and configuration.',
        zh: '一键启动：观看 rbnx boot 如何通过依赖解析和配置启动整个机器人栈。',
      },
      thumbnail: '/images/demo-thumbnails/deploy.jpg',
      duration: 'X:XX',
    },
    {
      id: 'real-robot',
      title: { en: 'Real Robot Execution', zh: '真实机器人执行' },
      description: {
        en: 'Robonix running on physical robot hardware. Real-time sensor fusion, autonomous navigation, and task execution.',
        zh: 'Robonix 在物理机器人硬件上运行。实时传感器融合、自主导航和任务执行。',
      },
      thumbnail: '/images/demo-thumbnails/real-robot.jpg',
      duration: 'X:XX',
    },
    {
      id: 'voice-interaction',
      title: { en: 'Voice & Chat Interaction', zh: '语音与对话交互' },
      description: {
        en: 'Interact with the robot through natural conversation. Speech recognition, TTS, and multi-turn dialogue powered by Liaison.',
        zh: '通过自然对话与机器人交互。由 Liaison 提供语音识别、TTS 和多轮对话支持。',
      },
      thumbnail: '/images/demo-thumbnails/voice.jpg',
      duration: 'X:XX',
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
    en: 'Robonix supports a growing range of robot platforms and sensor configurations.',
    zh: 'Robonix 支持越来越多的机器人平台和传感器配置。',
  },
  filters: [
    { label: { en: 'All', zh: '全部' }, value: 'all' },
    { label: { en: 'Arm', zh: '机械臂' }, value: 'arm' },
    { label: { en: 'Quadruped', zh: '四足' }, value: 'quadruped' },
    { label: { en: 'Wheeled', zh: '轮式' }, value: 'wheeled' },
    { label: { en: 'Humanoid', zh: '人形' }, value: 'humanoid' },
    { label: { en: 'Simulation', zh: '仿真' }, value: 'simulation' },
  ],
  robots: [
    {
      name: 'Wheeled Mobile Robot',
      type: 'wheeled',
      manufacturer: 'Manufacturer A',
      sensors: ['3D LiDAR', 'RGB-D Camera', 'IMU'],
      realRobot: true,
      simulation: true,
      tested: true,
      description: {
        en: 'Wheeled mobile robot with optional manipulator arm. Full sensor suite including 3D LiDAR, RGB-D camera, and audio.',
        zh: '轮式移动机器人，可选配操作臂。完整的传感器套件，包括 3D 激光雷达、RGB-D 相机和音频。',
      },
    },
    {
      name: 'Quadruped Robot',
      type: 'quadruped',
      manufacturer: 'Manufacturer B',
      sensors: ['3D LiDAR', 'RGB-D Camera', 'IMU'],
      realRobot: true,
      simulation: false,
      tested: true,
      description: {
        en: 'Quadruped robot with LiDAR and RGB-D perception. Suitable for outdoor terrain and inspection tasks.',
        zh: '四足机器人，配备激光雷达和 RGB-D 感知。适用于户外地形和巡检任务。',
      },
    },
    {
      name: '6-DOF Robotic Arm',
      type: 'arm',
      manufacturer: 'Manufacturer C',
      sensors: ['Joint encoders', 'Force/torque (optional)'],
      realRobot: true,
      simulation: true,
      tested: true,
      description: {
        en: '6-DOF robotic arm for mobile manipulation. Supports VLA skill deployment via the Robonix Skill Toolkit.',
        zh: '6 自由度机械臂，用于移动操作。通过 Robonix Skill Toolkit 支持 VLA 技能部署。',
      },
    },
    {
      name: 'Humanoid Robot',
      type: 'humanoid',
      manufacturer: 'Manufacturer D',
      sensors: ['RGB-D Camera', 'IMU', 'Joint encoders'],
      realRobot: true,
      simulation: true,
      tested: false,
      description: {
        en: 'Full-body humanoid robot with dual-arm manipulation and bipedal locomotion capabilities.',
        zh: '全尺寸人形机器人，具备双臂操作和双足运动能力。',
      },
    },
    {
      name: 'Simulated Mobile Manipulator',
      type: 'simulation',
      manufacturer: 'Simulator Platform',
      sensors: ['RGB-D camera', '2D LiDAR', 'IMU', 'Sonar'],
      realRobot: false,
      simulation: true,
      tested: true,
      description: {
        en: 'Simulated mobile manipulator with full sensor suite and arm control. Used for development and CI testing.',
        zh: '仿真移动操作机器人，具有完整的传感器套件和手臂控制。用于开发和 CI 测试。',
      },
    },
    {
      name: 'Simulated Rover',
      type: 'simulation',
      manufacturer: 'Simulator Platform',
      sensors: ['RGB camera', 'Distance sensors', 'IMU'],
      realRobot: false,
      simulation: true,
      tested: true,
      description: {
        en: '4-wheel rover with arm simulation. Good for navigation and manipulation algorithm development.',
        zh: '带机械臂的 4 轮漫游车仿真。适合导航和操作算法开发。',
      },
    },
  ],
  matrixColumns: [
    { key: 'manufacturer', label: { en: 'Manufacturer', zh: '制造商' } },
    { key: 'model', label: { en: 'Model', zh: '型号' } },
    { key: 'type', label: { en: 'Type', zh: '类型' } },
    { key: 'realRobot', label: { en: 'Real Robot', zh: '真实机器人' } },
    { key: 'simulation', label: { en: 'Simulation', zh: '仿真' } },
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
      status: { en: 'Planned', zh: '规划中' },
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
    en: 'Built by researchers and engineers from leading institutions.',
    zh: '由来自顶尖机构的研究者和工程师共同构建。',
  },
  institutions: [
    { name: 'University A', logo: '🏫' },
    { name: 'Research Lab B', logo: '🔬' },
    { name: 'Open Source Org C', logo: '🌐' },
  ],
  metrics: [
    { label: { en: 'GitHub Stars', zh: 'GitHub 星标' }, value: 'XXXX+' },
    { label: { en: 'Contributors', zh: '贡献者' }, value: 'XX+' },
    { label: { en: 'Supported Targets', zh: '支持目标' }, value: 'XX+' },
    { label: { en: 'Capability Contracts', zh: '能力合约' }, value: 'XX+' },
  ],
  testimonials: [
    {
      quote: {
        en: 'Robonix bridges the critical gap between AI research and real robot deployment. The session-centered runtime is exactly what the embodied AI community needs.',
        zh: 'Robonix 弥合了 AI 研究与真实机器人部署之间的关键鸿沟。会话中心运行时正是具身智能社区所需要的。',
      },
      author: { en: 'Robotics Researcher', zh: '机器人研究者' },
      affiliation: { en: 'University A', zh: '大学 A' },
      avatar: 'R1',
    },
    {
      quote: {
        en: 'The package model is brilliant — we integrated a new sensor in very few lines of YAML and it just worked with every existing skill.',
        zh: '包模型非常出色——我们用极少量的 YAML 集成了一款新传感器，它就与所有现有技能完美配合。',
      },
      author: { en: 'Robot Integration Engineer', zh: '机器人集成工程师' },
      affiliation: { en: 'Open Source Org C', zh: '开源组织 C' },
      avatar: 'R2',
    },
    {
      quote: {
        en: 'Finally, an OS that treats models as programs. The ability to discover capabilities at runtime changes how we think about robot software architecture.',
        zh: '终于有了一个将模型视为程序的操作系统。在运行时发现能力的功能改变了我们对机器人软件架构的思考方式。',
      },
      author: { en: 'Open Source Developer', zh: '开源开发者' },
      affiliation: { en: 'Community Contributor', zh: '社区贡献者' },
      avatar: 'R3',
    },
  ],
};

// ───────────────────────────────────────────
// Supported Vendors
// ───────────────────────────────────────────

export const VENDORS = {
  title: {
    en: 'Supported Manufacturers',
    zh: '支持厂家',
  },
  subtitle: {
    en: 'Coming soon.',
    zh: '敬请期待。',
  },
  vendors: [
    {
      name: 'Coming Soon',
      logo: '🤖',
      category: 'placeholder',
      description: {
        en: 'More manufacturers to be announced.',
        zh: '更多厂家即将公布。',
      },
      products: [],
    },
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
      href: 'https://robonix-book.syswonder.org/',
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
      href: 'https://robonix-book.syswonder.org/',
    },
    {
      icon: '📦',
      title: { en: 'Package Catalog', zh: '包目录' },
      description: {
        en: 'Browse and search the registry of Robonix packages — primitives, services, and skills.',
        zh: '浏览和搜索 Robonix 包注册表——原语、服务和技能。',
      },
      href: 'https://robonix-package-catalog.syswonder.org/',
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
    en: 'Join the Robonix community. Star on GitHub, contribute a package, or deploy your first robot application today.',
    zh: '加入 Robonix 社区。在 GitHub 上点亮星标，贡献一个包，或者今天部署你的第一个机器人应用。',
  },
  buttons: [
    {
      label: { en: '⭐ Star on GitHub', zh: '⭐ 点亮 GitHub' },
      href: 'https://github.com/syswonder/robonix',
      primary: true,
    },
    {
      label: { en: '💬 Join Discussion', zh: '💬 加入讨论' },
      href: 'https://github.com/syswonder/robonix/discussions',
      primary: false,
    },
  ],
};

// ───────────────────────────────────────────
// Footer
// ───────────────────────────────────────────

export const FOOTER = {
  description: {
    en: 'An operating system for embodied intelligence. Build once, deploy on any robot.',
    zh: '具身智能操作系统。一次构建，部署到任何机器人。',
  },
  product: [
    { label: { en: 'Features', zh: '特性' }, href: '#features' },
    { label: { en: 'Architecture', zh: '架构' }, href: '#architecture' },
    { label: { en: 'Hardware', zh: '硬件' }, href: '#hardware' },
    { label: { en: 'Roadmap', zh: '路线图' }, href: '#roadmap' },
  ],
  resources: [
    { label: { en: 'Documentation', zh: '文档' }, href: 'https://robonix-book.syswonder.org/' },
    { label: { en: 'Package Catalog', zh: '包目录' }, href: 'https://robonix-package-catalog.syswonder.org/' },
    { label: { en: 'CI Reports', zh: 'CI 报告' }, href: 'https://robonix-ci-reports.syswonder.org/reports/' },
    { label: { en: 'Template Repository', zh: '模板仓库' }, href: 'https://github.com/syswonder/template-rbnx' },
  ],
  community: [
    { label: { en: 'GitHub', zh: 'GitHub' }, href: 'https://github.com/syswonder/robonix' },
    { label: { en: 'Discussions', zh: '讨论区' }, href: 'https://github.com/syswonder/robonix/discussions' },
    { label: { en: 'Skill Toolkit', zh: '技能工具包' }, href: 'https://github.com/zhengzihaoPKU/Robonix-Skill-Toolkit' },
    { label: { en: 'syswonder', zh: 'syswonder' }, href: 'https://syswonder.org/' },
  ],
  techStack: {
    en: 'Built with React, Three.js & GSAP',
    zh: '使用 React、Three.js 和 GSAP 构建',
  },
  license: {
    en: 'Open Source License',
    zh: '开源许可证',
  },
  copyright: {
    en: '© 2026 Robonix. All rights reserved.',
    zh: '© 2026 Robonix。保留所有权利。',
  },
};
