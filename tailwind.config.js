/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      mobile: { min: '375px' },
      desktop: { min: '1440px' },
    },
    colors: {
      softOrange: 'hsl(35, 77%, 62%)',
      softRed: 'hsl(5, 85%, 63%)',
      offWhite: 'hsl(36, 100%, 99%)',
      grayishBlue: 'hsl(233, 8%, 79%)',
      darkGrayishBlue: 'hsl(236, 13%, 42%)',
      veryDarkBlue: 'hsl(240, 100%, 5%)',
      backdropBg: 'rgba(0,0,0,0.3)',
    },
    fontFamily: {
      sans: ['Intel', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      semiBold: '700',
      bold: '800',
    },
    extend: {
      gridTemplateRows: {
        '3-auto': 'repeat(3, auto)',
      },
    },
  },
  plugins: [],
};
