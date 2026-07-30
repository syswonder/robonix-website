'use client';

import { useLocale } from '@/context/LocaleContext';
import { FEATURES } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import FeatureCard from '@/components/ui/FeatureCard';
import GlowEffect from '@/components/ui/GlowEffect';

export default function FeaturesSection() {
  const { locale } = useLocale();

  const sectionTitle = {
    en: 'Core Capabilities',
    zh: '核心能力',
  };

  const sectionSubtitle = {
    en: 'Everything you need to build modern embodied AI applications.',
    zh: '构建现代具身智能应用所需的一切。',
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 sm:py-32"
    >
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
