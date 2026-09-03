import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function WorkerDashboard() {
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
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-base md:text-lg font-medium">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div>

      {/* HEADER */}

      <div className="mb-6 md:mb-8">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black">
          Worker Dashboard
        </h1>

        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
          View your assigned tasks and work progress
        </p>

<div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 mb-6">
  <h3 className="text-yellow-600 dark:text-yellow-300 font-bold">
    ⚠ Complete Your Profile
  </h3>

  <p className="text-sm mt-2">
    Your profile is incomplete. Managers cannot view your profile until all
    required details are filled.
  </p>

  <a
    href="/worker/worker-profile"
    className="inline-block mt-3 px-4 py-2 bg-yellow-500 text-black rounded-xl font-semibold"
  >
    Complete Profile
  </a>
</div>
<p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
  View your assigned tasks and work progress
</p>
      </div>

      {/* ================= ALL TASKS ================= */}

      <h2 className="text-xl md:text-2xl font-bold mt-8 md:mt-10">
        All Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-5 md:mt-6">

        {/* TOTAL */}

        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
            Total Tasks
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.allTasks.totalTasks}
          </h2>

        </div>

        {/* PENDING */}

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-yellow-600 dark:text-yellow-300 text-xs md:text-sm">
            Pending
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.allTasks.pendingTasks}
          </h2>

        </div>

        {/* IN PROGRESS */}

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-cyan-600 dark:text-cyan-300 text-xs md:text-sm">
            In Progress
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.allTasks.inProgressTasks}
          </h2>

        </div>

        {/* COMPLETED */}

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-green-600 dark:text-green-300 text-xs md:text-sm">
            Completed
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.allTasks.completedTasks}
          </h2>

        </div>

      </div>

      {/* ================= ASSIGNED TASKS ================= */}

      <h2 className="text-xl md:text-2xl font-bold mt-10 md:mt-14">
        Assigned To You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-5 md:mt-6">

        {/* TOTAL */}

        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
            Total Tasks
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.assignedTasks.totalTasks}
          </h2>

        </div>

        {/* PENDING */}

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-yellow-600 dark:text-yellow-300 text-xs md:text-sm">
            Pending
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.assignedTasks.pendingTasks}
          </h2>

        </div>

        {/* IN PROGRESS */}

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-cyan-600 dark:text-cyan-300 text-xs md:text-sm">
            In Progress
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.assignedTasks.inProgressTasks}
          </h2>

        </div>

        {/* COMPLETED */}

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl md:rounded-3xl p-4 md:p-6">

          <p className="text-green-600 dark:text-green-300 text-xs md:text-sm">
            Completed
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-2 md:mt-3">
            {stats.assignedTasks.completedTasks}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default WorkerDashboard;