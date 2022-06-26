/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'n64': "url('/public/n64.jpg')",
      }
    },
    
  },
  plugins: [],
}
