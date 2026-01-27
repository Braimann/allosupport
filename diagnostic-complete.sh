#!/bin/bash
# Script de diagnostic complet pour AlloSupport

echo "🔍 Diagnostic complet AlloSupport..."
echo "===================================="
echo ""

cd ~/support/allosupport || exit 1

# 1. Vérifier .env.local
echo "1️⃣  Vérification .env.local"
if [ -f .env.local ]; then
    echo "✅ Fichier existe"
    echo "   Contenu (premières lignes):"
    head -3 .env.local | sed 's/=.*/=***/'  # Masquer les valeurs
    echo ""
    # Vérifier que toutes les variables sont présentes
    if grep -q "NEXT_PUBLIC_FIREBASE_API_KEY" .env.local && \
       grep -q "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN" .env.local && \
       grep -q "NEXT_PUBLIC_FIREBASE_PROJECT_ID" .env.local; then
        echo "✅ Toutes les variables Firebase sont présentes"
    else
        echo "❌ Variables Firebase manquantes !"
    fi
else
    echo "❌ Fichier .env.local n'existe pas !"
fi
echo ""

# 2. Vérifier le build
echo "2️⃣  Vérification du build"
if [ -d .next ]; then
    echo "✅ Dossier .next existe"
    if [ -f .next/prerender-manifest.json ]; then
        echo "✅ prerender-manifest.json existe"
    else
        echo "❌ prerender-manifest.json manquant"
    fi
    if [ -d .next/server ]; then
        echo "✅ Dossier .next/server existe"
    else
        echo "❌ Dossier .next/server manquant"
    fi
else
    echo "❌ Dossier .next n'existe pas - BUILD REQUIS"
fi
echo ""

# 3. Vérifier PM2
echo "3️⃣  Vérification PM2"
pm2_status=$(pm2 list | grep allosupport || echo "")
if [ -z "$pm2_status" ]; then
    echo "❌ PM2: allosupport n'est pas démarré"
else
    echo "✅ PM2: allosupport est démarré"
    pm2 list | grep allosupport
    echo ""
    echo "   Dernières erreurs (5 lignes):"
    pm2 logs allosupport --err --lines 5 --nostream 2>/dev/null | tail -5 || echo "   (aucune erreur récente)"
fi
echo ""

# 4. Vérifier le port 3000
echo "4️⃣  Vérification du port 3000"
if lsof -i :3000 >/dev/null 2>&1; then
    echo "✅ Port 3000 est utilisé"
    lsof -i :3000 | head -2
else
    echo "❌ Port 3000 n'est pas utilisé - l'application n'écoute pas"
fi
echo ""

# 5. Test de connexion locale
echo "5️⃣  Test de connexion locale"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/admin/login | grep -q "200\|301\|302"; then
    echo "✅ L'application répond sur localhost:3000"
else
    echo "❌ L'application ne répond pas sur localhost:3000"
    echo "   Code HTTP: $(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/admin/login)"
fi
echo ""

# 6. Vérifier Nginx
echo "6️⃣  Vérification Nginx"
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx est actif"
    if [ -f /etc/nginx/sites-available/allosupport.ma ]; then
        echo "✅ Configuration Nginx existe"
    else
        echo "⚠️  Configuration Nginx non trouvée"
    fi
else
    echo "❌ Nginx n'est pas actif"
fi
echo ""

# 7. Résumé et recommandations
echo "===================================="
echo "📋 RÉSUMÉ ET ACTIONS RECOMMANDÉES"
echo "===================================="
echo ""

if [ ! -f .env.local ]; then
    echo "❌ ACTION 1: Créer .env.local"
    echo "   nano .env.local"
    echo ""
fi

if [ ! -d .next ] || [ ! -f .next/prerender-manifest.json ]; then
    echo "❌ ACTION 2: Faire un build complet"
    echo "   rm -rf .next"
    echo "   npm run build"
    echo ""
fi

if [ -z "$pm2_status" ]; then
    echo "❌ ACTION 3: Démarrer PM2"
    echo "   pm2 start ecosystem.config.js"
    echo ""
fi

echo "✅ Si tout est OK, testez: https://allosupport.ma/admin/login"
echo ""
