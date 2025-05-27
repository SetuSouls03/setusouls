// TermsCondition.jsx
import React from 'react';
import './TermsCondition.css';

const TermsCondition = () => {
  return (
    <div className="policy-wrapper">
      <div className="policy-container">
        <h1 className="policy-title">Terms and Conditions</h1>
        <p>Effective Date: [Insert Date]</p>

        <h2>1. Use of the Site</h2>
        <p>You agree to use the site lawfully and not misuse its services.</p>

        <h2>2. Intellectual Property</h2>
        <p>Content belongs to Setu Souls. Reuse without permission is prohibited.</p>

        <h2>3. User Accounts</h2>
        <p>You're responsible for account security and must notify us of issues.</p>

        <h2>4. Limitation of Liability</h2>
        <p>We are not liable for indirect damages or interruptions.</p>

        <h2>5. Third-Party Content</h2>
        <p>We are not responsible for external content linked on our site.</p>

        <h2>6. Termination</h2>
        <p>We may suspend or terminate accounts violating our policies.</p>

        <h2>7. Changes</h2>
        <p>These terms may change. Continued use indicates acceptance.</p>

        <h2>8. Governing Law</h2>
        <p>These terms are governed by the laws of [Insert Jurisdiction].</p>

        <h2 style={{marginBottom:'1.5rem'}}>9. Contact Us</h2>
        <p><a href='https://mail.google.com/mail/?view=cm&fs=1&to=setusouls@gmail.com' style={{color:'black'}}>Email: setusoulsl@gmail.com</a></p>
      </div>
    </div>
  );
};

export default TermsCondition;
