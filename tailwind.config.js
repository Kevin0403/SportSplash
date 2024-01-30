/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        'common': '#DCF2F1',
         'navbar' : '#249dbc',
         'button' : '#0F1035',
         'button-hover' : '#091B61',
         'card' : 'white',
          'card-hover' : '#DCF2F1',
      },
      textColor: {
        'warning' : 'red',
        'common': '#0F1035',
        'nav': '#0F1035',
        'nav-hover': '#DCF2F1',
        'button' : '#DCF2F1',
        'button-hover' : '#7FC7D9'
      },
      borderColor: {
        'common': '#0F1035',
        'nav': '#0F1035',
        'nav-hover': '#DCF2F1',
        'button' : 'white',
        'button-hover' : '#7FC7D9'
      },

    }
  }
}