"use client";

import { useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import Dashboard from "@/components/admin/Dashboard";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="md:ml-64 min-h-screen">
        <Header />

        <div className="px-2">
          {activeTab === "dashboard" && <Dashboard />}

          {activeTab !== "dashboard" && (
            <div className="p-10">
              <h2 className="text-2xl font-display font-bold">
                {activeTab}
              </h2>

              <p className="text-on-surface-variant mt-2">
                Module recovery in progress.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}