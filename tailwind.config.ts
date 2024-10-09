import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        mercury: 'hsl(var(--mercury))',
        venus: 'hsl(var(--venus))',
        earth: 'hsl(var(--earth))',
        mars: 'hsl(var(--mars))',
        jupiter: 'hsl(var(--jupiter))',
        saturn: 'hsl(var(--saturn))',
        uranus: 'hsl(var(--uranus))',
        neptune: 'hsl(var(--neptune))',
      },
      fontSize: {
        '3xl': '1.75rem',
      },
      fontFamily: {
        spartan: ['var(--font-spartan)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['data-state'],
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
