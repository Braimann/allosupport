import type { Metadata } from "next";
import Link from "next/link";
import {
    MessageCircle,
    Phone,
    HardDrive,
    Cpu,
    Monitor,
    Volume2,
    Clock,
    ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */

const WHATSAPP_CTA = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
    "Bonjour, j'ai un problème avec mon disque dur/SSD, je veux un diagnostic"
)}`;

/* ─────────────────────────── METADATA ─────────────────────────── */

export const metadata: Metadata = {
    title:
        "Récupération Données Disque Dur & SSD Maroc — dès 150 DH | AlloSupport",
    description:
        "Récupération données disque dur HDD, SSD, NVMe au Maroc. PC ne démarre plus, BSOD, cliquetis. Diagnostic 150 DH, WhatsApp 15 min.",
    alternates: {
        canonical: "https://allosupport.ma/recuperation-donnees-disque-dur-ssd",
    },
    openGraph: {
        title: "Récupération Données Disque Dur & SSD Maroc — dès 150 DH",
        description:
            "Disque dur en panne, SSD non reconnu, BSOD ? Diagnostic 150 DH, réponse WhatsApp 15 min, paiement après résultat.",
        url: "https://allosupport.ma/recuperation-donnees-disque-dur-ssd",
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
            name: "Mon disque dur fait des cliquetis, mes données sont-elles perdues ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Pas forcément. Les cliquetis indiquent une panne mécanique (tête de lecture). La récupération est possible en laboratoire spécialisé avec salle blanche. Éteignez immédiatement le PC, ne tentez aucun logiciel et contactez-nous. Nous vous orienterons vers un labo partenaire certifié.",
            },
        },
        {
            "@type": "Question",
            name: "Quelle différence entre récupération de données sur HDD et SSD ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Un HDD (disque dur mécanique) stocke les données sur des plateaux magnétiques — les pannes sont souvent mécaniques (bruits, cliquetis). Un SSD utilise de la mémoire flash — les pannes sont électroniques (contrôleur grillé, firmware corrompu). La récupération SSD est généralement plus complexe et plus coûteuse en laboratoire.",
            },
        },
        {
            "@type": "Question",
            name: "Mon PC ne démarre plus, peut-on récupérer les données sans réinstaller Windows ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, dans la majorité des cas. Si le disque est encore fonctionnel, nous pouvons démarrer dessus depuis un système externe via TeamViewer et extraire vos données sans toucher à Windows. Le diagnostic prend 15 à 30 minutes et coûte 150 DH.",
            },
        },
    ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "https://allosupport.ma" },
    {
        name: "Récupération Données Maroc",
        url: "https://allosupport.ma/recuperation-donnees",
    },
    {
        name: "Disque Dur & SSD",
        url: "https://allosupport.ma/recuperation-donnees-disque-dur-ssd",
    },
]);

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const FAQ_ITEMS = [
    {
        q: "Mon disque dur fait des cliquetis, mes données sont-elles perdues ?",
        a: "Pas forcément. Les cliquetis indiquent une panne mécanique (tête de lecture). La récupération est possible en laboratoire spécialisé avec salle blanche. Éteignez immédiatement le PC, ne tentez aucun logiciel et contactez-nous. Nous vous orienterons vers un labo partenaire certifié.",
    },
    {
        q: "Quelle différence entre récupération de données sur HDD et SSD ?",
        a: "Un HDD stocke les données sur des plateaux magnétiques — les pannes sont souvent mécaniques (bruits, cliquetis). Un SSD utilise de la mémoire flash — les pannes sont électroniques (contrôleur grillé, firmware corrompu). La récupération SSD est généralement plus complexe et plus coûteuse en laboratoire.",
    },
    {
        q: "Mon PC ne démarre plus, peut-on récupérer les données sans réinstaller Windows ?",
        a: "Oui, dans la majorité des cas. Si le disque est encore fonctionnel, nous pouvons démarrer dessus depuis un système externe et extraire vos données sans toucher à Windows. Diagnostic 150 DH, 15 à 30 min via WhatsApp.",
    },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function RecuperationDonneesDisqueDurSsdPage() {
    return (
        <>
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
                                Disque Dur &amp; SSD · Maroc · 7j/7
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                Récupération Données Disque Dur &amp; SSD Maroc — tous types de
                                pannes
                            </h1>
                            <p className="text-lg text-slate-200 mb-2 leading-relaxed">
                                Votre disque dur fait des bruits ? Votre SSD n&apos;est plus
                                reconnu ? BSOD au démarrage ?{" "}
                                <strong className="text-sky-300">
                                    Ne tentez rien — chaque manipulation augmente le risque de
                                    perte définitive.
                                </strong>
                            </p>
                            <p className="text-sm text-slate-400 mb-6">
                                Diagnostic en 15 min sur WhatsApp — on vous dit honnêtement si
                                vos données sont récupérables.
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

                {/* ========== HDD ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Récupération données disque dur HDD Maroc (cliquetis, secteurs
                            défectueux)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Un disque dur mécanique (HDD) contient des plateaux
                                    magnétiques qui tournent à grande vitesse. Les pannes les plus
                                    fréquentes au Maroc sont les <strong>cliquetis</strong>{" "}
                                    (tête de lecture endommagée), les{" "}
                                    <strong>secteurs défectueux</strong> (données corrompues) et
                                    les <strong>PCB grillés</strong> (coupure de courant).
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Si votre disque dur fait des bruits anormaux,{" "}
                                    <strong>
                                        éteignez immédiatement votre PC et ne le rallumez pas
                                    </strong>
                                    . Chaque tentative de démarrage aggrave les dommages. Notre
                                    diagnostic WhatsApp à distance (150 DH) évalue la situation
                                    sans aucune manipulation physique.
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Si le disque est encore détecté et lisible, on tente la
                                    récupération logicielle à distance (250 DH). Sinon, nous vous
                                    orientons vers un labo partenaire avec salle blanche.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Volume2
                                            className="w-5 h-5 text-orange-500"
                                            aria-hidden
                                        />
                                        Cliquetis / bruits
                                    </h3>
                                    <p className="text-sm text-slate-700">
                                        Tête de lecture endommagée. Intervention impossible à
                                        distance. → Orientation labo (499 DH + frais labo).
                                    </p>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <HardDrive
                                            className="w-5 h-5 text-blue-500"
                                            aria-hidden
                                        />
                                        Secteurs défectueux
                                    </h3>
                                    <p className="text-sm text-slate-700">
                                        Données partiellement lisibles. Récupération logicielle
                                        possible à distance → 250 DH si réussie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SSD / NVMe ========== */}
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Récupération données SSD et NVMe Maroc
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Les SSD (Solid State Drive) et NVMe n&apos;ont pas de pièces
                                    mécaniques — les pannes sont{" "}
                                    <strong>électroniques</strong> : contrôleur grillé, cellules
                                    NAND usées, corruption du firmware. Contrairement aux HDD,
                                    un SSD en panne ne fait aucun bruit — il disparaît simplement
                                    du BIOS ou provoque un écran bleu (BSOD).
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    La récupération sur SSD est souvent plus complexe qu&apos;
                                    sur un HDD classique. Si le SSD est encore détecté par le
                                    système, nous tentons une extraction logicielle à distance.
                                    Si le SSD est totalement mort, l&apos;intervention nécessite
                                    un labo spécialisé.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Cpu className="w-5 h-5 text-purple-500" aria-hidden />
                                        SSD non reconnu / BSOD
                                    </h3>
                                    <p className="text-sm text-slate-700">
                                        Firmware corrompu ou contrôleur mort. Diagnostic à distance
                                        pour déterminer si une récupération logicielle est possible.
                                    </p>
                                </div>
                                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <HardDrive
                                            className="w-5 h-5 text-indigo-500"
                                            aria-hidden
                                        />
                                        NVMe M.2 mort
                                    </h3>
                                    <p className="text-sm text-slate-700">
                                        SSD NVMe soudé ou amovible non détecté. Si le composant est
                                        grillé → orientation labo partenaire spécialisé.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== PC NE DÉMARRE PLUS ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            PC ne démarre plus : récupérer ses données sans réinstaller
                            Windows
                        </h2>
                        <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100">
                            <div className="flex items-start gap-4">
                                <Monitor
                                    className="w-8 h-8 text-blue-600 shrink-0 mt-1"
                                    aria-hidden
                                />
                                <div>
                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        Votre PC affiche un écran bleu, reste bloqué sur le logo
                                        Windows ou redémarre en boucle ?{" "}
                                        <strong>Vos données ne sont pas perdues</strong> dans la
                                        plupart des cas — c&apos;est le système d&apos;exploitation
                                        qui est corrompu, pas le disque.
                                    </p>
                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        Nous pouvons démarrer votre PC sur un système externe à
                                        distance, accéder à votre disque et extraire vos fichiers
                                        importants <strong>sans réinstaller Windows</strong>. Plus
                                        besoin de perdre vos données pour remettre le PC en route.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed">
                                        Consultez notre page{" "}
                                        <Link
                                            href="/recuperation-donnees"
                                            className="text-emerald-700 font-semibold hover:underline"
                                        >
                                            récupération données disque dur Maroc
                                        </Link>{" "}
                                        pour comprendre le processus complet, ou notre service de{" "}
                                        <Link
                                            href="/reparation-ordinateur"
                                            className="text-emerald-700 font-semibold hover:underline"
                                        >
                                            réparation ordinateur Maroc
                                        </Link>{" "}
                                        si vous avez besoin aussi de remettre Windows en route.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== PANNE LOGICIELLE vs PHYSIQUE ========== */}
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                            Différence entre panne logicielle et panne physique
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                                <h3 className="text-lg font-bold text-emerald-800 mb-3">
                                    ✅ Panne logicielle
                                </h3>
                                <p className="text-sm text-slate-700 mb-3">
                                    Le disque est physiquement intact mais les données sont
                                    inaccessibles (fichier supprimé, partition corrompue,
                                    formatage accidentel, virus).
                                </p>
                                <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside mb-4">
                                    <li>Disque encore détecté par Windows</li>
                                    <li>Pas de bruits anormaux</li>
                                    <li>Fichiers disparus ou dossier illisible</li>
                                </ul>
                                <p className="text-sm font-semibold text-emerald-700">
                                    → Récupération à distance : 250 DH
                                </p>
                            </div>

                            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                                <h3 className="text-lg font-bold text-red-800 mb-3">
                                    ⚠️ Panne physique
                                </h3>
                                <p className="text-sm text-slate-700 mb-3">
                                    Le matériel est endommagé : tête de lecture cassée,
                                    plateaux rayés, contrôleur SSD grillé, connecteur arraché.
                                </p>
                                <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside mb-4">
                                    <li>Cliquetis, bruits de moteur</li>
                                    <li>Disque non reconnu par le BIOS</li>
                                    <li>Odeur de brûlé, composant noirci</li>
                                </ul>
                                <p className="text-sm font-semibold text-red-700">
                                    → NE PAS TOUCHER — orientation labo : 499 DH
                                </p>
                            </div>
                        </div>
                        <p className="text-center mt-8 text-slate-600 text-sm">
                            💡 Notre diagnostic à 150 DH détermine le type de panne en 15
                            minutes et vous donne la marche à suivre exacte.
                        </p>
                    </div>
                </section>

                {/* ========== TARIFS ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
                            Tarifs récupération données disque dur et SSD Maroc
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    Diagnostic
                                </h3>
                                <p className="text-4xl font-bold text-slate-900 mb-1">
                                    150 <span className="text-base font-medium">DH</span>
                                </p>
                                <p className="text-sm text-slate-600 mb-6">
                                    Analyse de la situation, identification du type de panne et
                                    conseil immédiat.
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
                                    Disque encore lisible — tentative à distance via TeamViewer.
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

                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    Accompagnement labo
                                </h3>
                                <p className="text-4xl font-bold text-slate-900 mb-1">
                                    499 <span className="text-base font-medium">DH</span>
                                </p>
                                <p className="text-sm text-slate-600 mb-6">
                                    Préparation dossier + suivi labo partenaire spécialisé. Frais
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
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
                            Questions fréquentes — disque dur et SSD Maroc
                        </h2>
                        <div className="space-y-4">
                            {FAQ_ITEMS.map((faq, i) => (
                                <details
                                    key={i}
                                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
                            Disque dur en panne ? SSD non reconnu ? On vous aide.
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Diagnostic en 15 min sur WhatsApp — on vous dit honnêtement si
                            vos données sont récupérables et combien ça coûte.
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
