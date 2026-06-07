import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get(
          "/tasks/dashboard-stats"
        );

        setStats(res.data);
      } catch (err) {
        toast.error(
          err.response?.data?.message ||
          "Failed to load dashboard"
        );
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="text-base md:text-lg">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black">
        Admin Dashboard
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base">
        Manage platform tasks, recruiters and candidates
      </p>

      {/* ================= ALL TASKS ================= */}

      <h2 className="text-xl md:text-2xl font-bold mt-8 md:mt-10">
        All Tasks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-5 md:mt-6">

        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Total Tasks
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.allTasks.totalTasks}
          </h2>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-yellow-600 dark:text-yellow-300 text-sm">
            Pending
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.allTasks.pendingTasks}
          </h2>

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-cyan-600 dark:text-cyan-300 text-sm">
            In Progress
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.allTasks.inProgressTasks}
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-green-600 dark:text-green-300 text-sm">
            Completed
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.allTasks.completedTasks}
          </h2>

        </div>

      </div>

      {/* ================= YOUR TASKS ================= */}

      <h2 className="text-xl md:text-2xl font-bold mt-10 md:mt-14">
        Tasks Created By You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-5 md:mt-6">

        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Total Tasks
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.yourTasks.totalTasks}
          </h2>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-yellow-600 dark:text-yellow-300 text-sm">
            Pending
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.yourTasks.pendingTasks}
          </h2>

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-cyan-600 dark:text-cyan-300 text-sm">
            In Progress
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.yourTasks.inProgressTasks}
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-green-600 dark:text-green-300 text-sm">
            Completed
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            {stats.yourTasks.completedTasks}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;