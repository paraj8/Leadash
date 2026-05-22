import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="h-20 border-b border-black/10 dark:border-white/10 bg-white dark:bg-slate-950 flex items-center justify-between px-8 transition-colors duration-300">
      
      <div>
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Welcome back, {user?.name} 👋
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Manage your recruitment workflow efficiently
        </p>
      </div>

      <div className="flex items-center gap-4">

        {/* THEME BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-black dark:text-white transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* PROFILE */}
        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-black text-lg">
          {user?.name?.charAt(0)}
        </div>

      </div>
    </div>
  );
}

export default Navbar;