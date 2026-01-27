"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QrCode, Download, Copy, CheckCircle, Link as LinkIcon, Wifi, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import QRCodeLib from "qrcode";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [qrType, setQrType] = useState<"text" | "url" | "wifi" | "phone" | "email">("text");
  const [copied, setCopied] = useState(false);

  // WiFi fields
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiSecurity, setWifiSecurity] = useState<"WPA" | "WEP" | "nopass">("WPA");

  const generateQR = async () => {
    let qrData = "";

    switch (qrType) {
      case "url":
        qrData = text.startsWith("http") ? text : `https://${text}`;
        break;
      case "wifi":
        if (!wifiSSID) {
          alert("Veuillez entrer le nom du réseau Wi-Fi");
          return;
        }
        qrData = `WIFI:T:${wifiSecurity};S:${wifiSSID};P:${wifiPassword};;`;
        break;
      case "phone":
        qrData = `tel:${text.replace(/\s/g, "")}`;
        break;
      case "email":
        qrData = `mailto:${text}`;
        break;
      default:
        qrData = text;
    }

    if (!qrData) {
      alert("Veuillez entrer du contenu");
      return;
    }

    try {
      const url = await QRCodeLib.toDataURL(qrData, {
        width: 400,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });
      setQrCodeUrl(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
      alert("Erreur lors de la génération du QR code");
    }
  };

  const handleDownload = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `qrcode-${Date.now()}.png`;
    link.click();
  };

  const handleCopy = async () => {
    if (!qrCodeUrl) return;
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying QR code:", error);
      alert("Impossible de copier le QR code. Utilisez le bouton Télécharger.");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg"
            >
              <QrCode className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Générateur de QR Code Gratuit
            </h1>
            <p className="text-lg text-gray-600">
              Créez des QR codes pour URL, texte, Wi-Fi, téléphone, email et plus encore
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type de QR Code
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "text", label: "Texte", icon: LinkIcon },
                    { id: "url", label: "URL", icon: LinkIcon },
                    { id: "wifi", label: "Wi-Fi", icon: Wifi },
                    { id: "phone", label: "Téléphone", icon: Phone },
                    { id: "email", label: "Email", icon: Mail },
                  ].map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                          setQrType(type.id as any);
                          setQrCodeUrl("");
                        }}
                        className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                          qrType === type.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content Input */}
              {qrType === "wifi" ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom du réseau (SSID) *
                    </label>
                    <input
                      type="text"
                      value={wifiSSID}
                      onChange={(e) => setWifiSSID(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="MonWiFi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      value={wifiPassword}
                      onChange={(e) => setWifiPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Mot de passe Wi-Fi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de sécurité
                    </label>
                    <select
                      value={wifiSecurity}
                      onChange={(e) => setWifiSecurity(e.target.value as any)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="WPA">WPA/WPA2</option>
                      <option value="WEP">WEP</option>
                      <option value="nopass">Aucun mot de passe</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {qrType === "url"
                      ? "URL du site web"
                      : qrType === "phone"
                      ? "Numéro de téléphone"
                      : qrType === "email"
                      ? "Adresse email"
                      : "Texte ou contenu"}
                    *
                  </label>
                  <input
                    type={qrType === "email" ? "email" : "text"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={
                      qrType === "url"
                        ? "https://example.com"
                        : qrType === "phone"
                        ? "+212 6 XX XX XX XX"
                        : qrType === "email"
                        ? "contact@example.com"
                        : "Votre texte ici..."
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}

              <button
                onClick={generateQR}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <QrCode className="w-5 h-5" />
                Générer le QR Code
              </button>
            </div>

            {/* Output Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Votre QR Code</h3>
              {qrCodeUrl ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                    <img src={qrCodeUrl} alt="QR Code" className="max-w-full h-auto" />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copié !" : "Copier"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 text-center">
                  <QrCode className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Votre QR Code apparaîtra ici</p>
                </div>
              )}
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 space-y-6">
            {/* What is QR Code */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu'est-ce qu'un QR Code ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un QR Code (Quick Response Code) est un code-barres bidimensionnel qui peut être scanné
                avec un smartphone pour accéder rapidement à des informations. Contrairement aux codes-barres
                traditionnels, les QR codes peuvent stocker beaucoup plus d'informations : URL, texte, coordonnées,
                informations Wi-Fi, etc.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre générateur de QR Code gratuit vous permet de créer des QR codes pour différents types
                de contenu : liens web, réseaux Wi-Fi, numéros de téléphone, adresses email, ou tout texte
                simple. Téléchargez votre QR code en image PNG et utilisez-le sur vos documents, affiches,
                ou supports marketing.
              </p>
            </section>

            {/* Use Cases */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cas d'Utilisation des QR Codes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Marketing & Publicité",
                    desc: "Ajoutez des QR codes sur vos flyers, affiches ou cartes de visite pour diriger les clients vers votre site web ou vos réseaux sociaux.",
                  },
                  {
                    title: "Partage Wi-Fi",
                    desc: "Créez un QR code Wi-Fi pour que vos invités se connectent automatiquement à votre réseau sans taper le mot de passe.",
                  },
                  {
                    title: "Contact Rapide",
                    desc: "Générez un QR code avec vos coordonnées (téléphone, email) pour faciliter le partage de vos informations de contact.",
                  },
                  {
                    title: "Événements",
                    desc: "Utilisez des QR codes pour l'inscription à des événements, l'accès à des menus numériques, ou le partage de documents.",
                  },
                ].map((useCase, idx) => (
                  <div key={idx} className="bg-emerald-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-700 text-sm">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Use */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Comment Utiliser le Générateur ?
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Sélectionnez le type :</strong> Choisissez le type de QR code que vous souhaitez
                  créer (URL, texte, Wi-Fi, téléphone, email).
                </li>
                <li>
                  <strong>Entrez le contenu :</strong> Remplissez les champs requis selon le type sélectionné.
                </li>
                <li>
                  <strong>Générez :</strong> Cliquez sur "Générer le QR Code" pour créer votre code.
                </li>
                <li>
                  <strong>Téléchargez :</strong> Téléchargez votre QR code en image PNG ou copiez-le pour
                  l'utiliser ailleurs.
                </li>
                <li>
                  <strong>Testez :</strong> Scannez votre QR code avec votre smartphone pour vérifier qu'il
                  fonctionne correctement.
                </li>
              </ol>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions Fréquentes
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Les QR codes générés sont-ils gratuits ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, tous nos QR codes sont 100% gratuits. Aucune limite d'utilisation, aucun abonnement
                    requis.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Puis-je utiliser les QR codes à des fins commerciales ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, vous pouvez utiliser les QR codes générés à des fins personnelles ou commerciales
                    sans restriction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Comment scanner un QR code ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Utilisez l'application Appareil photo de votre smartphone (iOS ou Android). La plupart
                    des smartphones modernes peuvent scanner les QR codes directement avec l'appareil photo.
                    Sinon, téléchargez une application de scan QR code gratuite.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
