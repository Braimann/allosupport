#!/bin/bash
# Script pour corriger l'erreur "prerender-manifest.json" manquant

echo "🔧 Correction du build AlloSupport..."

# 1. Aller dans le dossier du projet
cd ~/support/allosupport || exit 1

# 2. Arrêter PM2 pour éviter les conflits
echo "⏸️  Arrêt de PM2..."
pm2 stop allosupport 2>/dev/null || true
pm2 delete allosupport 2>/dev/null || true
echo "✅ PM2 arrêté"

# 3. Vérifier que .env.local existe
if [ ! -f .env.local ]; then
    echo "❌ ERREUR: .env.local n'existe pas !"
    echo "Créez-le d'abord avec: nano .env.local"
    exit 1
fi
echo "✅ .env.local trouvé"

# 4. Nettoyer complètement le cache
echo ""
echo "🧹 Nettoyage complet du cache..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .next/cache 2>/dev/null || true
echo "✅ Cache nettoyé"

# 5. Rebuild complet
echo ""
echo "🔨 Build en cours (cela peut prendre 1-2 minutes)..."
npm run build

# 6. Vérifier si le build a réussi
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build réussi !"
    
    # 7. Vérifier que .next existe et contient les fichiers nécessaires
    if [ -f .next/prerender-manifest.json ]; then
        echo "✅ prerender-manifest.json créé"
    else
        echo "⚠️  Attention: prerender-manifest.json non trouvé après le build"
    fi
    
    # 8. Redémarrer PM2
    echo ""
    echo "🔄 Redémarrage de PM2..."
    pm2 start ecosystem.config.js
    pm2 save
    echo ""
    echo "✅ Application redémarrée !"
    echo ""
    echo "📊 Status PM2:"
    pm2 status
    echo ""
    echo "🧪 Testez maintenant: https://allosupport.ma/admin/login"
    echo ""
    echo "📋 Pour voir les logs: pm2 logs allosupport --lines 50"
else
    echo ""
    echo "❌ Build échoué. Vérifiez les erreurs ci-dessus."
    echo ""
    echo "💡 Vérifications possibles:"
    echo "   - .env.local existe et contient toutes les variables Firebase"
    echo "   - npm install a été exécuté"
    echo "   - Pas d'erreurs TypeScript"
    exit 1
fi
