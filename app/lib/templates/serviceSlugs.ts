type Locale = "es" | "en" | "fr";
type ServiceId =
  | "desarrollo-web"
  | "aplicaciones-medida"
  | "automatizacion"
  | "analisis-sistemas"
  | "asesoria-digital"
  | "desarrollo-software";

type ServiceSlugMap = Record<ServiceId, Record<Locale, string>>;

export const serviceSlugMap: ServiceSlugMap = {
  "desarrollo-web": {
    es: "desarrollo-web",
    en: "web-development",
    fr: "developpement-web"
  },
  "aplicaciones-medida": {
    es: "aplicaciones-medida",
    en: "custom-applications",
    fr: "applications-sur-mesure"
  },
  "automatizacion": {
    es: "automatizacion",
    en: "process-automation",
    fr: "automatisation-processus"
  },
  "analisis-sistemas": {
    es: "analisis-sistemas",
    en: "systems-analysis",
    fr: "analyse-systemes"
  },
  "asesoria-digital": {
    es: "asesoria-digital",
    en: "digital-advisory",
    fr: "conseil-digitalisation"
  },
  "desarrollo-software": {
    es: "desarrollo-software",
    en: "software-development",
    fr: "developpement-logiciel"
  }
};

export function getServiceIdBySlug(slug: string, locale: Locale): ServiceId | null {
  for (const [id, translations] of Object.entries(serviceSlugMap)) {
    if (translations[locale] === slug) {
      return id as ServiceId;
    }
  }
  return null;
}

export function getSlugByServiceId(serviceId: ServiceId, locale: Locale): string | null {
  const translations = serviceSlugMap[serviceId];
  return translations ? translations[locale] : null;
}
