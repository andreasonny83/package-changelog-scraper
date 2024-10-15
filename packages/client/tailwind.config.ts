import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        sans: [
          'Inter var, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  presets: [],
  plugins: [],
} satisfies Config;
