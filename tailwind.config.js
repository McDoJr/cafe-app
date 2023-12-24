/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: '414px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      },
      fontFamily: {
        primary: 'Rancho',
        secondary: 'Raleway',
        rubik: 'Rubik',
        cursive: 'cursive',
        'open-sans': 'Open Sans'
      },
      colors: {
        primary: '#331A15',
        'primary-lighter': '#653a3a',
        'primary-light': '#f19786',
        secondary: '#8B3F3F',
        gray: '#ECEAE3'
      }
    },
  },
  plugins: [],
}

