import { HiMenu, HiX } from "react-icons/hi";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function AdminSidebar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Requirement", path: "/admin/admin-requirement" },
    { name: "Create Tasks", path: "/admin/admin-create-task" },
    { name: "All Tasks", path: "/admin/admin-all-tasks" },
    { name: "Managers", path: "/admin/admin-managers" },
    { name: "Workers", path: "/admin/admin-workers" },
  ];

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-3 left-3 z-50 bg-cyan-500 text-black w-12 h-12 rounded-xl shadow-lg flex items-center justify-center active:scale-95 transition"
      >
        <HiMenu size={24} />
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static
          top-0 left-0
          w-64 md:w-72 h-dvh
          bg-white dark:bg-slate-950
          border-r border-black/10 dark:border-white/10
          text-black dark:text-white
          flex flex-col justify-between
          transition-transform duration-300 ease-out
          z-50

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* TOP */}
        <div>
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-3 right-3"
          >
            <HiX size={24} />
          </button>

          {/* LOGO */}
          <div className="p-5 md:p-6 border-b border-black/10 dark:border-white/10">
            <h1 className="text-2xl md:text-3xl font-black tracking-wide">
              Lead<span className="text-cyan-400">ash</span>
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">
              Admin Control Panel
            </p>
          </div>

          {/* MENU */}
          <div className="p-3 md:p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={`p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 text-sm md:text-base
                    ${
                      isActive
                        ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20"
                        : "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* USER CARD */}
        <div className="p-3 md:p-4">
          <div className="bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Logged in as
            </p>

            <h2 className="text-lg md:text-xl font-bold mt-1">
              {user?.name}
            </h2>

            <p className="text-cyan-400 text-sm capitalize mt-1">
              {user?.role}
            </p>

            <button
              onClick={logoutHandler}
              className="mt-4 md:mt-5 w-full bg-red-500 hover:bg-red-400 transition py-2.5 md:py-3 rounded-xl md:rounded-2xl font-semibold text-white text-sm md:text-base"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;