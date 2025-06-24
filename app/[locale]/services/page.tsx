import ServicesPage from "@/app/components/services/ServicesPage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt – Tailored Digital Services for Business Growth",
    description:
      "Discover Solbyt’s customized web, automation & digital marketing services. Drive efficiency and scale your business.",
    openGraph: {
      title: "Solbyt – Tailored Digital Services for Business Growth",
      description:
        "Discover Solbyt’s customized web, automation & digital marketing services. Drive efficiency and scale your business.",
      url: "https://solbyt.tech/en/services",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Solbyt Digital Services Overview",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en/services",
      languages: {
        en: "https://solbyt.tech/en/services",
        es: "https://solbyt.tech/es/servicios",
        fr: "https://solbyt.tech/fr/services",
      },
    },
  },
  es: {
    title: "Solbyt – Servicios Digitales Personalizados para Crecer",
    description:
      "Descubrí los servicios digitales de Solbyt: desarrollo web, automatización y marketing online para potenciar tu negocio.",
    openGraph: {
      title: "Solbyt – Servicios Digitales Personalizados para Crecer",
      description:
        "Descubrí los servicios digitales de Solbyt: desarrollo web, automatización y marketing online para potenciar tu negocio.",
      url: "https://solbyt.tech/es/servicios",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Servicios digitales de Solbyt",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es/servicios",
      languages: {
        en: "https://solbyt.tech/en/services",
        es: "https://solbyt.tech/es/servicios",
        fr: "https://solbyt.tech/fr/services",
      },
    },
  },
  fr: {
    title: "Solbyt – Services Numériques Sur‑mesure pour votre Croissance",
    description:
      "Découvrez les services de Solbyt : sites web, automatisation et stratégie digitale pour booster votre entreprise.",
    openGraph: {
      title: "Solbyt – Services Numériques Sur‑mesure pour votre Croissance",
      description:
        "Découvrez les services de Solbyt : sites web, automatisation et stratégie digitale pour booster votre entreprise.",
      url: "https://solbyt.tech/fr/services",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Services numériques Solbyt",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr/services",
      languages: {
        en: "https://solbyt.tech/en/services",
        es: "https://solbyt.tech/es/servicios",
        fr: "https://solbyt.tech/fr/services",
      },
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

export default function Services() {
  return <ServicesPage />;
}
