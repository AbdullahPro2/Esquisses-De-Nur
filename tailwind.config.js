/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Mulish, sans-serif',
    },

    extend: {
      height: {
        screen: '100dvh',
      },
      screens: {
        xs: '380px',
      },
    },
  },
  plugins: [],
};
