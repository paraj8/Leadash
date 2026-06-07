import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import Navbar from "./Navbar";

function AdminLayout() {
  return (
    <div className="flex min-h-dvh bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* NAVBAR */}
        <Navbar title="Admin Dashboard" />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 text-black dark:text-white overflow-x-hidden">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;