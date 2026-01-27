"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Key, Gauge, HardDriveIcon, ArrowRight, QrCode, FileText } from "lucide-react";
import { motion } from "framer-motion";

// Metadata moved to layout.tsx

const tools = [
  {
    name: "Éditeur HTML",
    description: "Éditez votre code HTML, CSS et JavaScript et voyez le résultat en temps réel",
    href: "/tools/html-editor",
    icon: Code,
    color: "emerald",
  },
  {
    name: "Générateur de Mots de Passe",
    description: "Créez des mots de passe sécurisés et uniques en quelques clics",
    href: "/tools/password-generator",
    icon: Key,
    color: "blue",
  },
  {
    name: "Test de Vitesse Internet",
    description: "Mesurez la vitesse de votre connexion internet (download, upload, ping)",
    href: "/tools/speed-test",
    icon: Gauge,
    color: "purple",
  },
  {
    name: "Convertisseur d'Unités",
    description: "Convertissez facilement entre Bytes, KB, MB, GB, TB et PB",
    href: "/tools/unit-converter",
    icon: HardDriveIcon,
    color: "orange",
  },
  {
    name: "Générateur QR Code",
    description: "Créez des QR codes pour URL, Wi-Fi, téléphone, email et plus",
    href: "/tools/qr-generator",
    icon: QrCode,
    color: "emerald",
  },
  {
    name: "Générateur Devis/Facture",
    description: "Créez des devis et factures professionnels en PDF gratuitement",
    href: "/tools/invoice-generator",
    icon: FileText,
    color: "blue",
  },
];

const colorClasses = {
  emerald: "from-emerald-500 to-emerald-600",
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg"
            >
              <Code className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Outils Gratuits en Ligne
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des outils pratiques et gratuits pour vous aider dans vos tâches informatiques quotidiennes
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tools.map((tool, idx) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={tool.href}
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${colorClasses[tool.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {tool.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{tool.description}</p>
                          <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                            <span>Utiliser l'outil</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* SEO Content Section */}
          <div className="mt-12 space-y-6">
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Outils Gratuits pour Développeurs et Utilisateurs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AlloSupport.ma met à votre disposition une collection d'outils gratuits en ligne pour vous
                aider dans vos tâches informatiques quotidiennes. Que vous soyez développeur web, administrateur
                système, ou simple utilisateur, nos outils sont conçus pour être simples, rapides et efficaces.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tous nos outils sont <strong>100% gratuits</strong>, ne nécessitent aucune inscription, et
                fonctionnent directement dans votre navigateur. Aucun téléchargement ni installation n'est
                requis. Utilisez-les autant que vous le souhaitez, quand vous le souhaitez.
              </p>
            </section>

            {/* Tools Description */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Outils Disponibles
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🔧 Éditeur HTML en Ligne
                  </h3>
                  <p className="text-gray-700">
                    Créez, modifiez et testez du code HTML, CSS et JavaScript en temps réel. Parfait pour les
                    développeurs web qui souhaitent prototyper rapidement ou tester du code sans installer
                    d'environnement de développement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🔐 Générateur de Mots de Passe Sécurisé
                  </h3>
                  <p className="text-gray-700">
                    Créez des mots de passe forts et sécurisés en quelques clics. Personnalisez la longueur
                    et les types de caractères, et obtenez un indicateur de force pour évaluer la sécurité de
                    votre mot de passe.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ⚡ Test de Vitesse Internet
                  </h3>
                  <p className="text-gray-700">
                    Mesurez les performances de votre connexion internet : débit de téléchargement, débit de
                    téléversement et latence (ping). Identifiez les problèmes de connexion et vérifiez si vous
                    obtenez la vitesse promise par votre fournisseur.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    💾 Convertisseur d'Unités Informatiques
                  </h3>
                  <p className="text-gray-700">
                    Convertissez facilement entre Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes et
                    Petabytes. Comprenez la capacité réelle de vos disques durs et périphériques de stockage.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Use Our Tools */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pourquoi Utiliser Nos Outils ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ 100% Gratuit</h3>
                  <p className="text-gray-700 text-sm">
                    Tous nos outils sont entièrement gratuits. Aucun abonnement, aucune limite d'utilisation.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Aucune Inscription</h3>
                  <p className="text-gray-700 text-sm">
                    Utilisez nos outils immédiatement sans créer de compte ni fournir d'informations
                    personnelles.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Fonctionne en Ligne</h3>
                  <p className="text-gray-700 text-sm">
                    Tous nos outils fonctionnent directement dans votre navigateur. Aucun téléchargement
                    requis.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Sécurisé</h3>
                  <p className="text-gray-700 text-sm">
                    Vos données restent dans votre navigateur. Aucune information n'est envoyée à nos serveurs.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'aide avec vos outils ?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Nos techniciens sont disponibles 24/7 pour vous aider avec tous vos besoins informatiques.
                Contactez-nous via WhatsApp pour une intervention rapide !
              </p>
              <a
                href="https://wa.me/2126XXXXXXXX?text=Bonjour AlloSupport, j'ai besoin d'aide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Contacter un technicien
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
