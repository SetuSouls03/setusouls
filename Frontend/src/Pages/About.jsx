import React, { useState } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [language, setLanguage] = useState('hi'); // 'hi' for Hindi, 'en' for English
  const navigate = useNavigate();
  // Hindi content (original)
  const contentHi = (
    <>
      <strong>जय रघुनंदन🙏🏻</strong><strong>जय श्री राम🙏🏻</strong>
      <h2 className="about-subheading">
        आप सभी आत्माओं का हार्दिक अभिनंदन है इस पवित्र मंदिर में.|| राम ||
        <br /><br />
        इस पवित्र मंदिर में प्रवेश करके आप सभी आत्माओं को आठों योग सिद्धियों को प्राप्त करने वाले चिरंजीवी गुरु श्री हनुमान जी की दिव्य लीलाओं व् उनके ब्रह्मज्ञान और अनुभवों के बारे मे बताया जाएगा जो उन्होंने कुछ विशेष आदिवासी शिष्यों के साथ बैठकर सांझा की है साथ ही उन्होंने वचन दिया था कि वे हर 41 वर्ष पश्चात अपने शिष्यों की नई पीढ़ियों से मिलने आएँगे जिन्हें वह मातंग कहते है.|| राम ||
        <br /><br />
        उन दिव्य लीलाओं व् उनके ब्रह्मज्ञान और अनुभवो को एक पवित्र ग्रंथ के रूप में आप सभी आत्माओं के बीच मे उतारा गया है जिसका नाम || कलिहनुवाणी और सेतु अध्याय है ||
        <br /><br />
        यदि कोई आत्मा श्री हनुमान जी की असीम भक्ति व उनके दर्शन प्राप्त करना चाहती है साथ ही इस ब्रह्मांड के अनेकों रहस्यों को उजागर करना चाहती है तो वह इस पवित्र ग्रंथ ओर अध्यायों का अध्यन अवश्य करे क्योंकि आज भी चिरंजीवी गुरु श्री हनुमान जी अजर अमर है और अपने भक्तो को इस कलयुग के अंत से पहले मोक्ष का मार्ग दिखाना चाहते है.
        <br />|| जय श्री राम ||
      </h2>
    </>
  );

  // English translation
  const contentEn = (
    <>
      <strong>Jai Raghunandan🙏🏻</strong><strong>Jai Shri Ram🙏🏻</strong>
      <h2 className="about-subheading">
        This soul warmly welcomes all souls to this sacred temple.|| Ram ||
        <br /><br />
        By entering this sacred temple, all souls will be told about the divine plays, supreme knowledge, and experiences of the immortal Guru Shri Hanuman Ji, who has attained all eight yoga perfections. He shared these with special tribal disciples and promised to meet new generations of disciples called Matang every 41 years. || Ram ||
        <br /><br />
        These divine plays and knowledge have been compiled as a sacred scripture called "Kalihanwani and Setu Chapter" among all souls.
        <br /><br />
        Anyone who wishes to have infinite devotion to Shri Hanuman Ji and wants to experience his vision and unveil many mysteries of the universe should study this sacred scripture and its chapters. Even today, the immortal Guru Shri Hanuman Ji is eternal and wants to show his devotees the path to salvation before the end of this Kalyug.
        <br />|| Jai Shri Ram ||
      </h2>
    </>
  );

  const linkTextHi = 'हनुमान जी द्वारा मातंगों को दिया गया प्राचीन शाबर मंत्र';
  const linkTextEn = 'Ancient Shabar Mantra given by Hanuman Ji to Matangs';

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'hi' ? 'en' : 'hi'));
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading" style={{textAlign:'center'}}>About Page</h1>
        {language === 'hi' ? contentHi : contentEn}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vb3cyVaDE1Y?start=65"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          <button
  className="attractive-button"
  onClick={() => navigate("/mantra-page")}
  type="button"
>
  <span>{language === 'hi' ? linkTextHi : linkTextEn}</span>
</button>
      </div>





      {/* Translate Button */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button className="translate-button" onClick={toggleLanguage}>
          {language === 'hi' ? 'Translate to English' : 'Translate to Hindi'}
        </button>
      </div>
    </div>
  );
};

export default About;
