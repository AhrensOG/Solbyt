import React from "react";
import { getServiceIdBySlug } from "@/app/lib/serviceSlugs";
import { notFound } from "next/navigation";
import WebDevelopment from "./all_services/web_development/WebDevelopment";
import { Locale } from "@/i18n/navigation";
import CustomApplications from "./all_services/custom_applications/CustomApplications";
import ProcessAutomation from "./all_services/process_automation/ProcessAutomation";
import SystemAnalysis from "./all_services/system_analysis/SystemAnalisis";
import DigitalizationConsulting from "./all_services/digitalization_consulting/DigitalizationConsulting";
import SoftwareDevelopment from "./all_services/software_development/SoftwareDevelopment";

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
      {serviceId === "aplicaciones-a-medida" && <CustomApplications />}
      {serviceId === "automatizacion" && <ProcessAutomation />}
      {serviceId === "analisis-de-sistemas" && <SystemAnalysis />}
      {serviceId === "asesoria-digital" && <DigitalizationConsulting />}
      {serviceId === "desarrollo-software" && <SoftwareDevelopment />}
      {/* Luego agregás aquí los otros casos con sus respectivos componentes */}
    </>
  );
};

export default ServiceDetailPage;
