import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1rem',
        lg: '1rem'
      },
      screens: {
        sm: '100%',
        md: '150%',
        lg: '672px'
      }
    }
  },

  plugins: [],
} satisfies Config;
