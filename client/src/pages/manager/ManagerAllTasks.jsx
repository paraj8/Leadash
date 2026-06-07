import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";
import {Settings2, X} from "lucide-react";



function ManagerAllTasks() {
  
  const [activeTask, setActiveTask] = useState(null);

  const [tasks, setTasks] = useState([]);

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


  const updateTask = async (
  taskId,
  updatedData
) => {

  try {

    await API.put(
      `/tasks/${taskId}`,
      updatedData
    );

    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? { ...task, ...updatedData }
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

const user = JSON.parse(
  localStorage.getItem("user")
);

  return (
<div>

  <h1 className="text-2xl md:text-3xl lg:text-4xl font-black">
    All Tasks
  </h1>

  <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
    Manage all created tasks and candidate progress
  </p>

  <div className="mt-6 md:mt-10 overflow-x-auto rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10">

    <table className="w-full min-w-[1100px]">

      <thead className="bg-slate-200 dark:bg-white/5">

        <tr className="text-left">

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Task
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Company
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Workers
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Status
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Priority
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Deadline
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Created Date
          </th>

          <th className="px-3 md:px-5 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {tasks.map((task) => (

          <tr
            key={task._id}
            className="border-t border-black/10 dark:border-white/10"
          >

            {/* TITLE */}
            <td className="px-3 md:px-5 py-3 font-medium whitespace-nowrap">
              {task.title}
            </td>

            {/* COMPANY */}
            <td className="px-3 md:px-5 py-3 whitespace-nowrap">
              {task.company}
            </td>

            {/* WORKERS */}
            <td className="px-3 md:px-5 py-3">

              <div className="flex flex-wrap gap-2">

                {task.workers.map((worker) => (

                  <span
                    key={worker._id}
                    className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm bg-slate-100 dark:bg-white/10 whitespace-nowrap"
                  >
                    {worker.name}
                  </span>

                ))}

              </div>

            </td>

            {/* STATUS */}
            <td className="px-3 md:px-5 py-3">

              <span
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap

                ${
                  task.status === "Pending"
                    ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-300"
                    : task.status === "In Progress"
                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
                    : "bg-green-500/10 text-green-600 dark:text-green-300"
                }
                `}
              >
                {task.status}
              </span>

            </td>

            {/* PRIORITY */}
            <td className="px-3 md:px-5 py-3">

              <span
                className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap

                ${
                  task.priority === "High"
                    ? "bg-red-500/10 text-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-slate-500/10 text-slate-500"
                }
                `}
              >
                {task.priority || "Medium"}
              </span>

            </td>

            {/* DEADLINE */}
            <td className="px-3 md:px-5 py-3 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">

              {task.deadline
                ? new Date(task.deadline).toLocaleDateString()
                : "No Deadline"}

            </td>

            {/* CREATED DATE */}
            <td className="px-3 md:px-5 py-3 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">

              {new Date(task.createdAt).toLocaleDateString()}

            </td>

{/* actions (only for task creator) */}
<td className="px-5 py-3 relative">

  {
    task.createdBy?._id === user?.id && (

      <>

        {/* SETTINGS BUTTON */}

        <button
          onClick={() =>
            setActiveTask(
              activeTask === task._id
                ? null
                : task._id
            )
          }
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-xl
            bg-slate-100
            dark:bg-slate-900
            border border-black/10
            dark:border-white/10
            hover:border-cyan-500
            transition
          "
        >

          <Settings2 size={18} />

        </button>

        {/* POPUP */}

        {
          activeTask === task._id && (

            <>

              {/* BACKDROP */}

              <div
                onClick={() =>
                  setActiveTask(null)
                }
                className="
                  fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
                "
              />

              {/* WINDOW */}

              <div
                className="
                  fixed
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  z-[100]
                  w-[85%]
                  max-w-xs
                  bg-white
                  dark:bg-slate-950
                  border border-black/10
                  dark:border-white/10
                  rounded-3xl
                  p-6
                  shadow-2xl
                "
              >

                {/* TOP */}

                <div className="flex items-center justify-between mb-5">

                  <h3 className="font-bold text-lg">
                    Task Settings
                  </h3>

                  <button
                    onClick={() =>
                      setActiveTask(null)
                    }
                    className="
                      w-8 h-8
                      rounded-lg
                      flex items-center justify-center
                      hover:bg-slate-100
                      dark:hover:bg-white/10
                    "
                  >

                    <X size={18} />

                  </button>

                </div>

                {/* STATUS */}

                <div className="mb-4">

                  <label className="block mb-2 text-sm font-medium">
                    Status
                  </label>

                  <select
                    value={task.status}
                    onChange={(e) =>
                      updateTask(task._id, {
                        status: e.target.value,
                      })
                    }
                    className="
                      w-full
                      bg-slate-100
                      dark:bg-slate-900
                      border border-black/10
                      dark:border-white/10
                      rounded-xl
                      px-3 py-2
                    "
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

                </div>

                {/* PRIORITY */}

                <div className="mb-4">

                  <label className="block mb-2 text-sm font-medium">
                    Priority
                  </label>

                  <select
                    value={task.priority || "Medium"}
                    onChange={(e) =>
                      updateTask(task._id, {
                        priority: e.target.value,
                      })
                    }
                    className="
                      w-full
                      bg-slate-100
                      dark:bg-slate-900
                      border border-black/10
                      dark:border-white/10
                      rounded-xl
                      px-3 py-2
                    "
                  >

                    <option value="Low">
                      Low
                    </option>

                    <option value="Medium">
                      Medium
                    </option>

                    <option value="High">
                      High
                    </option>

                  </select>

                </div>

                {/* DEADLINE */}

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Deadline
                  </label>

                  <input
                    type="date"
                    value={
                      task.deadline
                        ? task.deadline.split("T")[0]
                        : ""
                    }
                    onChange={(e) =>
                      updateTask(task._id, {
                        deadline: e.target.value,
                      })
                    }
                    className="
                      w-full
                      bg-slate-100
                      dark:bg-slate-900
                      border border-black/10
                      dark:border-white/10
                      rounded-xl
                      px-3 py-2
                    "
                  />

                </div>

              </div>

            </>

          )
        }

      </>

    )
  }

</td>


              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManagerAllTasks;