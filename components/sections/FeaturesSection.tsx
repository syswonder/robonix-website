'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { FEATURES } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import FeatureCard from '@/components/ui/FeatureCard';
import GlowEffect from '@/components/ui/GlowEffect';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  const sectionTitle = {
    en: 'Features',
    zh: '核心特性',
  };

  const sectionSubtitle = {
    en: 'Everything you need to build modern robot applications.',
    zh: '构建现代机器人应用所需的一切。',
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GlowEffect color="cyan" size="lg" className="-left-40 top-1/2" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title.en}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
