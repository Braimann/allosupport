"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Ticket,
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Loader2,
} from "lucide-react";
import { onAuthChange, isAdmin } from "@/lib/firebase/auth-service";
import { getAllTickets, updateTicketStatus, Ticket as TicketType } from "@/lib/firebase/tickets-service";
import { getUserProfiles, UserProfile } from "@/lib/firebase/users-service";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { User } from "firebase/auth";

export default function AdminTicketsPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [userProfiles, setUserProfiles] = useState<Map<string, UserProfile>>(new Map());
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (!user || !isAdmin(user)) {
        router.push("/admin/login");
        return;
      }
      setUser(user);
      loadTickets();
    });

    return () => unsubscribe();
  }, [router]);

  const loadTickets = async () => {
    setLoading(true);
    const data = await getAllTickets();
    setTickets(data);
    
    // Load user profiles for all tickets
    const userIds = Array.from(new Set(data.map(t => t.userId)));
    const profiles = await getUserProfiles(userIds);
    setUserProfiles(profiles);
    
    setLoading(false);
  };

  const handleStatusChange = async (ticketId: string, newStatus: "open" | "in_progress" | "resolved") => {
    setUpdating(ticketId);
    await updateTicketStatus(ticketId, newStatus);
    await loadTickets();
    setUpdating(null);
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

  const getStatusBadge = (status: TicketType["status"]) => {
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
          <p className="text-gray-500">Chargement des tickets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour au dashboard</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Tickets</h1>
          <p className="text-gray-500">Tous les tickets clients</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Tickets ouverts</p>
                <p className="text-2xl font-bold text-green-600">
                  {tickets.filter((t) => t.status === "open").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">En cours</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {tickets.filter((t) => t.status === "in_progress").length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Résolus</p>
                <p className="text-2xl font-bold text-gray-600">
                  {tickets.filter((t) => t.status === "resolved").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {tickets.length === 0 ? (
            <div className="p-12 text-center">
              <Ticket className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aucun ticket
              </h3>
              <p className="text-gray-500">Aucun ticket n'a été créé pour le moment.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Sujet
                    </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        SLA
                      </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-sm font-mono text-gray-500">
                          #{ticket.id.slice(0, 8)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {ticket.subject}
                          </span>
                          {ticket.priority === "urgent" && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
                              <AlertCircle className="w-3 h-3" />
                              Urgent
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                          {ticket.description}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">
                            {userProfiles.get(ticket.userId)?.name || "Client"}
                          </span>
                          <span className="text-xs text-gray-500">
                            {userProfiles.get(ticket.userId)?.email || ticket.userId.slice(0, 8) + "..."}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          ticket.clientType === "pro" 
                            ? "bg-blue-100 text-blue-700" 
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {ticket.clientType === "pro" ? "Pro" : "Particulier"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700 font-medium">
                          {ticket.sla || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700 capitalize">
                          {ticket.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={ticket.status}
                          onChange={(e) =>
                            handleStatusChange(
                              ticket.id,
                              e.target.value as "open" | "in_progress" | "resolved"
                            )
                          }
                          disabled={updating === ticket.id}
                          className="text-xs font-semibold border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                        >
                          <option value="open">Ouvert</option>
                          <option value="in_progress">En cours</option>
                          <option value="resolved">Résolu</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {formatDate(ticket.createdAt)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/tickets/${ticket.id}`}
                          className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                        >
                          <Eye className="w-4 h-4" />
                          Voir
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
