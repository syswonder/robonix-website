'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { NAV_LINKS } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const { locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-[36px] z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-slate-200/60 shadow-lg shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1.5 md:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="rounded-lg px-5 py-3 text-lg font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
            >
              {t(link.label, locale)}
            </motion.a>
          ))}

          {/* Language toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={toggleLocale}
            className="ml-2 rounded-lg border border-slate-200 px-4 py-2.5 font-mono text-base text-slate-600 transition-all hover:border-blue-500/50 hover:text-blue-600"
          >
            {locale === 'en' ? '中文' : 'EN'}
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-slate-900"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-slate-900"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-slate-900"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
                >
                  {t(link.label, locale)}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLocale();
                  setMobileOpen(false);
                }}
                className="mt-2 rounded-lg border border-slate-200 px-4 py-2.5 font-mono text-base text-slate-600 hover:text-blue-600"
              >
                {locale === 'en' ? '切换到中文' : 'Switch to English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
