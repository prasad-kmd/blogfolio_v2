/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.*",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1da1f2', // Example custom color
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'], // Example custom font family
      },
    },
  },
  plugins: [],
}