/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors,
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.input-text': {
          '@apply border border-rose-500 rounded focus:outline-none focus:ring-2 ring-rose-500/50 px-3 py-1': {},
        },
        '.btn-primary': {
          '@apply rounded focus:outline-none focus:ring-2 ring-rose-500/50 px-3 py-2.5 font-semibold text-white bg-rose-500': {},
        },
        '.btn-secondary': {
          '@apply rounded focus:outline-none focus:ring-2 ring-rose-500/50 px-3 py-2.5 font-semibold text-white bg-gray-900': {},
        },
        '.h1': {
          '@apply text-3xl md:text-6xl font-bold text-gray-900 text-center md:text-left md:pt-4': {},
        },
        '.h2': {
          '@apply text-xl md:text-3xl font-bold text-gray-900': {},
        },
        '.link': {
          '@apply text-rose-500 hover:underline': {},
        },
        '.card': {
          '@apply bg-white shadow-lg border rounded-2xl p-4 md:p-6 mb-6': {},
        },
      });
      addUtilities({
        '.shadow-lg-flipped': {
          boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      });
    }),
  ],
};
