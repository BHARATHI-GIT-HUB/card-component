/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "1000px",
    },
    extend: {
      colors: {
        primaryWhite: "#F6F6F6",
        SecondaryWhite: "#FFFFFF",
        black: "#131313",
        textColor: "#6B6B6D",
        textColor_1: "#585858de",
        textHighlight: "#5c5c5c",
        textDark: "#2e2e2eef",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
