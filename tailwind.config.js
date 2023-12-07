/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#3730a3",
        "primary-color": "#4f46e5",
        "primary-light": "#eef2ff",
        "gray-color": "#9ca3af",
      },
    },
  },
  plugins: [],
};
