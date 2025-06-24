import React from "react";
import { useTranslations } from "next-intl";
import Footer from "../public/footer/Footer";
import Navbar from "../public/navbar/V2/NavBar";

const CookiesPage: React.FC = () => {
  const translation = useTranslations("cookies");

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-white">
        <header className="mt-[80px] w-full bg-white border-b border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-solbyt-gray-800 text-center mb-4">
              {translation("title")}
            </h1>
            <p className="text-xl text-gray-600 text-center">
              {translation("subtitle")}
            </p>
          </div>
        </header>
        <section className="py-12 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto space-y-10 divide-y divide-gray-200">
            <div className="pb-6">
              <p className="text-lg text-gray-700">{translation("intro")}</p>
            </div>

            {[
              "whatAreCookies",
              "howWeUseCookies",
              "typesOfCookies",
              "controlCookies",
              "changesToPolicy",
              "lastUpdate",
            ].map((key) => (
              <div className="pt-6" key={key}>
                <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
                  {translation(`sections.${key}.title`)}
                </h2>
                <p className="text-gray-700 text-lg">
                  {translation(`sections.${key}.content`)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CookiesPage;
