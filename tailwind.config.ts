import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#067FB3",
        // "primary-darker": "#026088",
        light: "#FFFFFF",
        "light-darker": "#FAFAFA",
        dark: "#18181B",
        "dark-darker": "#141215",
        error: "#DC2626",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
