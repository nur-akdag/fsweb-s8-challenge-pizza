/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#CE2829',
        'pizza-beige': '#FAF7F2',
        'pizza-dark-gray': '#292929',
        'pizza-light-gray': '#5F5F5F',
      },
      fontWeight: {
        'normal': '400',
        'bold': '700',
        'semibold': '600',
      }
    },
  },
  plugins: [],
}