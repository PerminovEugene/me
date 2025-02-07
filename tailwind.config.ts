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
      theme: {
        extend: {
          breakAfter: {
            page: "page",
          },
        },
      },
      variants: {
        extend: {
          breakAfter: ["print"],
        },
      },
      spacing: {
        "46": "11.5rem", // 46 * 0.25rem = 11.5rem
      },
    },
  },
  plugins: [],
} satisfies Config;
