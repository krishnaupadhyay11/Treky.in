/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'logo1': '#FF650B',
      },
      fontFamily: {
        'arial': ["Arial MT Black", 'sans-serif'],
        'arial-rounded': ["Arial Rounded MT", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

