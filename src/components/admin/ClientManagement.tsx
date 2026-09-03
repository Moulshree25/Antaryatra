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
  createdAt: string;
};

export default function ClientManagement() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/bookings",
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      setBookings(data);
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

              <button
                onClick={() =>
                  remove(
                    b.id
                  )
                }
                className="text-red-600 hover:underline text-left"
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}