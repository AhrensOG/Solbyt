import type React from "react";
import { HelpCircle, CheckCircle } from "lucide-react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import Link from "next/link";

const FaqSection: React.FC = () => {
  const translation = useTranslations("home_page.faq");

  const faqs = translation.raw("faqs") as {
    question: string;
    answer: string;
  }[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <HelpCircle className="h-4 w-4 text-solbyt-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                {translation("badge")}
              </span>
            </div>

            <h2
              className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500"
              dangerouslySetInnerHTML={{ __html: translation("title") }}
            />

            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {translation("subtitle")}
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-gray-200 hover:shadow-md transition-all duration-300 group-hover:shadow-md">
                  {/* Question */}
                  <div className="flex items-start mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-solbyt-purple-600/10 to-solbyt-pink-500/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-solbyt-purple-600/20 group-hover:to-solbyt-pink-500/20 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-solbyt-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-solbyt-purple-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Answer */}
                  <div className="ml-12">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-6 ml-12">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-solbyt-purple-600 to-solbyt-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {translation("cta.title")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {translation("cta.paragraph")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:info@solbyt.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:border-solbyt-blue-500 hover:text-solbyt-blue-500 hover:bg-solbyt-blue-500/5 transition-all duration-200">
                {translation("cta.buttons.email")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO JSON-LD */}
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FaqSection;
