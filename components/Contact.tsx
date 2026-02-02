"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Formulaire de demande de devis
            </h3>

            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700">
                  Merci ! Votre demande a été envoyée. Nous vous recontactons sous 24h.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="entreprise"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.ma"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+212 6 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="depannage">Dépannage & Réparation PC</option>
                  <option value="infogerance">Contrat Infogérance PME</option>
                  <option value="reseau">Installation Réseau Entreprise</option>
                  <option value="securite">Sécurité Informatique</option>
                  <option value="seo">SEO & Création Site Web</option>
                  <option value="audit">Audit Parc Informatique (Gratuit)</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Décrivez votre besoin *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez votre problème ou besoin en détail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer ma demande de devis
              </button>

              <p className="text-xs text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                Vos données ne seront jamais partagées.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Urgence Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8" />
                <h3 className="text-xl font-bold">Urgence Informatique ?</h3>
              </div>
              <p className="text-white/90 mb-6">
                Panne critique, virus, perte de données ? Notre équipe SOS intervient
                en moins de 30 minutes à Casablanca et Rabat.
              </p>
              <a
                href="tel:+212775237038"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
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
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-gray-500">07 75 23 70 38</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@maroctech-solutions.ma"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-500">contact@maroctech-solutions.ma</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
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
                    <Clock className="w-6 h-6 text-orange-600" />
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
