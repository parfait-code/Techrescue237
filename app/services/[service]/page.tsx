// app/services/[service]/page.tsx - Page de détail d'un service
import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceById, getAllServices } from "@/data/services";

interface ServiceDetailProps {
  params: {
    service: string;
  };
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  const service = getServiceById(params.service);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage serviceId={params.service} service={service} />;
}

// Génération statique des routes (équivalent de getStaticPaths)
export async function generateStaticParams() {
  const services = getAllServices();

  return services.map((service) => ({
    service: service.id,
  }));
}

// Métadonnées dynamiques pour chaque service
export async function generateMetadata({ params }: ServiceDetailProps) {
  const service = getServiceById(params.service);

  if (!service) {
    return {
      title: "Service non trouvé",
    };
  }

  return {
    title: service.title,
    description:
      service.description ||
      `En savoir plus sur notre service ${service.title}`,
  };
}
