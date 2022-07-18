/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'darkGray': 'hsl(0, 0%, 63%)',
        'black': 'hsl(0, 0%, 0%)',
        'white': 'hsl(0, 0%, 100%)',
        'veryDarkGray': 'hsl(0, 0%, 27%)'
      },
    },
  },
  plugins: [],
}