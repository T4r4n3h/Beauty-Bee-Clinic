module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        'btn-blue':'#E6EAF2'
      },
      lineHeight:{
        'extra-loose': '6.87rem'
      },
      backgroundImage:{
        'chryblsm':"url(../public/img/ChryBlsm.png)"
      },
      backgroungSize: {
        '150%':"150%"
      },
      fontFamily:{
        'typo':"TypoRounded"
      }
    },
  },
  plugins: [],
}
