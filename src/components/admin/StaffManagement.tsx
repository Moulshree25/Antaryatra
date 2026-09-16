"use client";

import { useEffect, useMemo, useState } from "react";

type Staff = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  specialty: string;
  status: string;
  createdAt: string;
};

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  specialty: "",
  status: "Active",
};

export default function StaffManagement() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    loadStaff();
  }, []);

  async function loadStaff() {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/staff", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to load staff");
      }

      const data = await res.json();
      setStaff(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load staff");
    } finally {
      setLoading(false);
    }
  }

  async function addStaff(e: React.FormEvent) {
    e.preventDefault();

    try {
      setSaving(true);

      const res = await fetch("/api/admin/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to create staff");
      }

      setForm(emptyForm);
      setShowForm(false);

      await loadStaff();
    } catch (error) {
      console.error(error);
      alert("Failed to add staff");
    } finally {
      setSaving(false);
    }
  }

  async function removeStaff(id: number) {
    const ok = confirm("Delete this staff member?");

    if (!ok) return;

    try {
      const res = await fetch(`/api/admin/staff/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      await loadStaff();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  }

  const rows = useMemo(() => {
    const term = search.toLowerCase();

    return staff.filter((member) =>
      `${member.name} ${member.email} ${member.role} ${member.specialty}`
        .toLowerCase()
        .includes(term)
    );
  }, [staff, search]);


  return (
    <div className="max-w-[1380px] mx-auto p-10">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-[10px] tracking-[0.2em] font-bold uppercase">
            STAFF
          </p>

          <h1 className="text-5xl font-display font-black">
            Staff Management
          </h1>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-xl bg-[#73816C] px-6 py-3 font-bold text-white hover:-translate-y-0.5 transition-all"
        >
          + Add Staff
        </button>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search staff..."
        className="w-full mb-4 p-4 rounded-2xl bg-white"
      />

      <p className="mb-6 text-sm text-on-surface-variant">
        {loading
          ? "Loading staff..."
          : `${rows.length} staff member${rows.length === 1 ? "" : "s"} found`}
      </p>

      <div className="bg-white rounded-[28px] overflow-hidden">
        <div className="grid grid-cols-[1.2fr_2fr_1.2fr_1.5fr_1.5fr_1fr_120px] gap-6 p-6 font-bold border-b">
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Role</div>
          <div>Specialty</div>
          <div>Status</div>
          <div>Action</div>
        </div>

        {loading ? (
          <div className="p-10">Loading...</div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center">
            No staff records found.
          </div>
        ) : (
          rows.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-[1.2fr_2fr_1.2fr_1.5fr_1.5fr_1fr_120px] gap-6 items-center p-6 border-b"
            >
              <div>{member.name}</div>

              <div className="truncate">
                {member.email}
              </div>

              <div>{member.phone}</div>

              <div>{member.role}</div>

              <div>{member.specialty}</div>

              <div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  {member.status}
                </span>
              </div>

              <button
                onClick={() => removeStaff(member.id)}
                className="text-red-600 hover:underline text-left"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <form
            onSubmit={addStaff}
            className="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-display font-black">
                Add Staff
              </h2>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="p-4 rounded-xl bg-surface-container-low"
              />

              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="p-4 rounded-xl bg-surface-container-low"
              />

              <input
                required
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="p-4 rounded-xl bg-surface-container-low"
              />

              <input
                required
                placeholder="Role"
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
                className="p-4 rounded-xl bg-surface-container-low"
              />

              <input
                required
                placeholder="Specialty"
                value={form.specialty}
                onChange={(e) =>
                  setForm({ ...form, specialty: e.target.value })
                }
                className="p-4 rounded-xl bg-surface-container-low"
              />

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                className="p-4 rounded-xl bg-surface-container-low"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="mt-8 w-full rounded-xl bg-[#73816C] px-6 py-4 font-bold text-white disabled:opacity-50"
            >
              {saving ? "Saving..." : "Add Staff"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}