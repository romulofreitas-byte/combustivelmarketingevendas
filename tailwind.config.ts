import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "#f2b705",
        ink: "#0f172a",
        soft: "#f8fafc",
        muted: "#475569"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(15, 23, 42, 0.08), 0 24px 80px rgba(15, 23, 42, 0.14)",
        premium: "0 20px 60px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
