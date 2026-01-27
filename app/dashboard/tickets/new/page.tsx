"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { createTicket } from "@/lib/firebase/tickets-service";
import { AlertCircle, Loader2, Send } from "lucide-react";

export default function NewTicketPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState<"virus" | "panne" | "installation" | "b2b">("panne");
  const [priority, setPriority] = useState<"normal" | "urgent">("normal");
  const [clientType, setClientType] = useState<"particulier" | "pro">("particulier");
  const [sla, setSla] = useState("15 min");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!subject.trim()) {
      setError("Le sujet est requis.");
      return;
    }

    if (!description.trim()) {
      setError("La description est requise.");
      return;
    }

    if (!user) {
      setError("Vous devez être connecté pour créer un ticket.");
      return;
    }

    setLoading(true);

    try {
      const ticketId = await createTicket(user.uid, {
        subject: subject.trim(),
        category,
        priority,
        clientType,
        sla,
        description: description.trim(),
      });

      if (!ticketId) {
        setError("Erreur lors de la création du ticket. Veuillez réessayer.");
        setLoading(false);
        return;
      }

      router.push(`/dashboard/tickets/${ticketId}`);
    } catch (err: any) {
      setError(err.message || "Erreur lors de la création du ticket.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nouveau Ticket</h2>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Sujet du ticket <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Ex: Mon PC est très lent"
            />
          </div>

          {/* Client Type & Category Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Client Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de client
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="clientType"
                    value="particulier"
                    checked={clientType === "particulier"}
                    onChange={(e) => setClientType(e.target.value as "particulier" | "pro")}
                    className="w-4 h-4 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Particulier</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="clientType"
                    value="pro"
                    checked={clientType === "pro"}
                    onChange={(e) => setClientType(e.target.value as "particulier" | "pro")}
                    className="w-4 h-4 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Professionnel</span>
                </label>
              </div>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as "virus" | "panne" | "installation" | "b2b")
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="panne">Panne / Dépannage</option>
                <option value="virus">Virus / Sécurité</option>
                <option value="installation">Installation / Configuration</option>
                <option value="b2b">Support Entreprise</option>
              </select>
            </div>
          </div>

          {/* Priority & SLA Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priorité
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value="normal"
                    checked={priority === "normal"}
                    onChange={(e) => setPriority(e.target.value as "normal" | "urgent")}
                    className="w-4 h-4 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Normal</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value="urgent"
                    checked={priority === "urgent"}
                    onChange={(e) => setPriority(e.target.value as "normal" | "urgent")}
                    className="w-4 h-4 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Urgent</span>
                </label>
              </div>
            </div>

            {/* SLA */}
            <div>
              <label htmlFor="sla" className="block text-sm font-medium text-gray-700 mb-2">
                SLA (Délai de réponse souhaité)
              </label>
              <select
                id="sla"
                value={sla}
                onChange={(e) => setSla(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="15 min">15 minutes (Urgent)</option>
                <option value="1h">1 heure</option>
                <option value="4h">4 heures</option>
                <option value="24h">24 heures</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description détaillée <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              placeholder="Décrivez votre problème en détail. Plus vous donnez d'informations, plus nous pourrons vous aider rapidement..."
            />
            <p className="mt-2 text-xs text-gray-500">
              Incluez des détails comme : système d'exploitation, logiciels concernés, messages d'erreur, etc.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Création...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Créer le ticket
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
