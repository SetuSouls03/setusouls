import React, { useState } from "react";
import "./AuthForm.css";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function CreatePassword() {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // Try to get email from localStorage, fallback to location.state
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

    console.log("Sending reset password request:", payload);

    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/auth/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Password reset successful!");
        localStorage.removeItem("resetEmail"); // Clean up stored email
        navigate("/login");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      toast.error("Server error. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create New Password</h2>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          required
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          required
          onChange={handleChange}
          value={form.confirmPassword}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default CreatePassword;
