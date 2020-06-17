module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        'Shabnam',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(181, 53%, 44%)',
          darker: 'hsl(187, 81%, 29%)'
        }
      }
    }
  },
  variants: {
    textAlign: ['responsive', 'direction']
  },
  plugins: [require('tailwindcss-dir')()]
};
