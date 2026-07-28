import { Locale } from '@/context/LocaleContext';

/**
 * A simple i18n helper: pick the right value for the active locale.
 * Works with both { en: string; zh: string } and { en: string[]; zh: string[] } shapes.
 */
export function t<T extends string | string[]>(
  entry: { en: T; zh: T } | string,
  locale: Locale
): T {
  if (typeof entry === 'string') return entry as T;
  return entry[locale] || entry.en;
}
