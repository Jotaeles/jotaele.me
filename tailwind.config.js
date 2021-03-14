/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Circular', ...fontFamily.sans],
      },
    },
    colors: {
      primary: '#222f3e',
      secondary: '#0652dd',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
