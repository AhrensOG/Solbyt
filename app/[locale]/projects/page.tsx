import ProjectsPage from "@/app/components/projects/ProjectsPage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Solbyt – Showcasing Digital Transformation Projects",
    description:
      "Explore Solbyt’s portfolio of successful web, automation & UX/UI projects. See measurable impact delivered to our clients.",
    openGraph: {
      title: "Solbyt – Our Digital Transformation Portfolio",
      description:
        "A curated showcase of Solbyt’s client success stories: custom builds, automation, and digital growth.",
      url: "https://solbyt.tech/en/projects",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Solbyt project portfolio thumbnail",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en/projects",
      languages: {
        en: "https://solbyt.tech/en/projects",
        es: "https://solbyt.tech/es/proyectos",
        fr: "https://solbyt.tech/fr/projets",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Our Digital Transformation Portfolio",
      description:
        "Discover how we’ve helped businesses grow through custom web, automation & UX/UI solutions.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
  es: {
    title: "Solbyt – Proyectos de Transformación Digital",
    description:
      "Explorá el portafolio de proyectos de Solbyt: web, automatización y UX/UI con resultados medibles.",
    openGraph: {
      title: "Solbyt – Nuestro Portafolio Digital",
      description:
        "Descubrí casos exitosos de Solbyt: desarrollos a medida, automatización y crecimiento digital.",
      url: "https://solbyt.tech/es/proyectos",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Thumbnail portafolio de proyectos Solbyt",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es/proyectos",
      languages: {
        en: "https://solbyt.tech/en/projects",
        es: "https://solbyt.tech/es/proyectos",
        fr: "https://solbyt.tech/fr/projets",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Nuestro Portafolio Digital",
      description:
        "Descubrí cómo ayudamos a empresas a crecer con soluciones web, automatización y UX/UI.",
      images: ["https://solbyt.tech/icon.png"],
    },
  },
  fr: {
    title: "Solbyt – Projets de Transformation Numérique",
    description:
      "Parcourez le portfolio de Solbyt : sites web, automatisation et UX/UI avec impact mesurable.",
    openGraph: {
      title: "Solbyt – Notre Portfolio Digital",
      description:
        "Découvrez les réalisations de Solbyt : créations sur mesure, automatisation et croissance digitale.",
      url: "https://solbyt.tech/fr/projets",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Miniature portfolio projets Solbyt",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr/projets",
      languages: {
        en: "https://solbyt.tech/en/projects",
        es: "https://solbyt.tech/es/proyectos",
        fr: "https://solbyt.tech/fr/projets",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Solbyt – Notre Portfolio Digital",
      description:
        "Découvrez comment nous accompagnons les entreprises avec web, automatisation & UX/UI.",
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

export default function Projects() {
  return <ProjectsPage />;
}
