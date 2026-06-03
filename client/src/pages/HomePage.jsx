

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-slate-950/70">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            Leadash <span className="text-cyan-400">Task Manager</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>
          <a href="#workflow" className="hover:text-cyan-400 transition">
            Workflow
          </a>
          <a href="#roles" className="hover:text-cyan-400 transition">
            Roles
          </a>
            <a href="/developer" className="hover:text-cyan-400 transition">
            Developer
          </a>
        </div>

        <div className="flex gap-3">
          <a href="/login">
            <button className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Login
            </button>
          </a>

          <a href="/register">
            <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition shadow-lg shadow-cyan-500/30">
              Get Started
            </button>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 lg:px-20 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

        {/* LEFT */}
        <div className="flex-1 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            🚀 Full Stack Task Management Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Manage Tasks
            <br />
            <span className="text-cyan-400">Like a Pro</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Leadash helps teams manage tasks,
            assign works, track progress,monitor productivity, and collabarate efficiently through a modern dashboard experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/register">
              <button className="px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition shadow-2xl shadow-cyan-500/30 hover:scale-105 duration-300">
                Start Free
              </button>
            </a>

            <a href="/login">
              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 text-lg transition hover:scale-105 duration-300">
                Login Dashboard
              </button>
            </a>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              ["10K+", "Tasks Completed"],
              ["500+", "Team Members"],
              ["99%", "Secure Auth"],
              ["24/7", "Cloud Access"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-1 transition"
              >
                <h2 className="text-2xl font-bold text-cyan-400">{number}</h2>
                <p className="text-sm text-slate-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex-1 z-10 w-full max-w-xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h2 className="text-xl font-bold">Dashboard Preview</h2>
                <p className="text-sm text-slate-400">Interactive Task Management Panel</p>
              </div>

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                 ["Total Tasks", "1240"],
                ["Pending", "321"],
                ["In Progress", "598"],
                ["Completed", "96"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  <p className="text-sm text-slate-400">{title}</p>
                  <h3 className="text-3xl font-bold mt-2">{value}</h3>
                </div>
              ))}
            </div>

            {/* Fake Activity */}
            <div className="space-y-3">
              {[
              "Task assigned to team members",
                "New Task created",
                "Dashboard analytics updated",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-cyan-400">Live</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-8 lg:px-20 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">Powerful Features</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
 Everything needed to manage tasks, teams, and productivity efficiently.          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
[
  {
    title: "Task Assignment",
    desc: "Assign tasks to team members and monitor progress efficiently.",
  },
  {
    title: "Role Management",
    desc: "Admin, manager, and team member role-based access control.",
  },
  {
    title: "Progress Tracking",
    desc: "Track pending, active, and completed tasks in real time.",
  },
  {
    title: "Dashboard Analytics",
    desc: "View productivity and task completion metrics.",
  },
  {
    title: "Modern UI",
    desc: "Fast, responsive, and user-friendly dashboard experience.",
  },
  {
    title: "Team Collaboration",
    desc: "Collaborate seamlessly through organized workflows.",
  },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="px-8 lg:px-20 py-20 bg-white/5 border-y border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">Simple Workflow</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Create Account",
            "Assign Tasks",
            "Manage Team Memebers",
            "Track Progress",
          ].map((step, index) => (
            <div
              key={step}
              className="relative p-8 rounded-3xl bg-slate-900/80 border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500 text-black text-2xl font-black flex items-center justify-center mx-auto mb-6">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* TEAM SECTION */}
<section id="roles" className="px-8 lg:px-20 py-20">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-black">Meet Our Team</h2>
    <p className="text-slate-400 mt-4">
      The people behind Leadash Task Manager.
    </p>
  </div>
  
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  <a href="/team/paraj">
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-cyan-400/40 transition">
      <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
        PM
      </div>
      <h3 className="text-2xl font-bold mb-2">
        Paraj Mandal
      </h3>
      <p className="text-cyan-400">
        Owner & Developer
      </p>
    </div>
  </a>

  <a href="/team/vishal">
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-cyan-400/40 transition">
      <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
        VP
      </div>
      <h3 className="text-2xl font-bold mb-2">
        Vishal Pramik
      </h3>
      <p className="text-cyan-400">
        Manager
      </p>
    </div>
  </a>

  <a href="/team/harsh">
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-cyan-400/40 transition">
      <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
        HR
      </div>
      <h3 className="text-2xl font-bold mb-2">
        Harsh Raj
      </h3>
      <p className="text-cyan-400">
        Junior Developer
      </p>
    </div>
  </a>

  <a href="/team/bhaskar">
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-cyan-400/40 transition">
      <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
        BM
      </div>
      <h3 className="text-2xl font-bold mb-2">
        Bhaskar Mandal
      </h3>
      <p className="text-cyan-400">
        Junior Developer
      </p>
    </div>
  </a>

</div>
</section>
      <section className="px-8 lg:px-20 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-black leading-tight">
            Build Your Task Workflow
            <span className="text-cyan-400"> Faster</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
          Start managing tasks, teams, and productivity with a
            modern task management dashboard.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <a href="/register">
              <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition hover:scale-105 duration-300">
                Create Account
              </button>
            </a>

            <a href="/login">
              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 text-lg transition hover:scale-105 duration-300">
                Open Dashboard
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 lg:px-20 py-10 border-t border-white/10 text-center text-slate-500 text-sm">
        © 2026 Leadash Task Manager • Built by Paraj Mandal & Team
      </footer>
    </div>
  );
}
