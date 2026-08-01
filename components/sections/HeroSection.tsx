'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { useTheme } from '@/context/ThemeContext';
import { t } from '@/lib/i18n';
import { HERO } from '@/lib/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Badge from '@/components/ui/Badge';
import WebGLErrorBoundary from '@/components/three/WebGLErrorBoundary';

const ParticleScene = dynamic(() => import('@/components/three/ParticleScene'), {
  ssr: false,
  loading: () => null,
});

const TopologyStarfield = dynamic(() => import('@/components/three/TopologyStarfield'), {
  ssr: false,
  loading: () => null,
});

function HeroBackdrop() {
  return (
    <div className="absolute inset-x-0 bottom-[-220px] top-0 z-0 overflow-hidden bg-[#fafbfc] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_70%,rgba(0,0,0,0.8)_82%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,rgba(0,0,0,0.8)_82%,transparent_100%)] dark:bg-[#020617]">
      <img
        src="/images/creation_of_robot.png"
        alt=""
        className="hidden h-full w-full object-contain object-center opacity-90 mix-blend-normal dark:block"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/80 to-white/30 dark:from-slate-950/60 dark:via-slate-950/30 dark:to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_74%_62%,rgba(34,197,94,0.10),transparent_24%)] dark:hidden" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_74%_20%,rgba(236,72,153,0.2),transparent_26%),radial-gradient(circle_at_58%_62%,rgba(6,182,212,0.22),transparent_32%)] dark:block" />
      <div className="absolute inset-x-0 bottom-0 h-[340px] bg-gradient-to-b from-transparent via-white/80 to-[#f6f8fa] dark:from-transparent dark:via-[#020617]/50 dark:to-[#020617]" />
    </div>
  );
}

export default function HeroSection() {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isLight = theme === 'light';

  return (
    <section
      className="relative isolate flex min-h-[760px] items-center overflow-visible bg-transparent sm:min-h-[820px]"
    >
      <HeroBackdrop />

      {/* 3D particles — only in dark mode */}
      {!isMobile && !isLight && (
        <WebGLErrorBoundary fallback={null}>
          <ParticleScene />
        </WebGLErrorBoundary>
      )}

      {/* Light mode: centered single column. Dark mode: two-column with star cluster */}
      <div className={`relative z-10 mx-auto w-full max-w-7xl items-center gap-12 px-6 py-16 pt-20 ${
        isLight
          ? 'flex justify-center text-center'
          : 'grid lg:grid-cols-[0.9fr_1.1fr]'
      }`}>
        <div className={isLight ? 'max-w-3xl' : 'min-w-0'}>
          <p
            className="mb-4 max-w-full break-words font-mono text-[10px] font-medium uppercase leading-relaxed tracking-widest text-sky-700 dark:text-sky-300 sm:text-xs"
          >
            {t(HERO.tagline, locale)}
          </p>

          <h1
            className="mb-5 font-mono text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="text-slate-950 drop-shadow-[0_0_34px_rgba(14,165,233,0.18)] dark:text-white dark:drop-shadow-[0_0_34px_rgba(56,189,248,0.42)]">{HERO.title}</span>
          </h1>

          <p className={`mb-6 max-w-xl text-xl italic text-slate-900 dark:text-white sm:text-2xl ${isLight ? 'mx-auto' : ''}`}>
            {t(HERO.subtitle, locale)}
          </p>

          <p className={`mb-8 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg ${isLight ? 'mx-auto' : ''}`}>
            {t(HERO.description, locale)}
          </p>

          <div className={`mb-8 flex max-w-full flex-col gap-4 sm:flex-row ${isLight ? 'justify-center' : ''}`}>
            <motion.a
              href="https://robonix-book.syswonder.org/integration-guide/vendor-onboarding"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gradient-to-r from-blue-600 to-sky-400 px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-500/30 transition-shadow hover:shadow-xl hover:shadow-blue-500/50"
            >
              {t(HERO.cta, locale)}
            </motion.a>

            <motion.a
              href="https://github.com/syswonder/robonix"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-sky-200 bg-white/70 px-8 py-3.5 text-center font-semibold text-slate-800 shadow-sm backdrop-blur transition-colors hover:border-sky-400 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-sky-300 dark:hover:bg-white/15"
            >
              {t(HERO.ctaGithub, locale)}
            </motion.a>
          </div>

          <div className={`flex flex-wrap gap-2 ${isLight ? 'justify-center' : ''}`}>
            {HERO.badges.map((badge, i) => (
              <Badge key={i} label={t(badge.label, locale)} value={badge.value} variant="outline" />
            ))}
          </div>
        </div>

        {/* Right-side star cluster — dark mode only */}
        {!isLight && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="hidden md:block"
          >
            <div className="relative ml-auto aspect-square min-h-[360px] w-full max-w-xl cursor-grab select-none active:cursor-grabbing">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_66%_35%,rgba(236,72,153,0.12),transparent_26%),radial-gradient(circle_at_34%_68%,rgba(34,197,94,0.1),transparent_28%)] blur-2xl dark:bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_68%_32%,rgba(236,72,153,0.18),transparent_28%),radial-gradient(circle_at_30%_72%,rgba(34,197,94,0.12),transparent_30%)]" />
              <WebGLErrorBoundary fallback={null}>
                <TopologyStarfield />
              </WebGLErrorBoundary>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-medium">
            {locale === 'en' ? 'Scroll' : '向下滚动'}
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <motion.circle
              animate={{ cy: [6, 12, 6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              cx="8"
              cy="6"
              r="2"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
