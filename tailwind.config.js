const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.trueGray,
      blue: colors.sky,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      orange: colors.orange,
      violet: colors.violet,
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
  },
  variants: {
    extend: {
      rotate: ["active", "group-hover"],
    },
  },
  plugins: [],
}
