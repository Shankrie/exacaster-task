import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        sm: "4px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "24px",
      },
      spacing: {
        headerHeight: "72px",
      },
      colors: {
        primaryDark: "#0D47A1",
        primaryMedium: "#1565C0",
        primaryLight: "#2196F3",
        accent: "#1DE9B6",
        text: "#212121",
        textLight: "#757575",
        textInverted: "#FFFFFF",
        background: "#F9FAFB",
      },
      boxShadow: {
        normal: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        soft: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 5px 1px 0px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
