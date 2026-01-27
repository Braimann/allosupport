import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Building2, User, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Mentions Légales | AlloSupport.ma",
  description:
    "Mentions légales d'AlloSupport.ma - Informations légales, directeur de publication, hébergeur, conformité légale marocaine.",
  robots: "index, follow",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 shadow-lg"
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-600">
              Informations légales et conformité - AlloSupport.ma
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-emerald-500" />
                1. Éditeur du Site
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Raison sociale :</p>
                    <p className="text-gray-700">AlloSupport.ma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresse :</p>
                    <p className="text-gray-700">Casablanca, Maroc</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email :</p>
                    <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">
                      contact@allosupport.ma
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Site web :</p>
                    <a href="https://allosupport.ma" className="text-emerald-600 hover:text-emerald-700">
                      https://allosupport.ma
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Directeur de Publication */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-emerald-500" />
                2. Directeur de Publication
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le directeur de la publication est le représentant légal de l'entreprise AlloSupport.ma.
                Pour toute question concernant le contenu du site, vous pouvez nous contacter à l'adresse
                email : <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">contact@allosupport.ma</a>.
              </p>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-emerald-500" />
                3. Hébergement
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site <strong>allosupport.ma</strong> est hébergé par :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Vercel Inc.</strong>
                  </p>
                  <p className="text-gray-700">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p className="text-gray-700">
                    Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">https://vercel.com</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Propriété Intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                4. Propriété Intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, logos, icônes, vidéos, etc.) est la
                propriété exclusive d'AlloSupport.ma ou de ses partenaires et est protégé par les lois
                marocaines et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
                autorisation écrite préalable d'AlloSupport.ma.
              </p>
            </section>

            {/* Protection des Données */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                5. Protection des Données Personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du
                traitement des données à caractère personnel au Maroc, vous disposez d'un droit d'accès,
                de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pour exercer ces droits, vous pouvez nous contacter à :{" "}
                <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">
                  contact@allosupport.ma
                </a>
                . Pour plus d'informations, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-emerald-600 hover:text-emerald-700">
                  Politique de Confidentialité
                </a>
                .
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies. Pour plus
                d'informations, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-emerald-600 hover:text-emerald-700">
                  Politique de Confidentialité
                </a>
                .
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                7. Limitation de Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AlloSupport.ma s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, AlloSupport.ma ne peut garantir l'exactitude, la
                complétude ou l'actualité des informations mises à disposition sur le site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité
                exclusive. AlloSupport.ma ne pourra être tenu responsable des dommages directs ou indirects
                résultant de l'utilisation du site ou de l'impossibilité de l'utiliser.
              </p>
            </section>

            {/* Liens Externes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                8. Liens Hypertextes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site allosupport.ma peut contenir des liens hypertextes vers d'autres sites présents
                sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site
                allosupport.ma. Il est possible de créer un lien vers la page de présentation de ce site
                sans autorisation expresse de l'éditeur. Aucune autorisation ni demande d'information
                préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un
                lien vers le site de l'éditeur.
              </p>
            </section>

            {/* Droit Applicable */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                9. Droit Applicable et Juridiction Compétente
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit marocain. En cas de litige et à
                défaut d'accord amiable, le litige sera porté devant les tribunaux marocains conformément
                aux règles de compétence en vigueur.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-emerald-600" />
                10. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">
                    contact@allosupport.ma
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Site web :</strong>{" "}
                  <a href="https://allosupport.ma" className="text-emerald-600 hover:text-emerald-700">
                    https://allosupport.ma
                  </a>
                </p>
              </div>
            </section>

            {/* Back Links */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <a
                href="/politique-confidentialite"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                ← Politique de Confidentialité
              </a>
              <span className="text-gray-400">•</span>
              <a href="/cgu" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Conditions Générales d'Utilisation →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
