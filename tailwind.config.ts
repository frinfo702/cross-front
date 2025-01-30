import type { Config } from "tailwindcss";

// tailwind.config.ts
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/embed/**/*.{js,ts,jsx,tsx,mdx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
