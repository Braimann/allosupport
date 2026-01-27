# 🤖 Configuration du Chatbot AI - AlloSupport.ma

## ✅ Installation des dépendances

Exécutez cette commande pour installer les packages nécessaires :

```bash
npm install
```

Les packages suivants seront installés :
- `ai` : SDK Vercel AI
- `@ai-sdk/openai` : Intégration OpenAI pour le SDK AI
- `openai` : Client OpenAI (déjà présent)

## 🔑 Configuration de la clé API OpenAI

### Étape 1 : Obtenir une clé API OpenAI

1. Allez sur [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Connectez-vous ou créez un compte
3. Cliquez sur **"Create new secret key"**
4. Copiez la clé (elle commence par `sk-...`)

### Étape 2 : Ajouter la clé dans `.env.local`

Ouvrez le fichier `.env.local` à la racine du projet et ajoutez à la fin :

```env
# OpenAI API Key pour le chatbot AlloBot
OPENAI_API_KEY=sk-votre-cle-api-ici
```

**Exemple de `.env.local` complet :**
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564

# Admin Email
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com

# OpenAI API Key pour le chatbot AlloBot
OPENAI_API_KEY=sk-votre-cle-api-ici
```

**Important :**
- Ne partagez JAMAIS cette clé publiquement
- Le fichier `.env.local` est déjà dans `.gitignore` (ne sera pas commité)
- Redémarrez le serveur après avoir ajouté la clé

### Étape 3 : Vérifier la configuration

Après avoir ajouté la clé, redémarrez le serveur :

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez
npm run dev
```

## 🧪 Tester le chatbot

1. Ouvrez http://localhost:3000
2. Cliquez sur le bouton vert flottant en bas à droite (icône Message)
3. Tapez un message comme : "Mon PC est lent"
4. Le bot devrait répondre avec une astuce et proposer un pack

## 💰 Coûts OpenAI

Le chatbot utilise `gpt-4o-mini` qui est très économique :
- **Input** : ~$0.15 par 1M tokens
- **Output** : ~$0.60 par 1M tokens
- **Estimation** : ~0.001-0.01 DH par conversation

Pour 1000 conversations/mois : ~1-10 DH

## 🐛 Dépannage

### Erreur "Module not found: @ai-sdk/openai"
```bash
npm install @ai-sdk/openai
```

### Erreur "OPENAI_API_KEY non configurée"
- Vérifiez que `.env.local` contient `OPENAI_API_KEY=sk-...`
- Redémarrez le serveur (`Ctrl+C` puis `npm run dev`)

### Le chatbot ne répond pas
- Vérifiez la console du navigateur (F12) pour les erreurs
- Vérifiez les logs du serveur Next.js
- Vérifiez que votre clé API OpenAI est valide et a des crédits

## 📝 Structure du chatbot

- **API Route** : `app/api/chat/route.ts`
- **Composant** : `components/AIChatBubble.tsx`
- **Intégration** : `app/layout.tsx`

Le chatbot est maintenant intégré et apparaîtra sur toutes les pages du site !
