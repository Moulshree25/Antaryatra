/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec9213",
        "background-light": "#f8f7f6",
        "background-dark": "#221a10",
        "accent-blue": "#A9D6E5",
        "accent-sage": "#A3B18A"
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px"
      }
    }
  },
  plugins: []
}