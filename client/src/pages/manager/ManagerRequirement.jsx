import { useState } from "react";

function ManagerRequirement() {

  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");

  const [companies, setCompanies] = useState([
    "EasyLife",
    "Leadash",
  ]);

  const [skills, setSkills] = useState([
    "React",
    "Node.js",
  ]);

  const addCompanyHandler = (e) => {
    e.preventDefault();

    if (!company.trim()) return;

    setCompanies([...companies, company]);

    setCompany("");
  };

  const addSkillHandler = (e) => {
    e.preventDefault();

    if (!skill.trim()) return;

    setSkills([...skills, skill]);

    setSkill("");
  };

  return (
    <div>

      <h1 className="text-4xl font-black">
        Create Company & Skills
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Manage platform companies and skills
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

        {/* COMPANY SECTION */}
        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold">
            Add Company
          </h2>

          <form
            onSubmit={addCompanyHandler}
            className="mt-6"
          >

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="mt-5 w-full bg-cyan-500 hover:bg-cyan-400 transition py-3 rounded-2xl font-semibold text-black"
            >
              Add Company
            </button>

          </form>

          <div className="mt-8 flex flex-wrap gap-3">

            {companies.map((item, index) => (

              <div
                key={index}
                className="px-4 py-2 rounded-2xl bg-slate-100 dark:bg-white/10"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        {/* SKILL SECTION */}
        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold">
            Add Skill
          </h2>

          <form
            onSubmit={addSkillHandler}
            className="mt-6"
          >

            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Enter skill name"
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="mt-5 w-full bg-cyan-500 hover:bg-cyan-400 transition py-3 rounded-2xl font-semibold text-black"
            >
              Add Skill
            </button>

          </form>

          <div className="mt-8 flex flex-wrap gap-3">

            {skills.map((item, index) => (

              <div
                key={index}
                className="px-4 py-2 rounded-2xl bg-slate-100 dark:bg-white/10"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManagerRequirement;