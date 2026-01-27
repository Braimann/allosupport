import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import type { Auth } from "firebase/auth";
import { auth } from "./config";

function getAuthInstance(): Auth {
  if (!auth) {
    throw new Error(
      "Firebase auth is not initialized. Please check your .env.local Firebase configuration."
    );
  }
  return auth;
}

// Sign in with email and password
export async function signIn(
  email: string,
  password: string
): Promise<User | null> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      getAuthInstance(),
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    return null;
  }
}

// Sign up with email and password
export async function signUp(
  email: string,
  password: string
): Promise<User | null> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      getAuthInstance(),
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    return null;
  }
}

// Sign in with Google
export async function signInWithGoogle(): Promise<User | null> {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(getAuthInstance(), provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return null;
  }
}

// Sign out
export async function signOut(): Promise<boolean> {
  try {
    await firebaseSignOut(getAuthInstance());
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    return false;
  }
}

// Get current user
export function getCurrentUser(): User | null {
  return getAuthInstance().currentUser;
}

// Listen to auth state changes
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(getAuthInstance(), callback);
}

// Check if user is admin
export function isAdmin(user: User | null): boolean {
  if (!user || !user.email) return false;
  // Email admin hardcodé
  const adminEmail = "brahim.boumai97@gmail.com";
  // Normaliser les emails (lowercase, trim) pour éviter les erreurs de casse/espaces
  return user.email.toLowerCase().trim() === adminEmail.toLowerCase().trim();
}
