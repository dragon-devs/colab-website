/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.vue/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':[`Inter`,`sans-serif`],
      },
    },
  },
  plugins: [],
}