// PrivacyPolicy.jsx
import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-wrapper">
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-meta">Published Date: 10/05/2025</p>
        <p className="policy-meta">Latest Update Date: 10/05/2025</p>

        <h2 className="policy-subtitle">1. Information We Collect</h2>
        <p className="policy-text">We collect personal information Name, Email, Phone Number.</p>

        <h2 className="policy-subtitle">2. How We Use Your Information</h2>
        <p className="policy-text">To provide and improve services, send updates, and comply with legal obligations.</p>

        <h2 className="policy-subtitle">3. Sharing Your Information</h2>
        <p className="policy-text">We do not sell your data. We may share with trusted partners or legal authorities.</p>

        <h2 className="policy-subtitle">4. Data Security</h2>
        <p className="policy-text">We use strong security measures but cannot guarantee absolute safety.</p>

        <h2 className="policy-subtitle">5. Your Rights</h2>
        <p className="policy-text">You may request access, correction, deletion, or raise concerns with authorities.</p>

        <h2 className="policy-subtitle">6. Third-Party Links</h2>
        <p className="policy-text">We are not responsible for the privacy practices of other websites.</p>

        <h2 className="policy-subtitle">7. Updates</h2>
        <p className="policy-text">We may update this policy. Please check back periodically.</p>

        <h2 className="policy-subtitle contact-subtitle">8. Contact Us</h2>
        <p className="policy-text">
          We are always around to help devotees and knowledge seekers.<br /><br />
          Email us directly at: <a className="policy-link" href="mailto:setusouls@gmail.com">setusouls@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
