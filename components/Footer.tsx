import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Monitor,
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
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">MarocTech</span>
                <span className="text-xl font-bold text-accent-500">
                  {" "}Solutions
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour le support informatique,
              l&apos;infogérance et le référencement Google au Maroc.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+212522000000"
                className="flex items-center gap-3 text-gray-300 hover:text-accent-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+212 5 22 00 00 00</span>
              </a>
              <a
                href="mailto:contact@maroctech-solutions.ma"
                className="flex items-center gap-3 text-gray-300 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary-400" />
                <span>contact@maroctech-solutions.ma</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span>Boulevard Zerktouni, Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-primary-400" />
                <span>Lun - Ven : 9h00 - 18h00</span>
              </div>
            </div>
          </div>

          {/* Services IT */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services IT</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services SEO */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services SEO</h3>
            <ul className="space-y-3">
              {seoServices.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
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
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook MarocTech Solutions"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn MarocTech Solutions"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram MarocTech Solutions"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white">
                🚨 Urgence informatique ? Nous intervenons en 30 minutes !
              </p>
              <p className="text-white/80 text-sm">
                SOS informatique disponible pour les entreprises à Casablanca et
                Rabat.
              </p>
            </div>
            <a
              href="tel:+212522000000"
              className="bg-white text-accent-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © 2026 MarocTech Solutions. Tous droits réservés. SARL au capital
              de 100 000 MAD.
            </p>
            <div className="flex gap-6">
              <a href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
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
