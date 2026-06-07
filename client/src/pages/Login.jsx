import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success(`Welcome back ${res.data.user.name}`);

      const role = res.data.user.role;

      if (role === "admin") navigate("/admin");
      else if (role === "manager") navigate("/manager");
      else navigate("/worker");

    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4">

      {/* CARD */}
      <div className="
        w-full max-w-md
        p-6 sm:p-8
        rounded-2xl sm:rounded-3xl

        bg-white/5
        border border-white/10
        backdrop-blur-2xl

        shadow-2xl shadow-black/40
      ">

        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl font-black text-center">
          Welcome Back
        </h1>

        <p className="text-center text-slate-400 text-sm sm:text-base mt-2 mb-6">
          Login to your Leadash dashboard
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="
              w-full
              p-3 sm:p-3.5
              rounded-xl

              bg-black/30
              border border-white/10
              outline-none

              focus:border-cyan-400/50
              focus:ring-2 focus:ring-cyan-500/20

              text-sm sm:text-base
            "
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="
                w-full
                p-3 sm:p-3.5
                pr-10 sm:pr-12
                rounded-xl

                bg-black/30
                border border-white/10
                outline-none

                focus:border-cyan-400/50
                focus:ring-2 focus:ring-cyan-500/20

                text-sm sm:text-base
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                text-slate-400 hover:text-slate-200
                transition
              "
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">
            <span
              onClick={() => navigate("/forgot-password")}
              className="
                text-xs sm:text-sm
                text-cyan-400
                cursor-pointer
                hover:underline
              "
            >
              Forgot Password?
            </span>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="
              w-full
              py-3 sm:py-3.5
              rounded-xl

              bg-cyan-500 hover:bg-cyan-400
              text-black font-semibold sm:font-bold

              text-sm sm:text-base

              shadow-lg shadow-cyan-500/30
              hover:scale-[1.02]
              transition
              duration-300
            "
          >
            Login
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-xs sm:text-sm text-slate-400 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-cyan-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;