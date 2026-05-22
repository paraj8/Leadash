import { Outlet } from "react-router-dom";

import WorkerSidebar from "../components/WorkerSidebar";
import Navbar from "./Navbar";

function WorkerLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

      {/* SIDEBAR */}
      <WorkerSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar title="Worker Dashboard" />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 text-black dark:text-white">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default WorkerLayout;