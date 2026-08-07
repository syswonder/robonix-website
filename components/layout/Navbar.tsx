'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { useTheme } from '@/context/ThemeContext';
import { t } from '@/lib/i18n';
import { NAV_EXTERNAL_LINKS, NAV_RESOURCES } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const { locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 z-50 transition-all duration-500 max-lg:top-8 top-0 ${
        scrolled
          ? 'glass border-b border-slate-200/60 shadow-lg shadow-slate-200/50 dark:border-slate-700/60 dark:shadow-slate-900/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={scrolled ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
            className="overflow-hidden whitespace-nowrap rounded-full border border-amber-400/50 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400"
          >
            🚧 Under Heavy Construction
          </motion.span>
        </div>

        {/* Desktop links + Resources dropdown */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_EXTERNAL_LINKS.map((link, i) => {
            const isExternal = /^https?:\/\//.test(link.href);
            return (
              <motion.a
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                href={link.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:bg-[#e8ecf3] hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400'
                    : 'text-slate-700 hover:bg-[#fafbfc]/70 hover:text-sky-700 dark:text-white/80 dark:hover:bg-[#fafbfc]/10 dark:hover:text-white'
                }`}
              >
                {t(link.label, locale)}{isExternal ? ' ↗' : ''}
              </motion.a>
            );
          })}

          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_EXTERNAL_LINKS.length * 0.05 }}
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-600 hover:bg-[#e8ecf3] hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400'
                  : 'text-slate-700 hover:bg-[#fafbfc]/70 hover:text-sky-700 dark:text-white/80 dark:hover:bg-[#fafbfc]/10 dark:hover:text-white'
              }`}
            >
              {locale === 'en' ? 'Resources' : '资源'}
              <svg className={`h-3 w-3 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-1 w-48 rounded-lg border border-slate-200/60 bg-[#fafbfc] py-1 shadow-lg shadow-slate-200/50 dark:border-slate-700/60 dark:bg-slate-900 dark:shadow-slate-950/50"
                >
                  {NAV_RESOURCES.map((link) => {
                    const isExternal = /^https?:\/\//.test(link.href);
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="block px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-[#e8ecf3] hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                      >
                        {t(link.label, locale)}{isExternal ? ' ↗' : ''}
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Theme toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={toggleTheme}
            className={`rounded-lg p-2.5 transition-colors ${
              scrolled
                ? 'text-slate-500 hover:bg-[#e8ecf3] hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                : 'text-slate-600 hover:bg-[#fafbfc]/70 hover:text-sky-700 dark:text-white/75 dark:hover:bg-[#fafbfc]/10 dark:hover:text-white'
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </motion.button>

          {/* Language toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            onClick={toggleLocale}
            className={`rounded-lg px-3 py-2 font-mono text-sm transition-all ${
              scrolled
                ? 'text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
                : 'text-slate-600 hover:bg-[#fafbfc]/70 hover:text-sky-700 dark:text-white/75 dark:hover:bg-[#fafbfc]/10 dark:hover:text-white'
            }`}
          >
            {locale === 'en' ? '中文' : 'EN'}
          </motion.button>

          {/* GitHub link */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            href="https://github.com/syswonder/robonix"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg p-2.5 transition-colors ${
              scrolled
                ? 'text-slate-500 hover:bg-[#e8ecf3] hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                : 'text-slate-600 hover:bg-[#fafbfc]/70 hover:text-sky-700 dark:text-white/75 dark:hover:bg-[#fafbfc]/10 dark:hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>

          {/* Get Started CTA */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            href="https://book.robonix.ai/integration-guide/vendor-onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/40"
          >
            {locale === 'en' ? 'Get Started' : '开始使用'}
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-slate-700 dark:bg-slate-300"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-slate-700 dark:bg-slate-300"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-slate-700 dark:bg-slate-300"
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
            className="overflow-hidden border-t border-slate-200/60 bg-[#fafbfc]/95 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_EXTERNAL_LINKS.map((link) => {
                const isExternal = /^https?:\/\//.test(link.href);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-base text-slate-500 transition-colors hover:bg-[#e8ecf3] hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    {t(link.label, locale)}{isExternal ? ' ↗' : ''}
                  </a>
                );
              })}
              {/* Mobile Resources */}
              <div className="border-t border-slate-200 pt-1 dark:border-slate-700">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base text-slate-500 transition-colors hover:bg-[#e8ecf3] hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {locale === 'en' ? 'Resources' : '资源'}
                  <svg className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {NAV_RESOURCES.map((link) => {
                        const isExternal = /^https?:\/\//.test(link.href);
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-8 py-3 text-sm text-slate-500 transition-colors hover:bg-[#e8ecf3] hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                          >
                            {t(link.label, locale)}{isExternal ? ' ↗' : ''}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <hr className="my-2 border-slate-200 dark:border-slate-700" />
              <div className="flex items-center gap-2 px-4 py-2">
                <button
                  onClick={toggleTheme}
                  className="rounded-lg p-2 text-slate-500 hover:bg-[#e8ecf3] dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  {theme === 'light' ? '🌙' : '☀️'} {locale === 'en' ? 'Theme' : '主题'}
                </button>
                <button
                  onClick={() => { toggleLocale(); setMobileOpen(false); }}
                  className="rounded-lg px-3 py-2 font-mono text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400"
                >
                  {locale === 'en' ? '切换到中文' : 'Switch to English'}
                </button>
              </div>
              <a
                href="/coming-soon"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3 text-center font-semibold text-white shadow-md"
              >
                {locale === 'en' ? 'Get Started' : '开始使用'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
