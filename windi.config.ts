import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"

const conicGradient = (theme, direction, colorList) => {
  const params = [direction, ...colorList.map((color) => theme(`colors.${color}`))]

  return `conic-gradient(${params.join(", ")})`
}

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        amber: colors.amber,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        gray: colors.gray,
      },
      backgroundImage: (theme) => ({
        "conic-gradient": conicGradient(theme, "from 300deg", [
          "emerald.400",
          "green.100",
          "emerald.300",
          "emerald.700",
          "green.100",
          "green.100",
          "emerald.600",
          "emerald.400",
        ]),
      }),
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
})
