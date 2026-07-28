'use client';

import { useLocale } from '@/context/LocaleContext';

interface LogoProps {
  src?: string;
  className?: string;
}

export default function Logo({ src, className = '' }: LogoProps) {
  const { locale } = useLocale();

  if (src) {
    return <img src={src} alt="Robonix" className={`h-8 w-auto ${className}`} />;
  }

  return (
    <a href="#" className={`font-mono text-xl font-bold tracking-tight ${className}`}>
      <span className="text-gradient">ROBONIX</span>
    </a>
  );
}
