import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getAuth, Auth } from "firebase/auth";

// Configuration Firebase - Valeurs hardcodées (supporttechnique-84e72)
const firebaseConfig = {
  apiKey: "AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs",
  authDomain: "supporttechnique-84e72.firebaseapp.com",
  projectId: "supporttechnique-84e72",
  storageBucket: "supporttechnique-84e72.firebasestorage.app",
  messagingSenderId: "60760511085",
  appId: "1:60760511085:web:8ccd92704ef4c6eb03a564",
};

// Initialize Firebase (singleton pattern) with error handling
let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;
let auth: Auth | null = null;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  storage = getStorage(app);
  auth = getAuth(app);
  console.log("✅ Firebase initialized successfully");
} catch (error) {
  console.error("❌ Firebase initialization error:", error);
}

// Export with null checks
export { db, storage, auth };
export default app;
