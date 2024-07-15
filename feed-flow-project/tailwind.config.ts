import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        // => @media (min-width: 640px) { ... }
        sm: "560px",

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "960px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          "100": "#454545",
          "200": "#262626",
          "300": "#000000",
        },
        violet: {
          '50': '#f4f2ff',
          '100': '#ede7ff',
          '200': '#dcd2ff',
          '300': '#c3afff',
          '400': '#a681ff',
          '500': '#8c4eff',
          '600': '#8535fd',
          '700': '#7118e9',
          '800': '#5d14c3',
          '900': '#4e12a0',
          '950': '#2f086d',
        },

        black: {
          "50": "#f2f2f2",
          "100": "#e6e6e6",
          "200": "#cccccc",
          "300": "#b3b3b3",
          "400": "#999999",
          "500": "#808080",
          "600": "#666666",
          "700": "#4d4d4d",
          "800": "#333333",
          "900": "#1a1a1a",
          "950": "#212121",
        },
      },
    },
  },
  plugins: [],
};
export default config;
