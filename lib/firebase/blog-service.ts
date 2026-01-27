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
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "./config";

// Helper to check if Firebase is initialized
function checkFirebase() {
  if (!db) {
    throw new Error(
      "Firebase is not initialized. Please check your .env.local file."
    );
  }
  return db;
}

// Types
export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  imageAlt: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  readTime: string;
  published: boolean;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

export interface BlogPostInput {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  imageAlt: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  readTime: string;
  published: boolean;
}

const COLLECTION_NAME = "blog_posts";

// Get all published blog posts
export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!db) {
    console.warn("Firebase not initialized. Returning empty array.");
    return [];
  }
  try {
    const postsRef = collection(db, COLLECTION_NAME);
    
    // First try with orderBy (requires index)
    try {
      const q = query(
        postsRef,
        where("published", "==", true),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[];
    } catch (orderByError: unknown) {
      // If orderBy fails (missing index), try without orderBy
      const error = orderByError as { code?: string };
      if (error.code === "failed-precondition") {
        console.warn("Firestore index missing. Fetching without orderBy. Please create an index for: published (asc) + createdAt (desc)");
        const q = query(
          postsRef,
          where("published", "==", true)
        );
        const snapshot = await getDocs(q);
        
        // Sort manually in JavaScript
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BlogPost[];
        
        // Sort by createdAt descending
        return posts.sort((a, b) => {
          let dateA: number;
          let dateB: number;
          
          if (a.createdAt && typeof (a.createdAt as { toDate?: () => Date }).toDate === 'function') {
            dateA = (a.createdAt as { toDate: () => Date }).toDate().getTime();
          } else {
            dateA = new Date(a.createdAt as Date).getTime();
          }
          
          if (b.createdAt && typeof (b.createdAt as { toDate?: () => Date }).toDate === 'function') {
            dateB = (b.createdAt as { toDate: () => Date }).toDate().getTime();
          } else {
            dateB = new Date(b.createdAt as Date).getTime();
          }
          
          return dateB - dateA;
        });
      }
      throw orderByError;
    }
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    console.error("Error fetching published posts:", err);
    if (err.code === "failed-precondition") {
      console.error("Firestore index required. Please create a composite index for: published (asc) + createdAt (desc)");
    }
    return [];
  }
}

// Get all blog posts (including drafts) - for admin
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!db) {
    console.warn("Firebase not initialized. Returning empty array.");
    return [];
  }
  try {
    const postsRef = collection(db, COLLECTION_NAME);
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!db) {
    console.warn("Firebase not initialized. Returning null.");
    return null;
  }
  try {
    const postsRef = collection(db, COLLECTION_NAME);
    const q = query(postsRef, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    } as BlogPost;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

// Get a single post by ID
export async function getPostById(id: string): Promise<BlogPost | null> {
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
    } as BlogPost;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
}

// Create a new blog post
export async function createPost(post: BlogPostInput): Promise<string | null> {
  if (!db) {
    console.warn("Firebase not initialized. Cannot create post.");
    return null;
  }
  try {
    const postsRef = collection(db, COLLECTION_NAME);
    const now = Timestamp.now();

    const docRef = await addDoc(postsRef, {
      ...post,
      createdAt: now,
      updatedAt: now,
    });

    return docRef.id;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}

// Update a blog post
export async function updatePost(
  id: string,
  post: Partial<BlogPostInput>
): Promise<boolean> {
  if (!db) {
    console.warn("Firebase not initialized. Cannot update post.");
    return false;
  }
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...post,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating post:", error);
    return false;
  }
}

// Delete a blog post
export async function deletePost(id: string): Promise<boolean> {
  if (!db) {
    console.warn("Firebase not initialized. Cannot delete post.");
    return false;
  }
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
}

// Upload image to Firebase Storage
export async function uploadImage(
  file: File,
  path: string
): Promise<string | null> {
  if (!storage) {
    console.warn("Firebase Storage not initialized. Cannot upload image.");
    return null;
  }
  try {
    const storageRef = ref(storage, `blog/${path}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}

// Delete image from Firebase Storage
export async function deleteImage(imageUrl: string): Promise<boolean> {
  if (!storage) {
    console.warn("Firebase Storage not initialized. Cannot delete image.");
    return false;
  }
  try {
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef);
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
}

// Get all slugs for sitemap
export async function getAllSlugs(): Promise<string[]> {
  try {
    const posts = await getPublishedPosts();
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching slugs:", error);
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

// Helper: Estimate read time
export function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lecture`;
}

// Categories with colors
export const BLOG_CATEGORIES = [
  { name: "Dépannage", color: "bg-blue-500" },
  { name: "Productivité", color: "bg-green-500" },
  { name: "Cybersécurité", color: "bg-red-500" },
  { name: "Cloud", color: "bg-purple-500" },
  { name: "Infogérance", color: "bg-orange-500" },
  { name: "SEO", color: "bg-teal-500" },
];
