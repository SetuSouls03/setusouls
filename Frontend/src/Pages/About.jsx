import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Page</h1>
        <h2 className="about-subheading">
          <strong>जय रघुनंदन🙏🏻</strong><br /><strong>जय श्री राम🙏🏻</strong><br />

यह आत्मा आप सभी आत्माओं का हार्दिक अभिनंदन करती है इस पवित्र मंदिर में.|| राम ||

इस पवित्र मंदिर में प्रवेश करके आप सभी आत्माओं को आठों योग सिद्धियों को प्राप्त करने वाले चिरंजीवी गुरु श्री हनुमान जी की दिव्य लीलाओं व् उनके ब्रह्मज्ञान और अनुभवों के बारे मे बताया जाएगा जो उन्होंने कुछ विशेष आदिवासी शिष्यों के साथ बैठकर सांझा की है साथ ही उन्होंने वचन दिया था कि वे हर 41 वर्ष पश्चात अपने शिष्यों की नई पीढ़ियों से मिलने आएँगे जिन्हें वह मातंग कहते है.|| राम ||

उन दिव्य लीलाओं व् उनके ब्रह्मज्ञान और अनुभवो को एक पवित्र ग्रंथ के रूप में आप सभी आत्माओं के बीच मे उतारा गया है जिसका नाम || कलिहनुवाणी और सेतु अध्याय है ||

यदि कोई आत्मा श्री हनुमान जी की असीम भक्ति व उनके दर्शन प्राप्त करना चाहती है साथ ही इस ब्रह्मांड के अनेकों रहस्यों को उजागर करना चाहती है तो वह इस पवित्र ग्रंथ ओर अध्यायों का अध्यन अवश्य करे क्योंकि आज भी चिरंजीवी गुरु श्री हनुमान जी अजर अमर है और अपने भक्तो को इस कलयुग के अंत से पहले मोक्ष का मार्ग दिखाना चाहते है.<br />|| जय श्री राम ||
        </h2>
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
      </div>
    </div>
  );
};

export default About;