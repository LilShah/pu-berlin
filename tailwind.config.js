const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#303030",
        headerKaBaap: "#272727",
        headerHover: "#252525",
      },
      fontSize: {
        xxl: "2.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
