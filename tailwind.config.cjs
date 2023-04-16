/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#1C2B35',
        'orange': '#FF9900',
        'red': '#FF3030',
        'plum': '#FFE0B3',
        'gray': '#2A414F',
        'gray-light': '#95A0A7',
      },
    },
  },
  plugins: [],
}