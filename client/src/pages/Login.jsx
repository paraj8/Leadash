import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

try {
  const res = await API.post("/auth/login", formData);

  // SAVE TOKEN
  localStorage.setItem("token", res.data.token);

  // SAVE USER
  localStorage.setItem("user", JSON.stringify(res.data.user));

  // DIRECT ACCESS
  const user = res.data.user;

  toast.success(
    `Login successful! Welcome back ${user.name} (${user.role})`
  );

  navigate("/dashboard");

} catch (error) {
  toast.error(error.response?.data?.message || "Login failed");
}
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;