/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [
          "BROmegaVN-Black",
          "BROmegaVN-BlackItalic",
          "BROmegaVN-Bold",
          "BROmegaVN-BoldItalic",
          "BROmegaVN-Light",
          "BROmegaVN-LightItalic",
          "BROmegaVN-Regular",
          "BROmegaVN-RegularItalic",
        ],
      },
    },
  },

  plugins: [],
};
