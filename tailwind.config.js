/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        correto: '#66FF66',
        incorreto: '#FF6666'
      }
    },
  },
  plugins: [],
}