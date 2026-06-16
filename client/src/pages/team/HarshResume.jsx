import harshImg from "../../assets/harsh.jpg";

export default function HarshResume() {
  return (
    <div className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        
        <img
          src={harshImg}
          alt="Harsh Raj"
          className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 mb-6"
        />
        
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          Harsh Raj
        </h1>

        <p className="text-cyan-400 text-xl md:text-2xl mb-6">
          Frontend Developer 
        </p>

        <p className="max-w-2xl text-slate-300">
          I build modern websites
          and love turning ideas into beautiful user experiences.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-semibold">
            View Projects
          </button>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 px-6 py-3 rounded-xl"
          >
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
          I'm Harsh Raj, a Computer Science student passionate
          about web development, UI/UX design, and creative digital
          experiences. I enjoy building responsive websites using
          React, JavaScript, Tailwind CSS, and modern web technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2 text-slate-300">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Programming</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Creative</h3>
            <ul className="space-y-2 text-slate-300">

              <li>UI/UX</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Leadash Dashboard
            </h3>
            <p className="text-slate-400">
              Modern dashboard system built with React and Tailwind CSS.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Resume Builder
            </h3>
            <p className="text-slate-400">
              Responsive resume website with clean UI and modern design.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Code Nagari
            </h3>
            <p className="text-slate-400">
              Developer-focused coding brand and community project.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>
            <p className="text-slate-400">
              Personal portfolio showcasing projects and skills.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Frontend Developer
            </h3>
            <p className="text-slate-400 mt-2">
              Building responsive web applications and modern user interfaces.
            </p>
          </div>

          

        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">
            Bachelor of ----------------------------
          </h3>

          <p className="text-slate-400">
            Currently learning React, Java, Backend Development,
            and Full Stack Development.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact
        </h2>

        <div className="text-center space-y-4">
          <p>GitHub: </p>
          <a href="">
          <p>LinkedIn: Harsh </p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/10 text-center text-slate-500">
        © 2026 Vishal Pramanik • Built with React & Tailwind CSS
      </footer>

    </div>
  );
}