'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { ABOUT } from '@/lib/constants';
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

  const tags = t(ABOUT.tags, locale);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <GlowEffect color="purple" size="lg" className="-right-40 top-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={ABOUT.title} />

        <div className="mx-auto max-w-5xl" ref={contentRef}>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-slate-600">
              {t(p, locale)}
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
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
