"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Loader2,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Shield,
} from "lucide-react";
import { onAuthChange, isAdmin } from "@/lib/firebase/auth-service";
import {
  getTicketById,
  addMessageToTicket,
  updateTicketStatus,
  subscribeToTicket,
  Ticket,
  TicketMessage,
} from "@/lib/firebase/tickets-service";
import { getUserProfile, UserProfile } from "@/lib/firebase/users-service";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { User as FirebaseUser } from "firebase/auth";

export default function AdminTicketDetailPage() {
  const params = useParams();
  const router = useRouter();
  const ticketId = params.id as string;

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [clientProfile, setClientProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticketUnsubscribe: (() => void) | null = null;
    
    const authUnsubscribe = onAuthChange((user) => {
      if (!user || !isAdmin(user)) {
        router.push("/admin/login");
        return;
      }
      setUser(user);
      if (ticketId) {
        loadTicket();
        
        // Subscribe to real-time updates
        ticketUnsubscribe = subscribeToTicket(ticketId, (updatedTicket) => {
          if (updatedTicket) {
            setTicket(updatedTicket);
          }
        });
      }
    });

    return () => {
      authUnsubscribe();
      if (ticketUnsubscribe) {
        ticketUnsubscribe();
      }
    };
  }, [router, ticketId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ticket?.messages]);

  const loadTicket = async () => {
    setLoading(true);
    const ticketData = await getTicketById(ticketId);
    if (!ticketData) {
      router.push("/admin/tickets");
      return;
    }
    setTicket(ticketData);
    
    // Load client profile
    const profile = await getUserProfile(ticketData.userId);
    setClientProfile(profile);
    
    setLoading(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !ticket || !user) return;

    setSending(true);
    const success = await addMessageToTicket(ticketId, {
      text: message.trim(),
      sender: "admin",
    });

    if (success) {
      setMessage("");
      // Real-time update will handle the refresh automatically
    }
    setSending(false);
  };

  const handleStatusChange = async (newStatus: "open" | "in_progress" | "resolved") => {
    if (!ticket) return;
    setUpdatingStatus(true);
    await updateTicketStatus(ticketId, newStatus);
    await loadTicket();
    setUpdatingStatus(false);
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Date inconnue";
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return format(date, "dd MMM yyyy à HH:mm", { locale: fr });
    } catch {
      return "Date invalide";
    }
  };

  const getStatusBadge = (status: Ticket["status"]) => {
    const styles = {
      open: "bg-green-100 text-green-700 border-green-200",
      in_progress: "bg-yellow-100 text-yellow-700 border-yellow-200",
      resolved: "bg-gray-100 text-gray-700 border-gray-200",
    };

    const labels = {
      open: "Ouvert",
      in_progress: "En cours",
      resolved: "Résolu",
    };

    const Icon = status === "resolved" ? CheckCircle : Clock;

    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}
      >
        <Icon className="w-3 h-3" />
        {labels[status]}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Chargement du ticket...</p>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/admin/tickets"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux tickets</span>
          </Link>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{ticket.subject}</h2>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {getStatusBadge(ticket.status)}
                {ticket.priority === "urgent" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
                    <AlertCircle className="w-3 h-3" />
                    Urgent
                  </span>
                )}
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                  ticket.clientType === "pro" 
                    ? "bg-blue-100 text-blue-700" 
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {ticket.clientType === "pro" ? "Pro" : "Particulier"}
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                  SLA: {ticket.sla || "N/A"}
                </span>
                <span className="text-sm text-gray-500">
                  Créé le {formatDate(ticket.createdAt)}
                </span>
              </div>
              {clientProfile && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{clientProfile.name}</span>
                  <span className="text-gray-400">•</span>
                  <span>{clientProfile.email}</span>
                </div>
              )}
            </div>

            {/* Status Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-700">Changer le statut</label>
              <select
                value={ticket.status}
                onChange={(e) =>
                  handleStatusChange(e.target.value as "open" | "in_progress" | "resolved")
                }
                disabled={updatingStatus}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm disabled:opacity-50"
              >
                <option value="open">Ouvert</option>
                <option value="in_progress">En cours</option>
                <option value="resolved">Résolu</option>
              </select>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col" style={{ height: "600px" }}>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {ticket.messages.map((msg: TicketMessage, index: number) => {
              const isAdmin = msg.sender === "admin";
              return (
                <div
                  key={index}
                  className={`flex gap-3 ${isAdmin ? "justify-end" : "justify-start"}`}
                >
                  {!isAdmin && (
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      isAdmin
                        ? "bg-emerald-500 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {msg.text}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        isAdmin ? "text-emerald-100" : "text-gray-500"
                      }`}
                    >
                      {formatDate(msg.date)}
                    </p>
                  </div>
                  {isAdmin && (
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-emerald-600" />
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {ticket.status !== "resolved" && (
            <form
              onSubmit={handleSendMessage}
              className="border-t border-gray-200 p-4 bg-white"
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Répondre au client..."
                  disabled={sending}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || sending}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {sending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          )}

          {ticket.status === "resolved" && (
            <div className="border-t border-gray-200 p-4 bg-gray-50 text-center">
              <p className="text-sm text-gray-500">
                Ce ticket est résolu. Vous pouvez le rouvrir si nécessaire.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
