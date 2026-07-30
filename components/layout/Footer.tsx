'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { FOOTER } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="relative border-t border-slate-200/60 bg-[#edf0f5] dark:border-slate-800 dark:bg-slate-900">
      {/* Star banner */}
      <div className="border-b border-slate-200/60 bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 text-center dark:border-slate-800">
        <p className="text-sm font-medium text-white">
          ⭐ {locale === 'en' ? 'If you find Robonix useful, give us a star on GitHub! ' : '如果你觉得 Robonix 有用，请在 GitHub 上给我们一颗星！'}
          <a
            href="https://github.com/syswonder/robonix"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline underline-offset-2 hover:no-underline"
          >
            {locale === 'en' ? 'Star →' : '点亮 →'}
          </a>
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Logo size="sm" className="mb-3" />
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t(FOOTER.description, locale)}
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {locale === 'en' ? 'Product' : '产品'}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t(link.label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {locale === 'en' ? 'Resources' : '资源'}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t(link.label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {locale === 'en' ? 'Community' : '社区'}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t(link.label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 border-t border-slate-200/60 pt-8 text-center dark:border-slate-800"
        >
          <p className="mb-2 text-xs text-slate-400 dark:text-slate-500">
            {t(FOOTER.copyright, locale)} · {t(FOOTER.license, locale)}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t(FOOTER.techStack, locale)}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
