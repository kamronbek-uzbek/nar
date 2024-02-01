/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'display': "GT Sectra Display Regular"
      },
      maxWidth: {
        'base': '1320px'
      },
      backgroundImage: {
        'heropattern': "url('../img/bg.png')"
      },
      colors: {
        'hero': '#292835',
        'aqua': '#EEF3FA',
        'border': '#DEE3EB',
        'dark': '#292835',
        'carm': '#00000026',
        'secondary': '#B89C67',
        'primary': '#021D5D'
      },
    },
  },
  plugins: [],
}