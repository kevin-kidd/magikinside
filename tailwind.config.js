/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'AHS': ['AHS'],
        'Roboto-2': ['Roboto-2'],
      }
    },
  },
  plugins: [require("daisyui")],
}
