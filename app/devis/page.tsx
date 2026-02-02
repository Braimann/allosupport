"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, CheckCircle, AlertCircle, Send, RefreshCw, FileText } from "lucide-react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

const problemTypes = [
  { id: "lent", label: "PC lent / Optimisation", price: 250 },
  { id: "virus", label: "Virus / Malware", price: 290 },
  { id: "panne", label: "Panne / Ne démarre plus", price: 350 },
  { id: "installation", label: "Installation logiciel", price: 150 },
  { id: "donnees", label: "Récupération données", price: 350 },
  { id: "reseau", label: "Problème réseau / Wi-Fi", price: 200 },
  { id: "autre", label: "Autre problème", price: 0 },
];

const clientTypes = [
  { id: "particulier", label: "Particulier", multiplier: 1 },
  { id: "pro", label: "Professionnel / PME", multiplier: 1.2 },
];

const urgencyLevels = [
  { id: "normal", label: "Normal (24h)", multiplier: 1 },
  { id: "urgent", label: "Urgent (4h)", multiplier: 1.3 },
  { id: "critique", label: "Critique (15 min)", multiplier: 1.5 },
];

export default function DevisPage() {
  const [selectedProblem, setSelectedProblem] = useState<string>("");
  const [clientType, setClientType] = useState<string>("particulier");
  const [urgency, setUrgency] = useState<string>("normal");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const calculatePrice = () => {
    if (!selectedProblem) {
      alert("Veuillez sélectionner un type de problème");
      return;
    }

    const problem = problemTypes.find((p) => p.id === selectedProblem);
    if (!problem || problem.price === 0) {
      setCalculatedPrice(null);
      return;
    }

    const clientMultiplier = clientTypes.find((c) => c.id === clientType)?.multiplier || 1;
    const urgencyMultiplier = urgencyLevels.find((u) => u.id === urgency)?.multiplier || 1;

    const basePrice = problem.price;
    const finalPrice = Math.round(basePrice * clientMultiplier * urgencyMultiplier);

    setCalculatedPrice(finalPrice);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !selectedProblem) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const problem = problemTypes.find((p) => p.id === selectedProblem);
    const priceText = calculatedPrice
      ? `${calculatedPrice} MAD`
      : "Sur devis (nous vous contacterons)";

    const message = `Bonjour AlloSupport,

Je souhaite un devis pour :
- Type de problème : ${problem?.label || selectedProblem}
- Type de client : ${clientTypes.find((c) => c.id === clientType)?.label}
- Urgence : ${urgencyLevels.find((u) => u.id === urgency)?.label}
- Prix estimé : ${priceText}

Description : ${description || "Non renseignée"}

Mes coordonnées :
- Nom : ${name}
- Email : ${email}
- Téléphone : ${phone}

Merci de me contacter rapidement.`;

    const whatsappUrl = `https://wa.me/212775237038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const resetForm = () => {
    setSelectedProblem("");
    setClientType("particulier");
    setUrgency("normal");
    setDescription("");
    setName("");
    setEmail("");
    setPhone("");
    setCalculatedPrice(null);
    setSubmitted(false);
  };

  const generateInvoicePDF = () => {
    if (!calculatedPrice || !selectedProblem || !name) {
      alert("Veuillez remplir tous les champs et calculer le prix avant de générer le devis");
      return;
    }

    const problem = problemTypes.find((p) => p.id === selectedProblem);
    const clientTypeLabel = clientTypes.find((c) => c.id === clientType)?.label || "";
    const urgencyLabel = urgencyLevels.find((u) => u.id === urgency)?.label || "";
    const date = new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    // Create PDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPos = 20;

    // Header
    doc.setFillColor(16, 185, 129); // emerald-500
    doc.rect(0, 0, pageWidth, 40, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("AlloSupport.ma", 20, 20);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("DEVIS / FACTURE", pageWidth - 20, 20, { align: "right" });
    doc.text(`Date: ${date}`, pageWidth - 20, 30, { align: "right" });

    yPos = 50;

    // Client Info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Informations Client", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Nom: ${name}`, 20, yPos);
    yPos += 7;
    doc.text(`Email: ${email}`, 20, yPos);
    yPos += 7;
    doc.text(`Téléphone: ${phone}`, 20, yPos);
    yPos += 7;
    doc.text(`Type: ${clientTypeLabel}`, 20, yPos);

    yPos += 15;

    // Service Details
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Détails de l'Intervention", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Type de problème: ${problem?.label || selectedProblem}`, 20, yPos);
    yPos += 7;
    doc.text(`Niveau d'urgence: ${urgencyLabel}`, 20, yPos);
    yPos += 7;
    if (description) {
      const descLines = doc.splitTextToSize(`Description: ${description}`, pageWidth - 40);
      doc.text(descLines, 20, yPos);
      yPos += descLines.length * 7;
    }

    yPos += 10;

    // Price Table
    doc.setFillColor(245, 245, 245);
    doc.rect(20, yPos - 5, pageWidth - 40, 30, "F");
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Prix de base", 20, yPos + 5);
    doc.text(`${problem?.price || 0} MAD`, pageWidth - 20, yPos + 5, { align: "right" });
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Multiplicateur client (${clientTypeLabel}): ${clientTypes.find((c) => c.id === clientType)?.multiplier || 1}x`, 20, yPos + 5);
    
    yPos += 10;
    doc.text(`Multiplicateur urgence (${urgencyLabel}): ${urgencyLevels.find((u) => u.id === urgency)?.multiplier || 1}x`, 20, yPos + 5);

    yPos += 15;

    // Total
    doc.setFillColor(16, 185, 129);
    doc.rect(20, yPos - 5, pageWidth - 40, 20, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL ESTIMÉ", 20, yPos + 8);
    doc.text(`${calculatedPrice} MAD`, pageWidth - 20, yPos + 8, { align: "right" });

    yPos += 30;

    // Footer Notes
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    const notes = [
      "Ce devis est valable 30 jours à compter de la date d'émission.",
      "Le prix final peut varier selon la complexité réelle du problème.",
      "Paiement après résolution du problème. Satisfait ou Remboursé.",
      "Pour toute question, contactez-nous : contact@allosupport.ma",
    ];
    
    notes.forEach((note) => {
      if (yPos > pageHeight - 20) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(note, 20, yPos);
      yPos += 7;
    });

    // Company Info Footer
    yPos = pageHeight - 30;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("AlloSupport.ma - Dépannage informatique à distance", pageWidth / 2, yPos, { align: "center" });
    yPos += 5;
    doc.text("Casablanca, Maroc | contact@allosupport.ma | +212 6 XX XX XX XX", pageWidth / 2, yPos, { align: "center" });

    // Save PDF
    const fileName = `Devis_AlloSupport_${name.replace(/\s/g, "_")}_${Date.now()}.pdf`;
    doc.save(fileName);
  };

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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg"
            >
              <Calculator className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculateur de Devis Gratuit
            </h1>
            <p className="text-xl text-gray-600">
              Obtenez une estimation de prix pour votre intervention en quelques clics
            </p>
          </div>

          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Problem Type */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Quel est votre problème ? *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {problemTypes.map((problem) => (
                      <button
                        key={problem.id}
                        type="button"
                        onClick={() => {
                          setSelectedProblem(problem.id);
                          setCalculatedPrice(null);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          selectedProblem === problem.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{problem.label}</span>
                          {problem.price > 0 && (
                            <span className="text-emerald-600 font-bold">
                              {problem.price} MAD
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client Type */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Vous êtes ?
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {clientTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                          setClientType(type.id);
                          setCalculatedPrice(null);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          clientType === type.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <span className="font-medium text-gray-900">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Niveau d'urgence
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {urgencyLevels.map((level) => (
                      <button
                        key={level.id}
                        type="button"
                        onClick={() => {
                          setUrgency(level.id);
                          setCalculatedPrice(null);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          urgency === level.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <span className="font-medium text-gray-900">{level.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Description du problème (optionnel)
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Décrivez brièvement votre problème..."
                  />
                </div>

                {/* Calculate Button */}
                {selectedProblem && (
                  <button
                    type="button"
                    onClick={calculatePrice}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-5 h-5" />
                    Calculer le prix estimé
                  </button>
                )}

                {/* Calculated Price */}
                {calculatedPrice !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center"
                  >
                    <div className="text-sm text-gray-600 mb-2">Prix estimé</div>
                    <div className="text-4xl font-bold text-emerald-600 mb-2">
                      {calculatedPrice} MAD
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Prix indicatif. Le prix final peut varier selon la complexité du problème.
                    </div>
                    <button
                      type="button"
                      onClick={() => generateInvoicePDF()}
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-emerald-600 font-semibold py-2 px-4 rounded-lg transition-colors border border-emerald-200"
                    >
                      <FileText className="w-4 h-4" />
                      Télécharger le devis (PDF)
                    </button>
                  </motion.div>
                )}

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Vos coordonnées *
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="+212 6 XX XX XX XX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer la demande de devis
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Champs obligatoires. Vos données sont confidentielles et ne seront pas partagées.
                </p>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-lg p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Demande envoyée avec succès !
              </h2>
              <p className="text-gray-700 mb-6">
                Nous vous contacterons dans les plus brefs délais pour confirmer votre devis.
              </p>
              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Nouveau devis
              </button>
            </motion.div>
          )}

          {/* Info Section */}
          <div className="mt-8 bg-emerald-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-emerald-600" />
              Important à savoir
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Le prix calculé est une estimation. Le prix final peut varier selon la complexité.</li>
              <li>• Pour les problèmes complexes, nous vous proposerons un devis personnalisé.</li>
              <li>• Tous nos devis sont gratuits et sans engagement.</li>
              <li>• Vous ne payez qu'après la résolution du problème (satisfait ou remboursé).</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
