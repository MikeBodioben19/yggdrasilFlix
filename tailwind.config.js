/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "className",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        lightGray: '#f1f1f1'
      },
    },     
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
