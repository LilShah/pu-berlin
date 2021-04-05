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
        footer: "#121212",
      },
      fontSize: {
        xxl: "2.1rem",
        "body-lg": "1rem",
        body: ".875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
