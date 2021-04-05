module.exports = {
  purge: {
    enabled: process.env.BABEL_ENV === "dev" ? false : true,
    content: ["./dist/*.html", "./src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundAttachment: ["hover", "focus"],
    },
  },
  plugins: [],
};
