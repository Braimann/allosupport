"use client";

import { AuthProvider } from "./AuthContext";

// Wrapper pour lazy load AuthProvider (réduit JS initial)
export default function AuthProviderLazy({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
