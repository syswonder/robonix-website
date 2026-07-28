'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { ECOSYSTEM } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

export default function EcosystemSection() {
  const { locale } = useLocale();

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <GlowEffect color="mixed" size="lg" className="-right-40 bottom-1/3" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={ECOSYSTEM.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.items.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white/80 p-10 text-center shadow-sm backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white hover:shadow-md"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {t(item.title, locale)}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {t(item.description, locale)}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                {locale === 'en' ? 'Visit' : '访问'} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
