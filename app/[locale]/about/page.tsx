import AboutPage from "@/app/components/about/AboutPage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt – About Us: Your Partner in Digital Transformation",
    description:
      "Meet the Solbyt team and discover how we deliver custom web, automation & UX/UI solutions to empower businesses.",
    openGraph: {
      title: "Solbyt – About Us: Your Partner in Digital Transformation",
      description:
        "Meet the team driving digital excellence at Solbyt. Personalized solutions, expert execution.",
      url: "https://solbyt.tech/en/about-us",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "The Solbyt team collaborating on a project",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en/about-us",
      languages: {
        en: "https://solbyt.tech/en/about-us",
        es: "https://solbyt.tech/es/nosotros",
        fr: "https://solbyt.tech/fr/a-propos",
      },
    },
  },
  es: {
    title: "Solbyt – Sobre Nosotros: Tu Socio en Transformación Digital",
    description:
      "Conocé al equipo de Solbyt y cómo creamos soluciones web, automatización y UX/UI personalizadas que potencian negocios.",
    openGraph: {
      title: "Solbyt – Sobre Nosotros: Tu Socio en Transformación Digital",
      description:
        "Conocé al equipo que lleva adelante proyectos digitales con tecnología y experiencia a medida.",
      url: "https://solbyt.tech/es/nosotros",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Equipo de Solbyt trabajando",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es/nosotros",
      languages: {
        en: "https://solbyt.tech/en/about-us",
        es: "https://solbyt.tech/es/nosotros",
        fr: "https://solbyt.tech/fr/a-propos",
      },
    },
  },
  fr: {
    title: "Solbyt – À Propos : Votre Partenaire en Transformation Numérique",
    description:
      "Rencontrez l’équipe Solbyt et découvrez nos solutions web sur-mesure, automatisation & UX/UI pour booster votre entreprise.",
    openGraph: {
      title: "Solbyt – À Propos : Votre Partenaire en Transformation Numérique",
      description:
        "Découvrez l’équipe qui mène des projets digitaux personnalisés avec expertise et innovation.",
      url: "https://solbyt.tech/fr/a-propos",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Équipe Solbyt en pleine collaboration",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr/a-propos",
      languages: {
        en: "https://solbyt.tech/en/about-us",
        es: "https://solbyt.tech/es/nosotros",
        fr: "https://solbyt.tech/fr/a-propos",
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

export default function About() {
  return <AboutPage />;
}
