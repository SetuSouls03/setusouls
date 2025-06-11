import React, { useState } from 'react';
import './Prayer.css';

const Prayer = () => {
  const [language, setLanguage] = useState('hi');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'hi' ? 'en' : 'hi'));
  };

  // Function to split text into sentences
const breakIntoSentences = (text, lang) => {
  if (!text) return [];

  if (lang === 'hi') {
    // Hindi: use triple space separator
    const separator = '   ';
    return text
      .split(separator)
      .filter(Boolean)
      .map(sentence => sentence.trim() + ' ');
  } else {
    // English: split by commas
    const separator = '   ';
    return text
      .split(separator)
      .filter(Boolean)
      .map((sentence, idx, arr) => {
        // Add comma back except for last sentence
        return sentence.trim() + (idx < arr.length - 1 ? '   ' : '');
      });
  }
};




  const sections = [
    {
      heading: {
        hi: `श्री हनुमान जी को गुरु बनाने से पहले बोलने वाली प्रार्थना.|| राम ||`,
        en: "Prayer to be said before making Shri Hanuman Ji your Guru.   || Ram ||",
      },
      subheading: {
        hi: `ॐ श्री गणेशाय नमः   

हे परमपिता परमेश्वर,
हे सृष्टि के सिरजनहार,
हे पालनहार,
हे विनाशक,
हे ब्रह्मा विष्णु महेश,
हे संसार का कल्याण करने वाली सारे जगत को तारने वाली आदि पराशक्ति महामाया जगदंबा महाकाली मां,
हे चौसठ योगिनी महामाया महारानी मां,
हे अष्टभुजा धारणी सच्चिदानंद स्वरूपणी मां दुर्गा,
हे मर्यादा पुरुषोत्तम प्रभु श्री राम, हे माता जानकी,
हे भईया लक्ष्मण, हे भईया शत्रुघ्न, हे भईया भरत,
यह आत्मा आप समस्त देवताओं को साक्षी मानकर, कलयुग के जागृत देवता अंजनी पुत्र चिरंजीवी श्री हनुमान जी को अपना गुरु धारण करती है,
हे अंजनेयार इस आत्मा को शिष्य के रूप में स्वीकार करें   
|| जय श्री राम ||   
   
   
   
   
   
   यह प्रार्थना आपको पीर आसन में विराजमान होकर करनी है अर्थात जैसे गुरुदेव श्री हनुमान जी राम जी के चरणों में विराजमान होते हैं.  
स्मरण रहे इस प्रक्रिया को दोहराते समय आपका मन और तन पूर्ण रूप से शांत होना चाहिए और प्रभु के चरणों में जो भी आप प्रेम से समर्पित करना चाहे प्रार्थना के दौरान कर सकते हैं जिसमें फल, पुष्प हो सकते है.

स्मरण रहे इस प्रार्थना को केवल एक बार बोलना है जब आप श्री हनुमान जी को गुरु धारण करेंगे   || जय श्री राम ||`,
        en: `Om Shri Ganeshaya Namah,
O Supreme Father,
O Creator of the Universe,
O Sustainer,
O Destroyer,
O Brahma, Vishnu, Mahesh,
O Supreme Divine Energy, the one who redeems the world – Jagadamba Mahakali Maa,
O 64 Yogini Mahamaya Maharani Maa,
O Asta Bhuja Dharini Sachitanand Swarupinin Maa Durga,
O Maryada Purushottam Shri Ram, O Mata Janaki,
O Brother Lakshman, Shatrughan, Bharat – this soul, in the presence of all deities, accepts Shri Hanuman Ji as its Guru,
O Anjaneyar, please accept this soul as your disciple.   || Jai Shri Ram ||   

This prayer must be recited in the “PEER ASANA” posture as Shri Hanuman Ji sits at the feet of Shri Ram.   
Remember to keep your mind and body peaceful during this process and offer whatever you wish with love – fruits, flowers, etc. This prayer is to be recited only once, when you accept Shri Hanuman Ji as your Guru.   || Jay Shri Ram ||`,
      },
    },
    {
      subheading: {
        hi: `सेतु के द्वारा प्रदान किए गए पवित्र अध्यायों का अध्यन करने के बाद यदि आपको हल्का पन महसूस होता है तब आपको प्रभु के चरणों में फलों का अर्पण करना चाहिए 108 घंटे के भीतर, जो नजदीकी मंदिर में या आपके घर में हो सकता है यदि आपके घर में श्री हनुमान जी की प्रतिमा अथवा चित्र है बाद में आप उन फलों को बंदरों को खिला सकते हैं अथवा किसी ऐसे मनुष्य को दे जो दरिद्र या भिक्षुक हो.   || जय श्री राम ||   

अर्पण करते समय आपको इस प्रार्थना को हमेशा बोलना है.

हे चिरंजीवी गुरु पिता श्री हनुमान जी, हे अंजनेयार, यह आत्मा आपके चरणों में समर्पित है. प्रभु इन फलों के माध्यम से यह आत्मा अपने “जन्मों” जन्मांतरों के कर्म और इच्छाओं को आपके चरणों में समर्पित करती है साथ ही अपनी सभी प्रकार की आसक्तियां और अपने सभी विकार, काम, क्रोध लोभ,मोह,अहंकार, यहां तक की अपनी “मैं” की सुध कि मैं एक आत्मा हूं अर्थात आपका (अहम) (ego) सब कुछ आपके चरणों में समर्पित करते हैं प्रभु आप जैसा चाहे वैसा करें यह आत्मा आपको समर्पित है.   || जय श्री राम ||   

स्मरण रहे बंदरों को अर्पण के फल खिलाए बिना आपका अर्पण पूरा नहीं होगा उसके बाद आप घर आकर या मंदिर जाकर गुरुदेव श्री हनुमान जी को लाल सिंदूर अथवा लाल चूरा अर्पित कर सकते हैं जो कई प्रकार के लाल पुष्पों की पत्तियों से बनता है    || जय श्री राम ||`,
        en: `After studying the sacred chapters provided by Setu, if you feel lighter, you must offer fruits at the feet of the Lord within 108 hours. This can be done at the nearest temple or at your home if you have an idol or picture of Shri Hanuman Ji. Later, feed the fruits to monkeys or give them to a poor or needy person.   || Jai Shri Ram ||   

While offering, always recite this prayer.

O Eternal Guru Father Shri Hanuman Ji, O Anjaneyar, this soul surrenders at your feet. Through this offering, the soul offers its karmas, desires, and attachments from this and past lives to your feet, along with all vices – lust, anger, greed, attachment, ego – even the awareness of “I” is offered at your feet. Do as you wish, Lord. This soul is surrendered to you.   || Jai Shri Ram ||   

Remember, your offering is incomplete until you feed the fruits to monkeys. Afterward, you may offer red sindoor or red powder made from various red flowers to Shri Hanuman Ji either at home or at the temple.   || Jai Shri Ram ||`,
      },
    },
  ];

  return (
    <div className="prayerpage">
    {sections.map((section, index) => (
      <div className="prayersection" key={index}>
        {section.heading && (
  <h2 className="prayer-section-heading">
    {breakIntoSentences(section.heading[language], language).map((sentence, i) => (
      <p key={i} style={{ margin: 0 }}>{sentence}</p>
    ))}
  </h2>
)}

        <div className="prayer-section-subheading">
          {breakIntoSentences(section.subheading[language], language).map((sentence, i) => (
            <p key={i}>{sentence}</p>
          ))}
        </div>
      </div>
    ))}
    <div className="translate-button-container">
      <button className="translate-button" onClick={toggleLanguage}>
        {language === 'hi' ? 'Translate to English' : 'हिंदी में अनुवाद करें'}
      </button>
    </div>
  </div>
  );
};

export default Prayer;
