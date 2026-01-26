# 🔧 Debug Serveur Next.js - AlloSupport.ma

## Problème : Serveur bloque au démarrage

### Solutions appliquées :

1. ✅ **Cache nettoyé** : `.next` supprimé
2. ✅ **Processus Node arrêtés** : Tous les processus Node.js ont été arrêtés
3. ✅ **Code corrigé** : Simplification de `getPublishedPosts()` pour éviter les erreurs TypeScript

---

## Vérifications à faire :

### 1. Vérifier les erreurs dans le terminal

Ouvrez le terminal où `npm run dev` tourne et cherchez :
- ❌ Erreurs de compilation TypeScript
- ❌ Erreurs Firebase (config manquante)
- ❌ Erreurs d'import

### 2. Vérifier que Firebase est configuré

Le fichier `.env.local` doit contenir :
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
```

### 3. Si le serveur ne démarre toujours pas

**Option A : Redémarrer manuellement**
```bash
# Arrêter (Ctrl+C)
# Puis :
npm run dev
```

**Option B : Vérifier les ports**
```bash
# Vérifier si le port 3001 est utilisé
netstat -ano | findstr :3001
```

**Option C : Réinstaller les dépendances**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Erreurs courantes et solutions :

### "Firebase app not initialized"
**Solution :** Vérifiez que `.env.local` existe et contient toutes les variables

### "Cannot find module"
**Solution :** 
```bash
npm install
```

### "Port already in use"
**Solution :**
```bash
# Tuer le processus sur le port 3001
netstat -ano | findstr :3001
# Notez le PID, puis :
taskkill /PID [PID] /F
```

### Compilation très lente
**Solution :** Normal pour la première compilation. Attendez 30-60 secondes.

---

## Temps de compilation normal :

- **Première fois :** 30-60 secondes
- **Après modifications :** 5-15 secondes
- **Avec cache nettoyé :** 30-60 secondes

---

## Si rien ne fonctionne :

1. **Arrêtez le serveur** (Ctrl+C)
2. **Vérifiez les erreurs** dans le terminal
3. **Copiez-collez l'erreur** complète ici

---

**Status :** Serveur redémarré avec cache nettoyé. Attendez 30-60 secondes pour la première compilation.
