import React, { useState } from "react";
import picture_1 from "../assets/Picture_1.png";
import picture_2 from "../assets/Picture_2.png";
import "./Other.css";
import ScrollFadeIn from "../components/ScrollFadeIn";

const Other = () => {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => setIsHindi((prev) => !prev);

  return (
    <>
      <ScrollFadeIn>
        <div className="section1">
          <img src={picture_1} alt="Picture 1" />
          <div className='section-body'>
            <h1>
              {isHindi
                ? "भगवान हनुमान हर 41 साल में इस जंगल में आते हैं"
                : "Lord Hanuman comes in this jungle every 41 years"}
            </h1>
            <h3>
              {isHindi ? (
                <>
                  यह हमें पता चला कि श्रीलंका के नुवारा एलिया के जंगलों में एक
                  जनजाति रहती है। उन्हें वेद्दाह जनजाति के भीतर एक उप-जनजाति या
                  गोत्र के रूप में वर्गीकृत किया जा सकता है, हालांकि उनका जीवन
                  शैली पूरी तरह से अलग है। इनकी संख्या बहुत कम है लेकिन ये
                  आधुनिक समाज से पूरी तरह से कटे हुए हैं। इनसे गहराई से जुड़ने
                  के लिए सेतु मास्टर्स ने इनकी जीवनशैली को अपना लिया। हमें यह भी
                  ज्ञात हुआ कि इनका इतिहास रामायण काल से जुड़ा हुआ है। भगवान
                  हनुमान को अमरत्व का वरदान प्राप्त था। भगवान श्रीराम के देहांत
                  के बाद, वे अयोध्या छोड़कर दक्षिण के जंगलों में आ गए। फिर
                  उन्होंने पुनः समुद्र पार किया और श्रीलंका पहुंचे, जहां उस समय
                  विभीषण का शासन था। उस समय वे इस जनजाति के साथ श्रीलंकाई जंगलों
                  में रहे। उन्होंने उन्हें ब्रह्म ज्ञान (परम ज्ञान) प्रदान किया
                  और यह वचन दिया कि वे हर 41 वर्षों में एक बार वापस आकर उनकी नई
                  पीढ़ी को ब्रह्म ज्ञान देंगे।
                </>
              ) : (
                <>
                  We came to know about a tribe in Sri Lankan jungles of Nuwera
                  Eliya. They can be classified as a sub-tribe or a Gotra within
                  Veddah tribe though their way of life is completely different.
                  They are very small in number but they are completely
                  disconnected from modern society. To connect with them deeply,
                  Setu Masters adopted their lifestyle. We came to know that
                  their history goes back to Ramayana period. Lord Hanuman was
                  given the boon of immortality. After death of Lord Rama, He
                  left Ayodhya and came down to the jungles of south. Then He
                  crossed the ocean again and landed in Sri Lanka which was
                  being ruled by Vibhishana at that time. At that time He lived
                  with this tribe in Sri Lankan jungles. He gave them the Brahma
                  Jyan (The knowledge of supreme) and promised them that He
                  shall visit them every 41 years to give Bramha Gyan to their
                  new generation.
                </>
              )}
            </h3>
          </div>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="section2">
          <div className="section2-left">
            <h1>
              {isHindi
                ? "भगवान हनुमान हाल ही में 2014 में उनसे मिले थे"
                : "Lord Hanuman visited them recently in 2014"}
            </h1>
            <h3>
              {isHindi ? (
                <>
                  हाल ही में, वर्ष 2014 में भगवान हनुमान ने इस जनजाति का दर्शन
                  किया। उनकी अगली यात्रा 41 वर्षों बाद अर्थात् 2055 में होगी। इस
                  वर्ष हमें उनके आगमन की जानकारी पहले से थी। हम उन्हें अपनी
                  भौतिक आँखों से देखना चाहते थे। हमने अपनी यह इच्छा जनजाति के
                  मुखिया के सामने प्रकट की। लेकिन हम वह पवित्रता की परीक्षा पास
                  नहीं कर सके जो भगवान हनुमान के दर्शन के लिए आवश्यक थी। हमें
                  बताया गया कि हम शुद्ध आत्माएँ नहीं हैं, इसलिए हमारी आँखें
                  उन्हें नहीं देख सकतीं। भगवान हनुमान के आगमन के समय, मतंग लोग
                  अपने चारों ओर एक पवित्रता का मंडल बनाते हैं जिसे "हनु मंडल"
                  कहा जाता है। कोई भी अपवित्र आत्मा उस मंडल में प्रवेश नहीं कर
                  सकती। वे उसी मंडल के भीतर रहते हैं और श्री हनुमान के साथ संवाद
                  करते हैं। सतयुग में मनुष्य सर्वाधिक पवित्र हुआ करते थे। इसके
                  बाद संस्कारों का क्षय आरंभ हो गया और अब कलियुग में हम इतने
                  अशुद्ध हो चुके हैं कि अमर भगवान हनुमान के दर्शन भी नहीं कर
                  सकते। ऐतिहासिक उल्लेख में अंतिम बार भगवान हनुमान का भीम से
                  महाभारत काल में मिलना बताया गया है। लेकिन मतंग लोग आज भी
                  पवित्र हैं। यदि उनकी नई पीढ़ी में थोड़ी भी अशुद्धता आ जाए, तो
                  भगवान हनुमान हर 41 वर्षों में आकर अपने ब्रह्म ज्ञान से उन्हें
                  पूर्ण रूप से शुद्ध कर देते हैं।
                </>
              ) : (
                <>
                  Recently this year in 2014, Lord Hanuman visited them. His
                  next visit will happen after 41 years i.e. in 2055. This year,
                  we were in the know of His arrival. We wanted to see Him with
                  our physical eyes. We expressed our desire to head of the
                  tribe. But we could not pass test of the purity required to
                  see Lord Hanuman. We were told that we are not pure souls
                  hence our eyes cannot see Him. Ar the time of Lord Hanuman's
                  visit, Mathangs form a sphere of purity around themselves
                  which is called "Hanu Mandal". No impure soul can enter into
                  the sphere. They remain within that sphere and interact with
                  Shri Hanuman. Human beings were purest in Satyuga. After that
                  erosion of Sanskaras started and now in Kaliyuga we are not
                  even pure enough to see the immortal Lord Hanuman Last time in
                  recorded history, there is a mention of Lord Hanuman meeting
                  Bheema during Mahabharata period. But Mathangs are pure till
                  date. Even if little impurity surfaces in their new
                  generation, Lord Hanuman comes every 41 years to purily them
                  completely with His Brahma Jyan,
                </>
              )}
            </h3>
          </div>
          <img src={picture_2} alt="Picture 2" />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="sectiona3">
          <h1>
            {isHindi
              ? "इस बार भगवान हनुमान ने क्या किया?"
              : "What all Lord Hanuman did when He came this time?"}
          </h1>
          <h3>
            {isHindi ? (
              <>
                यहाँ तक कि वे पक्षी और बंदर भी, जो मतंगों के साथ रहते हैं,
                मुख्यधारा के समाज के हम मानवों की तुलना में अधिक पवित्र आत्माएँ
                हैं। मतंग लोग पक्षियों और बंदरों से उनकी ही भाषा में बात कर सकते
                हैं। जब भगवान हनुमान हर 41 वर्षों में उनके पास आते हैं, तो सभी
                पक्षी, बंदर और मतंग अपने-अपने तरीके से उनकी पूजा करते हैं और
                उनसे संवाद करते हैं। वे उनसे उसी तरह बात करते हैं जैसे हम आपस
                में करते हैं। भगवान हनुमान की उपस्थिति में मतंगों द्वारा जो भी
                अनुष्ठान और धार्मिक कार्यक्रम किए जाते हैं, उन्हें जनजाति का
                मुखिया एक "लॉग बुक" में दर्ज करता है। 27 मई 2014 भगवान हनुमान की
                मतंगों के साथ अंतिम यात्रा का अंतिम दिन था। उसके बाद से हम
                लगातार मुख्य मतंग से संवाद कर रहे हैं ताकि यह जान सकें कि भगवान
                हनुमान ने अपनी यात्रा के दौरान क्या-क्या किया और उनके तथा
                (बंदरों, पक्षियों और मतंगों) के बीच क्या बातें हुईं। हमने
                पिदुरुतालगला पर्वत की तलहटी में एक साधना केंद्रम की स्थापना की
                है, विशेष रूप से इस पवित्र लॉग बुक को समझने के लिए। अब तक हमने
                इस लॉग बुक के 3 अध्यायों को समझ लिया है और अन्य अध्यायों को
                समझने की प्रक्रिया जारी है। यह वेबसाइट एक वर्चुअल मंदिर है जहाँ
                हम इन पवित्र अध्यायों को आधुनिक भाषाओं में पोस्ट कर रहे हैं
                जैसे-जैसे हम उन्हें समझते हैं। यदि आप भगवान हनुमान या भगवान
                विष्णु के भक्त हैं, तो हनुमान जी आपको जानते हैं। इसलिए यदि किसी
                अध्याय में आपको अपने वर्तमान जीवन या पूर्वजन्मों की किसी घटना का
                उल्लेख मिले, तो आश्चर्यचकित न हों।
              </>
            ) : (
              <>
                Even the birds and monkeys who live with Mathangs are purer
                souls than us human beings of mainstream society. Mathangs can
                talk to the birds and monkeys in their language. When Lord
                Hanuman comes to them every 41 years, all birds, monkeys and
                Mathangs worship Him in their own way and interact with Him.
                They talk to Him the way we talk to each other. The entire
                rituals and processions which are carried out by Mathangs in
                presence of Lord Hanuman are recorded by the head of the tribe
                in a "Log Book". 27th May 2014 was last day of Lord Hanuman's
                visit to Mathangs. After that we have been interacting with the
                head Mathang to figure out what all Lord Hanuman did during His
                visit and what conversations took place between them (Monkeys,
                Birds and Mathangs) and Him (Lord Hanuman). We have opened a
                Sadhana Kendram in the foothills of Piduruthalagala mountain
                specially to understand this sacred logbook. We have deciphered
                3 chapters of this logbook so far and more are being deciphered.
                This website is the virtual temple where we are posting these
                sacred chapters in modern languages as we decipher them. If you
                are a devotee of Lord Hanuman or Lord Vishnu, Hanuman knows you.
                Hence do not be surprised if in any chapter you find a
                conversation where some incident of your present life or past
                lives is mentioned.
              </>
            )}
          </h3>
        </div>
      </ScrollFadeIn>
      <div style={{display:'flex', justifyContent:'center'}}>
            <button
        className="translate-button"
        onClick={toggleLanguage}
        style={{ margin: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        {isHindi ? "Translate to English" : "हिंदी में अनुवाद करें"}
      </button>
      </div>
    </>
  );
};

export default Other;
