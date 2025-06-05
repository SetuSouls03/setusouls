// PrivacyPolicy.jsx
import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-wrapper">
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p>Published Date: 07/05/2025</p>
        <p>Lastest Update Date: 07/05/2025</p>

        <h2 style={{fontSize:'2rem'}}>1. Information We Collect</h2>
        <p>We collect personal information (name, email, etc.) and usage data (IP, browser type).</p>

        <h2 style={{fontSize:'2rem'}}>2. How We Use Your Information</h2>
        <p>To provide and improve services, send updates, and comply with legal obligations.</p>

        <h2 style={{fontSize:'2rem'}}>3. Sharing Your Information</h2>
        <p>We do not sell your data. We may share with trusted partners or legal authorities.</p>

        <h2 style={{fontSize:'2rem'}}>4. Data Security</h2>
        <p>We use strong security measures but cannot guarantee absolute safety.</p>

        <h2 style={{fontSize:'2rem'}}>5. Your Rights</h2>
        <p>You may request access, correction, deletion, or raise concerns with authorities.</p>

        <h2 style={{fontSize:'2rem'}}>6. Third-Party Links</h2>
        <p>We are not responsible for the privacy practices of other websites.</p>

        <h2 style={{fontSize:'2rem'}}>7. Updates</h2>
        <p>We may update this policy. Please check back periodically.</p>

        <h2 style={{marginBottom:'1.5rem', fontSize:'2rem'}}>8. Contact Us</h2>
        <p><a href='https://mail.google.com/mail/?view=cm&fs=1&to=setusouls@gmail.com' style={{color:'blue'}}>Email: setusouls@gmail.com</a></p>
      </div>
    </div>
  );
};
export default PrivacyPolicy;