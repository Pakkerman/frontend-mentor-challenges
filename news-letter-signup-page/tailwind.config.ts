import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RobotoRegular: "Roboto-Regular",
        RobotoBold: "Roboto-Bold",
      },
    },
  },
  plugins: [],
} satisfies Config;
