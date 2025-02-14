import HomePage from "./components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADev - Transformación Digital para tu Negocio",
  description:
    "Impulsamos la transformación digital de tu empresa con soluciones innovadoras en desarrollo web, diseño UX/UI y tecnología avanzada. Descubre cómo ADev puede ayudarte a crecer y liderar en el mundo digital.",
  keywords: [
    "transformación digital",
    "desarrollo web",
    "diseño UX/UI",
    "soluciones tecnológicas",
    "ADev",
  ],
  openGraph: {
    title: "ADev - Transformación Digital para tu Negocio",
    description:
      "Impulsamos la transformación digital de tu empresa con soluciones innovadoras en desarrollo web, diseño UX/UI y tecnología avanzada. Descubre cómo ADev puede ayudarte a crecer.",
    url: "https://adev.com",
    type: "website",
    images: [
      {
        url: "https://adev.com/og-image.jpg",
        alt: "ADev - Transformación Digital",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomePage />;
}
