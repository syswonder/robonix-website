'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { HARDWARE } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';

export default function HardwareSection() {
  const { locale } = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredRobots = activeFilter === 'all'
    ? HARDWARE.robots
    : HARDWARE.robots.filter((r) => r.type === activeFilter);

  return (
    <section id="hardware" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={HARDWARE.title} subtitle={HARDWARE.subtitle} />

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {HARDWARE.filters.map((f) => (
            <motion.button
              key={f.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === f.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-500'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600'
              }`}
            >
              {t(f.label, locale)}
            </motion.button>
          ))}
        </div>

        {/* Robot cards */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRobots.map((robot, index) => (
            <motion.div
              key={robot.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{robot.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{robot.manufacturer}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                  {robot.type}
                </span>
              </div>

              {/* Sensors */}
              <div className="mb-4">
                <div className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {locale === 'en' ? 'Sensors' : '传感器'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {robot.sensors.map((s) => (
                    <span key={s} className="rounded-md bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700/50 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mb-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {t(robot.description, locale)}
              </p>

              {/* Status indicators */}
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  {robot.realRobot ? '✅' : '❌'} {locale === 'en' ? 'Real' : '真实'}
                </span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  {robot.simulation ? '✅' : '❌'} {locale === 'en' ? 'Sim' : '仿真'}
                </span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  {robot.tested ? '✅' : '❌'} {locale === 'en' ? 'Tested' : '已测试'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hardware matrix table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                {HARDWARE.matrixColumns.map((col) => (
                  <th key={col.key} className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                    {t(col.label, locale)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HARDWARE.robots.map((robot) => (
                <tr key={robot.name} className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-700/50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{robot.manufacturer}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{robot.name}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {robot.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">{robot.realRobot ? '✅' : '❌'}</td>
                  <td className="px-6 py-4 text-center">{robot.simulation ? '✅' : '❌'}</td>
                  <td className="px-6 py-4 text-center">{robot.tested ? '✅' : '❌'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
