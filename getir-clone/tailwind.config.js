/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "getir-purple": "rgb(76, 51, 152)",
        "getir-yellow": "#ffd300",
      },
    },
  },
  plugins: [],
};
