import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Protest Guerrilla"],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["night", "cupcake"],
    // styled: false,
  },
};
