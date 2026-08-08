'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { HARDWARE } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';

const TYPE_LABELS: Record<string, { en: string; zh: string }> = {
  wheeled: { en: 'Wheeled', zh: '轮式' },
  quadruped: { en: 'Quadruped', zh: '四足' },
  arm: { en: 'Robotic Arm', zh: '机械臂' },
  hand: { en: 'Dexterous Hand', zh: '灵巧手' },
  service: { en: 'Service Robot', zh: '服务机器人' },
  simulation: { en: 'Simulation', zh: '仿真' },
};

const STATUS_BADGE: Record<string, { en: string; zh: string; className: string }> = {
  integrated: { en: 'Integrated System', zh: '集成系统', className: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/40' },
  standalone: { en: 'Standalone Device', zh: '单独设备', className: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/40' },
  simulation: { en: 'Simulation', zh: '仿真平台', className: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700/40' },
};

export default function HardwareSection() {
  const { locale } = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationStep, setRotationStep] = useState(0);
  const [dragDegrees, setDragDegrees] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedRobot, setSelectedRobot] = useState<(typeof HARDWARE.robots)[number] | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const dragStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);

  const filteredRobots = activeFilter === 'all'
    ? HARDWARE.robots
    : HARDWARE.robots.filter((robot) => {
        if (robot.status === activeFilter || robot.type === activeFilter) return true;
        // "Arms & Hands" filter matches both arm and hand types
        if (activeFilter === 'manipulator' && (robot.type === 'arm' || robot.type === 'hand')) return true;
        return false;
      });

  useEffect(() => {
    setActiveIndex(0);
    setRotationStep(0);
    setDragDegrees(0);
    setSelectedRobot(null);
    setZoomedImage(null);
  }, [activeFilter]);

  const step = filteredRobots.length <= 1
    ? 0
    : filteredRobots.length === 2
      ? 180
      : 360 / filteredRobots.length;

  const rotate = (direction: number) => {
    if (filteredRobots.length <= 1) return;
    setRotationStep((current) => current + direction);
    setActiveIndex((current) => (current + direction + filteredRobots.length) % filteredRobots.length);
  };

  const rotateToIndex = (index: number) => {
    if (index === activeIndex || filteredRobots.length <= 1) return;

    let delta = index - activeIndex;
    const half = filteredRobots.length / 2;
    if (delta > half) delta -= filteredRobots.length;
    if (delta < -half) delta += filteredRobots.length;

    setRotationStep((current) => current + delta);
    setActiveIndex(index);
  };

  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const pendingDegrees = useRef(0);
  const dragRaf = useRef<number | null>(null);

  const handleDragMove = (clientX: number) => {
    if (dragStartX.current === null) return;
    pendingDegrees.current = (clientX - dragStartX.current) * 0.18;
    if (dragRaf.current === null) {
      dragRaf.current = requestAnimationFrame(() => {
        dragRaf.current = null;
        setDragDegrees(pendingDegrees.current);
      });
    }
  };

  const handleDragEnd = () => {
    if (dragStartX.current === null) return;
    if (Math.abs(dragDegrees) > 14) {
      suppressClick.current = true;
      rotate(dragDegrees < 0 ? 1 : -1);
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
    dragStartX.current = null;
    setDragDegrees(0);
  };

  return (
    <section id="hardware" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={HARDWARE.title} subtitle={HARDWARE.subtitle} />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {HARDWARE.filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-500'
                  : 'border border-slate-200 bg-[#fafbfc]/70 text-slate-600 backdrop-blur hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-blue-600'
              }`}
            >
              {t(filter.label, locale)}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedRobot ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="mx-auto grid max-w-4xl gap-6 rounded-2xl border border-sky-200/70 bg-[#fafbfc]/72 p-6 shadow-2xl shadow-sky-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65 lg:grid-cols-[1fr_0.9fr] lg:p-8"
          >
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,165,233,0.28),transparent_34%),linear-gradient(135deg,#0f172a,#020617)]" />
              <button
                type="button"
                onClick={() => setZoomedImage(selectedRobot.image)}
                className="relative z-10 flex h-full w-full cursor-zoom-in items-center justify-center p-4"
              >
                <img
                  src={selectedRobot.image}
                  alt={selectedRobot.name}
                  className="max-h-[340px] max-w-[90%] object-contain drop-shadow-[0_0_34px_rgba(56,189,248,0.38)] transition-transform hover:scale-105"
                />
              </button>
            </div>

            <div className="flex flex-col justify-center">
              <button
                type="button"
                onClick={() => setSelectedRobot(null)}
                className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <span aria-hidden="true">←</span>
                {locale === 'en' ? 'Back to hardware' : '返回硬件列表'}
              </button>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {TYPE_LABELS[selectedRobot.type] && (
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-cyan-300">
                    {t(TYPE_LABELS[selectedRobot.type], locale)}
                  </span>
                )}
                {selectedRobot.status && STATUS_BADGE[selectedRobot.status] && (
                  <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${STATUS_BADGE[selectedRobot.status].className}`}>
                    {t(STATUS_BADGE[selectedRobot.status], locale)}
                  </span>
                )}
                {selectedRobot.task && (
                  <span className="rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                    {t(selectedRobot.task, locale)}
                  </span>
                )}
                {!selectedRobot.tested && (
                  <span className="inline-block rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[11px] font-bold text-red-600 dark:border-red-700/40 dark:bg-red-900/30 dark:text-red-400">
                    {locale === 'en' ? 'Not Tested' : '尚未测试'}
                  </span>
                )}
              </div>
              <h3 className="font-mono text-3xl font-black text-slate-950 dark:text-white">
                {selectedRobot.url ? (
                  <a href={selectedRobot.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-600 dark:hover:text-sky-300">
                    {selectedRobot.name} ↗
                  </a>
                ) : (
                  selectedRobot.name
                )}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {selectedRobot.manufacturer}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedRobot.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs text-sky-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              {selectedRobot.description && (
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(selectedRobot.description, locale)}
                </p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative mx-auto h-[470px] max-w-6xl cursor-grab active:cursor-grabbing [perspective:1400px]"
            onPointerDown={(event) => handleDragStart(event.clientX)}
            onPointerMove={(event) => handleDragMove(event.clientX)}
            onPointerUp={handleDragEnd}
            onPointerCancel={handleDragEnd}
            onPointerLeave={handleDragEnd}
          >
            <div className="absolute inset-x-[12%] top-[18%] h-[58%] rounded-full bg-[radial-gradient(ellipse,rgba(14,165,233,0.18),transparent_64%)] blur-3xl dark:bg-[radial-gradient(ellipse,rgba(34,211,238,0.18),transparent_64%)]" />

            <div
              className="absolute inset-0 [transform-style:preserve-3d]"
              style={{
                transform: `rotateY(${-rotationStep * step + dragDegrees}deg)`,
                transition: dragStartX.current === null ? 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
              }}
            >
              {filteredRobots.map((robot, index) => {
                const active = index === activeIndex;
                const hovered = index === hoveredIndex;
                const cardAngle = filteredRobots.length === 2
                  ? activeIndex * 180 + (active ? 0 : index > activeIndex ? 58 : -58)
                  : index * step;

                return (
                  <div
                    key={robot.name}
                    className="absolute left-1/2 top-1/2 h-[320px] w-[210px] [backface-visibility:hidden] [transform-style:preserve-3d]"
                    style={{
                      transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(330px)`,
                    }}
                  >
                    <motion.button
                      type="button"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => {
                        if (suppressClick.current) return;
                        if (!active) {
                          rotateToIndex(index);
                        } else {
                          setSelectedRobot(robot);
                        }
                      }}
                      animate={{ scale: active || hovered ? 1.06 : 0.94, opacity: active ? 1 : hovered ? 0.96 : 0.72 }}
                      transition={{ duration: 0.25 }}
                      className="h-full w-full overflow-hidden rounded-xl border border-white/30 bg-slate-950 text-left shadow-2xl shadow-slate-950/30 dark:border-white/15"
                    >
                      <div className="relative h-[245px] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,rgba(14,165,233,0.28),transparent_36%),linear-gradient(145deg,#1e293b,#020617)]">
                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_44%,rgba(56,189,248,0.18)_44.2%,transparent_44.8%_68%,rgba(59,130,246,0.12)_68.2%,transparent_68.8%)]" />
                        <img
                          src={robot.image}
                          alt=""
                          className="relative z-10 h-full w-full object-contain p-1 drop-shadow-[0_0_28px_rgba(56,189,248,0.32)]"
                        />
                      </div>
                      <div className="border-t border-white/10 bg-slate-950/90 p-4 text-white">
                        <p className="font-mono text-sm font-black">{robot.name}</p>
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              aria-label={locale === 'en' ? 'Previous hardware' : '上一个硬件'}
              onClick={() => rotate(-1)}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sky-200 bg-[#fafbfc]/75 text-xl text-slate-700 shadow-lg backdrop-blur transition-colors hover:border-sky-400 hover:text-blue-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-cyan-300"
            >
              ←
            </button>
            <button
              type="button"
              aria-label={locale === 'en' ? 'Next hardware' : '下一个硬件'}
              onClick={() => rotate(1)}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sky-200 bg-[#fafbfc]/75 text-xl text-slate-700 shadow-lg backdrop-blur transition-colors hover:border-sky-400 hover:text-blue-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-cyan-300"
            >
              →
            </button>
          </motion.div>
        )}
        </AnimatePresence>

        {/* Hardware matrix table */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                {HARDWARE.matrixColumns.map((col) => (
                  <th key={col.key} className="px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t(col.label, locale)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {HARDWARE.robots.map((robot) => (
                <tr key={robot.name} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{robot.manufacturer}</td>
                  <td className="px-4 py-3">
                    {robot.url ? (
                      <a href={robot.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-sky-400 dark:hover:text-sky-300">
                        {robot.name} ↗
                      </a>
                    ) : (
                      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">{robot.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {TYPE_LABELS[robot.type] ? t(TYPE_LABELS[robot.type], locale) : robot.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${STATUS_BADGE[robot.status].className}`}>
                      {t(STATUS_BADGE[robot.status], locale)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-400">{t(robot.task, locale)}</td>
                  <td className="px-4 py-3">
                    {robot.tested ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        ✓ {locale === 'en' ? 'Tested' : '已测试'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                        — {locale === 'en' ? 'Not Tested' : '尚未测试'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Zoom modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setZoomedImage(null)}
        >
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoomedImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] cursor-zoom-out object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
