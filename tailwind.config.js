module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class', //false ,'class', 'media'
  theme: {
    color: {
      'trino-laranja':'#ea580c',
      'trino-roxo':'#6b21a8',
      'trino-amarelo':'#facc15',
      'white':'#fff',
    },
    width:{
      btnsm:'100px',
      btnmd:'200px',
      btnlg:'300px',
      btnxl:'400px',
    },
    height:{
      btnsm:'70px',
      btnmd:'100px',
    },
    borderRadius:{
      sm:'5px',
      md:'10px',
      lg:'15px',
    },
    extend: {
      keyframes:{
        aparecer: {
          'from':{opacity: 0},
          'to':{opacity: 1}
        },
      }
    },
  },
  plugins: [],
}
