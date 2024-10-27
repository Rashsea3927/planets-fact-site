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
      screens: {
        xl: '1440px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontSize: {
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      fontFamily: {
        spartan: ['var(--font-spartan)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundSize: {
        '200': '200%',
      },
      transitionProperty: {
        position: 'background-position',
        width: 'width',
      },
      gap: {
        '15': '4.375rem',
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
