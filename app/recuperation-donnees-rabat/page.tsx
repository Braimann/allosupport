import type { Metadata } from "next";
import Link from "next/link";
import {
    MessageCircle,
    Phone,
    MapPin,
    ShieldAlert,
    Clock,
    ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */

const WHATSAPP_CTA = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
    "Bonjour, j'ai un problème de récupération données à Rabat"
)}`;

/* ─────────────────────────── METADATA ─────────────────────────── */

export const metadata: Metadata = {
    title:
        "Récupération Données Rabat — Disque Dur, SSD dès 150 DH | AlloSupport",
    description:
        "Récupération de données à Rabat : disque dur, SSD, clé USB. Diagnostic 150 DH, WhatsApp 15 min. Agdal, Hassan, Hay Riad.",
    alternates: {
        canonical: "https://allosupport.ma/recuperation-donnees-rabat",
    },
    openGraph: {
        title: "Récupération Données Rabat — Disque Dur, SSD dès 150 DH",
        description:
            "Récupération de données à Rabat : diagnostic 150 DH, réponse WhatsApp 15 min, paiement après résultat.",
        url: "https://allosupport.ma/recuperation-donnees-rabat",
        type: "website",
        locale: "fr_MA",
    },
};

/* ─────────────────────────── JSON-LD ─────────────────────────── */

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Faites-vous de la récupération de données à Rabat ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Oui. AlloSupport.ma couvre tout Rabat : Agdal, Hassan, Hay Riad, Souissi, Akkari et tous les quartiers. Le diagnostic se fait à distance via WhatsApp en 15 minutes, et la récupération logicielle par TeamViewer. Si une intervention physique est nécessaire, nous vous orientons vers un laboratoire partenaire.",
            },
        },
        {
            "@type": "Question",
            name: "Combien coûte une récupération de données à Rabat ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Le diagnostic coûte 150 DH. La récupération logicielle à distance est à 250 DH (paiement uniquement si les données sont récupérées). L'accompagnement vers un laboratoire partenaire pour les pannes physiques est à 499 DH (frais labo non inclus).",
            },
        },
        {
            "@type": "Question",
            name: "Mon disque dur fait du bruit à Rabat, que faire ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Un disque dur qui fait des cliquetis a une panne mécanique. Éteignez immédiatement votre PC, ne tentez aucun logiciel et ne confiez pas votre disque à un réparateur non qualifié. Contactez-nous sur WhatsApp pour un diagnostic en 15 min.",
            },
        },
    ],
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AlloSupport.ma — Récupération Données Rabat",
    description:
        "Récupération de données à Rabat : disque dur, SSD, clé USB. Diagnostic 150 DH.",
    url: "https://allosupport.ma/recuperation-donnees-rabat",
    telephone: "+212775237038",
    priceRange: "150-499 DH",
    areaServed: {
        "@type": "City",
        name: "Rabat",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Rabat",
        addressCountry: "MA",
    },
};

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "https://allosupport.ma" },
    {
        name: "Récupération Données Maroc",
        url: "https://allosupport.ma/recuperation-donnees",
    },
    {
        name: "Rabat",
        url: "https://allosupport.ma/recuperation-donnees-rabat",
    },
]);

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const FAQ_ITEMS = [
    {
        q: "Faites-vous de la récupération de données à Rabat ?",
        a: "Oui. AlloSupport.ma couvre tout Rabat : Agdal, Hassan, Hay Riad, Souissi, Akkari et tous les quartiers. Le diagnostic se fait à distance via WhatsApp en 15 minutes, et la récupération logicielle par TeamViewer. Si une intervention physique est nécessaire, nous vous orientons vers un laboratoire partenaire.",
    },
    {
        q: "Combien coûte une récupération de données à Rabat ?",
        a: "Le diagnostic coûte 150 DH. La récupération logicielle à distance est à 250 DH (paiement uniquement si les données sont récupérées). L'accompagnement vers un laboratoire partenaire pour les pannes physiques est à 499 DH (frais labo non inclus).",
    },
    {
        q: "Mon disque dur fait du bruit à Rabat, que faire ?",
        a: "Éteignez immédiatement votre PC, ne tentez aucun logiciel et ne confiez pas votre disque à un réparateur non qualifié. Contactez-nous sur WhatsApp pour un diagnostic en 15 min. Si un labo est nécessaire, nous vous orienterons vers un partenaire certifié.",
    },
];

/* ─────────────────────────── QUARTIERS ─────────────────────────── */

const QUARTIERS = [
    "Agdal",
    "Hassan",
    "Hay Riad",
    "Souissi",
    "Akkari",
    "Océan",
    "Yacoub El Mansour",
    "Takaddoum",
    "Temara",
    "Salé",
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function RecuperationDonneesRabatPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <Header />

            <main className="overflow-hidden">
                {/* ========== HERO ========== */}
                <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-slate-900 text-white py-20 pt-32 md:py-24 md:pt-40">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-widest text-sky-300 mb-3">
                                Récupération données · Rabat · 7j/7
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                Récupération de Données Rabat — Disque Dur, SSD, Clé USB dès
                                150&nbsp;DH
                            </h1>
                            <p className="text-lg text-slate-200 mb-2 leading-relaxed">
                                Votre disque dur ne démarre plus ? Vous avez perdu des fichiers
                                importants ?{" "}
                                <strong className="text-sky-300">
                                    Ne tentez rien avant d&apos;avoir consulté un expert — chaque
                                    manipulation réduit vos chances.
                                </strong>
                            </p>
                            <p className="text-sm text-slate-400 mb-6">
                                Un technicien vous répond en 15 min sur WhatsApp pour évaluer
                                gratuitement votre situation à Rabat.
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                                <a
                                    href={WHATSAPP_CTA}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition text-base"
                                >
                                    <MessageCircle className="w-5 h-5" aria-hidden />
                                    Diagnostic Gratuit WhatsApp
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border border-sky-400/60 text-sky-100 hover:bg-sky-500/10 px-6 py-3 rounded-xl font-semibold transition text-base"
                                >
                                    Décrire mon problème
                                </Link>
                            </div>
                            <p className="inline-flex items-center gap-2 text-xs font-semibold bg-sky-500/20 text-sky-200 px-3 py-1.5 rounded-full">
                                <Clock className="w-4 h-4" aria-hidden />
                                Réponse en 15 min — 7j/7
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== INTERVENTION RAPIDE ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Récupération données disque dur Rabat — intervention rapide
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    À Rabat, les données perdues peuvent avoir des conséquences
                                    graves : mémoire de fin d&apos;études, comptabilité
                                    d&apos;entreprise, photos de famille irremplaçables.
                                    AlloSupport.ma vous assiste en 15 minutes sur WhatsApp — pas
                                    besoin de vous déplacer.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Notre diagnostic à distance évalue les chances de récupération
                                    et vous donne un conseil honnête. Si le disque est encore
                                    lisible, nous tentons la récupération logicielle via
                                    TeamViewer. En cas de panne physique, nous orientons vers un
                                    laboratoire partenaire.
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Consultez notre page{" "}
                                    <Link
                                        href="/recuperation-donnees"
                                        className="text-emerald-700 font-semibold hover:underline"
                                    >
                                        récupération données disque dur Maroc
                                    </Link>{" "}
                                    pour comprendre notre méthodologie complète.
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600" aria-hidden />
                                    Processus rapide
                                </h3>
                                <ul className="space-y-3 text-slate-700 text-sm">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-blue-600 shrink-0">1.</span>
                                        WhatsApp → diagnostic en 15 min (150 DH)
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-blue-600 shrink-0">2.</span>
                                        Récupération logicielle à distance — 250 DH si réussie
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-blue-600 shrink-0">3.</span>
                                        Orientation labo partenaire si panne physique — 499 DH
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== QUARTIERS ========== */}
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                            Quartiers couverts : Agdal, Hassan, Hay Riad, Souissi, Akkari
                        </h2>
                        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-8">
                            Notre intervention est 100&nbsp;% à distance : diagnostic
                            WhatsApp, récupération via TeamViewer. Quel que soit votre
                            quartier à Rabat ou Salé, nous vous assistons en 15 minutes.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {QUARTIERS.map((q) => (
                                <span
                                    key={q}
                                    className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm shadow-sm"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" aria-hidden />
                                    {q}
                                </span>
                            ))}
                        </div>
                        <p className="text-center mt-6 text-sm text-slate-600">
                            Besoin d&apos;un{" "}
                            <Link
                                href="/rabat"
                                className="text-emerald-700 font-semibold hover:underline"
                            >
                                dépannage informatique Rabat
                            </Link>{" "}
                            ? Nous intervenons aussi sur tous les autres problèmes
                            informatiques.
                        </p>
                    </div>
                </section>

                {/* ========== WARNING ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Pourquoi ne pas confier votre disque dur à un inconnu à Rabat ?
                        </h2>
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                            <div className="flex items-start gap-4">
                                <ShieldAlert
                                    className="w-8 h-8 text-red-500 shrink-0 mt-1"
                                    aria-hidden
                                />
                                <div>
                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        <strong>Confier un disque dur à un réparateur non
                                            qualifié peut coûter bien plus cher qu&apos;un diagnostic
                                            professionnel.</strong> Ouvrir un disque dur sans salle
                                        blanche ou exécuter des logiciels inadaptés peut contaminer
                                        les plateaux magnétiques et rendre toute récupération
                                        impossible, même pour un laboratoire certifié.
                                    </p>
                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        Chez AlloSupport, le diagnostic se fait{" "}
                                        <strong>à distance</strong>, sans manipulation physique de
                                        votre disque. Si une intervention en laboratoire est
                                        nécessaire, nous vous orientons vers un partenaire équipé
                                        d&apos;une salle blanche aux standards internationaux.
                                    </p>
                                    <p className="text-slate-700 text-sm">
                                        💡 Un diagnostic professionnel à 150 DH peut vous éviter de
                                        perdre définitivement des données irremplaçables.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== TARIFS ========== */}
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
                            Tarifs récupération données Rabat
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    Diagnostic
                                </h3>
                                <p className="text-4xl font-bold text-slate-900 mb-1">
                                    150 <span className="text-base font-medium">DH</span>
                                </p>
                                <p className="text-sm text-slate-600 mb-6">
                                    Analyse de la situation, évaluation des risques et conseil
                                    immédiat.
                                </p>
                                <a
                                    href={WHATSAPP_CTA}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="block w-full text-center py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition"
                                >
                                    Demander un diagnostic
                                </a>
                            </div>

                            <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105 relative">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                                    Le plus choisi
                                </span>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    Récupération logicielle
                                </h3>
                                <p className="text-4xl font-bold text-slate-900 mb-1">
                                    250 <span className="text-base font-medium">DH</span>
                                </p>
                                <p className="text-sm text-slate-600 mb-6">
                                    Disque encore lisible, tentative à distance via TeamViewer.
                                    Paiement uniquement si données récupérées.
                                </p>
                                <a
                                    href={WHATSAPP_CTA}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="block w-full text-center py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition"
                                >
                                    Récupérer mes données
                                </a>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    Accompagnement labo
                                </h3>
                                <p className="text-4xl font-bold text-slate-900 mb-1">
                                    499 <span className="text-base font-medium">DH</span>
                                </p>
                                <p className="text-sm text-slate-600 mb-6">
                                    Préparation du dossier + suivi laboratoire partenaire. Frais
                                    labo non inclus.
                                </p>
                                <a
                                    href={WHATSAPP_CTA}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="block w-full text-center py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition"
                                >
                                    Discuter de mon cas
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== FAQ ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
                            Questions fréquentes — récupération données Rabat
                        </h2>
                        <div className="space-y-4">
                            {FAQ_ITEMS.map((faq, i) => (
                                <details
                                    key={i}
                                    className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        {faq.q}
                                        <ChevronDown
                                            className="w-5 h-5 shrink-0 transition group-open:rotate-180"
                                            aria-hidden
                                        />
                                    </summary>
                                    <div className="px-6 pb-4 pt-0 text-slate-700">
                                        <p className="m-0 leading-relaxed">{faq.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== CTA FINAL ========== */}
                <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                            Données perdues à Rabat ? Chaque minute compte.
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Ne tentez rien vous-même — contactez un expert en 15 min.
                            Diagnostic honnête, paiement après résultat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={WHATSAPP_CTA}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-2xl shadow-lg transition text-lg"
                            >
                                <MessageCircle className="w-7 h-7" aria-hidden />
                                WhatsApp — Diagnostic Gratuit
                            </a>
                            <a
                                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-5 rounded-2xl border-2 border-white transition text-lg"
                            >
                                <Phone className="w-7 h-7" aria-hidden />
                                {GOOGLE_BUSINESS.PHONE_FORMATTED}
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
