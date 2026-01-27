import { doc, getDoc, Firestore } from "firebase/firestore";
import { db } from "./config";

function getDbInstance(): Firestore {
  if (!db) {
    throw new Error(
      "Firestore is not initialized. Please check your Firebase configuration."
    );
  }
  return db;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  createdAt: any;
  updatedAt?: any;
}

// Get user profile by userId
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const userDoc = await getDoc(doc(getDbInstance(), "users", userId));
    if (!userDoc.exists()) {
      return null;
    }
    return {
      id: userDoc.id,
      ...userDoc.data(),
    } as UserProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

// Get multiple user profiles
export async function getUserProfiles(userIds: string[]): Promise<Map<string, UserProfile>> {
  const profiles = new Map<string, UserProfile>();
  
  await Promise.all(
    userIds.map(async (userId) => {
      const profile = await getUserProfile(userId);
      if (profile) {
        profiles.set(userId, profile);
      }
    })
  );
  
  return profiles;
}
