'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';

interface SectionTitleProps {
  title: { en: string; zh: string };
  subtitle?: { en: string; zh: string };
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const { locale } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="text-gradient">{t(title, locale)}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-3xl text-lg text-gray-400">{t(subtitle, locale)}</p>
      )}
    </motion.div>
  );
}
