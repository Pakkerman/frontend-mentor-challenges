import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
      },
      backgroundImage: {
        mobile: "url('/assets/images/bg-main-mobile.png')",
        desktop: "url('/assets/images/bg-main-desktop.png')",
        cardFront: "url('/assets/images/bg-card-front.png')",
        cardBack: "url('/assets/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
} satisfies Config
