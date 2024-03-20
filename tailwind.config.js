/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#05A081",
      "base-200": "#ddddd",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
