#!/bin/bash
# Script pour reconstruire l'application avec les variables Firebase

echo "🔧 Rebuild AlloSupport avec Firebase..."

# 1. Aller dans le dossier du projet
cd ~/support/allosupport || exit 1

# 2. Vérifier que .env.local existe
if [ ! -f .env.local ]; then
    echo "❌ ERREUR: .env.local n'existe pas !"
    echo "Créez-le d'abord avec: nano .env.local"
    exit 1
fi

echo "✅ .env.local trouvé"

# 3. Afficher les premières lignes pour vérification
echo ""
echo "📋 Contenu de .env.local (premières lignes):"
head -3 .env.local
echo ""

# 4. Nettoyer le cache Next.js
echo "🧹 Nettoyage du cache..."
rm -rf .next
rm -rf node_modules/.cache
echo "✅ Cache nettoyé"

# 5. Rebuild
echo ""
echo "🔨 Build en cours..."
npm run build

# 6. Vérifier si le build a réussi
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build réussi !"
    echo ""
    echo "🔄 Redémarrage de PM2..."
    pm2 restart allosupport
    echo ""
    echo "✅ Application redémarrée !"
    echo ""
    echo "🧪 Testez maintenant: https://allosupport.ma/admin/login"
else
    echo ""
    echo "❌ Build échoué. Vérifiez les erreurs ci-dessus."
    exit 1
fi
