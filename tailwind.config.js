/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.css"],
  theme: {
    fontFamily: {
      brush: ['Brush Script', 'cursive'],
    },
    extend: {
      colors: {
        'very-dark-blue': '#2C0093',
        'magenta': '#E100EB',
        'violet': '#9500ea',
        'blue': '#0004EB',
        'pink': '#EB006F',
        'soft-violet': '#B14EEB',
      },
    },
  },
  plugins: [],
}

