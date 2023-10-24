/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#717171',
        'dark-blue': '#426DA9',
        'pink-color': '#E63888',
        'background-gray': '#F6F6F6'
      }
    }
  },
  variants: {},
  plugins: []
}
