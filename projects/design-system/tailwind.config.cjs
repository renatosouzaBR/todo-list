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
      "gray-900": "#171717",
      "gray-800": "#1E1E1E",
      "gray-400": "#52525B",
      "gray-300": "#A1A1AA",
      "gray-100": "#F4F4F5",

      "cyan-500": "#61DAFB",
      "cyan-300": "#69DBFA",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
