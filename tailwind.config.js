/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#475131",
      },
      keyframes: {
        fadeLeft: {
          "0%": { transform: " translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { transform: " translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeRightIn: {
          "0%": { transform: " translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeLeft: "fadeLeft 0.3s linear", // Note the missing 's' in '0.3s'
        fadeRight: "fadeRight 0.3s linear", // Note the missing 's' in '0.3s'
        fadeRightIn: "fadeRightIn 0.3s linear",
      },
      maxWidth: {
        1088: "1088px",
      },
    },
  },
  plugins: [],
};
