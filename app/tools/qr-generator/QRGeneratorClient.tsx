"use client";

import { useState } from "react";
import { QrCode, Download, Copy, CheckCircle, Link as LinkIcon, Wifi, Phone, Mail } from "lucide-react";
import QRCodeLib from "qrcode";

type QrType = "text" | "url" | "wifi" | "phone" | "email";

export default function QRGeneratorClient() {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [qrType, setQrType] = useState<QrType>("text");
  const [copied, setCopied] = useState(false);
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiSecurity, setWifiSecurity] = useState<"WPA" | "WEP" | "nopass">("WPA");

  const generateQR = async () => {
    let qrData = "";
    if (qrType === "url") qrData = text.startsWith("http") ? text : "https://" + text;
    else if (qrType === "wifi") {
      if (!wifiSSID) {
        alert("Veuillez entrer le nom du réseau Wi-Fi");
        return;
      }
      qrData = "WIFI:T:" + wifiSecurity + ";S:" + wifiSSID + ";P:" + wifiPassword + ";;";
    } else if (qrType === "phone") qrData = "tel:" + text.replace(/\s/g, "");
    else if (qrType === "email") qrData = "mailto:" + text;
    else qrData = text;

    if (!qrData) {
      alert("Veuillez entrer du contenu");
      return;
    }
    try {
      const url = await QRCodeLib.toDataURL(qrData, { width: 400, margin: 2, color: { dark: "#000000", light: "#FFFFFF" } });
      setQrCodeUrl(url);
    } catch (e) {
      alert("Erreur lors de la génération du QR code");
    }
  };

  const handleDownload = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrcode-" + Date.now() + ".png";
    link.click();
  };

  const handleCopy = async () => {
    if (!qrCodeUrl) return;
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Impossible de copier. Utilisez le bouton Télécharger.");
    }
  };

  const types: { id: QrType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "text", label: "Texte", icon: LinkIcon },
    { id: "url", label: "URL", icon: LinkIcon },
    { id: "wifi", label: "Wi-Fi", icon: Wifi },
    { id: "phone", label: "Téléphone", icon: Phone },
    { id: "email", label: "Email", icon: Mail },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Type de QR Code</label>
          <div className="grid grid-cols-2 gap-2">
            {types.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => { setQrType(id); setQrCodeUrl(""); }}
                className={"p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 " + (qrType === id ? "border-emerald-500 bg-emerald-50" : "border-gray-200 hover:border-emerald-300")}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {qrType === "wifi" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom du réseau (SSID) *</label>
              <input type="text" value={wifiSSID} onChange={(e) => setWifiSSID(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="MonWiFi" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input type="password" value={wifiPassword} onChange={(e) => setWifiPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Mot de passe Wi-Fi" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type de sécurité</label>
              <select value={wifiSecurity} onChange={(e) => setWifiSecurity(e.target.value as "WPA" | "WEP" | "nopass")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Aucun mot de passe</option>
              </select>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {qrType === "url" ? "URL du site web" : qrType === "phone" ? "Numéro de téléphone" : qrType === "email" ? "Adresse email" : "Texte ou contenu"} *
            </label>
            <input
              type={qrType === "email" ? "email" : "text"}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={qrType === "url" ? "https://example.com" : qrType === "phone" ? "+212 6 XX XX XX XX" : qrType === "email" ? "contact@example.com" : "Votre texte ici..."}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}

        <button onClick={generateQR} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
          <QrCode className="w-5 h-5" />
          Générer le QR Code
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Votre QR Code</h3>
        {qrCodeUrl ? (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <img src={qrCodeUrl} alt="QR Code" className="max-w-full h-auto" />
            </div>
            <div className="flex gap-3">
              <button onClick={handleDownload} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Télécharger
              </button>
              <button onClick={handleCopy} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
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
  );
}
