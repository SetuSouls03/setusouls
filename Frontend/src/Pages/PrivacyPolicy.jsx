import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/privacy-policy")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <div className="policy-wrapper">
      <div className="policy-container">
        <h1 className="policy-title">{data.title}</h1>
        <p className="policy-meta">Published Date: {data.publishedDate}</p>
        <p className="policy-meta">Latest Update Date: {data.updatedDate}</p>

        {data.sections.map((section, index) => (
          <div key={index}>
            <h2 className="policy-subtitle">{section.heading}</h2>

            {section.heading.includes("Contact") ? (
              <p className="policy-text">
                {section.content}
                <br /><br />
                Email us directly at:{" "}
                <a
  className="policy-link"
  href={`https://mail.google.com/mail/?view=cm&to=${data.contactEmail}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {data.contactEmail}
</a>

              </p>
            ) : (
              <p className="policy-text">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
