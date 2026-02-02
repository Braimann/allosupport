"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Plus, Trash2, Calculator, Building2, User } from "lucide-react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export default function InvoiceGeneratorPage() {
  const [invoiceType, setInvoiceType] = useState<"devis" | "facture">("devis");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [dueDate, setDueDate] = useState("");
  
  // Client Info
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  
  // Company Info
  const [companyName, setCompanyName] = useState("AlloSupport.ma");
  const [companyEmail, setCompanyEmail] = useState("contact@allosupport.ma");
  const [companyPhone, setCompanyPhone] = useState("+212 6 XX XX XX XX");
  const [companyAddress, setCompanyAddress] = useState("Casablanca, Maroc");
  
  // Items
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "", quantity: 1, unitPrice: 0, total: 0 },
  ]);
  
  const [notes, setNotes] = useState("");
  const [taxRate, setTaxRate] = useState(0);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        description: "",
        quantity: 1,
        unitPrice: 0,
        total: 0,
      },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === "quantity" || field === "unitPrice") {
            updated.total = updated.quantity * updated.unitPrice;
          }
          return updated;
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax;

  const generatePDF = () => {
    if (!clientName || !invoiceNumber || items.some((item) => !item.description)) {
      alert("Veuillez remplir tous les champs obligatoires (numéro, client, articles)");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPos = 20;

    // Header with color
    doc.setFillColor(16, 185, 129); // emerald-500
    doc.rect(0, 0, pageWidth, 50, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(companyName, 20, 25);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(invoiceType === "devis" ? "DEVIS" : "FACTURE", pageWidth - 20, 25, { align: "right" });
    doc.text(`N° ${invoiceNumber}`, pageWidth - 20, 35, { align: "right" });
    const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    doc.text(`Date: ${formattedDate}`, pageWidth - 20, 45, { align: "right" });

    yPos = 60;

    // Company Info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text("Émetteur:", 20, yPos);
    yPos += 7;
    doc.text(companyName, 20, yPos);
    yPos += 5;
    doc.text(companyAddress, 20, yPos);
    yPos += 5;
    doc.text(`Email: ${companyEmail}`, 20, yPos);
    yPos += 5;
    doc.text(`Tél: ${companyPhone}`, 20, yPos);

    // Client Info
    yPos = 60;
    doc.text("Client:", pageWidth - 20, yPos, { align: "right" });
    yPos += 7;
    doc.text(clientName, pageWidth - 20, yPos, { align: "right" });
    if (clientAddress) {
      yPos += 5;
      doc.text(clientAddress, pageWidth - 20, yPos, { align: "right" });
    }
    if (clientEmail) {
      yPos += 5;
      doc.text(`Email: ${clientEmail}`, pageWidth - 20, yPos, { align: "right" });
    }
    if (clientPhone) {
      yPos += 5;
      doc.text(`Tél: ${clientPhone}`, pageWidth - 20, yPos, { align: "right" });
    }

    yPos = 100;

    // Items Table
    doc.setFillColor(245, 245, 245);
    doc.rect(20, yPos - 5, pageWidth - 40, 15, "F");
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Description", 25, yPos + 5);
    doc.text("Qté", 120, yPos + 5);
    doc.text("Prix unit.", 140, yPos + 5);
    doc.text("Total", pageWidth - 25, yPos + 5, { align: "right" });

    yPos += 20;

    items.forEach((item) => {
      if (item.description) {
        const descLines = doc.splitTextToSize(item.description, 80);
        const lineHeight = Math.max(descLines.length * 5, 10);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(descLines, 25, yPos + 5);
        doc.text(item.quantity.toString(), 120, yPos + 5);
        doc.text(`${item.unitPrice.toFixed(2)} MAD`, 140, yPos + 5);
        doc.text(`${item.total.toFixed(2)} MAD`, pageWidth - 25, yPos + 5, { align: "right" });
        
        yPos += lineHeight + 5;
      }
    });

    yPos += 10;

    // Totals
    const totalsX = pageWidth - 80;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Sous-total:", totalsX, yPos);
    doc.text(`${subtotal.toFixed(2)} MAD`, pageWidth - 20, yPos, { align: "right" });
    
    if (taxRate > 0) {
      yPos += 8;
      doc.text(`TVA (${taxRate}%):`, totalsX, yPos);
      doc.text(`${tax.toFixed(2)} MAD`, pageWidth - 20, yPos, { align: "right" });
    }

    yPos += 10;
    doc.setFillColor(16, 185, 129);
    doc.rect(totalsX - 5, yPos - 8, pageWidth - totalsX, 15, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL:", totalsX, yPos + 5);
    doc.text(`${total.toFixed(2)} MAD`, pageWidth - 20, yPos + 5, { align: "right" });

    yPos += 25;

    // Notes
    let noteLines: string[] = [];
    if (notes) {
      if (yPos > pageHeight - 30) {
        doc.addPage();
        yPos = 20;
      }
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.text("Notes:", 20, yPos);
      yPos += 7;
      doc.setFont("helvetica", "normal");
      noteLines = doc.splitTextToSize(notes, pageWidth - 40);
      doc.text(noteLines, 20, yPos);
    }

    // Due Date
    if (invoiceType === "facture" && dueDate) {
      yPos += noteLines.length > 0 ? noteLines.length * 5 + 5 : 0;
      if (yPos > pageHeight - 30) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.text(`Date d'échéance: ${new Date(dueDate).toLocaleDateString("fr-FR")}`, 20, yPos);
    }

    // Footer
    yPos = pageHeight - 20;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(128, 128, 128);
    doc.text(
      `${companyName} - ${companyAddress} | ${companyEmail} | ${companyPhone}`,
      pageWidth / 2,
      yPos,
      { align: "center" }
    );

    // Save
    const fileName = `${invoiceType === "devis" ? "Devis" : "Facture"}_${invoiceNumber}_${Date.now()}.pdf`;
    doc.save(fileName);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg"
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Générateur de Devis et Factures
            </h1>
            <p className="text-lg text-gray-600">
              Créez des devis et factures professionnels en PDF gratuitement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Informations</h2>

              {/* Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de document
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInvoiceType("devis")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      invoiceType === "devis"
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    <span className="font-medium text-gray-900">Devis</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvoiceType("facture")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      invoiceType === "facture"
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    <span className="font-medium text-gray-900">Facture</span>
                  </button>
                </div>
              </div>

              {/* Invoice Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro {invoiceType === "devis" ? "devis" : "facture"} *
                  </label>
                  <input
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="DEV-2024-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                {invoiceType === "facture" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date d'échéance
                    </label>
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                )}
              </div>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-600" />
                  Informations Client
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom / Raison sociale *
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Nom du client"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                    <input
                      type="text"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  Informations Émetteur
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'entreprise *
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={companyPhone}
                        onChange={(e) => setCompanyPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                    <input
                      type="text"
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Items & Preview Section */}
            <div className="space-y-6">
              {/* Items */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
                  <button
                    type="button"
                    onClick={addItem}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>

                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600">
                          Article {idx + 1}
                        </span>
                        {items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Description *
                          </label>
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) =>
                              updateItem(item.id, "description", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            placeholder="Description de l'article"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Quantité
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateItem(item.id, "quantity", parseInt(e.target.value) || 1)
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Prix unit. (MAD)
                            </label>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.unitPrice}
                              onChange={(e) =>
                                updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Total
                            </label>
                            <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-semibold text-gray-900">
                              {item.total.toFixed(2)} MAD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals & Options */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Totaux</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Sous-total:</span>
                    <span className="font-semibold">{subtotal.toFixed(2)} MAD</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      TVA (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={taxRate}
                      onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  {taxRate > 0 && (
                    <div className="flex justify-between text-gray-700">
                      <span>TVA ({taxRate}%):</span>
                      <span className="font-semibold">{tax.toFixed(2)} MAD</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold text-emerald-600 pt-3 border-t border-gray-200">
                    <span>TOTAL:</span>
                    <span>{total.toFixed(2)} MAD</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (optionnel)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Notes additionnelles..."
                  />
                </div>

                <button
                  onClick={generatePDF}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Générer et Télécharger le PDF
                </button>
              </div>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-12 space-y-6">
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Générateur de Devis et Factures Gratuit en Ligne
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Créez des devis et factures professionnels en quelques minutes avec notre générateur gratuit.
                Aucune inscription requise, aucun abonnement. Générez vos documents en PDF et téléchargez-les
                instantanément. Parfait pour les freelances, les PME, les artisans et tous les professionnels
                qui ont besoin de documents de facturation professionnels.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre outil est <strong>100% gratuit</strong> et fonctionne directement dans votre navigateur.
                Vos données restent privées et ne sont jamais stockées sur nos serveurs. Créez autant de devis
                et factures que vous le souhaitez, sans limite.
              </p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Fonctionnalités du Générateur
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Devis et Factures</h3>
                  <p className="text-gray-700 text-sm">
                    Créez des devis pour vos prospects ou des factures pour vos clients. Basculez facilement
                    entre les deux types de documents.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Calcul Automatique</h3>
                  <p className="text-gray-700 text-sm">
                    Les totaux sont calculés automatiquement. Ajoutez la TVA si nécessaire et obtenez le total
                    final instantanément.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ PDF Professionnel</h3>
                  <p className="text-gray-700 text-sm">
                    Téléchargez vos documents en PDF haute qualité, prêts à être envoyés à vos clients ou
                    imprimés.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Personnalisable</h3>
                  <p className="text-gray-700 text-sm">
                    Personnalisez les informations de votre entreprise, ajoutez votre logo et vos coordonnées.
                    Créez des documents à votre image.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Articles Illimités</h3>
                  <p className="text-gray-700 text-sm">
                    Ajoutez autant d'articles que nécessaire. Chaque article est calculé automatiquement avec
                    quantité et prix unitaire.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Gratuit et Sans Limite</h3>
                  <p className="text-gray-700 text-sm">
                    Utilisez l'outil autant que vous le souhaitez, sans abonnement ni limite. Créez des centaines
                    de devis et factures gratuitement.
                  </p>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pour Qui est Cet Outil ?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    💼 Freelances et Indépendants
                  </h3>
                  <p className="text-gray-700">
                    Créez rapidement des devis pour vos clients et des factures après la réalisation de vos
                    prestations. Idéal pour les développeurs, graphistes, consultants, et tous les
                    professionnels indépendants.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🏢 Petites et Moyennes Entreprises
                  </h3>
                  <p className="text-gray-700">
                    Gérez facilement vos devis et factures sans investir dans un logiciel coûteux. Parfait pour
                    les PME qui ont besoin d'un outil simple et efficace pour leur facturation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🔧 Artisans et Prestataires de Services
                  </h3>
                  <p className="text-gray-700">
                    Créez des devis pour vos interventions et des factures après la réalisation des travaux.
                    Idéal pour les plombiers, électriciens, réparateurs, et tous les artisans.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🛒 Commerçants et Vendeurs
                  </h3>
                  <p className="text-gray-700">
                    Générez des devis pour vos clients et des factures pour vos ventes. Parfait pour les
                    commerçants qui ont besoin de documents professionnels.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Questions Fréquentes
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    L'outil est-il vraiment gratuit ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, notre générateur de devis et factures est 100% gratuit. Aucun abonnement, aucune
                    limite d'utilisation. Créez autant de documents que vous le souhaitez.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Dois-je créer un compte pour utiliser l'outil ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Non, aucune inscription n'est requise. Utilisez l'outil immédiatement sans créer de compte
                    ni fournir d'informations personnelles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Mes données sont-elles stockées ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Non, toutes les données restent dans votre navigateur. Aucune information n'est envoyée à
                    nos serveurs. Vos devis et factures sont générés localement sur votre ordinateur.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Puis-je personnaliser le design du PDF ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, vous pouvez personnaliser toutes les informations : nom de l'entreprise, coordonnées,
                    logo (via les notes), et bien plus. Le PDF généré est professionnel et prêt à être utilisé.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Puis-je ajouter ma TVA ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, vous pouvez ajouter un taux de TVA personnalisé. Le calcul est automatique et le total
                    inclut la TVA.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Les PDF générés sont-ils conformes à la législation marocaine ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Les PDF générés contiennent toutes les informations essentielles (numéro, date, client,
                    articles, totaux). Pour une conformité totale, consultez un expert-comptable pour vous
                    assurer que vos documents respectent toutes les obligations légales.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'aide avec votre facturation ?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Nos experts sont disponibles pour vous aider avec tous vos besoins informatiques et de gestion.
                Contactez-nous via WhatsApp pour une assistance rapide !
              </p>
              <a
                href="https://wa.me/212775237038?text=Bonjour%20AlloSupport%2C%20j'ai%20besoin%20d'aide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Contacter un expert
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
