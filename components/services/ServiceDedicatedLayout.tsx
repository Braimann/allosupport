"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  MessageCircle,
  Phone,
  Shield,
  Star,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "212775237038";
const PHONE_DISPLAY = "07 75 23 70 38";
const PHONE_TEL = "+212775237038";

// Type minimal pour le contenu (sections optionnelles)
export interface ServiceContentGeneric {
  metadata: { title: string; description: string; keywords: readonly string[]; ogImage: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    mainText: string;
    image?: { url: string; alt: string };
  };
  idealFor?: { title: string; problems: readonly string[] };
  pricing: ReadonlyArray<{
    name: string;
    price: number | string;
    description: string;
    features?: readonly string[];
    duration?: string;
    popular?: boolean;
    promo?: number;
    priceUnit?: string;
    ideal?: string;
  }>;
  solution?: { title: string; intro: string; steps: ReadonlyArray<{ number: number; title: string; description: string; duration: string; icon?: string }> };
  guarantees?: ReadonlyArray<string>;
  whyUs?: { title: string; reasons: ReadonlyArray<{ title: string; before: string; after: string }> };
  commonIssues?: { title: string; list: ReadonlyArray<{ problem: string; cause: string; solution: string; duration: string }> };
  faq: ReadonlyArray<{ q: string; a: string }>;
  relatedServices: ReadonlyArray<{ slug: string; title: string; excerpt: string; category: string }>;
}

interface Props {
  content: ServiceContentGeneric;
  slug: string;
  whatsappMessage: string;
  serviceNameForSchema: string;
  heroBadgeIcon?: React.ReactNode;
  heroBadges?: React.ReactNode;
}

export default function ServiceDedicatedLayout({
  content,
  slug,
  whatsappMessage,
  serviceNameForSchema,
  heroBadgeIcon,
  heroBadges,
}: Props) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: serviceNameForSchema,
        description: content.metadata.description,
        provider: {
          "@type": "Organization",
          name: "AlloSupport.ma",
          url: "https://allosupport.ma",
          telephone: PHONE_TEL,
        },
        areaServed: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "City", name: "Casablanca" },
          { "@type": "City", name: "Rabat" },
        ],
        offers: content.pricing
          .filter((p) => typeof p.price === "number")
          .map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: (p as { price: number; promo?: number }).promo
              ? ((p as { price: number; promo: number }).price * (1 - (p as { promo: number }).promo / 100)).toFixed(0)
              : String((p as { price: number }).price),
            priceCurrency: "MAD",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2026-12-31",
          })),
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://allosupport.ma/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://allosupport.ma/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.hero.title,
            item: `https://allosupport.ma/services/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <header className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-950 pt-24 sm:pt-28">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-white/95 mb-8">
            <span className="flex shrink-0 text-emerald-300">
              {heroBadgeIcon ?? <Shield className="h-5 w-5" aria-hidden />}
            </span>
            <span className="text-sm font-semibold">{content.hero.badge}</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-5">
            {content.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-3">{content.hero.subtitle}</p>
          <p className="text-lg text-white/80 max-w-3xl mb-10">{content.hero.mainText}</p>
          {content.hero.image && (
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden mb-10">
              <Image
                src={content.hero.image.url}
                alt={content.hero.image.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 sm:px-7 sm:py-4 font-bold text-white shadow-lg hover:bg-emerald-600 transition-colors min-h-[48px]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              <span>WhatsApp (réponse rapide)</span>
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 bg-white/10 px-6 py-3.5 sm:px-7 sm:py-4 font-bold text-white hover:bg-white/20 transition-colors min-h-[48px]"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              <span>Appeler {PHONE_DISPLAY}</span>
            </a>
          </div>
          {heroBadges ?? (
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden />
                <span>Intervention 15-45 min</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden />
                <span>Sans déplacement</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-5 w-5 shrink-0 text-amber-300" aria-hidden />
                <span>Satisfait ou remboursé</span>
              </span>
            </div>
          )}
        </div>
      </header>

      <main className="w-full min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {content.idealFor && (
          <section className="mb-14 rounded-2xl border border-red-200 bg-red-50/80 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{content.idealFor.title}</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {content.idealFor.problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" aria-hidden />
                  <span className="text-base leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Tarifs Transparents</h2>
          <div className={`grid grid-cols-1 gap-6 items-start ${content.pricing.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
            {content.pricing.map((offer) => (
              <div
                key={offer.name}
                className={`flex flex-col rounded-2xl border-2 p-6 sm:p-7 transition shadow-sm hover:shadow-md ${
                  offer.popular
                    ? "border-emerald-500 bg-emerald-50/80 scale-105 z-10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {offer.popular && (
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-3 flex items-center gap-1">
                    <Star className="h-4 w-4 shrink-0" aria-hidden />
                    Plus populaire
                  </div>
                )}
                <div className="flex-1 min-h-0 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                    {typeof offer.price === "number" ? (
                      offer.promo ? (
                        <>
                          <span className="text-3xl font-extrabold text-emerald-700">
                            {(offer.price * (1 - offer.promo / 100)).toFixed(0)} DH
                          </span>
                          <span className="text-lg text-slate-500 line-through">{offer.price} DH</span>
                          <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">
                            -{offer.promo}%
                          </span>
                        </>
                      ) : (
                        <span className="text-3xl font-extrabold text-slate-900">
                          {offer.price} DH{offer.priceUnit ?? ""}
                        </span>
                      )
                    ) : (
                      <span className="text-2xl font-extrabold text-slate-900">{offer.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-4 min-h-[60px]">{offer.description}</p>
                  {offer.features && offer.features.length > 0 && (
                    <ul className="space-y-2.5 mb-5 flex-1">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {offer.duration && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                      <Clock className="h-4 w-4 shrink-0" aria-hidden />
                      {offer.duration}
                    </p>
                  )}
                  {"ideal" in offer && offer.ideal && (
                    <p className="text-xs text-slate-600 mb-4 italic border-l-2 border-slate-200 pl-3">{offer.ideal}</p>
                  )}
                </div>
                <div className="mt-auto pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold transition min-h-[48px] ${
                      offer.popular
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                    Contacter sur WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {content.solution && (
          <section className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{content.solution.title}</h2>
            <p className="text-lg text-slate-700 mb-8">{content.solution.intro}</p>
            <div className="space-y-8">
              {content.solution.steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700 ring-2 ring-emerald-200">
                    {step.number}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-700 mb-2 leading-relaxed">{step.description}</p>
                    <p className="flex items-center gap-1.5 text-sm text-slate-500">
                      <Clock className="h-4 w-4 shrink-0" aria-hidden />
                      {step.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {content.guarantees && content.guarantees.length > 0 && (
              <div className="mt-10 rounded-xl bg-emerald-50 border border-emerald-200 p-6">
                <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
                  Nos Garanties
                </h3>
                <ul className="space-y-2.5">
                  {content.guarantees.map((g, i) => (
                    <li key={i} className="text-sm text-emerald-900 flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" aria-hidden />
                      <span>{g.replace(/^✅\s*/, "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {content.guarantees && content.guarantees.length > 0 && !content.solution && (
          <section className="mb-14 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              Nos Garanties
            </h2>
            <ul className="space-y-2.5">
              {content.guarantees.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-800">
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-emerald-600" aria-hidden />
                  <span>{g.replace(/^✅\s*/, "")}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {content.whyUs && (
          <section className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{content.whyUs.title}</h2>
            <div className="space-y-6">
              {content.whyUs.reasons.map((r, i) => (
                <div key={i} className="rounded-xl border-l-4 border-emerald-500 bg-slate-50/50 pl-5 pr-4 py-4">
                  <h3 className="font-bold text-slate-900 mb-3">{r.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">
                    <span className="font-semibold text-red-600">Avant :</span> {r.before}
                  </p>
                  <p className="text-sm text-emerald-800 font-medium">
                    <span className="font-semibold text-emerald-600">Avec nous :</span> {r.after}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {content.commonIssues && (
          <section className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{content.commonIssues.title}</h2>
            <div className="space-y-4">
              {content.commonIssues.list.map((item, i) => (
                <div key={i} className="rounded-xl bg-slate-50 border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{item.problem}</h3>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong className="text-slate-700">Cause :</strong> {item.cause}
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong className="text-slate-700">Solution :</strong> {item.solution}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-4 w-4 shrink-0" aria-hidden />
                    {item.duration}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Questions Fréquentes</h2>
          <div className="space-y-3">
            {content.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                  <span className="pr-2">{item.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="px-5 pb-4 pt-0">
                  <p className="text-slate-700 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Services Complémentaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {content.relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-200 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">{s.category}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex-1">{s.excerpt}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                  Découvrir
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </p>
              </Link>
            ))}
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
