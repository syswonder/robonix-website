'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { HERO } from '@/lib/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Badge from '@/components/ui/Badge';
import WebGLErrorBoundary from '@/components/three/WebGLErrorBoundary';

const ParticleScene = dynamic(() => import('@/components/three/ParticleScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
  ),
});

// Shared gradient fallback for when WebGL is unavailable
function GradientFallback() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-slate-950">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-grid opacity-40" />
    </div>
  );
}

export default function HeroSection() {
  const { locale } = useLocale();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.3'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          btnsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[750px] items-center justify-center overflow-hidden"
    >
      {/* 3D Scene or fallback gradient */}
      {isMobile ? (
        <GradientFallback />
      ) : (
        <div className="absolute inset-0 bg-white dark:bg-slate-950">
          <WebGLErrorBoundary fallback={<GradientFallback />}>
            <ParticleScene />
          </WebGLErrorBoundary>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 text-center">
        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mb-4 font-mono text-xs font-medium tracking-widest text-blue-600 uppercase dark:text-blue-400"
        >
          {t(HERO.tagline, locale)}
        </p>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="mb-6 font-mono text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient glow-text">{HERO.title}</span>
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="mb-6 text-xl text-slate-700 sm:text-2xl dark:text-slate-300">
          {t(HERO.subtitle, locale)}
        </p>

        {/* Description */}
        <p ref={descRef} className="mx-auto mb-8 max-w-3xl text-base text-slate-500 sm:text-lg dark:text-slate-400">
          {t(HERO.description, locale)}
        </p>

        {/* CTAs */}
        <div ref={btnsRef} className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.a
            href="https://robonix.syswonder.org/getting-started/quickstart.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-xl hover:shadow-blue-500/40"
          >
            {t(HERO.cta, locale)}
          </motion.a>

          <motion.a
            href="https://robonix-book.syswonder.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            {t(HERO.cta2, locale)} →
          </motion.a>

          <motion.a
            href="https://github.com/syswonder/robonix"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            {t(HERO.cta4, locale)} →
          </motion.a>
        </div>

        {/* Badges */}
        <div ref={badgesRef} className="flex flex-wrap items-center justify-center gap-2">
          {HERO.badges.map((badge, i) => (
            <Badge
              key={i}
              label={t(badge.label, locale)}
              value={badge.value}
              variant="outline"
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
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
