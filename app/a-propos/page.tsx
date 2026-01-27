import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, TrendingUp, Shield, Heart, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos de AlloSupport.ma | Qui Sommes-Nous",
  description:
    "Découvrez AlloSupport.ma : votre expert en dépannage informatique à distance au Maroc. Intervention rapide en 15 minutes, équipe certifiée, satisfaction garantie. Plus de 500 clients satisfaits.",
  keywords: [
    "à propos AlloSupport",
    "qui sommes-nous",
    "expert informatique Maroc",
    "équipe support IT",
    "histoire AlloSupport",
    "valeurs entreprise",
    "certifications informatique",
  ],
  openGraph: {
    title: "À Propos de AlloSupport.ma | Expert IT au Maroc",
    description:
      "Votre expert en dépannage informatique à distance au Maroc. Intervention rapide, équipe certifiée, satisfaction garantie.",
    type: "website",
    url: "https://allosupport.ma/a-propos",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos de AlloSupport.ma",
    description: "Expert en dépannage informatique à distance au Maroc.",
  },
  alternates: {
    canonical: "https://allosupport.ma/a-propos",
  },
};

const stats = [
  { label: "Clients Satisfaits", value: "500+", icon: Users },
  { label: "Interventions", value: "2000+", icon: CheckCircle },
  { label: "Taux de Satisfaction", value: "98%", icon: Award },
  { label: "Temps Moyen", value: "15 min", icon: Clock },
];

const values = [
  {
    icon: Shield,
    title: "Sécurité & Confidentialité",
    description:
      "Vos données sont protégées. Nous respectons strictement la confidentialité de toutes vos informations.",
  },
  {
    icon: Heart,
    title: "Satisfaction Client",
    description:
      "Votre satisfaction est notre priorité. Si nous ne résolvons pas votre problème, vous ne payez pas.",
  },
  {
    icon: Clock,
    title: "Rapidité",
    description:
      "Intervention en 15 minutes maximum. Nous comprenons l'urgence de vos problèmes informatiques.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "Nous utilisons les dernières technologies et méthodes pour résoudre vos problèmes efficacement.",
  },
];

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      description:
        "Expert en dépannage informatique à distance au Maroc. Intervention rapide en 15 minutes, satisfaction garantie.",
      url: "https://allosupport.ma",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212-6-XX-XX-XX-XX",
        contactType: "Support technique",
        areaServed: "MA",
        availableLanguage: "French",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À Propos de AlloSupport.ma
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre expert en dépannage informatique à distance au Maroc. Intervention rapide, équipe certifiée,
              satisfaction garantie.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <IconComponent className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Our Story */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-emerald-500" />
              Notre Histoire
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>AlloSupport.ma</strong> est né d'une simple observation : au Maroc, les particuliers
                et les PME rencontrent souvent des difficultés pour obtenir un support informatique rapide et
                fiable. Les délais d'intervention sont longs, les tarifs élevés, et la qualité du service
                inégale.
              </p>
              <p>
                Fondée en 2024, notre mission est de démocratiser l'accès au support informatique professionnel
                au Maroc. Nous avons développé un modèle unique de dépannage à distance qui permet d'intervenir
                en moins de 15 minutes, 24h/7j, partout au Maroc.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'avoir aidé plus de <strong>500 clients</strong> et réalisé
                plus de <strong>2000 interventions</strong> avec un taux de satisfaction de <strong>98%</strong>.
                Notre engagement : si nous ne résolvons pas votre problème, vous ne payez pas.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-emerald-600" />
                Notre Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rendre le support informatique professionnel accessible à tous les Marocains, particuliers et
                entreprises, en proposant des interventions rapides, efficaces et à des tarifs transparents.
                Nous croyons que chaque problème informatique mérite une solution rapide et que la technologie
                ne doit pas être un obstacle.
              </p>
            </section>

            <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Notre Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Devenir la référence du support informatique à distance au Maroc en combinant expertise
                technique, rapidité d'intervention et excellence du service client. Nous visons à être le
                partenaire de confiance de tous les Marocains pour leurs besoins informatiques, qu'ils soient
                particuliers ou professionnels.
              </p>
            </section>
          </div>

          {/* Values */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi Choisir AlloSupport.ma ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Intervention Ultra-Rapide",
                  description: "15 minutes maximum pour une intervention. Pas d'attente, pas de délai.",
                  icon: Clock,
                },
                {
                  title: "Satisfait ou Remboursé",
                  description:
                    "Si nous ne résolvons pas votre problème, vous êtes intégralement remboursé. Garantie sans risque.",
                  icon: Shield,
                },
                {
                  title: "Équipe Certifiée",
                  description:
                    "Nos techniciens sont certifiés et formés aux dernières technologies. Expertise garantie.",
                  icon: Award,
                },
                {
                  title: "Tarifs Transparents",
                  description:
                    "Pas de surprise. Nos tarifs sont clairs et affichés. Pas de frais cachés.",
                  icon: CheckCircle,
                },
                {
                  title: "Disponible 24/7",
                  description:
                    "Nous sommes disponibles tous les jours, à toute heure. Votre urgence est la nôtre.",
                  icon: Clock,
                },
                {
                  title: "Support Multilingue",
                  description:
                    "Nous parlons français, arabe et anglais. Communication facile garantie.",
                  icon: Users,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-emerald-50 rounded-xl p-6">
                    <IconComponent className="w-8 h-8 text-emerald-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Rejoignez Plus de 500 Clients Satisfaits</h2>
            <p className="text-xl mb-6 text-emerald-50">
              Besoin d'aide ? Contactez-nous maintenant et obtenez une intervention en 15 minutes !
            </p>
            <a
              href="https://wa.me/2126XXXXXXXX?text=Bonjour AlloSupport, j'ai besoin d'aide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contacter un technicien
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
