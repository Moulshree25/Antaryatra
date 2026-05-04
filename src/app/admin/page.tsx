import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import Dashboard from "@/components/admin/Dashboard";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}