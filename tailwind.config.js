/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: { min: "320px", max: "565px" },
        // => @media (min-width: 320px) and (max-width: 565px) { ... }
      },
    },
  },
  plugins: [],
};
