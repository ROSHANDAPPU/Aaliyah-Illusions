import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#29CEF2',
        'primary-hover': '#3DD8FC',
        'background-dark': '#050505',
        'background-medium': '#0a0a0a',
        'background-light': '#111',
        'background-lighter': '#222',
        'neutral-text-light': '#ffffff',
        'neutral-text-medium': '#888888',
        'neutral-text-dark': '#4a4a4a',
        'gray-600': '#71717a',
        'gray-500': '#a1a1aa',
        'gray-400': '#d4d4d8',
        'gray-900': '#18181b',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        'clamp-h1-sm': 'clamp(32px, 6vw, 88px)',
        'clamp-h1-lg': 'clamp(48px, 10vw, 120px)',
        'clamp-h2': 'clamp(28px, 4vw, 56px)',
        'clamp-h3': 'clamp(28px, 4vw, 52px)',
        'clamp-cta': 'clamp(14px, 1.2vw, 18px)',
        'clamp-small': 'clamp(10px, 1vw, 14px)',
        'clamp-wordmark-lg': 'clamp(48px, 12vw, 180px)',
        'clamp-wordmark-hero': 'clamp(180px, 28vw, 480px)',
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
