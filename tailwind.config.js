/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "10px",
      sm: "14px",
      base: "16px",
    },

    extend: {
      width: {
        "3/20": "15%",
        "1/20": "5%",
      },
      colors: {
        "light-grey": "#979797",
        "lighter-grey": "#EDEDE9",
        "light-primary": "#E3D5CA",
      },
    },
  },
  plugins: [],
};
