import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function AdminWorkers() {

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

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl px-6 py-4">

        <p className="text-sm text-cyan-600 dark:text-cyan-300">
          Total Workers
        </p>

        <h2 className="text-3xl font-black">
          {workers.length}
        </h2>

      </div>

    </div>

    {/* WORKERS */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

      {workers.length === 0 ? (

        <div
          className="
            col-span-full
            bg-white
            dark:bg-white/5
            border border-black/10
            dark:border-white/10
            rounded-3xl
            p-10
            text-center
          "
        >

          <h3 className="text-xl font-bold">
            No Workers Found
          </h3>

          <p className="text-slate-500 mt-2">
            No worker profiles have been created yet.
          </p>

        </div>

      ) : (

        workers.map((worker) => (

          <div
            key={worker._id}
            className="
              bg-white
              dark:bg-white/5
              border border-black/10
              dark:border-white/10
              rounded-3xl
              p-6
              hover:border-cyan-500/30
              transition
            "
          >

            {/* TOP */}

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {worker.name}
                </h2>

                <p className="text-slate-500 dark:text-slate-400 mt-1 break-all">
                  {worker.email}
                </p>

              </div>

              <span
                className="
                  px-3 py-1
                  rounded-full
                  text-sm
                  font-medium
                  bg-cyan-500/10
                  text-cyan-600
                  dark:text-cyan-300
                "
              >
                Worker
              </span>

            </div>

            {/* INFO SECTION */}

            <div className="mt-6 space-y-4">

              <div>

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Mobile Number
                </p>

                <p className="font-semibold mt-1">
                  {worker.mobile || "Not Added"}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Experience
                </p>

                <p className="font-semibold mt-1">
                  {worker.experience || "Not Added"}
                </p>

              </div>

            </div>

            {/* SKILLS */}

            <div className="mt-6">

              <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">
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
                        text-cyan-600
                        dark:text-cyan-300
                        border border-cyan-500/20
                      "
                    >
                      {skill}
                    </span>

                  ))

                ) : (

                  <span className="text-slate-500 text-sm">
                    No skills added
                  </span>

                )}

              </div>

            </div>

            {/* BIO */}

            <div className="mt-6">

              <p className="text-xs uppercase tracking-wide text-slate-500">
                Bio
              </p>

              <div
                className="
                  mt-2
                  bg-slate-100
                  dark:bg-white/5
                  rounded-2xl
                  p-4
                  text-sm
                  leading-7
                "
              >

                {worker.bio || "No bio added"}

              </div>

            </div>

          </div>

        ))

      )}

    </div>

  </div>
);
}

export default AdminWorkers;