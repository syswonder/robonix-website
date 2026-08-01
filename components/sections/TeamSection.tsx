'use client';

import { motion } from 'framer-motion';
import { TEAM } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="mixed" size="lg" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={TEAM.title} subtitle={TEAM.subtitle} />

        {/* Logo grid — same style as Ecosystem */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.members.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group flex items-center justify-center rounded-xl p-6 transition-all hover:bg-[#e8ecf3]/50 dark:bg-white/90 dark:hover:bg-white"
              title={member.name}
            >
              <img
                src={member.logo}
                alt={member.name}
                className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:opacity-80"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
