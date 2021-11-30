module.exports = {
  important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'light-red': '#EF4565'
      }
    },
    container:{
      center:true,
      padding:'2rem'
    },
    fontFamily:{ 
      'Poppins':['Poppins','sans-serif']
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
