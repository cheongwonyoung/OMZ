/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "431px",
      md: "700px",
      lg: "1024px",
    },
    animation: {
      fadeInOut: 'fadeInOut 6s ease-in-out',
    },

    // that is actual animation
    keyframes: theme => ({
      fadeInOut: {
        '0%': { opacity: 0 },
        '30%': { opacity: 1 },
        '70%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    }),
  },

  plugins: [],
};
