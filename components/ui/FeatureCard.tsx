'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';

interface FeatureCardProps {
  icon: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const { locale } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl border border-slate-200 bg-[#fafbfc] p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
    >
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-sky-500/5" />
      </div>

      {/* Icon */}
      <div className="mb-5 text-4xl transition-transform group-hover:scale-110">{icon}</div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">{t(title, locale)}</h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t(description, locale)}</p>

      {/* Border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 glow-border" />
    </motion.div>
  );
}
