import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

function ResetPassword() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;

  const [form, setForm] = useState({
    otp: "",
    newPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. verify OTP
      await API.post("/otp/verify", {
        email,
        otp: form.otp,
      });

      // 2. update password
      await API.post("/auth/reset-password", {
        email,
        newPassword: form.newPassword,
      });

      toast.success("Password reset successful");

      navigate("/login");

    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">

      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10">

        <h1 className="text-2xl font-bold text-center mb-6">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="otp"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
            required
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              name="newPassword"
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={form.newPassword}
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

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl"
          >
            Reset Password
          </button>
        </form>

      </div>
    </div>
  );
}

export default ResetPassword;