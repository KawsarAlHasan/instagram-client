/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#570DF8',

          secondary: '#F000B8',

          black: '#000000',

          accent: '#37CDBE',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#FF0000',
        },
      },
      'dark',
    ],
  },
  plugins: [require('daisyui')],
}
