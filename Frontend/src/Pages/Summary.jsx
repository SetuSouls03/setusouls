import React, { useState } from "react";
import "./Summary.css";

const Summary = () => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "hindi" : "english");
  };

  return (
    <div className="summary-container">
      {language === "english" ? (
        <>
          {/* SECTION 1 */}
          <section className="summary-section first-section">
            <h1>He is alive since ages...</h1>
            <p>
              When human beings try to fulfill their desires and achieve their goals, they always face obstacles. Very often they think, “Why has God made this world like this? Why can’t human beings fulfill their desires without facing obstacles?” God doesn’t answer questions directly. He answers by giving demonstrations. One such demonstration was given by Him many centuries ago. A prince called Shri Ram of Ayodhya kingdom was wandering in jungles of south India in search of His wife Seeta. She was abducted from the jungle. While searching for her, Shri Ram met Hanuman who had super human abilities.<br /><br />
              Upon meeting, Hanuman immediately realized that Shri Ram is incarnation of God who is out to give a demonstration to entire humanity. Hanuman devoted Himself to Ram and joined His mission of searching and bringing back Seeta. Many obstacles came. Finding Seeta, building an army to counter Ravana, building a bridge to reach Lanka, saving Ram’s brother from death -- Hanuman removed all the obstacles. This way, God demonstrated that where there is obstacle, there is obstacle-remover too. This obstacle-remover power in this world is Hanuman. Shri Ram told Hanuman, “O Hanuman, you will live in this world till the end. You will remove obstacles of all human beings who have full faith in me (i.e. God).”
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="summary-section second-section">
            <h1>He comes to meet them <br />every 41 years ...</h1>
            <p>
              No matter what you call that supreme power—Ram, Krishna, Vishnu or
              simply God—if you have full faith in Him, He sends Hanuman to remove
              your obstacles. There are two kinds of obstacles:
            </p>
            <ol>
              <li>
                The obstacles which come when you pursue something worldly (i.e. you
                want to fulfill your materialistic desires)
              </li>
              <li>
                The obstacles which come when you pursue God (i.e. you want to attain
                Moksha)
              </li>
            </ol>
            <p>
              When you pursue something materialistic, Shri Hanuman comes to remove your obstacles as an invisible power. But when you pursue God, the obstacles faced by you are different. To remove those obstacles, Hanuman comes in visible form.<br /><br />
            </p>
            <p>
              In Sri Lanka there are some tribal people called Mathangs who pursue nothing but God. Their only purpose in life is to attain Moksha (freedom from cycle of death and birth). Lord Hanuman comes to remove their obstacles too; the difference is that they can see Him with their eyes and can talk to Him. He comes to visit them every 41 years and stays with them like a guest (Recently He visited them in 2014). He creates certain situations in their daily lives in order to clear blockages of their minds and souls so that they can realize God and attain Moksha. The head of Mathangs (Baba Mathang) notes down every word and every act of Lord Hanuman in a log book. This log book serves as a guide for new members of their family for next 41 years. Apart from this log book, they also chant a secret Mantra in their daily worship. When they chant this Mantra, Lord Hanuman appears before them, and they can speak to Him to clear their doubts.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="summary-section third-section">
            <h1>You can also meet Him.</h1>
            <p>
              Setuu means bridge. Setuu is a bridge between you and your goals.<br /><br />
            </p>
            <p>
              <strong>Materialistic Goals:</strong> If you are pursuing your worldly desires and facing obstacles in doing so, Setuu helps you in connecting better with your God. If your soul is connected to Him, He will definitely send Hanuman to remove your obstacles. Setuu Masters and ascetics are translating the log book in which minute to minute details of Lord Hanuman’s latest 2014 journey to Mathangs are recorded.You can read these chapters to KNOW your God better.<br /><br />
            </p>
            <p>
              <strong>Non-materialistic Goals:</strong> If your all worldly desires have been fulfilled and now your goal is Moksha or meeting God, you can come to Setuu Hanuman Bodhi in the foothills of Piduruthalagala Mountain (Sri Lanka) to do Sadhana.<br /><br />
            </p>
            <p>
              <strong>Both materialistic and non-materialistic Goals:</strong> If you are paying your worldly duties and along with that you want to pursue God, then also you should read these chapters. You will also get the same Mantra which ascetics and Mathangs chant to see and meet Lord Hanuman. You will get the first line of Mantra when you finish 3 chapters and so on.<br /><br />
            </p>
          </section>

          <button onClick={toggleLanguage} className="translate-button">
            Translate to Hindi
          </button>

          <section className="summary-highlight">
            <p>
              <span>Where has Lord Vishnu's last avatar taken birth?</span> Lord Hanuman was the only one who was with Lord Kalki when destruction happened at end of last Kalpa. Now again this Kalpa is nearing end. Lord Hanuman has given some very crucial messages for humanity in His Leelas. 
            </p>
          </section>
        </>
      ) : (
        <>
          {/* SECTION 1 - HINDI */}
          <section className="summary-section first-section">
            <h1>वह युगों युगों से जीवित हैं...</h1>
            <p>
              जब मनुष्य अपनी इच्छाओं की पूर्ति करने और अपने लक्ष्यों को प्राप्त करने का प्रयास करते हैं, तो उन्हें हमेशा बाधाओं का सामना करना पड़ता है। वे अक्सर सोचते हैं — “भगवान ने यह संसार ऐसा क्यों बनाया है? मनुष्य बिना बाधाओं के अपनी इच्छाओं की पूर्ति क्यों नहीं कर सकते?” भगवान प्रश्नों का उत्तर सीधे नहीं देते — वे उदाहरण देकर उत्तर देते हैं। ऐसा ही एक उदाहरण उन्होंने कई शताब्दियों पहले दिया था। अयोध्या राज्य के एक राजकुमार श्री राम अपनी पत्नी सीता की खोज में दक्षिण भारत के जंगलों में भटक रहे थे। सीता का अपहरण जंगल से कर लिया गया था। उनकी खोज के दौरान श्री राम की भेंट हनुमान जी से हुई, जिनके पास अलौकिक शक्तियाँ थीं।<br /><br />
              भेंट होते ही हनुमान जी ने तुरंत पहचान लिया कि श्री राम स्वयं भगवान के अवतार हैं, जो सम्पूर्ण मानवता को एक दिव्य उदाहरण देने आए हैं। हनुमान जी ने स्वयं को श्रीराम को समर्पित कर दिया और सीता जी की खोज और वापसी के अभियान में उनके साथ जुड़ गए। अनेक बाधाएँ आईं — सीता को ढूंढना, रावण का सामना करने के लिए सेना बनाना, लंका पहुँचने के लिए पुल बनाना, श्री राम के भाई को मृत्यु से बचाना — हर जगह हनुमान जी ने सभी बाधाएँ दूर कीं। इस प्रकार भगवान ने दिखाया कि जहाँ बाधा होती है, वहाँ उसका निवारक भी होता है। इस संसार में वह बाधा-निवारक शक्ति हनुमान जी हैं। श्रीराम ने हनुमान जी से कहा — “हे हनुमान, तुम इस संसार में अंत तक जीवित रहोगे। तुम उन सभी मनुष्यों की बाधाएँ दूर करोगे जो मुझ पर पूर्ण विश्वास रखते हैं।” 
            </p>
          </section>

          {/* SECTION 2 - HINDI */}
          <section className="summary-section second-section">
            <h1>वह हर 41 वर्ष में उनसे मिलने आते हैं...</h1>
            <p>
              चाहे आप उस सर्वोच्च शक्ति को राम, कृष्ण, विष्णु या केवल भगवान कहें — यदि आप उन पर पूर्ण विश्वास रखते हैं, तो वे आपके मार्ग की बाधाएँ दूर करने के लिए हनुमान जी को भेजते हैं। बाधाएँ दो प्रकार की होती हैं:
            </p>
            <ol>
              <li>वे बाधाएँ जो तब आती हैं जब आप कुछ सांसारिक वस्तु प्राप्त करना चाहते हैं (अर्थात भौतिक इच्छाएँ पूर्ण करना)।</li>
              <li>वे बाधाएँ जो तब आती हैं जब आप भगवान को प्राप्त करना चाहते हैं (अर्थात मोक्ष की प्राप्ति करना)।</li>
            </ol>
            <p>
              जब आप भौतिक वस्तुओं की प्राप्ति का प्रयास करते हैं, तो श्री हनुमान एक अदृश्य शक्ति के रूप में आपकी बाधाएँ दूर करते हैं। लेकिन जब आप भगवान की प्राप्ति के मार्ग पर होते हैं, तब आपकी बाधाएँ अलग होती हैं। इन बाधाओं को दूर करने के लिए हनुमान जी साक्षात् रूप में प्रकट होते हैं।<br /><br />
            </p>
            <p>
              श्रीलंका में कुछ जनजातियाँ हैं जिन्हें “मातंग” कहा जाता है, जो केवल भगवान की साधना में लीन रहते हैं। उनके जीवन का एकमात्र उद्देश्य मोक्ष प्राप्त करना है (जन्म-मृत्यु के चक्र से मुक्ति)। भगवान हनुमान उनकी बाधाएँ भी दूर करने आते हैं; फर्क सिर्फ इतना है कि वे हनुमान जी को अपनी आँखों से देख सकते हैं और उनसे संवाद कर सकते हैं। वे हर 41 वर्ष में उनसे मिलने आते हैं और कुछ समय तक उनके बीच अतिथि के रूप में रहते हैं (हाल ही में वे 2014 में उनसे मिलने आए थे)। वे उनके दैनिक जीवन में ऐसी परिस्थितियाँ उत्पन्न करते हैं जिससे उनके मन और आत्मा की रुकावटें दूर हों और वे भगवान का साक्षात्कार कर मोक्ष प्राप्त कर सकें। मातंगों के प्रमुख (बाबा मातंग) भगवान हनुमान के हर वचन और हर क्रिया को एक पवित्र ग्रंथ में लिखते हैं। यह ग्रंथ अगले 41 वर्षों तक उनके परिवार के नए सदस्यों के लिए मार्गदर्शक का कार्य करता है। इस ग्रंथ के अलावा, वे अपनी दैनिक साधना में एक गुप्त मंत्र का जप करते हैं। जब वे उस मंत्र का जाप करते हैं, तो भगवान हनुमान उनके सम्मुख प्रकट होते हैं, और वे उनसे अपने संदेह दूर करने हेतु संवाद कर सकते हैं।
            </p>
          </section>

          {/* SECTION 3 - HINDI */}
          <section className="summary-section third-section">
            <h1>आप भी उनसे मिल सकते हैं।</h1>
            <p>
              सेतू का अर्थ है “पुल”। सेतू एक ऐसा पुल है जो आपको आपके लक्ष्यों से जोड़ता है।<br /><br />
            </p>
            <p>
              <strong>भौतिक लक्ष्य:</strong> यदि आप सांसारिक इच्छाओं की पूर्ति के प्रयास में हैं और आपको बाधाओं का सामना करना पड़ रहा है, तो सेतू आपको अपने ईश्वर से गहराई से जोड़ने में सहायता करता है। यदि आपकी आत्मा उनसे जुड़ी हुई है, तो वे निश्चित ही हनुमान जी को भेजेंगे जो आपकी बाधाएँ दूर करेंगे। सेतू के आचार्य और साधक उस ग्रंथ का अनुवाद कर रहे हैं जिसमें भगवान हनुमान की 2014 की मातंगों से हुई यात्रा का प्रत्येक विवरण दर्ज है। आप इन अध्यायों को पढ़कर अपने भगवान को और गहराई से जान सकते हैं।<br /><br />
            </p>
            <p>
              <strong>अभौतिक लक्ष्य:</strong> यदि आपकी सभी सांसारिक इच्छाएँ पूर्ण हो चुकी हैं और अब आपका लक्ष्य मोक्ष या भगवान की प्राप्ति है, तो आप श्रीलंका के पिदुरुतलागला पर्वत की तलहटी में स्थित सेतू हनुमान बोधि में साधना करने आ सकते हैं।<br /><br />
            </p>
            <p>
              <strong>दोनों लक्ष्य:</strong> यदि आप अपने सांसारिक कर्तव्यों का पालन करते हुए साथ ही भगवान की ओर अग्रसर होना चाहते हैं, तो आपको भी ये अध्याय अवश्य पढ़ने चाहिए। आपको वही मंत्र मिलेगा जो साधु और मातंग भगवान हनुमान से मिलने के लिए जपते हैं। जब आप 3 अध्याय पूरे कर लेंगे, तो आपको उस मंत्र की पहली पंक्ति प्राप्त होगी, और इसी प्रकार आगे बढ़ते रहेंगे।<br /><br />
            </p>
          </section>

          <button onClick={toggleLanguage} className="translate-button">
            Translate to English
          </button>

          <section className="summary-highlight">
            <p>
              <span>भगवान विष्णु के अंतिम अवतार ने कहाँ जन्म लिया है?</span> जब पिछले कल्प का अंत हुआ था, तब विनाश के समय केवल भगवान हनुमान ही भगवान कल्कि के साथ थे। अब फिर यह कल्प अपने अंत की ओर है। भगवान हनुमान ने अपनी लीलाओं में मानवता के लिए कुछ अत्यंत महत्वपूर्ण संदेश दिए हैं। 
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default Summary;
