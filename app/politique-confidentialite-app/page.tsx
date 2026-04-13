import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Smartphone,
  ListOrdered,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { PrintPageButton } from "./print-button";
import { AccountDeletionForm } from "./account-deletion-form";

const CANONICAL = "https://allosupport.ma/politique-confidentialite-app";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Application Mobile | AlloSupport.ma",
  description:
    "Politique de confidentialité de l'application mobile AlloSupport.ma. Données collectées, droits utilisateurs, conformité Loi 09-08 CNDP Maroc.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    url: CANONICAL,
    type: "website",
    title: "Politique de Confidentialité — Application Mobile | AlloSupport.ma",
    description:
      "Politique de confidentialité de l'application mobile AlloSupport.ma. Données collectées, droits utilisateurs, conformité Loi 09-08 CNDP Maroc.",
  },
};

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "responsable", label: "2. Responsable du traitement" },
  { id: "donnees", label: "3. Données collectées par l'app" },
  { id: "finalites", label: "4. Finalités du traitement" },
  { id: "base-legale", label: "5. Base légale (Loi 09-08)" },
  { id: "duree", label: "6. Durée de conservation" },
  { id: "partage", label: "7. Partage des données" },
  { id: "droits", label: "8. Droits de l'utilisateur" },
  { id: "securite", label: "9. Sécurité technique" },
  { id: "modifications", label: "10. Modifications" },
  { id: "suppression-compte", label: "Supprimer mon compte" },
] as const;

export default function PolitiqueConfidentialiteAppPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16 print:bg-white print:pt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg">
              <Smartphone className="w-8 h-8 text-white" aria-hidden />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Politique de confidentialité — Application mobile
            </h1>
            <p
              className="text-sm text-gray-600 mb-4"
              suppressHydrationWarning
            >
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-800">
              Conforme Loi 09-08 — CNDP Maroc
            </span>
            <div className="mt-6 flex flex-wrap justify-center gap-3 print:hidden">
              <PrintPageButton />
              <Link
                href="/politique-confidentialite"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Politique site web
              </Link>
            </div>
          </div>

          <nav
            aria-label="Table des matières"
            className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm print:hidden"
          >
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
              <ListOrdered className="w-4 h-4" aria-hidden />
              Sommaire
            </h2>
            <ol className="grid gap-2 sm:grid-cols-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-10 print:shadow-none print:rounded-none">
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-500 shrink-0" aria-hidden />
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cette politique s&apos;applique exclusivement à l&apos;application mobile AlloSupport
                disponible sur Android. Dernière mise à jour : 13 avril 2026.
              </p>
            </section>

            <section id="responsable" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Responsable du traitement</h2>
              <ul className="list-none space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900">Nom :</span> AlloSupport.ma
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Activité :</span> dépannage
                  informatique et récupération de données au Maroc
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Email :</span>{" "}
                  <a
                    href="mailto:privacy@allosupport.ma"
                    className="text-emerald-700 hover:underline"
                  >
                    privacy@allosupport.ma
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Téléphone :</span>{" "}
                  {GOOGLE_BUSINESS.PHONE_FORMATTED}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Conformité :</span> Loi 09-08 — CNDP
                  Maroc (
                  <a
                    href="https://www.cndp.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    www.cndp.ma
                    <ExternalLink className="w-3.5 h-3.5 inline shrink-0" aria-hidden />
                  </a>
                  )
                </li>
              </ul>
            </section>

            <section id="donnees" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Données collectées par l&apos;app</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>
                  <strong>Données d&apos;inscription :</strong> nom, prénom, numéro de téléphone (+212),
                  ville
                </li>
                <li>
                  <strong>Données du ticket :</strong> description de la panne, modèle de
                  l&apos;appareil, photos jointes
                </li>
                <li>
                  <strong>Données de géolocalisation :</strong> uniquement si l&apos;utilisateur accepte
                  (intervention à domicile)
                </li>
                <li>
                  <strong>Conversations FIXI (chatbot IA) :</strong> questions posées, réponses reçues
                </li>
                <li>
                  <strong>Données techniques :</strong> version de l&apos;app, version Android, logs
                  d&apos;erreur
                </li>
                <li>
                  <strong>Notifications push :</strong> token FCM Firebase (pour envoi de notifications)
                </li>
                <li>
                  <strong>Aucune donnée bancaire collectée :</strong> le paiement est effectué en espèces
                  ou virement après résolution
                </li>
              </ul>
            </section>

            <section id="finalites" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Finalités du traitement</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>Créer et gérer les tickets d&apos;assistance</li>
                <li>Attribuer les interventions aux techniciens</li>
                <li>Envoyer des notifications push sur l&apos;état du ticket</li>
                <li>
                  Faire fonctionner FIXI (assistant IA) — données utilisées de façon anonymisée
                  uniquement
                </li>
                <li>Améliorer la qualité du service</li>
                <li>Respecter les obligations légales et comptables marocaines</li>
              </ul>
            </section>

            <section id="base-legale" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Base légale (Loi 09-08)</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>Exécution du contrat de service</li>
                <li>Consentement explicite lors de l&apos;inscription (OTP SMS)</li>
                <li>Intérêt légitime pour la sécurité et la prévention des fraudes</li>
              </ul>
            </section>

            <section id="duree" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Durée de conservation</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>
                  <strong>Compte utilisateur actif :</strong> durée de la relation + 3 ans
                </li>
                <li>
                  <strong>Tickets résolus :</strong> 3 ans (obligations comptables)
                </li>
                <li>
                  <strong>Conversations FIXI :</strong> 30 jours glissants, puis suppression automatique
                </li>
                <li>
                  <strong>Logs techniques :</strong> 12 mois
                </li>
                <li>
                  <strong>Après demande de suppression :</strong> traitement sous 30 jours
                </li>
              </ul>
            </section>

            <section id="partage" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Partage des données</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>
                  <strong>Techniciens AlloSupport :</strong> accès limité aux informations du ticket
                  assigné uniquement
                </li>
                <li>
                  <strong>Supabase :</strong> hébergement base de données (serveurs UE, chiffrement
                  AES-256, DPA signé)
                </li>
                <li>
                  <strong>Firebase / Google :</strong> notifications push (FCM)
                </li>
                <li>
                  <strong>Groq API :</strong> traitement des messages FIXI — données anonymisées, aucun
                  historique stocké côté Groq
                </li>
                <li>
                  <strong>AUCUNE</strong> vente de données à des tiers
                </li>
                <li>
                  <strong>AUCUN</strong> transfert hors UE/Maroc sans garanties adéquates
                </li>
              </ul>
            </section>

            <section id="droits" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Droits de l&apos;utilisateur (art. 7 Loi 09-08)
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>
                  <strong>Droit d&apos;accès :</strong> obtenir une copie de ses données sous 30 jours
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger des informations inexactes
                </li>
                <li>
                  <strong>Droit d&apos;effacement :</strong> supprimer son compte via Paramètres → Mon
                  compte → Supprimer
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> refuser le traitement pour prospection
                  commerciale
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> export JSON des données sur demande
                </li>
                <li>
                  <strong>Contact :</strong>{" "}
                  <a
                    href="mailto:privacy@allosupport.ma"
                    className="text-emerald-700 hover:underline"
                  >
                    privacy@allosupport.ma
                  </a>
                </li>
                <li>
                  <strong>Réclamation CNDP :</strong>{" "}
                  <a
                    href="https://www.cndp.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    www.cndp.ma
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  </a>{" "}
                  — Hay Riad, Rabat
                </li>
              </ul>
            </section>

            <section id="securite" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Sécurité technique</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-1">
                <li>
                  <strong>Chiffrement en transit :</strong> TLS 1.3
                </li>
                <li>
                  <strong>Chiffrement au repos :</strong> AES-256 (Supabase)
                </li>
                <li>
                  <strong>Authentification sans mot de passe :</strong> OTP SMS uniquement
                </li>
                <li>
                  <strong>Accès techniciens limité</strong> par Row Level Security (RLS Supabase)
                </li>
                <li>L&apos;application ne collecte pas de cookies</li>
              </ul>
            </section>

            <section id="modifications" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                Toute modification majeure sera notifiée par notification push 30 jours avant entrée en
                vigueur. La date de mise à jour est affichée dynamiquement en haut de cette page.
              </p>
            </section>
          </article>
        </div>

        <AccountDeletionForm />
      </main>
      <Footer />
    </>
  );
}
