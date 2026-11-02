/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111110',
          soft: '#1a1918',
        },
        cream: {
          DEFAULT: '#F4EFE6',
          dim: '#EDE6D8',
        },
        crimson: {
          DEFAULT: '#B8262C',
          dark: '#8F1E23',
          light: '#D4433F',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
