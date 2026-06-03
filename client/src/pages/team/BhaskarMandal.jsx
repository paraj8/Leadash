
import bhaskharImg from "../../assets/bhaskar.jpg";
export default function BhaskarMandal() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-slate-900 p-10 rounded-3xl border border-white/10">
        <div className="flex flex-col items-center">
          <img
            src={bhaskharImg}
            alt="Bhaskar Mandal"
            className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 mb-6"
          />
          <h1 className="text-4xl font-bold mb-2">
            Bhaskar Mandal
          </h1>
          <p className="text-cyan-400 text-lg mb-6">
            Junior Developer
          </p>
          <p className="text-slate-300 text-center leading-relaxed">
            Junior Developer at Leadash. Contributes to development,
            testing, and improvement of the task management platform.
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