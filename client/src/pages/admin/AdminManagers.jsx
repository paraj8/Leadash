import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function AdminManagers() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const res = await API.get("/users/managers");
        setManagers(res.data);
      } catch (err) {
        toast.error(
          err.response?.data?.message ||
            "Failed to load managers"
        );
      }
    };

    fetchManagers();
  }, []);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Managers
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          View all managers and their created tasks
        </p>
      </div>

      {/* SUMMARY CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <div
          className="
            rounded-3xl
            border border-black/10
            dark:border-white/10
            bg-white dark:bg-white/5
            p-6
          "
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Managers
          </p>

          <h2 className="text-4xl font-black mt-3">
            {managers.length}
          </h2>
        </div>

      </div>

      {/* MANAGERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {managers.map((manager) => (

          <div
            key={manager._id}
            className="
              bg-white
              dark:bg-white/5
              border border-black/10
              dark:border-white/10
              rounded-3xl
              p-6
              hover:border-cyan-500/40
              hover:shadow-xl
              transition-all duration-300
            "
          >

            {/* TOP */}
            <div className="flex items-start justify-between gap-4">

              <div className="flex items-center gap-4">

                {/* AVATAR */}
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-500
                    flex items-center justify-center
                    font-black
                    text-xl
                  "
                >
                  {manager.name?.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold">
                    {manager.name}
                  </h2>

                  <p className="text-sm text-slate-500 dark:text-slate-400 break-all">
                    {manager.email}
                  </p>
                </div>

              </div>

              <span
                className="
                  px-3 py-1
                  rounded-full
                  text-xs font-semibold
                  bg-cyan-500/10
                  text-cyan-600
                  dark:text-cyan-300
                "
              >
                Manager
              </span>

            </div>

            {/* DIVIDER */}
            <div className="my-6 border-t border-black/10 dark:border-white/10" />

            {/* TASK COUNT */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Created Tasks
                </p>

                <h3 className="text-4xl font-black mt-2">
                  {manager.tasks}
                </h3>
              </div>

              <div
                className="
                  px-4 py-3
                  rounded-2xl
                  bg-cyan-500/10
                  text-cyan-500
                  font-bold
                "
              >
                Tasks
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* EMPTY STATE */}
      {managers.length === 0 && (
        <div
          className="
            rounded-3xl
            border border-dashed
            border-black/10
            dark:border-white/10
            p-12
            text-center
          "
        >
          <h3 className="text-xl font-bold">
            No Managers Found
          </h3>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Managers will appear here once they are added to the platform.
          </p>
        </div>
      )}

    </div>
  );
}

export default AdminManagers;