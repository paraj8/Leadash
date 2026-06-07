import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function AdminRequirement() {

  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");

  const [companies, setCompanies] = useState([]);
  const [skills, setSkills] = useState([]);

  /* ================= FETCH DATA ================= */

 

  const fetchCompanies = async () => {

    try {

      const res = await API.get("/requirements/companies");

      setCompanies(res.data);

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Failed to load companies"
      );

    }

  };

  const fetchSkills = async () => {

    try {

      const res = await API.get("/requirements/skills");

      setSkills(res.data);

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Failed to load skills"
      );

    }

  };
  
  useEffect(() => {

    const fetchData = async () => {

      await Promise.all([
        fetchCompanies(),
        fetchSkills(),
      ]);

    };

    fetchData();

  }, []);

  /* ================= ADD COMPANY ================= */

  const addCompanyHandler = async (e) => {

    e.preventDefault();

    if (!company.trim()) {
      return toast.error("Company name is required");
    }

    try {

      const res = await API.post("/requirements/companies", {
        name: company,
      });

      setCompanies([
        ...companies,
        res.data,
      ]);

      setCompany("");

      toast.success("Company added successfully");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Failed to add company"
      );

    }

  };

  /* ================= ADD SKILL ================= */

  const addSkillHandler = async (e) => {

    e.preventDefault();

    if (!skill.trim()) {
      return toast.error("Skill name is required");
    }

    try {

      const res = await API.post("/requirements/skills", {
        name: skill,
      });

      setSkills([
        ...skills,
        res.data,
      ]);

      setSkill("");

      toast.success("Skill added successfully");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Failed to add skill"
      );

    }

  };

return (
  <div>

    <div className="flex items-center justify-between flex-wrap gap-4">

      <div>

        <h1 className="text-4xl font-black">
          Companies & Skills
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Manage companies and skills used across the platform
        </p>

      </div>

      <div className="flex gap-4">

        <div className="bg-cyan-500/10 border border-cyan-500/20 px-6 py-4 rounded-2xl">
          <p className="text-sm text-cyan-500">
            Companies
          </p>

          <h3 className="text-2xl font-black">
            {companies.length}
          </h3>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 px-6 py-4 rounded-2xl">
          <p className="text-sm text-purple-500">
            Skills
          </p>

          <h3 className="text-2xl font-black">
            {skills.length}
          </h3>
        </div>

      </div>

    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

      {/* ================= COMPANY SECTION ================= */}

      <div
        className="
          bg-white
          dark:bg-white/5
          border border-black/10
          dark:border-white/10
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-2xl font-bold">
          Add Company
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Create companies available for task assignment
        </p>

        <form
          onSubmit={addCompanyHandler}
          className="mt-6"
        >

          <input
            type="text"
            required
            value={company}
            onChange={(e) =>
              setCompany(e.target.value)
            }
            placeholder="Enter company name"
            className="
              w-full
              bg-slate-100
              dark:bg-slate-900
              border border-black/10
              dark:border-white/10
              rounded-2xl
              px-5 py-3
              outline-none
              focus:ring-2
              focus:ring-cyan-500
            "
          />

          <button
            type="submit"
            className="
              mt-5
              w-full
              bg-cyan-500
              hover:bg-cyan-400
              transition
              py-3
              rounded-2xl
              font-semibold
              text-black
            "
          >
            Add Company
          </button>

        </form>

        <div className="mt-8">

          <div className="flex items-center justify-between mb-4">

            <h3 className="font-semibold">
              Existing Companies
            </h3>

            <span className="text-sm text-slate-500">
              {companies.length} Total
            </span>

          </div>

          <div className="max-h-80 overflow-y-auto flex flex-wrap gap-3">

            {companies.length === 0 ? (

              <div className="text-slate-500">
                No companies added
              </div>

            ) : (

              companies.map((item) => (

                <div
                  key={item._id}
                  className="
                    px-4 py-2
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-500/20
                    font-medium
                  "
                >
                  {item.name}
                </div>

              ))

            )}

          </div>

        </div>

      </div>

      {/* ================= SKILLS SECTION ================= */}

      <div
        className="
          bg-white
          dark:bg-white/5
          border border-black/10
          dark:border-white/10
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-2xl font-bold">
          Add Skill
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Create skills that workers can use in profiles
        </p>

        <form
          onSubmit={addSkillHandler}
          className="mt-6"
        >

          <input
            type="text"
            required
            value={skill}
            onChange={(e) =>
              setSkill(e.target.value)
            }
            placeholder="Enter skill name"
            className="
              w-full
              bg-slate-100
              dark:bg-slate-900
              border border-black/10
              dark:border-white/10
              rounded-2xl
              px-5 py-3
              outline-none
              focus:ring-2
              focus:ring-cyan-500
            "
          />

          <button
            type="submit"
            className="
              mt-5
              w-full
              bg-cyan-500
              hover:bg-cyan-400
              transition
              py-3
              rounded-2xl
              font-semibold
              text-black
            "
          >
            Add Skill
          </button>

        </form>

        <div className="mt-8">

          <div className="flex items-center justify-between mb-4">

            <h3 className="font-semibold">
              Existing Skills
            </h3>

            <span className="text-sm text-slate-500">
              {skills.length} Total
            </span>

          </div>

          <div className="max-h-80 overflow-y-auto flex flex-wrap gap-3">

            {skills.length === 0 ? (

              <div className="text-slate-500">
                No skills added
              </div>

            ) : (

              skills.map((item) => (

                <div
                  key={item._id}
                  className="
                    px-4 py-2
                    rounded-2xl
                    bg-purple-500/10
                    border border-purple-500/20
                    font-medium
                  "
                >
                  {item.name}
                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>

  </div>
);
}

export default AdminRequirement;