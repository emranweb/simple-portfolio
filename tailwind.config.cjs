/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      raleway: "Raleway",
      source: "Source Code Pro",
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      bgColor: "#2a2c36",
      textColor: "rgb(81, 90, 120)",
      primary: {
        light: "#bfdbfe",
        default: "#3b82f6",
        dark: "#1e40af",
      },
      secondary: {
        light: "#e9d5ff",
        default: "#8b5cf6",
        dark: "#6b21a8",
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1320px",
          "@screen 2xl": {
            maxWidth: "1140px",
          },
          "@screen xl": {
            maxWidth: "960px",
          },
          "@screen lg": {
            maxWidth: "720px",
          },
          "@screen md": {
            maxWidth: "540px",
          },
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      });
    },
  ],
};
