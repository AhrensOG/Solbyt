import React from "react";
import PrivacyPolicyPage from "../components/privacy-policy/PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Solbyt Oficial",
  description:
    "En Solbyt, valoramos profundamente la privacidad y la seguridad de la información que nos facilitas. Nuestro compromiso es garantizar una comunicación clara, eficaz y transparente, asegurando siempre el manejo responsable de tus datos en cada interacción.",
  keywords: [
    "Política de Privacidad",
    "privacidad",
    "protección de datos",
    "seguridad",
    "Solbyt",
  ],
  authors: [{ name: "Solbyt" }],
  metadataBase: new URL("https://solbyt.com"),
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PrivacyPolicy: React.FC = () => {
  return <PrivacyPolicyPage />;
};

export default PrivacyPolicy;
