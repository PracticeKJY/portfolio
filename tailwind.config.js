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
      fontFamily: {
        Pretendard: ["Pretendard-Regular"],
      },
      fontSize: {
        clamp: "clamp(0.85rem, 2.5vw, 1.25rem)",
        title: "clamp(1rem, 2.5vw, 1.5rem)",
        h4: "clamp(0.85rem, 2.5vw, 1rem)",
      },
      width: {
        calc: "calc(50%)",
      },
      animation: {
        intersection: "intro 0.5s ease-out 0.5s forwards",
        intro: "intro 1s ease-out 1s forwards ",
        mid: "intro 1s ease-out  2s forwards",
        end: "intro 1s ease-out  4s forwards",
      },
      keyframes: {
        intro: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
