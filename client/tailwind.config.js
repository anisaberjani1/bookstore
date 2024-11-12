/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //general color
        'primary': '#FFCE1A',
        //text color
        'secondary': '#0D0842',
        //backgound color
        'blackBG': '#F3F3F3',
        //
        'Favorite': '#FF5841'
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

