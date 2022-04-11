module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Inter var'],
      header: ['Source Sans Pro'],
      body: ['Roboto'],
      bodyAlt:['Work Sans']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
