/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1C2B35',
        'orange': '#FF9900',
        'red': '#FF3030',
        'plum': '#FFE0B3',
        'gray': '#2A414F',
      },
    },
  },
  plugins: [],
}