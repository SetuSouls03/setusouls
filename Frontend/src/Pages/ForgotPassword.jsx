import React, { useState } from "react";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/forgotpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      let data;
      try {
        data = await res.json();
      } catch (error) {
        const raw = await res.text();
        console.error("Non-JSON response:", raw);
        toast.error("Server error: Invalid response");
        setLoading(false);
        return;
      }

      if (res.ok) {
        toast.success("OTP sent to your email!");
        localStorage.setItem("resetEmail", email);
        navigate("/otppage");
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your registered email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : "Send OTP"}
        </button>

        <p>
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
