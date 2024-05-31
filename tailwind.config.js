import {teal, violet} from 'tailwindcss/colors'
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: teal[600],
        secondary: violet[600],
      }
    },
  },
  plugins: [],
}