import { useState } from "react";

function ManagerCreateTask() {

  const workers = [
    {
      id: 1,
      name: "Paraj",
      skill: "React",
    },
    {
      id: 2,
      name: "Rahul",
      skill: "Node.js",
    },
    {
      id: 3,
      name: "Aman",
      skill: "UI/UX",
    },
    {
      id: 4,
      name: "Rohit",
      skill: "React",
    },
  ];

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    department: "",
    skill: "",
    note: "",
    workers: [],
  });

  const filteredWorkers = workers.filter(
    (worker) => worker.skill === formData.skill
  );

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);

    // backend later

    setFormData({
      title: "",
      company: "",
      department: "",
      skill: "",
      note: "",
      workers: [],
    });
  };

  return (
    <div>

      <h1 className="text-4xl font-black">
        Create Task
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Create and assign tasks to workers
      </p>

      <form
        onSubmit={submitHandler}
        className="mt-10 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* TASK TITLE */}
          <div>

            <label className="block mb-3 font-medium">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={changeHandler}
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

          </div>

          {/* COMPANY */}
          <div>

            <label className="block mb-3 font-medium">
              Company
            </label>

            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={changeHandler}
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

          </div>

          {/* DEPARTMENT */}
          <div>

            <label className="block mb-3 font-medium">
              Department
            </label>

            <input
              type="text"
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={changeHandler}
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

          </div>

          {/* SKILL */}
          <div>

            <label className="block mb-3 font-medium">
              Skill Required
            </label>

            <select
              name="skill"
              value={formData.skill}
              onChange={changeHandler}
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            >
              <option value="">Select Skill</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="UI/UX">UI/UX</option>
            </select>

          </div>

        </div>

        {/* ASSIGN WORKERS */}
        <div className="mt-8">

          <label className="block mb-4 font-medium">
            Assign Workers
          </label>

          {formData.skill === "" ? (

            <div className="bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-500 dark:text-slate-400">
              Select a skill first to view workers
            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {filteredWorkers.length > 0 ? (

                filteredWorkers.map((worker) => (

                  <label
                    key={worker.id}
                    className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 cursor-pointer hover:border-cyan-500 transition"
                  >

                    <input
                      type="checkbox"
                      value={worker.name}
                      checked={formData.workers.includes(worker.name)}
                      onChange={(e) => {

                        if (e.target.checked) {

                          setFormData({
                            ...formData,
                            workers: [
                              ...formData.workers,
                              worker.name,
                            ],
                          });

                        } else {

                          setFormData({
                            ...formData,
                            workers: formData.workers.filter(
                              (w) => w !== worker.name
                            ),
                          });

                        }

                      }}
                      className="w-5 h-5 accent-cyan-500"
                    />

                    <div>

                      <p className="font-semibold">
                        {worker.name}
                      </p>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {worker.skill}
                      </p>

                    </div>

                  </label>

                ))

              ) : (

                <div className="bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-500 dark:text-slate-400">
                  No workers found for selected skill
                </div>

              )}

            </div>

          )}

        </div>

        {/* NOTE */}
        <div className="mt-6">

          <label className="block mb-3 font-medium">
            Note
          </label>

          <textarea
            name="note"
            rows="5"
            placeholder="Enter task note..."
            value={formData.note}
            onChange={changeHandler}
            className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          />

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-5 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-2xl font-semibold text-black"
        >
          Create Task
        </button>

      </form>

    </div>
  );
}

export default ManagerCreateTask;