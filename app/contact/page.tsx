import React from "react";
import ContactPage from "../components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - ADev | Impulsa tu Transformación Digital",
  description:
    "Contáctanos en ADev para transformar tu negocio con soluciones digitales innovadoras. Toma la iniciativa y empieza hoy tu transformación digital.",
  openGraph: {
    title: "Contacto - ADev | Impulsa tu Transformación Digital",
    description:
      "Contáctanos en ADev para transformar tu negocio con soluciones digitales innovadoras. Toma la iniciativa y empieza hoy tu transformación digital.",
    url: "https://adev.com/contacto",
    type: "website",
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
