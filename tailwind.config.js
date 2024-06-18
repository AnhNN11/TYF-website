/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          black: ["BROmegaVN-Black", "sans-serif"],
          blackItalic: ["BROmegaVN-BlackItalic", "sans-serif"],
          bold1: ["BROmegaVN-Bold", "sans-serif"],
          bold1Italic: ["BROmegaVN-BoldItalic", "sans-serif"],
          light1: ["BROmegaVN-Light", "sans-serif"],
          light1Italic: ["BROmegaVN-LightItalic", "sans-serif"],
          regular1: ["BROmegaVN-Regular", "sans-serif"],
          regular1Italics: ["BROmegaVN-RegularItalic", "sans-serif"],
        },
      },
    },
  },

  plugins: [],
};
