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
          '@apply border border-blue-500 rounded focus:outline-none focus:ring-2 px-3 py-1': {},
        },
        '.btn-primary': {
          '@apply rounded focus:outline-none focus:ring-2 px-3 py-2 font-semibold text-white bg-blue-500': {},
        },
        '.btn-secondary': {
          '@apply rounded focus:outline-none focus:ring-2 px-3 py-2 font-semibold text-white bg-gray-900': {},
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
