import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import Navbar from "./Navbar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar title="Admin Dashboard" />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 text-black dark:text-white">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;