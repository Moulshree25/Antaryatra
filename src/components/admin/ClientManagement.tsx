"use client";

import { useEffect, useMemo, useState } from "react";

type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  mode: string;
  goal: string;
  practices: string;
  notes?: string;
  createdAt: string;
};

export default function ClientManagement() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBooking, setSelectedBooking] =
  useState<Booking | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
  try {
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/bookings", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to load clients");
    }

    const data = await res.json();

    setBookings(data);
  } catch (error) {
    console.error(error);
    setError("Failed to load clients");
  } finally {
    setLoading(false);
  }
}

  async function remove(id: number) {
    const ok = confirm(
      "Delete booking?"
    );

    if (!ok) return;

    try {
      const res =
        await fetch(
          `/api/admin/bookings/${id}`,
          {
            method:
              "DELETE",
          }
        );

      if (!res.ok) {
        throw new Error();
      }

      await load();
    } catch {
      alert(
        "Delete failed"
      );
    }
  }

  const rows =
    useMemo(
      () =>
        bookings.filter(
          (b) =>
            `
${b.name}
${b.email}
${b.goal}
${b.mode}
`
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        ),
      [
        bookings,
        search,
      ]
    );

  return (
    <div className="max-w-[1380px] mx-auto p-10">

      <div className="mb-8">

        <p className="text-[10px] tracking-[0.2em] font-bold uppercase">
          CLIENTS
        </p>

        <h1 className="text-5xl font-display font-black">
          Client Management
        </h1>

      </div>

      <input
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        placeholder="Search clients..."
        className="w-full mb-8 p-4 rounded-2xl bg-white"
      />
            <p className="mb-4 text-sm text-on-surface-variant">
        {loading
          ? "Loading clients..."
          : `${rows.length} client${rows.length === 1 ? "" : "s"} found`}
      </p>

      <div className="bg-white rounded-[28px] overflow-hidden">

        <div className="grid grid-cols-[1fr_2fr_1.2fr_1.3fr_1fr_1fr_120px] gap-8 p-6 font-bold border-b">

          <div>Name</div>

          <div>Email</div>

          <div>Phone</div>

          <div>Goal</div>

          <div>Mode</div>

          <div>Date</div>

          <div>Action</div>

        </div>

        {loading ? (

  <div className="p-10">
    Loading...
  </div>

) : error ? (

  <div className="p-10 text-red-600">
    {error}
  </div>

) : rows.length === 0 ? (

          <div className="p-10">
            No results found
          </div>

        ) : (

          rows.map((b) => (

            <div
              key={b.id}
              className="grid grid-cols-[1fr_2fr_1.2fr_1.3fr_1fr_1fr_120px] gap-8 items-center p-6 border-b"
            >

              <div>
                {b.name}
              </div>

              <div className="truncate">
                {b.email}
              </div>

              <div className="whitespace-nowrap">
                {b.phone}
              </div>

              <div>
                {b.goal || "-"}
              </div>

              <div>
                {b.mode}
              </div>

              <div>
                {
                  new Date(
                    b.createdAt
                  ).toLocaleDateString()
                }
              </div>

              <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedBooking(b)}
                className="text-primary font-semibold hover:underline"
              >
                View
              </button>

              <button
                onClick={() => remove(b.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>

            </div>

          ))

        )}

      </div>

    {selectedBooking && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
        <div className="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-2xl">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-on-surface-variant">
                CLIENT DETAILS
              </p>

              <h2 className="text-3xl font-display font-black text-on-surface">
                {selectedBooking.name}
              </h2>
            </div>

            <button
              onClick={() => setSelectedBooking(null)}
              className="text-on-surface-variant hover:text-on-surface text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold text-on-surface-variant">
                EMAIL
              </p>
              <p>{selectedBooking.email}</p>
            </div>

            <div>
              <p className="text-xs font-bold text-on-surface-variant">
                PHONE
              </p>
              <p>{selectedBooking.phone}</p>
            </div>

            <div>
              <p className="text-xs font-bold text-on-surface-variant">
                MODE
              </p>
              <p>{selectedBooking.mode}</p>
            </div>

            <div>
              <p className="text-xs font-bold text-on-surface-variant">
                GOAL
              </p>
              <p>{selectedBooking.goal || "-"}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-xs font-bold text-on-surface-variant">
                PRACTICES
              </p>
              <p>{selectedBooking.practices || "-"}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-xs font-bold text-on-surface-variant">
                NOTES
              </p>
              <p>{selectedBooking.notes || "-"}</p>
            </div>
          </div>

          <button
            onClick={() => setSelectedBooking(null)}
            className="mt-8 w-full rounded-xl bg-[#73816C] px-6 py-3 font-bold text-white"
          >
            Close
          </button>
        </div>
      </div>
    )}

    </div>
  );
}