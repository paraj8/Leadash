import { useEffect, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

function WorkerProfile() {

  const [skillsList, setSkillsList] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    experience: "",
    bio: "",
    skills: [],
  });

  /* ================= FETCH SKILLS ================= */

  useEffect(() => {

    const fetchSkills = async () => {

      try {

        const res = await API.get("/requirements/skills");

        setSkillsList(res.data);

      } catch (err) {

        toast.error(
          err.response?.data?.message || "Failed to load skills"
        );

      }

    };

    fetchSkills();

  }, []);

  /* ================= INPUT CHANGE ================= */

  const changeHandler = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  /* ================= SUBMIT ================= */

const submitHandler = async (e) => {

  e.preventDefault();

  try {

    const res = await API.post(
      "/worker-profile",
      formData
    );

    toast.success(res.data.message);

  } catch (err) {

    toast.error(
      err.response?.data?.message ||
      "Failed to save profile"
    );

  }

};

return (
  <div className="space-y-8">

    {/* HEADER */}
    <div>
      <h1 className="text-3xl md:text-4xl font-black tracking-tight">
        Worker Profile
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Update your professional profile information
      </p>
    </div>

    {/* PROFILE SUMMARY */}
    <div
      className="
        bg-white dark:bg-white/5
        border border-black/10 dark:border-white/10
        rounded-3xl
        p-6
      "
    >
      <div className="flex items-center gap-5">

        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-cyan-500/10
            text-cyan-500
            flex items-center justify-center
            text-2xl font-black
          "
        >
          {formData.name?.charAt(0) || "W"}
        </div>

        <div>
          <h2 className="text-xl font-bold">
            {formData.name || "Worker"}
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            {formData.email}
          </p>
        </div>

      </div>
    </div>

    {/* FORM */}
    <form
      onSubmit={submitHandler}
      className="
        bg-white dark:bg-white/5
        border border-black/10 dark:border-white/10
        rounded-3xl
        p-6 md:p-8
      "
    >

      {/* SECTION TITLE */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">
          Personal Information
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Keep your profile details up to date
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* NAME */}
        <div>
          <label className="block mb-3 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Enter your full name"
            className="
              w-full
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-2xl
              px-5 py-3
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block mb-3 font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your email"
            className="
              w-full
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-2xl
              px-5 py-3
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* MOBILE */}
        <div>
          <label className="block mb-3 font-medium">
            Mobile Number
          </label>

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={changeHandler}
            placeholder="Enter mobile number"
            className="
              w-full
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-2xl
              px-5 py-3
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* EXPERIENCE */}
        <div>
          <label className="block mb-3 font-medium">
            Work Experience
          </label>

          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={changeHandler}
            placeholder="Example: 2 Years"
            className="
              w-full
              bg-slate-100 dark:bg-slate-900
              border border-black/10 dark:border-white/10
              rounded-2xl
              px-5 py-3
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

      </div>

      {/* SKILLS */}
      <div className="mt-8">

        <label className="block mb-3 font-medium">
          Skills
        </label>

        <select
          onChange={(e) => {
            const selectedSkill = e.target.value;

            if (
              selectedSkill &&
              !formData.skills.includes(selectedSkill)
            ) {
              setFormData({
                ...formData,
                skills: [
                  ...formData.skills,
                  selectedSkill,
                ],
              });
            }

            e.target.value = "";
          }}
          className="
            w-full
            bg-slate-100 dark:bg-slate-900
            border border-black/10 dark:border-white/10
            rounded-2xl
            px-5 py-3
            outline-none
            focus:ring-2 focus:ring-cyan-500
          "
        >
          <option value="">
            Select Skill
          </option>

          {skillsList.map((skill) => (
            <option
              key={skill._id}
              value={skill.name}
            >
              {skill.name}
            </option>
          ))}
        </select>

        {/* SELECTED SKILLS */}
        <div className="flex flex-wrap gap-3 mt-5">

          {formData.skills.map((skill, index) => (

            <div
              key={index}
              className="
                flex items-center gap-3
                px-4 py-2
                rounded-2xl
                bg-cyan-500/10
                border border-cyan-500/20
              "
            >
              <span>{skill}</span>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    skills: formData.skills.filter(
                      (item) => item !== skill
                    ),
                  })
                }
                className="
                  text-red-500
                  font-bold
                  hover:scale-110
                  transition
                "
              >
                ×
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* BIO */}
      <div className="mt-8">

        <label className="block mb-3 font-medium">
          Bio Description
        </label>

        <textarea
          name="bio"
          value={formData.bio}
          onChange={changeHandler}
          placeholder="Write something about yourself..."
          rows="6"
          className="
            w-full
            bg-slate-100 dark:bg-slate-900
            border border-black/10 dark:border-white/10
            rounded-2xl
            px-5 py-4
            outline-none
            focus:ring-2 focus:ring-cyan-500
            resize-none
          "
          required
        />

      </div>

      {/* BUTTON */}
      <div className="mt-8 flex justify-end">

        <button
          type="submit"
          className="
            bg-cyan-500
            hover:bg-cyan-400
            transition
            px-8 py-3
            rounded-2xl
            font-semibold
            text-black
            shadow-lg shadow-cyan-500/20
          "
        >
          Save Profile
        </button>

      </div>

    </form>

  </div>
);
}

export default WorkerProfile;