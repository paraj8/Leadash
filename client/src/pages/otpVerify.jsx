import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api";
import { Mail } from "lucide-react";

function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/otp/verify", {
        email,
        otp: otpCode,
      });

      toast.success(
        res.data.message || "OTP verified successfully"
      );

      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "OTP verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await API.post("/otp/send", {
        email,
      });

      toast.success(
        res.data.message || "OTP resent successfully"
      );

      setTimer(60);
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to resend OTP"
      );
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4">

    <div
      className="
        w-full max-w-md
        p-6 sm:p-8
        rounded-2xl sm:rounded-3xl

        bg-white/[0.04]
        border border-white/10
        backdrop-blur-xl

        shadow-[0_0_60px_rgba(6,182,212,0.08)]
      "
    >

      {/* ICON */}
      <div
        className="
          w-14 h-14 sm:w-16 sm:h-16
          mx-auto mb-5 sm:mb-6
          rounded-2xl

          bg-cyan-500/10
          border border-cyan-500/20

          flex items-center justify-center
          shadow-[0_0_30px_rgba(6,182,212,0.15)]
        "
      >
        <Mail size={22} className="text-cyan-300" />
      </div>

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl font-black text-center mb-2">
        Verify OTP
      </h1>

      <p className="text-center text-slate-400 text-sm sm:text-base">
        We've sent a 6-digit verification code to
      </p>

      {/* EMAIL */}
      <div className="flex justify-center mt-3 mb-6 sm:mb-8">
        <div className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <span className="text-cyan-400 text-xs sm:text-sm font-medium break-all">
            {email}
          </span>
        </div>
      </div>

      {/* OTP INPUTS */}
      <form onSubmit={handleVerify}>
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">

          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="
                w-11 h-12 sm:w-14 sm:h-16

                text-center
                text-lg sm:text-2xl
                font-bold

                rounded-xl sm:rounded-2xl

                bg-black/30
                border border-white/10

                focus:border-cyan-400/60
                focus:ring-2 focus:ring-cyan-500/20
                focus:outline-none

                transition
              "
            />
          ))}

        </div>

        {/* VERIFY BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-3 sm:py-3.5
            rounded-xl sm:rounded-2xl

            bg-cyan-500 hover:bg-cyan-400
            disabled:opacity-70

            text-black
            font-semibold sm:font-bold

            transition
            hover:scale-[1.02]
            active:scale-[0.98]
          "
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      {/* RESEND */}
      <button
        type="button"
        onClick={handleResendOtp}
        disabled={timer > 0}
        className={`
          w-full mt-4 sm:mt-5 text-sm transition
          ${timer > 0
            ? "text-slate-500 cursor-not-allowed"
            : "text-cyan-400 hover:text-cyan-300"
          }
        `}
      >
        {timer > 0
          ? `Resend OTP in 00:${String(timer).padStart(2, "0")}`
          : "Resend OTP"}
      </button>

      {/* BACK */}
      <p className="text-center text-xs sm:text-sm text-slate-500 mt-6 sm:mt-8">
        Wrong email?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-cyan-400 cursor-pointer hover:text-cyan-300"
        >
          Go Back
        </span>
      </p>

    </div>
  </div>
);
}

export default OtpVerify;