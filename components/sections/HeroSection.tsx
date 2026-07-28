'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { HERO } from '@/lib/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Lazy-load 3D scene to avoid SSR issues
const ParticleScene = dynamic(() => import('@/components/three/ParticleScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-space-darkest via-space-darker to-space-darkest" />
  ),
});

export default function HeroSection() {
  const { locale } = useLocale();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
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
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden"
    >
      {/* 3D Scene or fallback gradient */}
      {isMobile ? (
        <div className="absolute inset-0 bg-space-darkest">
          {/* Animated gradient blob fallback */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyber-cyan/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyber-purple/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-space-darkest">
          <ParticleScene />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space-darkest" />
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h1
          ref={titleRef}
          className="mb-6 font-mono text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient glow-text">{HERO.title}</span>
        </h1>

        <p ref={subtitleRef} className="mb-6 text-xl text-gray-300 sm:text-2xl">
          {t(HERO.subtitle, locale)}
        </p>

        <p ref={descRef} className="mx-auto mb-10 max-w-3xl text-base text-gray-500 sm:text-lg">
          {t(HERO.description, locale)}
        </p>

        <div ref={btnsRef} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.a
            href="https://github.com/syswonder/robonix"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple px-8 py-3.5 font-semibold text-white shadow-lg shadow-cyber-purple/25 transition-shadow hover:shadow-xl hover:shadow-cyber-purple/40"
          >
            {t(HERO.cta, locale)}
          </motion.a>

          <motion.a
            href="https://robonix-book.syswonder.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/10 px-8 py-3.5 font-semibold text-gray-300 transition-colors hover:border-white/20 hover:text-white"
          >
            {t(HERO.cta2, locale)} →
          </motion.a>
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
          className="flex flex-col items-center gap-2 text-gray-600"
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
