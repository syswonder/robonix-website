'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { TEAM, VENDORS } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

const avatarColors = [
  'bg-blue-500', 'bg-purple-500', 'bg-emerald-500',
  'bg-amber-500', 'bg-rose-500', 'bg-cyan-500',
];

export default function TeamSection() {
  const { locale } = useLocale();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TEAM.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="team" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="mixed" size="lg" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={TEAM.title} subtitle={TEAM.subtitle} />

        {/* Institutions */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8">
          {TEAM.institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
            >
              <span className="text-2xl">{inst.logo}</span>
              <span className="font-semibold text-slate-900 dark:text-white">{inst.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Impact metrics */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TEAM.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
            >
              <span className="mb-2 font-mono text-3xl font-bold text-gradient">
                {metric.value}
              </span>
              <span className="text-center text-sm text-slate-500 dark:text-slate-400">
                {t(metric.label, locale)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${avatarColors[testimonialIndex % avatarColors.length]} text-lg font-bold text-white`}>
                {TEAM.testimonials[testimonialIndex].avatar}
              </div>
              <blockquote className="mb-4 text-lg leading-relaxed text-slate-600 italic dark:text-slate-300">
                &ldquo;{t(TEAM.testimonials[testimonialIndex].quote, locale)}&rdquo;
              </blockquote>
              <div className="font-semibold text-slate-900 dark:text-white">
                {TEAM.testimonials[testimonialIndex].author.en}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {TEAM.testimonials[testimonialIndex].affiliation.en}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {TEAM.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === testimonialIndex ? 'w-6 bg-blue-500' : 'w-2 bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
