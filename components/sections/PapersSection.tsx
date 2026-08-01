'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { PAPERS } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PapersSection() {
  const { locale } = useLocale();

  return (
    <section id="papers" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={PAPERS.title} subtitle={PAPERS.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {PAPERS.papers.map((paper, index) => (
            <motion.a
              key={index}
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-[#fafbfc] p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
            >
              {/* Top row: icon + category badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl transition-transform group-hover:scale-110">
                  {paper.icon}
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-300">
                  {t(paper.category, locale)}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 font-mono text-lg font-black text-slate-900 dark:text-white">
                {t(paper.title, locale)}
              </h3>

              {/* Authors + Date */}
              <p className="mb-3 text-xs text-slate-500 dark:text-slate-500">
                {t(paper.authors, locale)} · {paper.date}
              </p>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(paper.description, locale)}
              </p>

              {/* Download link */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all group-hover:gap-2 dark:text-blue-400">
                {locale === 'en' ? 'View Paper' : '查看原文'} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Empty state — future papers */}
        {PAPERS.papers.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 dark:border-slate-700 dark:bg-slate-800/30">
            <span className="mb-4 text-5xl">📑</span>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {locale === 'en' ? 'No papers yet. Check back soon!' : '暂无论文，敬请期待！'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
