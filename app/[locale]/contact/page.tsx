import ContactPage from "@/app/components/contact/ContactPage";
import type { Metadata } from "next";

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Contact Solbyt – Let's Talk Digital Transformation",
    description:
      "Have questions about your next digital project? Contact Solbyt’s expert team for tailored web, automation & UX/UI advice.",
    openGraph: {
      title: "Contact Solbyt – Let's Talk Digital Transformation",
      description:
        "Reach out to start a conversation about your digital goals with Solbyt’s dedicated experts.",
      url: "https://solbyt.tech/en/contact",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Contact Solbyt – Start your project",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/en/contact",
      languages: {
        en: "https://solbyt.tech/en/contact",
        es: "https://solbyt.tech/es/contacto",
        fr: "https://solbyt.tech/fr/contact",
      },
    },
  },
  es: {
    title: "Contactá a Solbyt – Hablemos de Transformación Digital",
    description:
      "¿Tenés dudas sobre tu próximo proyecto digital? Contactate con el equipo de Solbyt para asesoramiento en web, automatización y UX/UI.",
    openGraph: {
      title: "Contactá a Solbyt – Hablemos de Transformación Digital",
      description:
        "Iniciemos una conversación sobre tus objetivos digitales con los expertos de Solbyt.",
      url: "https://solbyt.tech/es/contacto",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Contactá a Solbyt – Empezá tu proyecto",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/es/contacto",
      languages: {
        en: "https://solbyt.tech/en/contact",
        es: "https://solbyt.tech/es/contacto",
        fr: "https://solbyt.tech/fr/contact",
      },
    },
  },
  fr: {
    title: "Contactez Solbyt – Parlons Transformation Numérique",
    description:
      "Une question sur votre projet digital ? Contactez l’équipe d’experts de Solbyt pour des conseils web, automatisation & UX/UI sur mesure.",
    openGraph: {
      title: "Contactez Solbyt – Parlons Transformation Numérique",
      description:
        "Prenons rendez-vous pour échanger sur vos objectifs digitaux avec les experts de Solbyt.",
      url: "https://solbyt.tech/fr/contact",
      type: "website",
      images: [
        {
          url: "https://solbyt.tech/icon.png",
          alt: "Contactez Solbyt – Lancez votre projet",
        },
      ],
    },
    alternates: {
      canonical: "https://solbyt.tech/fr/contact",
      languages: {
        en: "https://solbyt.tech/en/contact",
        es: "https://solbyt.tech/es/contacto",
        fr: "https://solbyt.tech/fr/contact",
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

export default function Contact() {
  return <ContactPage />;
}
