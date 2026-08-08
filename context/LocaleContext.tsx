'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';

export type Locale = 'en' | 'zh';

interface LocaleContextType {
  locale: Locale;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  toggleLocale: () => {},
});

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  // 1. user's previous choice
  const stored = localStorage.getItem('robonix-locale');
  if (stored === 'en' || stored === 'zh') return stored;
  // 2. browser/system language
  if (navigator.language.startsWith('zh')) return 'zh';
  // 3. fallback
  return 'en';
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Start with 'en' to match SSR; hydrate to correct locale after mount
  const [locale, setLocale] = useState<Locale>('en');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLocale(getInitialLocale());
    setHydrated(true);
  }, []);

  // persist locale changes (skip initial save of 'en' before hydration)
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('robonix-locale', locale);
    }
  }, [locale, hydrated]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'zh' : 'en'));
  }, []);

  const value = useMemo(() => ({ locale, toggleLocale }), [locale, toggleLocale]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
