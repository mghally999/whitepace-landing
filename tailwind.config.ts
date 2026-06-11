import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Breakpoints match the five supplied design frames (320 / 768 / 1152 / 1440 / 1920).
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1152px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        // The six and only design tokens.
        navy: "#043873",
        brand: "#4F9CF9",
        accent: "#FFE492",
        sky: "#A7CEFC",
        ink: "#212529",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1480px",
      },
      fontSize: {
        // Desktop type scale from the design system.
        "hero": ["4.5rem", { lineHeight: "1.15", fontWeight: "800" }],
        "h2": ["3.125rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h3": ["1.625rem", { lineHeight: "1.3", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
      },
      boxShadow: {
        card: "0 24px 48px rgba(4,56,115,0.10)",
        "card-hover": "0 32px 64px rgba(4,56,115,0.16)",
        nav: "0 8px 24px rgba(4,56,115,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "hero-in": {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        orbit: {
          to: { transform: "rotate(360deg)" },
        },
        "orbit-rev": {
          to: { transform: "rotate(-360deg)" },
        },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        "hero-in": "hero-in 0.8s ease-out both",
        float: "float 4s ease-in-out infinite",
        orbit: "orbit 24s linear infinite",
        "orbit-rev": "orbit-rev 24s linear infinite",
        "menu-in": "menu-in 0.2s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
