import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleBadge from "@/components/GoogleBadge";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import VideoEmbed from "@/components/VideoEmbed";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dépannage Informatique Maroc | Réparation PC 250 DH | AlloSupport",
  description:
    "Dépannage informatique à distance au Maroc dès 250 DH. PC lent, virus, formatage, maintenance PME. Technicien en 15 min via WhatsApp. Paiement après résultat.",
  alternates: {
    canonical: "https://allosupport.ma",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://allosupport.ma",
    siteName: "AlloSupport.ma",
    title: "Dépannage Informatique Maroc | Réparation PC 250 DH | AlloSupport",
    description:
      "Dépannage informatique à distance au Maroc dès 250 DH. Technicien en 15 min. Paiement après résultat.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique Maroc | Réparation PC 250 DH",
    description:
      "Réparation PC à distance au Maroc dès 250 DH. Technicien en 15 min. Paiement après résultat.",
  },
};

const ClientPortal = dynamic(() => import("@/components/ClientPortal"), { ssr: false });
const Locations = dynamic(() => import("@/components/Locations"));
const Blog = dynamic(() => import("@/components/Blog"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"));

const LoadingPlaceholder = () => (
  <div className="min-h-[400px] bg-gray-50 animate-pulse" />
);

const faqItems = [
  {
    q: "Combien coûte un dépannage informatique au Maroc ?",
    a: "Le dépannage informatique à distance commence à 150 DH pour un diagnostic rapide, 250 DH pour une réparation complète (virus, PC lent, formatage). Les forfaits PME démarrent à 499 DH/mois.",
  },
  {
    q: "Comment fonctionne la réparation PC à distance ?",
    a: "Vous nous contactez via WhatsApp. En 15 minutes, un technicien se connecte à votre PC via un outil sécurisé (TeamViewer/AnyDesk). Vous voyez tout sur votre écran. Vous payez uniquement si le problème est résolu.",
  },
  {
    q: "Intervenez-vous partout au Maroc ?",
    a: "Oui. Notre service de dépannage informatique à distance couvre tout le Maroc : Casablanca, Rabat, Marrakech, Fès, Agadir et toutes les autres villes. Aucun déplacement nécessaire.",
  },
  {
    q: "Que faire si mon PC est très lent ?",
    a: "Un PC lent peut être causé par des virus, trop de programmes au démarrage, un disque dur plein ou Windows corrompu. Notre technicien diagnostique la cause exacte et optimise votre PC à distance en 15-30 min.",
  },
  {
    q: "Proposez-vous un support informatique pour les entreprises ?",
    a: "Oui. Nous proposons l'infogérance PME Maroc : maintenance préventive, cybersécurité, sauvegardes, support utilisateurs 24/7. Forfaits à partir de 999 DH/mois selon le nombre de postes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
]);

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Dépannage Informatique à Distance Maroc – AlloSupport.ma",
  description:
    "Réparation PC à distance en 15 min. Virus, formatage, lenteur. Paiement après résultat. Dès 250 DH. Tout le Maroc.",
  thumbnailUrl: "https://i.ytimg.com/vi/2RPhvTiQkiI/maxresdefault.jpg",
  uploadDate: "2026-02-18T12:00:00+00:00",
  duration: "PT30S",
  embedUrl: "https://www.youtube-nocookie.com/embed/2RPhvTiQkiI",
  contentUrl: "https://youtube.com/shorts/2RPhvTiQkiI",
  publisher: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    logo: {
      "@type": "ImageObject",
      url: "https://allosupport.ma/logo.png",
    },
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Above the fold */}
      <Header />
      <Hero />

      {/* Video proof — visible immediately, autoplay muted */}
      <section className="py-10 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <VideoEmbed />
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Voyez comment on répare votre PC à distance en 15 min
              </h2>
              <p className="text-slate-300 mb-5 max-w-lg">
                Un technicien AlloSupport se connecte à votre PC en temps réel.
                Vous voyez chaque action sur votre écran. Vous payez uniquement après résultat.
              </p>
              <div className="flex flex-wrap gap-2 mb-5 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  ✓ 500+ clients satisfaits
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  ✓ Dès 250 DH
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  ✓ Paiement après résultat
                </span>
              </div>
              <a
                href="https://wa.me/212775237038?text=Bonjour%20AlloSupport%2C%20je%20veux%20d%C3%A9marrer%20une%20r%C3%A9paration%20%C3%A0%20distance"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all text-base"
              >
                Démarrer ma réparation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center -mt-8 relative z-10">
        <GoogleBadge variant="inline" inviteOnly />
      </div>
      <GoogleBadge variant="floating" inviteOnly />
      <Pricing />
      <Services />
      <Trust />

      {/* Pillar page links — keyword-rich internal linking */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">
            Tous Nos Services de Dépannage Informatique au Maroc
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            Réparation PC, suppression virus, formatage, maintenance PME — intervention à distance en 15 min, paiement après résultat.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/depannage-informatique", label: "Dépannage informatique Maroc", price: "dès 150 DH" },
              { href: "/reparation-ordinateur", label: "Réparation ordinateur Maroc", price: "dès 250 DH" },
              { href: "/virus-ordinateur-maroc", label: "Suppression virus PC Maroc", price: "dès 250 DH" },
              { href: "/formatage-pc", label: "Formatage PC Maroc 350 DH", price: "350 DH" },
              { href: "/pc-lent-solution", label: "PC lent solution rapide", price: "dès 250 DH" },
              { href: "/installation-windows", label: "Installation Windows Maroc", price: "dès 250 DH" },
              { href: "/recuperation-donnees", label: "Récupération de données Maroc", price: "dès 400 DH" },
              { href: "/antivirus-maroc", label: "Antivirus Maroc", price: "dès 150 DH" },
              { href: "/maintenance-informatique", label: "Maintenance informatique Maroc", price: "dès 200 DH" },
              { href: "/infogerance-pme-maroc", label: "Infogérance PME Maroc", price: "dès 999 DH/mois" },
              { href: "/support-pme", label: "Support informatique PME Maroc", price: "dès 499 DH/mois" },
              { href: "/casablanca", label: "Dépannage informatique Casablanca", price: "dès 250 DH" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 transition group"
              >
                <span className="font-medium text-slate-800 group-hover:text-emerald-700 text-sm">
                  {link.label}
                </span>
                <span className="text-xs text-emerald-600 font-semibold whitespace-nowrap ml-2">
                  {link.price}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/rabat" className="text-sm text-emerald-700 hover:underline font-medium">Dépannage informatique Rabat</Link>
            <span className="text-slate-300">·</span>
            <Link href="/marrakech" className="text-sm text-emerald-700 hover:underline font-medium">Dépannage informatique Marrakech</Link>
            <span className="text-slate-300">·</span>
            <Link href="/fes" className="text-sm text-emerald-700 hover:underline font-medium">Réparation PC Fès</Link>
            <span className="text-slate-300">·</span>
            <Link href="/agadir" className="text-sm text-emerald-700 hover:underline font-medium">Dépannage PC Agadir</Link>
          </div>
        </div>
      </section>

      {/* Darija section */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            PC dyalek khsro ? Kayn l7al !
          </h2>
          <p className="text-lg text-slate-700 mb-4">
            PC t9il, chi9, virus, écran bleu ? Technicien ydkhol 3lik f 15 min, b la
            ma tji l&apos;atelier. Bghiti formatage, installation Windows, wla nettoyage virus —
            kollchi à distance. Ma tkhellsich ghir ila t7ell l&apos;mochkil.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-600">
            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">pc t9il</span>
            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">pc chi9</span>
            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">formatage pc casa</span>
            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">virus f pc dyali</span>
            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">reparation pc bladi</span>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Questions Fréquentes – Dépannage Informatique Maroc
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <ClientPortal />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Locations />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
