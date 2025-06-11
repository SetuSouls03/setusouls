import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CharanPooja.css';

const CharanPooja = () => {
  const [language, setLanguage] = useState('hi');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  // Organized sections grouped logically
  const sectionsGrouped = [
    {
      key: 'group1',
      title: {
        hi: "हनुमान चरण पूजा",
        en: "Hanuman Charan Pooja"
      },
      paragraph: {
        hi: `एक सहज सवाल यह उठता है कि अगर हनुमान जी सीता एलिया के जंगलो में हैं तो क्या एक आम इंसान उनके शारीरिक रूप के दर्शन कर सकता है ?
 
इस सवाल का जवाब उतना आसान नहीं है। नश्वर का अनश्वर से मिलन विज्ञानं,दर्शन और धर्म की हज़ारों किताबो का विषय बन सकता है। लेकिन हम एक साधारण उदाहरण से इस प्रश्न का उत्तर देने की कोशिश करते हैं।
 
सूर्य का उदाहरण लेते हैं। हनुमान जी सूर्य की तरह हैं - सभी शक्तियों के केंद्र। आप सूर्य पर जाना चाहते हैं तो आपका जलने के लिए तैयार होना होगा। अगर आप सूर्य से मिलना चाहते हैं तो मिल सकते हैं लेकिन आप वापिस धरती पर नहीं आ सकते। ठीक उसी प्रकार एक साधारण मनुष्य हनुमान जी से सीता एलिया में मिल सकता है लेकिन वह फिर वापिस साधारण दुनिया में नहीं आ सकता। वह दुनिया के मोहों से मुक्ति पा लेगा। दुसरे शब्दों में, हनुमान जी के दर्शन के लिए उनके प्रति पूरा समर्पण जरुरी है ठीक उसी प्रकार जैसे सूर्य से मिलने के लिए जलना आवश्यक है। 
 
और या फिर ऐसा हो सकता है कि नियति के योजना के तहत हनुमान जी का किसी साधारण मनुष्य से मिलना आवश्यक हो। जैसे महाभारत काल में हनुमान जी ने भीम को बूढ़े वानर के रूप में दर्शन दिए थे। युध्ध में भी वे अर्जुन के रथ की पताका के रूप में मौजूद थे लेकिन किसी को अपने वास्तविक रूप में नजर नहीं आ रहे थे। 
 
एक नश्वर साधारण इंसान को सूरज पर जाकर खुद को जलाने की जरुरत नहीं है। जरुरत है तो सिर्फ सूरज की किरणों की ताकि एक सुखी जीवन जीया जा सके। अगर समस्याओं , डर , भय , असमंजस और संघर्ष के बादल जीना मुहाल कर रहे हों तो केवल सूर्य ही उन बादलो को हटा सकता है। 
 
जैसे सूरज की किरणे सबके लिए उपलब्ध हैं उसी प्रकार हनुमान जी की कृपा भी सबके लिए उपलब्ध है। हमने खुद अपने इस जन्म या पिछले जन्मों के कर्मों के कारण अपने चारो और बादल बना लिए है जो उन किरणों को आने से रोकते हैं। यही बादल हमारी आत्मा का परमात्मा के साथ सम्बन्ध अवरुद्ध करते हैं। मातंग लोगो द्वारा की जाने वाली पूजा इसी सम्बन्ध को पुनर्स्थापित करने का काम करती है। 
 
प्राचीन काल में आँखे बंद करके भगवान् का ध्यान भर कर लेने से आत्मा का परमात्मा से सम्बन्ध जुड़ जाता था। लेकिन कलियुग में इंसान इस कदर उन बादलों से घिरा हुआ है कि आँख बंद करने पर अपनी इच्छाओं और चिन्ताओ का ध्यान हो आता है। भगवान का नाम ले भी लेता है तो भी कही अवचेतन मन में इच्छाओं और चिंताओं का ही ध्यान चल रहा होता है। इसी कारण वह सम्बन्ध नहीं जुड़ पाता और सच्ची पूजा नहीं हो पाती। 
 
जब मातंग एक इंसान के लिए पूजा करता है तो वह इंसान के हनुमान जी के साथ संबंधो में आये भौतिकता के बादलों को हटाने के लिए करता है , किसी की इच्छा पूरी करने के इरादे से नहीं। क्योंकि इच्छा और वास्तविकता के बीच संघर्ष उन्ही बादलों की देन है। 
 
लेकिन मातंग को क्या पता कि वह दुनिया के अरबों इंसानों में से किस इंसान के लिए पूजा कर रहा है ? और ऐसा क्यों नहीं हो जाता कि मातंग सभी इंसानों के लिए पूजा करे ताकि सभी सुखी रहने लगे। 
 
दुसरे प्रश्न का उत्तर तो आपको खुद ब खुद मिल जायेगा। जिस दिन सभी इंसान परमात्मा के साथ अपना सम्बन्ध अनुभव करके जीने लगेंगे उस दिन से सतयुग शुरू हो जायेगा। मातंग के अनुसार कलियुग को सतयुग तक ले जाने का कार्य भी देवताओं द्वारा हनुमान जी के निमित होना तय है। अगर एक इंसान मातंग द्वारा पूजा करवाकर अपना सम्बन्ध फिर से स्थापित करता है और उसके सामाजिक और पारिवारिक वृत्त में जितने भी लोग है वे सभी हनुमान जी के साथ जुड़ जाते हैं तो वो इंसान कलियुग में भी सतयुग जैसे आनंद व सुख के साथ जियेगा। 
 
अब पहला प्रश्न। कि मातंग को कैसे पता चलता है कि वे अरबों लोगो में से किसके लिए पूजा कर रहे हैं। दर असल उनके पास एक विद्या होती है जिसे हमने हनु मंडल विद्या नाम दिया है। इस विद्या से मातंग पूरे ब्रह्माण्ड के एक एक जर्रे का भूत,भविष्य और वर्तमान देख सकते हैं। मतलब एक इंसान उनके हनु मंडल में एक बिंदु को दर्शाता है और मातंग उस बिंदु को परम बिंदु यानी हनुमान जी से मिलाने के लिए पूजा करते हैं। अगर उस बिंदु के आस पास के बिंदु पहले से ही परम बिंदु से जुड़े हुए हो तो परम सुख देने वाले चमत्कार भी होते हैं। 
 
सेतु का काम है हमारी भाषा और मानको के आधार पर इंसान का ब्यौरा देने वाली सूचनाओ का अनुवाद मातंग लोगों के मानको में करना। जैसे पश्चिम के केलिन्डर के आधार पर जो जन्म तिथि है उसे मातंग के समय मानको में बदलना। एक इंसान यानी बिंदु की हनुमंडल में पहचान के लिए मातंग को जो सुचना चाहिए होती है वह आधुनिक सुचना के तीन चीजो से हमें प्राप्त होती है -
  
 
(1) अर्पण : सबसे अच्छा अर्पण (भेट ) वानरो के लिए फलों की टोकरी है। यह भेंट आपके जीवन की एक सुचना ही होती है। प्राचीन काल में लोग बाग़ में खुद जाकर फल या फूल लाते थे। यानी अपने जीवन के कुछ मिनट सिर्फ भेट लाने के लिए समर्पित करते थे। लेकिन आजकल सब कुछ पैसो में मिलता है। जब आप किसी स्टोर से फलों की टोकरी खरीदते हैं तो जो पैसा आप उसके लिए देते हैं वो पैसा भी एक सुचना है। क्योंकि उस पैसे के अर्जन के लिए आपने अपने जीवन का कुछ समय व्यतीत किया होगा और उस समय में आपने कुछ कार्य किये होंगे।`,
        en: `A natural question arises: If Lord Hanuman resides in the forests of Sita Eliya, can a common person behold his physical form?

The answer to this question is not simple. The meeting of the mortal with the immortal can be the subject of thousands of books on science, philosophy, and religion. But let’s try to answer it with a simple example.

Let’s take the example of the sun. Lord Hanuman is like the sun — the center of all powers. If you want to go to the sun, you must be ready to burn. You can meet the sun, but you cannot return to Earth. Similarly, an ordinary human can meet Lord Hanuman in Sita Eliya, but cannot return to the mundane world. He will become free from all worldly attachments. In other words, to have the darshan (divine vision) of Hanuman, complete surrender is necessary — just as burning is necessary to meet the sun.

Alternatively, it might be that by divine plan, it becomes necessary for Lord Hanuman to appear before a common man. For example, during the Mahabharata era, Hanuman appeared before Bhima in the form of an old monkey. He was also present on Arjuna’s chariot flag during the war, but no one could see him in his true form.

A mortal need not go and burn in the sun. What is truly needed is the sunlight to live a happy life. If clouds of problems, fear, confusion, and struggle make life difficult, only the sun can clear those clouds.

Just as the rays of the sun are available to everyone, so too is Lord Hanuman’s grace available to all. Due to our karma in this or past lives, we’ve created clouds around us that block those rays. These clouds obstruct our soul’s connection with the Supreme. The rituals performed by the Matang (a spiritual practitioner) aim to restore that connection.

In ancient times, merely closing one’s eyes in meditation was enough to connect the soul with the Supreme. But in this age of Kali Yuga, humans are so surrounded by these clouds that when they close their eyes, they only see their desires and worries. Even when they chant God’s name, subconsciously they are thinking about their desires and anxieties. That is why the connection doesn't form and true worship does not happen.

When a Matang performs a ritual for a person, it is to remove these material clouds that are blocking the connection with Hanuman — not to fulfill wishes. Because the conflict between desire and reality is born out of those very clouds.

But how does the Matang know for whom among the billions of people he is performing the ritual? And why doesn’t the Matang simply perform rituals for all humans so that everyone can be happy?

The answer to the second question reveals itself. The day all humans begin to live while experiencing their connection with the Divine, that day Satya Yuga (the golden age) will begin. According to the Matang, it has been destined by the deities that Lord Hanuman will be the instrument to transform Kali Yuga into Satya Yuga. If one person restores his connection with Hanuman through the Matang’s ritual, and all the people in that person's social and family circle also connect with Hanuman, then that individual will live a blissful life like that in Satya Yuga — even within Kali Yuga.

Now the first question — how does the Matang know for whom among billions he is performing the ritual?

In fact, he possesses a knowledge system we call the Hanu Mandala Vidya. With this knowledge, the Matang can see the past, present, and future of every particle in the universe. Each human being represents a point in this cosmic Mandala, and the Matang performs the ritual to connect that point with the supreme point — Lord Hanuman. If the surrounding points are already connected with the Supreme Point, miraculous experiences of divine joy occur.

The role of Setu (the bridge) is to translate human information — based on our language and standards — into terms understandable to the Matang. For example, converting one’s birthdate based on the Western calendar into the Matang’s cosmic standards. To identify a point in the Hanu Mandala, the Matang requires certain information, which is derived from three modern elements:

(1) Offering (Arpan):
The best offering for the Vanaras (Hanuman’s kin) is a basket of fruits. This offering itself contains information about your life. In ancient times, people personally went to orchards to collect fruits and flowers — dedicating minutes of their life solely to the offering. Nowadays, everything is purchased with money. When you buy a fruit basket from a store, the money you pay is also a form of information — because to earn that money, you spent some time of your life and performed certain actions during that time.`
      },
      summary: {
        title: {
          hi: "सारांश :",
          en: "Summary:"
        },
        points: {
          hi: [
            "हनुमान जी सूर्य की तरह हैं - अर्थात सभी शक्तियों के केन्द्र।",
            "साक्षात दर्शन के लिए हनुमान जी के प्रति पूर्ण समर्पण अनिवार्य हैं।",
            "मातंगों की पूजा इच्छाओं की पूर्ति के लिए नहीं होती, वह आत्मा का परमात्मा से संबंध जोड़ने के लिए होती है.",
            "हनु मंडल विद्या के माध्यम से मातंगों जानते हैं कि किस बिंदु को परम बिंदु से जोड़ना है।",
            "सेतु का कार्य है मातंगों के द्वारा प्रदान की गई जानकारी को आपको प्रदान करना।"
          ],
          en: [
            "Hanuman Ji is like the Sun – the center of all powers.",
            "For divine vision, complete surrender to Hanuman Ji is essential.",
            "The worship of Matangs is not for desires but to connect the soul with the Supreme.",
            "Through Hanu Mandal Vidya, Matangs know which point to connect to the divine.",
            "Setu’s role is to convey this divine knowledge."
          ]
        }
      }
    },
    {
      key: 'group2',
      subheading: {
        hi: "हनुमान पूजा कैसे करें?",
        en: "How to do Hanuman Charan Pooja"
      },
      detailedParagraph: {
        hi: `चिरंजीव गुरु श्री हनुमान जी के चरणों में अर्पण करने के लिए एक आत्मा के ऊपर से भ्रम की परत का उतरना जरूरी है इसके लिए उन्होंने मार्ग दिखाया है, की कैसे कोई आत्मा अपनी इच्छाओं और कर्मों को पवित्र करके उनके साक्षात दर्शन प्राप्त कर सकती है. सबसे पहले आपको श्री हनुमान जी को अपना गुरु धारण करना है एक विशेष प्रार्थना के माध्यम से उसके लिए यहां क्लिक करे (प्राथना).

सेतु द्वारा दिए गए ब्रह्म ज्ञान जिसमें श्री हनुमान जी की 2014 की यात्रा में की गई दिव्य लीलाएं सम्मिलित है जो श्रीलंका के घने जंगलों से कुछ विशेष आदिवासियों के माध्यम से मुख्य समाज तक पहुंचाई गई थी जिसे बाद में हिंदी और इंग्लिश में ट्रांसलेट करके Amazon के माध्यम से (Immortal Talks) ओर (कलिहनुवाणी) के रूप में भेजा गया था आपको इनका अध्ययन करना है.

इस ब्रह्म ज्ञान में ब्रह्मांड के अनेकों रहस्य छुपे हुए हैं जो आज के समय में वेद, पुराण, शास्त्र, उपनिषद यहां तक किसी भी ग्रंथ में मौजूद नहीं है मनुष्य द्वारा बार-बार इन पवित्र ग्रंथों को छेड़ा गया है और इन्हें हमारे सामने तोड़ मरोड़ कर पेश किया गया है जिसके कारण इसमें संपूर्ण ब्रह्म ज्ञान लुप्त हो चुका है.

कलयुग के इस अंतिम चरण पर भगवान श्री हरि विष्णु जी के आदेश और चिरंजीवी श्री हनुमान जी के आशीर्वाद से हमारी पीढ़ी को पुनः वह प्राचीन ब्रह्म ज्ञान प्राप्त हुआ है जिसके लिए हमें उनके प्रति पूर्ण कृतज्ञता प्रकट करनी चाहिए.`,
        en: `To offer oneself at the feet of the eternal Guru, Shri Hanuman Ji, it is essential for a soul to shed the layers of illusion surrounding it. For this purpose, he has shown the path — how a soul can purify its desires and actions to attain his direct divine vision. The first step is to accept Shri Hanuman Ji as your Guru through a special prayer. To do that, click here (Prayer).

You must also study the divine wisdom (Brahma Gyaan) provided through Setu, which includes the sacred events from Shri Hanuman Ji's journey in 2014. These divine acts, which occurred in the dense forests of Sri Lanka, were conveyed to the mainstream society through certain special tribal groups. Later, they were translated into Hindi and English and shared through Amazon under the titles ‘Immortal Talks’ and ‘Kali Hanumaan Vaani’.

This Brahma Gyaan holds many secrets of the universe that, in today’s age, are not found in the Vedas, Puranas, Shastras, or Upanishads — nor in any other scripture. Over time, these sacred texts have been repeatedly altered and manipulated by humans, causing the complete Brahma Gyaan to be lost.

In this final phase of Kaliyug, under the command of Lord Shri Hari Vishnu and with the blessings of the eternal Shri Hanuman Ji, our generation has once again received that ancient divine knowledge. For this, we must express our utmost gratitude to them. || Ram ||`
      }
    },
    {
      key: 'quote',
      quote: {
        hi: `" जब आत्मा परमात्मा से जुड़ती है, तब कलियुग में भी सतयुग जैसा अनुभव होता है। "`,
        en: `" When the soul connects with the Supreme, even in Kaliyuga, the experience of Satya Yuga is felt. "`
      }
    }
  ];

  return (
    <div className="charan-page">
      {/* Group 1: title + paragraph + summary */}
      <motion.div
        className="charan-section charan-white-box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        key={sectionsGrouped[0].key}
      >
        <h1 className="charan-title">{sectionsGrouped[0].title[language]}</h1>
        <p className='paragraph'>{sectionsGrouped[0].paragraph[language]}</p>
        <div className="charan-summary">
          <h2>{sectionsGrouped[0].summary.title[language]}</h2>
          <ul>
            {sectionsGrouped[0].summary.points[language].map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Group 2: subheading + detailed paragraph */}
      <motion.div
        className="charan-section charan-white-box-alt"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        key={sectionsGrouped[1].key}
      >
        <h2 className="charan-subtitle" style={{marginBottom: '2rem'}}>{sectionsGrouped[1].subheading[language]}</h2>
        <p className='paragraph'>{sectionsGrouped[1].detailedParagraph[language]}</p>
      </motion.div>

      {/* Quote */}
{/* Quote */}
<blockquote className="charan-quote" key={sectionsGrouped[2].key}>
  <motion.span
    className="glow-text"
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.8, 1, 0.8], 
      textShadow: [
        "0 0 3px rgba(137, 119, 255, 0.79)",
        "0 0 15px rgba(93, 68, 252, 0.69)",
        "0 0 3px rgba(137, 119, 255, 0.79)"
      ] 
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {sectionsGrouped[2].quote[language]}
  </motion.span>
</blockquote>



      {/* Language toggle button */}
      <div className="translate-button-container" style={{ textAlign: 'right', margin: '2rem 0' }}>
        <button className="translate-button" onClick={toggleLanguage}>
          {language === 'hi' ? 'Translate to English' : 'हिंदी में अनुवाद करें'}
        </button>
      </div>
    </div>
  );
};

export default CharanPooja;
