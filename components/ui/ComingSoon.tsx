'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';

interface ComingSoonProps {
  title?: string | { en: string; zh: string };
  description?: string | { en: string; zh: string };
  showHomeLink?: boolean;
}

export default function ComingSoon({ title, description, showHomeLink = true }: ComingSoonProps) {
  const { locale } = useLocale();

  const defaultTitle = locale === 'en' ? 'Coming Soon' : '敬请期待';
  const defaultDescription =
    locale === 'en'
      ? 'We are working hard to bring this page to life. Stay tuned!'
      : '我们正在努力筹备中，敬请期待！';

  const resolvedTitle = title ? (typeof title === 'string' ? title : t(title, locale)) : defaultTitle;
  const resolvedDescription = description
    ? typeof description === 'string'
      ? description
      : t(description, locale)
    : defaultDescription;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      {/* Animated pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-blue-300/40 bg-blue-50/60 shadow-[0_0_60px_rgba(59,130,246,0.15)] dark:border-blue-400/20 dark:bg-blue-950/40 dark:shadow-[0_0_60px_rgba(59,130,246,0.12)]"
      >
        <svg
          className="h-12 w-12 text-blue-500 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono text-3xl font-black text-slate-900 dark:text-white sm:text-4xl"
      >
        {resolvedTitle}
      </motion.h1>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 h-1 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-md text-base leading-relaxed text-slate-500 dark:text-slate-400"
      >
        {resolvedDescription}
      </motion.p>

      {/* Home link */}
      {showHomeLink && (
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#fafbfc] px-6 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {locale === 'en' ? 'Back to Home' : '返回首页'}
        </motion.a>
      )}
    </div>
  );
}
