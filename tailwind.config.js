/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin.cjs"), require("daisyui")],
};
