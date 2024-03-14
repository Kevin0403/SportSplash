/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
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
          'input' : '#ecf2fc',
          'input-focus' : 'white',
          'footer' : '#6190E6',
          'common-dark' : '#0F1035',
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

      fontFamily: {
        'common' : ['Roboto Condensed', 'sans-serif'],
        'sans': ['Nunito', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },

    }
  }
}