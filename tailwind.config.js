/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   extend: {
        colors: {
          'primary':'#e5b0fe',
          'secondary': "#fae6ff",
          "textColor": "#51005c"
        }
      },
  },
  plugins: [],
};