import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-intro">We'd love to hear from you. Reach out for questions, insights, or spiritual discussions.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <h2 className="contact-subheading">Email Us</h2>
            <p className="contact-text">
              For direct inquiries and personal communication
            </p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=setusouls@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-button">
  Send Message via Gmail
</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.584 10H12.5V7.5a1 1 0 00-2 0V10H8.5a1 1 0 000 2h2v2.5a1 1 0 002 0V12h2.5a1 1 0 000-2z" />
                <path fillRule="evenodd" d="M5 5a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-3a1 1 0 10-2 0v3a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 000-2H5z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="contact-subheading">Social Media</h2>
            <p className="contact-text">
              Connect with us on various platforms for updates and wisdom
            </p>
            <div className="social-links">
              <a href="https://www.amazon.in/dp/B0BRHGNKXY?ref_=cm_sw_r_apann_ts_DFC36QZJ0NN7Z1W1SEAF" target="_blank" rel="noopener noreferrer" className="social-button amazon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.738 18.701c-.831-1.635-1.805-3.102-3.708-3.102-1.677 0-2.895 1.342-2.895 2.841 0 1.501 1.181 2.56 3.001 2.56 1.492 0 2.651-.776 3.602-2.299m5.222-1.053c0-4.107-2.148-6.441-6.257-6.441-1.885 0-3.636.716-4.95 1.971l1.203 1.602c.96-.936 2.139-1.538 3.684-1.538 2.463 0 3.72 1.357 3.72 3.565 0 2.727-1.659 3.721-3.72 3.721-.906 0-1.736-.27-2.379-.771l-.151-.12-1.203 1.602.113.09c1.473 1.172 3.113 1.682 5.204 1.682 3.957 0 6.6-2.043 6.6-6.362M12 .001C5.373 0 0 5.374 0 12.001c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.374 18.627 0 12 0"/>
                </svg>
                Amazon
              </a>
              <a href="https://www.youtube.com/@THEMYSTERYOFIMMORTALTALKS" target="_blank" rel="noopener noreferrer" className="social-button youtube">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a href="https://www.instagram.com/hanudass/" target="_blank" rel="noopener noreferrer" className="social-button instagram">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=100002227446422" target="_blank" rel="noopener noreferrer" className="social-button facebook">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
                Facebook
              </a>
              <a href="https://theimmortaltalks.quora.com/?ch=10&oid=2188707&share=396067ef&srid=iGMyh&target_type=tribe" target="_blank" rel="noopener noreferrer" className="social-button quora">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.738 18.701c-.831-1.635-1.805-3.102-3.708-3.102-1.677 0-2.895 1.342-2.895 2.841 0 1.501 1.181 2.56 3.001 2.56 1.492 0 2.651-.776 3.602-2.299m5.222-1.053c0-4.107-2.148-6.441-6.257-6.441-1.885 0-3.636.716-4.95 1.971l1.203 1.602c.96-.936 2.139-1.538 3.684-1.538 2.463 0 3.72 1.357 3.72 3.565 0 2.727-1.659 3.721-3.72 3.721-.906 0-1.736-.27-2.379-.771l-.151-.12-1.203 1.602.113.09c1.473 1.172 3.113 1.682 5.204 1.682 3.957 0 6.6-2.043 6.6-6.362M12 .001C5.373 0 0 5.374 0 12.001c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.374 18.627 0 12 0"/>
                </svg>
                Quora
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;