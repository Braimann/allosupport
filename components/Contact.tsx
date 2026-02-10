"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertTriangle,
} from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="devis" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contact & Devis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demandez votre{" "}
            <span className="text-orange-500">Devis Gratuit</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Décrivez votre besoin et recevez une proposition personnalisée sous 24h.
            Audit parc informatique gratuit pour les PME marocaines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center text-center space-y-8 border border-gray-100">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              {mounted && <Send className="w-10 h-10 text-orange-600" />}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à obtenir votre devis personnalisé ?
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Accédez à notre formulaire complet pour nous détailler votre besoin et recevoir une estimation précise sous 24h.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Demander mon Devis Gratuit</span>
              <span className="flex items-center justify-center w-5 h-5">
                {mounted && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
            </Link>

            <p className="text-sm text-gray-500">
              Réponse garantie sous 3h pour les urgences.
              <br />
              Audit gratuit pour les PME.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Urgence Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                {mounted && <AlertTriangle className="w-8 h-8" />}
                <h3 className="text-xl font-bold">Urgence Informatique ?</h3>
              </div>
              <p className="text-white/90 mb-6">
                Panne critique, virus, perte de données ? Notre équipe SOS intervient
                en moins de 30 minutes à Casablanca et Rabat.
              </p>
              <a
                href="tel:+212775237038"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                suppressHydrationWarning
              >
                <span className="flex items-center justify-center w-5 h-5">
                  {mounted && <Phone className="w-5 h-5" />}
                </span>
                Appeler maintenant
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+212775237038"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
                  suppressHydrationWarning
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    {mounted && <Phone className="w-6 h-6 text-blue-600" />}
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-gray-500">07 75 23 70 38</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@maroctech-solutions.ma"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
                  suppressHydrationWarning
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    {mounted && <Mail className="w-6 h-6 text-green-600" />}
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-500">contact@maroctech-solutions.ma</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    {mounted && <MapPin className="w-6 h-6 text-purple-600" />}
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-gray-500">
                      Boulevard Zerktouni, Casablanca, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    {mounted && <Clock className="w-6 h-6 text-orange-600" />}
                  </div>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-gray-500">Lun - Ven : 9h00 - 18h00</p>
                    <p className="text-gray-500">Urgences : 24h/24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TVA Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-800 text-sm">
                <strong>💼 Facturation professionnelle :</strong> Toutes nos prestations
                sont facturées avec TVA récupérable. Idéal pour les entreprises et PME
                marocaines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
