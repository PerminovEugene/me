import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        print: { raw: "print" },
      },
      // breakAfter: {
      //   page: "page",
      // },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },

      variants: {
        extend: {
          breakAfter: ["print"],
        },
      },
      spacing: {
        "46": "11.5rem", // 46 * 0.25rem = 11.5rem
        "46plus1": "calc(11.5rem + 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
