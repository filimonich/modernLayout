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
      sans: ["Roboto", "sans-serif"],
      heading: ["Rajdhani", "sans-serif"],
    },
    colors: {
      red: {
        DEFAULT: "#ee0f39",
      },
      blue: {
        DEFAULT: "#0046e5",
        light: "#a9d9fc",
        extralight: "#a4f3ff",
      },
      black: {
        DEFAULT: "#232324",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "grid-cols-ideal": (value) => {
          return {
            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
          };
        },
      });
    }),
  ],
};
