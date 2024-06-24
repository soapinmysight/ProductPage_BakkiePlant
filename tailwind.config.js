/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'RuilKas': {
        '50': '#f0c6ba',
        '100': '#e07a5f',
      },
      'Verken': {
        '50': '#d5e9bd',
        '100': '#9ed267',
      },
      'Veranda': {
        '50': '#c8e9e2',
        '100': '#7cd3c3',
      },
      'Fav': {
        '50': '#ffbdbd',
        '100': '#ffe5e5',
      },
      'lightest': '#faf9f7',
      'darkest': '#143635',
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],}

