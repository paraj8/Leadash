import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Leads", path: "/admin/leads" },
    { name: "Recruiters", path: "/admin/recruiters" },
    { name: "Candidates", path: "/admin/candidates" },
  ];

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div className="w-72 min-h-screen bg-white dark:bg-slate-950 border-r border-black/10 dark:border-white/10 text-black dark:text-white flex flex-col justify-between transition-colors duration-300">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="p-6 border-b border-black/10 dark:border-white/10">

          <h1 className="text-3xl font-black tracking-wide">
            Lead<span className="text-cyan-400">ash</span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Admin Control Panel
          </p>

        </div>

        {/* MENU */}
        <div className="p-4 space-y-2">

          {menuItems.map((item) => {

            const isActive = location.pathname === item.path;

            return (
              <Link key={item.name} to={item.path}>

                <div
                  className={`p-4 rounded-2xl transition-all duration-300
                  
                  ${
                    isActive
                      ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20"
                      : "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300"
                  }
                  `}
                >
                  {item.name}
                </div>

              </Link>
            );
          })}

        </div>

      </div>

      {/* USER CARD */}
      <div className="p-4">

        <div className="bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-5">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Logged in as
          </p>

          <h2 className="text-xl font-bold mt-1">
            {user?.name}
          </h2>

          <p className="text-cyan-400 text-sm capitalize mt-1">
            {user?.role}
          </p>

          <button
            onClick={logoutHandler}
            className="mt-5 w-full bg-red-500 hover:bg-red-400 transition py-3 rounded-2xl font-semibold text-white"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default AdminSidebar;