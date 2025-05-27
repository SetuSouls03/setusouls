import React, { useState, useContext } from 'react';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext'; // adjust path if needed

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Login successful!");
        localStorage.setItem("token", data.token);
        login(data.token);  // Update context state
        navigate("/");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Login</button>
        <p>Don't have an account? <span onClick={() => navigate("/signup")} style={{cursor:'pointer', color:'blue'}}>Register</span></p>
        <p>Don't remember your password? <span onClick={() => navigate("/forgotpassword")} style={{cursor:'pointer', color:'blue'}}>Forgot Password</span></p>
      </form>
    </div>
  );
}

export default Login;