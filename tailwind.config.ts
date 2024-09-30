import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: {
          900: "#121212",
          800: "#1f1f1f",
          700: "#292929",
          600: "#333333",
          500: "#3d3d3d",
          400: "#474747",
          300: "#515151",
          200: "#5b5b5b",
          100: "#656565",
          50: "#707070",
        },
      },
      fontSize: { // Added custom font sizes
       
        '9xl': '7rem',
        '10xl': '8rem',

      },
      fontWeight: {
        'medium': '500', // Changed 500 to '500'
      },
    },
  },
  plugins: [],
};
export default config;
