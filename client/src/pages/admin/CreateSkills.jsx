import { useState } from "react";

function CreateSkills() {

  const [skill, setSkill] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(skill);

    setSkill("");
  };

  return (
    <div>

      <h1 className="text-4xl font-black">
        Create Skills
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Add skills for recruiters and candidates
      </p>

      <form
        onSubmit={submitHandler}
        className="mt-10 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 max-w-2xl"
      >

        <div>

          <label className="block mb-3 font-medium">
            Skill Name
          </label>

          <input
            type="text"
            placeholder="Enter skill name"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

        </div>

        <button
          type="submit"
          className="mt-6 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold text-black"
        >
          Create Skill
        </button>

      </form>

    </div>
  );
}

export default CreateSkills;