import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050506",
        surface: "#101013",
        surface2: "#17171b",
        line: "#232327",
        text: "#F5F5F7",
        dim: "#9A9AA3",
        accent: "#3D5AFE",
        accentDim: "#2A3FBD",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
