import { Outlet } from "react-router-dom";

import RecruiterSidebar from "./RecruiterSidebar";
import Navbar from "./Navbar";

function RecruiterLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

      {/* SIDEBAR */}
      <RecruiterSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar title="Recruiter Dashboard" />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 text-black dark:text-white">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default RecruiterLayout;