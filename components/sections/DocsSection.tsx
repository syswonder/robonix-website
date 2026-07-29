'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { DOCS } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';

export default function DocsSection() {
  const { locale } = useLocale();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={DOCS.title} subtitle={DOCS.subtitle} />

        <div className="grid gap-6 md:grid-cols-3">
          {DOCS.cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
            >
              <div className="mb-5 text-5xl transition-transform group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t(card.title, locale)}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(card.description, locale)}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all group-hover:gap-2 dark:text-blue-400">
                {locale === 'en' ? 'View Documentation' : '查看文档'} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
