import { Outlet } from "react-router-dom";

import ManagerSidebar from "../components/ManagerSidebar";
import Navbar from "./Navbar";

function ManagerLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

      {/* SIDEBAR */}
      <ManagerSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar title="Manager Dashboard" />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 text-black dark:text-white">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default ManagerLayout;