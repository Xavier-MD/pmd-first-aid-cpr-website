module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter var'],
      thick: ['Work Sans'],
      header: ['Source Sans Pro'],
      body: ['Roboto'],
      font1: ['Catamaran'],
      font2: ['Lato'],
      font3: ['Merriweather'],
      font4: ['Montserrat'],
      font5: ['Pontano Sans'],
      font6: ['Slabo 27px']
    },
    extend: {
      animation: {
        gradient: 'animatedgradient 12s ease infinite alternate'
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
