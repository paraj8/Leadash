function AllTasks() {

  const tasks = [
  {
    id: 1,
    title: "Build Landing Page",
    company: "EasyLife",
    candidates: ["Paraj", "Rahul"],
    status: "Pending",
    date: "21 May 2026",
  },
  {
    id: 2,
    title: "Fix Dashboard UI",
    company: "TechNova",
    candidates: ["Aman"],
    status: "In Progress",
    date: "20 May 2026",
  },
  {
    id: 3,
    title: "Create API Integration",
    company: "Leadash",
    candidates: ["Rahul", "Aman", "Paraj"],
    status: "Completed",
    date: "18 May 2026",
  },
];

  return (
    <div>

      <h1 className="text-4xl font-black">
        All Tasks
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Manage all created tasks and candidate progress
      </p>

      <div className="mt-10 overflow-x-auto rounded-3xl border border-black/10 dark:border-white/10">

        <table className="w-full">

          <thead className="bg-slate-200 dark:bg-white/5">

            <tr className="text-left">

              <th className="p-5 font-semibold">
                Task
              </th>

              <th className="p-5 font-semibold">
                Company
              </th>

              <th className="p-5 font-semibold">
                Candidate
              </th>



{/* CANDIDATES from database


<td className="p-5">

  <div className="flex flex-wrap gap-2">

    {task.candidates.map((candidate) => (

      <span
        key={candidate}
        className="px-3 py-1 rounded-full text-sm bg-slate-200 dark:bg-white/10"
      >
        {candidate}
      </span>

    ))}

  </div>

</td>
*/}



              <th className="p-5 font-semibold">
                Status
              </th>

              <th className="p-5 font-semibold">
                Created Date
              </th>

            </tr>

          </thead>

          <tbody>

            {tasks.map((task) => (

              <tr
                key={task.id}
                className="border-t border-black/10 dark:border-white/10"
              >

                <td className="p-5 font-medium">
                  {task.title}
                </td>

                <td className="p-5">
                  {task.company}
                </td>

                <td className="p-5">
                  {task.candidate}
                </td>

                <td className="p-5">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium

                    ${
                      task.status === "Pending"
                        ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-300"
                        : task.status === "In Progress"
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
                        : "bg-green-500/10 text-green-600 dark:text-green-300"
                    }
                    `}
                  >
                    {task.status}
                  </span>

                </td>

                <td className="p-5 text-slate-500 dark:text-slate-400">
                  {task.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AllTasks;