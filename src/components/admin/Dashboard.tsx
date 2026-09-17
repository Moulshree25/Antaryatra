"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Plus,
  BarChart,
  Users,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  mode: string;
  goal: string;
  practices: string;
  notes: string;
  createdAt: string;
};

type DashboardProps = {
  searchTerm: string;
};

export default function Dashboard({ searchTerm }: DashboardProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch("/api/admin/bookings");

        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();

        setBookings(data.bookings ?? data);
      } catch (err) {
        console.error(err);
        setError("Unable to load bookings.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
  const search = searchTerm.toLowerCase().trim();

  if (!search) return true;

  return (
    booking.name.toLowerCase().includes(search) ||
    booking.email.toLowerCase().includes(search) ||
    booking.phone.toLowerCase().includes(search) ||
    booking.goal.toLowerCase().includes(search) ||
    booking.mode.toLowerCase().includes(search)
  );
});

  async function handleDelete(id: number) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this booking?"
  );

  if (!confirmed) return;

  try {
    setDeletingId(id);

    const response = await fetch("/api/admin/bookings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete booking");
    }

    setBookings((currentBookings) =>
      currentBookings.filter((booking) => booking.id !== id)
    );
  } catch (err) {
    console.error(err);
    setError("Unable to delete booking.");
  } finally {
    setDeletingId(null);
  }
}

  function handleExport() {
  if (bookings.length === 0) {
    alert("There are no bookings to export.");
    return;
  }

  const headers = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Mode",
    "Goal",
    "Practices",
    "Notes",
    "Created At",
  ];

  const rows = bookings.map((booking) => [
    booking.id,
    booking.name,
    booking.email,
    booking.phone,
    booking.mode,
    booking.goal,
    booking.practices,
    booking.notes,
    new Date(booking.createdAt).toISOString(),
  ]);

  const csv = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `antaryatra-bookings-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

  return (
    <div className="px-10 pt-10 pb-12 max-w-[1380px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-bold tracking-[0.15em] text-primary uppercase mb-2 block">System Overview</span>
          <h2 className="text-[64px] font-display font-extrabold text-on-surface tracking-tighter leading-none mb-4">Welcome to Restorative Admin</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Monitor bookings, clients, and staff from your wellness center dashboard.
          </p>
        </div>
        <div className="flex gap-3">
           <button
            onClick={handleExport}
            className="bg-surface-container-high hover:bg-surface-container-highest text-primary px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all"
            >
            Export Report
            </button>
          <button
          onClick={() => {
          window.location.href = "/booking";
          }}
          className="bg-[#73816C] hover:bg-[#73816C]-container text-white px-8 py-4 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
          >
          <Plus size={20} />
          Booking
        </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Activity Chart Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bg-white p-10 rounded-[28px] flex flex-col items-center justify-center min-h-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-5 flex items-end justify-center pointer-events-none transition-transform duration-1000 group-hover:scale-110">
            <svg className="w-full h-48 text-primary" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path d="M0,150 Q250,50 500,150 T1000,50" fill="none" stroke="currentColor" strokeWidth="8" />
            </svg>
          </div>
          
          <div className="bg-[#DCE7D5] w-20 h-20 rounded-[28px] flex items-center justify-center text-primary mb-6 shadow-inner">
            <BarChart size={32} />
          </div>
          <h3 className="text-xl font-display font-bold mb-2 text-on-surface text-center">
          {loading
          ? "Loading booking activity..."
          : bookings.length > 0
          ? `${bookings.length} booking${bookings.length === 1 ? "" : "s"} recorded`
          : "No bookings yet"}
          </h3>

          <p className="text-on-surface-variant text-center max-w-xs mb-8">
          {error
          ? error
          : bookings.length > 0
          ? "Your booking records are now connected to the admin dashboard."
          : "New bookings will appear here automatically."}
          </p>
          <div className="text-primary font-bold flex items-center gap-2">
          Live booking data <ArrowRight size={18} />
          </div>
        </motion.div>

        {/* Metric Cards */}
        <div className="md:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center h-[188px] justify-center"
          >
            <BarChart size={32} className="text-secondary mb-3" />
            <h4 className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Total Revenue</h4>
            <p className="text-4xl font-display font-black text-on-surface">—</p>
            <p className="text-[10px] text-on-surface-variant/40 mt-2 italic">
            Payment data not available
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex flex-col items-center text-center h-[188px] justify-center"
          >
            <Users size={32} className="text-primary mb-3" />
            <h4 className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">New Registrations</h4>
            <p className="text-4xl font-display font-black text-on-surface">
            {loading ? "..." : bookings.length}
            </p>
            <p className="text-[10px] text-on-surface-variant/40 mt-2 italic">
            Total registered bookings
            </p>
          </motion.div>
        </div>

        {/* Recent Bookings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-12 bg-surface-container-low rounded-[28px] p-1 shadow-sm"
        >
          <div className="bg-surface-container-lowest rounded-[1.9rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-display font-bold text-on-surface">Recent Bookings</h3>
              <span className="bg-[#73816C]-fixed text-primary px-3 py-1 rounded-full text-xs font-bold">Recent: {bookings.length}</span>
            </div>
            
            <div className="border-2 border-outline-variant/10 rounded-[28px] bg-surface/30 overflow-hidden">
  {loading ? (
    <div className="py-16 text-center text-on-surface-variant">
      Loading bookings...
    </div>
  ) : error ? (
    <div className="py-16 text-center text-red-600">
      {error}
    </div>
  ) : bookings.length === 0 ? (
    <div className="py-16 text-center">
      <div className="w-20 h-20 bg-surface-container-low rounded-[28px] flex items-center justify-center mx-auto mb-4">
        <LayoutDashboard size={40} className="text-on-surface-variant/20" />
      </div>

      <p className="text-lg font-display font-bold text-on-surface">
        No bookings yet
      </p>

      <p className="text-on-surface-variant mt-2">
        New client bookings will appear here.
      </p>
    </div>
  ) : (
    <div className="divide-y divide-outline-variant/10">
      {filteredBookings.slice(0, 5).map((booking) => (
        <div
          key={booking.id}
          className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <p className="font-bold text-on-surface">
              {booking.name}
            </p>

            <p className="text-sm text-on-surface-variant">
              {booking.email}
            </p>
          </div>

          <div className="text-sm text-on-surface-variant">
            <p>
              <span className="font-semibold">Mode:</span>{" "}
              {booking.mode}
            </p>

            <p>
              <span className="font-semibold">Goal:</span>{" "}
              {booking.goal || "Not specified"}
            </p>
          </div>

          <div className="flex items-center gap-4">
          <div className="text-sm text-on-surface-variant">
          {new Date(booking.createdAt).toLocaleDateString()}
          </div>

        <button
          onClick={() => handleDelete(booking.id)}
          disabled={deletingId === booking.id}
          className="px-4 py-2 rounded-lg bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {deletingId === booking.id ? "Deleting..." : "Delete"}
          </button>
        </div>
        </div>
      ))}
    </div>
  )}
</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
