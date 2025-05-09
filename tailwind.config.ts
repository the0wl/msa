import type { Config } from "tailwindcss";
import Colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: Colors.blue,
      },
    },
  },
  plugins: [],
} satisfies Config;
