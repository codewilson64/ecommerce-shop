/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner_1: "url(./assets/banner_1.jpg)",
      },
      screens: {
        xxs: "380px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1700px",
      },
    },
  },
  plugins: [],
};
