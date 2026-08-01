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
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={DEMO.title} subtitle={DEMO.subtitle} />

        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-2xl shadow-sky-900/10 dark:border-white/10"
            >
              <div className="relative aspect-video">
                {'src' in video && video.src ? (
                  <video
                    key={video.src}
                    className="h-full w-full bg-black object-contain"
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.24),transparent_28%),linear-gradient(135deg,#0f172a_0%,#020617_58%,#111827_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_43%,rgba(56,189,248,0.18)_43.2%,transparent_43.8%_62%,rgba(59,130,246,0.13)_62.2%,transparent_62.8%)]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-[#fafbfc]/12 text-white shadow-[0_0_44px_rgba(14,165,233,0.34)] backdrop-blur-md"
                      >
                        <span className="ml-1 text-3xl">▶</span>
                      </motion.div>
                      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-sm font-bold text-white backdrop-blur">
                        {locale === 'en' ? 'Coming Soon' : '敬请期待'}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Video info — below the player */}
          <motion.div
            key={`info-${video.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <h3 className="font-mono text-2xl font-black text-slate-950 dark:text-white">
                {t(video.title, locale)}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(video.description, locale)}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-slate-200 bg-[#fafbfc] px-3 py-1 font-mono text-xs font-bold text-slate-700 dark:border-white/15 dark:bg-slate-800 dark:text-white">
              {video.duration}
            </span>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEMO.videos.map((v, i) => {
              const active = activeVideo === i;

              return (
                <motion.button
                  key={v.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActiveVideo(i)}
                  className={`group overflow-hidden rounded-xl border text-left transition-all ${
                    active
                      ? 'border-sky-300 bg-[#fafbfc] shadow-xl shadow-sky-500/15 dark:border-cyan-300/40 dark:bg-slate-950/80'
                      : 'border-slate-200 bg-[#fafbfc]/72 shadow-sm backdrop-blur hover:border-sky-300 hover:bg-[#fafbfc] dark:border-white/10 dark:bg-slate-900/58 dark:hover:border-cyan-300/40'
                  }`}
                >
                  <div className="relative aspect-video bg-slate-950">
                    {'src' in v && v.src ? (
                      <video
                        className="h-full w-full object-cover opacity-80"
                        src={`${v.src}#t=0.1`}
                        muted
                        preload="auto"
                        playsInline
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.18),transparent_34%),linear-gradient(135deg,#1e293b,#020617)]" />
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur">
                      {v.duration}
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all ${
                        active
                          ? 'border-sky-200 bg-sky-400/25 text-white shadow-[0_0_28px_rgba(14,165,233,0.45)]'
                          : 'border-white/20 bg-[#fafbfc]/10 text-white group-hover:bg-[#fafbfc]/18'
                      }`}>
                        ▶
                      </span>
                      {!('src' in v && v.src) && (
                        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                          {locale === 'en' ? 'Coming Soon' : '敬请期待'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-mono text-sm font-black text-slate-950 dark:text-white">
                      {t(v.title, locale)}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden dark:text-slate-400">
                      {t(v.description, locale)}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
