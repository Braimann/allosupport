import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key || key === "") return null;
  return new Resend(key);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface Body {
  phone?: string;
  email?: string;
  reason?: string;
  confirmDeletion?: boolean;
  website?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const { phone, email, reason, confirmDeletion, website } = body;

    if (website && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    if (!confirmDeletion) {
      return NextResponse.json(
        { error: "Confirmation requise" },
        { status: 400 }
      );
    }

    if (!phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Téléphone et email requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const phoneNorm = phone.trim().replace(/\s/g, "");
    if (phoneNorm.length < 9 || phoneNorm.length > 15) {
      return NextResponse.json(
        { error: "Numéro de téléphone invalide" },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { error: "Service email non configuré" },
        { status: 503 }
      );
    }

    const fromEmail =
      process.env.RESEND_FROM || "Onboarding <onboarding@resend.dev>";
    const toPrivacy =
      process.env.PRIVACY_TO ||
      process.env.ADMIN_TO ||
      "privacy@allosupport.ma";
    const replyTo = email.trim();

    const reasonSafe = reason?.trim() ? escapeHtml(reason.trim()) : "— (non renseignée)";
    const phoneSafe = escapeHtml(phoneNorm);
    const emailSafe = escapeHtml(email.trim());
    const ref = `${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const now = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" });

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Demande suppression compte app</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
  <h1 style="color: #b91c1c;">Demande de suppression de compte — App mobile</h1>
  <p><strong>Référence :</strong> ${escapeHtml(ref)}</p>
  <p><strong>Reçu le :</strong> ${escapeHtml(now)}</p>
  <table cellpadding="8" style="border-collapse: collapse; border: 1px solid #e5e7eb;">
    <tr><td><strong>Téléphone</strong></td><td>${phoneSafe}</td></tr>
    <tr><td><strong>Email (inscription)</strong></td><td>${emailSafe}</td></tr>
    <tr><td><strong>Raison</strong></td><td>${reasonSafe}</td></tr>
  </table>
  <p style="margin-top: 16px; font-size: 14px; color: #374151;">
    L'utilisateur a confirmé vouloir supprimer définitivement son compte et ses données (action irréversible).
    Traiter sous 30 jours (Loi 09-08).
  </p>
</body>
</html>`;

    const text = `Demande suppression compte APP — ${ref}\nReçu: ${now}\nTél: ${phoneNorm}\nEmail: ${email.trim()}\nRaison: ${reason?.trim() || "—"}\n`;

    const result = await resend.emails.send({
      from: fromEmail,
      to: toPrivacy,
      replyTo,
      subject: `[App] Suppression compte — ${phoneNorm} — ${ref}`,
      html,
      text,
    });

    if (result.error) {
      console.error("Resend account-deletion:", result.error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, reference: ref });
  } catch (e) {
    console.error("account-deletion-request:", e);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
