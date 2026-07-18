import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "../components/dashboard/Sidebar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentContent from "../components/dashboard/RecentContent";
import { Button, Loader, Modal, Toast } from "../components/ui";
import ProductDescription from "../components/dashboard/productDesci";
import { useAuth } from "../context/AuthContext";
export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

console.log("Sidebar render:", user);
  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast({ message: "Content generated successfully!", type: "success" });
    }, 2000);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar active={active} setActive={setActive} />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar active={active} setActive={setActive} />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Mobile top bar — only hamburger, no bell/user */}
        <div className="md:hidden flex items-center px-4 py-3 bg-white border-b border-gray-100">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6">

          <WelcomeCard name={user?.name || "User"} />

          <QuickActions />

          <RecentContent />
         

        </main>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Confirm">
        <p className="text-sm text-gray-600">Are you sure you want to proceed?</p>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button onClick={() => {
            setModalOpen(false);
            setToast({ message: "Done!", type: "success" });
          }}>Confirm</Button>
        </div>
      </Modal>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
}