import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, Shield, Zap, Server } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPublishedServices } from "@/lib/firebase/services-service";

export const metadata: Metadata = {
  title: "Nos Services - Dépannage IT à Distance | AlloSupport.ma",
  description:
    "Découvrez tous nos services de dépannage informatique à distance au Maroc. Intervention en 15 minutes. Satisfait ou Remboursé.",
  alternates: {
    canonical: "https://allosupport.ma/services",
  },
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Dépannage": Wrench,
  "Sécurité": Shield,
  "Optimisation": Zap,
  "Maintenance": Server,
};

export default async function ServicesPage() {
  const services = await getPublishedServices();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20 pt-40">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Services de Dépannage IT
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Intervention rapide en 15 minutes. Tous nos services sont garantis
              &quot;Satisfait ou Remboursé&quot;.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {services.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500">
                  Les services seront bientôt disponibles.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                  const IconComponent =
                    categoryIcons[service.keywords[0] || "Dépannage"] || Wrench;
                  
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img
                          src={service.imageUrl || `/images/services/${service.slug}-card.svg`}
                          alt={service.imageAlt || service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                            <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                          </div>
                          <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {service.title}
                          </h2>
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {service.heroSubtitle || service.metaDescription}
                        </p>
                        
                        {service.pricing && service.pricing.length > 0 && (
                          <p className="text-primary-600 font-semibold mb-4">
                            À partir de {service.pricing[0].price}
                          </p>
                        )}
                        
                        <span className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                          Voir les détails
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Besoin d&apos;aide maintenant ?
            </h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous sur WhatsApp pour une intervention en 15 minutes.
            </p>
            <a
              href="https://wa.me/212775237038?text=Bonjour%20AlloSupport%2C%20j'ai%20besoin%20d'aide."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contacter sur WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
