import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key || key === "") {
    return null;
  }
  return new Resend(key);
}

interface ContactFormData {
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
  website?: string; // Honeypot
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const {
      fullName,
      email,
      phone,
      requesterType,
      companyName,
      jobTitle,
      city,
      services,
      urgency,
      message,
      website,
    } = body;

    // Anti-spam: honeypot check
    if (website && website.trim() !== "") {
      // Bot detected, return success without sending email
      return NextResponse.json({ success: true, ticketId: "SPAM-BLOCKED" });
    }

    // Validation des champs requis
    if (
      !fullName ||
      !email ||
      !phone ||
      !requesterType ||
      !city ||
      !urgency ||
      !message
    ) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation services (au moins 1)
    if (!services || services.length === 0) {
      return NextResponse.json(
        { error: "Veuillez sélectionner au moins un service" },
        { status: 400 }
      );
    }

    // Validation conditionnelle pour Entreprise
    if (requesterType === "Entreprise") {
      if (!companyName || !jobTitle) {
        return NextResponse.json(
          {
            error:
              "Pour une demande Entreprise, la société et le poste sont requis",
          },
          { status: 400 }
        );
      }
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Validation message length
    if (message.length > 4000) {
      return NextResponse.json(
        { error: "Le message ne peut pas dépasser 4000 caractères" },
        { status: 400 }
      );
    }

    // Générer ticketId unique
    const ticketId = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const currentDate = new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Casablanca",
    });

    // Templates HTML emails

    // EMAIL ADMIN
    const adminHtmlEmail = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau lead AlloSupport</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">🔔 Nouveau lead (Contact)</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280;">
                <strong>Référence:</strong> <code style="background-color: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${ticketId}</code>
              </p>
              
              <table width="100%" cellpadding="10" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 20px;">
                <tr style="background-color: #f9fafb;">
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Type</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;">${requesterType}</td>
                </tr>
                ${requesterType === "Entreprise"
        ? `
                <tr>
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Société</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;">${companyName}</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Poste</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;">${jobTitle}</td>
                </tr>
                `
        : ""
      }
                <tr ${requesterType === "Particulier" ? 'style="background-color: #f9fafb;"' : ""}>
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Nom</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
                </tr>
                <tr ${requesterType === "Entreprise" ? 'style="background-color: #f9fafb;"' : ""}>
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Email</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr ${requesterType === "Particulier" ? 'style="background-color: #f9fafb;"' : ""}>
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Téléphone</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr ${requesterType === "Entreprise" ? 'style="background-color: #f9fafb;"' : ""}>
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Ville</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;">${city}</td>
                </tr>
                <tr ${requesterType === "Particulier" ? 'style="background-color: #f9fafb;"' : ""}>
                  <td style="font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Services</td>
                  <td style="color: #1f2937; border-bottom: 1px solid #e5e7eb;">${services.join(", ")}</td>
                </tr>
                <tr ${requesterType === "Entreprise" ? 'style="background-color: #f9fafb;"' : ""}>
                  <td style="font-weight: bold; color: #374151;">Urgence</td>
                  <td style="color: ${urgency === "Urgent (≤ 3h)" ? "#dc2626" : "#1f2937"}; font-weight: ${urgency === "Urgent (≤ 3h)" ? "bold" : "normal"};">${urgency}</td>
                </tr>
              </table>
              
              <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #374151;">Message:</p>
                <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                Reçu le: ${currentDate}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                AlloSupport Maroc - Dépannage Informatique
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const adminTextEmail = `NOUVEAU LEAD (Contact)

Référence: ${ticketId}

Type: ${requesterType}
${requesterType === "Entreprise" ? `Société: ${companyName}\nPoste: ${jobTitle}\n` : ""}Nom: ${fullName}
Email: ${email}
Téléphone: ${phone}
Ville: ${city}
Services: ${services.join(", ")}
Urgence: ${urgency}

Message:
${message}

Reçu le: ${currentDate}
`;

    // EMAIL CLIENT
    const clientHtmlEmail = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demande reçue - AlloSupport</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">✅ Votre demande est bien reçue</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #1f2937; line-height: 1.6;">
                Merci <strong>${fullName}</strong>. Votre demande a bien été reçue. Un technicien AlloSupport vous contactera dans un délai maximum de <strong>3 heures</strong>.
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280;">
                <strong>Référence:</strong> <code style="background-color: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${ticketId}</code>
              </p>
              
              <div style="background-color: #f9fafb; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <h2 style="margin: 0 0 15px 0; font-size: 16px; color: #374151;">Récapitulatif de votre demande</h2>
                <ul style="margin: 0; padding-left: 20px; color: #1f2937; line-height: 1.8;">
                  <li><strong>Type:</strong> ${requesterType}</li>
                  ${requesterType === "Entreprise" ? `<li><strong>Société:</strong> ${companyName} • <strong>Poste:</strong> ${jobTitle}</li>` : ""}
                  <li><strong>Ville:</strong> ${city}</li>
                  <li><strong>Services demandés:</strong> ${services.join(", ")}</li>
                  <li><strong>Urgence:</strong> ${urgency}</li>
                </ul>
              </div>
              
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 14px; color: #92400e;">
                  💡 <strong>Astuce:</strong> Gardez votre téléphone à portée de main. Nous vous contacterons bientôt !
                </p>
              </div>
              
              <p style="margin: 0; font-size: 12px; color: #9ca3af; font-style: italic;">
                Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #374151; font-weight: bold;">
                AlloSupport Maroc
              </p>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                Dépannage Informatique à Distance et à Domicile
              </p>
              <p style="margin: 10px 0 0 0; font-size: 12px; color: #9ca3af;">
                Casablanca • Rabat • Fès • Marrakech • Agadir
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const clientTextEmail = `Votre demande est bien reçue

Merci ${fullName}. Votre demande a bien été reçue. Un technicien AlloSupport vous contactera dans un délai maximum de 3 heures.

Référence: ${ticketId}

Récapitulatif de votre demande:
- Type: ${requesterType}
${requesterType === "Entreprise" ? `- Société: ${companyName} • Poste: ${jobTitle}\n` : ""}- Ville: ${city}
- Services demandés: ${services.join(", ")}
- Urgence: ${urgency}

Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.

---
AlloSupport Maroc
Dépannage Informatique à Distance et à Domicile
Casablanca • Rabat • Fès • Marrakech • Agadir
`;

    // Envoi des 2 emails via Resend (instancié seulement à l'exécution, pas au build)
    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Service email non configuré" },
        { status: 503 }
      );
    }

    const fromEmail =
      process.env.RESEND_FROM || "Onboarding <onboarding@resend.dev>";
    const adminEmail = process.env.ADMIN_TO || "brahim.boumai97@gmail.com";
    const replyToEmail = process.env.REPLY_TO || "contact@allosupport.ma";

    const [adminResult, clientResult] = await Promise.all([
      // Email ADMIN
      resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        replyTo: email,
        subject: `Nouveau lead AlloSupport — ${fullName} — ${requesterType} — ${urgency}`,
        html: adminHtmlEmail,
        text: adminTextEmail,
      }),
      // Email CLIENT
      resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: replyToEmail,
        subject: "AlloSupport — Demande reçue (contact sous 3h max)",
        html: clientHtmlEmail,
        text: clientTextEmail,
      }),
    ]);

    // Vérifier les erreurs
    if (adminResult.error || clientResult.error) {
      console.error("Resend error:", adminResult.error || clientResult.error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi des emails" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, ticketId });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'envoi du formulaire" },
      { status: 500 }
    );
  }
}
