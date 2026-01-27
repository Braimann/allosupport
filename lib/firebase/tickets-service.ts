import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
  Timestamp,
  Firestore,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { db } from "./config";

export interface TicketMessage {
  text: string;
  sender: "user" | "admin";
  date: Timestamp;
}

export interface Ticket {
  id: string;
  userId: string;
  status: "open" | "in_progress" | "resolved";
  priority: "normal" | "urgent";
  subject: string;
  category: "virus" | "panne" | "installation" | "b2b";
  description: string;
  clientType: "particulier" | "pro";
  sla: string; // Ex: "15 min", "1h", "4h", "24h"
  createdAt: Timestamp;
  updatedAt: Timestamp;
  messages: TicketMessage[];
}

const COLLECTION_NAME = "tickets";

function getDbInstance(): Firestore {
  if (!db) {
    throw new Error(
      "Firestore is not initialized. Please check your Firebase configuration."
    );
  }
  return db;
}

// Create a new ticket
export async function createTicket(
  userId: string,
  data: {
    subject: string;
    category: "virus" | "panne" | "installation" | "b2b";
    priority: "normal" | "urgent";
    description: string;
    clientType: "particulier" | "pro";
    sla: string;
  }
): Promise<string | null> {
  try {
    const now = Timestamp.now();
    const ticketData = {
      userId,
      status: "open" as const,
      priority: data.priority,
      subject: data.subject,
      category: data.category,
      description: data.description,
      clientType: data.clientType,
      sla: data.sla,
      createdAt: now,
      updatedAt: now,
      messages: [
        {
          text: data.description,
          sender: "user" as const,
          date: now,
        },
      ],
    };

    const docRef = await addDoc(
      collection(getDbInstance(), COLLECTION_NAME),
      ticketData
    );
    return docRef.id;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return null;
  }
}

// Get all tickets for a user
export async function getUserTickets(userId: string): Promise<Ticket[]> {
  try {
    const q = query(
      collection(getDbInstance(), COLLECTION_NAME),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const tickets: Ticket[] = [];

    querySnapshot.forEach((doc) => {
      tickets.push({
        id: doc.id,
        ...doc.data(),
      } as Ticket);
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching user tickets:", error);
    return [];
  }
}

// Get all tickets (admin only)
export async function getAllTickets(): Promise<Ticket[]> {
  try {
    const q = query(
      collection(getDbInstance(), COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const tickets: Ticket[] = [];

    querySnapshot.forEach((doc) => {
      tickets.push({
        id: doc.id,
        ...doc.data(),
      } as Ticket);
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching all tickets:", error);
    return [];
  }
}

// Get a single ticket by ID
export async function getTicketById(ticketId: string): Promise<Ticket | null> {
  try {
    const docRef = doc(getDbInstance(), COLLECTION_NAME, ticketId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as Ticket;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return null;
  }
}

// Add a message to a ticket
export async function addMessageToTicket(
  ticketId: string,
  message: { text: string; sender: "user" | "admin" }
): Promise<boolean> {
  try {
    const ticketRef = doc(getDbInstance(), COLLECTION_NAME, ticketId);
    const ticket = await getTicketById(ticketId);

    if (!ticket) {
      return false;
    }

    const newMessage: TicketMessage = {
      text: message.text,
      sender: message.sender,
      date: Timestamp.now(),
    };

    await updateDoc(ticketRef, {
      messages: [...ticket.messages, newMessage],
      updatedAt: Timestamp.now(),
    });

    return true;
  } catch (error) {
    console.error("Error adding message to ticket:", error);
    return false;
  }
}

// Update ticket status
export async function updateTicketStatus(
  ticketId: string,
  status: "open" | "in_progress" | "resolved"
): Promise<boolean> {
  try {
    const ticketRef = doc(getDbInstance(), COLLECTION_NAME, ticketId);
    await updateDoc(ticketRef, {
      status,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating ticket status:", error);
    return false;
  }
}

// Subscribe to ticket updates in real-time
export function subscribeToTicket(
  ticketId: string,
  callback: (ticket: Ticket | null) => void
): Unsubscribe {
  const ticketRef = doc(getDbInstance(), COLLECTION_NAME, ticketId);
  
  return onSnapshot(
    ticketRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback({
          id: docSnap.id,
          ...docSnap.data(),
        } as Ticket);
      } else {
        callback(null);
      }
    },
    (error) => {
      console.error("Error subscribing to ticket:", error);
      callback(null);
    }
  );
}

// Get user name by userId
export async function getUserName(userId: string): Promise<string> {
  try {
    const userDoc = await getDoc(doc(getDbInstance(), "users", userId));
    if (userDoc.exists()) {
      const data = userDoc.data();
      return data.name || data.email?.split("@")[0] || "Client";
    }
    return "Client";
  } catch (error) {
    console.error("Error fetching user name:", error);
    return "Client";
  }
}
