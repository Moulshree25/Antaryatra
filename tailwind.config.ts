import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },

      colors: {

        primary: "#56654D",
        secondary: "#B86D29",

        surface: "#F7F8F5",

        "surface-container-low": "#EEF1EA",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-high": "#E6EAE1",
        "surface-container-highest": "#DDE2D7",

        "primary-fixed": "#DDE8D4",

        "on-surface": "#191C19",
        "on-surface-variant": "#5C6058",

        outline: "#C1C8BA",
        "outline-variant": "#D9DED2",
      },
    },
  },

  plugins: [],
};

export default config;