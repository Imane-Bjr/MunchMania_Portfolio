/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violet": "#653C9F",
        "coral": "#FF6F61",
        "gold": "#FFD700",
        "cyan": "#89CFF0",
        "charcol": "#333333",
        "grey": "#E0E0E0",
        "primary": "#FCFCFC"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Specify the theme(s) you want to use
  },
}

