import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function ManagerRequirement() {

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

    {/* HEADER */}

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      <div>

        <h1 className="text-4xl font-black">
          Companies & Skills
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Manage platform companies and skills
        </p>

      </div>

      <div className="flex gap-4">

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl px-5 py-4">

          <p className="text-sm text-cyan-600 dark:text-cyan-300">
            Companies
          </p>

          <h3 className="text-3xl font-black">
            {companies.length}
          </h3>

        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl px-5 py-4">

          <p className="text-sm text-purple-600 dark:text-purple-300">
            Skills
          </p>

          <h3 className="text-3xl font-black">
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
          Create companies available on the platform
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
              Company List
            </h3>

            <span className="text-sm text-slate-500">
              {companies.length} Total
            </span>

          </div>

          <div className="max-h-80 overflow-y-auto space-y-3 pr-2">

            {companies.length === 0 ? (

              <div className="text-slate-500">
                No companies found
              </div>

            ) : (

              companies.map((item) => (

                <div
                  key={item._id}
                  className="
                    flex items-center justify-between
                    bg-slate-100
                    dark:bg-white/5
                    border border-black/10
                    dark:border-white/10
                    rounded-2xl
                    px-4 py-3
                  "
                >

                  <span className="font-medium">
                    {item.name}
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

      {/* ================= SKILL SECTION ================= */}

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
          Create skills workers can use in their profiles
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
              Skill List
            </h3>

            <span className="text-sm text-slate-500">
              {skills.length} Total
            </span>

          </div>

          <div className="max-h-80 overflow-y-auto space-y-3 pr-2">

            {skills.length === 0 ? (

              <div className="text-slate-500">
                No skills found
              </div>

            ) : (

              skills.map((item) => (

                <div
                  key={item._id}
                  className="
                    flex items-center justify-between
                    bg-slate-100
                    dark:bg-white/5
                    border border-black/10
                    dark:border-white/10
                    rounded-2xl
                    px-4 py-3
                  "
                >

                  <span className="font-medium">
                    {item.name}
                  </span>

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

export default ManagerRequirement;