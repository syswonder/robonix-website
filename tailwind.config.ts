import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: '#2563eb',
          purple: '#0ea5e9',
          blue: '#3b82f6',
        },
        space: {
          darkest: '#f6f8fa',
          darker: '#e8ecf3',
          dark: '#edf0f5',
          card: '#fafbfc',
          border: '#dde2e9',
        },
      },
      fontFamily: {
        sans: ['"Robonix Sans"', 'Inter', 'MiSans', '"Noto Sans SC"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'MiSans', '"Noto Sans SC"', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'grid-scroll': 'grid-scroll 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.3)' },
        },
        'grid-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
