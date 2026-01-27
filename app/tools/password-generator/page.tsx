"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Key, Copy, RefreshCw, Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState<{ score: number; label: string; color: string }>({
    score: 0,
    label: "",
    color: "",
  });

  const generatePassword = useCallback(() => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset.length === 0) {
      alert("Veuillez sélectionner au moins un type de caractère !");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    calculateStrength(newPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (pwd.length >= 16) score++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z\d]/.test(pwd)) score++;

    let label = "";
    let color = "";
    if (score <= 2) {
      label = "Faible";
      color = "bg-red-500";
    } else if (score <= 4) {
      label = "Moyen";
      color = "bg-yellow-500";
    } else {
      label = "Fort";
      color = "bg-green-500";
    }

    setStrength({ score, label, color });
  };

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg"
            >
              <Key className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Générateur de Mots de Passe
            </h1>
            <p className="text-lg text-gray-600">
              Créez des mots de passe sécurisés et uniques en quelques clics
            </p>
          </div>

          {/* Generator Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            {/* Password Display */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre mot de passe
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={password}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={handleCopy}
                  className="px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
                <button
                  onClick={generatePassword}
                  className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
              {password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Force du mot de passe</span>
                    <span className={`text-sm font-semibold ${strength.color.replace("bg-", "text-")}`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${strength.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${(strength.score / 6) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Length Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Longueur : {length} caractères
              </label>
              <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>4</span>
                <span>64</span>
              </div>
            </div>

            {/* Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Options
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">Majuscules (A-Z)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">Minuscules (a-z)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">Chiffres (0-9)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">Symboles (!@#$%...)</span>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generatePassword}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Générer un mot de passe
            </button>

            {/* Security Tips */}
            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🔒 Conseils de sécurité</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Utilisez au moins 12 caractères</li>
                <li>• Mélangez majuscules, minuscules, chiffres et symboles</li>
                <li>• Ne réutilisez jamais le même mot de passe</li>
                <li>• Changez vos mots de passe régulièrement</li>
                <li>• Utilisez un gestionnaire de mots de passe</li>
              </ul>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 space-y-6">
            {/* What is Password Generator */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu'est-ce qu'un Générateur de Mots de Passe ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un générateur de mots de passe est un outil de sécurité informatique qui crée automatiquement
                des mots de passe aléatoires, complexes et sécurisés. Contrairement aux mots de passe créés
                manuellement qui sont souvent prévisibles et faciles à deviner, un générateur produit des
                combinaisons aléatoires de caractères qui sont beaucoup plus difficiles à cracker.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre générateur de mots de passe gratuit vous permet de créer des mots de passe sécurisés
                en quelques secondes. Vous pouvez personnaliser la longueur, choisir les types de caractères
                (majuscules, minuscules, chiffres, symboles) et obtenir un indicateur de force pour évaluer
                la sécurité de votre mot de passe.
              </p>
            </section>

            {/* Why Use Password Generator */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pourquoi Utiliser un Générateur de Mots de Passe ?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">❌ Mots de Passe Faibles</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Faciles à deviner (dates, noms)</li>
                    <li>• Réutilisés sur plusieurs sites</li>
                    <li>• Trop courts (moins de 8 caractères)</li>
                    <li>• Sans caractères spéciaux</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Mots de Passe Forts</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Aléatoires et imprévisibles</li>
                    <li>• Uniques pour chaque compte</li>
                    <li>• Longs (12+ caractères)</li>
                    <li>• Mélange de tous les types</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bonnes Pratiques pour les Mots de Passe
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Longueur minimale :</strong> Utilisez au moins 12 caractères. Plus c'est long,
                  plus c'est sécurisé.
                </li>
                <li>
                  <strong>Complexité :</strong> Mélangez majuscules, minuscules, chiffres et symboles pour
                  maximiser la sécurité.
                </li>
                <li>
                  <strong>Unicité :</strong> Ne réutilisez jamais le même mot de passe sur plusieurs comptes.
                  Si un compte est compromis, tous les autres restent protégés.
                </li>
                <li>
                  <strong>Gestionnaire de mots de passe :</strong> Utilisez un gestionnaire de mots de passe
                  (comme LastPass, 1Password, ou Bitwarden) pour stocker vos mots de passe de manière sécurisée.
                </li>
                <li>
                  <strong>Authentification à deux facteurs :</strong> Activez la 2FA sur tous vos comptes
                  importants pour une sécurité supplémentaire.
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
                    Combien de temps faut-il pour cracker un mot de passe ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Un mot de passe de 8 caractères avec seulement des lettres minuscules peut être cracké
                    en quelques heures. Un mot de passe de 12 caractères avec majuscules, minuscules, chiffres
                    et symboles peut prendre des milliers d'années à cracker avec les technologies actuelles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Puis-je réutiliser le même mot de passe ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Non, il est fortement déconseillé de réutiliser le même mot de passe. Si un site est
                    compromis, les pirates pourront accéder à tous vos autres comptes utilisant le même mot
                    de passe.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Comment me souvenir de tous mes mots de passe ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Utilisez un gestionnaire de mots de passe. Ces outils stockent tous vos mots de passe de
                    manière chiffrée et vous permettent d'y accéder avec un seul mot de passe maître.
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
