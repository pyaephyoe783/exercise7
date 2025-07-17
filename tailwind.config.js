/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './public/**/*.js'],
  theme: {
      container:{
        center:true,
        padding: '16px'
      },
   

  extend: {
      colors: {
        yellow: 'var(--yellow)',
        blue: 'var(--blue)',
        orange: 'var(--orange)',
        green: 'var(--green)',
        white: 'var(--white)',
        black: 'var(--black)',
        red: 'var(--red)',
      },


      fontFamily: {
        lato: ['Poppins', 'sans-serif'],
      },
       screens: {
      sm: '720px',          
      md: '960px',              
    },
      spacing:{
        '15': '50px',
        '0.5':'2px'
        
      },
    },
  },
  plugins: [],
}