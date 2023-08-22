const colors = require("tailwindcss/colors");

const mono = [
  "ui-monospace",
  "SFMono-Regular",
  "Menlo",
  "Monaco",
  "Consolas",
  "Liberation Mono",
  "Courier New",
  "monospace",
];
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      colors: {
        "gray-1000": "#050505",
        mycolor: "#050505",
        white: "#fff",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-line-clamp"),
  ],
};
