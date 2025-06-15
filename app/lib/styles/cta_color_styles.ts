export const cta_color_styles = {
  purple: {
    bgGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
    buttons: {
      primary: "bg-white text-solbyt-purple-600 hover:bg-white/90 shadow-sm",
    }
  },
  blue: {
    bgGradient: "from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500",
    buttons: {
      primary: "bg-white text-solbyt-blue-600 hover:bg-solbyt-purple-600/90 shadow-sm",
    }
  },
  pink: {
    bgGradient: "from-solbyt-pink-500 via-solbyt-blue-500 to-solbyt-purple-600",
    buttons: {
      primary: "bg-white text-solbyt-pink-600 hover:bg-solbyt-purple-600/90 shadow-sm",
    }
  },
};

export type SolbytColor = keyof typeof cta_color_styles;
