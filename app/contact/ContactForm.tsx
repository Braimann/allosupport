"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    requesterType: "Entreprise" | "Particulier";
    companyName: string;
    jobTitle: string;
    city: string;
    services: string[];
    urgency: "Normal" | "Urgent (≤ 3h)";
    message: string;
    website: string; // Honeypot
}

const SERVICES_OPTIONS = [
    "Dépannage PC à domicile",
    "Dépannage à distance",
    "Installation Windows & logiciels",
    "Réseau / Wi-Fi / Routeur",
    "Maintenance PME",
    "Cybersécurité / Antivirus",
    "Récupération de données",
    "Autre",
];

const CITIES = [
    "Casablanca",
    "Rabat",
    "Mohammedia",
    "Fès",
    "Marrakech",
    "Agadir",
    "Tanger",
    "Autre",
];

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        requesterType: "Particulier",
        companyName: "",
        jobTitle: "",
        city: "",
        services: [],
        urgency: "Normal",
        message: "",
        website: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRequesterTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            requesterType: e.target.value as "Entreprise" | "Particulier",
        }));
    };

    const handleServiceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, value]
                : prev.services.filter((s) => s !== value),
        }));
    };

    const handleUrgencyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            urgency: e.target.value as "Normal" | "Urgent (≤ 3h)",
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        // Validation frontend
        if (formData.services.length === 0) {
            setSubmitStatus({
                type: "error",
                message: "Veuillez sélectionner au moins un service.",
            });
            setIsSubmitting(false);
            return;
        }

        if (formData.requesterType === "Entreprise") {
            if (!formData.companyName.trim() || !formData.jobTitle.trim()) {
                setSubmitStatus({
                    type: "error",
                    message:
                        "Pour une demande Entreprise, veuillez renseigner la société et le poste.",
                });
                setIsSubmitting(false);
                return;
            }
        }

        if (formData.message.length > 4000) {
            setSubmitStatus({
                type: "error",
                message: "Le message ne peut pas dépasser 4000 caractères.",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus({
                    type: "success",
                    message:
                        "✅ Votre demande est bien reçue. Vous serez contacté dans 3h max.",
                });
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    requesterType: "Particulier",
                    companyName: "",
                    jobTitle: "",
                    city: "",
                    services: [],
                    urgency: "Normal",
                    message: "",
                    website: "",
                });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: result.error || "❌ Erreur lors de l'envoi. Réessayez.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "❌ Erreur réseau. Vérifiez votre connexion.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isEntreprise = formData.requesterType === "Entreprise";

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Demander un Devis Gratuit
            </h2>

            {submitStatus.type && (
                <div
                    className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Honeypot anti-spam */}
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                {/* Nom complet */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: Jean Dupont"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: jean.dupont@example.com"
                    />
                </div>

                {/* Téléphone */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: 0612345678"
                    />
                </div>

                {/* Type de demandeur */}
                <div>
                    <label className="block text-sm font-medium mb-3 text-gray-700">
                        Vous êtes <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="requesterType"
                                value="Particulier"
                                checked={formData.requesterType === "Particulier"}
                                onChange={handleRequesterTypeChange}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">Particulier</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="requesterType"
                                value="Entreprise"
                                checked={formData.requesterType === "Entreprise"}
                                onChange={handleRequesterTypeChange}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">Entreprise</span>
                        </label>
                    </div>
                </div>

                {/* Champs Entreprise (conditionnels) */}
                {isEntreprise && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Société <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required={isEntreprise}
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: ACME Corp"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Poste / Fonction <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required={isEntreprise}
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: Gérant, Office Manager, Responsable IT"
                            />
                        </div>
                    </>
                )}

                {/* Ville */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        Ville <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Sélectionnez votre ville</option>
                        {CITIES.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Services */}
                <div>
                    <label className="block text-sm font-medium mb-3 text-gray-700">
                        Services demandés <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 ml-2">
                            (sélectionnez au moins 1)
                        </span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {SERVICES_OPTIONS.map((service) => (
                            <label
                                key={service}
                                className="flex items-start cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                            >
                                <input
                                    type="checkbox"
                                    value={service}
                                    checked={formData.services.includes(service)}
                                    onChange={handleServiceChange}
                                    className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-500 rounded"
                                />
                                <span className="ml-3 text-sm text-gray-700">{service}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Urgence */}
                <div>
                    <label className="block text-sm font-medium mb-3 text-gray-700">
                        Urgence <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="urgency"
                                value="Normal"
                                checked={formData.urgency === "Normal"}
                                onChange={handleUrgencyChange}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">Normal</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="urgency"
                                value="Urgent (≤ 3h)"
                                checked={formData.urgency === "Urgent (≤ 3h)"}
                                onChange={handleUrgencyChange}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">Urgent (≤ 3h)</span>
                        </label>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        Message <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 ml-2">
                            ({formData.message.length}/4000 caractères)
                        </span>
                    </label>
                    <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        maxLength={4000}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Décrivez votre problème ou besoin informatique..."
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d&apos;être contacté par
                    AlloSupport dans un délai de 3 heures maximum.
                </p>
            </form>
        </div>
    );
}
