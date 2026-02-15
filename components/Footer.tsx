import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Facebook,
  Monitor,
  MessageCircle,
  Star,
  Share2,
} from "lucide-react";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const socialLinks: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }>; ariaLabel: string }> = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AlloSupportMaroc",
    icon: Facebook,
    ariaLabel: "Suivez AlloSupport sur Facebook - Dépannage Informatique Maroc",
  },
  {
    name: "WhatsApp Business",
    href: `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour dépannage informatique")}`,
    icon: MessageCircle,
    ariaLabel: "Contactez AlloSupport via WhatsApp Business",
  },
];

const columnServices: Array<{ href: string; label: string }> = [
  { href: "/services/depannage-pc-mac", label: "Dépannage PC & Mac" },
  { href: "/services/suppression-virus", label: "Suppression Virus" },
  { href: "/services/recuperation-donnees", label: "Récupération Données" },
  { href: "/services/infogerance-pme", label: "Infogérance PME" },
  { href: "/services/cybersecurite", label: "Cybersécurité" },
  { href: "/services/installation-config", label: "Installation & Config" },
  { href: "/services/email-cloud", label: "Email & Cloud" },
  { href: "/services/reseau-wifi", label: "Réseau & WiFi" },
];

const columnGuidesBlog: Array<{ href: string; label: string }> = [
  { href: "/pc-lent-solution", label: "PC Lent Solution" },
  { href: "/blog/mon-pc-est-lent-10-solutions-simples-pour-laccelerer-special-maroc", label: "10 Solutions PC Lent" },
  { href: "/blog/recuperation-donnees-disque-dur-maroc", label: "Récupération Données Maroc" },
  { href: "/blog/windows-11-vs-10-maroc-2026", label: "Windows 11 vs 10 Maroc" },
  { href: "/blog/ransomware-maroc-proteger-donnees-entreprise", label: "Protéger Ransomware" },
  { href: "/blog/maintenance-preventive-pc-entreprise-maroc", label: "Maintenance Préventive" },
  { href: "/blog/google-workspace-vs-office-365-pme-maroc", label: "Google Workspace vs Office 365" },
  { href: "/blog/teletravail-maroc-equipement-informatique", label: "Télétravail Équipement" },
];

const columnVilles: Array<{ href: string; label: string }> = [
  { href: "/casablanca", label: "Casablanca" },
  { href: "/rabat", label: "Rabat" },
  { href: "/marrakech", label: "Marrakech" },
  { href: "/fes", label: "Fès" },
  { href: "/agadir", label: "Agadir" },
  { href: "/formatage-pc", label: "Formatage PC" },
  { href: "/depannage-informatique", label: "Dépannage Informatique" },
  { href: "/virus-ordinateur-maroc", label: "Virus Ordinateur" },
];

const columnEntreprise: Array<{ href: string; label: string }> = [
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/devis", label: "Demander un Devis" },
  { href: "/avis", label: "Avis Clients" },
  { href: "/mentions-legales", label: "Mentions Légales" },
  { href: "/politique-confidentialite", label: "Politique de Confidentialité" },
];

function FooterNavColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-lg font-bold mb-4 text-white">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer - 4 colonnes desktop, 1 colonne mobile */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterNavColumn title="Services" links={columnServices} />
          <FooterNavColumn title="Guides & Blog" links={columnGuidesBlog} />
          <FooterNavColumn title="Villes" links={columnVilles} />
          <FooterNavColumn title="Entreprise" links={columnEntreprise} />
        </div>

        {/* Bloc Logo + Contact + Social (full width sous les colonnes) */}
        <div className="mt-12 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">AlloSupport</span>
                <span className="text-xl font-bold text-emerald-500">.ma</span>
              </Link>
              <p className="text-gray-400 text-sm max-w-xs mb-4">
                Dépannage informatique à distance partout au Maroc. Intervention en 15 minutes.
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  {GOOGLE_BUSINESS.PHONE_FORMATTED}
                </a>
                <a
                  href={GOOGLE_BUSINESS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  WhatsApp
                </a>
                <a
                  href="mailto:contact@allosupport.ma"
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  contact@allosupport.ma
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lun-Sam 8h-20h</span>
                </div>
              </div>
            </div>
            <address className="not-italic text-gray-400 text-sm shrink-0" itemScope itemType="https://schema.org/PostalAddress">
              <span className="font-semibold text-gray-300 flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Siège
              </span>
              <span itemProp="addressLocality">Casablanca</span>, <span itemProp="addressCountry">Maroc</span>
            </address>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon, ariaLabel }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                  aria-label={ariaLabel}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Avis Google + Partage */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={GOOGLE_BUSINESS.REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              <Star className="w-5 h-5 fill-current" />
              Laisser un Avis Google
            </a>
            <a
              href={GOOGLE_BUSINESS.SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              <Share2 className="w-5 h-5" />
              Notre Profil Google
            </a>
          </div>
        </div>
      </div>

      {/* CTA Urgence */}
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold text-center sm:text-left">
              Urgence informatique ? Intervention en 15 minutes.
            </p>
            <a
              href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai une urgence informatique")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AlloSupport.ma · Dépannage informatique à distance Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
