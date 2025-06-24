import HomePage from "../components/home/HomePage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt – Accelerate Your Digital Transformation Today",
    description:
      "Unlock growth with Solbyt: custom web, UX/UI & tech solutions. Discover how we turn your vision into measurable impact.",
    openGraph: {
      title: "Solbyt - Digital Transformation for Your Business",
      description:
        "Discover how Solbyt transforms your business through technology, UX/UI and innovation.",
      url: "https://solbyt.tech/en",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Solbyt logo and digital transformation illustration",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en",
      languages: {
        en: "https://solbyt.tech/en",
        es: "https://solbyt.tech/es",
        fr: "https://solbyt.tech/fr",
      },
    },
  },
  es: {
    title: "Solbyt – Acelera tu Transformación Digital Hoy",
    description:
      "Impulsa tu negocio con Solbyt: desarrollo web, UX/UI y tecnología a medida. Descubre cómo generamos impacto real.",
    openGraph: {
      title: "Solbyt - Transformación Digital para tu Negocio",
      description:
        "Descubrí cómo Solbyt transforma digitalmente tu empresa con tecnología e innovación.",
      url: "https://solbyt.tech/es",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Logo de Solbyt e ilustración transformación digital",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es",
      languages: {
        en: "https://solbyt.tech/en",
        es: "https://solbyt.tech/es",
        fr: "https://solbyt.tech/fr",
      },
    },
  },
  fr: {
    title: "Solbyt – Accélérez votre Transformation Numérique",
    description:
      "Boostez votre entreprise avec Solbyt: web sur mesure, UX/UI et solutions technologiques. Découvrez notre impact réel.",
    openGraph: {
      title: "Solbyt - Transformation Numérique pour votre Entreprise",
      description:
        "Découvrez comment Solbyt accélère la croissance de votre entreprise grâce à la technologie.",
      url: "https://solbyt.tech/fr",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Logo Solbyt et illustration transformation numérique",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr",
      languages: {
        en: "https://solbyt.tech/en",
        es: "https://solbyt.tech/es",
        fr: "https://solbyt.tech/fr",
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

export default function Home() {
  return <HomePage />;
}
