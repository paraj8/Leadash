import parajImage from "../assets/paraj.jpg";

export default function Developer() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-5 sm:px-8 lg:px-20 py-16 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

        {/* Glow Effects */}
        <div className="absolute top-10 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/20 blur-[100px] rounded-full"></div>

        {/* LEFT */}
        <div className="flex-1 z-10 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-6 text-sm">
            Creative Developer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Paraj Mandal
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            I’m a Computer Science student and aspiring full stack
            developer passionate about building practical and
            user-focused applications.

            From dashboard systems and UI/UX improvements to
            creative development projects, I enjoy transforming
            ideas into modern digital experiences.

            I love solving workflow and user experience problems
            through technology and real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

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

          <div className="w-[260px] h-[320px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[500px] rounded-[30px] overflow-hidden border border-slate-800 shadow-2xl">

            <img
              src={parajImage}
              alt="Paraj Mandal"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* SKILLS SECTION */}
      <section className="px-5 sm:px-8 lg:px-20 pb-20 lg:pb-24">

        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Frontend Development
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Building modern responsive interfaces using React,
              HTML, CSS, and clean UI principles.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Dashboard Systems
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Designing workflow-focused dashboards with smooth
              and user-friendly experiences.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              UI/UX Improvements
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Creating premium interfaces that feel modern,
              intuitive, and visually engaging.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
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