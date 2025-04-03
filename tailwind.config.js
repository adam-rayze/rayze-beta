/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rayze: {
          bg: '#16141D',
          card: '#201E29',
          input: '#28253A',
          'input-hover': '#332F44',
          accent: '#00BF63',
          'accent-hover': '#007A3F',
          'accent-light': '#E8F8F0',
          error: '#FF4A4A'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};