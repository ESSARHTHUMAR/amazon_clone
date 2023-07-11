/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titleFont: "Roboto",
        bodyFont: "Poppins",
      }
    },
  },
  plugins: [],
}