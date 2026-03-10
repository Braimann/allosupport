#!/usr/bin/env node
/**
 * Assure que public/logo.png et public/og-image.jpg existent pour le schema JSON-LD.
 * Utilise des visuels existants du projet (copie), pas de génération binaire.
 * Sources : images/installation-imprimante-maroc-hero.png, images/og/installation-imprimante-maroc.jpg
 */

const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const sourceLogo = path.join(publicDir, "images", "installation-imprimante-maroc-hero.png");
const sourceOgImage = path.join(publicDir, "images", "og", "installation-imprimante-maroc.jpg");
const logoPath = path.join(publicDir, "logo.png");
const ogImagePath = path.join(publicDir, "og-image.jpg");

if (!fs.existsSync(logoPath) && fs.existsSync(sourceLogo)) {
  fs.copyFileSync(sourceLogo, logoPath);
  console.log("Créé: public/logo.png (copie de images/installation-imprimante-maroc-hero.png)");
} else if (fs.existsSync(logoPath)) {
  console.log("Existe déjà: public/logo.png");
} else {
  console.warn("Attention: source logo introuvable:", sourceLogo);
}

if (!fs.existsSync(ogImagePath) && fs.existsSync(sourceOgImage)) {
  fs.copyFileSync(sourceOgImage, ogImagePath);
  console.log("Créé: public/og-image.jpg (copie de images/og/installation-imprimante-maroc.jpg)");
} else if (fs.existsSync(ogImagePath)) {
  console.log("Existe déjà: public/og-image.jpg");
} else {
  console.warn("Attention: source og-image introuvable:", sourceOgImage);
}
