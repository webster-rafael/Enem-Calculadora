/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': {
        min: '320px',
        max: '500px'
      },
    },
    extend: {
      colors: {
        'azulEscuro': '#043f78'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

