'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { ARCH_NODES } from '@/lib/constants';

interface ArchNode {
  id: string;
  label: string;
  layer: string;
  description: { en: string; zh: string };
  capability?: { en: string; zh: string };
}

const nodeLayout: Record<string, { x: number; y: number; w: number; h: number; tone: string }> = {
  liaison: { x: 10, y: 40, w: 15, h: 15, tone: 'blue' },
  pilot: { x: 23, y: 12, w: 18, h: 13, tone: 'blue' },
  executor: { x: 55, y: 12, w: 20, h: 13, tone: 'teal' },
  sentinel: { x: 55, y: 34, w: 20, h: 13, tone: 'teal' },
  scene: { x: 55, y: 56, w: 20, h: 13, tone: 'blue' },
  keystone: { x: 78, y: 14, w: 16, h: 13, tone: 'indigo' },
  vitals: { x: 78, y: 44, w: 16, h: 13, tone: 'indigo' },
  atlas: { x: 7, y: 73, w: 16, h: 10, tone: 'indigo' },
  nexus: { x: 28, y: 73, w: 16, h: 10, tone: 'indigo' },
  chronos: { x: 49, y: 73, w: 16, h: 10, tone: 'indigo' },
  scribe: { x: 70, y: 73, w: 16, h: 10, tone: 'indigo' },
  soma: { x: 5, y: 86, w: 90, h: 10, tone: 'body' },
};

const supportLayout = {
  user: { x: 4, y: 30 },
  customServices: { x: 33, y: 42, w: 14, h: 11 },
};

const nodeTone: Record<string, string> = {
  blue: 'border-blue-300/80 bg-blue-600/10 text-blue-950 shadow-blue-500/20 dark:border-blue-300/30 dark:bg-blue-400/10 dark:text-blue-50',
  teal: 'border-teal-300/80 bg-teal-500/10 text-teal-950 shadow-teal-500/20 dark:border-teal-300/30 dark:bg-teal-300/10 dark:text-teal-50',
  indigo: 'border-indigo-300/80 bg-indigo-600/10 text-indigo-950 shadow-indigo-500/20 dark:border-indigo-300/30 dark:bg-indigo-300/10 dark:text-indigo-50',
  body: 'border-sky-300/80 bg-sky-600/10 text-sky-950 shadow-sky-500/20 dark:border-sky-300/30 dark:bg-sky-300/10 dark:text-sky-50',
};

const nodeSummaries: Record<string, { en: string; zh: string }> = {
  liaison: { en: 'multimodal I/O · user ID · voice service', zh: '多模态接入 · 用户识别 · 语音服务' },
  pilot: { en: 'VLM / WM · memory · plan validation', zh: 'VLM / WM · 记忆服务 · 方案验证' },
  executor: { en: 'RTDL execution · errors · resources', zh: 'RTDL 执行 · 异常处理 · 资源调度' },
  sentinel: { en: 'safety supervision · rule checks', zh: '安全监管 · 安全规则检查' },
  scene: { en: 'scene state · mapping · object detection', zh: '场景状态 · 建图定位 · 目标识别' },
  keystone: { en: 'identity · config · access policy', zh: '身份 · 配置 · 访问策略' },
  vitals: { en: 'battery · health · component status', zh: '电量 · 健康监控 · 组件状态' },
  atlas: { en: 'capability catalog', zh: '能力目录' },
  nexus: { en: 'high-performance transport', zh: '高性能通信' },
  chronos: { en: 'clock · timestamp alignment', zh: '时钟 · 时间对齐' },
  scribe: { en: 'structured system logs', zh: '结构化系统日志' },
  soma: { en: 'body state · hardware primitives · skills', zh: '本体状态 · 硬件原语 · 技能' },
};

const hardwareItems = {
  en: ['chassis', 'camera', 'lidar', 'arm', 'speaker', 'microphone'],
  zh: ['运动底盘', '摄像头', '激光/毫米波雷达', '灵巧手', '扬声器', '麦克风'],
};

const servicePanel = {
  title: { en: 'Custom Services', zh: 'Custom Services' },
  lines: {
    en: ['Scene-specific services', 'External hardware adapters'],
    zh: ['部署场景的自定义服务', '例如外部硬件接口（电梯）'],
  },
};

const somaBands = [
  { label: { en: 'Hardware primitives', zh: '硬件原语' }, detail: { en: 'motion · sensing · voice', zh: '运动控制 · 传感读取 · 语音采集' } },
  { label: { en: 'Skills', zh: '技能' }, detail: { en: 'classic control · VLA', zh: '传统控制算法 · VLA' } },
];

const githubLocations: Record<string, { path: string; href: string }> = Object.fromEntries(
  Object.keys(nodeLayout).map((id) => [
    id,
    {
      path: `system/${id}`,
      href: `https://github.com/syswonder/robonix/tree/dev/system/${id}`,
    },
  ]),
) as Record<string, { path: string; href: string }>;

const flows = [
  { from: 'user', to: 'liaison', label: { en: 'intent', zh: '意图' }, offset: -1.7, delay: 0 },
  { from: 'pilot', to: 'liaison', label: { en: 'feedback', zh: '反馈' }, offset: 5.2, delay: 0.24 },
  { from: 'liaison', to: 'pilot', label: { en: 'task', zh: '任务' }, offset: 5.2, delay: 0.36 },
  { from: 'pilot', to: 'executor', label: { en: 'plan', zh: '方案' }, offset: -8, delay: 0.48 },
  { from: 'executor', to: 'pilot', label: { en: 'feedback', zh: '反馈' }, offset: -8, delay: 0.6 },
  { from: 'sentinel', to: 'executor', label: { en: 'monitor', zh: '监控' }, offset: 2.2, delay: 0.55 },
  { from: 'pilot', to: 'scene', label: { en: 'query', zh: '查询' }, offset: -2.6, delay: 0.72 },
  { from: 'pilot', to: 'customServices', label: { en: 'service call', zh: '服务调用' }, offset: 1.8, delay: 0.84 },
  { from: 'customServices', to: 'soma', label: { en: 'primitives', zh: '原语' }, offset: -1.8, delay: 0.96 },
];

function centerOf(id: string) {
  if (id === 'user') return supportLayout.user;
  if (id === 'customServices') {
    const layout = supportLayout.customServices;
    return {
      x: layout.x + layout.w / 2,
      y: layout.y + layout.h / 2,
    };
  }
  const layout = nodeLayout[id];
  return {
    x: layout.x + layout.w / 2,
    y: layout.y + layout.h / 2,
  };
}

function boundsOf(id: string) {
  if (id === 'customServices') {
    return supportLayout.customServices;
  }
  return nodeLayout[id];
}

function edgePoint(from: { x: number; y: number }, to: { x: number; y: number }, id: string) {
  const bounds = boundsOf(id);
  if (!bounds) return from;

  const center = {
    x: bounds.x + bounds.w / 2,
    y: bounds.y + bounds.h / 2,
  };
  const dx = to.x - center.x;
  const dy = to.y - center.y;
  const scale = Math.min(
    Math.abs(dx) > 0.001 ? bounds.w / 2 / Math.abs(dx) : Number.POSITIVE_INFINITY,
    Math.abs(dy) > 0.001 ? bounds.h / 2 / Math.abs(dy) : Number.POSITIVE_INFINITY,
  );
  const edge = {
    x: center.x + dx * scale,
    y: center.y + dy * scale,
  };
  const length = Math.hypot(dx, dy) || 1;
  const gap = 1.5;
  return {
    x: edge.x + (dx / length) * gap,
    y: edge.y + (dy / length) * gap,
  };
}

function flowGeometry(from: string, to: string, offset: number) {
  const fromCenter = centerOf(from);
  const toCenter = centerOf(to);
  const start = edgePoint(fromCenter, toCenter, from);
  const end = edgePoint(toCenter, fromCenter, to);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy) || 1;
  const normalX = (-dy / length) * offset;
  const normalY = (dx / length) * offset;
  const control = {
    x: (start.x + end.x) / 2 + normalX,
    y: (start.y + end.y) / 2 + normalY,
  };
  const label = {
    x: start.x * 0.25 + control.x * 0.5 + end.x * 0.25,
    y: start.y * 0.25 + control.y * 0.5 + end.y * 0.25,
  };
  return {
    path: `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`,
    label,
  };
}

export default function ArchitectureDiagram() {
  const { locale } = useLocale();
  const nodes = Object.values(ARCH_NODES) as ArchNode[];
  const [selectedNode, setSelectedNode] = useState<ArchNode>(nodes.find((node) => node.id === 'pilot') || nodes[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const flowGeometries = useMemo(
    () => flows.map((flow) => ({ ...flow, geometry: flowGeometry(flow.from, flow.to, flow.offset) })),
    [],
  );

  const activeLayout = nodeLayout[selectedNode.id];
  const selectedGithub = githubLocations[selectedNode.id];

  return (
    <div ref={containerRef} className={`relative mx-auto max-w-6xl ${visible ? '' : 'animate-paused'}`}>
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#fafbfc]/80 p-3 shadow-2xl shadow-blue-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70 dark:shadow-blue-500/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        <div className="relative h-[clamp(340px,38vw,430px)] overflow-hidden rounded-xl border border-slate-200/80 bg-[#edf0f5]/70 dark:border-white/10 dark:bg-slate-900/60">
          <div className="pointer-events-none absolute inset-[5%] rounded-xl border border-dashed border-slate-300/60 dark:border-slate-600/50" />
          <div className="pointer-events-none absolute right-[5.5%] top-[5.5%] rounded-full border border-slate-200 bg-[#fafbfc]/75 px-2 py-0.5 text-[10px] font-semibold text-slate-500 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
            {locale === 'en' ? 'Chronos syncs system time' : 'Chronos 为全系统提供时间同步'}
          </div>
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.1" />
                <stop offset="45%" stopColor="rgb(45 212 191)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.1" />
              </linearGradient>
              <marker id="flowArrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="rgb(56 189 248)" />
              </marker>
              <marker id="flowArrowMuted" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="rgb(148 163 184)" opacity="0.55" />
              </marker>
            </defs>
            {flowGeometries.map((flow, index) => {
              const active = selectedNode.id === flow.from || selectedNode.id === flow.to;
              const geometry = flow.geometry;
              return (
                <g key={`${flow.from}-${flow.to}-${index}`}>
                  <path
                    d={geometry.path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={active ? 0.55 : 0.35}
                    markerEnd={active ? 'url(#flowArrow)' : 'url(#flowArrowMuted)'}
                    className={active ? 'text-sky-400/70' : 'text-slate-400/40 dark:text-slate-500/40'}
                  />
                  <path
                    d={geometry.path}
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth={active ? 1.1 : 0.75}
                    strokeLinecap="round"
                    strokeDasharray="3 9"
                    className={active ? 'flow-path-active' : 'flow-path-idle'}
                    style={{
                      ['--flow-dur' as string]: active ? '1.4s' : '2.8s',
                      ['--flow-delay' as string]: `${flow.delay}s`,
                    }}
                  />
                </g>
              );
            })}
            {nodes.map((node) => {
              const layout = nodeLayout[node.id];
              if (!layout) return null;
              const { x, y } = centerOf(node.id);
              const active = selectedNode.id === node.id;
              return (
                <circle
                  key={`pulse-${node.id}`}
                  cx={x}
                  cy={y}
                  r={active ? 3.8 : 2.4}
                  fill="none"
                  stroke={active ? 'rgb(56 189 248)' : 'rgb(148 163 184)'}
                  strokeWidth={active ? 0.45 : 0.25}
                  className={active ? 'pulse-ring-active' : 'pulse-ring-idle'}
                />
              );
            })}
          </svg>

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-slate-200 bg-[#fafbfc]/85 px-2 py-1 text-center font-mono text-xs font-black text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-200"
            style={{ left: `${supportLayout.user.x}%`, top: `${supportLayout.user.y}%` }}
          >
            User
          </motion.div>

          {nodes.map((node, index) => {
            const layout = nodeLayout[node.id];
            if (!layout) return null;
            const active = selectedNode.id === node.id;
            return (
              <motion.button
                key={node.id}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.035, duration: 0.45 }}
                onMouseEnter={() => setSelectedNode(node)}
                onFocus={() => setSelectedNode(node)}
                onClick={() => setSelectedNode(node)}
                className={`absolute flex flex-col items-center justify-center rounded-xl border px-2 py-2 text-center shadow-lg backdrop-blur transition-all duration-300 ${nodeTone[layout.tone]} ${
                  active ? 'z-20 scale-[1.08] ring-2 ring-sky-400 shadow-2xl' : 'z-10 hover:scale-[1.04]'
                }`}
                style={{
                  left: `${layout.x}%`,
                  top: `${layout.y}%`,
                  width: `${layout.w}%`,
                  height: `${layout.h}%`,
                }}
              >
                {node.id === 'soma' ? (
                  <>
                    <span className="relative z-10 font-mono text-xs font-black sm:text-sm lg:text-base">{node.label}</span>
                    <span className="relative z-10 text-[9px] font-semibold leading-tight text-slate-600 dark:text-slate-300 sm:text-[10px]">
                      {locale === 'en' ? 'body state' : '本体状态'}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 font-mono text-xs font-black sm:text-sm lg:text-base">
                      {node.label}
                    </span>
                    <span className="relative z-10 mt-1 max-w-full text-[9px] font-semibold leading-tight text-slate-600 dark:text-slate-300 sm:text-[10px]">
                      {t(nodeSummaries[node.id], locale)}
                    </span>
                  </>
                )}
                {active && <span className="absolute inset-0 rounded-xl bg-[#fafbfc]/25 blur-xl dark:bg-sky-400/10" />}
              </motion.button>
            );
          })}

          {flowGeometries.map((flow, index) => {
            const active = selectedNode.id === flow.from || selectedNode.id === flow.to;
            const geometry = flow.geometry;
            return (
              <motion.span
                key={`label-${flow.from}-${flow.to}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.035, duration: 0.25 }}
                className={`pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-0.5 text-[9px] font-semibold leading-none shadow-sm backdrop-blur sm:text-[10px] ${
                  active
                    ? 'border-sky-300 bg-[#fafbfc]/95 text-sky-700 dark:border-sky-300/40 dark:bg-slate-950/90 dark:text-sky-200'
                    : 'border-slate-200 bg-[#fafbfc]/80 text-slate-500 dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-400'
                }`}
                style={{ left: `${geometry.label.x}%`, top: `${geometry.label.y}%` }}
              >
                {t(flow.label, locale)}
              </motion.span>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.35 }}
            className={`pointer-events-none absolute z-20 flex items-center justify-center rounded-xl border px-2 py-2 text-center shadow-lg backdrop-blur ${nodeTone.body}`}
            style={{
              left: `${supportLayout.customServices.x}%`,
              top: `${supportLayout.customServices.y}%`,
              width: `${supportLayout.customServices.w}%`,
              height: `${supportLayout.customServices.h}%`,
            }}
          >
            <div>
              <div className="font-mono text-[11px] font-black sm:text-xs">{t(servicePanel.title, locale)}</div>
              <div className="mt-1 space-y-0.5 text-[9px] font-semibold leading-tight text-slate-600 dark:text-slate-300 sm:text-[10px]">
                {servicePanel.lines[locale].map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-[4.9%] left-[8%] z-20 grid w-[86%] grid-cols-[1fr_1fr] gap-[31%]">
            {somaBands.map((band, index) => (
              <div
                key={t(band.label, locale)}
                className={`rounded-md border border-sky-300/50 bg-[#fafbfc]/75 px-2 py-1 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-sky-300/20 dark:bg-slate-950/65 dark:text-slate-200 sm:text-xs ${
                  index === 0 ? 'text-left' : 'text-right'
                }`}
              >
                <span className="font-mono font-black text-sky-700 dark:text-sky-200">{t(band.label, locale)}</span>
                <span className="ml-1">{t(band.detail, locale)}</span>
              </div>
            ))}
          </div>

          {activeLayout && (
            <motion.div
              className="pointer-events-none absolute rounded-xl border-2 border-sky-400/80 shadow-[0_0_50px_rgba(14,165,233,0.35)]"
              animate={{
                left: `${activeLayout.x}%`,
                top: `${activeLayout.y}%`,
                width: `${activeLayout.w}%`,
                height: `${activeLayout.h}%`,
              }}
              transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            />
          )}
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
          <span className="rounded-full border border-slate-200 bg-[#fafbfc]/70 px-2.5 py-0.5 font-mono text-slate-500 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
            {locale === 'en' ? 'Hardware' : '硬件'}
          </span>
          {hardwareItems[locale].map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-[#fafbfc]/70 px-2.5 py-0.5 dark:border-white/10 dark:bg-slate-900/70">
              {item}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mx-auto mt-4 grid max-w-4xl gap-3 rounded-xl border border-slate-200 bg-[#fafbfc] p-4 shadow-lg dark:border-white/10 dark:bg-slate-900 sm:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-blue-600 dark:text-sky-300">
              {locale === 'en' ? 'Active module' : '当前模块'}
            </p>
            <h4 className="mt-1 font-mono text-xl font-black text-slate-950 dark:text-white">
              {selectedNode.label}
            </h4>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <p>{t(selectedNode.description, locale)}</p>
            {selectedNode.capability && (
              <p className="rounded-lg bg-[#edf0f5] p-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {t(selectedNode.capability, locale)}
              </p>
            )}
            {selectedGithub && (
              <a
                href={selectedGithub.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-[#edf0f5] px-3 py-2 font-mono text-xs font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-slate-800 dark:text-sky-300 dark:hover:border-sky-300/40 dark:hover:bg-slate-800/80"
              >
                <span>{locale === 'en' ? 'GitHub' : 'GitHub 位置'}</span>
                <span>{selectedGithub.path}</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
