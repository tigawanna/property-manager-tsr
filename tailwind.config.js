/** @type {import('tailwindcss').Config} */
const { parkwindPlugin } = require("@park-ui/tailwind-plugin");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-animate"), parkwindPlugin],
};
