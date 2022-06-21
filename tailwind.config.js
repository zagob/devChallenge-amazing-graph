/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {
      backgroundImage: {
        'image': "url('./src/assets/team.jpg')",
      }
    },
  },
  plugins: [],
};
