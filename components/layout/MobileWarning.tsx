'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useLocale } from '@/context/LocaleContext';

export default function MobileWarning() {
  const { locale } = useLocale();
  const isMobile = useMediaQuery('(max-width: 1023px)');

  if (!isMobile) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-2 bg-amber-50 px-4 py-2 text-center text-xs font-medium text-amber-800 shadow-sm dark:bg-amber-950 dark:text-amber-200 sm:text-sm">
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
      <span>
        {locale === 'en'
          ? 'Mobile adaptation is not yet complete. For the best experience, please visit on a PC.'
          : '移动端尚未完成适配，请前往 PC 端浏览'}
      </span>
    </div>
  );
}
