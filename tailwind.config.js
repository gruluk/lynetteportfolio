/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lynette-red': '#EB6565',
        'description': '#656565',
      }
    },
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}
