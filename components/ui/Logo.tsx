'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-10',
};

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <a href="#" className={`inline-flex items-center gap-3 font-mono text-xl font-bold tracking-tight ${className}`}>
      <img
        src="/images/robonix-logo.svg"
        alt="Robonix"
        className={`${sizeMap[size]} w-auto`}
      />
    </a>
  );
}
