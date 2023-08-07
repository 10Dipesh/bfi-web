/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily:{
      'Ysabeau':['Ysabeau Office', 'sans-serif']
    },
    colors: {
      'primary': '#0275c8;',
      'secondary': '#1B6B93',
      'tertiary': '#4FC0D0',
      'green':'#A2FF86',
      'black':'#000',
      'white':'#FFFFFF',
      'red':'#FF0000',
    }
  },
  plugins: [],
}
