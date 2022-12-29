/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "light-grey": "#979797",
      "light-primary": "#E3D5CA",
    },
    fontSize: {
      xs: "10px",
      sm: "14px",
      base: "16px",
    },
  },
  plugins: [],
};
