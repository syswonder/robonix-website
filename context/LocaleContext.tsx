'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type Locale = 'en' | 'zh';

interface LocaleContextType {
  locale: Locale;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'zh' : 'en'));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
