import type { Config } from "tailwindcss";
const brandPreset = require("./tailwind.preset.js");

const config: Config = {
  presets: [brandPreset],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        "q-container-narrow": "960px",
      },
      spacing: {
        gutter: "24px",
        section: "96px",
        "section-tight": "64px",
        "section-hero": "88px",
      },
      transitionDuration: {
        "q-fast": "150ms",
        "q-base": "200ms",
        "q-slow": "250ms",
        "q-fade": "300ms",
      },
      transitionTimingFunction: {
        "q-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
