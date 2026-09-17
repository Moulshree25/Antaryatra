"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  Users,
  Activity,
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

export default function Analytics() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBookings() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/admin/bookings", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to load analytics data");
        }

        const data = await res.json();

        setBookings(data.bookings ?? data);
      } catch (error) {
        console.error(error);
        setError("Unable to load analytics.");
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  const modeStats = useMemo(() => {
    const stats: Record<string, number> = {};

    bookings.forEach((booking) => {
      const mode = booking.mode || "Not specified";
      stats[mode] = (stats[mode] || 0) + 1;
    });

    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  }, [bookings]);

  const goalStats = useMemo(() => {
    const stats: Record<string, number> = {};

    bookings.forEach((booking) => {
      const goal = booking.goal || "Not specified";
      stats[goal] = (stats[goal] || 0) + 1;
    });

    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  }, [bookings]);

  const recentBookings = useMemo(() => {
    return [...bookings]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 5);
  }, [bookings]);

  return (
    <div className="max-w-[1380px] mx-auto p-10">

      <div className="mb-10">
        <p className="text-[10px] tracking-[0.2em] font-bold uppercase">
          ANALYTICS
        </p>

        <h1 className="text-5xl font-display font-black">
          Booking Analytics
        </h1>

        <p className="mt-3 text-on-surface-variant">
          Insights based on recorded booking data.
        </p>
      </div>

      {loading ? (
        <div className="bg-white rounded-[28px] p-12 text-center">
          Loading analytics...
        </div>
      ) : error ? (
        <div className="bg-white rounded-[28px] p-12 text-center text-red-600">
          {error}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-[28px] p-8">
              <BarChart3 className="text-primary mb-4" size={30} />

              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Total Bookings
              </p>

              <p className="text-4xl font-display font-black mt-2">
                {bookings.length}
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8">
              <Users className="text-primary mb-4" size={30} />

              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Unique Clients
              </p>

              <p className="text-4xl font-display font-black mt-2">
                {new Set(
                  bookings.map((booking) =>
                    booking.email.toLowerCase()
                  )
                ).size}
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8">
              <CalendarDays className="text-primary mb-4" size={30} />

              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Latest Booking
              </p>

              <p className="text-xl font-display font-black mt-2">
                {bookings.length > 0
                  ? new Date(
                      [...bookings].sort(
                        (a, b) =>
                          new Date(b.createdAt).getTime() -
                          new Date(a.createdAt).getTime()
                      )[0].createdAt
                    ).toLocaleDateString()
                  : "—"}
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8">
              <Activity className="text-primary mb-4" size={30} />

              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Booking Modes
              </p>

              <p className="text-4xl font-display font-black mt-2">
                {modeStats.length}
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-[28px] p-8">
              <h2 className="text-2xl font-display font-black mb-6">
                Booking Modes
              </h2>

              {modeStats.length === 0 ? (
                <p className="text-on-surface-variant">
                  No booking data available.
                </p>
              ) : (
                <div className="space-y-4">
                  {modeStats.map(([mode, count]) => (
                    <div
                      key={mode}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <span className="font-semibold">
                        {mode}
                      </span>

                      <span className="rounded-full bg-[#DCE7D5] px-4 py-1 text-sm font-bold text-primary">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-[28px] p-8">
              <h2 className="text-2xl font-display font-black mb-6">
                Client Goals
              </h2>

              {goalStats.length === 0 ? (
                <p className="text-on-surface-variant">
                  No goal data available.
                </p>
              ) : (
                <div className="space-y-4">
                  {goalStats.map(([goal, count]) => (
                    <div
                      key={goal}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <span className="font-semibold">
                        {goal}
                      </span>

                      <span className="rounded-full bg-[#DCE7D5] px-4 py-1 text-sm font-bold text-primary">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          <div className="bg-white rounded-[28px] p-8 mt-8">
            <h2 className="text-2xl font-display font-black mb-6">
              Recent Activity
            </h2>

            {recentBookings.length === 0 ? (
              <p className="text-on-surface-variant">
                No bookings recorded yet.
              </p>
            ) : (
              <div className="divide-y">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                  >
                    <div>
                      <p className="font-bold">
                        {booking.name}
                      </p>

                      <p className="text-sm text-on-surface-variant">
                        {booking.mode || "Mode not specified"}
                      </p>
                    </div>

                    <div className="text-sm text-on-surface-variant">
                      {new Date(
                        booking.createdAt
                      ).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}