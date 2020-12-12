module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "black-t-50": "rgba(0,0,0,0.5)",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
    padding: ['hover'],
    resize: ['hover', 'focus'],    
  },
  },
  plugins: [],
}
