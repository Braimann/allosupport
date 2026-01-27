"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Play, Copy, Download, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

// SEO Metadata (for Next.js metadata API - this is a client component, so we'll add it via head)
const seoData = {
  title: "Éditeur HTML en Ligne Gratuit | AlloSupport.ma",
  description:
    "Éditeur HTML, CSS et JavaScript en ligne gratuit. Testez votre code en temps réel, téléchargez vos fichiers HTML. Outil gratuit pour développeurs web.",
  keywords: [
    "éditeur html en ligne",
    "éditeur html gratuit",
    "éditeur css javascript",
    "test code html",
    "éditeur code en ligne",
    "html editor online",
    "code editor gratuit",
    "éditeur web",
  ],
};

export default function HTMLEditorPage() {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Document HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Bienvenue dans l'éditeur HTML !</h1>
    <p>Modifiez le code à gauche et voyez le résultat en temps réel.</p>
</body>
</html>`);

  const [iframeKey, setIframeKey] = useState(0);

  const handleRun = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
    alert("Code copié dans le presse-papiers !");
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (confirm("Voulez-vous réinitialiser le code ?")) {
      setHtml(`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Nouveau Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`);
      setIframeKey((prev) => prev + 1);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg"
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Éditeur HTML en Ligne
            </h1>
            <p className="text-lg text-gray-600">
              Éditez votre code HTML, CSS et JavaScript et voyez le résultat en temps réel
            </p>
          </div>

          {/* Toolbar */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-4 flex flex-wrap items-center gap-3">
            <button
              onClick={handleRun}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Play className="w-4 h-4" />
              Exécuter
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Copy className="w-4 h-4" />
              Copier
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Réinitialiser
            </button>
          </div>

          {/* Editor and Preview */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Code Editor */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                <span className="text-sm font-semibold">Code HTML/CSS/JS</span>
                <span className="text-xs text-gray-400">{html.length} caractères</span>
              </div>
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-[600px] p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                spellCheck={false}
                placeholder="Entrez votre code HTML ici..."
              />
            </div>

            {/* Preview */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                <span className="text-sm font-semibold">Aperçu</span>
                <span className="text-xs text-gray-400">Temps réel</span>
              </div>
              <iframe
                key={iframeKey}
                srcDoc={html}
                className="w-full h-[600px] border-0 bg-white"
                title="HTML Preview"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 space-y-6">
            {/* What is HTML Editor */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu'est-ce qu'un Éditeur HTML en Ligne ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un éditeur HTML en ligne est un outil gratuit qui vous permet de créer, modifier et tester
                du code HTML, CSS et JavaScript directement dans votre navigateur web. Contrairement aux
                éditeurs de code traditionnels qui nécessitent une installation, cet outil fonctionne
                entièrement en ligne, sans téléchargement ni configuration.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre éditeur HTML gratuit est parfait pour les développeurs web débutants et expérimentés
                qui souhaitent tester rapidement du code, créer des prototypes ou apprendre le HTML/CSS/JS.
                L'aperçu en temps réel vous permet de voir immédiatement le résultat de vos modifications.
              </p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fonctionnalités de l'Éditeur HTML
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Aperçu en Temps Réel</h3>
                  <p className="text-gray-700 text-sm">
                    Visualisez instantanément le rendu de votre code HTML, CSS et JavaScript dans un
                    iframe sécurisé.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Support Multi-Langages</h3>
                  <p className="text-gray-700 text-sm">
                    Éditez du HTML, CSS et JavaScript dans un seul éditeur. Tous les langages web
                    principaux sont supportés.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Téléchargement Gratuit</h3>
                  <p className="text-gray-700 text-sm">
                    Téléchargez votre code HTML en un clic pour l'utiliser localement ou le partager
                    avec d'autres développeurs.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ 100% Gratuit</h3>
                  <p className="text-gray-700 text-sm">
                    Aucun abonnement, aucune inscription requise. Utilisez cet éditeur HTML gratuitement
                    autant que vous le souhaitez.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Use */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Comment Utiliser l'Éditeur HTML ?
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Écrivez votre code :</strong> Utilisez la zone d'édition à gauche pour saisir
                  votre code HTML, CSS et JavaScript.
                </li>
                <li>
                  <strong>Ajoutez du CSS :</strong> Utilisez la balise{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">&lt;style&gt;</code> dans votre HTML
                  pour styliser votre page.
                </li>
                <li>
                  <strong>Ajoutez du JavaScript :</strong> Utilisez la balise{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">&lt;script&gt;</code> pour ajouter
                  de l'interactivité à votre page.
                </li>
                <li>
                  <strong>Visualisez le résultat :</strong> Cliquez sur "Exécuter" pour voir votre code
                  s'afficher dans l'aperçu à droite.
                </li>
                <li>
                  <strong>Téléchargez :</strong> Une fois satisfait, téléchargez votre fichier HTML pour
                  l'utiliser sur votre site web.
                </li>
              </ol>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions Fréquentes (FAQ)
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    L'éditeur HTML est-il vraiment gratuit ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, notre éditeur HTML en ligne est 100% gratuit. Aucun abonnement ni inscription
                    n'est nécessaire. Vous pouvez l'utiliser autant que vous le souhaitez.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Puis-je sauvegarder mon code ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez télécharger votre code HTML à tout moment en cliquant sur le bouton
                    "Télécharger". Le fichier sera sauvegardé sur votre ordinateur.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    L'éditeur supporte-t-il JavaScript ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, vous pouvez utiliser JavaScript dans votre code. Ajoutez simplement une balise{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">&lt;script&gt;</code> dans votre HTML.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Mon code est-il sécurisé ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Oui, votre code est exécuté dans un iframe sandbox sécurisé. Aucune donnée n'est
                    envoyée à nos serveurs, tout reste dans votre navigateur.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">💡 Conseils d'Utilisation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Utilisez la balise <code className="bg-white px-2 py-1 rounded">&lt;style&gt;</code> pour le CSS</li>
                <li>• Utilisez la balise <code className="bg-white px-2 py-1 rounded">&lt;script&gt;</code> pour le JavaScript</li>
                <li>• Cliquez sur "Exécuter" pour mettre à jour l'aperçu</li>
                <li>• Téléchargez votre code pour l'utiliser localement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
