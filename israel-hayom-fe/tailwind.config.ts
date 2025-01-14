import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      theme: {
        extend: {
          colors: {
            red: {
              DEFAULT: '#FF5252',
            },
            black: {
              DEFAULT: '#181818',
            },
            gray: {
              DEFAULT: '#999999',
            },
          },
          fontFamily: {
            sans: ['Arial', 'sans-serif'],
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
