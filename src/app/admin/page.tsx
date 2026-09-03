"use client";

import { useState, useEffect } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

import Dashboard from "@/components/admin/Dashboard";
import ClientManagement from "@/components/admin/ClientManagement";


export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("admin-tab", activeTab);
  }, [activeTab]);


  return (

    <div className="min-h-screen bg-surface">

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="md:ml-64 min-h-screen">

        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="px-2">

          {activeTab !== "clients" && activeTab !== "staff" && (
          <Dashboard />
          )}

          {activeTab === "clients" && (
            <ClientManagement />
          )}

          {activeTab === "staff" && (
            <div className="p-10">
              Staff Module
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="p-10">
              Analytics Module
            </div>
          )}

        </div>

      </main>

    </div>

  );
}