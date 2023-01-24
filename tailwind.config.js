/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      width: {
        256: "64rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
