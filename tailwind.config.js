/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          tealPerso: {
            100: "#2394AD",
            200: "#1D8590",
            300: "#19687A"
          },
          grayPerso: {
            100: "#5E6565",
            200: "#363F3F",
            300: "#1E2323",
            400: "#090A0A",
          } 
        },
        screens: {
          'xs': '300px',
        },
      },
    },
    plugins: [],
  }