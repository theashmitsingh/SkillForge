/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'yellowColor': '#FFFF00',
        'redColor': '#FF0000',
        'greenColor': '#00FF00',
        'darkGrey': '#282828',
      }
    },
  },
  plugins: [],
}
