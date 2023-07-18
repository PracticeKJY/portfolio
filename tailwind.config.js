/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(0.85rem, 2.5vw, 1.25rem)",
        title: "clamp(1rem, 2.5vw, 1.5rem)",
        h4: "clamp(0.85rem, 2.5vw, 1rem)",
      },
      width: {
        calc: "calc(50%)",
      },
    },
  },
  plugins: [],
}
