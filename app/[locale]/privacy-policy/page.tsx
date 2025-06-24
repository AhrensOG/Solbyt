import PrivacyPolicyPage from "@/app/components/privacy-policy/PrivacyPolicyPage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt – Privacy Policy",
    description:
      "Understand how Solbyt collects, uses, and protects your data. Transparency and compliance built in.",
    openGraph: {
      title: "Solbyt – Privacy Policy",
      description:
        "Learn how we handle and safeguard your personal data at Solbyt—clear, transparent, and GDPR-ready.",
      url: "https://solbyt.tech/en/privacy-policy",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Privacy policy icon",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en/privacy-policy",
      languages: {
        en: "https://solbyt.tech/en/privacy-policy",
        es: "https://solbyt.tech/es/politica-de-privacidad",
        fr: "https://solbyt.tech/fr/politique-de-confidentialite",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Privacy Policy",
      description:
        "Solbyt explains how your data is collected and protected in this clear and compliant privacy policy.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
  es: {
    title: "Solbyt – Política de Privacidad",
    description:
      "Conocé cómo Solbyt recopila, usa y protege tus datos. Transparencia y cumplimiento garantizados.",
    openGraph: {
      title: "Solbyt – Política de Privacidad",
      description:
        "Aprendé cómo tratamos y resguardamos tus datos en Solbyt: un enfoque transparente y compatible con GDPR.",
      url: "https://solbyt.tech/es/politica-de-privacidad",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Icono de política de privacidad",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es/politica-de-privacidad",
      languages: {
        en: "https://solbyt.tech/en/privacy-policy",
        es: "https://solbyt.tech/es/politica-de-privacidad",
        fr: "https://solbyt.tech/fr/politique-de-confidentialite",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Política de Privacidad",
      description:
        "Descubrí cómo Solbyt recopila y protege tus datos de manera clara y cumpliendo con GDPR.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
  fr: {
    title: "Solbyt – Politique de Confidentialité",
    description:
      "Découvrez comment Solbyt collecte, utilise et protège vos données. Transparence et conformité assurées.",
    openGraph: {
      title: "Solbyt – Politique de Confidentialité",
      description:
        "Solbyt explique comment vos données sont traitées en toute transparence et conformité RGPD.",
      url: "https://solbyt.tech/fr/politique-de-confidentialite",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Icône de politique de confidentialité",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr/politique-de-confidentialite",
      languages: {
        en: "https://solbyt.tech/en/privacy-policy",
        es: "https://solbyt.tech/es/politica-de-privacidad",
        fr: "https://solbyt.tech/fr/politique-de-confidentialite",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Politique de Confidentialité",
      description:
        "Découvrez comment Solbyt traite et protège vos données en toute transparence et conformité RGPD.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "es" | "fr" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metadataByLocale[locale];
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
