/** @type {import('tailwindcss').Config} */
const { parkwindPlugin } = require("@park-ui/tailwind-plugin");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  parkUI: {
    accentColor: "yellow",
    grayColor: "slate",
    borderRadius: "sm",
  },
  plugins: [require("tailwindcss-animate"), parkwindPlugin],
};
