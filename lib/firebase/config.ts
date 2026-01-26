import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getAuth, Auth } from "firebase/auth";

// Configuration Firebase - REMPLACER PAR VOS VALEURS
// Vous trouverez ces valeurs dans : Firebase Console > Paramètres du projet > Vos applications
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate Firebase configuration
function validateFirebaseConfig() {
  const required = [
    "NEXT_PUBLIC_FIREBASE_API_KEY",
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "NEXT_PUBLIC_FIREBASE_APP_ID",
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(
      `❌ Firebase configuration error: Missing environment variables:\n${missing.join("\n")}\n\n` +
        `Please create a .env.local file in the project root with all Firebase configuration.\n` +
        `See env.example.txt for a template.`
    );
    return false;
  }

  return true;
}

// Initialize Firebase (singleton pattern) with error handling
let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;
let auth: Auth | null = null;

try {
  if (validateFirebaseConfig()) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    storage = getStorage(app);
    auth = getAuth(app);
  }
} catch (error) {
  console.error("❌ Firebase initialization error:", error);
  console.error(
    "Please check your .env.local file and ensure all Firebase configuration is correct."
  );
}

// Export with null checks
export { db, storage, auth };
export default app;
