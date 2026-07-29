'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { WHY_ROBONIX } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        tagsRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: tagsRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tags = [
    { en: 'Modular', zh: '模块化' },
    { en: 'ROS 2 Compatible', zh: '兼容 ROS 2' },
    { en: 'VLM-Native', zh: '原生 VLM' },
    { en: 'Cross-Platform', zh: '跨平台' },
    { en: 'Extensible', zh: '可扩展' },
    { en: 'Open Source', zh: '开源' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <GlowEffect color="purple" size="lg" className="-right-40 top-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={WHY_ROBONIX.title} />

        <div className="mx-auto max-w-5xl" ref={contentRef}>
          {WHY_ROBONIX.cards.slice(0, 2).map((card, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white">{t(card.solution, locale)}: </strong>
              {t(card.description, locale)}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div
          ref={tagsRef}
          className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag.en}
              className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {t(tag, locale)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
