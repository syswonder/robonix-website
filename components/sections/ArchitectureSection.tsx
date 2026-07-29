'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { ARCHITECTURE } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';
import ArchitectureDiagram from '@/components/ui/ArchitectureDiagram';

export default function ArchitectureSection() {
  const { locale } = useLocale();
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section id="architecture" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="purple" size="lg" className="-right-40 top-1/2" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={ARCHITECTURE.title} subtitle={ARCHITECTURE.subtitle} />

        {/* Principle tabs */}
        <div className="mb-16 flex flex-wrap justify-center gap-2">
          {ARCHITECTURE.principles.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActivePrinciple(i)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activePrinciple === i
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-500'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600'
              }`}
            >
              {t(p.title, locale)}
            </motion.button>
          ))}
        </div>

        {/* Active principle description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePrinciple}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mb-16 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50/50 p-6 text-center dark:border-blue-800 dark:bg-blue-900/20"
          >
            <h3 className="mb-2 font-mono text-lg font-bold text-blue-700 dark:text-blue-400">
              {t(ARCHITECTURE.principles[activePrinciple].title, locale)}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t(ARCHITECTURE.principles[activePrinciple].description, locale)}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive architecture diagram */}
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
