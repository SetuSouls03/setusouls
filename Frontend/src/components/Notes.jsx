import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import './Notes.css';
const Notes = () => {
  const { slug } = useParams();
  const location = useLocation();
  const initialLanguage = location.state?.language === "hindi" ? "hi" : "en";

  const [language, setLanguage] = useState(initialLanguage);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down"); // "down" or "up"

  /*const underlinedLines = {
    hi: [
      "देवताओं ने शीतल का भविष्य कैसे बदला :",
      "कर्म प्रतिसंतुलन कया है :"
    ],
    en: [
      "How the Gods Changed Sheetal’s Future:",
      "What is karmic balancing:"
    ]
  };*/

  /*const sectionSummary = {
    hi: {
      title1: "आत्मा पर भ्रम की परतें",
      points1: `दिव्य आत्मा, अध्याय पढने के बाद यह पर्यवेक्षण करना आवश्यक है कि आप कैसा महसूस कर रहे हैं । अगर आप कुछ ऐसा महसूस कर रहे हैं - "वाह! मैंने कुछ नया पाया ।" अथवा "वाह, मैंने कुछ नया सीखा ।" अथवा "मेरी अपने प्रभु ले प्रति भक्ति ओर भी बढ़ गई ।" इत्यादि तो आप अपने प्रभु की ओर एक कदम भी नहीं ढढ़ें हैं । आप उतनी ही दूरी पर अटके हुए हैं ।

\nअगर अध्याय पढने के बाद आप कुछ ऐसे महसूस कर रहे हैं जैसे आपके अन्दर से कुछ बाहर निकलकर गिर पड़ा हो और आप आत्मा से हल्का महसूस कर रहे हों तो आप अपने प्रभु की तरफ कम से कम एक कदम बढ़ चुके हैं ।"

\nआपकी आत्मा एक आईने की तरह है जिसके ऊपर इस बाहरी संसार के कारण धुल चढ़ गई है । अगर अध्याय पढने के बाद आप ऐसा महसूस कर रहे हैं कि आपने कुछ नया पा लिया हे तो उसका अर्थ है कि आपने अपनी आत्मा पर एक और परत चढ़ा ली है । आप प्रभु के साक्षात्‌ दर्शन तभी कर सकते हैं जब आप ये परतें हटायें । अतः अगर आप इस समय आत्मा से हल्का महसूस नहीं कर रहे हैं तो आप कुछ समय बाद फिर आकर यह अध्याय पढ़िए ।

\nअगर आप आत्मा से हल्का महसूस कर रहे हैं तो इसका अर्थ है कि आपने अपनी आत्मा के आईने से कम से कम एक धुल की परत साफ़ कर ली है । अब आपका अगला कदम होना चाहिए कि यह धुल की परत वहां पुनः न बेठे । (जब आप अपने घर में कोई आइना कपडे से साफ़ करते हैं तो आप उस कपडे को अन्दर यूँ ही नहीं रख देते , आप उसे बाहर झड़काकर आते हैं )

\nधुल की परत फिर से आत्मा पर न बेठे, इसके लिए प्रभु को अर्पण किया जाता है । अर्पण फूलो , फलो या किसी भी ऐसी वस्तु का हो सकता है जो आपसे जुडी हुई हो । मातंग संस्कृति में आत्मा से हल्का महसूस करने के 108 घंटे के अन्दर अन्दर अर्पण करने का विधान है । आप बाजार से भी फल का अर्पण खरीद सकते हैं क्योंकि आपका पैसा भी आपसे जुडा हुआ है ।`,
      title2: "भगवान्‌ विष्णु का अंतिम अवतार",
      points2: `जब भगवान्‌ राम ने अपनी सांसारिक लीलाएँ पूरी की और विष्णु लोक में चले गए तब हनुमान जी भी अयोध्या से वापिस आ गए और जंगलों में रहने लगे । वे अपने अदृश्य रूप में भक्तों की सहायता करते रहे । लेकिन जब महाभारत काल में भगवान्‌ विष्णु कृष्ण के रूप में धरती पर आये तब हनुमान जी भी जंगलों से बाहर आये और पांड्वो की सहायता की (उन्होंने पूरे युद्ध में अर्जुन के रथ की रक्षा की )

\nमहाभारत युद्ध के पश्चात्‌ हनुमान जी फिर जंगल में चले गए । उन्होंने अदृश्य रूप में भक्तों की रक्षा करना जारी रखा । लेकिन दृश्य रूप में केवल ऋषि मुनि ही उन्हें देख सकते थे वो भी जंगलों में । उदाहरण के तौर पर , मातांगो को जंगल में हर 41 साल बाद उनके आतिथ्य का सुख प्राप्त होता था।

\nअब हनुमान जी ने अपनी लीलाए करके एक बार फिर से पूरे संसार के सामने अपने दृश्य स्वरुप का दर्शन कराया है । लेकिन वे ऐसा तभी करते हैं जब भगवान्‌ विष्णु किसी अवतार में धरती पर मौजूद हों । क्या भगवान्‌ विष्णु ने कल्कि के रूप में अवतार ले लिया हे ? या अवतार लेने वाले हैं ? इसके कुछ हिंट हनुमान जी ने अपनी लीलाओं में दिए हैं । शायद आगे आने वाले अध्यायों में यह पूर्णतः सपष्ट हो जाएगा ।

\nतब तक श्री हनुमान जी के निर्देशानुसार साक्षात्‌ हनुमान पूजा अनवरत जारी है । अगर आप अपना कोई प्रश्न , संदेह अथवा प्रार्थना साक्षात्‌ हनुमान पूजा में सम्मिलित करवाना चाहते हैं तो सेतु के माध्यम से कर सकते हैं । 

\nदिव्य आत्मा,आप साक्षात्‌ हनुमान पूजा में अर्पण भेजकर यजमान के रूप में भी हिस्सा ले सकते हैं । अर्पण हनुमान जी की लीलाओं का अध्याय पढने के 108 घंटे के अन्दर होता हैं ।`
    },
    en: {
      title1: "The layers of illusion on the soul",
      points1: `Himanshu, After reading a chapter the most important part is to observe how are you feeling. If the feeling is something like, "wow, I gained something from it" OR "wow, I learned something new" OR "my devotion has increased towards my God" etc etc, then you have NOT moved even an inch towards your God. You are stuck at the same distance.

      If, after reading this chapter you are feeling as though something has tumbled out of you and you have become lighter, then you have moved at least one step closer to your God after reading this notes. Your soul is like a mirror which has gathered dust from outside world. If after reading the chapter, you are feeling that you have "gained" something, that means that you have put another layer on the mirror of your soul. You can see God only when these layers are removed. Hence, if you are not feeling lighter right now, you should come back later and read this chapter again.
 
      If you are feeling lighter right now, that means this chapter has removed at least one layer from mirror of your soul. Now the next step is to make sure that the dust which has been removed from the mirror does not settle there again. (When you clean your mirror with a cloth, next thing you do is to go out of the house and dust that cloth o. You do not keep that dusty cloth as-it-is in your house). 
      
      To not let the dust settle on the soul again, Arpan (Offering) is made to God. Arpan can be of owers or fruits or anything else which is "attached" to you. In Mathang culture, Arpan is made within 108 hours of feeling "lighter".You can make Arpan of anything which is attached to you. If you have a ower in your garden which you have grown, you can make Arpan of that ower. You can also buy owers or fruits from market because the money you spend on that is also "attached" to you.`,
      
      title2: "Lord Vishnu's last avatar",
      points2: `When Lord Ram completed His Leelas in this world, He went back to VishnuLoka. Lord Hanuman also came back from Ayodhya and started living in jungles again. He helped devotees in His invisible form always. But then Lord Vishnu again came to earth in the form of Krishna in Mahabharata period. At that time, Lord Hanuman came out from the jungle and helped Pandavas in Mahabharata war (He mounted on Arjuna's chariot and saved it from attacks of Kauravas)

      After the Mahabharata war Lord Hanuman again went back to jungle. He helped devotees in His invisible form. Only Rishis had the privilege to meet Him in His visible form in jungles. For example Mathangs had the privilege to host Him every 41 years in the jungles.

      Now Lord Hanuman has again showed His visible form by revealing His Leelas. He shows His visible form to entire world only when Lord Vishnu is present on Earth as an avatar. The question is, Has Lord Vishnu's last avatar Kalki taken birth somewhere already? Or about to take birth? We do not know. There are hints and perhaps it will get clear when we decipher more chapters of Lord Hanuman's Leelas. 
      
      Divine Soul, You can also take part in Sakshat Hanuman Pooja as a host (Yajman) by sending Arpan of fruits. Arpan should be made within 108 hours of reading a chapter of Lord Hanuman's Leelas.
`
    }
  };


  const sectionLastLine = {
    hilastline: `इस अध्याय की हनुमान लीला यहीं समाप्त होती है. ।। राम ।।`,
    enlastline: `This chapter of Hanuman's Leela ends here. ।। RAM ।।`
  };*/

  useEffect(() => {
    axios
      .get(`https://setusouls-1.onrender.com/api/notes/${slug}`)
      .then((res) => {
        console.log("✅ Note loaded:", res.data);
        setNote(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching note:", err);
        setLoading(false);
      });
  }, [slug]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  // Scroll Button Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button after 300px scroll
      setShowScrollBtn(scrollY > 300);

      // Determine arrow direction
      if (scrollY + windowHeight >= documentHeight - 50) {
        setScrollDirection("up"); // Near bottom → show UP arrow
      } else {
        setScrollDirection("down"); // Else → show DOWN arrow
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPage = () => {
    if (scrollDirection === "down") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <div
        className="spinner-container-chap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh"
        }}
      >
        <div className="spinner-chap"></div>
      </div>
    );

  if (!note || !note.title || !note.content) {
    return <p className="chapter-error">Note not found or invalid data</p>;
  }

  return (
    <div className="chapter-detail-page">
      <div className="chapter-section">
        <div className="chapter-header">
          {note.date && (
            <div
              className="chapter-static-date"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Date of publish:{" "}
              {new Date(note.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </div>
          )}
          <h1 className="chapter-title">{note.title[language]}</h1>
        </div>

        {/* Additional Section */}
        {note.additionalSection && (
          <div className="chapter-additional-section">
            <h3>
              {language === "hi" ? "महत्त्वपूर्ण सन्देश:" : "Important Information:"}
            </h3>
            <p>{note.additionalSection[language]}</p>
          </div>
        )}

        {/* ✅ Note Image (from public/images/) */}
{note.image && (
  <div className="chapter-image-container">
    <img
      src={`/${note.image}`}
      alt={note.title[language]}
      className="chapter-image"
    />
  </div>
)}


        <div className="chapter-content" style={{ textAlign: "left" }}>
          {(note?.content?.[language]?.split("\n") || []).map((line, index) => (
            <p key={index} style={{ marginBottom: "1rem" }}>
              {line}
            </p>
          ))}
        </div>

        {/* PDF Links */}
        <div className="chapter-links">
          {language === "en" && note.linkEnglish && (
            <a
              href={note.linkEnglish}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-download-btn"
            >
              📘 English PDF
            </a>
          )}
          {language === "hi" && note.linkHindi && (
            <a
              href={note.linkHindi}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-download-btn"
            >
              📗 हिंदी PDF
            </a>
          )}
        </div>
      </div>

      <div className="chapter-toggle-btn-container">
        <button className="chapter-toggle-btn" onClick={toggleLanguage}>
          {language === "en" ? "हिंदी में अनुवाद करें" : "Translate to English"}
        </button>
      </div>

      {/* Scroll Button */}
      {showScrollBtn && (
        <button className="scroll-bottom-btn" onClick={scrollPage}>
          {scrollDirection === "down" ? "⬇" : "⬆"}
        </button>
      )}
    </div>
  );
};

export default Notes;
