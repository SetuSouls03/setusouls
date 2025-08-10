import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import AddressInput from "../components/AddressInput";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    countryCode: "",
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [fullPhoneValue, setFullPhoneValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validateEmail = (value) => {
    if (!value) return "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };
  const handleEmailChange = (e) => {
  const value = e.target.value;
  setForm((prev) => ({ ...prev, email: value }));

  if (value.trim() === "") {
    setIsValidEmail(null); // No validation for empty input
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setIsValidEmail(emailPattern.test(value));
};


  const handlePhoneChange = (value, country) => {
    setFullPhoneValue(value);

    const fullNumber = "+" + value;
    const phoneNumber = parsePhoneNumberFromString(fullNumber);

    const isValid = phoneNumber?.isValid() || false;
    setIsValidPhone(isValid);

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

    if (!isValidPhone) {
      toast.warn("Please enter a valid phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/auth/register", {
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

        <div style={{ position: "relative" }}>
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    onChange={handleEmailChange}
    value={form.email}
    style={{
      width: "100%",
      paddingRight: "40px",
      border:
        isValidEmail === false
          ? "2px solid red"
          : isValidEmail === true
          ? "2px solid green"
          : "",
    }}
  />
  {isValidEmail && (
    <FaCheckCircle
      style={{
        position: "absolute",
        right: "12px",
        top: "35%",
        transform: "translateY(-50%)",
        color: "green",
        fontSize: "18px",
      }}
    />
  )}
  {isValidEmail === false && form.email.length > 0 && (
    <p style={{ color: "red", fontSize: "13px", marginTop: "-20px" }}>
      ❌ Please enter a valid email address
    </p>
  )}
</div>




        <div className="phone-wrapper" style={{ position: "relative" }}>
          <PhoneInput
            country={"in"}
            value={fullPhoneValue}
            onChange={handlePhoneChange}
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
            inputProps={{
              required: true,
              name: "contactNumber",
            }}
            containerClass={`react-tel-input ${phoneFocus ? "focused" : ""}`}
            inputStyle={{
              width: "100%",
              paddingRight: "40px",
              border:
                isValidPhone === false
                  ? "2px solid red"
                  : isValidPhone === true
                  ? "2px solid green"
                  : "",
            }}
            placeholder="Enter your valid contact number"
          />
          {isValidPhone && (
            <FaCheckCircle
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "green",
                fontSize: "18px",
              }}
            />
          )}
          {isValidPhone === false && (
            <p style={{ color: "red", fontSize: "13px", marginTop: "-20px" }}>
              ❌ Invalid phone number
            </p>
          )}
        </div>

        <AddressInput
          value={form.address}
          onChange={(val) => setForm({ ...form, address: val })}
          onSelect={(val) => setForm({ ...form, address: val.label })}
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
