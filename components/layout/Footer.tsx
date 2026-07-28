'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { FOOTER } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="relative border-t border-white/5 bg-space-darker">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Logo className="text-lg" />
            <p className="mt-3 text-sm text-gray-500">{t(FOOTER.description, locale)}</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold text-white">
              {locale === 'en' ? 'Resources' : '资源'}
            </h4>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-colors hover:text-cyber-cyan"
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
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold text-white">
              {locale === 'en' ? 'Community' : '社区'}
            </h4>
            <ul className="space-y-2">
              {FOOTER.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-colors hover:text-cyber-cyan"
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
          className="mt-12 border-t border-white/5 pt-8 text-center"
        >
          <p className="text-xs text-gray-600">{t(FOOTER.copyright, locale)}</p>
        </motion.div>
      </div>
    </footer>
  );
}
