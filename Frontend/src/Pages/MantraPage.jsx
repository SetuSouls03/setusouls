import React, { useState } from "react";
import "./MantraPage.css";

const MantraPage = () => {
  const [language, setLanguage] = useState("hi");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "hi" ? "en" : "hi"));
  };

  const content = {
    hi: {
      update:
        "अपडेट : पता चला है कि भक्त इस मंत्र की पंक्तियों का गलत उच्चारण कर रहे हैं | मन्त्र में उच्चारण का अति महत्त्व है | देवनागरी अथवा रोमन में इसका सही उच्चारण नहीं लिखा जा सकता | अतः सेतु इस मंत्र की सभी ३६ पंक्तियों की ऑडियो रिलीज़ करेंगे जैसा कि साक्षात् हनुमान पूजा में उच्चारित की जाती है | ऑडियो तब रिलीज़ होगी जब इस मंत्र का अर्थ जिन अध्यायों में निहित है , वे रिलीज़ हो जायेंगे |",

      intro:
        "हनुमान जी द्वारा मातगो को दिया गया एक गुप्त मंत्र है जिसमे कुल 36 पंक्तियाँ हैं | इस मंत्र का जाप करके कोई भी हनुमान जी के साक्षात् दर्शन पा सकता है | लेकिन उसके लिए कुछ शर्तें पूरी होनी चाहिए | सबसे महत्वपूर्ण शर्त है कि जाप करने वाले भक्त को इन पंक्तियों का अर्थ मालुम होना चाहिए | इस मंत्र की पंक्तियों का अर्थ हनुमान जी द्वारा हर 41 साल बाद की जाने वाली लीलाओं में निहित होता है | सेतु द्वारा अब तक उन लीलाओं के जो अध्याय समझे जा चुके हैं  वो आपको नीचे दी गई पंक्तियों का जाप करने के योग्य बनाते हैं | जैसे जैसे नए अध्याय समझे जायेंगे , हम हनुमान जी के निर्देशानुसार इस मंत्र की आगे की पंक्तियाँ आपको भेजेंगे | ",

      lines: [
        {
          title: "प्रथम पंक्ति",
          mantra: [
            "कालतंतु कारेचरन्ति एनर मरिष्णु",
            "निर्मुक्तेर कालेत्वम अमरिष्णु",
          ],
          meaning:
            "शब्दार्थ: काल = समय, तन्तुकारे = धागों का जाल, चरन्ति = गति करना , एनर =यह, मरिष्णु = नश्वर ,निर्मुक्तेर=मुक्त , काले = समय से , त्वम् = आप , अमरिष्णु = अनश्वर\n\nप्रथम पंक्ति का अर्थ तीसरे अध्याय में निहित है |",
        },
        {
          title: "द्वितीय पंक्ति",
          mantra: [
            "कर्म विनीयाताहम [आपका नाम] आरूढ़",
            "अनंत वाहनेत्वम् सर्वारूढ़",
          ],
          meaning:
            "कृपा ध्यान दें , दूसरी पंक्ति का तीसरा शब्द आपका अपना नाम है | यह आपका प्रथम नाम या प्रसिद्द नाम होना चाहिए जिससे आप पहचाने जाते हैं | अगर यह मंत्र एक समूह द्वारा जाप किया जा रहा हो तो तीसरा शब्द उस समूह का नाम होना चाहिए | जैसे अगर मातांगो का समूह यह मंत्र इकठ्ठे जाप कर रहा हो तो तीसरा शब्द होगा , मातंग |\nशाब्दिक अर्थ: कर्मों के द्वारा लागू सीमाओं के कारण मैं \"[current-user:field_first_name]\" की देह में  सवार हूँ किन्तु आप अनंत वाहनों (देहों अथवा पहचानों ) पर सवार हो सकते हैं |\n\nद्वितीय पंक्ति का अर्थ पांचवे अध्याय में निहित है |",
        },
        {
          title: "तृतीय पंक्ति",
          mantra: [
            "नीमितमे नैमितिकेच भूलोका",
            "पुच्छेत्वम विस्तारास्ति व्याहृति पातालेच",
          ],
          meaning:
            "इस पंक्ति का शाब्दिक अर्थ है : मेरा तो कारण और परिणाम दोनों भूलोक में हैं लेकिन आपकी पूँछ का विस्तार व्याहृति में भी है और पाताल में भी |",
        },
        {
            meaning:"इस पंक्ति का अर्थ 9 वे अध्याय में निहित है | 9 वे अध्याय में आपने पढ़ा कि भगवान् राम ने (नल के रूप में ) पाताल में जाकर भूतकाल को प्रभावित किया | पाताल नीचे वाले लोक हैं  जहाँ से हमारा भूतकाल प्रभावित हो सकता है और व्याहृति ऊपर वाले लोक हैं जहाँ से हमारा भविष्यकाल प्रभावित हो सकता है | हनुमान जी की पहुँच पाताल में भी है और व्याहृति में भी |"
        }
      ],
    },

    en: {
      update:
        "Update : It has been learnt that devotees are pronouncing the lines of this Mantra incorrectly. Sound is very important in Mantra. Devnagari and Roman scripts cannot convey exact pronunciation. Hence Setuu will release audio of all 36 lines as chanted in Sakshat Hanuman Pooja. The audio will be released once all the chapters containing the meanings are released.",

      intro:
        "There is a secret Mantra given by Lord Hanuman to the Mathangs. It consists of 36 lines. By chanting this Mantra, one may attain Sakshat Darshan of Lord Hanuman, provided certain conditions are fulfilled. The foremost condition is knowing the meaning of these lines.",

      lines: [
        {
          title: "First Line",
          mantra: [
            "Kaaltantu Kaarecharanti Enar Marishnu",
            "Nirmukter Kaaletwam Amarishnu",
          ],
          meaning:
            "Please note, it is \"Kaare\" in 2nd word and \"Kaale\" in 6th word. Notice the\ndifference of \"r\" and \"l\" Meaning of these words is enshrined in 3rd\nchapter.\nLiteral meaning is: Kaal = Time, Tantukaare= web of strings,\nCharanti=Moving, Enar=This, Marishnu=Mortal,Nirmukter=Free, Kaale=\nFrom Time, Twam= You, Amarishnu= Immortal\n\nMeaning of the first line is enshrined in third chapter.",
        },
        {
          title: "Second Line",
          mantra: [
            "Karma Vineeyataaham [Your Name] Aarudhha",
            "Anant Vaahnetwam Sarwaarudhha",
          ],
          meaning:
            "Please note, third word in this mantra is your own name. This should be your first name or popular name by which you identify yourself. When this Mantra is chanted by a group of people, the name of group is used as third word. For example, if a group of Mathangs are chanting it together, the third word would be \"Mathang\".\nLiteral Meaning is: Because of limitations imposed by Karma, I am riding on the body of \"[current-user:field_first_name]\" while you can ride on all the infinite vehicles (identities).\n\nMeaning of second line is enshrined in 5th chapter.",
        },
        {
          title: "Third Line",
          mantra: [
            "Neemitme Naimitikecha Bhooloka",
            "Puchchhetwam Vistarasti Vyahriti Paatalecha",
          ],
          meaning:
            "Literal Meaning of third line is : My cause and effect are here in this Bhooloka only but your tail stretches to Paatal as well as Vyahriti.\n\nMeaning of third line is enshrined in 9th chapter. In 9th chapter you have read that Lord Ram (manifested as Nala) modifies an event of past in order to build Ramasetu. Paatal is lower world from where our past can be modified, and Vyahriti is upper world from where our future can be modified. For an ordinary human being cause and effect both happen in Bhooloka only. But Lord Hanuman has access to both Paatal and Vyahriti. So, for Him a cause can be at Paatal and effect can be in Bhooloka; OR cause can be at Vyahriti and effect can be in Bhooloka. Please note, there are infinite number of Paatals (lower worlds) and infinite number of Vyahriti (upper worlds) but we are concerned with only those Paatals and Vyahritis which can affect our world.",
        },
        {
          meaning:
            "This Mantra are to be recited in the state of transcendence. In that state, time and space lose their meaning. In that state, only a soul speaks to Lord directly. The body and other parameters of physical world have no meaning.",
        },
      ],
    },
  };

  return (
    <div className="mantra-page">
      <div className="mantra-card update">
        <h2>Update</h2>
        <p>{content[language].update}</p>
      </div>

      <div className="mantra-card">
        <p>{content[language].intro}</p>
      </div>

      {content[language].lines.map((line, index) => (
  <div className="mantra-card" key={index}>

    {line.title && (
      <h3 className="mantra-title">{line.title}</h3>
    )}

    {line.mantra && (
      <div className="mantra-text">
        {line.mantra.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>
    )}

    {line.meaning &&
      line.meaning.split("\n\n").map((para, i) => (
        <p key={i} className="mantra-meaning">{para}</p>
      ))}
  </div>
))}

            <div className="translate-button-container">
        <button className="translate-button" onClick={toggleLanguage} style={{marginTop:'1rem', marginBottom:'-3rem'}}>
          {language === "hi" ? "Translate to English" : "हिंदी में अनुवाद करें"}
        </button>
      </div>
    </div>
  );
};

export default MantraPage;
