import HomePage from "./components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solbyt - Transformación Digital para tu Negocio",
  description:
    "Solbyt impulsa la transformación digital de tu negocio a través de soluciones integrales en desarrollo web, diseño UX/UI y tecnología avanzada. Con un enfoque en innovación y estrategias personalizadas, potenciamos tu crecimiento digital para que lideres en el mercado.",
  keywords: [
    "transformación digital",
    "desarrollo web",
    "diseño UX/UI",
    "soluciones tecnológicas",
    "innovación",
    "crecimiento digital",
    "Solbyt",
  ],
  metadataBase: new URL("https://solbyt.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solbyt - Transformación Digital para tu Negocio",
    description:
      "Descubre cómo Solbyt impulsa la transformación digital con soluciones en desarrollo de software, diseño UX/UI y tecnología avanzada, impulsando la innovación y el crecimiento de tu empresa.",
    url: "https://solbyt.com",
    type: "website",
    images: [
      {
        url: "https://solbyt-ten.vercel.app/favicon.ico",
        alt: "Solbyt - Transformación Digital para tu Negocio",
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
