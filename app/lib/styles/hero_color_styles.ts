export const hero_color_styles = {
  purple: {
    badge: "bg-solbyt-purple-600/10 text-solbyt-purple-600",
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
    backgroundGradient: "from-white via-solbyt-purple-50 to-white",
    buttons: {
      primary: "bg-solbyt-purple-600 hover:bg-solbyt-purple-700 text-white",
      outline: "border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-500/10",
    },
  },
  blue: {
    badge: "bg-solbyt-blue-500/10 text-solbyt-blue-500",
    titleGradient: "from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500",
    backgroundGradient: "from-white via-solbyt-blue-50 to-white",
    glowGradient: "from-solbyt-purple-600/20 via-solbyt-blue-500/20 to-solbyt-pink-500/20",
    buttons: {
      primary: "bg-solbyt-blue-500 hover:bg-solbyt-blue-700 text-white",
      outline: "border border-solbyt-purple-600 text-solbyt-purple-600 hover:bg-solbyt-purple-600/10",
    },
  },

} as const;

export type SolbytColor = keyof typeof hero_color_styles;
