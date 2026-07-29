'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { DEMO } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';

export default function DemoSection() {
  const { locale } = useLocale();
  const [activeVideo, setActiveVideo] = useState(0);

  const video = DEMO.videos[activeVideo];

  return (
    <section id="demo" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={DEMO.title} subtitle={DEMO.subtitle} />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main video player */}
          <motion.div
            key={activeVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              {/* Placeholder for video */}
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🎬</div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {t(video.title, locale)}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video info */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {t(video.title, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t(video.description, locale)}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Playlist */}
          <div className="space-y-3">
            <h4 className="mb-4 font-mono text-sm font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400">
              {locale === 'en' ? 'Playlist' : '播放列表'}
            </h4>
            {DEMO.videos.map((v, i) => (
              <motion.button
                key={v.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveVideo(i)}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                  activeVideo === i
                    ? 'border-blue-400 bg-blue-50 shadow-md dark:border-blue-600 dark:bg-blue-900/30'
                    : 'border-slate-200 bg-white hover:border-blue-200 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-2xl dark:bg-slate-700">
                  {activeVideo === i ? '▶️' : '🎞️'}
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t(v.title, locale)}
                  </div>
                  <div className="text-xs text-slate-400">{v.duration}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
