import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Gauge,
  Bug,
  Monitor,
  HardDrive,
  Printer,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  Star,
  Lock,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const CANONICAL = "https://allosupport.ma/computer-repair-morocco";

const WHATSAPP_EN = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Hello AlloSupport, I need English-speaking remote computer repair in Morocco."
)}`;

/** Swap to /images/computer-repair-morocco.jpg when the asset is in public/ */
const OG_IMAGE = "https://allosupport.ma/og-image.jpg";

export const metadata: Metadata = {
  title: "Computer Repair Morocco — Remote IT Support in 15 Min | AlloSupport.ma",
  description:
    "Fast computer repair in Morocco. Virus removal, slow PC, Windows reinstall, data recovery. Remote support in 15 min. From 150 MAD. Pay after fix. Casablanca, Rabat, Marrakech.",
  alternates: {
    canonical: CANONICAL,
    languages: {
      fr: "https://allosupport.ma/depannage-informatique",
      en: CANONICAL,
    },
  },
  openGraph: {
    title: "Computer Repair Morocco — 15 Min Remote Support",
    description:
      "Remote computer repair anywhere in Morocco. From 150 MAD. Pay only after problem is solved.",
    url: CANONICAL,
    type: "website",
    locale: "en_MA",
    siteName: "AlloSupport.ma",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "AlloSupport — Computer repair Morocco, remote IT support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Repair Morocco — 15 Min Remote Support",
    description:
      "Remote computer repair anywhere in Morocco. From 150 MAD. Pay only after the problem is solved.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "AlloSupport.ma — Computer Repair Morocco",
      description:
        "Professional remote computer repair service in Morocco. Fast, affordable, pay after fix guarantee.",
      url: CANONICAL,
      telephone: GOOGLE_BUSINESS.PHONE,
      priceRange: "150 MAD - 999 MAD",
      areaServed: [
        { "@type": "Country", name: "Morocco" },
        { "@type": "City", name: "Casablanca" },
        { "@type": "City", name: "Rabat" },
        { "@type": "City", name: "Marrakech" },
        { "@type": "City", name: "Fez" },
        { "@type": "City", name: "Agadir" },
        { "@type": "City", name: "Tangier" },
      ],
      availableLanguage: ["English", "French", "Arabic"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "23:00",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does remote computer repair work in Morocco?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our technician connects to your PC via AnyDesk or TeamViewer. You see everything in real time. We fix the problem in 15–60 minutes in most cases. You only pay after the problem is resolved.",
          },
        },
        {
          "@type": "Question",
          name: "How much does computer repair cost in Morocco?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Computer repair starts from 150 MAD for basic diagnosis and simple fixes. PC cleanup costs 200 MAD, Windows reinstall 350 MAD, virus removal from 150 MAD, data recovery from 300 MAD. Payment only after the problem is fixed.",
          },
        },
        {
          "@type": "Question",
          name: "Do you speak English?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AlloSupport offers English-speaking remote IT support in Morocco. You can message us on WhatsApp in English and we respond in under 15 minutes, 7 days a week.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to let someone access my computer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The connection is encrypted. You approve the session, watch every action on your screen, and can disconnect anytime. We never open personal folders without your permission.",
          },
        },
        {
          "@type": "Question",
          name: "What if you can't fix my problem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If we cannot resolve your issue, you owe nothing. Our pay-after-fix policy means you only pay when you are satisfied with the result.",
          },
        },
        {
          "@type": "Question",
          name: "Do you repair computers in Marrakech, Rabat and Fes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AlloSupport provides remote computer repair anywhere in Morocco including Marrakech, Casablanca, Rabat, Fes, Agadir and Tangier. No need to travel — we connect remotely in under 15 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After your issue is fixed, you can pay by cash, bank transfer, CIH Mobile, or other methods we confirm on WhatsApp. No payment is required until you confirm the fix.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We typically reply on WhatsApp in under 15 minutes, every day from 8:00 to 23:00. Many sessions start within the hour.",
          },
        },
      ],
    },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://allosupport.ma" },
  { name: "Computer Repair Morocco", url: CANONICAL },
]);

const PRICING = [
  { service: "Free Diagnosis", price: "Free", time: "15 min" },
  { service: "PC Cleanup & Speedup", price: "200 MAD", time: "45 min" },
  { service: "Virus Removal", price: "150 MAD", time: "1 h" },
  { service: "Windows Reinstall", price: "350 MAD", time: "2–3 h" },
  { service: "Data Recovery", price: "300 MAD+", time: "2–4 h" },
  { service: "Printer Setup", price: "150 MAD", time: "30 min" },
  { service: "Monthly IT Support", price: "999 MAD", time: "Ongoing" },
] as const;

const FAQ_ITEMS = [
  {
    q: "How does remote computer repair work in Morocco?",
    a: "Our technician connects to your PC via AnyDesk or TeamViewer. You see everything in real time. We fix the problem in 15–60 minutes in most cases. You only pay after the problem is resolved.",
  },
  {
    q: "How much does computer repair cost in Morocco?",
    a: "Computer repair starts from 150 MAD for basic diagnosis and simple fixes. PC cleanup costs 200 MAD, Windows reinstall 350 MAD, virus removal from 150 MAD, data recovery from 300 MAD. Payment only after the problem is fixed.",
  },
  {
    q: "Do you speak English?",
    a: "Yes. AlloSupport offers English-speaking remote IT support in Morocco. Message us on WhatsApp in English — we reply in under 15 minutes, 7 days a week.",
  },
  {
    q: "Is it safe to let someone access my computer?",
    a: "The connection is encrypted. You approve the session, watch every action, and can disconnect anytime. We never access personal files without your permission.",
  },
  {
    q: "What if you can't fix my problem?",
    a: "If we cannot resolve your issue, you owe nothing. Pay-after-fix means you only pay when you're satisfied.",
  },
  {
    q: "Do you repair computers in Marrakech, Rabat and Fes?",
    a: "Yes. Remote repair works everywhere in Morocco: Marrakech, Casablanca, Rabat, Fes, Agadir, Tangier and more. We connect in under 15 minutes — no shop visit.",
  },
  {
    q: "How do I pay?",
    a: "After the fix, you can pay by cash, bank transfer, CIH Mobile, or other options we confirm on WhatsApp. No upfront payment.",
  },
  {
    q: "How quickly can you start?",
    a: "We usually answer WhatsApp in under 15 minutes, daily 8:00–23:00. Many jobs start within the hour.",
  },
] as const;

export default function ComputerRepairMoroccoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main lang="en" className="min-h-screen bg-slate-50 text-slate-900">
        {/* SECTION 1 — Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-emerald-200/90 mb-6 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">Computer repair Morocco</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Computer Repair in Morocco — Fixed Remotely in 15 Minutes
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              No need to find a repair shop. Our English-speaking technician connects to your PC
              instantly via WhatsApp — from anywhere in Morocco.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["150 MAD+", "15 min response", "Pay after fix", "7 days/week"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center text-sm font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={WHATSAPP_EN}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/40 transition"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                Chat on WhatsApp Now
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition"
              >
                See our prices
              </a>
            </div>
            <p className="mt-8 text-sm text-emerald-200/90">
              Available in English · Casablanca · Rabat · Marrakech · All Morocco
            </p>
          </div>
        </section>

        {/* SECTION 2 — Problems */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="problems-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="problems-heading" className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Computer Problems Do We Fix?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Gauge,
                  title: "Slow computer",
                  text: "Your PC takes forever to start or open apps? We&apos;ll have it running fast again.",
                },
                {
                  icon: Bug,
                  title: "Virus & malware removal",
                  text: "Pop-ups, redirects, suspicious activity? We remove threats completely.",
                },
                {
                  icon: Monitor,
                  title: "Windows reinstall",
                  text: "Blue screen, corrupted Windows, startup loops — clean reinstall included.",
                },
                {
                  icon: HardDrive,
                  title: "Data recovery",
                  text: "Deleted files, formatted drive, corrupted USB — we recover your data.",
                },
                {
                  icon: Printer,
                  title: "Printer setup",
                  text: "WiFi printer not working? We configure major brands remotely.",
                },
                {
                  icon: AlertTriangle,
                  title: "Blue screen (BSOD)",
                  text: "Windows crashing repeatedly? We diagnose and fix the root cause.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-emerald-300 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6" aria-hidden />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — How it works */}
        <section className="py-16 md:py-20 bg-slate-100" aria-labelledby="how-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="how-heading" className="text-2xl md:text-3xl font-bold text-center mb-12">
              How Does Remote Computer Repair Work?
            </h2>
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Contact us on WhatsApp",
                  text: "Send us a message in English describing your problem. We respond in under 15 minutes.",
                },
                {
                  step: 2,
                  title: "Download AnyDesk (free)",
                  text: "We send you a link. You download AnyDesk — secure remote access used by IT professionals worldwide.",
                },
                {
                  step: 3,
                  title: "We connect & fix",
                  text: "Our technician connects to your PC. You watch everything on your screen. Nothing happens without your permission.",
                },
                {
                  step: 4,
                  title: "Pay after the fix",
                  text: "Once your problem is solved and you're satisfied, you pay. If we can't fix it — you owe nothing.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 flex gap-3 items-start text-sm text-slate-700 bg-white border border-slate-200 rounded-xl p-4">
              <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
              <span>
                <strong className="text-slate-900">Security:</strong> Your connection is encrypted. You can
                disconnect at any time. We never access your personal files without permission.
              </span>
            </p>
          </div>
        </section>

        {/* SECTION 4 — Pricing */}
        <section id="pricing" className="py-16 md:py-20 bg-white scroll-mt-24" aria-labelledby="pricing-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-center mb-10">
              Transparent pricing — no hidden fees
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-4 px-4 font-semibold">Service</th>
                    <th className="py-4 px-4 font-semibold">Price</th>
                    <th className="py-4 px-4 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PRICING.map((row) => (
                    <tr key={row.service} className="bg-white hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{row.service}</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">{row.price}</td>
                      <td className="py-3 px-4 text-slate-600">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-slate-600 max-w-2xl mx-auto">
              All prices include tax. Payment via cash, bank transfer or CIH Mobile. No payment until your
              problem is solved.
            </p>
          </div>
        </section>

        {/* SECTION 5 — Why */}
        <section className="py-16 md:py-20 bg-slate-50" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why choose AlloSupport in Morocco?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Globe,
                  title: "English support",
                  text: "We speak English fluently. No language barrier, no frustration.",
                },
                {
                  icon: Shield,
                  title: "Pay after fix",
                  text: "Unlike many local shops, you only pay when your problem is fully solved.",
                },
                {
                  icon: Zap,
                  title: "15-minute response",
                  text: "WhatsApp us — a technician answers in under 15 minutes, any day of the week.",
                },
                {
                  icon: MapPin,
                  title: "All Morocco",
                  text: "Casablanca, Rabat, Marrakech, Fes, Agadir, Tangier — fully remote.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                  <item.icon className="w-8 h-8 text-emerald-600 mb-3" aria-hidden />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — Testimonials */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="reviews-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold text-center mb-12">
              What our clients say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Fixed my laptop in 30 minutes while I was working in my Marrakech riad. Incredible service.",
                  author: "David M.",
                  place: "expat, Marrakech",
                },
                {
                  quote:
                    "My PC had a virus and was completely unusable. AlloSupport removed everything and installed antivirus in one session. Highly recommended.",
                  author: "Sarah K.",
                  place: "Casablanca",
                },
                {
                  quote:
                    "As a foreigner in Morocco, finding English-speaking IT help was impossible — until AlloSupport. Fast, honest and affordable.",
                  author: "James T.",
                  place: "Rabat",
                },
              ].map((t) => (
                <blockquote
                  key={t.author}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col"
                >
                  <div className="flex gap-1 text-amber-400 mb-3" aria-label="5 stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-slate-900">
                    — {t.author}
                    <span className="font-normal text-slate-500">, {t.place}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — Cities */}
        <section id="cities" className="py-16 md:py-20 bg-slate-100" aria-labelledby="cities-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="cities-heading" className="text-2xl md:text-3xl font-bold text-center mb-8">
              Computer repair available across Morocco
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re an expat, tourist or English-speaking professional in Morocco, AlloSupport
              provides remote IT support in your language — no matter which city you&apos;re in.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/casablanca", label: "Computer repair Casablanca" },
                { href: "/rabat", label: "Computer repair Rabat" },
                { href: "/marrakech", label: "Computer repair Marrakech" },
                { href: "/fes", label: "Computer repair Fes" },
                { href: "/agadir", label: "Computer repair Agadir" },
                {
                  href: "/depannage-informatique",
                  label: "Computer repair Tangier",
                  note: "Remote — same service (city page coming soon)",
                },
              ].map((city) => (
                <li key={city.href + city.label}>
                  <Link
                    href={city.href}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" aria-hidden />
                      {city.label}
                    </span>
                    {"note" in city && city.note ? (
                      <span className="text-xs font-normal text-slate-500">{city.note}</span>
                    ) : (
                      <span className="text-slate-400" aria-hidden>
                        →
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 py-4 px-5 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-100 transition [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get your computer fixed today</h2>
            <p className="text-emerald-100 mb-8 leading-relaxed">
              Stop struggling with a slow or broken computer. Our English-speaking technician is available
              right now — 7 days a week, 8am to 11pm.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-10">
              <a
                href={WHATSAPP_EN}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                WhatsApp us now — it&apos;s free
              </a>
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition"
              >
                <Phone className="w-5 h-5" aria-hidden />
                Call us: {GOOGLE_BUSINESS.PHONE_FORMATTED}
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-emerald-100">
              <li className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" aria-hidden /> English spoken
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" aria-hidden /> Pay after fix
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" aria-hidden /> 7 days / week
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" aria-hidden /> All Morocco
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 10 — Internal links */}
        <section className="py-14 bg-slate-100 border-t border-slate-200" aria-label="Related services">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold mb-4">Related services</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: "/recuperation-donnees", label: "Data recovery Morocco" },
                { href: "/antivirus-maroc", label: "Antivirus installation Morocco" },
                { href: "/formatage-pc", label: "PC formatting Morocco" },
                { href: "/support-pme", label: "IT support for business" },
                { href: "/casablanca", label: "Computer repair Casablanca" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-700 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {link.label}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
              <li className="sm:col-span-2 pt-2 border-t border-slate-200 mt-2">
                <Link href="/depannage-informatique" className="text-slate-700 hover:text-emerald-700 underline">
                  Cette page en français (dépannage informatique)
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
