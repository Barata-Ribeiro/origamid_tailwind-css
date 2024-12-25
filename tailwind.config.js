import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    // colors: ({ colors }) => ({
    //   lime: colors.lime,
    //   white: 'white',
    // }),
    // colors: {
    //   lime: {
    //     200: '#acef75',
    //     300: '#91EE77',
    //     900: '#16281F',
    //     950: '#0F1C15',
    //   },
    //   white: 'white',
    // },
    // extend: {
    //   colors: {
    //     verde: {
    //       200: '#acef75',
    //       300: '#91EE77',
    //       900: '#16281F',
    //       950: '#0F1C15',
    //     },
    //     green: {
    //       // 300: '#91EE77',
    //     },
    //   },
    //   spacing: {
    //     22: '5.5rem',
    //   },
    //   fontSize: {
    //     '2xs': '.5rem',
    //     xl: ['1.25rem', { lineHeight: '1.5rem' }],
    //   },
    //   screens: {
    //     xs: '380px',
    //   },
    //   keyframes: {
    //     slideIn: {
    //       '0%': { opacity: 0, transform: 'translateX(-20px)' },
    //       '100%': { opacity: 1, transform: 'translateX(0)' },
    //     },
    //   },
    //   animation: {
    //     slideIn: 'slideIn .3s ease-in-out forwards',
    //   },
    // },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px 3px currentColor',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 10px currentColor',
        },
      });
      addComponents({
        '.btn-ghost': {
          'border-radius': '9999px',
          padding: '.5rem 1rem',
          opacity: '.2',
          border: '2px solid #ccc',
        },
      });
    }),
  ],
};
