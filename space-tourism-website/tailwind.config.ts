import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BarlowCondensed: ["var(--font-barlow-condensed)"],
        Barlow: ["var(--font-barlow)"],
        Bellefair: ["var(--font-bellefair)"],
      },
    },
  },
  plugins: [],
} satisfies Config
