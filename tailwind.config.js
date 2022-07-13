/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      colors: {
        veryDarkBlue: 'hsl(243, 87%, 12%)',
        desBlue: 'hsl(238, 22%, 44%)',
        brightBlue: 'hsl(224, 93%, 58%)',
        moderateCyan: 'hsl(170, 45%, 43%)',
        lightGrayBlue: 'hsl(240, 75%, 98%)',
        lightGray: 'hsl(0, 0%, 75%)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
