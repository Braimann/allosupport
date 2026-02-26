import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const canonicalUrl = "https://allosupport.ma/blog/arnaque-faux-technicien-informatique-maroc";
const WHATSAPP_CTA = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour, j'ai peut-être donné accès à mon PC à un faux technicien. Pouvez-vous vérifier si mon ordinateur a été compromis ? Diagnostic gratuit."
)}`;

export const metadata: Metadata = {
  title: "Arnaque Faux Technicien Informatique Maroc — 7 Signes (2026)",
  description:
    "Appel suspect d'un faux support Microsoft ou Maroc Telecom ? Découvrez les 7 signes d'une arnaque technicien informatique au Maroc et quoi faire si vous avez déjà donné accès à votre PC.",
  keywords: [
    "arnaque technicien informatique maroc",
    "faux support technique maroc",
    "arnaque microsoft maroc",
    "faux technicien teamviewer",
    "support informatique maroc fiable",
  ],
  authors: [{ name: "AlloSupport.ma" }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Arnaque Faux Technicien Informatique Maroc — 7 Signes (2026)",
    description:
      "Appel suspect d'un faux support Microsoft ou Maroc Telecom ? Les 7 signes d'une arnaque technicien informatique au Maroc et quoi faire.",
    type: "article",
    publishedTime: "2026-02-27T10:00:00+00:00",
    url: canonicalUrl,
    siteName: "AlloSupport.ma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnaque Faux Technicien Informatique Maroc — 7 Signes (2026)",
    description: "Les 7 signes d'une arnaque technicien informatique au Maroc. Que faire si vous avez donné accès à votre PC ?",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Arnaque Faux Technicien Informatique au Maroc : 7 Signes pour les Identifier (2026)",
  author: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    url: "https://allosupport.ma",
  },
  publisher: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    logo: {
      "@type": "ImageObject",
      url: "https://allosupport.ma/logo.png",
    },
  },
  datePublished: "2026-02-27",
  dateModified: "2026-02-27",
  mainEntityOfPage: canonicalUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment savoir si un technicien informatique est fiable au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un technicien fiable ne vous contacte jamais en premier. Il propose un diagnostic gratuit avant tout paiement, vous montre tout ce qu'il fait en temps réel sur votre écran et ne demande un règlement qu'après avoir résolu le problème. Vérifiez son numéro (marocain), son site officiel et les avis clients. AlloSupport.ma intervient à distance au Maroc avec paiement après résultat.",
      },
    },
    {
      "@type": "Question",
      name: "Microsoft peut-il appeler pour signaler un virus sur mon PC ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Microsoft ne contacte jamais les utilisateurs par téléphone pour signaler un problème sur leur PC. Tout appel prétendant provenir de Microsoft, Windows ou du support technique Microsoft est une arnaque. Raccrochez immédiatement.",
      },
    },
    {
      "@type": "Question",
      name: "Que faire si j'ai donné accès à mon PC à un faux technicien au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coupez internet immédiatement, puis changez tous vos mots de passe depuis un autre appareil (téléphone, autre PC). Si vous avez entré des informations bancaires, contactez votre banque. Faites analyser votre PC par un technicien de confiance pour détecter d'éventuels logiciels malveillants. AlloSupport.ma propose un diagnostic gratuit à distance pour vérifier si votre ordinateur a été compromis.",
      },
    },
    {
      "@type": "Question",
      name: "TeamViewer est-il dangereux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TeamViewer est un outil légitime utilisé par les vrais techniciens informatiques. Il devient dangereux uniquement si vous en donnez l'accès à quelqu'un en qui vous n'avez pas confiance. AlloSupport.ma utilise TeamViewer pour ses interventions — vous pouvez couper la connexion à tout moment et voyez tout ce que le technicien fait en temps réel.",
      },
    },
  ],
};

export default function BlogArnaqueFauxTechnicienMaroc() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16 pt-40">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <div className="mb-4">
              <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Sécurité & Arnaques
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Arnaque Faux Technicien Informatique au Maroc : 7 Signes pour les Identifier (2026)
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <time dateTime="2026-02-27">27 février 2026</time>
              <span>8 min lecture</span>
              <span>Par AlloSupport.ma</span>
            </div>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <nav className="text-sm text-gray-600 mb-6" aria-label="Fil d'Ariane">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/" className="hover:text-amber-600">
                        Accueil
                      </Link>
                    </li>
                    <li aria-hidden className="text-gray-400">
                      &gt;
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-amber-600">
                        Blog
                      </Link>
                    </li>
                    <li aria-hidden className="text-gray-400">
                      &gt;
                    </li>
                    <li className="text-gray-900">Arnaque faux technicien Maroc</li>
                  </ol>
                </nav>

                {/* Introduction — 150 mots max */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl leading-relaxed mb-4">
                    En 2024, le Maroc a subi{" "}
                    <strong>12,6 millions de tentatives de cyberattaques web</strong> selon Microsoft
                    (source : LeMatin.ma). Près de 41 % des cyberattaques ciblant l&apos;Afrique
                    visent le Maroc (fnh.ma, février 2026). Parmi elles, l&apos;arnaque au faux
                    technicien informatique : un appel en français ou en arabe, une voix qui se fait
                    passer pour le &quot;support Microsoft&quot;, &quot;Maroc Telecom&quot; ou votre
                    &quot;opérateur internet&quot;, et qui vous annonce que votre PC est infecté.
                    La panique, puis l&apos;accès à distance à votre ordinateur — et c&apos;est là que
                    tout bascule. Voici les <strong>7 signes</strong> qui trahissent un faux
                    technicien et comment réagir si vous avez déjà donné accès à votre PC.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Comment fonctionne l&apos;arnaque au faux technicien
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Le scénario est toujours le même. L&apos;arnaqueur vous appelle — vous n&apos;avez
                    rien demandé. Il prétend être le support Microsoft, Maroc Telecom ou &quot;votre
                    opérateur internet&quot; et vous annonce une urgence : virus détecté, compte
                    piraté, facture impayée. Objectif : vous faire ouvrir TeamViewer, AnyDesk ou
                    UltraViewer pour prendre le contrôle de votre PC. Une fois connecté, il peut
                    installer des logiciels malveillants, voler vos mots de passe ou vous faire
                    payer des centaines de dirhams. Certains utilisent la technique &quot;ClickFix&quot; : ils simulent une fausse erreur Windows à l&apos;écran pour vous
                    convaincre d&apos;installer un programme — en réalité un malware. Les vrais
                    techniciens utilisent les mêmes outils (TeamViewer, etc.) mais c&apos;est
                    <strong> vous</strong> qui les contactez, jamais l&apos;inverse.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
                    Les 7 signes qui trahissent un faux technicien
                  </h2>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 1 : Il vous contacte en premier
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Un vrai technicien informatique ne vous appelle jamais pour vous annoncer un
                    problème sur votre PC. Microsoft, Maroc Telecom et les opérateurs ne font pas
                    de prospection téléphonique pour &quot;réparer&quot; votre ordinateur. Si
                    quelqu&apos;un vous contacte sans que vous ayez déposé une demande, c&apos;est
                    une arnaque. Raccrochez.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 2 : Il crée une urgence artificielle
                  </h3>
                  <p className="text-gray-700 mb-4">
                    &quot;Votre PC est infecté en ce moment même.&quot; &quot;Vos données vont être
                    volées dans les prochaines minutes.&quot; Les arnaqueurs jouent sur la peur pour
                    vous empêcher de réfléchir. Un vrai professionnel vous explique calmement la
                    situation et ne vous bouscule jamais. Méfiez-vous de toute pression à agir
                    immédiatement.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 3 : Il demande un accès à distance avant de diagnostiquer
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Un technicien sérieux commence par vous poser des questions, vous demander de
                    décrire le problème ou de faire un diagnostic ensemble. Demander TeamViewer ou
                    AnyDesk dès la première minute, sans avoir analysé quoi que ce soit, est le
                    comportement typique d&apos;un escroc. Ne donnez jamais l&apos;accès à votre PC
                    à quelqu&apos;un qui vous a appelé sans que vous l&apos;ayez sollicité.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 4 : Il demande un paiement Western Union, Wafacash ou carte cadeau
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Les vrais services au Maroc facturent en dirhams, par virement, CMI, Cash Plus
                    ou CIH Mobile, souvent après la prestation. Les arnaqueurs exigent Western
                    Union, Wafacash, des cartes cadeaux (iTunes, Google Play) ou des cryptomonnaies
                    — des moyens difficiles à tracer et impossibles à contester. Dès que l&apos;un
                    de ces modes de paiement est demandé, fuyez.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 5 : Il ne peut pas prouver son identité ni son entreprise
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Un professionnel peut vous donner le nom de son entreprise, un site web vérifiable,
                    un numéro fixe ou mobile marocain et des avis clients. Un arnaqueur refuse
                    souvent de donner des détails, utilise un pseudonyme ou invente une société
                    sans existence réelle. Vérifiez toujours avant de confier votre PC.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 6 : Il vous demande de désactiver votre antivirus
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Aucun technicien légitime ne vous demandera d&apos;éteindre votre antivirus pour
                    &quot;réparer&quot; votre ordinateur. C&apos;est au contraire le signe qu&apos;il
                    veut installer un programme malveillant sans être bloqué. Si on vous le demande,
                    coupez la connexion immédiatement. Ensuite, faites analyser votre PC par un
                    professionnel de confiance et installez un{" "}
                    <Link href="/antivirus-maroc" className="text-amber-600 font-medium hover:underline">
                      meilleur antivirus au Maroc
                    </Link>{" "}
                    si besoin.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">
                    Signe 7 : Il utilise un numéro étranger (+33, +1, +44) ou masqué
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Les sociétés de dépannage informatique au Maroc ont des numéros locaux (06 ou 05).
                    Un appel depuis +33 (France), +1 (États-Unis), +44 (Royaume-Uni) ou un numéro
                    masqué qui prétend être &quot;le support Microsoft Maroc&quot; ou &quot;Maroc
                    Telecom&quot; est une arnaque. Les vrais services ont un siège ou une présence
                    identifiable au Maroc.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    J&apos;ai déjà donné accès à mon PC : que faire ?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ne paniquez pas. Agissez dans l&apos;ordre. <strong>Étape 1</strong> : coupez
                    internet immédiatement (WiFi et câble) pour couper l&apos;accès à distance.
                    <strong> Étape 2</strong> : depuis un autre appareil (téléphone, autre PC),
                    changez tous vos mots de passe — email, banque, réseaux sociaux. Utilisez un
                    appareil non compromis. <strong>Étape 3</strong> : si vous avez entré des
                    informations bancaires ou des codes, contactez votre banque sans attendre pour
                    bloquer les opérations suspectes. <strong>Étape 4</strong> : faites analyser
                    votre PC par un technicien de confiance pour détecter et supprimer d&apos;éventuels
                    logiciels malveillants. AlloSupport.ma intervient à distance pour vérifier si
                    votre PC a été compromis — diagnostic gratuit, réponse en 15 minutes. Vous
                    voyez tout ce qu&apos;on fait sur votre écran et nous ne demandons aucun
                    paiement avant d&apos;avoir sécurisé votre machine. Si des virus ont été
                    installés, nous pouvons vous aider à{" "}
                    <Link href="/virus-ordinateur-maroc" className="text-amber-600 font-medium hover:underline">
                      supprimer un virus après une arnaque
                    </Link>
                    .
                  </p>
                  <div className="my-8">
                    <a
                      href={WHATSAPP_CTA}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition"
                    >
                      <MessageCircle className="w-6 h-6" aria-hidden />
                      Diagnostic gratuit — Vérifier mon PC sur WhatsApp
                    </a>
                  </div>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Comment reconnaître AlloSupport.ma (un vrai technicien)
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous ne vous contactons <strong>jamais</strong> en premier. C&apos;est vous qui
                    nous appelez ou nous écrivez sur WhatsApp. Nous proposons un diagnostic gratuit
                    avant tout engagement. Vous voyez tout ce que fait le technicien sur votre
                    écran en temps réel — vous pouvez couper la connexion à tout moment. Le
                    paiement se fait uniquement après résolution du problème : pas d&apos;avance
                    Western Union, pas de carte cadeau. Notre numéro est marocain :{" "}
                    <strong>+212 775-237038</strong> (07 75 23 70 38). Notre site officiel est{" "}
                    <strong>allosupport.ma</strong>. Pour un{" "}
                    <Link href="/depannage-informatique" className="text-amber-600 font-medium hover:underline">
                      dépannage informatique à distance Maroc
                    </Link>{" "}
                    en toute confiance, ou pour{" "}
                    <Link href="/recuperation-donnees" className="text-amber-600 font-medium hover:underline">
                      récupérer vos données après une attaque
                    </Link>
                    , nous sommes là.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    <p className="text-gray-800 font-medium flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" aria-hidden />
                      Récapitulatif : AlloSupport.ma ne vous appelle jamais en premier, propose un
                      diagnostic gratuit, travaille sous vos yeux et ne facture qu&apos;après
                      résultat. Numéro Maroc 07 75 23 70 38 — allosupport.ma
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
                    Questions fréquentes
                  </h2>

                  <div className="space-y-4">
                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-gray-900 hover:bg-gray-100 transition">
                        Comment savoir si un technicien informatique est fiable au Maroc ?
                        <span className="group-open:rotate-180 transition-transform" aria-hidden>
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-4 pt-0 text-gray-700">
                        <p>
                          Un technicien fiable ne vous contacte jamais en premier. Il propose un
                          diagnostic gratuit avant tout paiement, vous montre tout ce qu&apos;il fait
                          en temps réel sur votre écran et ne demande un règlement qu&apos;après
                          avoir résolu le problème. Vérifiez son numéro (marocain), son site officiel
                          et les avis clients. AlloSupport.ma intervient à distance au Maroc avec
                          paiement après résultat.
                        </p>
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-gray-900 hover:bg-gray-100 transition">
                        Microsoft peut-il appeler pour signaler un virus sur mon PC ?
                        <span className="group-open:rotate-180 transition-transform" aria-hidden>
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-4 pt-0 text-gray-700">
                        <p>
                          Non. Microsoft ne contacte jamais les utilisateurs par téléphone pour
                          signaler un problème sur leur PC. Tout appel prétendant provenir de
                          Microsoft, Windows ou du support technique Microsoft est une arnaque.
                          Raccrochez immédiatement.
                        </p>
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-gray-900 hover:bg-gray-100 transition">
                        Que faire si j&apos;ai donné accès à mon PC à un faux technicien au Maroc ?
                        <span className="group-open:rotate-180 transition-transform" aria-hidden>
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-4 pt-0 text-gray-700">
                        <p>
                          Coupez internet immédiatement, puis changez tous vos mots de passe depuis
                          un autre appareil (téléphone, autre PC). Si vous avez entré des
                          informations bancaires, contactez votre banque. Faites analyser votre PC
                          par un technicien de confiance pour détecter d&apos;éventuels logiciels
                          malveillants. AlloSupport.ma propose un diagnostic gratuit à distance pour
                          vérifier si votre ordinateur a été compromis.
                        </p>
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-gray-900 hover:bg-gray-100 transition">
                        TeamViewer est-il dangereux ?
                        <span className="group-open:rotate-180 transition-transform" aria-hidden>
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-4 pt-0 text-gray-700">
                        <p>
                          TeamViewer est un outil légitime utilisé par les vrais techniciens
                          informatiques. Il devient dangereux uniquement si vous en donnez l&apos;accès
                          à quelqu&apos;un en qui vous n&apos;avez pas confiance. AlloSupport.ma
                          utilise TeamViewer pour ses interventions — vous pouvez couper la connexion
                          à tout moment et voyez tout ce que le technicien fait en temps réel.
                        </p>
                      </div>
                    </details>
                  </div>

                  <p className="text-center mt-10 text-gray-600 text-sm">
                    <Link href="/blog" className="text-amber-600 font-medium hover:underline">
                      ← Retour au blog
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
