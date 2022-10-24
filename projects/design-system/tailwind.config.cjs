/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      gray: {
        900: "#171717",
        800: "#1E1E1E",
        400: "#52525B",
        300: "#A1A1AA",
        100: "#F4F4F5",
      },

      cyan: {
        500: "#61DAFB",
        300: "#95E8FF",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
