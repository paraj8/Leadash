import { useEffect, useState } from "react";
import API from "../api";
import { toast } from "react-toastify";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users"); // we will create this later
        setUsers(res.data);
      } catch (err) {
  toast.error(err.response?.data?.message || "Failed to load users");
}
    };

    fetchUsers();
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-black">Admin Panel</h1>
      <p className="text-slate-400 mt-2">
        Manage recruiters and candidates
      </p>

      <div className="mt-10 grid gap-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{user.name}</h2>
              <p className="text-slate-400 text-sm">{user.email}</p>
            </div>

            <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300">
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;