function AdminManagers() {

  const managers = [
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@gmail.com",
      tasks: 12,
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      tasks: 8,
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      tasks: 15,
    },
  ];

  return (
    <div>

      <h1 className="text-4xl font-black">
        Managers
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        View all managers and their created tasks
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {managers.map((manager) => (

          <div
            key={manager.id}
            className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6"
          >

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {manager.name}
                </h2>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {manager.email}
                </p>

              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-medium">
                Manager
              </span>

            </div>

            <div className="mt-8">

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Created Tasks
              </p>

              <h3 className="text-4xl font-black mt-2">
                {manager.tasks}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminManagers;