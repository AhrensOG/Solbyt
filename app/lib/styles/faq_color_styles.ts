export const faq_color_styles = {
  purple: {
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
  },
  blue: {
    titleGradient: "from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500",
  },
  pink: {
    titleGradient: "from-solbyt-pink-500 via-solbyt-blue-500 to-solbyt-purple-600",
  },
};

export type SolbytColor = keyof typeof faq_color_styles;
