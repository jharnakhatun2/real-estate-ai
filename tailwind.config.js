/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#307cd5',
        secondary: '#6c757d',
        base: '#f8f9fa',
      },
    },
  },
  plugins: [],
};
