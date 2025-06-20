import React from "react";
import TermsAndConditionsPage from "../../components/terms-and-conditions/TermsAndConditionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Solbyt Oficial",
  description:
    "Conoce los términos y condiciones que rigen el uso del sitio web de Solbyt. Nos comprometemos a ofrecer información clara y transparente, garantizando una experiencia segura y confiable en cada interacción.",
  keywords: [
    "Términos y Condiciones",
    "Solbyt",
    "uso del sitio",
    "política",
    "servicios digitales",
  ],
  authors: [{ name: "Solbyt" }],
  metadataBase: new URL("https://solbyt.tech"),
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const TermsAndConditions: React.FC = () => {
  return <TermsAndConditionsPage />;
};

export default TermsAndConditions;
