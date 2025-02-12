import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // This is the color palette tailwindcss
        // classes of the softeam landing page:
        ["color-1"]: "#072763",
        ["color-2"]: "#1c58a8",
        ["color-3"]: "#1074bc",
        ["color-4"]: "#94d2ff",
      },
      backgroundColor: {
        // This is the background color palette tailwindcss
        // classes of the softeam landing page:
        ["color-1"]: "#072763",
        ["color-2"]: "#1c58a8",
        ["color-3"]: "#1074bc",
        ["color-4"]: "#94d2ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
