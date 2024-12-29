import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'system-ui', 'sans-serif'],
      serif: ['DM Serif Sans', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        verde: {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        ['slide-in']: 'slideIn 0.4s ease-in-out forwards',
        ['fade-in']: 'fadeIn 0.4s ease-in-out forwards',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function generateAnimationDelay() {
        const delays = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            'animation-delay': `${i * 100}ms`,
          };
        }
        return delays;
      }

      addUtilities(generateAnimationDelay());
    }),
  ],
};
