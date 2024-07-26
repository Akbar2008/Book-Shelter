/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Noto Sans", "sans-serif"],
      mono: ["SF Pro Text", "sans-serif"],
      display: ["GT America", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      content: ["Dancing Script", "sans-serif"],
    },
    boxShadow: {
      "3xl": " 0 0 3px 0 rgba(0, 0, 0, 0.1)",
    },
    extend: {},
  },
  plugins: [],
};
