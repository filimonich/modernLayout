const plugin = require("tailwindcss/plugin.js");

const defaultTheme = require("tailwindcss/defaultTheme.js");
let { sm, md, lg, xl } = defaultTheme.screens;

const colors = require("tailwindcss/colors.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
    screens: { xs: "540px", sm, md, lg, xl },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
      heading: ["Ubuntu", "sans-serif"],
    },
    colors: {
      grey: {
        DEFAULT: "#333333",
        light: "#4c4c4c",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      green: {
        DEFAULT: "#1d9d73",
        light: "#4db677",
        light: "#63bf88",
        light: "#38a984",
        bg: "#ffffcc",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) =>
      matchUtilities({
        "grid-cols-ideal": (value) => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
      })
    ),
  ],
};
