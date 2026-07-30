'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  label: string;
  value?: string;
  variant?: 'default' | 'outline' | 'filled';
  className?: string;
}

export default function Badge({ label, value, variant = 'default', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors';

  const variantClasses = {
    default: 'border border-slate-200 bg-[#edf0f5] text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300',
    outline: 'border border-blue-200 bg-transparent text-blue-600 dark:border-blue-700 dark:text-blue-400',
    filled: 'bg-blue-600 text-white dark:bg-blue-500',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {value && <span className="font-mono font-bold">{value}</span>}
      <span>{label}</span>
    </motion.span>
  );
}
