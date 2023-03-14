/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "396px",
      md: "700px",
      lg: "1024px",
    },
  },

  plugins: [],
};
