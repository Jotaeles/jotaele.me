/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#222f3e',
        secondary: '#0652dd',
      },
      fontFamily: {
        sans: ['Circular', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
