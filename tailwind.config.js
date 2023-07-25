/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/game/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        customLightPink: '#F1C5B1',
        customYellow: '#E3C732',
        customGreen: '#52796F',
        customBlue: '#354F52',
        customWhite: '#FEE9E1',
        customOrange: '#D76B27',
        customRed: '#C92929',
      },
    },
  },
  plugins: [],
};
