import { teal, violet } from "tailwindcss/colors";
module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: teal[600],
        secondary: violet[600],
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
