'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { VENDORS } from '@/lib/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowEffect from '@/components/ui/GlowEffect';

const CATEGORY_LABELS: Record<string, { en: string; zh: string }> = {
  mobile: { en: 'Mobile Robots', zh: '移动机器人' },
  quadruped: { en: 'Quadrupeds', zh: '四足机器人' },
  arm: { en: 'Robotic Arms', zh: '机械臂' },
  humanoid: { en: 'Humanoids', zh: '人形机器人' },
  sensor: { en: 'Sensors', zh: '传感器' },
  compute: { en: 'Edge Compute', zh: '边缘计算' },
  drone: { en: 'Drones', zh: '无人机' },
};

export default function VendorsSection() {
  const { locale } = useLocale();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(VENDORS.vendors.map((v) => v.category));
    return Array.from(cats);
  }, []);

  const filteredVendors = activeCategory === 'all'
    ? VENDORS.vendors
    : VENDORS.vendors.filter((v) => v.category === activeCategory);

  return (
    <section id="vendors" className="relative overflow-hidden py-24 sm:py-32">
      <GlowEffect color="cyan" size="lg" className="-left-40 top-1/3" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle title={VENDORS.title} subtitle={VENDORS.subtitle} />

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveCategory('all')}
            className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-500'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600'
            }`}
          >
            {locale === 'en' ? 'All' : '全部'}
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-500'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600'
              }`}
            >
              {CATEGORY_LABELS[cat] ? t(CATEGORY_LABELS[cat], locale) : cat}
            </motion.button>
          ))}
        </div>

        {/* Vendor cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-700/70">
                  {vendor.logo}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-slate-900 dark:text-white">
                    {vendor.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {CATEGORY_LABELS[vendor.category]
                      ? t(CATEGORY_LABELS[vendor.category], locale)
                      : vendor.category}
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(vendor.description, locale)}
              </p>

              <div>
                <div className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {locale === 'en' ? 'Supported Products' : '支持产品'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {vendor.products.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
