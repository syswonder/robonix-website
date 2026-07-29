'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { BENCHMARK } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

export default function BenchmarkSection() {
  const { locale } = useLocale();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="cyan" size="lg" className="-right-40 top-1/2" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={BENCHMARK.title} subtitle={BENCHMARK.subtitle} />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Chart 1: Success Rate Comparison */}
          {BENCHMARK.charts.map((chart, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
            >
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                {t(chart.title, locale)}
              </h3>
              <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">
                {t(chart.description, locale)}
              </p>

              {ci === 0 && chart.before && chart.after ? (
                /* Success rate comparison bar chart */
                <div className="space-y-8">
                  {/* Before bar */}
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-slate-600 dark:text-slate-400">
                        {t(chart.before.label, locale)}
                      </span>
                      <span className="font-mono font-bold text-slate-400 dark:text-slate-500">
                        {chart.before.value}%
                      </span>
                    </div>
                    <div className="h-8 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${chart.before.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-slate-300 to-slate-400"
                      />
                    </div>
                  </div>

                  {/* After bar */}
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        {t(chart.after.label, locale)}
                      </span>
                      <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                        {chart.after.value}%
                      </span>
                    </div>
                    <div className="h-8 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${chart.after.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Improvement highlight */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mx-auto max-w-sm rounded-2xl bg-green-50 p-4 text-center dark:bg-green-900/20"
                  >
                    <span className="font-mono text-2xl font-bold text-green-600 dark:text-green-400">
                      +{(chart.after.value - chart.before.value).toFixed(1)}%
                    </span>
                    <p className="mt-1 text-xs text-green-600 dark:text-green-400">
                      {locale === 'en' ? 'Success rate improvement' : '成功率提升'}
                    </p>
                  </motion.div>
                </div>
              ) : chart.platforms ? (
                /* Platform consistency horizontal bars */
                <div className="space-y-4">
                  {chart.platforms.map((platform, pi) => (
                    <div key={platform.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">{platform.name}</span>
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                          {platform.value}%
                        </span>
                      </div>
                      <div className="h-5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${platform.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: pi * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
