'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { SCENARIOS } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

export default function ScenariosSection() {
  const { locale } = useLocale();

  return (
    <section id="scenarios" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="mixed" size="lg" className="-left-40 bottom-1/3" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={SCENARIOS.title} subtitle={SCENARIOS.subtitle} />

        <div className="grid gap-8 lg:grid-cols-3">
          {SCENARIOS.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
            >
              {/* Icon */}
              <div className="mb-6 text-5xl transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t(item.title, locale)}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(item.description, locale)}
              </p>

              {/* Highlights */}
              <div className="space-y-2 border-t border-slate-100 pt-4 dark:border-slate-700">
                {t(item.highlights, locale).map((h, hi) => (
                  <div key={hi} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
