import { useState } from "react";
import API from "../api";
import { toast } from "react-toastify";

function Leads() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    status: "Pending",
    notes: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leads", form);

      toast.success("Lead created successfully!");


      setForm({
        title: "",
        company: "",
        status: "Pending",
        notes: "",
        priority: "Low",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error creating lead");
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-4xl font-black mb-6">Leads</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4"
      >
        <input
          name="title"
          placeholder="Lead Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
        />

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          type="submit"
          className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl"
        >
          Create Lead
        </button>
      </form>
    </div>
  );
}

export default Leads;