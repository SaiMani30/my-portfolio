/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-button": "linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea)",
      },
    },
    colors: {
      ...colors,
      primary: {
        ...colors.sky , // Use Prussian Blue (#00416A) or replace it with another blue shade
        DEFAULT: '#0bd1d1', // Set the default color to Prussian Blue
      },
      secondary: {
        ...colors.blue, // Use another color of your choice
        DEFAULT: '#0ea5ea', // Set the default color to a shade of pink
      },
    },
  },
  plugins: [],
};
