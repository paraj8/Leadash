import { useEffect, useState } from "react";
import API from "../api";
import { toast } from "react-toastify";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get("/tasks/my"); 
        setTasks(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load tasks");
      }
    };

    fetchTasks();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}`, { status });

      setTasks((prev) =>
        prev.map((t) =>
          t._id === id ? { ...t, status } : t
        )
      );

      toast.success("Task updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-4xl font-black">
        My Tasks
      </h1>

      <p className="text-slate-400 mt-2">
        Tasks assigned to you by your recruiter
      </p>

      {/* TASK LIST */}
      <div className="mt-10 space-y-4">
        {tasks.length === 0 ? (
          <p className="text-slate-500">No tasks assigned yet</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <h2 className="text-xl font-bold">
                {task.title}
              </h2>

              <p className="text-slate-400 mt-1">
                {task.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                
                <span className={`text-sm px-3 py-1 rounded-full ${
                  task.status === "Done"
                    ? "bg-green-500/20 text-green-400"
                    : task.status === "In Progress"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}>
                  {task.status}
                </span>

                <select
                  value={task.status}
                  onChange={(e) =>
                    updateStatus(task._id, e.target.value)
                  }
                  className="bg-black/30 border border-white/10 p-2 rounded-xl"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;