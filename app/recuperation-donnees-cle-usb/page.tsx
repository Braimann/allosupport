import type { Metadata } from "next";
import Link from "next/link";
import {
    MessageCircle,
    Phone,
    Usb,
    ImageIcon,
    AlertTriangle,
    FolderSearch,
    Clock,
    ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */

const WHATSAPP_CTA = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
    "Bonjour, j'ai un problème avec ma clé USB/carte SD, je veux un diagnostic"
)}`;

/* ─────────────────────────── METADATA ─────────────────────────── */

export const metadata: Metadata = {
    title:
        "Récupérer Données Clé USB Maroc — Clé demande formatage | 150 DH",
    description:
        "Récupérer fichiers supprimés ou perdus sur clé USB au Maroc. Clé USB qui demande formatage, corrompue, non reconnue. Diagnostic 150 DH.",
    alternates: {
        canonical: "https://allosupport.ma/recuperation-donnees-cle-usb",
    },
    openGraph: {
        title: "Récupérer Données Clé USB Maroc — Clé demande formatage | 150 DH",
        description:
            "Clé USB corrompue ou qui demande formatage ? Récupération de fichiers à distance. Diagnostic 150 DH, WhatsApp 15 min.",
        url: "https://allosupport.ma/recuperation-donnees-cle-usb",
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
            name: "Ma clé USB demande un formatage, est-ce que je vais perdre mes fichiers ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Non, ne formatez surtout pas ! Le message « Vous devez formater le disque » signifie que le système de fichiers est corrompu, mais vos données sont probablement encore sur la clé. Contactez-nous sur WhatsApp pour un diagnostic en 15 min (150 DH). Dans la majorité des cas, nous récupérons les fichiers à distance.",
            },
        },
        {
            "@type": "Question",
            name: "Peut-on récupérer des photos supprimées d'une carte SD au Maroc ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, dans la plupart des cas. Tant que la carte SD n'a pas été remplie de nouvelles données après la suppression, les photos sont récupérables. Arrêtez immédiatement d'utiliser la carte et contactez-nous. Récupération à distance : 250 DH si réussie.",
            },
        },
        {
            "@type": "Question",
            name: "Ma clé USB n'est pas reconnue par Windows, que faire ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Essayez sur un autre port USB ou un autre PC. Si la clé n'est toujours pas reconnue, le contrôleur est peut-être mort. Contactez-nous pour un diagnostic — nous déterminons si c'est un problème logiciel (réparable à distance) ou matériel (orientation labo).",
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
        name: "Clé USB",
        url: "https://allosupport.ma/recuperation-donnees-cle-usb",
    },
]);

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const FAQ_ITEMS = [
    {
        q: "Ma clé USB demande un formatage, est-ce que je vais perdre mes fichiers ?",
        a: "Non, ne formatez surtout pas ! Le message « Vous devez formater le disque » signifie que le système de fichiers est corrompu, mais vos données sont probablement encore sur la clé. Contactez-nous sur WhatsApp pour un diagnostic en 15 min (150 DH). Dans la majorité des cas, nous récupérons les fichiers à distance.",
    },
    {
        q: "Peut-on récupérer des photos supprimées d'une carte SD au Maroc ?",
        a: "Oui, dans la plupart des cas. Tant que la carte SD n'a pas été remplie de nouvelles données après la suppression, les photos sont récupérables. Arrêtez immédiatement d'utiliser la carte et contactez-nous. Récupération à distance : 250 DH si réussie.",
    },
    {
        q: "Ma clé USB n'est pas reconnue par Windows, que faire ?",
        a: "Essayez sur un autre port USB ou un autre PC. Si la clé n'est toujours pas reconnue, le contrôleur est peut-être mort. Contactez-nous pour un diagnostic — nous déterminons si c'est un problème logiciel (réparable à distance) ou matériel (orientation labo).",
    },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function RecuperationDonneesCleUsbPage() {
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
                                Clé USB &amp; Carte SD · Maroc · 7j/7
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                Récupérer Données Clé USB Maroc — Clé corrompue, demande
                                formatage
                            </h1>
                            <p className="text-lg text-slate-200 mb-2 leading-relaxed">
                                Windows affiche &quot;Vous devez formater le disque&quot; ?
                                Votre clé USB n&apos;est plus reconnue ?{" "}
                                <strong className="text-sky-300">
                                    Ne cliquez surtout pas &quot;Formater&quot; — vos fichiers
                                    sont probablement encore récupérables.
                                </strong>
                            </p>
                            <p className="text-sm text-slate-400 mb-6">
                                Diagnostic en 15 min sur WhatsApp — on vous dit si la
                                récupération est possible avant toute intervention.
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

                {/* ========== CLÉ USB DEMANDE FORMATAGE ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Ma clé USB demande un formatage — ne pas formater
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Quand Windows affiche le message &quot;Vous devez formater le
                                    disque avant de l&apos;utiliser&quot;, cela signifie que le{" "}
                                    <strong>système de fichiers est corrompu</strong> (FAT32,
                                    exFAT ou NTFS endommagé). Mais vos données sont encore
                                    physiquement présentes sur la clé.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    <strong>Si vous formatez, la récupération devient
                                        beaucoup plus difficile</strong>. Cliquer &quot;Formater&quot;
                                    efface la table des fichiers et peut écraser des données.
                                    Débranchez la clé, ne tentez rien et contactez-nous.
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Les causes courantes : retrait brutal de la clé USB sans
                                    éjection sécurisée, coupure de courant pendant un transfert,
                                    virus qui corrompt le système de fichiers.
                                </p>
                            </div>
                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle
                                        className="w-7 h-7 text-orange-500 shrink-0 mt-1"
                                        aria-hidden
                                    />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">
                                            Ce qu&apos;il faut faire
                                        </h3>
                                        <ol className="text-sm text-slate-700 space-y-2 list-decimal list-inside">
                                            <li>
                                                <strong>Ne pas formater</strong> — cliquez
                                                &quot;Annuler&quot;
                                            </li>
                                            <li>
                                                <strong>Débrancher la clé</strong> proprement
                                            </li>
                                            <li>
                                                <strong>Nous contacter sur WhatsApp</strong> — diagnostic
                                                en 15 min
                                            </li>
                                            <li>
                                                On tente la récupération à distance (250 DH si réussie)
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CLÉ USB NON RECONNUE ========== */}
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Clé USB non reconnue par Windows — causes et solutions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Si votre clé USB n&apos;apparaît ni dans l&apos;Explorateur
                                    de fichiers ni dans le Gestionnaire de disques, le problème
                                    peut avoir plusieurs origines :
                                </p>
                                <ul className="space-y-2 text-slate-700 text-sm list-disc list-inside mb-4">
                                    <li>
                                        <strong>Port USB défaillant</strong> — essayez un autre port
                                        ou un autre PC
                                    </li>
                                    <li>
                                        <strong>Pilote USB corrompu</strong> — réparable par
                                        manipulation logicielle
                                    </li>
                                    <li>
                                        <strong>Contrôleur de la clé grillé</strong> — si la clé
                                        ne clignote plus du tout, c&apos;est une panne matérielle
                                    </li>
                                    <li>
                                        <strong>Connecteur USB cassé</strong> — dommage physique
                                        visible
                                    </li>
                                </ul>
                                <p className="text-slate-700 leading-relaxed">
                                    Notre diagnostic à distance (150 DH) vous indique en 15 min
                                    si le problème est logiciel (réparable) ou matériel
                                    (orientation labo).
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Usb className="w-5 h-5 text-blue-600" aria-hidden />
                                    Diagnostic rapide
                                </h3>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li className="flex gap-2">
                                        <span className="text-green-600 font-bold">✓</span>
                                        Si la LED clignote → probablement logiciel → récupérable
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-600 font-bold">✓</span>
                                        Si elle apparaît dans le Gestionnaire de disques →
                                        récupérable à distance
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-500 font-bold">✗</span>
                                        Si aucune réaction sur 3 PC différents → panne matérielle
                                        probable
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== FICHIERS SUPPRIMÉS ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Fichiers supprimés clé USB Maroc — récupération possible ?
                        </h2>
                        <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-200">
                            <div className="flex items-start gap-4">
                                <FolderSearch
                                    className="w-8 h-8 text-emerald-600 shrink-0 mt-1"
                                    aria-hidden
                                />
                                <div>
                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        Quand vous supprimez un fichier d&apos;une clé USB, il
                                        n&apos;y a <strong>pas de Corbeille</strong> — le fichier
                                        est marqué comme effacé mais les données restent physiquement
                                        sur la clé jusqu&apos;à ce qu&apos;elles soient écrasées par
                                        de nouveaux fichiers.
                                    </p>
                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        <strong>Règle d&apos;or :</strong> ne copiez rien de nouveau
                                        sur la clé après la suppression. Plus vous l&apos;utilisez,
                                        plus les chances de récupération diminuent. Contactez-nous
                                        immédiatement — la récupération à distance coûte 250 DH et
                                        vous ne payez que si les fichiers sont récupérés.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed">
                                        Consultez notre page{" "}
                                        <Link
                                            href="/recuperation-donnees"
                                            className="text-emerald-700 font-semibold hover:underline"
                                        >
                                            récupération données disque dur Maroc
                                        </Link>{" "}
                                        pour le processus complet, ou notre service de{" "}
                                        <Link
                                            href="/formatage-pc"
                                            className="text-emerald-700 font-semibold hover:underline"
                                        >
                                            formatage PC Maroc
                                        </Link>{" "}
                                        si vous avez besoin de sauvegarder vos données avant un
                                        formatage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CARTE SD ========== */}
                <section className="py-16 lg:py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Carte SD corrompue Maroc — photos perdues
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Vous avez retiré la carte SD de votre appareil photo ou
                                    téléphone et toutes vos photos ont disparu ? La carte affiche
                                    &quot;0 Ko utilisés&quot; ou demande un formatage ? Pas de
                                    panique — dans la plupart des cas, les photos sont encore
                                    récupérables.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Les cartes SD (microSD, SDHC, SDXC) utilisent le même type de
                                    mémoire flash que les clés USB. Les causes de corruption sont
                                    identiques : retrait sans éjection, coupure de courant,
                                    utilisation dans un appareil défaillant.
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    <strong>Ne prenez plus de photos</strong> sur la carte
                                    corrompue — chaque nouvelle photo risque d&apos;écraser les
                                    anciennes. Contactez-nous pour un diagnostic en 15 min.
                                </p>
                            </div>
                            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <ImageIcon
                                        className="w-5 h-5 text-purple-500"
                                        aria-hidden
                                    />
                                    Types de cartes traitées
                                </h3>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li>SD / SDHC / SDXC (appareils photo)</li>
                                    <li>microSD (smartphones, tablettes)</li>
                                    <li>CompactFlash (appareils pro)</li>
                                    <li>Memory Stick (anciens appareils Sony)</li>
                                </ul>
                                <p className="mt-4 text-sm text-slate-600">
                                    Récupération à distance : 250 DH si réussie. Diagnostic :
                                    150 DH.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== TARIFS ========== */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
                            Tarifs récupération données clé USB et carte SD Maroc
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
                                    Évaluation de la situation, diagnostic du type de panne et
                                    estimation des chances de récupération.
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
                                    Clé USB / carte SD encore détectée — tentative de récupération
                                    à distance. Paiement si données récupérées.
                                </p>
                                <a
                                    href={WHATSAPP_CTA}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="block w-full text-center py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition"
                                >
                                    Récupérer mes fichiers
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
                                    Mémoire flash morte, contrôleur grillé. Orientation labo
                                    partenaire spécialisé. Frais labo non inclus.
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
                            Questions fréquentes — clé USB et carte SD Maroc
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
                            Clé USB corrompue ? Carte SD vide ? On récupère vos fichiers.
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Ne formatez rien — contactez un expert en 15 min. Diagnostic
                            honnête, paiement après résultat uniquement.
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
