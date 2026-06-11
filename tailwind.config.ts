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
        // Lifted from the app's constants/colors.ts so the hero phone mockup
        // shows the Cockpit in its true colors.
        cockpit: '#07101E',
        'cockpit-muted': '#8FA8C8',
        sage: '#3D6B35',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
