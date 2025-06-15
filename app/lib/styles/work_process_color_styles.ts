export const work_process_color_styles = {
  purple: {
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
    iconBg: "from-solbyt-purple-600 to-solbyt-purple-700",
  },
  blue: {
    titleGradient: "from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500",
    iconBg: "from-solbyt-blue-500 to-solbyt-blue-700",
  },
  pink: {
    titleGradient: "from-solbyt-pink-500 via-solbyt-blue-500 to-solbyt-purple-600",
    iconBg: "from-solbyt-pink-500 to-solbyt-pink-700",
  },
};

export type SolbytColor = keyof typeof work_process_color_styles;
