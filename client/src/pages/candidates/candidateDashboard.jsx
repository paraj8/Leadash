function Admin() {
  return (
    <div>

      <h1 className="text-4xl font-black">
        Admin Dashboard
      </h1>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Manage platform tasks, recruiters and candidates
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6">

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Total Tasks
          </p>

          <h2 className="text-4xl font-black mt-3">
            12
          </h2>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">

          <p className="text-yellow-600 dark:text-yellow-300 text-sm">
            Pending
          </p>

          <h2 className="text-4xl font-black mt-3">
            5
          </h2>

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">

          <p className="text-cyan-600 dark:text-cyan-300 text-sm">
            In Progress
          </p>

          <h2 className="text-4xl font-black mt-3">
            4
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">

          <p className="text-green-600 dark:text-green-300 text-sm">
            Completed
          </p>

          <h2 className="text-4xl font-black mt-3">
            3
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Admin;