/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height:{
        calc: 'calc(100vh - 140px)'
      }
    },

  },
  plugins: [],
}
