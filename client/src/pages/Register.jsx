import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "worker",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PASSWORD VALIDATION
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FRONTEND VALIDATION
    if (!validatePassword(form.password)) {
      toast.error(
        "Password must be 8+ chars, include letter, number & special char"
      );
      return;
    }

    try {
      // 1. Register user
      await API.post("/auth/register", form);

      // 2. Send OTP
      await API.post("/otp/send", {
        email: form.email,
      });

      toast.success("OTP sent to your email!");

      // 3. Navigate to OTP page
      navigate("/otp-verification", {
        state: { email: form.email },
      });

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <h1 className="text-3xl font-black text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-slate-400 mb-8">
          Join Leadash CRM
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
            required
          />

          {/* PASSWORD FIELD WITH SHOW/HIDE */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10 pr-16"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-gray-400 cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
          >
            <option value="worker">Worker</option>
            <option value="manager">Manager</option>
          </select>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl hover:bg-cyan-400 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;