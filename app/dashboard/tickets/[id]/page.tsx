"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  getTicketById,
  addMessageToTicket,
  subscribeToTicket,
  Ticket,
  TicketMessage,
} from "@/lib/firebase/tickets-service";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
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

export default function TicketDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const ticketId = params.id as string;

  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ticketId) {
      loadTicket();
      
      // Subscribe to real-time updates
      const unsubscribe = subscribeToTicket(ticketId, (updatedTicket) => {
        if (updatedTicket) {
          setTicket(updatedTicket);
        }
      });

      return () => unsubscribe();
    }
  }, [ticketId]);

  useEffect(() => {
    // Auto-scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ticket?.messages]);

  const loadTicket = async () => {
    setLoading(true);
    const ticketData = await getTicketById(ticketId);
    if (!ticketData) {
      router.push("/dashboard");
      return;
    }
    setTicket(ticketData);
    setLoading(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !ticket || !user) return;

    setSending(true);
    const success = await addMessageToTicket(ticketId, {
      text: message.trim(),
      sender: "user",
    });

    if (success) {
      setMessage("");
      // Real-time update will handle the refresh automatically
    }
    setSending(false);
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
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500">Chargement du ticket...</p>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return null;
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{ticket.subject}</h2>
            <div className="flex items-center gap-3">
              {getStatusBadge(ticket.status)}
              {ticket.priority === "urgent" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
                  <AlertCircle className="w-3 h-3" />
                  Urgent
                </span>
              )}
              <span className="text-sm text-gray-500">
                Créé le {formatDate(ticket.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col" style={{ height: "600px" }}>
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {ticket.messages.map((msg: TicketMessage, index: number) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={index}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-emerald-600" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    isUser
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {msg.text}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      isUser ? "text-emerald-100" : "text-gray-500"
                    }`}
                  >
                    {formatDate(msg.date)}
                  </p>
                </div>
                {isUser && (
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-emerald-600" />
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
                placeholder="Tapez votre message..."
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
            <p className="text-xs text-gray-500 mt-2 text-center">
              Un technicien vous répondra dans les plus brefs délais
            </p>
          </form>
        )}

        {ticket.status === "resolved" && (
          <div className="border-t border-gray-200 p-4 bg-gray-50 text-center">
            <p className="text-sm text-gray-500">
              Ce ticket est résolu. Vous pouvez créer un nouveau ticket si vous avez besoin d'aide.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
