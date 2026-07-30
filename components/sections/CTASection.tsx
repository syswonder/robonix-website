'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { CTA } from '@/lib/constants';
import GlowEffect from '@/components/ui/GlowEffect';

export default function CTASection() {
  const { locale } = useLocale();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="mixed" size="lg" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          <span className="text-gradient glow-text">{t(CTA.title, locale)}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10 text-lg text-slate-600 dark:text-slate-400"
        >
          {t(CTA.description, locale)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {CTA.buttons.map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition-shadow ${
                btn.primary
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50'
                  : 'border border-slate-200 bg-[#fafbfc] text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400'
              }`}
            >
              {t(btn.label, locale)}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
