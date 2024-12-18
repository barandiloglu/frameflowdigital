/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        lemonmilk: ["LemonMilk", "sans-serif"],
        boucherie: ["Boucherie", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: "#d18d29",
        secondary: "#353232",
        light: "#ffffeb",
      },
    },
  },
  plugins: [],
};
