import { teal, violet } from "tailwindcss/colors";
module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: teal[600],
        secondary: teal[900],
      },
      fontFamily: {
        ubuntu: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
