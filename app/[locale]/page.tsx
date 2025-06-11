import HomePage from "../components/home/HomePage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt - Digital Transformation for Your Business",
    description:
      "Solbyt empowers digital transformation through custom web development and advanced technology solutions.",
    openGraph: {
      title: "Solbyt - Digital Transformation for Your Business",
      description:
        "Discover how Solbyt transforms your business through technology, UX/UI and innovation.",
      url: "https://solbyt.tech/en",
      type: "website",
      images: [{ url: "https://solbyt.tech/icon.svg" }],
    },
  },
  es: {
    title: "Solbyt - Transformación Digital para tu Negocio",
    description:
      "Solbyt impulsa tu negocio con soluciones de desarrollo web, UX/UI y tecnología avanzada.",
    openGraph: {
      title: "Solbyt - Transformación Digital para tu Negocio",
      description:
        "Descubrí cómo Solbyt transforma digitalmente tu empresa con tecnología e innovación.",
      url: "https://solbyt.tech/es",
      type: "website",
      images: [{ url: "https://solbyt.tech/icon.svg" }],
    },
  },
  fr: {
    title: "Solbyt - Transformation Numérique pour votre Entreprise",
    description:
      "Solbyt booste votre croissance digitale avec des solutions personnalisées en développement web.",
    openGraph: {
      title: "Solbyt - Transformation Numérique pour votre Entreprise",
      description:
        "Découvrez comment Solbyt accélère la croissance de votre entreprise grâce à la technologie.",
      url: "https://solbyt.tech/fr",
      type: "website",
      images: [{ url: "https://solbyt.tech/icon.svg" }],
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
