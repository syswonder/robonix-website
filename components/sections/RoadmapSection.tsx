'use client';

import { useLocale } from '@/context/LocaleContext';
import { ROADMAP } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import Timeline from '@/components/ui/Timeline';

export default function RoadmapSection() {
  const { locale } = useLocale();

  return (
    <section id="roadmap" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={ROADMAP.title} subtitle={ROADMAP.subtitle} />
        <Timeline phases={ROADMAP.phases} />
      </div>
    </section>
  );
}
