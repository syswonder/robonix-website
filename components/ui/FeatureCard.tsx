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
      className="group relative rounded-2xl border border-space-border bg-space-card p-8 transition-colors hover:border-white/10"
    >
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5" />
      </div>

      {/* Icon */}
      <div className="mb-5 text-4xl">{icon}</div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-semibold text-white">{t(title, locale)}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{t(description, locale)}</p>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 glow-border pointer-events-none" />
    </motion.div>
  );
}
