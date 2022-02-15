import { defineConfig } from "windicss/helpers"
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        "inset-white": "inset 0 0 100px 20px #ffffff",
        "inset-dark": "inset 0 0 100px 20px rgb(24, 24, 24)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -30px) scale(1.1)",
          },
          "50%": {
            transform: "translate(0, 40px) scale(1)",
          },
          "75%": {
            transform: "translate(-30px, -25px) scale(0.9)",
          },
        },
      },
      typography: {
        lg: {
          css: {
            h2: {
              fontSize: "2.4rem",
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [require("windicss/plugin/typography")],
})
