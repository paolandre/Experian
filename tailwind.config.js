/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#717171',
        'dark-blue': '#426DA9',
        'pink-color': '#E63888',
        'background-gray': '#F6F6F6',
        'gray-border':'#D6D6D6',
      },
      fontSize: {
        sm: '0.7rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
        }
  },
  variants: {},
  plugins: []
}
