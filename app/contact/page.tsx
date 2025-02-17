import React from "react";
import ContactPage from "../components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - ADev | Impulsa tu Transformación Digital",
  description:
    "¿Listo para transformar tu negocio? En ADev ofrecemos soluciones digitales innovadoras y personalizadas. Ponte en contacto con nosotros para iniciar tu camino hacia el éxito digital.",
  keywords: [
    "contacto",
    "ADev",
    "transformación digital",
    "soluciones digitales",
    "innovación",
    "negocios",
  ],
  authors: [{ name: "ADev" }],
  metadataBase: new URL("https://adev.com"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto - ADev | Impulsa tu Transformación Digital",
    description:
      "¿Listo para transformar tu negocio? En ADev ofrecemos soluciones digitales innovadoras y personalizadas. Ponte en contacto con nosotros para iniciar tu camino hacia el éxito digital.",
    url: "https://adev.com/contacto",
    type: "website",
    images: [
      {
        url: "https://adev-ten.vercel.app/favicon.ico",
        alt: "Contacto en ADev - Soluciones Digitales Innovadoras",
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
