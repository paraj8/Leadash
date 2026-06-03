import parajImg from "../../assets/paraj.jpg";
export default function ParajMandal() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-slate-900 p-10 rounded-3xl border border-white/10">
        <div className="flex flex-col items-center">
          <img
            src={parajImg}
            alt="Paraj Mandal"
            className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 mb-6"
          />
          <h1 className="text-4xl font-bold mb-2">
            Paraj Mandal
          </h1>
          <p className="text-cyan-400 text-lg mb-6">
            Owner & Developer
          </p>
          <p className="text-slate-300 text-center leading-relaxed">
            Founder of Leadash and responsible for project architecture, development, and overall product vision.
          </p>
          <a
            href="/"
            className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}