import Link from "next/link";
import { ArrowRight, Wrench, Shield, Zap } from "lucide-react";
import { ServicePage } from "@/lib/firebase/services-service";

interface RelatedPillarsProps {
  services: ServicePage[];
  currentKeywords?: string[];
  maxItems?: number;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Dépannage": Wrench,
  "Sécurité": Shield,
  "Optimisation": Zap,
};

export default function RelatedPillars({
  services,
  currentKeywords = [],
  maxItems = 3,
}: RelatedPillarsProps) {
  if (services.length === 0) return null;

  const displayServices = services.slice(0, maxItems);

  return (
    <section className="my-12 py-8 bg-gray-50 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Services recommandés pour vous
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service) => {
            const IconComponent = categoryIcons[service.keywords[0] || "Dépannage"] || Wrench;
            
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {service.heroSubtitle || service.metaDescription}
                    </p>
                    
                    {/* Pricing hint */}
                    {service.pricing && service.pricing.length > 0 && (
                      <p className="text-primary-600 font-semibold text-sm mb-3">
                        À partir de {service.pricing[0].price}
                      </p>
                    )}
                    
                    <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
