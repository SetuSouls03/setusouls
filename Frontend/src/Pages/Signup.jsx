import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AddressInput from "../components/AddressInput";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",       // Just the 10-digit part
    countryCode: "",         // e.g., +91
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, country) => {
    const countryCode = "+" + country.dialCode;
    const contactNumber = value.replace(country.dialCode, "").replace(/^\+/, "");
    setForm({ ...form, countryCode, contactNumber });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.warn("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          contactNumber: form.contactNumber,
          countryCode: form.countryCode,
          address: form.address,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Please verify OTP.");
        localStorage.setItem("resetEmail", form.email);
        localStorage.setItem("otpPurpose", "signup");
        navigate("/otppage");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
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

        {/* Phone input with country code */}
        <PhoneInput
  country={"in"}
  value={`${form.countryCode}${form.contactNumber}`}
  onChange={handlePhoneChange}
  onFocus={() => setPhoneFocus(true)}
  onBlur={() => setPhoneFocus(false)}
  inputProps={{
    required: true,
    name: "contactNumber",
  }}
  containerClass={`react-tel-input ${phoneFocus ? "focused" : ""}`}
  inputStyle={{ width: "100%" }}
  placeholder="Enter your valid contact number"
/>


<AddressInput
  onSelect={(val) => {
    console.log("Selected Address:", val.label);
    console.log("Latitude:", val.latitude);
    console.log("Longitude:", val.longitude);

    setForm({ ...form, address: val.label });
  }}
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
          {loading ? <div className="spinner"></div> : "Register"}
        </button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
