/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        'apple-black': '#1d1d1f',
        'apple-gray': '#86868b',
        'apple-blue': '#0066cc',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
