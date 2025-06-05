<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import './AuthForm.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function OtpPage() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const email = localStorage.getItem('resetEmail');
  const purpose = localStorage.getItem('otpPurpose'); // 'signup' or 'reset'
  const [loading, setLoading] = useState(false);
=======
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AuthForm.css';

function OtpPage() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get email and purpose from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem('resetEmail');
    const storedPurpose = localStorage.getItem('otpPurpose');
    if (storedEmail) setEmail(storedEmail);
    if (storedPurpose) setPurpose(storedPurpose);
  }, []);
>>>>>>> ec1b3ef (Final Changes)

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to next box
    if (element.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
<<<<<<< HEAD
  e.preventDefault();

  const enteredOtp = otp.join('');
  if (enteredOtp.length !== 6) {
    toast.error('Please enter a 6-digit OTP');
    return;
  }

  setLoading(true);  // Start spinner

  try {
    const res = await fetch('https://setusouls-1.onrender.com/api/auth/verifyotp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp: enteredOtp }),
    });

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
      toast.success(data.message || 'OTP Verified');
      localStorage.removeItem('resetEmail');
      localStorage.removeItem('otpPurpose');

      if (purpose === 'signup') {
        navigate('/login');
      } else {
        navigate('/createpassword', { state: { email } });
      }
    } else {
      toast.error(data.message || 'Invalid OTP');
    }
  } catch (error) {
    console.error(error);
    toast.error('Server error. Try again later.');
  } finally {
    setLoading(false);  // Stop spinner
  }
};

=======
    e.preventDefault();

    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      toast.error('Please enter a 6-digit OTP');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://setusouls-1.onrender.com/api/auth/verifyotp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

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
        toast.success(data.message || 'OTP Verified');
        localStorage.removeItem('resetEmail');
        localStorage.removeItem('otpPurpose');

        if (purpose === 'signup') {
          navigate('/login');
        } else {
          navigate('/createpassword', { state: { email } });
        }
      } else {
        toast.error(data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error(error);
      toast.error('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };
>>>>>>> ec1b3ef (Final Changes)

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Enter OTP</h2>
<<<<<<< HEAD
        <p className="email-info">Sent to: {email}</p>
=======
        {email && <p className="email-info">Sent to: {email}</p>}
>>>>>>> ec1b3ef (Final Changes)
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-input"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>
        <button type="submit" disabled={loading}>
<<<<<<< HEAD
  {loading ? <div className="spinner"></div> : "Verify OTP"}
</button>

=======
          {loading ? <div className="spinner"></div> : "Verify OTP"}
        </button>
>>>>>>> ec1b3ef (Final Changes)
      </form>
    </div>
  );
}

export default OtpPage;
