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
        // 🎨 Solbyt brand colors (nombres claros por color y tono)
        "solbyt-purple-600": "#9333ea",    // tailwind purple-600
        "solbyt-pink-500": "#ec4899",      // tailwind pink-500
        "solbyt-blue-500": "#3b82f6",      // tailwind blue-500
        "solbyt-pink-50": "#fdf2f8",       // tailwind pink-50
        "solbyt-solbyt-gray-800 ": "#1f2937",      // tailwind solbyt-gray-800 
      },
    },
  },
  plugins: [],
};
export default config;
