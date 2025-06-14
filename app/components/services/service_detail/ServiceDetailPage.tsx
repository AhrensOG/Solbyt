import React from "react";
import { getServiceIdBySlug } from "@/app/lib/templates/serviceSlugs";
import { notFound } from "next/navigation";
import WebDevelopment from "./all_services/web_development/WebDevelopment";
import { Locale } from "@/i18n/navigation";

type Props = {
  params: {
    locale: string;
    service_slug: string;
  };
};

const ServiceDetailPage = async ({ params }: Props) => {
  const { locale, service_slug } = await params;
  const isValidLocale = (locale: string): locale is "es" | "en" | "fr" =>
    ["es", "en", "fr"].includes(locale);

  const serviceId = getServiceIdBySlug(service_slug, locale as Locale);

  if (!serviceId || !isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      {serviceId === "desarrollo-web" && <WebDevelopment />}
      {/* Luego agregás aquí los otros casos con sus respectivos componentes */}
    </>
  );
};

export default ServiceDetailPage;
