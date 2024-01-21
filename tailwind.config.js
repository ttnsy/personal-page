/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        serif: ["DM Sans", "sans-serif"],
      },
      color: {
        canvas: {
          50: "#faf7f2",
          100: "#f5f1e7",
          200: "#e5dac3",
          300: "#d5c19c",
          400: "#c3a374",
          500: "#b68c59",
          600: "#a97a4d",
          700: "#8c6242",
          800: "#72503a",
          900: "#5d4231",
          950: "#312119",
        },
        primary: {
          50: "#fef6f2",
          100: "#fdebe3",
          200: "#fdddce",
          300: "#fac1a7",
          400: "#f59d74",
          500: "#eb7c48",
          600: "#d8622a",
          700: "#b64f1f",
          800: "#96441e",
          900: "#7d3d1f",
          950: "#441d0b",
        },
        text: {
          50: "#f5f6f6",
          100: "#e6e7e7",
          200: "#cfd2d1",
          300: "#adb3b2",
          400: "#848c8b",
          500: "#697170",
          600: "#5a605f",
          700: "#4c5251",
          800: "#434747",
          900: "#3b3e3e",
          950: "#1e2020",
        },
      },
    },
  },
  plugins: [],
};
