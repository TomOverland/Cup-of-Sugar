module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "black-t-50": "rgba(0,0,0,0.5)",
      }
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
