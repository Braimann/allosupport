"use client";

import { Check, Zap, Shield, Briefcase, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { generateWhatsAppURL } from "@/lib/seo";

const pricingPlans = [
  {
    id: "installation",
    name: "Installation Logiciel",
    price: "150",
    currency: "DH",
    description: "Installation et configuration de logiciels",
    features: [
      "Installation Windows/Mac",
      "Configuration logiciels",
      "Mise à jour système",
      "Support 15 min",
    ],
    icon: Zap,
    color: "emerald",
    popular: false,
  },
  {
    id: "nettoyage",
    name: "Nettoyage Virus & Lenteur",
    price: "250",
    currency: "DH",
    description: "Nettoyage complet + Optimisation PC",
    features: [
      "Suppression virus/malware",
      "Nettoyage disque dur",
      "Optimisation Windows",
      "Accélération PC",
      "Support 30 min",
    ],
    icon: Shield,
    color: "emerald",
    popular: true, // Best Seller
  },
  {
    id: "maintenance",
    name: "Maintenance PME",
    price: "499",
    currency: "DH/mois",
    description: "Maintenance complète parc informatique",
    features: [
      "Support illimité",
      "Maintenance préventive",
      "Sauvegarde cloud",
      "Sécurité renforcée",
      "Support dédié",
    ],
    icon: Briefcase,
    color: "blue",
    popular: false,
  },
];

export default function Pricing() {
  const handleWhatsAppClick = (planName: string, price: string) => {
    const message = `Bonjour AlloSupport, je suis intéressé par le pack "${planName}" (${price}). Pouvez-vous me donner plus d'informations ?`;
    const url = generateWhatsAppURL("2126XXXXXXXX", message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Tarifs Transparents
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Offres de{" "}
              <span className="text-emerald-500">Dépannage IT</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tarifs clairs, pas de surprise. Choisissez l'offre qui correspond à vos besoins.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                  isPopular
                    ? "border-emerald-500 scale-105 shadow-emerald-500/20"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Best Seller
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                        isPopular
                          ? "bg-emerald-500"
                          : plan.color === "blue"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">{plan.currency}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(plan.name, `${plan.price} ${plan.currency}`)}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      isPopular
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:scale-105"
                        : "bg-gray-100 hover:bg-emerald-50 text-gray-900 border-2 border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    {isPopular ? "Choisir ce pack" : "Demander un devis"}
                  </button>
                </div>

                {/* Guarantee Badge */}
                <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-emerald-600">
                      ✓ Satisfait ou Remboursé
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Besoin d'une solution personnalisée ?
          </p>
          <a
            href={generateWhatsAppURL(
              "2126XXXXXXXX",
              "Bonjour AlloSupport, j'aimerais discuter d'une solution personnalisée pour mes besoins informatiques."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Parler à un expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
