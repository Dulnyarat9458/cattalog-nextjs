/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'layout-body':'#E49A98',
        'panel-body':'#FBD8D7',
        'card-body':'#F8E7E5'
      }
    },
  },
  plugins: [],
}