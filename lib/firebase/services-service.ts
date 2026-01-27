import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";

// Types
export interface ServicePage {
  id?: string;
  slug: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  pricing: Array<{
    name: string;
    price: string;
    description: string;
    features?: string[];
  }>;
  content: string; // HTML content
  keywords: string[];
  relatedBlogPosts: string[]; // Blog post slugs
  imageUrl?: string;
  imageAlt?: string;
  published: boolean;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

export interface ServicePageInput {
  slug: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  pricing: Array<{
    name: string;
    price: string;
    description: string;
    features?: string[];
  }>;
  content: string;
  keywords: string[];
  relatedBlogPosts: string[];
  imageUrl?: string;
  imageAlt?: string;
  published: boolean;
}

const COLLECTION_NAME = "services";

// Get all published service pages
export async function getPublishedServices(): Promise<ServicePage[]> {
  if (!db) {
    console.warn("Firebase not initialized. Falling back to static services.");
    try {
      const { getAllStaticServices } = await import("../services-data");
      return getAllStaticServices();
    } catch {
      return [];
    }
  }
  try {
    const servicesRef = collection(db, COLLECTION_NAME);
    const q = query(
      servicesRef,
      where("published", "==", true),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);

    const firebaseServices = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ServicePage[];

    // Merge with static services (avoid duplicates)
    const { getAllStaticServices } = await import("../services-data");
    const staticServices = getAllStaticServices();
    const staticSlugs = new Set(firebaseServices.map((s) => s.slug));
    const additionalStatic = staticServices.filter((s) => !staticSlugs.has(s.slug));

    return [...firebaseServices, ...additionalStatic];
  } catch (error) {
    console.error("Error fetching published services:", error);
    // Fallback to static data on error
    try {
      const { getAllStaticServices } = await import("../services-data");
      return getAllStaticServices();
    } catch {
      return [];
    }
  }
}

// Get all service pages (including drafts) - for admin
export async function getAllServices(): Promise<ServicePage[]> {
  if (!db) {
    console.warn("Firebase not initialized. Returning empty array.");
    return [];
  }
  try {
    const servicesRef = collection(db, COLLECTION_NAME);
    const q = query(servicesRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ServicePage[];
  } catch (error) {
    console.error("Error fetching all services:", error);
    return [];
  }
}

// Get a single service by slug
export async function getServiceBySlug(slug: string): Promise<ServicePage | null> {
  if (!db) {
    console.warn("Firebase not initialized. Falling back to static service.");
    try {
      const { getStaticServiceBySlug } = await import("../services-data");
      return getStaticServiceBySlug(slug);
    } catch {
      return null;
    }
  }
  try {
    const servicesRef = collection(db, COLLECTION_NAME);
    const q = query(servicesRef, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
      } as ServicePage;
    }

    // Fallback to static data if not found in Firebase
    const { getStaticServiceBySlug } = await import("../services-data");
    return getStaticServiceBySlug(slug);
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    // Fallback to static data on error
    try {
      const { getStaticServiceBySlug } = await import("../services-data");
      return getStaticServiceBySlug(slug);
    } catch {
      return null;
    }
  }
}

// Get a single service by ID
export async function getServiceById(id: string): Promise<ServicePage | null> {
  if (!db) {
    console.warn("Firebase not initialized. Returning null.");
    return null;
  }
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as ServicePage;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return null;
  }
}

// Create a new service page
export async function createService(
  service: ServicePageInput
): Promise<string | null> {
  if (!db) {
    console.warn("Firebase not initialized. Cannot create service.");
    return null;
  }
  try {
    const servicesRef = collection(db, COLLECTION_NAME);
    const now = Timestamp.now();

    const docRef = await addDoc(servicesRef, {
      ...service,
      createdAt: now,
      updatedAt: now,
    });

    return docRef.id;
  } catch (error) {
    console.error("Error creating service:", error);
    return null;
  }
}

// Update a service page
export async function updateService(
  id: string,
  service: Partial<ServicePageInput>
): Promise<boolean> {
  if (!db) {
    console.warn("Firebase not initialized. Cannot update service.");
    return false;
  }
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...service,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating service:", error);
    return false;
  }
}

// Delete a service page
export async function deleteService(id: string): Promise<boolean> {
  if (!db) {
    console.warn("Firebase not initialized. Cannot delete service.");
    return false;
  }
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting service:", error);
    return false;
  }
}

// Get all slugs for sitemap
export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const services = await getPublishedServices();
    return services.map((service) => service.slug);
  } catch (error) {
    console.error("Error fetching service slugs:", error);
    return [];
  }
}

// Find services by keywords (for internal linking)
export async function findServicesByKeywords(
  keywords: string[]
): Promise<ServicePage[]> {
  try {
    const allServices = await getPublishedServices();
    
    // Simple keyword matching (can be improved with better algorithm)
    return allServices.filter((service) => {
      const serviceKeywords = service.keywords.map((k) => k.toLowerCase());
      return keywords.some((keyword) =>
        serviceKeywords.some((sk) => sk.includes(keyword.toLowerCase()))
      );
    });
  } catch (error) {
    console.error("Error finding services by keywords:", error);
    return [];
  }
}

// Helper: Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-") // Replace multiple - with single -
    .trim();
}
