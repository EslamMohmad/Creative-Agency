/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,svg}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0c0f16",
        lightMainColor: "#11141b",
        lightGreenColor: "#75dab4",
      },
      animation: {
        letterTransition:
          "letterTransition var(--speed) var(--animationFunc) var(--delay) both",
      },
      keyframes: {
        letterTransition: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
