import React, { useState } from "react";
import "./AuthForm.css";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function CreatePassword() {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();
  const location = useLocation();

  const email = localStorage.getItem("resetEmail") || location.state?.email;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || email === "undefined") {
      toast.error("Something went wrong. Email not found.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const payload = {
      email,
      newPassword: form.password,
    };

    setLoading(true); // Start loading
    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/auth/resetpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Password reset successful!");
        localStorage.removeItem("resetEmail");
        navigate("/login");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      toast.error("Server error. Try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create New Password</h2>

        {/* New Password Field */}
        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password"
            required
            onChange={handleChange}
            value={form.password}
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Confirm Password Field */}
        <div className="input-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm New Password"
            required
            onChange={handleChange}
            value={form.confirmPassword}
          />
          <span className="toggle-password" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

export default CreatePassword;
