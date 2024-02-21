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
        'common': '#ecf2fc',
         'navbar' : '#6190E6',
         'button' : '#061125',
         'button-hover' : '#02060e',
         'card' : '#ffffff',
         'card-header' : '#6190E6',
         'card-header-hover' : '#FFB74D ',
          'card-hover' : '#b8cdf4',
      },
      textColor: {
        'warning' : 'red',
        'common': '#0F1035',
        'nav': '#0F1035',
        'nav-active'  : '#DCF2F1',
        'nav-hover': '#ffffff',
        'button' : '#DCF2F1',
        'button-hover' : '#7FC7D9',
        'card-hover' : '',
      },
      borderColor: {
        'common': '#0F1035',
        'nav': '#0F1035',
        'nav-hover': '#DCF2F1',
        'button' : 'white',
        'button-hover' : '#7FC7D9',
        'card-hover' : '#FFB74D',
        'card' : '#6190E6', 
      },

    }
  }
}