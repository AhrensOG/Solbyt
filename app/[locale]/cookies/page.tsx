import CookiesPage from "@/app/components/cookies/CookiesPage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt – Cookie Policy",
    description:
      "Learn how Solbyt uses cookies to enhance your experience, and respect your privacy.",
    openGraph: {
      title: "Solbyt – Cookie Policy",
      description:
        "See how we use essential cookies to improve functionality without compromising privacy.",
      url: "https://solbyt.tech/en/cookies",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Cookie icon representing policy",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en/cookies",
      languages: {
        en: "https://solbyt.tech/en/cookies",
        es: "https://solbyt.tech/es/cookies",
        fr: "https://solbyt.tech/fr/cookies",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Cookie Policy",
      description:
        "Understand how Solbyt uses cookies responsibly. Essential, no third-party advertising cookies.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
  es: {
    title: "Solbyt – Política de Cookies",
    description:
      "Conocé cómo Solbyt utiliza cookies para mejorar tu experiencia y cuidar tu privacidad.",
    openGraph: {
      title: "Solbyt – Política de Cookies",
      description:
        "Conocé las cookies esenciales que usamos para optimizar el sitio sin comprometer tu privacidad.",
      url: "https://solbyt.tech/es/cookies",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Icono de cookie representando la política",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es/cookies",
      languages: {
        en: "https://solbyt.tech/en/cookies",
        es: "https://solbyt.tech/es/cookies",
        fr: "https://solbyt.tech/fr/cookies",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Política de Cookies",
      description:
        "Descubrí cómo usamos cookies de forma responsable: esenciales y sin cookies de terceros para publicidad.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
  fr: {
    title: "Solbyt – Politique de Cookies",
    description:
      "Découvrez comment Solbyt utilise les cookies pour améliorer votre expérience le trafic et protéger votre vie privée.",
    openGraph: {
      title: "Solbyt – Politique de Cookies",
      description:
        "Apprenez-en plus sur les cookies essentiels que nous utilisons sans compromettre votre confidentialité.",
      url: "https://solbyt.tech/fr/cookies",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Icône de cookie représentant la politique",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr/cookies",
      languages: {
        en: "https://solbyt.tech/en/cookies",
        es: "https://solbyt.tech/es/cookies",
        fr: "https://solbyt.tech/fr/cookies",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Politique de Cookies",
      description:
        "Comprenez comment nous utilisons les cookies de manière responsable : essentiels, sans cookies tiers publicitaires.",
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

export default function Cookies() {
  return <CookiesPage />;
}
