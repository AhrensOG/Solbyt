import React from "react";
import ContactPage from "../components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Solbyt | Impulsa tu Transformación Digital",
  description:
    "¿Listo para transformar tu negocio? En Solbyt ofrecemos soluciones digitales innovadoras y personalizadas. Ponte en contacto con nosotros para iniciar tu camino hacia el éxito digital.",
  keywords: [
    "contacto",
    "Solbyt",
    "transformación digital",
    "soluciones digitales",
    "innovación",
    "negocios",
  ],
  authors: [{ name: "Solbyt" }],
  metadataBase: new URL("https://solbyt.com"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto - Solbyt | Impulsa tu Transformación Digital",
    description:
      "¿Listo para transformar tu negocio? En Solbyt ofrecemos soluciones digitales innovadoras y personalizadas. Ponte en contacto con nosotros para iniciar tu camino hacia el éxito digital.",
    url: "https://solbyt.com/contacto",
    type: "website",
    images: [
      {
        url: "https://solbyt-ten.vercel.app/favicon.ico",
        alt: "Contacto en Solbyt - Soluciones Digitales Innovadoras",
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

const Contact: React.FC = () => {
  return <ContactPage />;
};

export default Contact;
