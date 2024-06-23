/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      colors:{
        'background':'#0c0a09',
      }
    },
  },
  plugins: [],
}