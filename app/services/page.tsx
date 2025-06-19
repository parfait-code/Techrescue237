// app/services/page.tsx - Page de liste des services
import React from "react";
import ServicesPage from "./ServicesPage";
import { getAllServices } from "@/data/services";

export default function Services() {
  const services = getAllServices();

  return <ServicesPage services={services} />;
}

// Métadonnées pour la page
export const metadata = {
  title: "Nos Services",
  description: "Découvrez tous nos services informatiques",
};

// Routes possibles dans votre application :
// /services -> Liste de tous les services
// /services/infrastructure-reseau -> Détail du service infrastructure réseau
// /services/migration-cloud -> Détail du service migration cloud
// /services/gestion-infrastructure -> Détail du service gestion infrastructure
// /services/developpement-applications -> Détail du service développement applications
