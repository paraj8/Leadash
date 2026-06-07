import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function ManagerWorkers() {

  const [workers, setWorkers] = useState([]);

  /* ================= FETCH WORKERS ================= */

useEffect(() => {

  const fetchData = async () => {

    try {

      const res = await API.get("/worker-profile/all");

      setWorkers(res.data);

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Failed to load workers"
      );

    }

  };

  fetchData();

}, []);



return (
  <div>

    {/* HEADER */}

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      <div>

        <h1 className="text-4xl font-black">
          All Workers
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          View all registered workers and their profile details
        </p>

      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl px-5 py-3">

        <p className="text-sm text-cyan-600 dark:text-cyan-300">
          Total Workers
        </p>

        <h2 className="text-2xl font-black">
          {workers.length}
        </h2>

      </div>

    </div>

    {/* SEARCH */}

    <div className="mt-8">

      <input
        type="text"
        placeholder="Search workers..."
        className="
          w-full lg:w-96
          bg-slate-100 dark:bg-slate-900
          border border-black/10 dark:border-white/10
          rounded-2xl
          px-5 py-3
          outline-none
          focus:ring-2 focus:ring-cyan-500
        "
      />

    </div>

    {/* WORKERS */}

    {workers.length === 0 ? (

      <div
        className="
          mt-10
          bg-white dark:bg-white/5
          border border-black/10 dark:border-white/10
          rounded-3xl
          p-12
          text-center
        "
      >

        <h2 className="text-2xl font-bold">
          No Workers Found
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Workers will appear here once they create profiles.
        </p>

      </div>

    ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {workers.map((worker) => (

          <div
            key={worker._id}
            className="
              bg-white dark:bg-white/5
              border border-black/10 dark:border-white/10
              rounded-3xl
              p-6
              hover:border-cyan-500/30
              hover:-translate-y-1
              transition
            "
          >

            {/* TOP */}

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-cyan-500/10
                    flex items-center justify-center
                    text-xl font-black
                    text-cyan-500
                  "
                >
                  {worker.name?.charAt(0)}
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {worker.name}
                  </h2>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {worker.email}
                  </p>

                </div>

              </div>

              <span
                className="
                  px-3 py-1
                  rounded-full
                  text-xs
                  bg-green-500/10
                  text-green-500
                  font-medium
                "
              >
                Active
              </span>

            </div>

            {/* INFO */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mobile
                </p>

                <h3 className="font-semibold mt-1">
                  {worker.mobile || "N/A"}
                </h3>

              </div>

              <div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Experience
                </p>

                <h3 className="font-semibold mt-1">
                  {worker.experience || "N/A"}
                </h3>

              </div>

            </div>

            {/* TASK COUNT */}

            <div className="mt-6">

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Assigned Tasks
              </p>

              <h3 className="text-3xl font-black mt-1">
                {worker.taskCount || 0}
              </h3>

            </div>

            {/* SKILLS */}

            <div className="mt-6">

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Skills
              </p>

              <div className="flex flex-wrap gap-2">

                {worker.skills?.length > 0 ? (

                  worker.skills.map((skill, index) => (

                    <span
                      key={index}
                      className="
                        px-3 py-1
                        rounded-full
                        text-sm
                        bg-cyan-500/10
                        text-cyan-600 dark:text-cyan-300
                      "
                    >
                      {skill}
                    </span>

                  ))

                ) : (

                  <span className="text-sm text-slate-500">
                    No skills added
                  </span>

                )}

              </div>

            </div>

            {/* BIO */}

            <div className="mt-6">

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Bio
              </p>

              <p className="mt-2 text-sm leading-relaxed line-clamp-4">
                {worker.bio || "No bio added"}
              </p>

            </div>

          </div>

        ))}

      </div>

    )}

  </div>
);
}

export default ManagerWorkers;