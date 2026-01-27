import {
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Monitor,
  MessageCircle,
} from "lucide-react";

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
              Dépannage informatique à distance au Maroc. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@allosupport.ma"
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>contact@allosupport.ma</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>Disponible 24/7</span>
              </div>
            </div>
          </div>

          {/* Services Particuliers */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Particuliers</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/depannage-pc-mac"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Dépannage PC & Mac
                </a>
              </li>
              <li>
                <a
                  href="/services/suppression-virus"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Suppression Virus
                </a>
              </li>
              <li>
                <a
                  href="/services/installation-config"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Installation & Config
                </a>
              </li>
              <li>
                <a
                  href="/services/recuperation-donnees"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Récupération Données
                </a>
              </li>
            </ul>
          </div>

          {/* Services Entreprises */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Entreprises</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/infogerance-pme"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Infogérance PME
                </a>
              </li>
              <li>
                <a
                  href="/services/cybersecurite"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Cybersécurité
                </a>
              </li>
              <li>
                <a
                  href="/services/reseau-wifi"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Réseau & Wi-Fi
                </a>
              </li>
              <li>
                <a
                  href="/services/email-cloud"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Email Pro & Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Zones & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-3 mb-8">
              {zones.map((zone, index) => (
                <li key={index}>
                  <a
                    href="#zones"
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {zone}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h3 className="text-lg font-bold mb-4 text-white">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Facebook AlloSupport.ma"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="LinkedIn AlloSupport.ma"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Instagram AlloSupport.ma"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
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
              href="https://wa.me/212770303940?text=Bonjour AlloSupport, j'ai une urgence informatique"
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
              © 2026 AlloSupport.ma. Tous droits réservés.
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
