import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "./config";

// Sign in with email and password
export async function signIn(
  email: string,
  password: string
): Promise<User | null> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    return null;
  }
}

// Sign out
export async function signOut(): Promise<boolean> {
  try {
    await firebaseSignOut(auth);
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    return false;
  }
}

// Get current user
export function getCurrentUser(): User | null {
  return auth.currentUser;
}

// Listen to auth state changes
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// Check if user is admin
export function isAdmin(user: User | null): boolean {
  if (!user || !user.email) return false;
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  if (!adminEmail) {
    console.error("NEXT_PUBLIC_ADMIN_EMAIL is not set in .env.local");
    return false;
  }
  // Normaliser les emails (lowercase, trim) pour éviter les erreurs de casse/espaces
  return user.email.toLowerCase().trim() === adminEmail.toLowerCase().trim();
}
