import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";
import { Mail } from "lucide-react";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/otp/send", { email });

      toast.success("OTP sent to your email");

      navigate("/reset-password", {
        state: { email },
      });

    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending OTP");
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
        <div className="text-center mb-6">
          <div className="mx-auto w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center mb-3">
            <Mail size={18} className="text-cyan-300" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black">
            Forgot Password
          </h1>

          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Enter your email to receive a reset OTP
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          {/* BUTTON */}
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
            Send OTP
          </button>

        </form>

        {/* BACK LINK */}
        <p className="text-center text-xs sm:text-sm text-slate-400 mt-6">
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;