import HomePage from "./components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADev - Transformación Digital para tu Negocio",
  description:
    "ADev impulsa la transformación digital de tu negocio a través de soluciones integrales en desarrollo web, diseño UX/UI y tecnología avanzada. Con un enfoque en innovación y estrategias personalizadas, potenciamos tu crecimiento digital para que lideres en el mercado.",
  keywords: [
    "transformación digital",
    "desarrollo web",
    "diseño UX/UI",
    "soluciones tecnológicas",
    "innovación",
    "crecimiento digital",
    "ADev",
  ],
  metadataBase: new URL("https://adev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ADev - Transformación Digital para tu Negocio",
    description:
      "Descubre cómo ADev impulsa la transformación digital con soluciones en desarrollo de software, diseño UX/UI y tecnología avanzada, impulsando la innovación y el crecimiento de tu empresa.",
    url: "https://adev.com",
    type: "website",
    images: [
      {
        url: "https://adev-ten.vercel.app/favicon.ico",
        alt: "ADev - Transformación Digital para tu Negocio",
        width: 256,
        height: 256,
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
