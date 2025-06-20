import React from "react";
import { Cog, Database, Layers, Puzzle, Shield, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const translation = useTranslations("service_detail.aplicaciones-medida.benefits");

  const data = translation.raw("items") as
    | { title: string; description: string }[]
    | undefined;

const iconsArray = [
  <Workflow key="workflow" className="h-8 w-8 text-solbyt-blue-500" />,
  <Layers key="layers" className="h-8 w-8 text-solbyt-purple-600" />,
  <Puzzle key="puzzle" className="h-8 w-8 text-solbyt-pink-500" />,
  <Database key="database" className="h-8 w-8 text-solbyt-blue-500" />,
  <Cog key="cog" className="h-8 w-8 text-solbyt-purple-600" />,
  <Shield key="shield" className="h-8 w-8 text-solbyt-pink-500" />,
];

  if (!data) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-pink-500 to-solbyt-blue-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg border-none shadow-lg hover:shadow-xl transition-transform duration-300 ease-out transform hover:scale-105 bg-gradient-to-br from-solbyt-pink-500/10 to-white">
              <div className="p-6">
                <div className="h-16 w-16 rounded-xl bg-white shadow flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                  {iconsArray[index]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
