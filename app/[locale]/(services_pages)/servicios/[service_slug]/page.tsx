import ServiceDetailPage from "@/app/components/services/service_detail/ServiceDetailPage";
import { Locale } from "@/i18n/navigation";
import React from "react";

const ServiceDetail = async ({
  params,
}: {
  params: Promise<{ locale: Locale; service_slug: string }>;
}) => {
  const resolvedParams = await params;

  return <ServiceDetailPage params={resolvedParams} />;
};

export default ServiceDetail;
