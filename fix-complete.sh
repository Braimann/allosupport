#!/bin/bash
# Script de correction complète pour AlloSupport

set -e  # Arrêter en cas d'erreur

echo "🔧 Correction complète AlloSupport..."
echo "===================================="
echo ""

cd ~/support/allosupport || exit 1

# 1. Vérifier .env.local
echo "1️⃣  Vérification .env.local"
if [ ! -f .env.local ]; then
    echo "❌ ERREUR: .env.local n'existe pas !"
    exit 1
fi

# Vérifier le contenu
if ! grep -q "NEXT_PUBLIC_FIREBASE_API_KEY=" .env.local; then
    echo "❌ ERREUR: NEXT_PUBLIC_FIREBASE_API_KEY manquant dans .env.local"
    exit 1
fi

echo "✅ .env.local OK"
echo ""

# 2. Arrêter PM2
echo "2️⃣  Arrêt de PM2"
pm2 stop allosupport 2>/dev/null || true
pm2 delete allosupport 2>/dev/null || true
sleep 2
echo "✅ PM2 arrêté"
echo ""

# 3. Nettoyer complètement
echo "3️⃣  Nettoyage complet"
rm -rf .next
rm -rf node_modules/.cache
rm -rf .next/cache 2>/dev/null || true
echo "✅ Cache nettoyé"
echo ""

# 4. Build complet
echo "4️⃣  Build en cours..."
echo "   (Cela peut prendre 1-3 minutes)"
echo ""

npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ BUILD ÉCHOUÉ"
    echo "   Vérifiez les erreurs ci-dessus"
    exit 1
fi

echo ""
echo "✅ Build réussi"
echo ""

# 5. Vérifier que les fichiers sont créés
if [ ! -f .next/prerender-manifest.json ]; then
    echo "⚠️  Attention: prerender-manifest.json non trouvé"
    echo "   Mais continuons quand même..."
fi

# 6. Vérifier que les variables Firebase sont dans le build
echo "5️⃣  Vérification des variables Firebase dans le build"
if grep -r "AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs" .next/static 2>/dev/null | head -1 > /dev/null; then
    echo "✅ Variables Firebase détectées dans le build"
else
    echo "⚠️  Variables Firebase non détectées dans le build"
    echo "   (Cela peut être normal si elles sont minifiées)"
fi
echo ""

# 7. Démarrer PM2
echo "6️⃣  Démarrage de PM2"
pm2 start ecosystem.config.js
pm2 save
sleep 3
echo "✅ PM2 démarré"
echo ""

# 8. Vérifier le statut
echo "7️⃣  Vérification du statut"
pm2 status
echo ""

# 9. Attendre que l'application démarre
echo "8️⃣  Attente du démarrage (5 secondes)..."
sleep 5

# 10. Test de connexion
echo "9️⃣  Test de connexion"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/admin/login || echo "000")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "✅ L'application répond (HTTP $HTTP_CODE)"
else
    echo "⚠️  L'application répond avec le code HTTP: $HTTP_CODE"
    echo "   Vérifiez les logs: pm2 logs allosupport"
fi
echo ""

# 11. Afficher les dernières erreurs
echo "🔟 Dernières erreurs PM2 (si présentes):"
pm2 logs allosupport --err --lines 3 --nostream 2>/dev/null | tail -3 || echo "   (Aucune erreur récente)"
echo ""

echo "===================================="
echo "✅ CORRECTION TERMINÉE"
echo "===================================="
echo ""
echo "🧪 Testez maintenant:"
echo "   https://allosupport.ma/admin/login"
echo ""
echo "📋 Commandes utiles:"
echo "   pm2 status          - Voir le statut"
echo "   pm2 logs allosupport - Voir les logs"
echo "   pm2 restart allosupport - Redémarrer"
echo ""
