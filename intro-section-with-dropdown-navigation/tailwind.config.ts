import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
      backgroundImage: {
        mobile: "url('/assets/image-hero-mobile.png')",
        desktop: "url('/assets/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
} satisfies Config
