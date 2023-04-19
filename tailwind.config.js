// import bg from './src/assets/img/cloth.jpg'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'apply-img': "url('./src/assets/img/cloth.jpg')",
      },
    },
  },
  plugins: [],
}
