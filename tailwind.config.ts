import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#030712',
        emerald: '#10b981',
        gray: {
          'light-scale': {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#0d1016',
          },
          'dark-scale': {
            50: '#111827',
            100: '#1f2937',
            200: '#374151',
            300: '#4b5563',
            400: '#6b7280',
            500: '#9ca3af',
            600: '#d1d5db',
            700: '#e5e7eb',
            800: '#f3f4f6',
            900: '#f9fafb',
            950: '#fff',
          },
        },
      },
      keyframes: {
        open: {
          '0%': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
        },
        close: {
          to: {
            opacity: '0',
            transform: 'translateX(100%)',
          },
        },
        waving: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'drawer-open': 'open 0.3s ease-in-out',
        'drawer-close': 'close 0.3s ease-in-out',
        'waving-hand': 'waving 2s linear 3',
      },
    },
  },
  plugins: [],
} satisfies Config;
