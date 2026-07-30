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
    <section id="why" className="relative overflow-hidden py-16 sm:py-28">
      <GlowEffect color="cyan" size="lg" className="-left-40 top-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={WHY_ROBONIX.title} subtitle={WHY_ROBONIX.subtitle} />

        <div className="grid gap-5 md:grid-cols-2">
          {WHY_ROBONIX.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-[#fafbfc] p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-blue-400/60"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-200">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                {locale === 'en' ? 'Problem' : '问题'} / {t(card.pain, locale)}
              </span>

              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t(card.solution, locale)}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(card.description, locale)}
              </p>

              <div className="absolute bottom-5 right-5 font-mono text-xs text-blue-500 opacity-0 transition-all group-hover:opacity-100">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
