/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
      colors: {
        'dark-background': '#202C37',
        'darker-background': '#2B3845',
        'orange-button': '#D84729'
      },
      gridTemplateColumns: {
        
        'card': 'repeat(auto-fill, minmax(250px, 1fr))',
        'cardBig': 'repeat(auto-fill, minmax(350px, 1fr))',
        'border': 'repeat(auto-fill, minmax(90px, 1fr))',
        'borderBig': 'repeat(auto-fill, minmax(130px, 1fr))',

      }
    },
  },
  plugins: [],
}

