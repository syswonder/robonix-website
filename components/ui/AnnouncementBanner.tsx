'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { ANNOUNCEMENT } from '@/lib/constants';

export default function AnnouncementBanner() {
  const { locale } = useLocale();

  return (
    <section className="relative border-t border-slate-200 bg-slate-50 py-6 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-slate-700 dark:text-slate-200"
        >
          {t(ANNOUNCEMENT.text, locale)}
        </motion.p>
      </div>
    </section>
  );
}
