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
        customPurple: '#A45EDB',
        customGreen: '#4AA573',
        customBlue: '#54C4E7',
        customWhite: '#FEE9E1',
        customRoyalBlue: '#124E78',
        customRed: '#ED2626',
        customBlack: '#272727',
      },
    },
  },
  plugins: [],
};
