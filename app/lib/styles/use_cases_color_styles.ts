export const use_cases_color_styles = {
  purple: {
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
    icon: "text-solbyt-purple-600",
    iconBg: "bg-solbyt-purple-600/10",
    caseStudyBg: "bg-solbyt-purple-600/10"
  },
  blue: {
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
    icon: "text-solbyt-blue-500",
    iconBg: "bg-solbyt-blue-500/10",
    caseStudyBg: "bg-solbyt-blue-50"
  },
  pink: {
    titleGradient: "from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500",
    icon: "text-solbyt-pink-500",
    iconBg: "bg-solbyt-pink-500/10",
    caseStudyBg: "bg-solbyt-pink-50"
  },
};

export type SolbytColor = keyof typeof use_cases_color_styles;
