'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { WHY_ROBONIX } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

export default function WhyRobonixSection() {
  const { locale } = useLocale();

  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="cyan" size="lg" className="-left-40 top-1/3" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={WHY_ROBONIX.title} subtitle={WHY_ROBONIX.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {WHY_ROBONIX.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
            >
              {/* Pain point badge */}
              <span className="mb-4 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                {locale === 'en' ? 'Pain Point' : '痛点'} — {t(card.pain, locale)}
              </span>

              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t(card.solution, locale)}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(card.description, locale)}
              </p>

              {/* Arrow indicator on hover */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
