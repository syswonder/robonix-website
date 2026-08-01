'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { VENDORS } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

export default function VendorsSection() {
  const { locale } = useLocale();

  return (
    <section id="vendors" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="cyan" size="lg" className="-left-40 top-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={VENDORS.title} subtitle={VENDORS.subtitle} />

        {/* Logo grid — 4 per row */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {VENDORS.partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group flex items-center justify-center rounded-xl p-6 transition-all hover:bg-[#e8ecf3]/50 dark:bg-white/90 dark:hover:bg-white"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:opacity-80"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
