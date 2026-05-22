import { useState } from "react";

function ManagerCreateTask() {

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    department: "",
    skill: "",
    note: "",
    candidate: "",
  });

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
      candidate: "",
    });
  };

  return (
    <div>

      <h1 className="text-4xl font-black">
        Create Task
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Create and assign tasks to candidates
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

        {/* ASSIGN CANDIDATE Lard coded*/}

        <div className="mt-6">

          <label className="block mb-3 font-medium">
            Assign Candidate
          </label>

          <select
            name="candidate"
            value={formData.candidate}
            onChange={changeHandler}
            className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Select Candidate</option>
            <option value="Paraj">Paraj</option>
            <option value="Rahul">Rahul</option>
          </select>

        </div>

        

       {/* ASSIGN CANDIDATES *
<div className="mt-6">

  <label className="block mb-4 font-medium">
    Assign Candidates
  </label>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

     {filteredCandidates.map((candidate) => ( 

      <label
        key={candidate.id}
        className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 cursor-pointer hover:border-cyan-500 transition"
      >

        <input
          type="checkbox"
          value={candidate.name}
          checked={formData.candidates.includes(candidate.name)}
          onChange={(e) => {

            if (e.target.checked) {

              setFormData({
                ...formData,
                candidates: [
                  ...formData.candidates,
                  candidate.name,
                ],
              });

            } else {

              setFormData({
                ...formData,
                candidates: formData.candidates.filter(
                  (c) => c !== candidate.name
                ),
              });

            }

          }}
          className="w-5 h-5 accent-cyan-500"
        />

        <div>

          <p className="font-semibold">
            {candidate.name}
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {candidate.skill}
          </p>

        </div>

      </label>

    ))}
  </div>

</div>




*/}





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