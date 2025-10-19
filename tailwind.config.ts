import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B3A53",
          slate: "#1F2937",
          sky: "#0EA5E9",
          cream: "#F7FAFC",
          accent: "#0EA5E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.25s ease-out",
        "slide-out": "slide-out 0.25s ease-in",
      },
      boxShadow: {
        card: "0 12px 30px -12px rgba(11, 58, 83, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, rgba(14,165,233,0.18), transparent 60%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("supports-backdrop", "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))");
    }),
  ],
};

export default config;
