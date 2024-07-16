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
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ]
};
