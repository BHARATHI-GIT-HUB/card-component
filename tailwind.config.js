/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024",
      tablet: "1000px",
      filterStarting: "1280px",
      filterEnding: "1400px",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        margin: "0",
        screens: {
          md: "1280px",
          xl: "1400px",
        },
      },
      colors: {
        primaryWhite: "#F6F6F6",
        SecondaryWhite: "#FFFFFF",
        black: "#131313",
        textColor: "#6B6B6D",
        textColor_1: "#585858de",
        textHighlight: "#5c5c5c",
        textDark: "#2e2e2eef",
        textToDark: "#151515ef",
        checkBox: "#F1C94B",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
