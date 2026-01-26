#!/bin/bash

# Script de déploiement automatique pour AlloSupport.ma
# Usage: ./deploy.sh

set -e  # Arrêter en cas d'erreur

echo "🚀 Déploiement AlloSupport.ma..."

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier qu'on est dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erreur: package.json non trouvé. Êtes-vous dans le bon répertoire ?${NC}"
    exit 1
fi

# Pull les dernières modifications
echo -e "${YELLOW}📥 Récupération des dernières modifications...${NC}"
git pull origin main

# Installer les dépendances
echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
npm install

# Build de production
echo -e "${YELLOW}🔨 Build de production...${NC}"
npm run build

# Redémarrer PM2
echo -e "${YELLOW}🔄 Redémarrage de l'application...${NC}"
pm2 restart allosupport

# Vérifier le statut
echo -e "${YELLOW}✅ Vérification du statut...${NC}"
sleep 2
pm2 status

echo -e "${GREEN}✅ Déploiement terminé avec succès !${NC}"
echo -e "${GREEN}🌐 Votre application est disponible sur https://allosupport.ma${NC}"
