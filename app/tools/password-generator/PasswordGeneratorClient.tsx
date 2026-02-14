"use client";

import { useState, useCallback } from "react";
import { Copy, RefreshCw, Check } from "lucide-react";

export default function PasswordGeneratorClient() {
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
    let score = 0;
    if (newPassword.length >= 8) score++;
    if (newPassword.length >= 12) score++;
    if (newPassword.length >= 16) score++;
    if (/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword)) score++;
    if (/\d/.test(newPassword)) score++;
    if (/[^a-zA-Z\d]/.test(newPassword)) score++;

    let label = score <= 2 ? "Faible" : score <= 4 ? "Moyen" : "Fort";
    let color = score <= 2 ? "bg-red-500" : score <= 4 ? "bg-yellow-500" : "bg-green-500";
    setStrength({ score, label, color });
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Votre mot de passe</label>
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Longueur : {length} caractères</label>
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Options</label>
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

      <button
        onClick={generatePassword}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Générer un mot de passe
      </button>

      <div className="bg-emerald-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Conseils de sécurité</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Utilisez au moins 12 caractères</li>
          <li>• Mélangez majuscules, minuscules, chiffres et symboles</li>
          <li>• Ne réutilisez jamais le même mot de passe</li>
          <li>• Utilisez un gestionnaire de mots de passe</li>
        </ul>
      </div>
    </div>
  );
}
