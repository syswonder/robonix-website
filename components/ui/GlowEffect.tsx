'use client';

import { motion } from 'framer-motion';

interface GlowEffectProps {
  className?: string;
  color?: 'cyan' | 'purple' | 'mixed';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
};

const colorMap = {
  cyan: 'bg-blue-600/20 dark:bg-blue-500/15',
  purple: 'bg-sky-500/20 dark:bg-sky-400/15',
  mixed: 'bg-gradient-to-r from-blue-600/20 to-sky-500/20 dark:from-blue-500/15 dark:to-sky-400/15',
};

export default function GlowEffect({
  className = '',
  color = 'cyan',
  size = 'md',
}: GlowEffectProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${sizeMap[size]} ${colorMap[color]} ${className}`}
    />
  );
}
