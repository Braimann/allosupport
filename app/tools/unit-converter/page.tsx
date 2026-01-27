"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HardDriveIcon, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";

type Unit = "B" | "KB" | "MB" | "GB" | "TB" | "PB";

const units: { value: Unit; label: string; multiplier: number }[] = [
  { value: "B", label: "Bytes (B)", multiplier: 1 },
  { value: "KB", label: "Kilobytes (KB)", multiplier: 1024 },
  { value: "MB", label: "Megabytes (MB)", multiplier: 1024 * 1024 },
  { value: "GB", label: "Gigabytes (GB)", multiplier: 1024 * 1024 * 1024 },
  { value: "TB", label: "Terabytes (TB)", multiplier: 1024 * 1024 * 1024 * 1024 },
  { value: "PB", label: "Petabytes (PB)", multiplier: 1024 * 1024 * 1024 * 1024 * 1024 },
];

export default function UnitConverterPage() {
  const [fromUnit, setFromUnit] = useState<Unit>("MB");
  const [toUnit, setToUnit] = useState<Unit>("GB");
  const [value, setValue] = useState("1");

  const convert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) return 0;

    const fromMultiplier = units.find((u) => u.value === fromUnit)?.multiplier || 1;
    const toMultiplier = units.find((u) => u.value === toUnit)?.multiplier || 1;

    const bytes = numValue * fromMultiplier;
    const result = bytes / toMultiplier;

    return result;
  };

  const result = convert();
  const formattedResult = result >= 1 ? result.toFixed(4).replace(/\.?0+$/, "") : result.toExponential(4);

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
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
              <HardDriveIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Convertisseur d'Unités Informatiques
            </h1>
            <p className="text-lg text-gray-600">
              Convertissez facilement entre Bytes, KB, MB, GB, TB et PB
            </p>
          </div>

          {/* Converter Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-4 items-end">
              {/* From */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">De</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  min="0"
                  step="any"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
                  placeholder="0"
                />
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value as Unit)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  {units.map((unit) => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button
                  onClick={swapUnits}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Inverser les unités"
                >
                  <ArrowRightLeft className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* To */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Vers</label>
                <div className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg font-semibold text-gray-900 min-h-[52px] flex items-center">
                  {formattedResult}
                </div>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value as Unit)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  {units.map((unit) => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Conversions */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Conversions rapides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "1 KB =", value: "1024 B" },
                  { label: "1 MB =", value: "1024 KB" },
                  { label: "1 GB =", value: "1024 MB" },
                  { label: "1 TB =", value: "1024 GB" },
                  { label: "1 PB =", value: "1024 TB" },
                  { label: "1 GB =", value: "1,073,741,824 B" },
                ].map((conv, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{conv.label}</span>
                    <span className="text-emerald-600 font-semibold">{conv.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">ℹ️ À propos</h3>
              <p className="text-sm text-gray-700">
                Ce convertisseur utilise le système binaire (base 2) où 1 KB = 1024 bytes. 
                C'est le standard utilisé par les systèmes d'exploitation pour mesurer la capacité de stockage.
              </p>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 space-y-6">
            {/* What is Unit Converter */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu'est-ce qu'un Convertisseur d'Unités Informatiques ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un convertisseur d'unités informatiques est un outil qui permet de convertir facilement entre
                différentes unités de mesure de stockage de données : Bytes, Kilobytes (KB), Megabytes (MB),
                Gigabytes (GB), Terabytes (TB) et Petabytes (PB). Ces conversions sont essentielles pour
                comprendre la capacité de stockage de vos disques durs, clés USB, cartes mémoire et autres
                périphériques de stockage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre convertisseur utilise le système binaire (base 2) où chaque unité est égale à 1024 fois
                l'unité précédente. C'est le standard utilisé par les systèmes d'exploitation Windows, macOS
                et Linux pour mesurer la capacité de stockage.
              </p>
            </section>

            {/* Binary vs Decimal */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Système Binaire vs Décimal
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Système Binaire (Base 2)</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Utilisé par les systèmes d'exploitation :
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 1 KB = 1024 bytes</li>
                    <li>• 1 MB = 1024 KB</li>
                    <li>• 1 GB = 1024 MB</li>
                    <li>• 1 TB = 1024 GB</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Système Décimal (Base 10)</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Utilisé par les fabricants de disques :
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 1 KB = 1000 bytes</li>
                    <li>• 1 MB = 1000 KB</li>
                    <li>• 1 GB = 1000 MB</li>
                    <li>• 1 TB = 1000 GB</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">
                    ⚠️ C'est pourquoi un disque de 1 TB affiche ~931 GB dans Windows
                  </p>
                </div>
              </div>
            </section>

            {/* Common Conversions */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Conversions Courantes
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { from: "1 GB", to: "1,024 MB", desc: "Capacité d'un CD-ROM" },
                  { from: "1 TB", to: "1,024 GB", desc: "Capacité d'un disque dur standard" },
                  { from: "1 MB", to: "1,024 KB", desc: "Taille d'une photo haute résolution" },
                  { from: "1 KB", to: "1,024 bytes", desc: "Taille d'un petit document texte" },
                  { from: "1 PB", to: "1,024 TB", desc: "Capacité d'un centre de données" },
                  { from: "500 GB", to: "512,000 MB", desc: "Capacité d'un SSD moyen" },
                ].map((conv, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">{conv.from} =</div>
                    <div className="text-emerald-600 font-bold mb-2">{conv.to}</div>
                    <div className="text-xs text-gray-600">{conv.desc}</div>
                  </div>
                ))}
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
                    Pourquoi mon disque de 1 TB affiche seulement 931 GB ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Les fabricants utilisent le système décimal (1 TB = 1000 GB) tandis que Windows utilise
                    le système binaire (1 TB = 1024 GB). Donc 1 TB décimal = 1000/1024 = 0.976 TB binaire,
                    soit environ 931 GB.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quelle est la différence entre KB et Ko ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    KB (Kilobyte) = 1024 bytes (binaire). Ko (Kilooctet) = 1000 bytes (décimal). En pratique,
                    KB est plus couramment utilisé dans l'informatique.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Comment convertir des bytes en Go (Gigaoctets) ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Utilisez notre convertisseur : entrez la valeur en bytes, sélectionnez "Bytes (B)" comme
                    unité source et "Gigabytes (GB)" comme unité cible. Le résultat s'affichera automatiquement.
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
