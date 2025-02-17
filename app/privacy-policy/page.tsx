import React from "react";
import PrivacyPolicyPage from "../components/privacy-policy/PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - ADev Oficial",
  description:
    "En ADev, valoramos profundamente la privacidad y la seguridad de la información que nos facilitas. Nuestro compromiso es garantizar una comunicación clara, eficaz y transparente, asegurando siempre el manejo responsable de tus datos en cada interacción.",
  keywords: [
    "Política de Privacidad",
    "privacidad",
    "protección de datos",
    "seguridad",
    "ADev",
  ],
  authors: [{ name: "ADev" }],
  metadataBase: new URL("https://adev.com"),
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PrivacyPolicy: React.FC = () => {
  return <PrivacyPolicyPage />;
};

export default PrivacyPolicy;
