
export default function Developer() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* HERO SECTION */}
      <section className="relative px-8 lg:px-20 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>
        {/* LEFT */}
        <div className="flex-1 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-6">
            Creative Developer
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Paraj Mandal
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
            I’m a Computer Science student and aspiring full stack developer
            passionate about building practical and user-focused applications.
            From dashboard systems and UI/UX improvements to creative
            development projects, I enjoy transforming ideas into
            modern digital experiences.
            I love solving workflow and user experience problems
            through technology and real-world projects.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition">
              View My Work
            </button>
            <button className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
              Contact
            </button>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="flex-1 z-10 flex justify-center">
          <div className="w-[350px] h-[450px] rounded-[30px] overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="./src/assets/paraj.jpg"
              alt="Paraj Mandal"
              className="w-full h-full object-cover object-[90%]"
            />
          </div>
        </div>
      </section>
      {/* SKILLS SECTION */}
      <section className="px-8 lg:px-20 pb-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4">
              Frontend Development
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Building modern responsive interfaces using React,
              HTML, CSS, and clean UI principles.
            </p>
          </div>
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4">
              Dashboard Systems
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Designing workflow-focused dashboards with smooth
              and user-friendly experiences.
            </p>
          </div>
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4">
              UI/UX Improvements
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Creating premium interfaces that feel modern,
              intuitive, and visually engaging.
            </p>
          </div>
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4">
              Creative Projects
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Combining creativity and development to build
              impactful digital experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}