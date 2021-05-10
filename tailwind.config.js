const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        thin: ["Yantramanav", "sans-serif"],
      },
      colors: {
        // Build your palette here
        transparent: "transparent",
        current: "currentColor",
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.lightBlue,
        yellow: colors.amber,
      },
      minHeight: {
        hero: "85vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
