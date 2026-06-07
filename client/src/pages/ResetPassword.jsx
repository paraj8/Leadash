import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";
import { KeyRound, Eye, EyeOff } from "lucide-react";

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
      await API.post("/otp/verify", {
        email,
        otp: form.otp,
      });

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
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4">

    <div
      className="
        w-full max-w-md
        p-6 sm:p-8
        rounded-2xl sm:rounded-3xl

        bg-white/[0.05]
        border border-white/10
        backdrop-blur-2xl

        shadow-[0_0_70px_rgba(6,182,212,0.10)]
      "
    >

      {/* ICON */}
      <div className="
        w-14 h-14 sm:w-16 sm:h-16
        mx-auto mb-5

        rounded-2xl
        bg-cyan-500/10
        border border-cyan-400/20

        flex items-center justify-center
      ">
        <KeyRound size={22} className="text-cyan-300" />
      </div>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-black text-center">
        Reset Password
      </h1>

      <p className="text-center text-slate-400 text-sm sm:text-base mt-2">
        Set a new password for your account
      </p>

      {/* EMAIL */}
      <div className="flex justify-center mt-4 mb-6">
        <div className="
          px-3 py-1.5
          rounded-full
          bg-cyan-500/10
          border border-cyan-500/20
        ">
          <span className="text-cyan-400 text-xs sm:text-sm break-all">
            {email}
          </span>
        </div>
      </div>

      {/* FORM */}
<form onSubmit={handleSubmit} className="space-y-4">

  {/* OTP */}
  <input
    name="otp"
    placeholder="Enter OTP"
    value={form.otp}
    onChange={handleChange}
    required
    className="
      w-full
      h-11 sm:h-12

      px-4
      rounded-xl

      bg-black/30
      border border-white/10

      text-center
      tracking-widest
      text-sm sm:text-base

      outline-none
      focus:border-cyan-400/50
      focus:ring-2 focus:ring-cyan-500/20

      transition
    "
  />

  {/* PASSWORD */}
  <div className="relative">
    <input
      name="newPassword"
      type={showPassword ? "text" : "password"}
      placeholder="New Password"
      value={form.newPassword}
      onChange={handleChange}
      required
      className="
        w-full
        h-11 sm:h-12

        px-4
        pr-10 sm:pr-12
        rounded-xl

        bg-black/30
        border border-white/10

        text-left
        text-sm sm:text-base

        outline-none
        focus:border-cyan-400/50
        focus:ring-2 focus:ring-cyan-500/20

        transition
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

  {/* BUTTON */}
  <button
    type="submit"
    className="
      w-full
      h-11 sm:h-12

      rounded-xl

      bg-cyan-500 hover:bg-cyan-400
      text-black font-semibold sm:font-bold

      shadow-lg shadow-cyan-500/25
      hover:scale-[1.02]

      transition
      duration-300
    "
  >
    Reset Password
  </button>

</form>

    </div>
  </div>
);
}

export default ResetPassword;