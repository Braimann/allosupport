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

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AlloSupportMaroc",
    icon: Facebook,
    ariaLabel:
      "Suivez AlloSupport sur Facebook - Dépannage Informatique Maroc",
  },
  {
    name: "WhatsApp Business",
    href: `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour dépannage informatique")}`,
    icon: MessageCircle,
    ariaLabel: "Contactez AlloSupport via WhatsApp Business",
  },
];

const services = [
  "Dépannage PC",
  "Réparation PC portable",
  "Infogérance PME",
  "Support informatique",
  "Installation réseau",
  "Sécurité informatique",
];

const seoServices = [
  "Création site web",
  "Référencement Google",
  "Google My Business",
  "Google Ads",
  "Audit SEO",
];

const zones = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fès",
  "Tout le Maroc",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">AlloSupport</span>
                <span className="text-xl font-bold text-emerald-500">
                  .ma
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Service de dépannage informatique à domicile. Nous nous déplaçons chez vous partout au Maroc.
            </p>

            {/* Siège Social */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-emerald-400" />
                Siège Social
              </h3>
              <address className="not-italic text-gray-400 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <strong itemProp="name" className="text-gray-300">AlloSupport Maroc</strong><br />
                <span itemProp="streetAddress">Service à domicile</span><br />
                <span itemProp="addressLocality">Casablanca</span>, <span itemProp="postalCode">20000</span><br />
                <span itemProp="addressCountry">Maroc</span>
                <br />
                <br />
                Tél: <a href={`tel:${GOOGLE_BUSINESS.PHONE}`} itemProp="telephone" className="hover:text-white text-emerald-400">
                  {GOOGLE_BUSINESS.PHONE_FORMATTED}
                </a>
              </address>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>{GOOGLE_BUSINESS.PHONE_FORMATTED}</span>
              </a>
              <a
                href={GOOGLE_BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Business</span>
              </a>
              <a
                href="mailto:contact@allosupport.ma"
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>contact@allosupport.ma</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>Lun-Sam 8h-20h · Urgences 24/7</span>
              </div>
            </div>
          </div>

          {/* Services Particuliers - liens SEO vers pages services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Particuliers</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/depannage-informatique"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Dépannage informatique
                </a>
              </li>
              <li>
                <a
                  href="/virus-ordinateur-maroc"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Suppression Virus
                </a>
              </li>
              <li>
                <a
                  href="/pc-lent-solution"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  PC lent solution
                </a>
              </li>
              <li>
                <a
                  href="/recuperation-donnees"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Récupération Données
                </a>
              </li>
            </ul>
          </div>

          {/* Services Entreprises - liens SEO vers support PME */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Entreprises</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/support-pme"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Infogérance PME
                </a>
              </li>
              <li>
                <a
                  href="/maintenance-informatique"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Maintenance informatique
                </a>
              </li>
              <li>
                <a
                  href="/antivirus-maroc"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Réseau & Wi-Fi
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Tous nos services
                </a>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention (remplace adresse) */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <a href="/casablanca" className="hover:text-white transition-colors">Casablanca</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <a href="/rabat" className="hover:text-white transition-colors">Rabat</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <a href="/fes" className="hover:text-white transition-colors">Fès</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <a href="/marrakech" className="hover:text-white transition-colors">Marrakech</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <a href="/agadir" className="hover:text-white transition-colors">Agadir</a>
              </li>
            </ul>

            {/* Social Links - Facebook Page + WhatsApp Business (SEO) */}
            <h3 className="text-lg font-bold mb-4 text-white">Suivez-nous</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ name, href, icon: Icon, ariaLabel }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={GOOGLE_BUSINESS.REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-4 rounded-xl font-semibold transition"
            >
              <Star className="w-5 h-5 fill-current" />
              Laisser un Avis Google
            </a>
            <a
              href={GOOGLE_BUSINESS.SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition"
            >
              <Share2 className="w-5 h-5" />
              Notre Profil Google
            </a>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white">
                🚨 Urgence informatique ? Intervention en 15 minutes !
              </p>
              <p className="text-white/90 text-sm">
                Dépannage à distance disponible 24/7 partout au Maroc.
              </p>
            </div>
            <a
              href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai une urgence informatique")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © 2026 AlloSupport Maroc - Service à domicile | Tous droits réservés
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/a-propos" className="hover:text-white transition-colors">
                À propos
              </a>
              <span className="text-gray-600">•</span>
              <a href="/faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <span className="text-gray-600">•</span>
              <a href="/devis" className="hover:text-white transition-colors">
                Devis gratuit
              </a>
              <span className="text-gray-600">•</span>
              <a href="/plan-du-site" className="hover:text-white transition-colors">
                Plan du site
              </a>
              <span className="text-gray-600">•</span>
              <a href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span className="text-gray-600">•</span>
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <span className="text-gray-600">•</span>
              <a href="/cgu" className="hover:text-white transition-colors">
                CGU
              </a>
              <span className="text-gray-600">•</span>
              <a href="/cgv" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
