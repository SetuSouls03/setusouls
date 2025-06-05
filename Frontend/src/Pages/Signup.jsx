import React, { useState } from "react";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.warn("Passwords do not match");
      return;
    }

    setLoading(true); // Start spinner

    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          contactNumber: form.contactNumber,
        }),
        credentials: "include",
      });

      let data;
      try {
        data = await res.json();
      } catch (error) {
        const raw = await res.text();
        console.error("Non-JSON response from register API:", raw);
        toast.error("Server error: Invalid response from registration.");
        setLoading(false); // Stop spinner
        return;
      }

      if (res.ok) {
        toast.success("Please verify OTP.");
        localStorage.setItem("resetEmail", form.email);
        localStorage.setItem("otpPurpose", "signup");
        navigate("/otppage");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          required
          onChange={handleChange}
        />

        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        <div className="input-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="toggle-password"
          >
            {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? (
            <div className="spinner"></div> // Show spinner while loading
          ) : (
            "Register"
          )}
        </button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}

<<<<<<< HEAD
export default Signup;
=======
export default Signup;
>>>>>>> ec1b3ef (Final Changes)
