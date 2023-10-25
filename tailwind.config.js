/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 1.83px 4.58px rgba(169, 168, 168, 0.6)'
      },
      colors: {
        'custom-gray': '#717171',
        'dark-blue': '#426DA9',
        'pink-color': '#E63888',
        'background-gray': '#F6F6F6',
        'gray-icon': '#E0E0E0',
        'gree-bar': '#009F4D',
        'light-pink': '#FAF4FB',
        'purple-icon': '#C43E9F',
        'yellow-icon': '#FFD146',
        'green-icon': '#5CD08E',
        'light-blue': '#BBCFEA',
        'blue-border': '#BBCFEA',
        'purple-clear':'#FEF2FF',
        'white':'#FFFFFF',
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
    },
    variants: {},
    plugins: []
  }
}
