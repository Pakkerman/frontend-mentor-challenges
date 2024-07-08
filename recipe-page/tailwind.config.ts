import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
        "young-serif": ["var(--font-young-serif)", ...fontFamily.sans],
      },
      colors: {
        "primary-nutmeg": "hsl(14, 45%, 36%)",
        "primary-dark-raspberry": "hsl(332, 51%, 32%)",
        "secondary-white": "hsl(0, 0%, 100%)",
        "secondary-rose-white": "hsl(330, 100%, 98%)",
        "secondary-eggshell": "hsl(30, 54%, 90%)",
        "secondary-light-grey": "hsl(30, 18%, 87%)",
        "secondary-wenge-brown": "hsl(30, 10%, 34%)",
        "secondary-dark-charcoal": "hsl(24, 5%, 18%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
