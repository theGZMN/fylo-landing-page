/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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
        lightGrayBlue: 'hsl(240, 75%, 98.43%)',
        lightGray: 'hsl(0, 0%, 75%)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        lgSearch : '2fr 1fr',
        xlSearch : '3fr 1fr',
        mdFooter : '3fr 2fr 2fr',
        lgFooter : '2fr 1fr 1fr 1fr',
      },
      boxShadow: {
        card: ['1px 2px 6px 1px rgba(0, 0, 0, 0.05)', '-1px -2px 6px 1px rgba(0, 0, 0, 0.05)'],
      }
    },
  },
  plugins: [],
}
