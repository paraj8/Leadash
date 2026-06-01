import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10">

        <h1 className="text-2xl font-bold text-center mb-6">
          Forgot Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl"
          >
            Send OTP
          </button>
        </form>

      </div>
    </div>
  );
}

export default ForgotPassword;