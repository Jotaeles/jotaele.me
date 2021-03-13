module.exports = {
  purge: ['./pages/**/*.{js}', './components/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Circular'],
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
