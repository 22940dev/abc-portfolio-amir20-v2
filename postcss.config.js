const purgecss = require("@fullhuman/postcss-purgecss");
const fontmagic = require("postcss-font-magician");

module.exports = {
  plugins: [
    purgecss({
      content: ["**/*.html", "**/*.vue"],
      safelist: ["wave"],
    }),
    fontmagic({
      display: "swap",
    }),
  ],
};
