module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      header: ['Fraunces', 'Georgia', 'serif'],
      body: ['"Nunito Sans"', '"Segoe UI"', 'sans-serif']
    },
    extend: {
      colors: {
        brand: {
          blue: '#1D86EB',
          'blue-deep': '#0F5FAE',
          green: '#23AB39',
          'green-deep': '#178A2C',
          ink: '#24322C',
          body: '#54655D',
          line: '#DFE9E2',
          band: '#F3F9F4',
          sky: '#EAF3FD',
          'sky-deep': '#DDECFA'
        }
      },
      boxShadow: {
        card: '0 14px 32px rgba(36, 50, 44, 0.10)',
        chip: '0 10px 26px rgba(36, 50, 44, 0.14)'
      },
      animation: {
        gradient: 'animatedgradient 16s ease infinite alternate',
        drift: 'animatedgradient 14s ease infinite alternate',
        'hero-zoom': 'herozoom 26s ease-in-out infinite alternate'
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        herozoom: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.06)' }
        }
      },
      backgroundSize: {
        '220%': '220% 220%',
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
