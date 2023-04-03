/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      light: "#dddcdd",
      dark: {
        darker: "#040300",
        lighter: "#282e2d",
      },
      accent: "#73fa95",
      extend: {},
    },
    plugins: [],
  },
};
