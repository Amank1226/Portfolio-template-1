/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary_color: '#8e43e7',
        secondary_color: '#273c66',
        bg_color: '#0b0d0e',
        nav_color: '#fff',
        bg_dark: '#131617',
        bg_light: '#F0F5FF',
        primary_text: '#232354',
        number: '#3a3a3a',
        number2: '#5a5a5a',
      },
    },
    fontFamily: {
      'sans': ['Fira Sans', 'Jost'],
    },
  },
  plugins: [],
}