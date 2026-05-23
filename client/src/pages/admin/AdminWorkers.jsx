function AdminWorkers() {

  const workers = [
    {
      id: 1,
      name: "Paraj Mandal",
      email: "paraj@gmail.com",
      mobile: "9876543210",
      skills: ["React", "Node.js", "UI/UX"],
      experience: "2 Years",
      bio: "Frontend developer with experience in modern web applications and dashboard systems.",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      mobile: "9123456780",
      skills: ["MongoDB", "Express", "Backend"],
      experience: "1 Year",
      bio: "Backend developer focused on APIs, authentication and database architecture.",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      mobile: "9988776655",
      skills: ["React", "Tailwind", "Figma"],
      experience: "3 Years",
      bio: "Creative UI developer with strong design and frontend implementation skills.",
    },
  ];

  return (
    <div>

      <h1 className="text-4xl font-black">
        All Workers
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        View all registered workers and their profile details
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {workers.map((worker) => (

          <div
            key={worker.id}
            className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6"
          >

            {/* TOP */}
            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {worker.name}
                </h2>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {worker.email}
                </p>

              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-medium">
                Worker
              </span>

            </div>

            {/* MOBILE */}
            <div className="mt-6">

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Mobile Number
              </p>

              <h3 className="font-semibold mt-1">
                {worker.mobile}
              </h3>

            </div>

            {/* EXPERIENCE */}
            <div className="mt-5">

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Work Experience
              </p>

              <h3 className="font-semibold mt-1">
                {worker.experience}
              </h3>

            </div>

            {/* SKILLS */}
            <div className="mt-5">

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Skills
              </p>

              <div className="flex flex-wrap gap-2">

                {worker.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-white/10"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* BIO */}
            <div className="mt-6">

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Bio
              </p>

              <p className="mt-2 leading-relaxed text-sm">
                {worker.bio}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminWorkers;