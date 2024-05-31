import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Protest Guerrilla"],
    },
    extend: {
      colors: {
        primaryCard: "#1e2a3b",
        faded: "#7988a6",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["night", "cupcake"],
    base: true,
    // utils: true,
    // styled: false,
  },
};
