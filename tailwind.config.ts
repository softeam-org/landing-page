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
        "blue-94D2FF": "#94D2FF",
        "blue-1074BC": "#1074BC",
        "blue-1C58A8": "#1C58A8",
        "blue-072763": "#072763",
        background: "var(--background)",
        foreground: "var(--foreground)",
        // This is the color palette tailwindcss
        // classes of the softeam landing page:
        ["color-1"]: "#072763",
        ["color-2"]: "#1c58a8",
        ["color-3"]: "#1074bc",
        ["color-4"]: "#114e7e",
        ["color-5"]: "#94d2ff",
      },
      backgroundColor: {
        // This is the background color palette tailwindcss
        // classes of the softeam landing page:
        ["color-1"]: "#072763",
        ["color-2"]: "#1c58a8",
        ["color-3"]: "#1074bc",
        ["color-4"]: "#114e7e",
        ["color-5"]: "#94d2ff",
      },
      screens: {
        xs: "540px",
        xxs: "370px",
      },
      width: {
        ["7/10"]: "70%",
      },
    },
  },
  plugins: [],
} satisfies Config;
