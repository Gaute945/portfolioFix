/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.css"],
  theme: {
    fontFamily: {
      brush: ['Brush Script', 'cursive'],
      dancing: ['"Dancing Script"', 'cursive'],
    },
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      colors: {
        'veryDarkBlue': '#2C0093',
        'magenta': '#E100EB',
        'violet': '#9500ea',
        'blue': '#0004EB',
        'pink': '#EB006F',
        'softViolet': '#B14EEB',
      },
    },
  },
  plugins: [],
}

