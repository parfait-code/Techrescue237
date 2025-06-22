import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Améliore les performances de chargement des polices
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Titre et description optimisés
  title: {
    template: "%s | TechRescue247 - Professional IT Solutions",
    default: "TechRescue247 - Professional IT Solutions & Support Services",
  },
  description:
    "TechRescue247 provides expert IT solutions including local networks & security, infrastructure management, application development, and 24/7 monitoring & support services.",

  // Configuration viewport intégrée dans metadata pour Next.js 13
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // Mots-clés stratégiques
  keywords: [
    "IT support services",
    "network security solutions",
    "infrastructure management",
    "application development",
    "system monitoring",
    "IT consulting",
    "managed IT services",
    "TechRescue247",
    "business technology solutions",
    "cyber security services",
  ],

  // Informations sur l'auteur/entreprise
  authors: [{ name: "TechRescue247", url: "https://techrescue247.com" }],
  creator: "TechRescue247",
  publisher: "TechRescue247",

  // Configuration des robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techrescue247.com",
    siteName: "TechRescue247",
    title: "TechRescue247 - Professional IT Solutions & Support Services",
    description:
      "Expert IT solutions including network security, infrastructure management, application development, and 24/7 monitoring support.",
    images: [
      {
        url: "https://techrescue247.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechRescue247 - Professional IT Solutions",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Cards
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@techrescue247", // Remplacez par votre compte Twitter
  //   creator: "@techrescue247",
  //   title: "TechRescue247 - Professional IT Solutions",
  //   description:
  //     "Expert IT support, security, and infrastructure management services.",
  //   images: ["https://techrescue247.com/twitter-image.jpg"], // Remplacez par votre vraie image
  // },

  // Liens canoniques et alternates
  alternates: {
    canonical: "https://techrescue247.com",
    languages: {
      "en-US": "https://techrescue247.com",
      // Ajoutez d'autres langues si nécessaire
    },
  },

  // Informations de contact et localisation
  other: {
    "contact:phone_number": "+237 678 830 036",
    "contact:email": "info@techrescue247.com",
    "business:contact_data:country_name": "United States",
    "business:contact_data:region": "Cameroon",
    "business:contact_data:locality": "Yaounde",
  },

  // Métadonnées de vérification (à ajouter quand vous les obtenez)
  // verification: {
  //   google: "your-google-site-verification-code", // À remplacer
  //   yandex: "your-yandex-verification-code", // À remplacer si nécessaire
  //   // other: {
  //   //   'bing-site-verification': 'your-bing-verification-code',
  //   //   'facebook-domain-verification': 'your-facebook-verification-code',
  //   // }
  // },

  // Informations sur la catégorie du site
  category: "Technology",

  // Configuration des icônes
  icons: {
    icon: [
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.png",
        // url: "/safari-pinned-tab.svg",
        color: "#2563eb", // Couleur de votre marque
      },
    ],
  },

  // Manifeste pour PWA (optionnel)
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* DNS prefetch pour les domaines externes utilisés */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data JSON-LD pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechRescue247",
              description: "Professional IT solutions and support services",
              url: "https://techrescue247.com",
              logo: "https://techrescue247.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+237 678 830 036",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressRegion: "Cameroon",
                addressLocality: "Yaounde",
              },
              sameAs: [
                "https://linkedin.com/company/techrescue247",
                // "https://twitter.com/techrescue247",
                "https://facebook.com/techrescue247",
              ],
              offers: {
                "@type": "Offer",
                description: "IT Support Services",
                serviceType: [
                  "Local Networks & Security",
                  "Infrastructure Management",
                  "Application Development",
                  "Monitoring & Support",
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main role="main" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
