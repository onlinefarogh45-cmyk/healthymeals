/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#3d4a2a",
          DEFAULT: "#5a6b3d",
          light: "#8a9a6b",
          cream: "#f5f1e8",
          mist: "#f3f5ea",
          sage: "#ebeedd",
          forest: "#1c2b20",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        script: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
