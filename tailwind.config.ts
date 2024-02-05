import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '375px',
        s: '414px',
        xxxl: '1634px',
      },
      colors: {
        'background-white-1': 'var(--background-white-1)',
        'background-white-2': 'var(--background-white-2)',
        'main-page-color': 'var(--main-page-color)',
        'main-page-color-70': 'var(--main-page-color-70)',
        'main-page-color-40': 'var(--main-page-color-40)',
        'black-90': 'var(--black-90)',
        'text-white-1': 'var(--text-white-1)',
        'fb-blue': 'var(--fb-blue)',
        'ig-violet': 'var(--ig-violet)',
      },
    },
  },
  plugins: [],
};
export default config;
