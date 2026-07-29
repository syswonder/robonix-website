'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';

interface TimelineItem {
  version: string;
  date: string;
  title: { en: string; zh: string };
  status: { en: string; zh: string };
  items: { en: string[]; zh: string[] };
}

interface TimelineProps {
  phases: TimelineItem[];
}

const statusColorMap: Record<string, string> = {
  'Released': 'bg-green-500',
  '已发布': 'bg-green-500',
  'In Progress': 'bg-blue-500',
  '进行中': 'bg-blue-500',
  'Planned': 'bg-slate-400',
  '规划中': 'bg-slate-400',
};

function getStatusColor(status: string): string {
  return statusColorMap[status] || 'bg-slate-400';
}

export default function Timeline({ phases }: TimelineProps) {
  const { locale } = useLocale();

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-translate-x-px" />

      {phases.map((phase, index) => {
        const isLeft = index % 2 === 0;
        const statusText = t(phase.status, locale);
        const itemsList = t(phase.items, locale);

        return (
          <motion.div
            key={phase.version}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative mb-12 flex flex-col md:flex-row ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 top-6 z-10 -translate-x-1/2 md:left-1/2">
              <div className={`h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 ${getStatusColor(statusText)} shadow`} />
            </div>

            {/* Content card */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    {phase.version}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{phase.date}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${getStatusColor(statusText)}`}>
                    {statusText}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {t(phase.title, locale)}
                </h3>
                <ul className="space-y-1.5">
                  {itemsList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
