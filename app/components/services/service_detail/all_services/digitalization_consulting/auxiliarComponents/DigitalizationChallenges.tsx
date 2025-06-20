import React from "react";
import { Target, Users, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

const iconsMap = {
  Target: <Target className="h-8 w-8 text-red-500" />,
  Users: <Users className="h-8 w-8 text-orange-500" />,
  Settings: <Settings className="h-8 w-8 text-yellow-500" />,
};

const DigitalizationChallenges = () => {
  const translation = useTranslations(
    "service_detail.asesoria-digital.digitalization_challenges"
  );

  const cards = translation.raw("cards") as {
    title: string;
    description: string;
    impact: string;
    gradient: string;
    icon: keyof typeof iconsMap;
    iconColor: string;
  }[];

  const cta = translation.raw("cta") as {
    question: string;
    text: string;
    button_label: string;
  };

  if (!cards || !cta) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map(({ title, description, impact, gradient, icon }, i) => (
            <div
              key={i}
              className={`border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${gradient} to-white`}>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  {iconsMap[icon]}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{description}</p>
                <div className="text-xs font-medium text-gray-500 bg-white/70 rounded-full px-3 py-1">
                  {translation("result") || "Resultado"}: {impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-solbyt-blue-500/5 via-solbyt-purple-600/5 to-solbyt-pink-500/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            {cta.question}
          </h3>
          <p className="text-gray-600 mb-6">{cta.text}</p>
          {/* <button className="px-6 py-3 rounded-lg text-sm font-semibold bg-solbyt-blue-500 hover:bg-solbyt-blue-600 text-white transition-colors">
            {cta.button_label}
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default DigitalizationChallenges;
