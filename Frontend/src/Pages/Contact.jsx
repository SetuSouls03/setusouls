import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

/* ---------- ICON RESOLVER ---------- */
const getIcon = (icon, backendImageUrl) => {
  switch (icon) {
    case "youtube":
      return <FaYoutube className="w-5 h-5" />;
    case "instagram":
      return <FaInstagram className="w-5 h-5" />;
    case "facebook":
      return <FaFacebook className="w-5 h-5" />;
    case "linkedin":
      return <FaLinkedin className="w-5 h-5" />;
    case "whatsapp":
      return <FaWhatsapp className="w-5 h-5" />;
    case "image":
      return (
        <img
          src={backendImageUrl}
          alt="SeerBooks"
          className="h-[16px] w-[26px]"
        />
      );
    default:
      return null;
  }
};

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/contact")
      .then((res) => setContactData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!contactData) return null;

  return (
    <div className="min-h-screen flex items-center bg-slate-100 px-4">
      <div className="w-full max-w-[1200px] mx-auto bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-12 md:p-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 bg-[#1100d7] bg-clip-text text-transparent mt-4">
            {contactData.title}
          </h1>
          <p className="text-lg text-black max-w-[600px] mx-auto font-bold">
            {contactData.intro}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* EMAIL CARD */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex flex-col">
            <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-6 bg-blue-100 text-blue-600">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
              </svg>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              Email Us
            </h2>

            <p className="text-black mb-8 font-semibold">
              {contactData.email.description}
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0 inline-flex justify-center items-center w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition no-underline font-semibold"
            >
              Send Message via Gmail
            </a>
          </div>

          {/* SOCIAL CARD */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
            <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-6 bg-cyan-100 text-cyan-500">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.584 10H12.5V7.5a1 1 0 00-2 0V10H8.5a1 1 0 000 2h2v2.5a1 1 0 002 0V12h2.5a1 1 0 000-2z"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5 5a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-3a1 1 0 10-2 0v3a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 000-2H5z"></path>
              </svg>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              Social Media
            </h2>

            <p className="text-black mb-8 font-semibold">
              {contactData.socialDescription}
            </p>

            <div className="grid gap-3">
              {contactData.social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center gap-2 px-4 py-3 rounded-lg font-bold text-white text-sm
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg no-underline
                    ${item.type === "youtube" && "bg-[#FF0000]"}
                    ${item.type === "instagram" && "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"}
                    ${item.type === "facebook" && "bg-[#1877F2]"}
                    ${item.type === "linkedin" && "bg-[#0a66c2]"}
                    ${item.type === "whatsapp" && "bg-[#25D366]"}
                    ${item.type === "amazon-button" && "bg-gradient-to-r from-[#FF9900] to-[#FF6600]"}
                  `}
                >
                  {getIcon(item.icon, item.imageUrl)}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
