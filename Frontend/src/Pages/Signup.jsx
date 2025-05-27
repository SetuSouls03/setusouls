import React, { useState } from 'react';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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

    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
        credentials: "include"
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error(data.message || "Registration failed");
      }

    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
        <button type="submit">Register</button>
        <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
      </form>
    </div>
  );
}

export default Signup;