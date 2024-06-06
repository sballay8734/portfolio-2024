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
        fadedPrimary: "#237599",
        description: "",
      },
      boxShadow: {
        default: "0 3px 8px rgba(0, 0, 0, 0.24)",
      },
    },
    screens: {
      xs: "530px",
      // => @media (min-width: 530px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["night", "emerald", "dark", "dracula"],
    base: true,
    // utils: true,
    // styled: false,
  },
};

// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
