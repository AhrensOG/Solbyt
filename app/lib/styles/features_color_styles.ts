export const features_color_styles = {
  purple: {
    gradient: "from-solbyt-purple-600/10 to-solbyt-purple-600/5",
    iconColor: "text-solbyt-purple-600",
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
  },
  blue: {
    gradient: "from-solbyt-blue-500/10 to-solbyt-blue-500/5",
    iconColor: "text-solbyt-blue-500",
    titleGradient: "from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500",
  },
  pink: {
    gradient: "from-solbyt-pink-500/10 to-solbyt-pink-500/5",
    iconColor: "text-solbyt-pink-500",
    titleGradient: "from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500",
  },
};

export type SolbytColor = keyof typeof features_color_styles;
