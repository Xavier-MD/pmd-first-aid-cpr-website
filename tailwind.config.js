module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter var'],
      workSans: ['Work Sans'],
      sourceSansPro: ['Source Sans Pro'],
      catamaran: ['Catamaran'],
      lato: ['Lato'],
      montserrat: ['Montserrat'],
      josefinSans: ['Josefin Sans'],
      nunitoSans: ['Nunito Sans'],
      quicksand: ['Quicksand'],
      dmSans: ['DM Sans'],
      libreBaskerville: ['Libre Baskerville'],
      manrope: ['Manrope'],
      poppins: ['Poppins'],
    },
    extend: {
      animation: {
        gradient: 'animatedgradient 16s ease infinite alternate'
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      backgroundSize: {
        '300%': '300%'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-gradient-mask-image')
  ]
};
