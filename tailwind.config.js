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
        'chryblsm':"url(../public/img/ChryBlsm.png)",
        'botox':"url(../public/img/botox.png)",
        'chemPeel':"url(../public/img/chemPeel.png)",
        'fat': "url(../public/img/fatDesolving.png)",
        'filler': "url(../public/img/filler.png)",
        'vitamin': "url(../public/img/vitamineInjection.png)",
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
