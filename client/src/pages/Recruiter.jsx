import { useEffect, useState } from "react";
import API from "../api";
import { toast } from "react-toastify";

function Recruiter() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await API.get("/leads");
        setLeads(res.data);
      } catch (err) {
  toast.error(err.response?.data?.message || "Failed to load leads");
}
    };

    fetchLeads();
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-black">Recruiter Panel</h1>
      <p className="text-slate-400 mt-2">
        Manage assigned leads and update status
      </p>

      <div className="mt-10 space-y-4">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="p-5 rounded-2xl bg-white/5 border border-white/10"
          >
            <h2 className="text-xl font-bold">{lead.title}</h2>
            <p className="text-slate-400">{lead.company}</p>

            <div className="flex justify-between mt-4">
              <span className="text-sm text-cyan-400">
                {lead.status}
              </span>

              <select
                className="bg-black/30 border border-white/10 p-2 rounded-xl"
              >
                <option>Pending</option>
                <option>Contacted</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recruiter;