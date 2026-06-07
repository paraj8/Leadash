import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
<div className="min-h-20 border-b border-black/10 dark:border-white/10 bg-white dark:bg-slate-950 flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 transition-colors duration-300">      {/* LEFT */}
      <div className="min-w-0 pl-12 md:pl-0">
        <h1 className="text-lg md:text-2xl font-bold text-black dark:text-white truncate">
          Welcome back, {user?.name} 👋
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mt-1 truncate">
          Manage your recruitment workflow efficiently
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">

        {/* THEME BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 md:px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-black dark:text-white text-sm transition hover:scale-105"
        >
          <span className="hidden sm:inline">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </span>

          <span className="sm:hidden">
            {darkMode ? "☀️" : "🌙"}
          </span>
        </button>

        {/* PROFILE */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-black text-base md:text-lg shrink-0">
          {user?.name?.charAt(0)}
        </div>

      </div>

    </div>
  );
}

export default Navbar;