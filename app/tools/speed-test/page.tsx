"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gauge, Wifi, Download, Upload, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function SpeedTestPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [progress, setProgress] = useState(0);

  // Simulate speed test (in real app, you'd use a real API)
  const runSpeedTest = async () => {
    setIsRunning(true);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setPing(0);
    setProgress(0);

    // Simulate ping
    await new Promise((resolve) => setTimeout(resolve, 500));
    setPing(Math.floor(Math.random() * 50) + 10);

    // Simulate download test
    for (let i = 0; i <= 100; i += 5) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setProgress(i);
      if (i <= 50) {
        setDownloadSpeed(Math.min(i * 2, 100));
      }
    }

    // Simulate upload test
    setProgress(0);
    for (let i = 0; i <= 100; i += 5) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setProgress(i);
      if (i <= 50) {
        setUploadSpeed(Math.min(i * 1.5, 75));
      }
    }

    setProgress(100);
    setIsRunning(false);
  };

  const formatSpeed = (mbps: number) => {
    if (mbps < 1) return `${(mbps * 1000).toFixed(0)} Kbps`;
    return `${mbps.toFixed(2)} Mbps`;
  };

  const getSpeedQuality = (mbps: number, type: "download" | "upload") => {
    if (type === "download") {
      if (mbps >= 25) return { label: "Excellent", color: "text-green-500" };
      if (mbps >= 10) return { label: "Bon", color: "text-emerald-500" };
      if (mbps >= 5) return { label: "Moyen", color: "text-yellow-500" };
      return { label: "Faible", color: "text-red-500" };
    } else {
      if (mbps >= 10) return { label: "Excellent", color: "text-green-500" };
      if (mbps >= 5) return { label: "Bon", color: "text-emerald-500" };
      if (mbps >= 2) return { label: "Moyen", color: "text-yellow-500" };
      return { label: "Faible", color: "text-red-500" };
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
              <Gauge className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Test de Vitesse Internet
            </h1>
            <p className="text-lg text-gray-600">
              Mesurez la vitesse de votre connexion internet
            </p>
          </div>

          {/* Speed Test Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Ping */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                <Activity className="w-5 h-5" />
                <span className="text-sm font-medium">Latence (Ping)</span>
              </div>
              <div className="text-4xl font-bold text-gray-900">
                {ping > 0 ? `${ping} ms` : "-"}
              </div>
              {ping > 0 && (
                <div className={`text-sm mt-1 ${ping < 50 ? "text-green-500" : ping < 100 ? "text-yellow-500" : "text-red-500"}`}>
                  {ping < 50 ? "Excellent" : ping < 100 ? "Bon" : "Élevé"}
                </div>
              )}
            </div>

            {/* Download & Upload */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Download */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-700 mb-4">
                  <Download className="w-6 h-6" />
                  <span className="font-semibold">Téléchargement</span>
                </div>
                <div className="text-5xl font-bold text-emerald-600 mb-2">
                  {formatSpeed(downloadSpeed)}
                </div>
                {downloadSpeed > 0 && (
                  <div className={getSpeedQuality(downloadSpeed, "download").color}>
                    {getSpeedQuality(downloadSpeed, "download").label}
                  </div>
                )}
              </div>

              {/* Upload */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-blue-700 mb-4">
                  <Upload className="w-6 h-6" />
                  <span className="font-semibold">Téléversement</span>
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {formatSpeed(uploadSpeed)}
                </div>
                {uploadSpeed > 0 && (
                  <div className={getSpeedQuality(uploadSpeed, "upload").color}>
                    {getSpeedQuality(uploadSpeed, "upload").label}
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            {isRunning && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Test en cours...</span>
                  <span className="text-sm font-semibold text-gray-900">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-emerald-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Start Button */}
            <button
              onClick={runSpeedTest}
              disabled={isRunning}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Wifi className="w-5 h-5" />
              {isRunning ? "Test en cours..." : "Lancer le test"}
            </button>

            {/* Info */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 text-center">
                ⚠️ Ce test est une simulation. Pour un test réel, utilisez des services comme Speedtest.net ou Fast.com
              </p>
            </div>

            {/* Tips */}
            <div className="mt-6 bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Conseils pour améliorer votre vitesse</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Redémarrez votre routeur/modem</li>
                <li>• Utilisez une connexion filaire (Ethernet) plutôt que Wi-Fi</li>
                <li>• Fermez les applications qui utilisent la bande passante</li>
                <li>• Vérifiez que personne d'autre n'utilise votre connexion</li>
                <li>• Contactez votre fournisseur d'accès si le problème persiste</li>
              </ul>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 space-y-6">
            {/* What is Speed Test */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu'est-ce qu'un Test de Vitesse Internet ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un test de vitesse internet mesure les performances de votre connexion internet en évaluant
                trois paramètres principaux : le débit de téléchargement (download), le débit de téléversement
                (upload) et la latence (ping). Ces mesures vous permettent de savoir si votre connexion
                fonctionne correctement et si vous obtenez la vitesse promise par votre fournisseur d'accès.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre test de vitesse internet gratuit vous permet de mesurer rapidement les performances de
                votre connexion. Bien que ce soit une simulation, elle vous donne une idée de ce que vous
                devriez obtenir avec votre connexion. Pour des mesures précises, nous recommandons d'utiliser
                également des services comme Speedtest.net ou Fast.com.
              </p>
            </section>

            {/* Understanding Results */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Comprendre les Résultats du Test
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📥 Débit de Téléchargement (Download)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    C'est la vitesse à laquelle vous pouvez télécharger des données depuis internet. Elle est
                    mesurée en Mbps (Mégabits par seconde).
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Excellent :</strong> 25+ Mbps (streaming 4K, téléchargements rapides)</li>
                    <li>• <strong>Bon :</strong> 10-25 Mbps (streaming HD, navigation fluide)</li>
                    <li>• <strong>Moyen :</strong> 5-10 Mbps (streaming SD, navigation basique)</li>
                    <li>• <strong>Faible :</strong> &lt; 5 Mbps (navigation lente, problèmes de streaming)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📤 Débit de Téléversement (Upload)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    C'est la vitesse à laquelle vous pouvez envoyer des données vers internet. Elle est
                    généralement plus faible que le download.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Excellent :</strong> 10+ Mbps (vidéoconférence HD, uploads rapides)</li>
                    <li>• <strong>Bon :</strong> 5-10 Mbps (vidéoconférence, partage de fichiers)</li>
                    <li>• <strong>Moyen :</strong> 2-5 Mbps (emails avec pièces jointes)</li>
                    <li>• <strong>Faible :</strong> &lt; 2 Mbps (uploads très lents)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">⚡ Latence (Ping)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    C'est le temps de réponse de votre connexion, mesuré en millisecondes (ms). Plus c'est
                    bas, mieux c'est.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Excellent :</strong> &lt; 50 ms (jeux en ligne, vidéoconférence)</li>
                    <li>• <strong>Bon :</strong> 50-100 ms (navigation web, streaming)</li>
                    <li>• <strong>Moyen :</strong> 100-200 ms (navigation acceptable)</li>
                    <li>• <strong>Élevé :</strong> &gt; 200 ms (délais perceptibles)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions Fréquentes (FAQ)
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pourquoi ma vitesse est-elle plus lente que celle promise par mon FAI ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Plusieurs facteurs peuvent affecter votre vitesse : la distance au routeur, le nombre
                    d'appareils connectés, l'heure de la journée (pic d'utilisation), les interférences Wi-Fi,
                    ou des problèmes matériels. Testez à différents moments et contactez votre FAI si le
                    problème persiste.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quelle vitesse ai-je besoin pour le streaming ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Pour le streaming SD : 3-5 Mbps. Pour le streaming HD : 5-10 Mbps. Pour le streaming 4K :
                    25+ Mbps. Pour plusieurs appareils simultanés, multipliez ces valeurs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Comment améliorer ma vitesse internet ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Utilisez une connexion filaire (Ethernet) plutôt que Wi-Fi, redémarrez votre routeur,
                    fermez les applications inutilisées, vérifiez qu'aucun virus ne consomme votre bande
                    passante, et contactez votre FAI pour vérifier votre forfait.
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
