import ServiceDetailPage from "@/app/components/services/service_detail/ServiceDetailPage";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceIdBySlug, serviceSlugMap } from "@/app/lib/serviceSlugs";
import { getServiceData } from "@/app/lib/services";

export async function generateStaticParams() {
  const paths: { locale: string; service_slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const serviceId of Object.keys(
      serviceSlugMap
    ) as (keyof typeof serviceSlugMap)[]) {
      const slug = serviceSlugMap[serviceId][locale as "es" | "en" | "fr"];
      paths.push({ locale, service_slug: slug });
    }
  }

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service_slug: string }>;
}): Promise<Metadata> {
  const { locale, service_slug } = await params;

  const serviceId = getServiceIdBySlug(
    service_slug,
    locale as "es" | "en" | "fr"
  );
  if (!serviceId)
    return { title: "Not Found", description: "Service not found." };

  const service = await getServiceData(serviceId, locale as "es" | "en" | "fr");
  if (!service)
    return { title: "Not Found", description: "Service not found." };

  const basePath = locale === "es" ? "servicios" : "services";
  const url = `https://solbyt.tech/${locale}/${basePath}/${service_slug}`;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    const altSlug = serviceSlugMap[serviceId][loc as "es" | "en" | "fr"];
    const altBase = loc === "es" ? "servicios" : "services";
    languages[loc] = `https://solbyt.tech/${loc}/${altBase}/${altSlug}`;
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url,
      type: "website",
      images: [
        {
          url: service.ogImage,
          alt: service.name,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: url,
      languages,
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.ogImage],
    },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ locale: "en" | "es" | "fr"; service_slug: string }>;
}) {
  const { locale, service_slug } = await params;

  const serviceId = getServiceIdBySlug(service_slug, locale);
  if (!serviceId) return notFound();

  const data = await getServiceData(serviceId, locale);
  if (!data) return notFound();

  return <ServiceDetailPage params={{ locale, service_slug }} />;
}
