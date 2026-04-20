/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Orbitron'", "ui-sans-serif", "system-ui"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "#0f1821",
        fg: "#fafafa",
        card: "#1a2330",
        border: "#2a3445",
        muted: "#94a3b8",
        primary: "#10b981",
        "primary-glow": "rgba(16, 185, 129, 0.4)",
        accent: "#06b6d4",
      },
      animation: {
        "slide-up": "slideUp 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-down": "slideDown 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fadeIn 300ms ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
