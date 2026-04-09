import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#166534',
        'brand-dark': '#14532d',
        'brand-light': '#dcfce7',
        'brand-muted': '#f0fdf4',
      },
    },
  },
  plugins: [],
};

export default config;
