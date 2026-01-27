"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Metadata } from "next";

// Note: Metadata must be exported from a server component, so we'll create a layout
const faqCategories = [
  {
    id: "particuliers",
    title: "Particuliers",
    icon: "👤",
    questions: [
      {
        question: "Combien de temps prend une intervention ?",
        answer:
          "La plupart de nos interventions sont résolues en moins de 15 minutes. Pour les problèmes plus complexes, nous vous donnons un délai estimé dès le début de l'intervention. Si le problème nécessite plus de temps, nous vous en informons immédiatement.",
      },
      {
        question: "Comment fonctionne le dépannage à distance ?",
        answer:
          "Nous utilisons un logiciel de prise de contrôle à distance sécurisé. Vous recevez un lien par WhatsApp, vous cliquez dessus, et notre technicien peut voir votre écran (avec votre autorisation) pour diagnostiquer et résoudre le problème. Vous gardez le contrôle à tout moment et pouvez interrompre la session quand vous le souhaitez.",
      },
      {
        question: "Quels types de problèmes pouvez-vous résoudre ?",
        answer:
          "Nous résolvons tous les problèmes informatiques courants : PC lent, virus et malwares, bugs Windows/Mac, installation de logiciels, configuration d'imprimantes, problèmes de connexion internet, récupération de données, optimisation système, et bien plus encore.",
      },
      {
        question: "Quel est le prix d'une intervention ?",
        answer:
          "Nos tarifs varient selon le type d'intervention : Dépannage simple (150-250 MAD), Suppression de virus (290 MAD), Installation/Configuration (150 MAD par logiciel), Récupération de données (350 MAD si réussie). Tous nos tarifs sont affichés sur notre site. Pas de surprise, pas de frais cachés.",
      },
      {
        question: "Que se passe-t-il si vous ne résolvez pas mon problème ?",
        answer:
          "Si nous ne parvenons pas à résoudre votre problème, vous êtes intégralement remboursé. C'est notre garantie 'Satisfait ou Remboursé'. Nous croyons en la qualité de notre service et nous assumons nos résultats.",
      },
    ],
  },
  {
    id: "entreprises",
    title: "Entreprises",
    icon: "🏢",
    questions: [
      {
        question: "Proposez-vous des contrats de maintenance pour les PME ?",
        answer:
          "Oui, nous proposons des forfaits d'infogérance PME à partir de 1 500 MAD HT/mois. Ces forfaits incluent la maintenance préventive, le support technique, les mises à jour de sécurité, et un nombre d'interventions inclus. Contactez-nous pour un devis personnalisé selon vos besoins.",
      },
      {
        question: "Pouvez-vous gérer notre infrastructure informatique complète ?",
        answer:
          "Oui, nous proposons des services d'infogérance complète pour les PME : gestion des serveurs, réseau, sécurité, sauvegardes, emails professionnels, et support utilisateurs. Nous adaptons nos services à la taille et aux besoins de votre entreprise.",
      },
      {
        question: "Quels sont vos délais d'intervention pour les entreprises ?",
        answer:
          "Pour les clients avec contrat d'infogérance, nous garantissons une intervention en moins de 2 heures pour les urgences critiques. Pour les problèmes non urgents, nous intervenons dans les 4 heures ouvrables. Nos clients prioritaires bénéficient d'un support 24/7.",
      },
      {
        question: "Proposez-vous des audits de sécurité ?",
        answer:
          "Oui, nous proposons des audits de cybersécurité pour les PME. Nous analysons votre infrastructure, identifions les vulnérabilités, et vous proposons un plan d'action pour sécuriser vos données. Contactez-nous pour un audit flash gratuit de 15 minutes.",
      },
    ],
  },
  {
    id: "technique",
    title: "Technique",
    icon: "🔧",
    questions: [
      {
        question: "Quels systèmes d'exploitation supportez-vous ?",
        answer:
          "Nous supportons Windows (toutes versions), macOS, et Linux. Nos techniciens sont certifiés sur ces plateformes et peuvent intervenir sur n'importe quel système d'exploitation.",
      },
      {
        question: "Avez-vous accès à mes données personnelles ?",
        answer:
          "Non, nous n'avons jamais accès à vos données personnelles. Lors d'une intervention à distance, nous voyons uniquement votre écran pour diagnostiquer le problème. Nous ne pouvons pas accéder à vos fichiers, mots de passe, ou données sensibles sans votre autorisation explicite. Toutes nos sessions sont sécurisées et chiffrées.",
      },
      {
        question: "Que faire si mon ordinateur ne démarre plus ?",
        answer:
          "Si votre ordinateur ne démarre plus, contactez-nous immédiatement. Nous pouvons vous guider par téléphone ou WhatsApp pour tenter un démarrage en mode sans échec. Si le problème persiste, nous pouvons organiser une intervention sur site ou vous aider à récupérer vos données.",
      },
      {
        question: "Pouvez-vous récupérer mes données perdues ?",
        answer:
          "Oui, nous proposons un service de récupération de données. Nous facturons 350 MAD uniquement si la récupération est réussie. Nous pouvons récupérer des fichiers supprimés, des partitions formatées, ou des données sur des disques durs endommagés. Contactez-nous rapidement après la perte de données pour maximiser les chances de récupération.",
      },
    ],
  },
  {
    id: "paiement",
    title: "Paiement & Tarifs",
    icon: "💳",
    questions: [
      {
        question: "Quels modes de paiement acceptez-vous ?",
        answer:
          "Nous acceptons les paiements par virement bancaire, mobile money (Orange Money, Inwi Money), et espèces (pour les interventions sur site). Le paiement s'effectue après la résolution du problème, sauf pour les contrats d'infogérance qui sont facturés mensuellement.",
      },
      {
        question: "Y a-t-il des frais cachés ?",
        answer:
          "Non, absolument aucun frais caché. Tous nos tarifs sont affichés clairement sur notre site web. Le prix que nous vous annonçons est le prix que vous payez. Pas de surprise, pas de frais supplémentaires.",
      },
      {
        question: "Proposez-vous des devis gratuits ?",
        answer:
          "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous par WhatsApp ou via notre formulaire de contact, décrivez votre problème, et nous vous enverrons un devis détaillé sous 2 heures.",
      },
      {
        question: "Puis-je payer après l'intervention ?",
        answer:
          "Oui, le paiement s'effectue toujours après la résolution du problème. Nous ne demandons jamais de paiement à l'avance. Vous payez uniquement si vous êtes satisfait du résultat.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  // Filter FAQs based on search
  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg"
            >
              <HelpCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Questions Fréquentes (FAQ)
            </h1>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions sur nos services
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans la FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-600">
                {filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} résultat(s) trouvé(s)
              </p>
            )}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === category.id ? null : category.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category.questions.length}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 space-y-4">
                        {category.questions.map((faq, idx) => (
                          <div
                            key={idx}
                            className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                          >
                            <button
                              onClick={() =>
                                setOpenQuestion(
                                  openQuestion === `${category.id}-${idx}`
                                    ? null
                                    : `${category.id}-${idx}`
                                )
                              }
                              className="w-full text-left flex items-start justify-between gap-4 hover:text-emerald-600 transition-colors"
                            >
                              <h3 className="font-semibold text-gray-900 flex-1">{faq.question}</h3>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                                  openQuestion === `${category.id}-${idx}` ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {openQuestion === `${category.id}-${idx}` && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <p className="mt-3 text-gray-700 leading-relaxed pl-0">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && filteredCategories.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <p className="text-gray-600 mb-4">Aucun résultat trouvé pour "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Effacer la recherche
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-gray-700 mb-6">
              Notre équipe est disponible 24/7 pour répondre à toutes vos questions
            </p>
            <a
              href="https://wa.me/2126XXXXXXXX?text=Bonjour AlloSupport, j'ai une question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Contacter le support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
