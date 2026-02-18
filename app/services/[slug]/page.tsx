import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/conversion/PricingTable";
import LocalProof from "@/components/conversion/LocalProof";
import { getServiceBySlug, getPublishedServices } from "@/lib/firebase/services-service";
import { generateTitle, generateDescription, generateCanonical, generateServiceSchema, generateWhatsAppURL } from "@/lib/seo";
import { MessageCircle } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

// WhatsApp messages by service slug
const whatsappMessages: Record<string, string> = {
  "depannage-pc-mac": "Bonjour AlloSupport, mon PC est lent. Pouvez-vous m'aider ?",
  "suppression-virus": "Bonjour AlloSupport, je veux nettoyer mon PC des virus et pubs.",
  "installation-config": "Bonjour AlloSupport, j'ai besoin d'aide pour installer un logiciel/périphérique.",
  "recuperation-donnees": "Bonjour AlloSupport, j'ai perdu des fichiers importants. Pouvez-vous les récupérer ?",
  "infogerance-pme": "Bonjour AlloSupport, je souhaite un devis pour l'infogérance de mon entreprise.",
  "cybersecurite": "Bonjour AlloSupport, je veux sécuriser mon entreprise contre les cyberattaques.",
  "reseau-wifi": "Bonjour AlloSupport, j'ai besoin d'un devis pour l'installation d'un réseau Wifi professionnel.",
  "email-cloud": "Bonjour AlloSupport, je veux passer à des emails professionnels pour mon entreprise.",
};

// Generate metadata for each service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service non trouvé | AlloSupport.ma",
    };
  }

  const title = service.title || generateTitle(service.heroTitle, "Intervention 15 min");
  const description = generateDescription(
    service.metaDescription || service.heroSubtitle,
    160
  );
  const canonical = generateCanonical(`services/${params.slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords: service.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: service.imageUrl ? [service.imageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: service.imageUrl ? [service.imageUrl] : [],
    },
  };
}

// Generate static params for all service pages
export async function generateStaticParams() {
  const services = await getPublishedServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Generate Service Schema
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.metaDescription,
    price: service.pricing?.[0]?.price,
  });

  // Breadcrumb JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://allosupport.ma/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://allosupport.ma/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.heroTitle || service.title,
        item: `https://allosupport.ma/services/${params.slug}`,
      },
    ],
  };

  // Get related services
  const allServices = await getPublishedServices();
  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const whatsappMessage = whatsappMessages[params.slug] || "Bonjour AlloSupport, je suis intéressé par ce service.";
  const whatsappUrl = generateWhatsAppURL("212775237038", whatsappMessage, service.title);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* HERO Full Width */}
      <header className="relative w-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {service.heroTitle || service.title}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {service.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              ⚡ Intervention 15 min
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              ✅ Satisfait ou Remboursé
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🔒 Paiement Sécurisé
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Contacter sur WhatsApp
          </a>
        </div>
      </header>

      {/* WRAPPER Full Width background */}
      <div className="w-full bg-gray-50 min-h-screen">
        {/* CONTAINER centered */}
        <main className="mx-auto max-w-6xl px-4 py-16">
          {service.pricing && service.pricing.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Tarifs Transparents
              </h2>
              <p className="text-gray-700 text-center mb-8">
                Pas de surprise. Prix fixes affichés.
              </p>
              <PricingTable
                services={service.pricing.map((p) => ({
                  name: p.name,
                  price: p.price,
                  description: p.description,
                  features: p.features,
                  cta: "Contacter sur WhatsApp",
                }))}
                highlighted={0}
              />
            </section>
          )}

          <section className="mt-8">
            <LocalProof />
          </section>

          <section className="mt-12">
            <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {service.imageUrl && (
                <div className="relative h-64 md:h-96 bg-gray-100">
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt || service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-a:text-emerald-600 prose-a:hover:text-emerald-700 prose-ul:text-gray-800 prose-li:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>
            </article>
          </section>

          <section className="mt-12 text-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à démarrer ?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contactez-nous sur WhatsApp pour une intervention rapide
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-full transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Réponse Immédiate sur WhatsApp
            </a>
          </section>

          {relatedServices.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Autres services qui pourraient vous intéresser
              </h2>
              <div className="grid md:grid-cols-3 gap-6 items-start">
                {relatedServices.map((related) => (
                  <a
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">
                      {related.heroTitle || related.title}
                    </h3>
                    <p className="text-sm text-gray-700 min-h-[60px]">
                      {related.heroSubtitle}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}
