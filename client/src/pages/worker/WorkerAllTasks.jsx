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

    {/* HEADER */}
    <div className="mb-6 md:mb-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black">
        My Tasks
      </h1>

      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
        View assigned tasks and update progress
      </p>
    </div>

    {/* TABLE */}
    <div className="overflow-x-auto rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10">

      <table className="min-w-[1000px] w-full">

        <thead className="bg-slate-200 dark:bg-white/5">

          <tr className="text-left">

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
              Task
            </th>

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
              Company
            </th>

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
              Workers
            </th>

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
              Status
            </th>

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
              Priority
            </th>

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
              Deadline
            </th>

            <th className="px-4 md:px-5 py-3 font-semibold text-sm md:text-base">
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
              <td className="px-4 md:px-5 py-3 md:py-4 font-medium">

                <button
                  onClick={() => {
                    setSelectedTask(task);
                    setShowNotePopup(true);
                  }}
                  className="
                    hover:text-cyan-500
                    transition
                    text-left
                    text-sm md:text-base
                  "
                >
                  {task.title}
                </button>

              </td>

              {/* COMPANY */}
              <td className="px-4 md:px-5 py-3 md:py-4 text-sm md:text-base">
                {task.company}
              </td>

              {/* WORKERS */}
              <td className="px-4 md:px-5 py-3 md:py-4">

                <div className="flex flex-wrap gap-2">

                  {task.workers.map((worker) => (

                    <span
                      key={worker._id}
                      className="
                        px-2 md:px-3
                        py-1
                        rounded-full
                        text-xs md:text-sm
                        bg-slate-200 dark:bg-white/10
                      "
                    >
                      {worker.name}
                    </span>

                  ))}

                </div>

              </td>

              {/* STATUS */}
              <td className="px-4 md:px-5 py-3 md:py-4">

                <select
                  value={task.status}
                  onChange={(e) =>
                    updateTask(task._id, {
                      status: e.target.value,
                    })
                  }
                  className={`
                    px-3 md:px-4
                    py-2
                    rounded-xl
                    text-xs md:text-sm
                    font-medium
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
              <td className="px-4 md:px-5 py-3 md:py-4">

                <span
                  className={`
                    px-2 md:px-3
                    py-1
                    rounded-full
                    text-xs md:text-sm
                    font-medium

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
              <td className="px-4 md:px-5 py-3 md:py-4 text-sm text-slate-500 dark:text-slate-400">

                {task.deadline
                  ? new Date(task.deadline).toLocaleDateString()
                  : "No deadline"}

              </td>

              {/* CREATED DATE */}
              <td className="px-4 md:px-5 py-3 md:py-4 text-sm text-slate-500 dark:text-slate-400">

                {new Date(task.createdAt).toLocaleDateString()}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* ================= NOTE POPUP ================= */}

    {showNotePopup && selectedTask && (

      <div
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/50
          backdrop-blur-sm
          p-4
        "
        onClick={() => setShowNotePopup(false)}
      >

        <div
          onClick={(e) => e.stopPropagation()}
          className="
            w-full
            max-w-md
            bg-white
            dark:bg-slate-900
            border border-black/10 dark:border-white/10
            rounded-2xl md:rounded-3xl
            p-5 md:p-6
            shadow-2xl
          "
        >

          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">

            <div>

              <h2 className="text-xl md:text-2xl font-black">
                {selectedTask.title}
              </h2>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-1">
                {selectedTask.company}
              </p>

            </div>

            <button
              onClick={() => setShowNotePopup(false)}
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
          <div className="mt-5 md:mt-6">

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Task Note
            </p>

            <div
              className="
                bg-slate-100 dark:bg-white/5
                rounded-2xl
                p-4
                text-sm
                md:text-base
                leading-6 md:leading-7
                whitespace-pre-wrap
              "
            >
              {selectedTask.note || "No note added"}
            </div>

          </div>

        </div>

      </div>

    )}

  </div>
);
}

export default WorkerAllTasks;