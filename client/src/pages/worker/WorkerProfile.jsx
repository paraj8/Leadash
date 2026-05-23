import { useState } from "react";

function WorkerProfile() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    experience: "",
    bio: "",
    skills: [],
  });

  const skillsList = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "UI/UX",
    "Tailwind",
  ];

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const skillHandler = (skill) => {

    if (formData.skills.includes(skill)) {

      setFormData({
        ...formData,
        skills: formData.skills.filter(
          (item) => item !== skill
        ),
      });

    } else {

      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });

    }

  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>

      <h1 className="text-4xl font-black">
        Worker Profile
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Update your professional profile information
      </p>

      <form
        onSubmit={submitHandler}
        className="mt-10 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 max-w-4xl"
      >

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
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
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
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
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
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
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
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-8">

          <label className="block mb-4 font-medium">
            Skills
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {skillsList.map((skill) => (

              <label
                key={skill}
                className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 cursor-pointer hover:border-cyan-500 transition"
              >

                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => skillHandler(skill)}
                  className="w-5 h-5 accent-cyan-500"
                />

                <span>
                  {skill}
                </span>

              </label>

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
            rows="5"
            className="w-full bg-slate-100 dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            required
          />

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-2xl font-semibold text-black"
        >
          Save Profile
        </button>

      </form>

    </div>
  );
}

export default WorkerProfile;