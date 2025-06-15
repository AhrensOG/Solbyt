import type { Config } from "tailwindcss";

const config: Config = {
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
        "solbyt-purple-50": "#faf5ff",
        "solbyt-purple-500": "#a855f7",
        "solbyt-purple-600": "#9333ea",
        "solbyt-purple-700": "#7e22ce",
        "solbyt-pink-50": "#fdf2f8",
        "solbyt-pink-500": "#ec4899",
        "solbyt-pink-600": "#db2777",
        "solbyt-pink-700": "#be185d",
        "solbyt-blue-50": "#eff6ff",
        "solbyt-blue-500": "#3b82f6",
        "solbyt-blue-600": "#2563eb",
        "solbyt-blue-700": "#1d4ed8",
        "solbyt-solbyt-gray-800 ": "#1f2937",
      },
    },
  },
  plugins: [],
};
export default config;
