import React, { useState } from "react";
import "./AboutSetu.css";

const AboutSetu = () => {
  const [language, setLanguage] = useState("hi");

  const content = {
    hi: {
      heading: "सेतु के बारे में",
      subheading: `
        सेतु कोलंबो आधारित एक संगठन है जो मानव और परमात्मा के संबंध की गहनता पर काम करता है। भारतीय प्राचीन ग्रंथों के अनुसार, श्री हनुमान ने हजारों साल पहले अमरता प्राप्त की थी। उन्होंने राम की भक्ति करके अलौकिक शक्तियाँ प्राप्त कीं। राम के जीवन के अंत में, उन्हें अपने भक्तों की देखभाल करने और पृथ्वी पर रहने का कार्य दिया गया। उन्होंने श्रीलंका के सीता एलिया में रहना चुना, जहां उन्होंने राम के साथ एकत्व अनुभव किया जब उन्होंने माता सीता को बुरे राजा रावण द्वारा बंदी बनाया पाया।<br /><br />

        जब राजा पांडुकभाया ने सीता एलिया में एक विशाल मंदिर बनाने की इच्छा जताई, उन्होंने हनुमान का विशाल रूप देखा। इसलिए उन्होंने मंदिर बनाने का विचार छोड़ दिया क्योंकि उन्होंने सम्पूर्ण ब्रह्मांड को हनुमान का निवास देखा। बाद में कुछ ब्रिटिश लोग इस जगह की सुंदरता से प्रभावित हुए और यहां उद्योग और घर बनाने की कोशिश की। परंतु उनकी कोशिश विफल रही और उन्हें दुर्घटनाओं का सामना करना पड़ा। हाल ही में, श्रीलंका में नागरिक युद्ध, सुनामी और बाढ़ आई, जिसने इस जगह को बाकी दुनिया से अलग रखा। इस जगह के आसपास बौद्ध धर्म का उदय भी एक दिव्य योजना का हिस्सा था, जिसने इसे स्थानीय लोगों की जिज्ञासा से दूर रखा।<br /><br />

        यदि कोई सामान्य मानव मातंगों (वेद्दह जनजाति के अधीन लोग जो हनुमान की सेवा में हैं) से मिलने की कोशिश करता है, तो वह नहीं मिल सकता। उन्हें मिलने के लिए उसी जैसे बनना पड़ता है।<br /><br />

        एक देव या देव के लोग हर किसी को स्वीकार करने के लिए तैयार होने चाहिए, है ना? यही "दैवीयता" का अर्थ मानव दृष्टिकोण में है। लेकिन यदि हम समग्रता में सोचें, तो हम समझ सकते हैं कि सीता एलिया के हनुमान हमेशा क्यों "विभाजित" रहे। वास्तव में यह भौतिक दृष्टि में "विभाजन" है, "वास्तविकता" में नहीं। आप इसे सूर्य के उदाहरण से समझ सकते हैं। हम हमेशा सूर्य से प्रकाश प्राप्त करते हैं लेकिन यदि हम सूर्य तक शारीरिक रूप से जाने की कोशिश करें, तो हमें जलना पड़ेगा। उन्हें पाने के लिए हमें अपनी सांसारिक इच्छाओं को जलाना पड़ता है।<br /><br />

        लेकिन हम कालियुग में जी रहे हैं। हमने भ्रम, समस्याओं और संघर्षों के बादल बना लिए हैं जो उनके प्रकाश को हमारे पास आने नहीं देते। सतयुग में कोई बादल नहीं थे। हर मानव का भगवान से प्रत्यक्ष संबंध था। जैसे ही माया के बादल हमारे चारों ओर बनने लगे, हमने मंदिर और आध्यात्मिक स्थान पाए जहां हम जाकर "प्रकाश" प्राप्त कर सकते थे और अपने आप को पुनः उर्जा दे सकते थे।<br /><br />

        कालियुग में, बुरी चीजों के बावजूद, हमारे पास संचार का वरदान है। आज एक व्यक्ति दुनिया के एक कोने में बैठकर दूसरे कोने में बैठे व्यक्ति से संवाद कर सकता है। संचार तकनीक में प्रगति परिवर्तन के चरण का संकेत है। हम सेतु में आपके विवरण (जन्मदिन और वर्तमान समय-स्थान निर्देशांक) एकत्र करते हैं और उसे मातंगों की भाषा और मानकों में अनुवादित करते हैं। हर मानव मातंगों के हनुमंडल में एक बिंदु है। वे उस बिंदु को पहचानते हैं और उसके लिए पूजा करते हैं।<br /><br />

        हमने गहन शोधकर्ता के रूप में काम किया। मातंगों के साथ बातचीत ने हमें दर्शन के भ्रम से बाहर निकाला। जब हम एकत्व और सर्वोच्च को समझते हैं, तो हम शब्दों की दुनिया से बाहर आते हैं। क्योंकि यह अनुभव है जो विज्ञान और दर्शन के शोध पत्रों से परे है। लेकिन इस अनुभव के बाद हम ब्रह्मांड की सेवा का एहसास पाते हैं और सेतु के माध्यम से अपनी भागीदारी निभाते हैं।<br /><br />

        हमें श्रीलंका सरकार से प्रोत्साहन और समर्थन मिला क्योंकि वे इसे "वर्चुअल पर्यटन" मानते हैं, लेकिन हम इसे भगवान हनुमान की सेवा मानते हैं - सर्वोच्च शक्ति जो मानवता को कालियुग से सतयुग में परिवर्तन के चरण से ले जाएगी।
      `
    },
    en: {
      heading: "About Setu",
      subheading: `
        Setu is an organization based in Colombo which works on metaphysics of relationship between human being and Supreme being. According to Indian ancient texts, Shri Hanuman attained immortality thousands of years ago. He attained supernatural powers by doing Bhakti of Rama. At the end of Rama's life, He was given the task of looking after His devotees and to stay on Earth itself. He chose to stay in Seetha Eliya, a place in Sri Lanka where He experienced oneness with Rama when He found Mata Seetha (Rama's wife) held captive by the evil king Ravana.<br /><br />

        When King Pandukabhaya wanted to build a huge temple at Seetha Eliya, he saw giant form of Hanuman. So he dropped idea of building temple as he saw entire universe as Hanuman's abode. Then later some British people got attracted by the beauty of the place and tried to build industries and homes here. But their attempt failed and they met with accidents. More recently, civil wars, tsunamis, and floods in Sri Lanka kept this place disconnected from the rest of the world. Rise of Buddhism as a religion around this place was also a part of divine plan which kept this place out of curiosity of local people.<br /><br />

        If a normal human being tries to meet a Matang (people of a subtribe within Veddah tribe who are in direct service of Hanuman), S/he cannot meet. One has to be like them to meet them.<br /><br />

        A God or God's men should be ready to embrace everyone, shouldn't they? Well, that is what "Godliness" means in human perspective. But if we think in totality, we can understand why Hanuman of Seetha Eliya has always been "disconnected" from the rest of the world. Actually it is "disconnection" in physical terms, not in "reality". You can understand this with the analogy of sun. We receive light from the sun always but if we try to go to sun physically, we need to burn ourselves. We need to burn our worldly attachments to meet Him.<br /><br />

        But we are living in times of Kaliyuga. We have built clouds of confusions, problems and struggles which do not let His light come to us. In Satyuga, there were no clouds. Every human being had direct connection to God. His light was accessible to everyone. As the clouds of Maya started building up around us, we found temples and spiritual places where we could go and get "light" and recharge ourselves.<br /><br />

        But in Kaliyuga, despite all the bad things, we have the boon of communications. Today a person sitting in one corner of the world can communicate with another person sitting in another corner. The advancements in Communication Technology is an indication of phase of transformation. We at Setu collect your details (for example, Date of Birth and current time space co-ordinates) and translate that data in the language and standards of Matangs. Every human being is a dot in the Hanumandal of Matangs. They recognize that dot and do a Pooja for that.<br /><br />

        We were researchers in the subject of metaphysics. Our interactions with Matangs led us out of the confusions of philosophy. When we understand the oneness, the supreme, we come out of the realm of words. Because that is an Experience which is beyond the scopes of research papers of science and metaphysics. But after that Experience, we do get a sense of service to the universe and we are doing our bit through Setu.<br /><br />

        We have got encouragement and support from Sri Lanka government as they see it as "Virtual Tourism" but we consider as a service of Lord Hanuman- the Supreme Power which will lead humanity through the phase of transformation - the transformation from Kaliyuga to Satyuga.
      `
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "hi" ? "en" : "hi"));
  };

  const langContent = content[language];

  return (
    <div className="history-page">
        <div className="history-section">
      <h2
        className="section-heading"
        dangerouslySetInnerHTML={{ __html: langContent.heading }}
      />
      <p
        className="section-subheading"
        dangerouslySetInnerHTML={{ __html: langContent.subheading }}
      />
    </div>
    
        <button className="translate-button" onClick={toggleLanguage}>
          {language === "hi" ? "Translate to English" : "हिंदी में अनुवाद करें"}
        </button>
    </div>
    
  );
};

export default AboutSetu;
