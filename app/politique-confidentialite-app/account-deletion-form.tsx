"use client";

import { useState, FormEvent } from "react";

const REASONS = [
  { value: "", label: "— (optionnel)" },
  {
    value: "Je n'utilise plus l'application",
    label: "Je n'utilise plus l'application",
  },
  { value: "Problème de confidentialité", label: "Problème de confidentialité" },
  { value: "Je veux créer un nouveau compte", label: "Je veux créer un nouveau compte" },
  { value: "Autre raison", label: "Autre raison" },
] as const;

export function AccountDeletionForm() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    if (!confirm) {
      setStatus("error");
      setErrorMessage("Veuillez cocher la case de confirmation.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/account-deletion-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          email,
          reason: reason || undefined,
          confirmDeletion: true,
          website: honeypot,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
      };
      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Une erreur s'est produite. Contactez-nous directement à privacy@allosupport.ma"
        );
        return;
      }
      setStatus("success");
      setPhone("");
      setEmail("");
      setReason("");
      setConfirm(false);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Une erreur s'est produite. Contactez-nous directement à privacy@allosupport.ma"
      );
    }
  }

  return (
    <section
      id="suppression-compte"
      className="max-w-3xl mx-auto px-4 mt-12 mb-4 scroll-mt-28 print:hidden"
      aria-labelledby="suppression-compte-title"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
        <h2
          id="suppression-compte-title"
          className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
        >
          🗑️ Supprimer mon compte
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
          Conformément à l&apos;article 7 de la Loi 09-08, vous pouvez demander la suppression définitive
          de votre compte et de toutes vos données personnelles. Votre demande sera traitée sous 30
          jours.
        </p>

        {status === "success" ? (
          <p
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900 font-medium"
            role="status"
          >
            ✅ Votre demande a bien été envoyée. Nous la traiterons sous 30 jours conformément à la Loi
            09-08.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="relative space-y-5">
            <div
              className="absolute h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
              aria-hidden="true"
            >
              <label htmlFor="del-website">Site web (ne pas remplir)</label>
              <input
                id="del-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(ev) => setHoneypot(ev.target.value)}
              />
            </div>

            <div>
              <label htmlFor="del-phone" className="mb-1.5 block text-sm font-semibold text-gray-800">
                Numéro de téléphone <span className="text-red-600">*</span>
              </label>
              <input
                id="del-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="06XXXXXXXX ou 07XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <div>
              <label htmlFor="del-email" className="mb-1.5 block text-sm font-semibold text-gray-800">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="del-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="email utilisé lors de l'inscription"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <div>
              <label htmlFor="del-reason" className="mb-1.5 block text-sm font-semibold text-gray-800">
                Raison de suppression <span className="text-gray-500 font-normal">(optionnel)</span>
              </label>
              <select
                id="del-reason"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              >
                {REASONS.map((o) => (
                  <option key={o.value || "empty"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <input
                id="del-confirm"
                name="confirm"
                type="checkbox"
                required
                checked={confirm}
                onChange={(e) => setConfirm(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="del-confirm" className="text-sm text-gray-800 leading-relaxed cursor-pointer">
                Je confirme vouloir supprimer définitivement mon compte et toutes mes données. Cette
                action est irréversible.
              </label>
            </div>

            {status === "error" && (
              <p
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900 text-sm font-medium"
                role="alert"
              >
                ❌{" "}
                {errorMessage ||
                  "Une erreur s'est produite. Contactez-nous directement à privacy@allosupport.ma"}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-red-600 px-4 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande de suppression"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
