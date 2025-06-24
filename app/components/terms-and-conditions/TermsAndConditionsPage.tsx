"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Footer from "../public/footer/Footer";
import Navbar from "../public/navbar/V2/NavBar";

const TermsAndConditionsPage: React.FC = () => {
  const translation = useTranslations("terms");

  return (
    <main className="bg-white">
      <Navbar />
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
            <p className="text-lg text-gray-700">
              {translation("sections.intro")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.usageTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.usageText")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.dataTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.dataText")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.ipTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.ipText")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.liabilityTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.liabilityText")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.modificationTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.modificationText")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.contactTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.contactText")}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800 mb-2">
              {translation("sections.lastUpdateTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {translation("sections.lastUpdateText")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsAndConditionsPage;
