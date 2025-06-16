/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../shared/**/*.{js,ts,jsx,tsx}", // if you're importing shared code
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
