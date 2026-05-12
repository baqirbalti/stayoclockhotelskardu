/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hotel: {
          page: '#f4efe6',
          section: '#e8dfd2',
          footer: '#1f2329',
          accent: '#c9a044',
          'accent-hover': '#ae8e38',
          'accent-muted': '#9d8440',
        },
      },
    },
  },
  plugins: [],
};
