import { useEffect, useState } from "react";

import API from "../../api";

import { toast } from "react-toastify";

function WorkerAllTasks() {

  const [tasks, setTasks] = useState([]);

  const [selectedTask, setSelectedTask] =
  useState(null);

const [showNotePopup, setShowNotePopup] =
  useState(false);

  /* ================= FETCH TASKS ================= */

  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const res = await API.get("/tasks");

        setTasks(res.data);

      } catch (err) {

        toast.error(
          err.response?.data?.message ||
          "Failed to load tasks"
        );

      }

    };

    fetchTasks();

  }, []);

  /* ================= UPDATE TASK ================= */

  const updateTask = async (id, data) => {

    try {

      const res = await API.put(
        `/tasks/${id}`,
        data
      );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id
            ? res.data
            : task
        )
      );

      toast.success("Task updated");

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Failed to update task"
      );

    }

  };

  return (
    <div>

      <h1 className="text-4xl font-black">
        My Tasks
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        View assigned tasks and update progress
      </p>

      <div className="mt-10 overflow-x-auto rounded-3xl border border-black/10 dark:border-white/10">

        <table className="w-full">

          <thead className="bg-slate-200 dark:bg-white/5">

            <tr className="text-left">

              <th className="p-5 font-semibold">
                Task
              </th>

              <th className="p-5 font-semibold">
                Company
              </th>

              <th className="p-5 font-semibold">
                Workers
              </th>

              <th className="p-5 font-semibold">
                Status
              </th>

              <th className="p-5 font-semibold">
                Priority
              </th>

              <th className="p-5 font-semibold">
                Deadline
              </th>

              <th className="p-5 font-semibold">
                Created Date
              </th>

            </tr>

          </thead>

          <tbody>

            {tasks.map((task) => (

              <tr
                key={task._id}
                className="border-t border-black/10 dark:border-white/10"
              >

                {/* TASK */}

               <td className="p-5 font-medium">

                  <button
                    onClick={() => {
                      setSelectedTask(task);
                      setShowNotePopup(true);
                    }}
                    className="
                      hover:text-cyan-500
                      transition
                      text-left
                    "
                  >
                    {task.title}
                  </button>

                </td>

                {/* COMPANY */}

                <td className="p-5">
                  {task.company}
                </td>

                {/* WORKERS */}

                <td className="p-5">

                  <div className="flex flex-wrap gap-2">

                    {task.workers.map((worker) => (

                      <span
                        key={worker._id}
                        className="px-3 py-1 rounded-full text-sm bg-slate-200 dark:bg-white/10"
                      >
                        {worker.name}
                      </span>

                    ))}

                  </div>

                </td>

                {/* STATUS */}

                <td className="p-5">

                  <select
                    value={task.status}
                    onChange={(e) =>
                      updateTask(task._id, {
                        status: e.target.value,
                      })
                    }
                    className={`
                      px-4 py-2 rounded-xl text-sm font-medium
                      border border-black/10 dark:border-white/10
                      outline-none

                      ${
                        task.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-300"
                          : task.status === "In Progress"
                          ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
                          : "bg-green-500/10 text-green-600 dark:text-green-300"
                      }
                    `}
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="In Progress">
                      In Progress
                    </option>

                    <option value="Completed">
                      Completed
                    </option>

                  </select>

                </td>

                {/* PRIORITY */}

                <td className="p-5">

                  <span
                    className={`
                      px-3 py-1 rounded-full text-sm font-medium

                      ${
                        task.priority === "High"
                          ? "bg-red-500/10 text-red-500"
                          : task.priority === "Medium"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : "bg-green-500/10 text-green-500"
                      }
                    `}
                  >
                    {task.priority}
                  </span>

                </td>

                {/* DEADLINE */}

                <td className="p-5 text-slate-500 dark:text-slate-400">

                  {
                    task.deadline
                      ? new Date(
                          task.deadline
                        ).toLocaleDateString()
                      : "No deadline"
                  }

                </td>

                {/* CREATED DATE */}

                <td className="p-5 text-slate-500 dark:text-slate-400">

                  {new Date(
                    task.createdAt
                  ).toLocaleDateString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ================= NOTE POPUP ================= */}

{
  showNotePopup && selectedTask && (

    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        backdrop-blur-sm
        p-4
      "
      onClick={() =>
        setShowNotePopup(false)
      }
    >

      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          w-full max-w-md
          bg-white dark:bg-slate-900
          border border-black/10 dark:border-white/10
          rounded-3xl
          p-6
          shadow-2xl
        "
      >

        {/* HEADER */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <h2 className="text-2xl font-black">
              {selectedTask.title}
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              {selectedTask.company}
            </p>

          </div>

          <button
            onClick={() =>
              setShowNotePopup(false)
            }
            className="
              text-slate-500
              hover:text-red-500
              transition
              text-xl
            "
          >
            ✕
          </button>

        </div>

        {/* NOTE */}

        <div className="mt-6">

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Task Note
          </p>

          <div
            className="
              bg-slate-100 dark:bg-white/5
              rounded-2xl
              p-4
              text-sm
              leading-7
              whitespace-pre-wrap
            "
          >
            {
              selectedTask.note ||
              "No note added"
            }
          </div>

        </div>

      </div>

    </div>

  )
}

    </div>
  );
}

export default WorkerAllTasks;