import React from "react";
import TermsAndConditionsPage from "../components/terms-and-conditions/TermsAndConditionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones - ADev Oficial",
  description:
    "Conoce los términos y condiciones que rigen el uso del sitio web de ADev. Nos comprometemos a ofrecer información clara y transparente, garantizando una experiencia segura y confiable en cada interacción.",
  keywords: [
    "Términos y Condiciones",
    "ADev",
    "uso del sitio",
    "política",
    "servicios digitales",
  ],
  authors: [{ name: "ADev" }],
  metadataBase: new URL("https://adev.com"),
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const TermsAndConditions: React.FC = () => {
  return <TermsAndConditionsPage />;
};

export default TermsAndConditions;
