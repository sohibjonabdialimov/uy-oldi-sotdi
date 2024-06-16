/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        custom_color: "rgb(95, 95, 95)",
        custom_sub_color: "#rgb(80, 80, 80)",
        custom_color_hover: "#f5bca3"
        
      },
      textColor: {
        custom_color: "rgb(95, 95, 95)",
        custom_sub_color: "#rgb(80, 80, 80)",
        custom_color_hover: "#f5bca3"
      }
    },
  },
  plugins: [],
}