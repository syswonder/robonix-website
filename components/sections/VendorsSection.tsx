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
  model: { en: 'Models', zh: '模型' },
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
                : 'border border-slate-200 bg-[#fafbfc] text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600'
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
                  : 'border border-slate-200 bg-[#fafbfc] text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600'
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
              className="group rounded-xl border border-slate-200 bg-[#fafbfc] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-blue-400/60"
            >
              <div className="mb-4">
                {/* Logo — no background, larger */}
                <div className="mb-3 flex h-14 items-center">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="h-full w-auto max-w-[140px] object-contain object-left"
                  />
                </div>
                {/* Name + category */}
                <a
                  href={vendor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-lg font-bold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-sky-300"
                >
                  {vendor.name} ↗
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {CATEGORY_LABELS[vendor.category]
                    ? t(CATEGORY_LABELS[vendor.category], locale)
                    : vendor.category}
                </p>
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
