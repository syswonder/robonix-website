import { Locale } from '@/context/LocaleContext';

// ───────────────────────────────────────────
// Navigation
// ───────────────────────────────────────────

export const NAV_LINKS = [
  {
    label: { en: 'About', zh: '关于' },
    href: '#about',
  },
  {
    label: { en: 'Features', zh: '特性' },
    href: '#features',
  },
  {
    label: { en: 'Ecosystem', zh: '生态' },
    href: '#ecosystem',
  },
  {
    label: { en: 'Docs', zh: '文档' },
    href: 'https://robonix-book.syswonder.org/',
    external: true,
  },
  {
    label: { en: 'Packages', zh: '包目录' },
    href: 'https://robonix-package-catalog.syswonder.org/',
    external: true,
  },
  {
    label: { en: 'GitHub', zh: '源代码' },
    href: 'https://github.com/syswonder/robonix',
    external: true,
  },
];

// ───────────────────────────────────────────
// Hero content
// ───────────────────────────────────────────

export const HERO = {
  title: 'Robonix',
  subtitle: {
    en: 'The Robot Operating Framework',
    zh: '机器人操作系统框架',
  },
  description: {
    en: 'Build, deploy, and manage robot applications with a modular, scalable, and developer-friendly framework.',
    zh: '用模块化、可扩展、开发者友好的框架构建、部署和管理机器人应用。',
  },
  cta: {
    en: 'Get Started',
    zh: '快速开始',
  },
  cta2: {
    en: 'Read the Docs',
    zh: '阅读文档',
  },
};

// ───────────────────────────────────────────
// About section
// ───────────────────────────────────────────

export const ABOUT = {
  title: {
    en: 'What is Robonix?',
    zh: '什么是 Robonix？',
  },
  paragraphs: [
    {
      en: 'Robonix is a next-generation robot operating framework designed to unify the robotics software stack. It provides a modular architecture that allows developers to compose robot applications from reusable primitives, services, and skills.',
      zh: 'Robonix 是下一代机器人操作框架，旨在统一机器人软件栈。它提供模块化架构，让开发者从可复用的原语、服务和技能中组合构建机器人应用。',
    },
    {
      en: 'With first-class support for ROS 2, Atlas contracts, and MCP tooling, Robonix bridges the gap between traditional robotics middleware and modern cloud-native development practices.',
      zh: 'Robonix 对 ROS 2、Atlas 合约和 MCP 工具提供一流支持，在传统机器人中间件与现代云原生开发实践之间架起桥梁。',
    },
  ],
  tags: {
    en: ['Modular', 'ROS 2 Compatible', 'MCP Integration', 'Cloud-Native', 'Extensible', 'Open Source'],
    zh: ['模块化', '兼容 ROS 2', 'MCP 集成', '云原生', '可扩展', '开源'],
  },
};

// ───────────────────────────────────────────
// Features section
// ───────────────────────────────────────────

export const FEATURES = [
  {
    icon: '🔧',
    title: { en: 'Modular Primitives', zh: '模块化原语' },
    description: {
      en: 'Compose robot capabilities from reusable building blocks. Each primitive encapsulates hardware drivers, algorithms, or sensor interfaces.',
      zh: '从可复用构建块组合机器人能力。每个原语封装硬件驱动、算法或传感器接口。',
    },
  },
  {
    icon: '🔗',
    title: { en: 'Atlas Contracts', zh: 'Atlas 合约' },
    description: {
      en: 'Define typed interfaces between components. Atlas contracts ensure compatibility and enable automatic composition of robot services.',
      zh: '定义组件间的类型化接口。Atlas 合约确保兼容性并支持机器人服务的自动组合。',
    },
  },
  {
    icon: '🚀',
    title: { en: 'One-Command Boot', zh: '一键启动' },
    description: {
      en: 'Bring up your entire robot stack with a single command. Robonix handles dependency resolution, configuration, and service orchestration.',
      zh: '一条命令启动整个机器人栈。Robonix 处理依赖解析、配置和服务编排。',
    },
  },
  {
    icon: '🤖',
    title: { en: 'MCP Tooling', zh: 'MCP 工具' },
    description: {
      en: 'Expose robot capabilities as MCP tools for AI agents. Enable natural-language control and intelligent decision-making in robotics.',
      zh: '将机器人能力暴露为 AI 代理的 MCP 工具，实现机器人领域的自然语言控制和智能决策。',
    },
  },
  {
    icon: '📦',
    title: { en: 'Package Ecosystem', zh: '包生态系统' },
    description: {
      en: 'Discover, share, and reuse robot packages. A growing ecosystem of community-contributed primitives, services, and skills.',
      zh: '发现、分享和复用机器人包。社区贡献的原语、服务和技能生态系统不断增长。',
    },
  },
  {
    icon: '🌐',
    title: { en: 'ROS 2 Native', zh: '原生 ROS 2' },
    description: {
      en: 'Built on ROS 2 fundamentals. Leverage the full ROS 2 ecosystem — topics, services, actions, and lifecycle management.',
      zh: '基于 ROS 2 构建。充分利用完整的 ROS 2 生态——话题、服务、动作和生命周期管理。',
    },
  },
];

// ───────────────────────────────────────────
// Ecosystem section
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
// CTA section
// ───────────────────────────────────────────

export const CTA = {
  title: {
    en: 'Ready to build the future of robotics?',
    zh: '准备好构建机器人未来了吗？',
  },
  description: {
    en: 'Join the Robonix community and start building modular, scalable robot applications today.',
    zh: '加入 Robonix 社区，今天就开始构建模块化、可扩展的机器人应用。',
  },
  button: {
    en: 'View on GitHub',
    zh: '在 GitHub 上查看',
  },
};

// ───────────────────────────────────────────
// Footer
// ───────────────────────────────────────────

export const FOOTER = {
  description: {
    en: 'Next-generation robot operating framework.',
    zh: '下一代机器人操作框架。',
  },
  links: [
    { label: { en: 'Docs', zh: '文档' }, href: 'https://robonix-book.syswonder.org/' },
    { label: { en: 'Packages', zh: '包目录' }, href: 'https://robonix-package-catalog.syswonder.org/' },
    { label: { en: 'CI Reports', zh: 'CI 报告' }, href: 'https://robonix-ci-reports.syswonder.org/reports/' },
  ],
  community: [
    { label: { en: 'GitHub', zh: 'GitHub' }, href: 'https://github.com/syswonder/robonix' },
    { label: { en: 'syswonder', zh: 'syswonder' }, href: 'https://syswonder.org/' },
  ],
  copyright: {
    en: '© 2026 Robonix. All rights reserved.',
    zh: '© 2026 Robonix。保留所有权利。',
  },
};
