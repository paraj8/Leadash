import { useEffect, useRef, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function AdminCreateTask() {

  const [companies, setCompanies] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workers, setWorkers] = useState([]);

  const [openWorkerBox, setOpenWorkerBox] = useState(false);
  const wrapperRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    department: "",
    skill: "",
    note: "",
    workers: [],
  });


  /* ================= CLOSE WORKER DROPDOWN ON OUTSIDE CLICK ================= */

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setOpenWorkerBox(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  /* ================= FETCH DATA ================= */

useEffect(() => {

  const loadData = async () => {

    try {

      const [
        companyRes,
        skillRes,
        workerRes,
      ] = await Promise.all([
        API.get("/requirements/companies"),
        API.get("/requirements/skills"),
        API.get("/worker-profile/all"),
      ]);

      setCompanies(companyRes.data);

      setSkills(skillRes.data);

      setWorkers(workerRes.data);

  

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Failed to load data"
      );

    }

  };

  loadData();

}, []);

  /* ================= FILTER WORKERS ================= */

  const filteredWorkers = workers.filter((worker) =>
    worker.skills.includes(formData.skill)
  );

  /* ================= CHANGE HANDLER ================= */

  const changeHandler = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,

      // clear selected workers when skill changes
      ...(name === "skill" && {
        workers: [],
      }),
    }));

  };


  /* ================= SUBMIT ================= */

const submitHandler = async (e) => {

  e.preventDefault();

  try {

    await API.post("/tasks", formData);

    toast.success("Task created successfully");

    setFormData({
      title: "",
      company: "",
      department: "",
      skill: "",
      note: "",
      workers: [],
    });

  } catch (err) {

    toast.error(
      err.response?.data?.message || "Failed to create task"
    );

  }

};

return (
  <div className="space-y-8">

    {/* HEADER */}
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
        Create Task
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base">
        Create and assign tasks to workers
      </p>
    </div>

    {/* FORM CARD */}
    <form
      onSubmit={submitHandler}
      className="
        bg-white dark:bg-white/5
        border border-black/10 dark:border-white/10
        rounded-2xl md:rounded-3xl
        p-5 md:p-8
        shadow-sm
      "
    >
      {/* FORM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">

        {/* TASK TITLE */}
        <div>
          <label className="block mb-2 font-medium text-sm md:text-base">
            Task Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={formData.title}
            onChange={changeHandler}
            className="
              w-full
              h-12
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-xl md:rounded-2xl
              px-4
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* COMPANY */}
        <div>
          <label className="block mb-2 font-medium text-sm md:text-base">
            Company
          </label>

          <select
            name="company"
            value={formData.company}
            onChange={changeHandler}
            className="
              w-full
              h-12
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-xl md:rounded-2xl
              px-4
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          >
            <option value="">Select Company</option>

            {companies.map((company) => (
              <option
                key={company._id}
                value={company.name}
              >
                {company.name}
              </option>
            ))}
          </select>
        </div>

        {/* DEPARTMENT */}
        <div>
          <label className="block mb-2 font-medium text-sm md:text-base">
            Department
          </label>

          <input
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={changeHandler}
            className="
              w-full
              h-12
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-xl md:rounded-2xl
              px-4
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* SKILL */}
        <div>
          <label className="block mb-2 font-medium text-sm md:text-base">
            Skill Required
          </label>

          <select
            name="skill"
            value={formData.skill}
            onChange={changeHandler}
            className="
              w-full
              h-12
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-xl md:rounded-2xl
              px-4
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          >
            <option value="">Select Skill</option>

            {skills.map((skill) => (
              <option
                key={skill._id}
                value={skill.name}
              >
                {skill.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ASSIGN WORKERS */}
      <div className="mt-6" ref={wrapperRef}>
        <label className="block mb-3 font-medium text-sm md:text-base">
          Assign Workers
        </label>

        <div
          onClick={() => setOpenWorkerBox(true)}
          className="
            w-full
            min-h-[48px]
            flex items-center
            bg-slate-100 dark:bg-slate-900
            border border-black/10 dark:border-white/10
            rounded-xl md:rounded-2xl
            px-4
            cursor-pointer
          "
        >
          {formData.workers.length === 0
            ? "Click to select workers"
            : `${formData.workers.length} worker(s) selected`}
        </div>

        {openWorkerBox && (
          <div
            className="
              mt-3
              bg-white dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-xl md:rounded-2xl
              p-3
              shadow-xl
              max-h-80
              overflow-y-auto
            "
          >
            {filteredWorkers.length === 0 ? (
              <p className="text-slate-500">
                No workers found
              </p>
            ) : (
              filteredWorkers.map((worker) => (
                <div
                  key={worker._id}
                  onClick={() => {
                    setFormData((prev) => {
                      const exists =
                        prev.workers.includes(worker.user);

                      return {
                        ...prev,
                        workers: exists
                          ? prev.workers.filter(
                              (id) => id !== worker.user
                            )
                          : [
                              ...prev.workers,
                              worker.user,
                            ],
                      };
                    });
                  }}
                  className={`
                    flex justify-between items-center
                    px-4 py-3
                    rounded-xl
                    cursor-pointer
                    mb-2
                    transition

                    ${
                      formData.workers.includes(worker.user)
                        ? "bg-cyan-500/20 border border-cyan-500"
                        : "hover:bg-slate-100 dark:hover:bg-white/5"
                    }
                  `}
                >
                  <div>
                    <p className="font-semibold">
                      {worker.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      {worker.skills.join(", ")}
                    </p>
                  </div>

                  {formData.workers.includes(worker.user) && (
                    <span className="text-cyan-500 font-bold text-lg">
                      ✓
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* NOTE */}
      <div className="mt-6">
        <label className="block mb-2 font-medium text-sm md:text-base">
          Note
        </label>

        <textarea
          name="note"
          rows="6"
          placeholder="Enter task note..."
          value={formData.note}
          onChange={changeHandler}
          className="
            w-full
            bg-slate-100 dark:bg-slate-900
            border border-black/10 dark:border-white/10
            rounded-xl md:rounded-2xl
            px-4 py-3
            outline-none
            resize-none
            focus:ring-2 focus:ring-cyan-500
          "
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="mt-8">
        <button
          type="submit"
          className="
            w-full md:w-auto
            bg-cyan-500
            hover:bg-cyan-400
            transition
            px-8 py-3
            rounded-xl md:rounded-2xl
            font-semibold
            text-black
          "
        >
          Create Task
        </button>
      </div>

    </form>

  </div>
);
}

export default AdminCreateTask;