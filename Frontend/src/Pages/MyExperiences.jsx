import React, { useState } from "react";
// import "./MyExperiences.css";

// Small helper component to render text with \n as line breaks
const TextWithBreaks = ({ text }) => {
  if (!text) return null;
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const MyExperiences = () => {
  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);

  const qnaData = [
    {
  id: 1,
  header: "Am I in my past or Has Hanuman made me prepared for the future",
  question: 
    "It's almost been 3 weeks, I guess, since I got to read the 3rd Chapter!! Jai Hanuman!!\n\n" +
    "And I have read it one more time after that. !!Jai Hanuman!!\n\n" +
    "Last Monday morning, my father complained about chest pain. !!Jai Hanuman!!\n" +
    "My uncle, a doctor, suggested that we admit him to the hospital. !!Jai Hanuman!!\n\n" +
    "Later in the day, we found that everything seemed normal except that the blood pressure was not getting controlled. !!Jai Hanuman!!\n\n" +
    "At around 4, I had gone home to bring my mom so that she could visit my father as well. !!Jai Hanuman!!\n\n" +
    "Right around when we were outside the ICU, my mom was not allowed inside. !!Jai Hanuman!!\n" +
    "I did get through, but my phone started ringing and I had to rush outside the ICU. !!Jai Hanuman!!\n\n" +
    "The phone was from the ICU duty nurse. She said, 'Your dad is serious, please come over.' Then she said, 'Your dad is serious and we had to put him on life support.' !!Jai Hanuman!!\n\n" +
    "My mom saw all this and we both were shocked. She started chanting prayers, and I too began chanting Hanuman's latest mantra sent by Setu. !!Jai Hanuman!!\n\n" +
    "I remember telling my mom, as I recalled the 3rd Chapter and went through the script of my life, that Hanuman would save her. !!Jai Hanuman!!\n\n" +
    "When we went back, the doctor said, 'Your dad lost his oxygen for some time and stopped breathing, so we had to put him on the ventilator.' !!Jai Hanuman!!\n\n" +
    "My uncle, who is a doctor, told my mom, 'Please be prepared.' My mom and I started chanting the Setu Mantra. !!Jai Hanuman!!\n\n" +
    "At night, we found that my dad had a severe bout of pneumonia. The doctor said it was critical and that we had neglected the condition. !!Jai Hanuman!!\n\n" +
    "During all these situations, all that came to my mind was Chapter 3. !!Jai Hanuman!!\n" +
    "Who is the charlatan (my uncle, the family doctor)? Who is the mom in this story that donated the strings to Dad? Did we both donate? Who is the ascetic? Only Lord Hanuman knows. !!Jai Hanuman!!\n\n" +
    "That night, I was telling the story in the car on the way back home — how Hanuman saved the little boy and how Hanuman saved my dad again. !!Jai Hanuman!!\n\n" +
    "We were provided 2 police personnel to help us around with a car. These personnel, when I was heading back after dropping mom, talked to me about the story. !!Jai Hanuman!!\n\n" +
    "'Sir, you have really fed us even during this bad situation. We must be the ascetics in the story!' !!Jai Hanuman!!\n\n" +
    "Each day we had a different complication. Each time we got through. Each time my conscience would say — if Hanuman saved Daddy, he will live long. No complication will bother. !!Jai Hanuman!!\n\n" +
    "Dad is well right now and the doctor said he will be shifted to the room soon. !!Jai Hanuman!!\n\n" +
    "PREPARATION OF THE TRIP:\n" +
    "I live in the US, and he lives in Vizag, Andhra Pradesh, India.\n" +
    "I can’t fathom the miracle of my trip — how my in-laws were made to be there at my house in time, helping my wife; how my abrupt end in professional life made me frustrated and led me to travel to India; and how I was the only one at home to take Dad to the hospital on time. It is all Jai Hanuman!!\n\n" +
    "He taught me my future in advance! And a mere mortal I am, that I could realize after the sacred sojourn that my future was well read out loud and clear. !!Jai Hanuman!!\n\n" +
    "Here I stand — that my Lord Hanuman, the Guider, the Divine, is the one leading me through my life. And that I don’t need to fear any event or decision, as it’s all divinely ordained. !!Jai Hanuman!!\n\n" +
    "DAD’S HEALTH:\n" +
    "He is diagnosed with calcified arteries, and my uncle and his personal doctor suggested that we leave him like that as he is 75 right now. !!Jai Hanuman!!",
  
  answer:
    "This experience was included in Sakshat Hanuman Pooja today.\n" +
    "Lord Hanuman said that your dad's soul is very dear to Him.\n" +
    "Your memories are attached to your dad's body form, therefore you want the well-being of the body.\n" +
    "Lord Hanuman is connected to your dad's soul; therefore, He would ensure the well-being of the soul.\n" +
    "Rest assured — the path being traveled by his soul is being watched closely by Lord Hanuman. !!Jai Hanuman!!\n" +
    "Blessings..."
},
{
  id: 2,
  header: "Bajrang Bali",
  question: 
    "hanumaan ji ki pooja karne ke baad athwa hanumaan mandir me mujhe shanti kaa anubhav hota hai. mai kewal yah chahta hu ki bajrangbali mujhpar apni kripa drishti banaye rakhe....",
  
},
{
  id: 3,
  header: "Bajrang Bali",
  question: 
    "Ever since childhood I have been a devotee of Hanumanji. I have immense  faith in lord Hanuman. Hanman ji has always been protecting me from all kinds of evils and troubles. I have grown up worshipping lord Hanuman and all these years my faith in lord Hanuman has grown manifold times. Before starting any work I rarely forget to remember Hanuman ji. He makes my work successful most of the times. Hanuman ji, everything is visible to you. You know everything. Please forgive me and my parents if knowingly or unknowingly we have made any mistakes either in this birth or in previous births. I have also got my Charan Pooja done by the Mathangs. Also, I have offered some fruits to lord Hanuman after reading Chapter-1 of setu asia. Hanuman ji, please accept my prayers and offerings and bless me and my parents. Hanumanji, please bless me with a good job. Also, help us become good souls. Hanumanji, keep your blessings on me and my parents and guide us to follow in the right direction of life which leads to you and make our souls so pure that we can get your glimpse. Hanumanji. I really want to have your glimpse in this life of mine. So, Hanumanji, please help in making my soul so pure that I can have your glimpse in this life with my naked eyes. I really want to thank setu asia and the Mathangs from the core of my heart for helping people connect with almighty Hamman. They are really doing a great job and that must be appreciated. Jai Bajrangbali. Jai Shree Ram.",
  answer:
    "Divine Soul,\n"+ 
    "Your prayers have been accepted on this auspicious day. Take a deep breath and break all the barriers. Let the light of Lord's blessings reach deep into your soul.\n\n"+
    "Blessings"  
},
{
  id: 4,
  header: "एक प्रार्थना प्रभु को।",
  question: 
    "में सबसे पहले परम भक्त श्री हनुमान जी महाराज को वंदन व प्रणाम करता हु प्रभु आप के एक सेवक को कष्टो से दुःखो से निकाले प्रभु या फिर दुखों को हरने की सक्ति दे ।इस सेवक से कोई भूल हुई हो तो क्षमा करे प्रभू में भी इस संसार में एक छोटा सा प्राणी हु प्रभू ।आप सर्व व्यापि हैं भगवन।"
},
{
  id: 5,
  header: "चिरंजीवी",
  question: 
    "कुल सात चिरंजीवी हैं जिनमे विभीषण भी हैं ।\n"+
    "1-क्या वो भी काल के बंधन से मुक्त हैं।\n"+
    "2-क्या वो भी काल को आदेश दे सकते हैं।\n"+
    "3-क्या वो भी असीम गति से चलते हैं।\n"+
    "CHAPTER 3\n"+
    "[सेतु की टिप्पणी : रामायण काल में हनुमान जी पवन वेग से उड़ते थे लेकिन जब उन्हें चिरंजीवी होने का वरदान मिला तब वे समय के बंधन से मुक्त हो गए । अब वे असीम गति से चलते हैं अर्थात उन्हें एक स्थान से दुसरे स्थान पर पहुँचने में बिलकुल भी समय नहीं लगता चाहे दूरी लाखो मील की हो या एक मील की ]",
  answer:
    "हाँ चिरंजीवी तभी हुआ जा सकता है जब काल के बंधन से मुक्त हुआ जाए । लेकिन हमने अभी बाकी चिरंजीवियों को न तो कभी देखा है न ही अब तक समझे गए अध्यायों में उनका जिक्र आया है । अतः हम उनके बारे में कुछ नहीं कह सकते ।"
},
{
  id: 6,
  header: "जय जय श्री हनुमानजी",
  question: 
    "फेसबुक से यहां पर आया । मातंग कबीले के बारे मेँ पढ कर एकबारगी तो विश्वास ही नहीं हुआ , पर जब श्रद्धा पूर्वक पढा तो रोमांचित हुआ । काफी अच्छा लगा और शांति का अनुभव हुआ ।\n"+
    "लगा जैसे ये जीवन व्यर्थ है । मन किया कि कबीले में चला जाउं ।\n"+
    "मेरे मन में कई विचार हैँ , लेकिन शांति है ।\n"+
    "श्री हनुमान कल्याण करेँ कृपा करें ।\n"+
    "जय बजरंग बली \n"+
    "जय श्री राम"
},
{
  id: 7,
  header: "जय श्रीराम",
  question: 
    "जा पर कृपा राम की होई .......\n"+
    "सीताराम सीताराम सीताराम कहिये \n"+
    "जन्हें विधि रखे राम तान्हे विधि रहिये \n\n"+
    "जय बजरंग बलि"
},
{
  id: 8,
  header: "जय श्री राम",
  question: 
    "मैने अपने जीवन मे बहुत से उतार चढ़ाव देखे हैं, और मैं बचपन से ही महावीर हनुमान जी का भक्त रहा हू और अब भी हू. पर ये नही पता की मेरी आत्मा सच्ची है या नही. पिछले दिनों मुझसे कुछ बहुत भारी ग़लतियाँ हुई हैं, जिनका मुझे शायद जीवन भर अफ़सोस रहेगा, मगर ये ग़लतियाँ ऐसे इंसान के लिए की हैं जिसे मैने अपना सब कुछ माना था, उसने मेरे साथ धोखा किया, पर अब मैं इन सब से पार पाना चाहता हू. हे महावीर हनुमान जी, कृपया मेरा मार्गदर्शन करे और मुझे मुक्ति और सच्चे मार्ग का रास्ता दिखाएँ. मैने जो ग़लती की है वास्तव मे उससे से किसी का अहित हुआ अथवा नही?"
},
{
  id: 9,
  header: "जय श्री राम",
  question: 
    "जय श्री राम\n"+
    "मुझे यह तीनो अध्याय पढ़कर बिलकुल ऐसा महसूस हो रहा है जैसे मैं खुद इस में सम्मिलित हूँ. भगवन श्री हनुमान जी की कृपा सभी भक्तो पे रहे सभी को प्रभु का आशीर्वाद मिले यही प्रभु से कामना करता हूँ\n"+
    "जय श्री राम\n"+
    "जय हनुमान"
},
{
  id: 10,
  header: "जय श्री राम",
  question: 
    "लाल देह लाली लसे, अरु धरी लाल लंगूर\n"+
    "वज्र देह दानव दलन, जय जय जय कपि सूर"
},
{
  id: 11,
  header: "जय श्री राम",
  question: 
    "हनुमान जी की मेरे एवं मेरे परिवारजनों के उपर बहुत कृपा रही है । हनुमान जी को मेरा कोटि कोटि प्रणाम । ऐसे हीं अपनी कृपा दृष्टि बनाए रखिए ।"
},
{
  id: 12,
  header: "परमत्मा कौन हैं?",
  question: 
    "मेरा एक बड़ा सवाल ये है की परमत्मा कौन हैं? आज कल की दुनिया में चारो तरफ धोखा, फरेब का बिज़नेस चल रहा है.इतने सारे लोग गुरु बन कर बैठे हैं और अपना धंदा चला रहे हैं, किस पर बिस्वास किया जाये? कोई साईबाबा के पीछे लड़ाई कर रहे है, और आशा राम जैसे भी लोग है जो दुनिया को गुमराह कर रहे हैं. साईं बाबा कहते थे की परमात्मा एक है,अल्लाह एक है,ईशा मसीह भी बोलते थे की भगवान एक है और मैं उनका बच्चा हूँ, वो कौन है? अब हिन्दुओं को ले लो जितने देश उतने ही भगवान.कुछ लोग कहते हैं कि शिव जी ही परमात्मा हैं? कुछ कहते हैं कि ब्रम्हा विष्णु और महेश भगवान हैं? लेकिन ये त्रिदेव भी तो शिव जी कि पूजा करते हैं. और सभी धर्म वालों ने तो परमात्मा को एक बताया है. वो कौन हैं? आज कल के गुरु भी संदेह उत्पन्न कर रहे हैं. सबसे बड़ा संदेह तो हमारे साथ ही है, और सत्य की जानकारी न होने की वजह से ही हमारा पतन होता जा रहा है. हम आत्माओं कि पिता कौन हैं? परम पिता कौन हैं? हनुमान जी हमारे गुरु बन कर हमारा भी मार्ग दर्शन करें.वे सर्व ज्ञाता हैं वो ही हमारा संदेह दूर कर सकते हैं और परमात्मा कि प्राप्ति में हमारी मदद कर सकते हैं. मेरे सवाल को हनुमान जी के पास अवस्य ले जाया जाये और जो इस दुनिया में परमात्मा को ले%",
  answer:
    "श्रीमान जी\n"+
    "एक समुद्र में 10 लोगो को गोता लगाने के लिए कहें तो सभी लोग अलग अलग चीजे निकाल कर लायेंगे | जो पत्थर निकाल कर लायेगा वो कहेगा कि तलहटी में सब पत्थर है | जो मछली निकालकर लाएगा वो कहेगा सब मछली ही मछली है | सबके मत अलग अलग हो सकते हैं लेकिन गोता तो सबने एक ही समंदर में मारा है ! आप दूसरों के अनुभव सुन सुनकर कंफ्यूज न हों , खुद गोता लगाए | गोता लगाने के दो तरीके हैं - एक ज्ञान का गोता और एक भक्ति का गोता | अब आप चुनिए आपको कौन सा गोता लगाना है |\n\n"+
    "जय श्री राम"
},
{
  id: 13,
  header: "Continued from #33728",
  question: 
    "जय बजरंगबली।\n"+
    "मैं आपके उत्तर से पूरी तरह संतुष्ट हूँ। पर आपके जवाब से ही मेरे दिमाग में एक सवाल आया । आपने कहा कि मनुष्य नश्वर है और ये बिलकुल सही है। पर मनुष्य के पिछले जन्म का कर्म उसके इस जन्म को क्यों प्रवाहित करता है? उसके पिछले जन्म के कर्म का लेखा जोखा तो उसके पिछले जन्म में ही ख़त्म हो जाना चाहिए। उसके पिछले जन्म का कर्म उसके अगले जन्म तक क्यों जाता है? हर मनुष्य को उसके कर्मो का फल उसके उसी जन्म में क्यों नही मिलता? ये अगले जन्म तक क्यों जाता है? इंसान को तो अपना पिछला जन्म याद नही रहता है। कभी कभी ऐसा होता है कि किसी इंसान को अपने अच्छे कर्मो का भी बुरा फल मिलता है। हो सकता है ये उसके पिछले जन्मों के कर्मो का फल हो। पर लोग ऐसी स्थिती में भगवान पे ह़ी ऊँगली उठाने लगते है। लोग बोलते है कि भगवान किसी अच्छे इंसान के साथ ऐसा कैसे कर सकता है। ऐसे में भगवान ही सवाल के घेरों में आ जाते हैं। इसीलिए भगवान उसी जन्म में इन्सान को उसके कर्मो का अच्छा या बुरा फल क्यों नही देते? क्यों इसे वो उसके दुसरे जन्मो तक ले जाते हैं?\n\n",
  answer:
    "दिव्य आत्म स्वरुप ,\n"+
    "आपने इधर उधर से जो भी सुना है उसे भूल जाइये | यह अज्ञान का युग चल रहा है | हर कोई अपनी बात इधर उधर के तर्क देकर कहता है | आप सब कुछ भूलकर इसको कुछ ऐसे समझिये : \n"+
    "मान लीजिये आप एक आत्मा है और आप परमात्मा के साथ खड़े हुए हैं | आपके सामने एक जंगल है | परमात्मा आपको कहते हैं कि आपको जंगल पार करना है | जंगल एक वृत्त के आकार का है जिसका व्यास मात्र एक मील का है | अर्थात अगर आप सीधे व्यास के हिसाब से चले तो आपको सिर्फ एक मील की दूरी तय करनी है | जंगल के अन्दर कोई सीधी सड़क तो है नहीं कि आप उस पर चलते जाए और पार हो जाए | एक बार आप जंगल में घुसे तो आपको यह भी मालुम नहीं पड़ेगा कि आप किधर से घुसे थे और बाहर किधर से निकला जाए | जहाँ आपको सिर्फ 1 मील की दूरी तय करनी थी वहां आप भटकते भटकते 100 मील की दूरी तय करने के बाद भी शायद जंगल पार न कर पाए | यही है ये संसार | हो सकता है आप इस कर्मों के जंगल को सिर्फ एक जन्म में पार करके मुक्ति पा ले या हो सकता है कि आप 100 जन्मों तक भटकते ही रहे | जंगल में घुसने के बाद भगवान् आपको फल नहीं दे रहे हैं | आपको जंगल की परिस्थितियों और आपके कर्मों के अनुसार फल मिल रहा है | यह शरीर तो कपडे की तरह है | मान लीजिये आपने जंगल में भटकते हुए हज़ारों साल गुजारे और इस दौरान सैकड़ो कपडे बदले | आप जब हरे रंग का कपडा पहने हुए थे तब आपको किसी जानवर ने काट लिया | आपने मरहम पट्टी की और उसके बाद कपडे बदल लिए | आपने भूरे रंग के कपडे पहन लिए | अब आप भूरे रंग के कपडे पहनकर क्या यह सवाल करेंगे - \"हे प्रभु ! मुझे जानवर ने तब काटा था जब मैंने हरे रंग के कपडे पहने हुए थे | अब मैंने भूरे कपडे पहने हुए है तो भी दर्द हो रहा है | यह कौन सा इन्साफ प्रभु , चोट लगी हरे रंग वाले लिबास में और दर्द हो रहा है भूरे रंग के लिबास में !\"\n"+
    "ज़रा सोचिये ! क्या आप कुछ ऐसा ही सवाल नहीं कर रहे ?\n"+
    "आशीर्वाद !!"
},
{
  id: 14,
  header: "पैसा - पैसा",
  question: 
    "हनुमान जी अयोध्या में अपने आराध्य प्रभु श्री राम के मंदिर निर्माण के लिए कब आयेंगे ? कितने राम भक्तो ने अपनी जान गवां दी अपनी इसके लिए |\n"+
    "आज के संसार में पैसे से सब चीजें नियंत्रित होती है चाहे गलत हो या सही | पैसेवालों की बातें समाज सुनता है और उनको सम्मान देता है | कब सत्यवादी और अच्छे लोग इस समाज और संसार का नेत्रित्व करेंगे और सम्मान के हक़दार होंगे, पैसे वाले नहीं ?\n"+ 
    "हर जगह पैसा चाहिए , किन्ही परिस्तिथियों में आपने भी रुपये का दान मांग लिया ,इस साईट के जरिये | क्या हनुमान जी का प्रसाद केवल मातंगो के जरिये ही जा सकता ? इस अध्याय के माध्यम से जब हनुमान जी ने स्प्ष्ट कर दिया की उनके भक्त जो खाते हैं सब उनके पेट में जाता है और ये दुनिया भ्रम है , तो साईट के जरिये पैसे दान करने का क्या मतलब ? जबकि हम स्वयं इच्छानुसार हनुमान जी के लिए यहाँ के मंदिरों में दान और प्रसाद चढ़ाते हैं | \n"+
    "सियापति राम चन्द्र की जय , पवनसुत हनुमान की जय ||\n",
  answer:
    "श्रीमान जी\n"+
    "यह तो आत्म चिंतन करने योग्य है कि क्यों हनुमान जी जंगल वासी भक्तों को साक्षात दर्शन देते हैं लेकिन तथा कथित २१ वीं सदी के मानवों को नहीं। जहाँ तक आपके अर्पण का प्रश्न है वह आप जहाँ चाहें कर सकते हैं। अगर आपको हनुमान जी स्वयं दर्शन देते हैं तो आप स्वयं उन्हें अर्पण कर सकते हैं अथवा कोई महात्मा हनुमान जी के दर्शन पाने योग्य शुद्ध है तो उनके माध्यम से भी अर्पण कर सकते हैं।\n"+
    "आभार ।"
},
{
  id: 15,
  header: "प्रार्थना",
  question: 
    "ऊँ श्री हनुमते नम:\n"+
    "हे अंजनी पुत्र ! आपसे हार्दिक प्रार्थना है सदैव मुझ पर व मेरे परिवार पर अपनी दया, करूणा और आशिर्वाद बनाए रखना\n"+
    "जब मैं बाबा अवधूत की आवाज में हनुमान चालीसा सुन रहा था तो बांयें हाथ में असहनीय पीड़ा उठकर तुरन्त समाप्त हो गई।\n",
  answer:
    "साक्षात् हनुमान पूजा में सम्मिलित"
},
{
  id: 16,
  header: "परमत्मा कौन हैं?",
  question: 
    "मै बचपन से ही हनुमान जी से आकर्षित रहा हूँ । वह मेरे गुरू एवम सखा है । मुझे छोटी आयु से ही हनुमान चालीसा कंठस्त हो गयी थी । मै यहाँ यह स्पष्ट करना चाहूँगा कि मेरी आयु इतनी कम थी कि मै पूरी पुस्तक को ही हनुमान चालीसा मानता था । मै जब मंदिर में पाठ करता था तो भारी भीड़ मुझे देखने के लिए आ जाती थी । एक बार कुछ स्कूल की गतिविधि मेरी इच्छानुसार नहीं हुआ तो मैंने हनुमान जी से खुट्टी कर ली और शिव को पूजने लगा । जब भी मंदिर के पास से जाता था तो मुँह भी चिढ़ाता था । कुछ दिनों तक ऐसा ही चलता रहा ।\n"+
    "मेरे नाना काशी में रहते थे, वह भी मुझे बहुत चाहते थे |मै काशी गया और किसी बात को लेकर मैंने घर में सभी से खुट्टी कर ली । अब मै अकेले बोर हो रहा था । अचानक मुझे एक पुस्तक मिली 'वीरो में वीर महावीर '। उसमे कोई मूल्य नहीं लिखा था । क्योकि मै बोर हो रहा था , मै पन्ने पलटने लगा । पहले तो पुस्तक में हनुमान जी की कथा लग रही थी,अकस्मात् से उसमे बस डाट ही डाट - 'वह कायर होता है , जो इष्ट बदलता है '। ऐसी कई बाते जिसने मेरा मन बदल के रख दिया और आज विपदा के समय तो मेरा प्रेम उनके प्रति अधिक गाढ़ा हो जाता हैं ।\n"+
    "जब मुझे वापस कानपुर आना था , तो मैंने माँ को उस पुस्तक को भी पैक करने को कहा । मुझे लगा कि माँ ने जैसे ही उस पुस्तक को रखा, वह लुप्त हो गयी । फिर वह पुस्तक नहीं मिली,कभी नहीं मिली । उस घर में भी किसी ने वह पुस्तक पहले और बाद में न ही देखी या पढ़ी । हनुमान जी सबके पास आते है.… मेरे पास आते रहते है… आते रहेँगे…",
  answer:
    "महात्मा जी ,\n"+
    "आपने प्रश्न पूछा कि क्या आपको इसी जीवन में मोक्ष की प्राप्ति होगी ? हनुमान जी ने उत्तर दिया कि आपमें मोक्ष प्राप्त करने के सभी गुण हैं लेकिन केवल एक कमी है | वह कमी आपको ज्ञात भी है | अगर इस जीवन में आप उस कमी पर विजय पा जाते हैं तो आपको मोक्ष मिलेगा अन्यथा आपको इसके पश्चात् एक और जीवन धारण करना होगा |\n"+
    "| राम |"
},
{
  id: 17,
  header: "भाग्य",
  question: 
    "\"Continued from #33745\"\n"+
    "जय श्री राम। \n"+
    "जय हनुमान। \n"+
    "मैं आपको तहे दिल से प्रणाम करता हूँ और आपके उत्तर से पूरी तरह संतुष्ट हूँ। \n"+
    "आपने मुझे कहा की मैं दुनीया की इधर उधर की बातों पे ध्यान न दूं और केवल प्रभु की सुनूं। प्रभु की सुनने के बाद निष्कर्ष निकालू और खुद का निष्कर्ष निकाल कर प्रभु पर न थोपु। और यकीन मानिए मेरा मैं भी यहीँ चाहता हूँ की मैं सिर्फ और सिर्फ वहीँ कार्य करूँ जो प्रभु मुझसे करवाना चाहते है, जिसके लिए प्रभु ने मुझे धरती पे भेजा है। \n"+
    "पर कभी कभी मेरे मन में ये ख्याल आता है कि जो मैं कर रहा हूँ क्या ये भगवान की मर्ज़ी है य\n",  
  answer:
    "मान लीजिये आप और भगवान् एक कुए के पास खड़े हैं | भगवान् जी आपको कहते हैं कि कुए के अन्दर एक गेंद गिर गई है | आपको कुए के अन्दर जाकर वो गेंद निकालकर लानी है | आप कुए के अन्दर जाते हैं और वहां अन्दर मेंढक आपको भा जाते हैं | आप अन्दर ही डेरा बना लेते हैं और मेंढकों के बीच रहने वाले हैं | आप यह भूल जाते हैं कि आपको किस कार्य के लिए भेजा गया था | आप कुए के अन्दर चाहे सामान्य मेंढक बने या मेंढकों के राजा बन जाएँ , रहेंगे आप मेंढक ही | जब आप बहुत दिन बाद भी कुए से नहीं निकलते तो भगवान् ऊपर से एकाध कंकड़ गिराते हैं ताकि आपको आपका मूल कार्य याद आये | जब आपको कंकड़ लगता है तो आपको याद आता है कि कुए के बाहर भी कुछ है | कुए कि दुनिया से बाहर भी कुछ शक्ति है | आप उस शक्ति को प्रार्थना करते हैं | और प्रार्थना भी देखिये क्या है - \"हे प्रभु , मेरी कंकडों से रक्षा कीजिये | कृपा मेरी रक्षा कीजिये ताकि मैं सुख पूर्वक यहाँ कुए में रह सकूँ |\"\n"+
    "यह दुनिया और इसके जीव इस स्तर पर आ चुके हैं | वे भूल चुके हैं कि वे कुए के मेंढक नहीं हैं बल्कि भगवान् द्वारा पिछले कर्मों का खाता सुलटाने के लिए भेजी गई आत्माएं हैं |\n"+
    "आपको जो कर्म मिलता है , जो परिस्थितियाँ मिलती हैं, उस हिसाब से कर्म कीजिये लेकिन हर कर्म करते समय आपके जेहन में यह अहसास रहना चाहिए कि आप एक आत्मा हैं , शरीर नहीं | आप जो कर्म इस अहसास के साथ और इस समझ के साथ करेंगे वहीँ कर्म भगवान् द्वारा दिए कर्म हैं बाकी सभी कर्म माया नाम की राक्षसी द्वारा आपको कुए में ही फंसायें रखने के लिए दिए गए कर्म हैं |\n"
},
{
  id: 18,
  header: "मातंगों का भविष्य क्या होगा?",
  question: 
    "परम आदरणीय ज्ञानीजनों, \n"+
    "आपको चरणस्पर्श प्रणाम, \n"+
    "जैसा कि बाबा मातंग के शिष्य उर्वा ने शंका जाहिर की थी कि आने वाले समय में जंगल ख़त्म हो जायेंगे तो हनुमान जी मिलने को कैसे आएंगे? क्या यह सत्य नहीं है? यह तो स्पष्ट दिखाई दे रहा है,परन्तु आप लोग जिन्होंने मातंगों की खोज की है और इसे सारी दुनिया के सामने उजागर किया है, क्या इससे यह नहीं होगा कि कुछ अति उत्साही लोग वहां जाने की कोशिश करेंगे और अगर आप मेरी मानें तो जाकर ही रहेंगे और जब इस प्रकार लोगों का आना-जाना शुरू हो जाएगा तो क्या इससे मातंगों के जीवन में हल-चल नहीं मच जायेगी?मातंग कितना ही मना करेंगे परन्तु लोग नहीं मानेंगे वे एक मंदिर बना देंगे और इस प्रकार एक दुसरे ही तरीके की व्यावसायिक भक्ति यहाँ भी शुरू हो जायेगी एक बाजार शुरू हो जाएगा इस प्रकार इस भक्ति का मूल-स्वरुप ही खो जाएगा , और क्या इसके लिए आपलोग उत्तरदायी नहीं होंगे? कृपया शंका का समाधान करें, \n"+
    "जय हनुमान, जय श्री राम,\n",
  answer:
    "दिव्य आत्म स्वरुप ,\n"+
    "ऐसा नहीं होगा क्योंकि सेतु के संतो को हर रोज हनुमान जी यह निर्देश स्वयं देते हैं कि उन्हें क्या करना है और क्या नहीं | उन्ही निर्देशों के अनुसार सेतु कार्य करता है | आप तक जो जानकारी पहुँच रही है वह उतनी ही है जितनी हनुमान जी आप तक पहुँचाना चाहते हैं | उससे अधिक नहीं है | जब भक्तो को आत्म ज्ञान की पूर्ण प्राप्ति हो जायेगी तब आप तक पूरी जानकारी पहुंचेगी | आत्म ज्ञान प्राप्त होने के बाद भक्त ऐसा कुछ नहीं करेंगे जैसी आपने शंका जाहिर की है क्योंकि उसके बाद श्री हनुमान उनसे भी उसी तरह साक्षात् दर्शन देने आएंगे जैसे वो मातांगो को देते हैं | फिर उन्हें यहाँ आने की ललक नहीं रहेगी |\n"+
    "आशीर्वाद |"
},
{
  id: 19,
  header: "मेरे अनुभव",
  question: 
    "जिस दिन मैंने पहला अध्याय पढ़ा उसी दिन मुझे स्वप्न में वानर रूप में हनुमानजी का स्वरूप दिखाई दिया | मन बहुत खुश था | मैं और मेरे जीवनसाथी हर शनिवार सुन्दरकाण्ड और हनुमान चालीसा का पाठ करते हैं | हम श्री हनुमान में आस्था रखते हैं और जानते हैं कि भगवान किसी की भी बिगड़ी बात बना सकता है | मैंने पहले अध्याय पढ़ने के बाद एक सौ एक रुपये की राशि भेजनी चाही लेकिन मैं पैसा भेजने के लिए किसी कार्ड का प्रयोग नहीं करती इसलिए प्रयास असफल हुआ \ यदि बेंक खाते में भेजना हो तो मैं दुबारा कोशिश कर सकती हूँ \ पर मैं जानती हूँ मेरा पहला समय बीत चुका है इसके लिए मुझे प्रतीक्षा करनी होगी| हनुमान जी हमारा कल्याण अवश्य करेंगे|"
},
{
  id: 20,
  header: "मेरे जीवन की व्याधा ..",
  question: 
    "चरण स्पर्श ,\n"+
    "पर्भु आप मेरे सवालो का उचित समाधान या संध्यान ले.\n"+
    "ऐसा प्रतीत होता है मेरे प्रश्न अनुत्तरणीय होते है?\n"+
    "इस संसार मै अकेला हु और सभी मुझसे अलग है?\n"+
    "कोई कार्य है जो मुझसे छूटा हुआ है, वो क्या है और कैसे, कब होना है या करना है?\n"+
    "आप मेरे साथ है या कोई और है. वो कौन है?\n"+
    "मेरे सभी कार्य आप ही के द्वारा निर्देशित होते है, फिर कोई उससे परेशान क्यों है, और मई परेशान क्यों हु?\n"+
    "मैं आगे क्या करू, मुझे उचित मार्दर्शन कीजिए.\n",
  answer:
    "श्री हनुमान ने कहा :\n"+
    "इस संसार को स्वयं से अलग करके क्यों देखते हो ? यह संसार भी तुम स्वयं ही तो हो | और तुम कोई और नहीं मेरा ही एक अंश हो | कभी तुमने किसी नदी को बहते देखा है वत्स ? अगर एक किनारा कहने लगे कि दूसरा किनारा उससे दूर क्यों है तो नदी क्या जवाब देगी ? सोचो |\n"+
    "निर्देशन तब होता है जब दूरी होती है | दूरी मिटा दो तो निर्देशन की जरूरत ही नहीं पड़ेगी | अपने शरीर को देखो | अगर पैर को चोट पहुँचती है तो हाथ अपने आप पैर को सहलाने उठ जाता है | हाथ को निर्देशन की आवश्यकता नहीं होती | निर्देशन में चूक हो सकती है | निर्देश देने वाला कुछ कहे , निर्देश लेने वाला कुछ सुने | अतः दूरियां मिटा दो | तुम मेरा ही तो एक अंश हो | उस अंश को पहचानो जो मेरा है | भय , चिंता आदि राक्षसों के साथ मत बैठो | वे हमेशा मुझसे दूर भागेंगे | वे हमेशा दूरियां बढ़ाएंगे |\n"
},
{
  id: 21,
  header: "मेरे दोस्त हनुमान जी. . .",
  question: 
    "जब छूना चाहा,\n"+
    "तो रूप न मिला . .\n"+
    "तू सोच जैसा गहरा रहा !\n"+
    "तू फैला रहा ,\n"+
    "मैं ढूंढ़ती रही . .\n"+
    "तेरे होने पर मेरी सोच का पहरा रहा !!\n"
},
{
  id: 22,
  header: "स्वप्न में हनुमान जी ब्राह्मण के रूप में मिले ।",
  question: 
    "मुझे बचपन से ही जल से भय लगता हैं । कुछ वर्ष पूर्व मै गहरी निद्रा में था। अचानक मुझे लगा कि मै किसी तट में हूँ। अकस्मात् एक बूढ़ा व्यक्ति (ब्राह्मण) जिसे मैंने कभी नहीं देखा मेरे पास मेरेये , और मुझे ह्रदय से लगा लिया। मेरी अनुभूति को मै शब्दों में नहीं लिख सकता हूँ । मेरे पूरे शरीर में शीत लहर सी दौड़ने लगी और शांति का अद्धभुत अहसास हुआ । अचानक मेरी निद्रा खुली , मध्यरात्रि का समय था । आनंद की अनुभूति मै कर रहा था । पूरी रात मै सो नहीं पाया । मै अत्यधिक प्रसन्न था ।\n"+
    "जब मैने सुबह टीवी खोला , मै आश्चर्यचकित हो गया। सारे समाचार channels ये बता रहे थे कि जो महाकुंभ चल रहा है वह एक सदी में एक बार ही आता है जिससे मै पूरी तरह से अज्ञात था। ।",
},
{
  id: 23,
  header: "हनुमान जी का प्रभाव",
  question: 
    "यह एक सत्य घटना, सन् 1983-84 में उन दिनों की ह,ै जब मैं हाई-स्कूल का विद्यार्थी था । एक वैष्णव परिवार, जिनकी हमारे घर से घनिष्ठता थी । उस परिवार का मुख्यिा राज्य सरकार में सरकारी सेवक हुआ करते थे । उनकी धर्म पत्नी आध्यात्मिकता की ऊॅंची षिखर पर पहुॅंची हुई थीं । उन दिनों वे किराये के मकान पर दूसरी मंजिल पर रहा करते थे । मकान के एक कमरे में हनुमान जी को स्थान देकर उनकी नित्य पूजा, आरती, अर्चना हुआ करती थी । एक दिन मैंने देखा । उनके यहाॅं भोजन बनाने में प्रयुक्त होने वाली बड़ी, पापड़ आदि कमरे के ऊपरी छत पर सूखने के लिए बांस के बने पर्रा (बड़ी परात नुमा बांस-निर्मित) में डाले हुए थे । उनके चारों ओर बहुत सारे काले मुॅंह वाले बन्दर घेरा डाले बैठे हुए थे, कोई भी उन सामानों को क्षति नहीं पहॅंुचा रहे थे । जबकि यही सामान हमारे यहाॅं से पर्रा सहित सामान छीनकर बन्दर ले भागे थे । मेरे जीवन में यह अविष्वसनीय, किन्तु सत्य घटना है । मैं श्री हनुमान जी को सादर प्रणाम करता हॅूं । जय श्री राम ।\n"
},
{
  id: 24,
  header: "हनुमान जी की भक्ति",
  question: 
    "मेरा स्वंय का अनुभव ऐसा है कि सच्चे भक्त के साथ हनुमान जी सदा उसके साथ रहते हैँ तथा उसकी भक्ति की बाधाओँ को भी दूर करते हैँ।\n"
},
{
  id: 25,
  header: "हिन्दू धर्म की रक्षा हेतू",
  question: 
    "आज इस भारत वर्ष के लोग धर्म की तुलना पे जी रहे है इसका क्या उपाय है, आज हिन्दू धर्म पे बहुत संकट के घने बदल छाए हुए है, हिन्दू धर्म बहुत शुद्ध और पवित्र है, पर इस हिन्दू धर्म को कुछ लोग गन्दा करने में लगे हुए है, क्या हिन्दू धर्म की रक्षा का कोई उपाय नहीं है?\n"+
    "मैं मातंग समुदाय के शुद्ध आत्माओ से पूछना चाहता हूँ की क्या इस भारतवर्ष में फिर से सनातन धर्म की स्थापना नहीं हो पायेगी? इस भारतवर्ष से अधर्म का नाश कब होगा?\n"+
    "जय श्री राम\n"+
    "जय हनुमान\n",
  answer:
    "हिन्दू धर्म का विनाश कभी नहीं हो सकता है क्योंकि यह मात्र धर्म नहीं यह जीवन धारा है। जब तक जीवन रहेगा , हिन्दू धर्म रहेगा। जब जीवन का नाश आवश्यक हो तब हिन्दू धर्म को दूषित करने की कोशिश अवश्य होती है। यह स्वाभाविक है क्योंकि विनाश भी प्रकृति का एक नियम है।\n"+
    "। राम ।"
},
{
  id: 26,
  header: "ज़िंदगी का पाठ",
  question: 
    "भगवन जी ने इस दुनिया को क्यों बनाया है ? \n"+
    "किसी मनुष्ये का इस संसार से क्या सम्बन्ध हो सकता है ? \n"+
    "जिस तरीके से श्री भगमाद्गीता में बताया गया है कलयुग में धर्म का कोई महत्व नही होगा तो क्या किसी को भी मोक्ष प्राप्त नही होगा ?\n"+
    "जीवन यापन करने के लिए क्या ज़रूरी है ? \n"+
    "किसी के साथ हम बुरा नही करते फिर भी हमारे साथ बुरा क्यों करते है लोग ?\n",
  answer:
    "आत्म स्वरुप,\n"+
    "जो प्रश्न आपने किये हैं उनका रटा रटाया उत्तर नहीं होता। हर किसी को इन सवालों के उत्तर खुद तलाशने होते हैं क्योंकि हर किसी का मस्तिष्क अलग होता है। सबके कर्म अलग अलग होते हैं , चरित्र अलग अलग होते हैं और संस्कार अलग अलग होते हैं। जो जवाब आपको मिलें , उसे आप शब्दों में व्यक्त नहीं कर पाएंगे। अगर आप शब्दों में व्यक्त करेंगे तो उनका अर्थ विकृत हो जायेगा। ये परम अनुभव की बातें शब्दों में परिभाषित नहीं हो सकती। शब्द केवल आपको उस अनुभव तक पहुँचाने में मदद कर सकते हैं। केवल वह शब्द आपको मदद कर सकते हैं जिसको आपका मस्तिष्क अच्छे से ग्रहण करता हो। हम इन सवालों के जवाब में कुछ शब्द कहें , उससे पहले हमें ये जानना जरूरी है कि आपका मस्तिष्क किस सरंचना का है। इसलिए आप मातंगों के बीच हनुमान जी की लीला का अध्याय पढ़कर अपने अनुभव लिखें ताकि हम कुछ ऐसे शब्द कह सकें जो आपको परम अनुभव की और ले जाने में सहायक हों।\n"
},
{
  id: 27,
  header: "1000 crore atmayein ?",
  question: 
    "kya kaliyuga ke ant mein sabhi jiv jantu ped paudhe pashu pakshi aur manav ko mila kar sirf 1000 crore atmayein bachengi ya sirf 1000 crore atmayein manav sareer ki hi btayi gayi hain to phir un atmaon ka kya hoga jo ped paudhe pashu pakshi aur banki duniya ke sabhi jiv jantu me hain......?",
  answer:
    "दिव्य आत्म स्वरुप ,\n"+
    "छठे अध्याय में केवल मानव शरीरो में फंसी आत्माओं की बात की गई है | अन्य आत्माओं के विषय में जानने के लिए आगे आने वाले अध्यायों का इन्तजार कीजिये |"
},
{
  id: 28,
  header: "13th Chapter",
  question: 
    "Hare Krishna! \n\n"+
    "After reading the 13th Chapter, I feel that I am non different from anything else in this world. But, The question is, the same feeling will not be reciprocated by other people. Hence I may suffer going back to their states and not feel like I am non different. \n\n"+
    "What is the solution for this, prabhu?\n\n"+
    "In this month and the next, I am learning about aura healing, cosmic energy healing, cosmic energy transfer healing, reiki and the like. I know that there is nothing called CO-INCIDENCE. So, I believe that there is a hidden reason behind me learning all these techniques, that too from a GURU, who is not a farse, but a devotee of Krishna! And this chapter is making me float in the air, felling one with even this key board, as I type.\n",
  answer:
    "The 'other people' is the illusion from which you have to save yourself. Your soul is the only truth you can believe in; a truth which you directly experience. Everything else is just an illusion of space-time.\n"+
    "Blessings"
},
{
  id: 29,
  header: "1st Birthday of son + father admitted in hospital",
  question: 
    "Dear friends \n"+
    "Tomorrow is my son's 1st birthday. \n"+
    "I want to pray to Lord Hanuman to bless him and always keep him safe. May Lord Hanuman make him a good human being who can do good to nature and its creations.\n"+
    "My father got admitted in hospital yesterday night, pray to Lord Hanuman to cure him and keep him safe.\n"+
    "Pranam."
},
{
  id: 30,
  header: "1st time my travel to Hanuman place",
  question: 
    "This happen when the first after I get matured with the way of praying to Hanuman where is started to pray when I was 6 years old and this happen when I was 17 years old.I sit on meditation in my pooja room around 2am and off all my light and put on the song decode let me make my heart strong and see him today. After some time I feel my body start to become cold and seem like I start to hear a voice say \"Ram.. Ram...\" and out of sudden a hand...A very big hand touch my shoulder. .and that's it. .The very first time I get trance and I felt it...since then the journey continue till now. .."
},
{
  id: 31,
  header: "आत्मा और मोक्ष-2",
  question: 
    "\"Continued from #49110\"\n"+
    "मैंने अध्याय 4 दो तीन बार पढा। ये बात सही है की विष्णुलोक में भूतकाल, वर्तमानकाल और भविष्यकाल का कोई अर्थ नही होता। ये भी तो सही है की उस सागर में केवल मोक्ष प्राप्त आत्मा ही रहतीं हैं और मोक्ष प्राप्त आत्मा का दोबारा जन्म नही होता। फिर उर्मि की आत्मा उस सागर से बाहर कैसे आई दूसरे जन्म के लिए? ये मुझे ठीक से समझ नही आ रहा। यहाँ पर मैं थोड़ा कंफ्यूज (confuse) हूँ। \n\n"+
    "कृपया मेरा कन्फ्यूजन (confusion) दूर करें। यहाँ पर थोड़ा विस्तार में समझाएँ।\n\n"+
    "जय श्री राम।\n"+
    "जय हनुमान।\n"+
    "धन्यवाद।",
  answer:
    "कृपा चौथे अध्याय के अंत में जोड़ा गया अनुच्छेद पढ़ें |"
},
{
  id: 32,
  header: "20 जनवरी 1985 को मेरा जन्म हुआ, और आज मेरा ३१ वा जन्मदिन है। दादी ने बोला की जन्म लेते ही मैंने जय या जय श्री राम बोला क्या यह सत्य है? यदि ऐसा है तो राम जी का अनुग्रह मेरे ऊपर कई जन्मो से है?\n",
  question: 
    "20 जनवरी 1985 को मेरा जन्म हुआ, और आज मेरा ३१ वा जन्मदिन है। दादी ने बोला की जन्म लेते ही मैंने जय या जय श्री राम बोला क्या यह सत्य है? यदि ऐसा है तो राम जी का अनुग्रह मेरे ऊपर कई जन्मो से है? \n\n"+
    "रामजी कृपा करें और मेरे प्रियजनों की जो मुझसे अपेक्षाएं हैं उनको में प्रभु आपकी कृपा से पूरी कर सकूँ,आपके सानिध्य के साथ। .... आपके चरण कमलों का आशीष लेना है प्रभु ! \n\n"+
    "।।दशरथनंदनपरमदास।।\n"+
    "।। राम ।।"
},
{
  id: 33,
  header: "अध्याय 21 के अनुसार देह में आत्मा का प्रवेश",
  question: 
    "मेरे गुरुदेव हनुमानजी को उनके श्रीचरणों में इस आत्मा का प्रणाम !! \n"+
    "सभी सेतु संतो और मतगो को भी इस आत्मा का प्रणाम स्वीकार हो !! \n"+
    "मेरे मन में 21 वा अध्याय पढने के बाद एक प्रश्न उठा है कि जब एक देह गर्भ में पल रही होती है तो उसमे क्या आत्मा का प्रवेश हो चूका होता है अगर जन्म लेने कि तुरंत बाद प्रवेश लेती है तो फिर वो देह गर्भ में हलचल केसे करती है (अल्ट्रासाउंड में ,और डाक्टरों द्वारा कम्प्यूटर निरीक्षण में हलचल का आना ) जेसे कि बताया गया है कि किसी भी देह में आत्मा नही होती है तो वो एक सास लेती हुई ( एक तरह से कोमा ) देह होती है मतलब उसका कोई मूमेंट नही होता है ! एक बार पुनः गुरुदेव और सभी संतो के श्रीचरणों में इस आत्मा का प्रणाम !!!",
  answer:
    "जब आप सो रहे होते हैं और स्वपन देख रहे होते हैं तब भी कभी कभी आपकी देह में हलचल होती है | उसी प्रकार जो आत्मा नया जीवन लेने वाली होती है , वह आत्मा स्वपनलोक में अपने पिछले जन्मों की इच्छाओं का निस्तारण कर रही होती है ( वे अटकी हुई इच्छाएं जो नया जीवन लेने में बाधा पहुंचाती हैं ) जिसके कारण कभी कभी उसकी नई विकसित हो रही देह में हलचल होती हैं |"
},
{
  id: 34,
  header: "अध्य्याय 24 को पढने के बाद ..........",
  question: 
    "गुरु हनुमानजी कि श्री चरणों में इस आत्मा का समर्पण \n"+
    "सभी सेतु संतो और मातांगो को नमन \n\n"+
    "जेसा की मेने पहले भी लिखा था और उसका उत्तर भी मिला कि मुझे दौरे पढ़ते थे और आपने मेरी प्राथना प्रभु तक पहुचाई थी उसके बाद मेरे दौरे पड़ना ना के बराबर हो गया था ......पर जब से अध्य्याय 24 को पढ़ा है ये दौरे वापस 2 दिन से चालू हो गए है और हा ये रात को सोते वक्त पड़ते है सब कुछ अजीब सा लग रहा है कभी कभी घर और आस पास कि चीजे भी अजनबी से लगती है लेकिन कुछ सेकण्ड के लिए ....हे गुरु देव कर्पा करो इन दोरो से पीछा छुड़ाओं\n"+
    "गुरुदेव व् सभी सेतु संतो और मातांगो को इस आत्मा का नमन \n"

},
{
  id: 35,
  header: "28th March , my mother's birthday",
  question: 
    "Dear Setuu masters, \n"+
    "28th March is my mother's birthday. Please ask Lord Hanuman what do I do on that date ? She is no longer with me....my mind is full of grief and sadness. ...why did you not protect her Lord when it was prayed at sankatmochan mandir for her well-being. If you don't believe me Lord; you come and see the situation of me and my family....it's a plane without a pilot. \n"+
    "Please Lord please do something....\n"+
    "My son is also suffering due to cough cold and fever. Please cure him Lord Hanuman.\n"+
    "One more query ; it is said that the prayer is communicated in Sakshat Hanuman Puja. How is it done ? Is it done taking my name ?\n",
  answer:
    "Divine Soul,\n"+
    "Her soul has already taken new birth. She has different family and relations now.\n"+
    "Blessings.\n"+
    "---\n"+
    "Yes, your name and the time of submission of the experience is included."
  },
{
  id: 36,
  header: "ज़िंदगी का पाठ",
  question: 
    "भगवन जी ने इस दुनिया को क्यों बनाया है ? \n"+
    "किसी मनुष्ये का इस संसार से क्या सम्बन्ध हो सकता है ? \n"+
    "जिस तरीके से श्री भगमाद्गीता में बताया गया है कलयुग में धर्म का कोई महत्व नही होगा तो क्या किसी को भी मोक्ष प्राप्त नही होगा ?\n"+
    "जीवन यापन करने के लिए क्या ज़रूरी है ? \n"+
    "किसी के साथ हम बुरा नही करते फिर भी हमारे साथ बुरा क्यों करते है लोग ?\n",
  answer:
    "आत्म स्वरुप,\n"+
    "जो प्रश्न आपने किये हैं उनका रटा रटाया उत्तर नहीं होता। हर किसी को इन सवालों के उत्तर खुद तलाशने होते हैं क्योंकि हर किसी का मस्तिष्क अलग होता है। सबके कर्म अलग अलग होते हैं , चरित्र अलग अलग होते हैं और संस्कार अलग अलग होते हैं। जो जवाब आपको मिलें , उसे आप शब्दों में व्यक्त नहीं कर पाएंगे। अगर आप शब्दों में व्यक्त करेंगे तो उनका अर्थ विकृत हो जायेगा। ये परम अनुभव की बातें शब्दों में परिभाषित नहीं हो सकती। शब्द केवल आपको उस अनुभव तक पहुँचाने में मदद कर सकते हैं। केवल वह शब्द आपको मदद कर सकते हैं जिसको आपका मस्तिष्क अच्छे से ग्रहण करता हो। हम इन सवालों के जवाब में कुछ शब्द कहें , उससे पहले हमें ये जानना जरूरी है कि आपका मस्तिष्क किस सरंचना का है। इसलिए आप मातंगों के बीच हनुमान जी की लीला का अध्याय पढ़कर अपने अनुभव लिखें ताकि हम कुछ ऐसे शब्द कह सकें जो आपको परम अनुभव की और ले जाने में सहायक हों।\n"
},
{
  id: 37,
  header: "आत्मा और मोक्ष-3",
  question: 
    "\"Continued from 49890\"\n"+
    "अध्याय 4 के अंत में जो अनुच्छेद दिया हुआ है, उससे यही पता चलता है क़ि मुक्तिसागर से जो आत्मा निकलती है, उसका पहली वाली आत्मा से कोई सम्बन्ध नही होता। \n"+
    "मेरा सवाल यही पे है। मुक्तिसागर से दूसरी आत्मा फिर बाहर कैसे और क्यों आती है? उसे बाहर आने की क्या आवश्यकता है?\n"+
    "धन्यवाद। \n",
  answer:
    "दिव्य आत्मा ,\n"+
    "इस प्रश्न का उत्तर भी श्री हनुमान ने चौथे अध्याय की लीलाओं में दिया है | ब्रह्मा जी इसके लिए जिम्मेदार हैं | जैसे चन्द्रमा भूलोक के समुद्र में लहरों के लिए जिम्मेदार है , उसी तरह ब्रह्मा जी विष्णुलोक में उठ रही तरंगो के लिए जिम्मेदार हैं | अगर ब्रह्मा जी न होते तो संसार ही न होता | एक परमाणु के अन्दर इलेक्ट्रान , प्रोटोन , न्यूट्रॉन होते हैं | उसके बारे में क्या आप यह प्रश्न करते हैं कि वे वहां क्यों होते हैं ?\n"+
    "आगे आने वाले अध्यायों में आप यह भी पढेंगे कि विष्णु , ब्रह्मा और शिव दरअसल एक ही हैं | ये सभी सत्य आपको सीधे अनुभव करने हैं | इन सत्यों को \"क्यों\" की बैशाखी के सहारे नहीं खड़ा किया जा सकता क्योंकि ये परम सत्य हैं | यह सत्य सीधे अनुभव किये जाते हैं , इन्हें लिखा , पढ़ा या समझा नहीं जा सकता | समझने की शक्ति मस्तिष्क का एकाधिकार है और मस्तिष्क एक छोटी सी चीज है | मस्तिष्क परम सत्य धारण नहीं कर सकता | परम सत्य केवल अनुभव किया जा सकता है |\n"+
    "हनुमान जी की लीलाओं का उद्देश्य शिष्यों को मस्तिष्क से बाहर निकालना और उन्हें परम सत्य की ओर ले जाना है |\n"+
    "|| राम ||"
},
{
  id: 38,
  header: "3 prayers not conveyed in Hanuman pooja",
  question: 
    "Dear Setuu friends, \n"+
    "3 previous prayers were not conveyed to Lord Hanuman in Shakshat Hanuman Puja. I am going through the worst time of my life....the only hope that I have is by conveying my pain to the Lord...But now even that isn't getting through.....it is said that no prayer to Lord Hanuman remains unanswered and hence I share my pain with Lord Hanuman. \n"+
    "Please convey that my father has been very ill since last one month and I pray for his complete recovery.\n"+
    "Pray Lord to bless my family and let me not take birth any more after this birth since I am unable to bear the unbearable pain of loosing my mother and see my father suffer so much pain.\n"+
    "Regards\n"+
    "Tamoghna"
},
{
  id: 39,
  header: "33 cores",
  question: 
    "are that 33 crores surrahs and 33 crores hindu devi devtas according to hindu vedic puran are one and the same or different thing..? and what are surrahs. enlightenment me with knowledge about surrahs",
  answer:
    "Divine Soul,\n\n"+
    "Vedas and Puranas which are available today are not the original ones. Except Upanishadas and Bhagwadgeetha part of mahabharata, most of the texts have been highly adulterated. Therefore we won't comment on anything you may have heard from those texts. Please wait for upcoming chapters to get the pure supreme knowledge from Lord Hanuman. Once you get the entire knowledge, you will get all your answers.\n\n"+
    "Blessings"
},
{
  id: 40,
  header: "अद्याय 4 और 10 के संबंधित प्रशन",
  question: 
    "श्री हनुमानजी के श्रीचरणों में प्रनाम सभी सेतु संतो को प्रनाम ..!\n"+
    "मुझे अद्याय 4 और 10 के संबध में कुछ ज्ञान समझ नहीं आ रहा है जेसे कि अद्याय 4 मे बताया ह कि आत्मा सीदे मुक्तिसागर से नकल कर नयी देह धारण कर लेती है अथार्त जिस रूप मे प्रकट होना चाहती है वो रूप मे गतिमान हो जाती है और काल के धागों पर सवार हो जाती है पर अद्याय 10 मे श्री हनुमानजी ने बताया कि इन्द्र शीर सागर का द्रव काल के धागों पर गिरते है जिस से आत्मा का अस्तित्व आता है ..!\n"+
    "मेरी तुच्छ बुद्दी ये बात समझ नहीं पा रही है .श्री हनुमानजी से और सेतु संतो से प्रथना है कि कपया मुझे ज्ञान प्रदान करे\n",
  answer:
    "श्रीमान जी ,\n\n"+
    "जब बादल होते हैं तब बारिश होती है , लेकिन फिर आपका अगला प्रश्न होना चाहिए कि आखिर बादल कैसे बनते हैं ?\n\n"+
    "सीधे देह धारण कर लेती है, लेकिन देह बनती कैसे है , यह प्रश्न भी आपके मन में आना चाहिए | मुक्तिसागर से आत्मा मरण लोक में आती है और देह धारण करती है, यह चौथे अध्याय में बताया गया है और फिर देह बनती कैसे है इसका वर्णन 10 वे अध्याय में है |"
},
{
  id: 41,
  header: "श्री हनुमान जी का 41 वर्षों के बाद आना और मातंगो पर विशेष प्रेम एवं दर्शन का क्या कारण है।",
  question: 
  "मैं यह जानने के लिए उत्सुक हूँ कि श्री हनुमान जी 41 वर्षों के बाद ही मातंगो से मिलने क्यों आते हैं और उनका केवल मातंगो को दर्शन देने के पीछे क्या अभिप्राय है। मातंगो से विशेष प्रेम का क्या कारण है।\n"+
  "मैं हनुमान जी से कैसे मिल सकता हूँ। क्या यह संभव है।\n"+
  "मैं स्वयं को लेकर चिंतित रहता हूँ।क्या करूँ क्या ना करूँ जैसी द्विविधाओं में उलझ हुआ हूँ। सब कुछ जानते हुऐ भी भौतिक संसार में अपनी नौकरी के लिए प्रमोशन के भविष्य के बारे में सोच कर मन को अत्यंत कष्ट झेलना पद रहा है। मैं किसी निष्कर्ष पर नहीं पहुँच पा रहा हूँ। कृपया मेरा मार्गदर्शन करें एवं हनुमान जी को पाने का सरल सुगम मार्ग बताने की कृपा करें।\n"+
  "सधन्यवाद।।",
  answer:
    "दिव्य आत्मस्वरुप, \n\n"+
    "41 साल बाद मातंगो की नई पीढ़ी युवा हो जाती है | नई पीढ़ी अगर पुरानी पीढ़ी से ब्रह्ज्ञान प्राप्त करेगी तो कुछ सदियों पर ज्ञान पूर्णत समाप्त हो जाएगा जैसा कि बाकी दुनिया में हो चुका है | आपके पूर्वज भी कभी न कभी ब्रह्मज्ञानी रहे होंगे और वह ज्ञान पीढ़ी दर पीढ़ी आगे भी बढ़ा होगा | लेकिन पीढ़ी दर पीढ़ी उस ज्ञान का नाश भी हुआ होगा | लेकिन हनुंमान जी स्वयं ज्ञान देने आते हैं मातंगों को इसलिए वह ज्ञान अब भी ज्यों का त्यों है |\n"+
    "ज्ञान से ही आत्मा का शुद्धिकरण होगा और उसके बाद ही दर्शन होंगे | प्रभु की लीलाओं को लगातार पढ़ते रहिये अगर उनसे भी आपके ज्ञानचक्षु नहीं खुले तो फिर भगवान् कल्कि के आने का इन्तजार कीजिये |\n"+
    "इस पल को जीयें ... भविष्य हनुमान जी पर छोड़ दीजिये |\n"+
    "|| राम ||"
},
{
  id: 42,
  header: "मै 45 बर्ष का एक बेरोजगार ब्यक्ति हूँ",
  question: 
    "मै 45 बर्ष का एक बेरोजगार ब्यक्ति हूँ मैंने B COM MBA 1995 मै किया और पिछले तीन साल से मै बेरोजगार घूम रहा हूँ\n"+
    "हनुमान जी की पूजा भी की , और पता नहीं कितनी बार दिल्ली के हनुमान मंदिर मै जाकर मैंने सुन्दर काण्ड का पाठ किया पर कोई अच्छी और स्थाई नौकरी नहीं लगी ? नौकरी लगती है तो मालिक सैलरी नहीं देते या सैलरी रोक लेते है ! या बिना कारण बिना नोटिस के नौकरी से निकाल देते है : मेरी हनुमान जी बस इतनी प्राथना है की है भगबान मुझ को एक अच्छी और स्थाई नौकरी लगवा दो ताकि मै अपने दोनो बच्चो को पढ़ा लिखा सकूँ और अपने परिवार का पालन पोषन कर सकूँ !\n",
  answer:
    "निम्न 4 बातों का ख्याल रखें -\n\n"+
    "(1) आप में अपने लक्ष्य को पूरा करने की तीव्र इच्छा होनी चाहिए |\n"+
    "(2) उन इच्छाओं को पूरा करने के लिए आवश्यक प्रयास करें अन्यथा आपकी आत्मा उन लक्ष्यों को इस संसार में पूरा करने की बजाय स्वपन लोक में पूरे कर लेगी |\n"+
    "(3) अपने दिल दिमाग में “भय” “चिंता” आदि नाम के असुरों को जगह न बनाने दे अन्यथा हनुमान जी को लगेगा कि आप उनकी बजाय असुरों को अपने दिल दिमाग में रखना पसंद करते हैं | बाधाएं दूर करने के लिए हनुमान जी की सहायता प्राप्त करने के लिय यह अति आवश्यक है | \n"+
    "(4) अपनी प्रार्थना को सरल रखें | अपनी प्रार्थना अपने और प्रभु के बीच रहने दें उसमे आप परिवार , समाज तथा अन्य लोगो को शामिल न करें | सही प्रार्थना - “हे प्रभु मेरी आवश्यकताए पूरी करें ताकि मै मोक्ष के मार्ग पर चल सकूँ |” गलत प्रार्थना - “मेरे जीवन में फलां व्यक्ति को ले आयें , मेरे परिवार को ऐसा करें , मेरे समाज को ऐसा करें|” आप जितने लोगो को अपनी प्रार्थना में शामिल करेंगे उतने लोगो के कर्म रोड़ा बनते जायेंगे | आपके कर्मों के रोड़े काफी हैं , किसी अन्य के रोड़े मत लायें | जब आपकी इच्छा पूरी होगी तो आपके आस पास के लोगो को खुद ब खुद सहायता मिलेगी |"
},
{
  id: 43,
  header: "493593",
  question: 
    "Thank you for the reply. I have some confusion. You mentioned that surrahs are ruling Rahul body. When surrahs is ruling him he should enjoy the pleasures in positive way. But Rahul is in the wrong path and addicted to drugs. Is not it because of asurrahs?.. Please clarify. Thank you Raji",
  answer:
    "Divine Soul,\n\n"+
    "There are three Gunas : Sattva, Rajasa, Tamasa\n\n"+
    "When you get pleasure by hurting others, it is an example of Tamasa. This Guna is induced in us by Asurrahs.\n\n"+
    "When you want pleasure no matter who gets hurt or who not, this is example of Rajasa. This Guna is induced by Surrahs.\n\n"+
    "When one has risen above all the pleasures, when one is aware of his/her soul, that is Sattwa. When one is free from both Surrahs and Asurrahs, then he/she experiences Sattva.\n\n"+
    "Blessings"
},
{
  id: 44,
  header: "6th sense",
  question: 
    "Jai Sri ram\n"+
    "Jai hanuman\n"+
    "I had send many queries, nothing was replied yet. Today I got another query.what is 6th sense. Whether it is the soul experiences something which human thinks 6th sense.\n\n"+
    "Second query is now a days ayappa god worship is going everywhere.whether lord hanuman mentioned about ayappa god ever in any chapters. Because story about ayappa god is that he is son of lord Shiva and lord Vishnu.\n\n"+
    "Something like this, one demon was there who desired to be only killed by sibling of shiva and lord vishnu. so when lord Vishnu took mohini avatar, lord shiva merged with Vishnu and ayappa got born. What is the reality about that I want to know. This is just a thought came to my mind to know. Forgive me if I have asked anything wrong.\n\n",
  answer:
    "Divine Soul,\n\n"+
    "Vedas and Puranas which are available today are not the original ones. Except Upanishadas and Bhagwadgeetha part of mahabharata, most of the texts have been highly adulterated. Therefore we won't comment on anything you may have heard from those texts. Please wait for upcoming chapters to get the pure supreme knowledge from Lord Hanuman. Once you get the entire knowledge, you will get all your answers.\n\n"+
    "Blessings"
},
{
  id: 45,
  header: "33 cores",
  question: 
    "are that 33 crores surrahs and 33 crores hindu devi devtas according to hindu vedic puran are one and the same or different thing..? and what are surrahs. enlightenment me with knowledge about surrahs",
  answer:
    "Divine Soul,\n\n"+
    "If you are sincere about moving on the path of supreme knowledge, we suggest you to ponder and reflect over the words of Lord Hanuman published here. More you churn, more knowledge will come out. Supreme knowledge is not like an academic knowledge which you receive in schools and colleges. Supreme knowledge is inside you. The words of Lord Hanuman will reveal that knowledge. Therefore, do not seek readymade answers. If you have a query, think about it until you exhaust your thinking capability on that topic. Then write your query along with the thought process you have already gone through. Then words of Setuu Masters might help you in breaking the deadlock.\n\n"+
    "This tendency of shooting questions from top of the head has to be tamed. Then only you can move on the path of the highest knowledge.\n\n"+
    "Blessings"
},
{
  id: 46,
  header: "AABHAR",
  question: 
    "Hanuman charan pooja mere anubhav pahuch rahe hein ye jankar bhut acchha laga. Lekin aapane ye nahi bataya ke hanumanji ne kya kaha. Kripa aap muze ye bataye. Meine ye adhyay padha to muze kafi halka mehasus huva.mein jab ye adhyay padhti hu to mera man ekagra ho jata hain.aur mera man mashtisk puri tarah se us ghatana per kendrit ho jata hein aur mein apane aakhon ke samane hota hua pati hu.aur padhte padhate muze wo baate bhi yaad aati hein jo meine padhi hein.e.g. tile ka rahsya aur magarmachh. Padhte hi samaz jaati hu.",
  answer:
    "दिब्य आत्मस्वरूप ,\n\n"+
    "हर अनुभव के बाद शब्दों की आवश्यकता नहीं होती | ज्यादातर हनुमान जी केवल मुस्कुराते हैं क्योंकि मुख्यधारा के भक्तों के अनुभव भावनाओं और नादानी से भरे होते हैं |\n\n"+
    "|| राम ||"
},
{
  id: 47,
  header: "AASHIRVAD",
  question: 
    "Bajrangi baba aap ki kripa hamare parivar par karo , hum sab saat rahein , mera rin jo liya hai usse mukat karo , parivar mein sabko raji khushi rakho. hamara beta videsh mein hai usko din dogani taraki do lambi aayu dena aur uski raksha karna.\n\n"+
    "Jai hanuman ji ki."
},
{
  id: 48,
  header: "AASHIRWAD",
  question: 
    "JAI SHREE RAM\n"+
    "meri ek beti hai. Meri wife aisi problem se ghiri hai Ki Dr. Ne bola hai Ki an usko bachha nahi hoga. Hum chahtey hai Ki hum logo ko hanuman ji kripa Kr k ek gunvan putra de. Hum hanuman ji ki krippa pane ko lalayit jai ...kripya Marg Darshan karey ..."
},
{
  id: 49,
  header: "Aasurah se kaise bache",
  question: 
    "Continued from # 499695\n\n"+
    "Aasurah se koi v kaise Bach skta h ...mai jaanti Hu Ki iss kalyog m aasurah se Bach pana bahut mushkil h pr fir v hamesha hmlog aasurah ko apne upper hawi toh nai hone de sakte h n.... Aur kaun sa kaam surah ne kiya h aur kaun sa kaam hamne khud kiya h wo kaise pahchan skte h ...\n\n",
  answer:
    "यह तो आप आत्मज्ञान से ही पहचान सकते हैं कि कोई कार्य सुर-असुरों ने किया है या स्वयं आपने | असुरो को भगाने के लिए अपने कर्म सात्विक करें ताकि सुर आपकी देह-मन में आयें और असुर उन सुरों को देखकर भाग जाएँ | असुर भागने के बाद आप सुरों से आसानी से निजात पा सकती हैं |"
},
{
  id: 50,
  header: "Aatam Darshan",
  question: 
    "Mai Shri Hanumanji ki puja me Dhayn lagane ki koshish karta hoo magar mera maan puja ki jagah sansar ke anya kriya kalapo me lag jata hai puja sai dhyan hat jata hai mai koshish karta hoo ki maan mai hanuman ji ke alawa aur kahi nahi bhatke magar aisa hota nahi hai krapya mujhe maan ko akagre karne ka upaye bataye. jis se ki mera dhyan kahi aur nahi bhatke aur meri jo shri hanuman ji ke prati sraddha hai usme koi badha utpaan na ho.\n"+
    "Karm Ka Bodh Sabdh Se Kya Abhiprya Hai Mai Shri Hanuman ji ke Shri Charno Me Ek Chota Sa Arpan Karna Chata Hoo.\n"+
    "Kintu Mere Pass Credit & Debit Card Nahi Hai Krapya Arpan Shri Bhagwan Ke Shri Charno Me Pahuchane Ka Upaya Bataye Dhanyawad",
  answer:
    "निम्न 4 बातों का ख्याल रखें -\n"+
    "(1) आप में अपने लक्ष्य को पूरा करने की तीव्र इच्छा होनी चाहिए |\n"+
    "(2) उन इच्छाओं को पूरा करने के लिए आवश्यक प्रयास करें अन्यथा आपकी आत्मा उन लक्ष्यों को इस संसार में पूरा करने की बजाय स्वपन लोक में पूरे कर लेगी |\n"+
    "(3) अपने दिल दिमाग में “भय” “चिंता” आदि नाम के असुरों को जगह न बनाने दे अन्यथा हनुमान जी को लगेगा कि आप उनकी बजाय असुरों को अपने दिल दिमाग में रखना पसंद करते हैं | बाधाएं दूर करने के लिए हनुमान जी की सहायता प्राप्त करने के लिय यह अति आवश्यक है |\n"+
    "(4) अपनी प्रार्थना को सरल रखें | अपनी प्रार्थना अपने और प्रभु के बीच रहने दें उसमे आप परिवार , समाज तथा अन्य लोगो को शामिल न करें | सही प्रार्थना - “हे प्रभु मेरी आवश्यकताए पूरी करें ताकि मै मोक्ष के मार्ग पर चल सकूँ |” गलत प्रार्थना - “मेरे जीवन में फलां व्यक्ति को ले आयें , मेरे परिवार को ऐसा करें , मेरे समाज को ऐसा करें|” आप जितने लोगो को अपनी प्रार्थना में शामिल करेंगे उतने लोगो के कर्म रोड़ा बनते जायेंगे | आपके कर्मों के रोड़े काफी हैं , किसी अन्य के रोड़े मत लायें | जब आपकी इच्छा पूरी होगी तो आपके आस पास के लोगो को खुद ब खुद सहायता मिलेगी |\n"+
    "---\n"+
    "अर्पण किसी भी मंदिर में किया जा सकता है जहाँ वानर हों |"
},
{
  id: 51,
  header: "AATMA GAYAN",
  question: 
    "HEY BAJRANGBALI MAI ISH JIVAN ME SARE UNEDUCATED LOGO KO AAP K OR BHAGWAN RAM K BARE ME BATANA CHAHTA HOON. JAISE HUM KAHA SE AAYE, HUME KYA KARNA CHAHIYE, BHAGWAN KI PRAPTI KAISE HOTI HAI. MUJHE IN SAB KA GAYAN DIJIYE BHAGWAN OR TAKAT , TAKI MAI ISH SANDESH KO HAR LOGO TAK PAHUCHA SAKU OR SAB K JIVAN K DUKH OR DARD KA NIWARAN KAR SAKU. JAI SHRI RAM ,. JAI BAJRANJBALI."
},
{
  id: 52,
  header: "About 33 Crore Surrahs",
  question: 
    "Please clarify if the 33 crore Surrahs include Pavandev, Varundev, Kaamdev, Rati Devi, etc.\n"+
    "If yes, please enlighten me if they could be worshipped and summoned if in any way for fulfilment of materialistic desires.\n"+
    "If not, then please enlighten me with some names of Surrahs and if they could be worshipped and summonned for fulfillment of materialistic desires.\n"+
    "Jai Shri Raam.",
    answer:
    "Divine Soul,\n\n"+
    "No, they are not Surrahs. They are Devas.\n\n"+
    "Surrahs are only bound by their curse. And the curse is that they seek only positives. When there is any opportunity to enjoy a positive in a body, then only they enter they body. And they flee as soon as they experience the positive. There is no other way to summon them.\n\n"+
    "Blessings"
  },
{
  id: 53,
  header: "About Chapter 23",
  question: 
    "Jai Shri Ram,\n"+
    "with my pranam in the holy feet of my guru and respect to all the devine souls. this chapter has given a new view to what I believed earlier.I was thinking that bhagwan vishnu is the only main body who is related to all the souls in mukti sagar as well as the souls who are on their journeys of wishes in different different loks.we all will have to be connected to him only after completion of these journeys.so in the same way I was practicing to limit my wishes and trying concentrate in bhagwan vishnu.\n"+
    "but this new concept of 'I am Parmatma' has changed something in me as told in the chapter that even Brahma, Vishnu and Mahesh are also images of Parmatma.So If I am not wrong then Brahma,Vishnu and Mahesh are not separate, not even a single soul.Parmatma is the only main body from which this universe has been born.different different task have been assigned to the different souls.these souls help to each other as and when required.\n"+
    "my knowledge and vocabulary is very limited.please try to understand this turbulance of thoughts in me and show me the ray of knowledge if permitted by my guru.\n"+
    "Jai Shri ram.",
    answer:
    "Divine Soul,\n"+
    "Your words suggest that you are trying to imagine/understand Paramatma. As it is said in chapter 23, there is nothing wrong in imagining about Paramatma provided that imagination promises to take you towards the experience of \"I am Paramatma\".\n\n"+
    "Whatever you have deduced and then expressed through these words won't help you drift towards the experience of \"I am Paramatma.\" \"Main Body\", \"Universe born from...\" etc. imaginations shouldn't be encouraged. Use only and only the imaginations told in the chapter 23. May be Lord Hanuman will expound on it in upcoming chapters. But for now, just use the \"Mirror and Reflection\" imagination. Don't let your mind stray you away from the path Lord Hanuman wants you to take.\n\n"+
    "Blessings"
  },
  {
  id: 54,
  header: "About the chapter 8",
  question: 
    "Hello my dear brothers and sisters of setuu community,\n"+
    "In chapter 8, Setuu organisation gave a note saying only blessed souls can understand it. Dont doubt yourself here. Coming to know this organisation itself is a blessing. JUST HAVE FAITH ON LORD HANUMAN. U WILL UNDERSTAND IT. If you didnt understand any part, patiently read it from beginning. I was afraid to read it. But somehow i read it today. This was my experience.\n"+
    "Caution: Dont read after u indulged in any worldy activity. Your chances to understand the chapter will decrease.\n"+
    "I hope i did not hurt the organisation. If i did so please delete this entry."
  },
  {
  id: 55,
  header: "About Chapter 23",
  question: 
    "Jai Shri Ram,\n"+
    "with my pranam in the holy feet of my guru and respect to all the devine souls. this chapter has given a new view to what I believed earlier.I was thinking that bhagwan vishnu is the only main body who is related to all the souls in mukti sagar as well as the souls who are on their journeys of wishes in different different loks.we all will have to be connected to him only after completion of these journeys.so in the same way I was practicing to limit my wishes and trying concentrate in bhagwan vishnu.\n"+
    "but this new concept of 'I am Parmatma' has changed something in me as told in the chapter that even Brahma, Vishnu and Mahesh are also images of Parmatma.So If I am not wrong then Brahma,Vishnu and Mahesh are not separate, not even a single soul.Parmatma is the only main body from which this universe has been born.different different task have been assigned to the different souls.these souls help to each other as and when required.\n"+
    "my knowledge and vocabulary is very limited.please try to understand this turbulance of thoughts in me and show me the ray of knowledge if permitted by my guru.\n"+
    "Jai Shri ram.",
    answer:
    "Divine Soul,\n"+
    "Your words suggest that you are trying to imagine/understand Paramatma. As it is said in chapter 23, there is nothing wrong in imagining about Paramatma provided that imagination promises to take you towards the experience of \"I am Paramatma\".\n\n"+
    "Whatever you have deduced and then expressed through these words won't help you drift towards the experience of \"I am Paramatma.\" \"Main Body\", \"Universe born from...\" etc. imaginations shouldn't be encouraged. Use only and only the imaginations told in the chapter 23. May be Lord Hanuman will expound on it in upcoming chapters. But for now, just use the \"Mirror and Reflection\" imagination. Don't let your mind stray you away from the path Lord Hanuman wants you to take.\n\n"+
    "Blessings"
  },
  {
  id: 56,
  header: "About dreams",
  question: 
    "Jai shree ram.. Jai hanuman ..\n"+
    "Namaste setuu masters and mathangs\n"+
    "i sometimes experience that i have seen this moment which i am experiencing in dream. I was searching for a enlightened person to ask this. But in mainstream society i did not find one. last month also it happened i went to lord hanuman temple on Tuesday after taking prasadam i went to nearby school and washed my hands going to hand pump there.\n"+
    "That moment i had a feeling that I had experienced it in dream.\n"+
    "Many a times this has happened to me. I want to ask lord hanuman through you setuu mastersas to what is the reason for this.\n"+
    "jai shree ram",
    answer:
    "Divine Soul,\n\n"+
    "Having read all the chapters sincerely, Lord Hanuman would be happy if you gave your insights too on this matter. Why do you think it happens? If you keep categorizing yourself as unenlightened and keep searching 'others who are enlightened', you shall never get enlightened. Lord Hanuman wants you to realize your own inner powers. Think of yourself as an enlightened being who is temporarily under the veil of ignorance.\n\n"+
    "This kind of experiences are experienced by those who are guided by an invisible Guru. These experiences help a seeker see the internal world and get out of clutches of the external world. You are blessed that you are being guided by an invisible Guru.\n\n"+
    "Blessings"
  },
  {
  id: 57,
  header: "About Ganga river",
  question: 
    "My bow to the Holy Lord Hanuman ji...\n"+
    "In the mathang story,Mathang connected with Ganga mata and he got purified or nullified his karma..how i connect my soul with ganga mata to nullify my karma???can i take bath in ganga river to nullify my karma????is it a good way or any other way are there???pls let me know.",
    answer:
    "Divine Soul,\n"+
    "Bring your soul near Goddess Ganga, not the body. Bathing is concerned with body, not soul.\n\n"+
    "You can meditate on God better inside a temple. Similarly, you may meditate better on Goddess Ganga when you take a dip. That is the only advantage of taking bath in Ganga river. That is not necessary. You should read the chapter and contemplate on the knowledge enshrined in the chapter. Then only your soul can reach near Goddess Ganga.\n\n"+
    "Blessings"
  },
  {
  id: 58,
  header: "About God",
  question: 
    "Main aapke is prakaar k project se bahut hi khus hoo..\n"+
    "Aap un matang jaati ki dainik jeevan k baare me aur bataa paye to aur aacchaaaa hogaaa.\n\n"+
    "Main ye puchanaa chataa thaa...k\n\n"+
    ".\n"+
    ".\n"+
    "Bhagwan hanumaan kaise dikhate h...kyaa wo vaise hi kapade pahnte h ...jaise tasveero..tv programo m dikhaye jaate h.. ?yaaa..vartmaan yug k ...? kyaa bhagwaan aaj bhi un mandiro mein h jahaa bhagwan k naam pe bisness chalte h....yaa yahi apne pavitra dil mein,apne ghar mein. ..? Thank you....koi galti hui ho to maaf karnaaa.",
    answer:
    "आत्म स्वरुप ,\n"+
    "श्री हनुमान योगिक शक्तियों से विभिन्न रूप धारण कर सकते हैं। जो रूप उनका नश्वर संसार में प्रचलित है वह उनके अनगिनत रूपों में से एक है।\n"+
    "मंगल कामनाएं।"
  },
  {
  id: 59,
  header: "ABOUT INDIA(BHARAT)",
  question: 
    "Jai Hanuman ji\n"+
    "If we talk about the SANATAN DHARMA then it includes Lord VISHNU,SHIVA and BRAMHAN,and INDIA TALKS ABOUT these GODS.\m"+
    "when we come to incarnation of god then it happens in country India.for example\n"+
    "Lord RAM takes birth in India\n"+
    "Devi GANGA (river) related to India\n"+
    "Lord KRISHNA takes birth in MATHURA city(India) and many more.\n"+
    "I just want to know why INDIA,why not other countries.\n"+
    "What is this important about my country INDIA.\n"+
    "one more question\n"+
    "If we know this earth is going to be destroy then how we can save it or we can't.we know we people are responsible for this then we can save it also\n"+
    "||RAM||",
    answer:
    "Divine Soul,\n\n"+
    "At the time of taking birth, your soul chooses the best parents, best country and best culture where it can fulfill its desires. If your soul has chosen your country as India, that means your desire is to get Moksha. Some people forget purpose of their life and live an ordinary life. But some people get reminded of their purpose at some point of life and pursue Moksha, and then they realize why they took birth in India.\n\n"+
    "Yes, you can try to save. There are two kind of forces present at any time - The destroyer and the preserver, The progressive and the conservative. This world is all about opposites. Conservative people have always been there and have tried to conserve the planet. If you are conservative, you should follow your Dharma and try to conserve,\n\n"+
    "Blessings"
  },
  {
  id: 60,
  header: "About Lord hanuman",
  question: 
    "Every time I read this, my mind feels with immense peace of mind. Thank you so much for providing such beautiful conversation which is filled with lot of respect and love between all those who are involved in this. I have few queries, i would be grateful if you could get answers from Mathang community or someone knowledgeable :-\n\n"+
    "1. In Ramayana, Lord Shri Ram blessed Lord Hanuman saying you will exist till the end of this world. This is true, which we can see here from Setuu initiatives and from Mathang community then where our beloved Lord hanuman stays all those days when Lord hanuman are not between us or not between Mathangs? Also, are they really present in hanuman temple across the globe every saturday when we perform aarti ritual to Lord Hanuman?\n\n"+
    "2. I wish to personally connect with Setuu initiative and mathang community. I am an engineer and have tremendous interest in such spiritual activities. I will be highly obliged to serve Lord Hanuman and be a part of such divine community. I am looking forward to hear from you soon from the bottom of my heart. Thank you very much and God bless you.\n\n",
    answer:
    "Divine Soul,\n"+
    "In mainstream society, human beings have a very limited view of \"world\". They think what they see and experience is the only world. They spend their lives in that limited realm of space and time where they have named everything like \"office\", \"home\", \"earth\", \"sky\" etc etc. When one breaks all the blockages of minds, one realizes that there are infinite number of parallel worlds. What human beings of mainstream society see and experience is just one world out of infinite number of worlds. For example, if you see a beggar in front of you. That person is beggar in this world. There exists a parallel world where he is king. Lord Hanuman is a Yogi. Greatest Yogi in fact. He can exist in multiple worlds at the same time. When you will see the bigger picture, you will realize that \"Time\" itself has no meaning in the perspective of multiple universes. Lord Hanuman exists within time as well as beyond time. In our world also, He can exist at multiple places at the same time. A Siddha Yogi becomes like an atomic particle which can exist at multiple coordinates at the same time.\n\n"+
    "Once you have your primary blockages cleared, you can come to join our Sadhna Kendram in the foothills of Piduru mountain. But to clear primary blockages you first must realize Lord Hanuman as your Guru. Then He will show you the way as to how to contribute to this holy cause. Everyone has a role to play in this transformation phase of this world.\n\n"+
    "Blessings"
  },
  {
  id: 61,
  header: "About Me",
  question: 
    "jai shree ram . Main apni kam- vasna yukt bhavnao pr control krna chahta hu. pr kr nhi pata hu . Real m main yog vidhya seekhna chahta hu but apni maa aur papa ko hurt b nhi krna chahta. Main koan hu , m mera man nhi hu , m apni budhi nhi hu, m meri aatma nhi hu, m mera shareer nhi hu , to fir m koan hu, kripa kr k margdashan kare.\n"
  },
    {
  id: 62,
  header: "About my experience",
  question: 
    "after i was started to reading HANUMAN CHALIS , i observed somone is protecting from the evil things .. And inwas introduced abt sethu hanuman from my friend.. And i feeling now is something inner story about life cycle And immortal power , about lokha s and the future happenings .. I wish to ask with my lord to fullfilled my dreams and do protect from asshuras and evil happenings , and take my soul for moksha .. Thanking you and ji hanuman"
  },
    {
  id: 63,
  header: "About God",
  question: 
    "Main aapke is prakaar k project se bahut hi khus hoo..\n"+
    "Aap un matang jaati ki dainik jeevan k baare me aur bataa paye to aur aacchaaaa hogaaa.\n\n"+
    "Main ye puchanaa chataa thaa...k\n\n"+
    ".\n"+
    ".\n"+
    "Bhagwan hanumaan kaise dikhate h...kyaa wo vaise hi kapade pahnte h ...jaise tasveero..tv programo m dikhaye jaate h.. ?yaaa..vartmaan yug k ...? kyaa bhagwaan aaj bhi un mandiro mein h jahaa bhagwan k naam pe bisness chalte h....yaa yahi apne pavitra dil mein,apne ghar mein. ..? Thank you....koi galti hui ho to maaf karnaaa.",
    answer:
    "आत्म स्वरुप ,\n"+
    "श्री हनुमान योगिक शक्तियों से विभिन्न रूप धारण कर सकते हैं। जो रूप उनका नश्वर संसार में प्रचलित है वह उनके अनगिनत रूपों में से एक है।\n"+
    "मंगल कामनाएं।"
  },
    {
  id: 64,
  header: "About my mother",
  question: 
    "I do pray god every day but my mother health is not well from so many years, sometimes she feel good sometimes she feel that someone is talking to her and she see someone present in her room, but know one present there, she scold bad words taken the names of our relatives so please tell me what is the solution for this , and also we taken her to doctor psychairtist he told she his suffering with the rare disease so plz tell me any solution for this problem to totally get well .\n",
    answer:
    "--- conveyed to Lord ---"
  },
  {
  id: 65,
  header: "about my sister",
  question: 
    "sir,\n"+
    "my sister is mentally retarded she will also get seizures regularly.after reading the chapter of urmi's cure of seizure, i m also thinking dat might be the cause of my sister (i.e unfullfilled desires) .but my sis can understand all what we are saying.but shez having afraidness to talk and walk.\n\n"+
    "can she get cured????",
  answer:
    "Divine Soul, A prayer has been initiated. She will be cured if the Karmas allow. The minimum requirement for Ashwins to visit her is that people around her should stop cursing themselves or her. Her soul has taken this body-mind for a purpose. All of your family members must realize that. That purpose is not only related to her soul journey but also related to soul journey of some or all of your family members. Stop cursing and allow Ashwins to visit her. Do not take her to charlatans etc who claim to have a miraculous remedy. Let her soul fulfill the purpose of taking this body-mind. Blessings"
  },
  {
  id: 66,
  header: "About Siddhis",
  question: 
    "hiii...\n"+
    "I have A doubt about siddhis..can normal human being achieve 8 siddhis and 9 Nidhis like lord Hanuman....and also lord have the power of flying in air...can human achieve that power or art....\n"+
    "for achieving all that type of power plz guide me...i will do all that what required to achieve that...\n"+
    "may be you think that i am joking or kidding.. but no i am very serious.about that....plz guide me.. plz tell this all to lord at sakshat Hanuman poja...and plz trust me ..plz note that i am not compairing myself with lord...i just want to know..bcoz lord is infinity and i am just negligible...\n",
  answer:
    "Divine Soul,\n\n"+
    "First of all you need to realize your soul. That means you should be able to detach completely from your body. Then only you can become a Sadhaka and then only you can begin your journey to be a Siddha.\n\n"+
    "Blessings"
  },
  {
  id: 67,
  header: "Accompanying with Jnanis or Englightened people",
  question: 
    "Query : Attaining Moksha in this life. I am a family person busy with job and taking care of my family. In these days it is very difficult to get associated with saintly person who speak regarding god and share experiences with each other to cross the hurdles in attaining moksha. Will god help me to place me in an environment where I interact with them and obtain my objective in this life itself.What should I do to get associated with such noble souls who have traversed these path.I want to continue my current family life and at the same time following the path which will lead me to moksha.\n\n"+
    "- Om Sai Ram",
  answer:
    "Divine Soul,\n\n"+
    "Become a seeker first. Seek the supreme truth instead of seeking the people/guru. When you seek truth and seek it ardently, a Guru will walk into your life automatically. That Guru can be one person/group of people/invisible being/or life itself.\n\n"+
    "Blessings"
  },
    {
  id: 68,
  header: "Adhyay ka adhya",
  question: 
    "जय श्री राम जय मेरे गुरु हनुमान जी के चरणों में कोटि कोटि प्रणाम सेतु संतो के चरणो में प्रणाम\n"+
    "पिछले प्रश्न का जबाब देने के लिए धन्यबाद"+
    "एक प्रश्न मेरे मन में है क्या सभी अध्यायों का एक बार अध्यन करने के बाद हम किसी भी अध्याय का बीच में अध्यन कर सकते है या सभी अध्याय सुरुआत से अध्यन करने होंगे क्रपया मार्ग दरसन करे"+
    "राम राम राम राम",
  answer:
    "दिव्य आत्मस्वरूप ,\n\n"+
    "एक बार अध्ययन करने के पश्चात् कोई भी अध्याय कभी भी पढ़ा जा सकता है |\n\n"+
    "||राम||"
  },
    {
  id: 69,
  header: "Adishakti, Lord Hanuman and Bhagwan Sri Sathya Sai Baba",
  question: 
    "After reading the chapters,we felt very happy. Me and my family members got to know about a different world, untouched by modern communication and the effects of the 21st century.\n"+
    "My question is\n"+
    ":1) Is Adishakti the Supreme Power who creates all the other Gods and Goddesses and the innumerable creatures in this Universe ?\n"+
    "2) Does Lord Hanuman ever speak about to the Mathangs about Bhagwan Sri Sathya Sai Baba, who is the most powerful incarnation of God ever to come on Earth, and who is Adishakti Herself ? Does Lord Hanuman tell the Mathangs about the leelas of Baba ?\n"+
    "3) Many of my friends are immersed in the world, don't ever call God, nor do they practise any spiritual disciplines. They also consume non vegetarian food. I feel very bad when I see them thus lost in the materialistic world. How can I help them turn towards spirituality, so that they can be saved from the effects of the this world ?\n"+
    "4) I have a strong attraction for the Divine Mother. My soul wishes that when I leave this body, I do not want moksha, but I want to be a handmaiden of the Divine Mother Adishakti, and remain as such. I feel an unspeakable and strange affection for the Mother Goddess. Is this because I maybe one of the handmaidens of the Mother Durga, or is it just coincidence ?",
  answer:
    "Divine Soul,\n\n"+
    "(1) Yes, Lord Brahma, Vishnu and Shiva merge in a single power. To know that power, please wait for upcoming chapter. Lord Hanuman will first describe all the powers of this universe and then will take us to the origin of it all\n\n"+
    "(2) If Lord Hanuman has spoken about Baba, it will appear in upcoming chapters.'\n\n"+
    "(3) The universe acknowledges your empathy towards your friends. What all matters is the efforts made by you.\n\n"+
    "(4) To be a good servant, one must know the master and His/Her palace well. To be handmaiden of AdiShakti you need to know how all the powers of this universe work.\n\n"+
    "Blessings"
  },
    {
  id: 70,
  header: "Aditya Kumar",
  question: 
    "my lords hanumaan ji hai aur mujhe har pal hanumaan ji ki kripa mahsus hoti hai aur ye main apne aap ko khusnasib manta hu\n"
  },
    {
  id: 71,
  header: "राम # after reading 13 chapter feeling",
  question: 
    "I ws watching mata vaishno devi live bhajan on t.v dis evening..Nd meditating Ram in mind..felt some kind of vibration in mind therefore closed my eyes..Nd begun to think about only Ram..I felt some vibes connected with mind vibrations..soon felt like weightless..there was nothing except vibes in mind..Those outer vibes pulled inner vibes out of mind through head..I felt as if going out of me, Myself.. I got scared nd opened eye..\n"+
    "feeling so light..\n"+
    "What ws dat?..I don't know..I hv no clue about dat..\n\n"+
    "yet it feels I know Wt it is..\n\n"+
    "I hv asked earlier too..Wt exactly these feelings r..I hv questions..BT it feels I know answer too..whereas I don't know...Ummm I know BT Wt!!??!! Plz convey..soul bhakti to lord hanuman ji"+
    "RAM"
  },
    {
  id: 72,
  header: "after reading 1st chapter",
  question: 
    "After reading 1st chapter of my loving lord Hanuman ji i am so impressed,and feeling peace . which is pleasant surprice for me.Hanuman ji done a great job.He teaches us every truth of universe which is very helpful to human being.\n"+
    "as i know, i want to know all information about my loving lord Hanuman.for that i daily search on internet to get validate or true story about my lord.i know that the our holy lord Hanuman ji is immortal and after reading this i know that the recently my lord came to sri lanka at padhra mountain for giving \"Aatma Gyan\" to tribals .due to that i am so happy knowing my lord realiy give darshan to human."+
    "and my wish is to meet my lord As soon as possible.\n"+
    "as you told that for meetig my lord there is held a relationship between me and my lord.i agree that and you also tell that for making relationahip you need to read this stories and make fathe on lord.i also agree that, but tell mi that that how i know that there is held relationship between me and my lord after reading this stories and make pray to my lord and how time i need for that.plzzzz telll me. i am really fan (great bhakta) of my loving lord Hanuman.am so happy i know my lord meet me soon..(My loving DADA)",
  answer:
    "Divine Soul,\n\n"+
    "The realization can happen even a single moment. It all depends on you. You should not worry about the time it takes. You should just try to remove the layers of illusion from your soul. Then you will realize your relationship with the Lord. When you rise above all the confusions, you will know your relationship with Lord. Imagine you are looking in a water pond. The water is shaking. Your image is not clearly visible in the water pond. When the water becomes calm, you will see your image in the pond.\n\n"+
    "Blessings"
  },
    {
  id: 73,
  header: "After reading 8 chapters posted so far",
  question: 
    "Jai Shree Ram\n"+
    "Jai Jaanki Mata\n"+
    "Jai Hanuman\n"+
    "My sincere pranam to Mathangs and Setuu Masters. I must say team Setuu is doing a great job by connecting the modern world with lord Hanuman. Your work is worth praising. Truly speaking, I lack words in praising and thanking you. Had you people been not there, people like me would not have been able to connect to lord Hanuman this way and we would not have been getting the Brahm Gyan which lord Hanuman imparted to Mathangs. Really, I thank you from the core of my heart. I must say I am just fond of this website. I visit it many times a day. Whenever I am free or whenever I just feel sad or depressed, I just visit this website. After visiting it, automatically a feeling comes from inside that nothing bad can happen with me when lord Hanuman is with me. He is always there to help and protect me whatever the situation is.\n\n"+
    "I have read all the 8 chapters posted so far many times.\n\n"+
    "Chapter 1 is all about illusions i.e. bad illusion and good illusion. Whatever we see is fake. In one world one is sad. At the same time, in other world, the same person is happy. Only lord Hanuman is reality and the Brahm Gyan imparted by him is reality.\n\n"+
    "Chapter 2 is all about devils i.e. devil of anger, devil of revenge, devil of worries and many other devils. How our mind is captured by these devils and how our decisions and behaviour get changed with the presence of these devils. We should not allow these devils to sit in our mind.\n\n"+
    "Chapter 3 is all about the nature of time. How we always keep on moving forward. We seem to be sitting or sleeping but actually we are moving forward on the conveyer belt of time which always move in the forward direction.\n\n"+
    "Chapter 4 is all about Soul, Moksh, desires, Vishnulok, Brahmlok and Swapnlok. How souls get out of Mukgtisagar with the help of Brahmaji. How souls get desires. How souls go to Swapnlok to fulfill their desires.\n\n"+
    "Chapter 5 is about souls changing bodies. Souls can change bodies just like we change clothes. Souls can change bodies to fulfill their desires.\n\n"+
    "Chapter 6 is about Kalp, Yug, Surrahs and Asurahs. How surrahs and asurrahs use our body to fulfill their desires. We should not allow them to use our bodies. This chapter tells about the transformation from one yug to another. How the world which seems to be today got created.\n\n"+
    "Chapter 7 is about making Arpanam. How our karma affects our arpanam. Our arpanam must not be influenced by surrahs or asurrahs. It must belong to soul. To a human the Sun seems to be sun, but to a monkey it is a fruit (Cheeranjivi Fal).\n\n"+
    "Chapter 8 debunks the popular myth that Makardhwaja was the son of lord Hanuman. It also tells about Paatal. How demon Guru Shukracharya tried to abduct lord Ram and Lakshman and send them to paatal and captivate them in infinite illusion. But lord Hanuman didn't let it happen.\n\n"+
    "Before reading Chapter 8, I just read the Prohibitory note. First, I thought whether I have understood all the previous chapters completely. Then, after a brief pause, an answer came from my inside yes I have and then I started reading chapter 8. After going through all the 8 chapters posted so far, I must say I have gained some Brahm Gyan. No, I am not saying that now I have become very learned and I know very much. But now I have known some reality. I know something which has been taught to me by lord Hanuman. Now, at least I know what we see is not reality. Reality is something different.\n\n"+
    "After going through Setuu's note at the end of Chapter 8 that Makardhwaja was not Lord Hanuman's son. If you have understood it, you are one of few blessed souls in this age of ignorance. I really don't have words to express my feelings. I really lack words to express my feelings after hearing such words for me. I felt very lighter.\n\n"+
    "I wait for the next chapters very anxiously. I want to know what all lord Hanuman did in his recent visit to Mathangs in 2014. Every time I just hope next chapter come soon.\n\n"+
    "I really feel that I am a blessed soul and I have the blessings of lord Hanuman that I got connected to Setuu and Mathangs. Also, I have the priviedge to take part in Charan Pooja which happens once in 41 years and Sakshat Hanuman Pooja.\n\n"+
    "Right now I am going through a very tough phase of life. I am looking for a good permanent job. Many a times I become sad after failures in getting a good job but I don't get disheartened. I think lord Hanuman is testing me. I have full faith in my lord Hanuman. I am damn sure very soon he will give me a very good permanent job and all my problems will vanish very soon with the blessings of lord Hanuman.\n\n"+
    "\"O lord Hanuman, please fulfill my wishes.\"\n"+
    "Prabhu please keep your blessings on me forever and fogive me for my sins of this birth and previous births too and help me settle all my karma and move towards Moksh.\n\n"+
    "Thank you Mathangs\n"+
    "Thank you setuu\n"+
    "Regards"
  },
    {
  id: 74,
  header: "Aim of life",
  question: 
    "Jai Shree Ram\n"+
    "Jai Bajrangbali\n"+
    "Thank you setu asia for connecting us with Lord Hanuman.\n\n"+
    "I am a regular visitor of your site. I always visit your site in want of getting new and knowledgeable things. Moreover, I want to know more and more about Lord Hanuman. I have gone through almost each and every word posted on your website.\n\n"+
    "Somewhere on your website I read about aim of life or something related to it. It was written everyone has a role to play in this world. My query is related to this only.\n\n"+
    "What's the aim of our life? Why are we born? Whatever we do in our life it is done by us or it is controlled by God? We do it or God make us do it? These are some of the questions which always come to my mind.\n\n"+
    "Sometimes we get what we want and say that God is with us. While sometimes we get more than what we desire. We say that God is happy with us. On the other hand sometimes we don't get what we want and we say God is not with us at this very time or it is agsinst God's will. Sometimes something bad happens with us and we say that right now God is angry with us. In all the above mentioned scenarios we see that everything is connected with God. Is it really so?\n\n"+
    "I really want to know why I am born? What's the real aim of my life? Why has God sent me to earth? What role he wants me to play?\n\n"+
    "Growing up, studying, getting a good job, marrying , settling and looking after parents are certainly not the real things for which God has sent us on earth as I think. Is it so? I may be wrong too.\n\n"+
    "I really want to know what I am doing in my life is the same what God wants me to do or what I am doing is against God's will. I really want to do what God wants me to do. But I don't know what God wants me to do.\n\n"+
    "Right now I am working in a reputed software company rather my training is going on. But I am struggling hard to save my job. I got this job some 3 months back by God's grace. Initially, I didn't want to join this job as it was different from my field. But later I joined thinking it's God's will. I accepted what God gave me. But now I am really struggling hard to save it. I don't know whether it's God's will or I didn't work hard or some other thing. But whatever happens I will accept it as God's will and think God must have planned something better than this for me. I have full faith on my God.\n\n"+
    "Please show me the way so that I always do what God has thought for me.\n\n"+
    "Thanks and Regards.",
  answer:
    "Divine Soul,\n\n"+
    "\"Why was I born\"--- chapter 4 answers this question partly. There is no ready-made answer for this question. Actually there is no answer for this question. There is only realization, no answer. If you have found answer of this question, that is definitely a wrong answer. Lord Hanuman's Leelas will help you realize the absolute truth.\n\n"+
    "Now-- \"whether what I am doing is what God wants me to do?\"--- To know this you have to see your actions from point of view of God. Is it possible for you to go near God? Yes, you can. There is only one way to go near God. Chase the question, \"Who am I\". If your answer is, I am a boy named this and that. Then think whether this answer is correct. No. Then move ahead. Are you your mind? Are you your intellect? Are you your Chitt? Are you your soul?\n\n"+
    "If you do not stop anywhere, you will reach a point which is nearest to God. Watch yourself from that point. Watch your actions from that point. Whatever your body and mind do while you watch your body and mind from that highest point, will be what God wants you to do.\n\n"+
    "Blessings"
  },
    {
  id: 75,
  header: "All about devotions and Love to God, Ishwar, Prabhu Shri Ram",
  question: 
    "dear Prabhudhhas\n\n"+
    "very first it is a Nobel way to pray, worship Lord Shri Hanuman. and feeling grateful of being a reader of this unique way to do pray and worship.\n"+
    "I am feeling fearless comparatively."
  },
    {
  id: 76,
  header: "Allah",
  question: 
    "Hi!\n"+
    "As a Muslim, i wanted to know- who is Allah? Some websites mentioned Lord Shiva as Allah. Is it true? Ram\n",
  answer:
    "Divine Soul,\n\n"+
    "Consider this analogy.\n\n"+
    "Suppose you are running on a track to reach Moksha or absolute destination. ('Reaching' is not right word to use with Moksha but we can use it just for the sake of this analogy.) From that track you are not able to see your destination but you are able to see/experience some other things/beings/powers. You learn that those things/beings/powers are called Shiva, Vishnu, Brahma, Hanuman and so on.\n\n"+
    "Now there is another track parallel to yours. Another person (Lets call him 'M') is running on that track. He also cannot see his destination. But he can see/experience some other powers and he calls them Allah, Koran etc.\n\n"+
    "Both of you are happily running on your respective tracks and hope to reach the final destination.\n\n"+
    "The illusion/Maya is watching both of you from the sky. (Just an analogy, Maya doesn't live in sky. She is everywhere.) She doesn't want any of you to reach your destination. She plays a trick. She manages to put a thought in mind of 'M'. M gets desire to chat with you so that he can pass time while moving towards his destination. M says, \"Hey whats up... What do you see in front of you?\""+
    "You reply, \"I see Shiva.\"\n\n"+
    "M says, \"It seems you are on a wrong track... Because I see Allah... and I am pretty sure that I am on right track.\"\n\n"+
    "Then you try to convince him that he is on wrong track, not you.\n\n"+
    "Finally both of you deviate from your path. You leave the correct path without even realizing.\n\n"+
    "'M' starts walking on a path where the destination is 'Convincing you', not 'Moksha' or ultimate destination.\n\n"+
    "You also start walking on a path where the destination is 'Convincing M' and not Moksha.\n\n"+
    "Maya manages to deviate both of you simply by playing one trick.\n\n"+
    "The moment you start comparing your experiences with the experiences of people running on other tracks, you get deviated.\n\n"+
    "So, comparing Shiva and Allah is walking in trap of Maya.\n\n"+
    "Follow only one Guru/system/path which suits you. No comparisons with other paths/Gurus/systems.\n\n"+
    "Blessings"
  },
  {
  id: 77,
  header: "Am I really communicating with Hanumanji?",
  question: 
    "More than me communicating, my thoughts seem to be clearer. What we see is only temporary and it is only a perception. Reality is something very different. Perceptions change but truth doesn't."
  },
  {
  id: 78,
  header: "Am very restless in life.",
  question: 
    "Dear Hanumanji,\n"+
    "Why am I not having any mental peace ?? There is a constant turmoil in my mind.\n"+
    "I request you to please bless me with your Grace so that I gain mental peace and happiness from now on.\n"+
    "Please bless me.\n"+
    "Yours Obediently,\n"+
    "Nagi Narayanan."
  },
  {
  id: 79,
  header: "Amazing",
  question: 
    "this was story was amazing to me.\n\n"+
    "I would like to know the path to moksh.\n\n"+
    "regards,\n"+
    "amit",
  answer:
    "Divine Soul,\n\n"+
    "Only a Guru can show you the path of Moksha. Make Lord Hanuman your Guru. Have full faith in Him. He is Guru of Mathangs. He comes to give them Brahma Gnan every 41 years. Read every incident which took place when He came. Read every chapter which we post here. The BrahmaGnana which He imparted to Mathangs will be imparted to you as well if you consider Him as your Guru. BrahmaGanan is the light on the way of Moksha. When it enlightens the path, you will be able to see the path.\n\n"+
    "Blessings"
  },
  {
  id: 80,
  header: "Amazing.....",
  question: 
    "om hanumanthay namoh namah....\n"+
    "I am truly delighted to know about thos blog & this sensational happening....\n"+
    "now my belief in LORD HANUMAAN will be greater than ever, I just read your blog yesterday evening & rtrust me thats the best thing happened to me since very long time."+
    "I bow to you Anjaniputra to purify mu soul & provide me help I need.\n\n"+
    "God bless you for creating such a blog....\n\n"+
    "OM HANUMANTHAY NAMOH NAMAH.....\n\n"+
    "Regards\n\n"+
    "KL Bhatt"
  },
  {
  id: 81,
  header: "Amazing and Entrilled",
  question: 
    "Jai Hanuman\n\n"+
    "Reading this article gives me enthrilled that during this digital age Lord Hanuman is appearing to Mathang, Birds and other animals, speaking to him, it's really amazing to hear this. Very much excited to read the next chapters. Please notify.",
  },
  {
  id: 82,
  header: "Amazing article",
  question: 
    "Hi setu\n\n"+
    "Thank you for briging this to us it really nice to read and understand I am working in private company and having lotsbof stress but after reading this it works like stress buster for me\n\n"+
    "I have few doubt and query will write email to you",
  },
  {
  id: 83,
  header: "Ambarish Singh Verma",
  question: 
    "main hanumanji ki continue pooja karna chahta hu.. kya mue bhi darshan denge....aur muje baba matang dwara prasad mil sakta hai..\n",
  answer:
    "जब आपकी पूजा सिद्ध होगी तो आपको आत्म ज्ञान होगा। जब आत्म ज्ञान होगा तब आपको हनुमान जी दर्शन देंगे। बाबा मातंग आपको ज्ञान का प्रसाद भेज रहे हैं जो स्वयं हनुमान जी का प्रसाद है। उनके द्वारा मातंगों के बीच की गई लीला का हर अध्याय पढ़िए। वही श्री हनुमान जी का प्रसाद है।\n"+
    "मंगल कामनाएं"
  },
  {
  id: 84,
  header: "Amit",
  question: 
    "Mujhe yeh jankar bahot khushi hui hai ki shree hanuman ji aaj bhi humare beech maujud hai aur hum sab per daya aur drishti barsate hai main shree ram ji ka bahot bada bhakt hoon aur shree hanuman ji ko bhi bahot manta hoon main ek baar sri Lanka ke aeliya sita jana chahta hoon jaha shree hanuman ji har 41 saal mein ek baar aate hai aur waha jakar apne aapko moksh dena chahta hoon\n"
  },
  {
  id: 85,
  header: "Anand thengne's experience",
  question: 
    "My dear loard as I am fan of you since my childhood as yor ancient Temple is there in my farm, But from few years my track has been change and i was not so devoted or i was in the control of evil now i am at chennai doing preparation of civil service examination and want to become IPS officer and to serve for society and make a good crime free atmosphere, just 2 days ago I have seen a dream in which I was at holy place where I can see the lord and talking with him it's looks like thomb, dargha or my be Temple of any lord during that conversations I have seen that others pilgrims where making my fun and they thought I am abnormal or totally mad I'm not remembering properly. Yesterday after class for whole I was just thinking about that dream, and while reading e-news and articles on mobile accidentally somewhere I saw a news about setu and I went to setuu's website, and yesterday and today I have read and understand all the chapters now waiting for next chapters to realize shure I can say setu bring me close to my lord again... Thanks setuu thank you very much\n"
  },
  {
  id: 86,
  header: "Ancient Scriptures",
  question: 
    "Dear Setu Org\n"+
    "Since the time i read about Ram Setu leela of Lord Rama and the fact that our ancient Scriptures could be manipulated many a times in the past.As could be seen in many scriptures,There's a question constantly popping in my mind that are these scriptures reliable to read? To what extent these scriptures are manipulated? Are these reliable to know supreme knowledge?",
  answer:
    "Divine Soul,\n\n"+
    "The words of Gods have been adulterated by too many human minds. Only a realized master can absorb the words of Gods from these scriptures and filter out the human words. Therefore, if you have to read them, read under guidance of a realized Guru.\n\n"+
    "Blessings"
  },
  {
  id: 87,
  header: "Anger",
  question: 
    "Hanuman I feel very angry ,though there's limited time to react....i feel in my head that there's ample of time for me to see my reaction till my consequence... So there's a mega slow motion of negative feelings and actions I can refrain from doing...but even then my anger is just so protruding that I loose my temper n let it all out.....I feel very dissapointed wif myself now hanuman...96\n",

  },
  {
  id: 88,
  header: "Angioplasty",
  question: 
    "Dear Mataang friends\n"+
    "Please convey to Lord Hanuman that my father had angioplasty today. Pranam to Lord Hanuman and Matangs\n"+
    "Regards\n"+
    "Tamoghna Dassharma"
  },
  {
  id: 89,
  header: "Anjaneya as BHIMA",
  question: 
    "It was the year 2004 was in Moscow, Russian Federation.\n"+
    "We were talking about Lord Hanumanji frequently, and the conversation veered around to Manali and Baba Haidekhanji and His Ashram...\n"+
    "I telephoned and spoke to the Head of the Ashram , who informed me about devotees in Russia , and where the Ashram was located.\n"+
    "We made the contact with the Ashram in Siberia.\n"+
    "Booked the tickets and made the trip.\n"+
    "While in Shiva Dhaam with all other devotees of Haidekhan Babaji spent beautiful moments of Satsang and Bhajans , read a little of Adi Granth and listened to a young initiate of the Ashram a Russian lad...and spent moments of sheer bliss.\n"+
    "We decided at the Ashram to do the Havan.\n"+
    "So the spot and the preparations were made and we walked the distance from the Ashram to the spot , a distance of about 2 Km through beautiful landscape, to the spot , very close to the lakes .\n"+
    "Many lakes abound the nearest one was Lake Shani.\n"+
    "During the Havan we assembled in a circle and were singing Hymns in praise of Lord Shiva and the air was electric and filled with absolute divine bliss.\n"+
    "While the priest was offering flowers , it was one marigold that held my attention.\n"+
    "It morphed and led me deep down to a huge temple.\n"+
    "The Head Priest of the temple was Shri Sathya Sai Baba very tall , Lord Hanuman very tall and absolutely handsome, Lord Rama also very tall and many more lords and Gods gave me their blessings - and it was evident that it was Lord Hanumanji who drew and brought me to Russia and also to this beautiful Ashram and gave me this experience.\n"+
    "It was many years ago and though there were photographs taken I am not in possession of it now.\n\n"+
    "Lord Anjaneya in whom the faith belief trust IS - was in evidence in many other instances too...His murti in silver is always round my neck - Aum Jai Sai Ram - Jai Gurudev - Maharajji - Krishnaya Namaha ~ RAM RAM - Jai Bajrangbali ~"
  },
  {
  id: 90,
  header: "anjaneya is my guru, my true friend, guide.....",
  question: 
    "anjaneya has to be my guru for various reasons. all based on my experiences in my life, provided i am correct in sensing. i feel i am right. i am waiting for all the instructions.whenever i have been in difficulty, i have stayed connected to him though i lack the ability to understand deeply. he has opened my eyes to many realities. for instance, long time back, i chanted hanuman chalisa and ram ram the whole day and , that evening i reached hanuman temple without prior planning. there are various such instances. even today, i was thinking of some message from him at the end of my pooja and when i opened my mail i found his message. even today i went to a temple. a vishnu temple where our lord anjaneya has blessed me earlier long time back. when i went then i had no money to offer vishnu. when i reached anjaneya during pradakshina, i felt sad. i just had a coin. i prayed and put it in the hundi asking our lord to carry my prayers to mahavishnu.i left the temple i had gone just a little when i found a few more coins in my bag. i returned to the temple once again.those were the days we were going through difficult times, especially financially. i always chant ram ram or write it thinking of hanuman, especially when things don't work well and i don't know what to do. today the priest at the temple asked me to come for an abhishekam for shiva and an archana for mahavishnu. i feel, all this is more than coincidence. i am connected to hanuman.dear lord, dear hanuman, dear anjaneya, let my sensing be true and show me if i am right. correct me if not. guide me as you have, i feel, always, though i have been late in understanding. please tell me whether i am right or wrong. can i trust my senses? do tell me. om namah shivaya. sri ram jaya ram jaya jaya ram. sri gurubhyo namah. sri anjaneyaya namah. jai hanuman. accept this ignorant soul. since i am unable to send money online for the offerings and poojas, iam trying to offer here in some way. i am sorry for this. i feel bad.i don't seem to have any other alternative. i apologize for that. om namah shivaya. om maha vishnave namah. pranams to the mathangs and Setuu masters.",
  answer:
    "Divine Soul,\n\n"+
    "You are blessed.\n\n"+
    "And there is no need to feel sorry about Arpanam. You can do that anywhere.\n\n"+
    "Blessings"
  },
  {
  id: 91,
  header: "THE ANSWER FOR NOT CRYING",
  question: 
    "ITS BEING EXACTLY A MONTH MY MOM PASSED AWAY AND SINCE MY CHILDHOOD WE ARE A DEVOTEE OF LORD HANUMAN AND WE DO HANUMAN DEEKSHA FOR 41/21 DAYS EVERY KARTHIK MAS AND THIS TIME WE WERE NOT ABLE TO DO THE HANUMAN DEEKSHA, LONG BACK WAY IN 2000 MY MOM SUFFERED FROM A BRAIN STROKE AT THAT TIME I SPOKE TO A LITTLE HANUMAN SAFFRON IN COLOUR WITH A NICE SMALL FLAG IN HIS HAND AND HE TOLD ME NOT TO WORRY AS HE WILL TAKE CARE OF HER MIRACULOUSLY SHE CAME BACK HOME FULLY RECOVERED. THIS TIME I ALSO SPOKE TO HIM AGAIN AND I CAN SEE THAT HE IS IN CONTINUOUS TALKS WITH OTHER GODS TO BRING MY MOM OUT OF DANGER THOUGH IT DID NOT HAPPEN AS I FEEL TIME WAS NOT IN FAVOR AND I CAN SEE THAT LORD HANUMAN TURNING INTO LIGHT COLOR(WHITE/PALE) FROM SAFFRON WHEN MY MOMS HEALTH WAS DETERIORATING DAY BY DAY HE TOLD ME TO DO SINDURA POOJA I TRIED TO PERFORM BUT IN VAIN WAS NOT ABLE TO DO EVENTUALLY MY MOTHER PASSED AWAY ON 31ST OF OCT 2014 AT 6.27. I DID NOT EVEN GET A SINGLE DROP OF TEAR IN MY EYES MAY BE BECAUSE I KNOW SHE IS GOING TO GO AWAY OR MAY BE I HAD ACCEPTED THE FACT THAT SHE WILL LEAVE US OR MAY BE LORD HANUMAN TOLD HE THAT HE TRIED FOR MY MOM WELL BEING BUT IT IS THE TIME TO TAKE HER AWAY. MAY BE I HAVE BEING TOLD BY HANUMAN THAT SHE IS GOING AWAY FROM THIS WORLD FOREVER AND THAT MADE ME STRONG WITHOUT EVEN A SINGLE DROP OF TEAR COMING OUT FROM MY EYE, THIS ALL HAPPENED IN A MONTH AND I FEEL LIKE I ALREADY KNOW ABOUT THIS INCIDENT LONG BACK AND HANUMANJI HAD TOLD ME THAT IT IS THE TIME TO TAKE MY MOM AWAY AND I SHALL BE VERY BRAVE AND HE IS ALWAYS THERE TO PROTECT US FROM ANY UNWANTED INCIDENT OR ANY EVIL HAPPENING TO ME AND MY FAMILY. JAI SRI RAM JAI LORD HANUMAN"
  },
  {
  id: 92,
  header: "Anushthan",
  question: 
    "shree ram jai ram jai jai ram mai rajiv ye janna chahta hoon ke koi aisa mantra hai jis se insaan ki har ek manokamna pooran ho jaati hai or uska apne bhagwan shree hanuman ji par pooran roop se vishvash ban jaye or hanuman ji uski har manokamna pooran kar de koi aisa anushthan jis se hanuman ji se jaldi sampark ho jaye or vo apni kamna ki poorti kar sake",
  answer:
    ""
  },
  {
  id: 93,
  header: "Ambarish Singh Verma",
  question: 
    "\n",
  answer:
    "दिव्य आत्म स्वरूप ,\n\n"+
    "आपका देह तथा मन दोनों बुरी तरह से असुरों द्वारा जकड़े हुए हैं | अगर आप अपने मन को असुरों से मुक्त करा ले तो वह ही सबसे बड़ा अनुष्ठान होगा | जिस मन में असुरो का वास हो वहां हनुमान जी कैसे आ सकते हैं | आप अपने जीवन के कुछ मिनट हनुमान जी के शब्दों को पढने के लिए नहीं दे सकते तो जाहिर है कि असुरो का आप पर कितना प्रभाव है |\n\n"+
    "अब आपको यह उत्तर भी समझ में नहीं आएगा क्योंकि जिन अध्यायों में हनुमान जी ने सुरों असुरों के बारे में बताया है वो तो आपने पढ़े नहीं है |\n\n"+
    "भगवान् कल्कि ही आपकी आत्मा का कल्याण करेंगे |\n\n"+
    "||राम||"
  },
  {
  id: 94,
  header: "apni kripa rakhna prabhuji",
  question: 
    "kuch din pehle muje hanumanji ke darhan hue unhone Ram Ram bola par jab tak me kuch samaj pati wo ojhal ho gaye , he hanumanji kripya kripya apni kripa bnaye rakhe , mere maan me shri Ram ji ka dhyan hamesh hameha rahe\n"+
    "jai shri ram"
  },
  {
  id: 95,
  header: "Apology",
  question: 
    "I am sorry hanuman I lied today...I know i was conscious when I lied ...n had time to speak the truth instead of the lie...I thought it would make me more spotting, but the truth is that it made me feel more unreal inside...I am sorry hanuman for dirtying my heart ,ur home again...I will sweep n keep my home within, more cleaner hanuman...96"
  },
  {
  id: 96,
  header: "Application of knowledge gained in chapter 10",
  question: 
    "Namaste,\n\n"+
    "Pranaams to Lord Hanuman and respectful maathangs and setuu masters _/\_ \n\n"+
    "The incidents of how Queen sumati became a mother of 60,000 children is amazing!\n"+
    "But, It was possible to her because of eminent sage Aura who was aware of making a body soulless (coma state) and making a soul to change a body. Without that it wouldn't have been a sucess!\n\n"+
    "How can the present society solve their problems (infertility in women) with just that theoritical knowledge?",
  answer:
    "Divine Soul,\n\n"+
    "Sometimes infertility is caused when the woman fails to call Lord Kaal in her body or the man fails to call Lord Indra in her body. Before reading the chapter you probably did not know about Sumati, Aurva, Indra and Kaala. Merely by reading this chapter, all of them have become part of your reality/world. Therefore, you are nearer to Indra and Kaala after reading this chapter and they may manifest in your body now.\n\n"+
    "Blessings"
  },
  {
  id: 97,
  header: "araku valley trip",
  question: 
    "my name is suresh from hyderabad, in the year of 1995 i have been visited few temples in andhra pradesh...we are travelling to vishakapatnam through APS RTC BUS SERVICES my brother and my brother in law planned to to go vizag and from there we will return to hyderabad , which our hometown....at that time i am very much devoted to lord hanuman....in normal times also i used to chant hanuman chalisa or hanuman dhanadakam...every time...by my brothers decision i was very disappointed, because i want to see araku valley...i heard that they were very beautiful to see...but our family heads decided to return because my siser,s son who is of 1 year old was suffering from fever..they got little worried...i was laying in the last seat of bus ...i was chanting hanuman chalisa and dhandakam countinously for whole night just to see araku valley...and by chantin i slept i do not know when did i got slept....when i woke up in the moerning i am very much surprised to see the bus near was standing i a same place where i was standing last night...i came to know that bus got punctured last night and it is standing....and my sisters son got well...after getting delayed my family memebers decided to visit araku valley and we will move to vizag...i thanked lord hanuman for making me happy by visiting araku valley, those were my child hood days but i enjoyed a lot with lord hanuman's blessings.."
  },
{
  id: 98,
  header: "Ardaas",
  question: 
    "Ram Ram ji\n\n"+
    "setu master ji, mai setuu asia ki har post ko bari lagan se parti hu or mujhe har new post ka bara intzar rehta hai in dino mere ghar per musibat aa gai hai..meri beti ko pret badha ho gai hai,,pehle to hume vishvas hi nai tha but abi bala ji ke mandir mai hum use dikha rahe hai,, bala ji ki kirpa se abi kabi vo bilkul theek ho jati hai to kabi nai,\n"+
    "app meri ardas hanumaan ji se kariye ki vo hume is musibat se mukti de.."
  },
  {
  id: 99,
  header: "Ardent prayer for good health.",
  question: 
    "'Tvamasmin kaaryaniryoge pramaanam Harisatthama,Hanuman yathnamaasthaaya dukhakshya karobhava'.This was the shlokam i would chant when my son could not find a job after his BE.Now he is in the UK,doing his Masters.My mother has always told me,'Any difficult situation,read the 'SUNDARA KAANDAM',from the Ramayanam.It works everytime!!My sister is an ardent devotee of Shri raama and Hanumantha.Her health condition is very delicate.My brother-in-law also suffers from an incurable eye condition and Ataxia.The LORD knows their condition better than me.I wish some miracle happens and both their health improves.Sethu.Asia,please somehow convey this to the Lord during the aahuthi.Koti Namaskarams to the Lord Sri Hanuman and HIS LORD."
  },
  {
  id: 100,
  header: "Arpan (Offerings)",
  question: 
    "Jai Shree Ram\n"+
    "Jai Hanuman\n\n"+
    "Thank you Setuu for connecting souls like me with lord Hanuman. I have made lord Hanuman my guru and am learning Brahm Gyaan by reading his Leelas as you post them in chapters. I always wait for the next chapters anxiously.\n\n"+
    "I have a query regarding offerings to lord Hanuman. Whenever I go to temple, I offer laddu as prasad to lord Hanuman. After offering laddu as prasad to lord Hanuman, I eat them all myself after distributing it among family and friends. Does the offering reach lord Hanuman this way? I have been doing this since many years. Is it the right way of arpan or offerings? I have read in chapter-1 that Hanumanji eat fruits through the mouths of Mathangs. The fruits which Mathangs eat go to lord Hanuman's stomach. Is the same case with me? Do the laddu or prasad which I eat after offering to lord Hanuman go to lord Hanuman's stomach?\n\n"+
    "I have also read somewhere on your website that arpan or offerings should be made in such a temple where there are monkeys. But the Hanuman temples which I visit, there are no monkeys around or near temple premises. Does Hanumanji accept offerings only through the mouth of monkeys?\n\n"+
    "Please tell me the right way to offer fruits or laddu or prasad to lord Hanuman so that my offerings reach directly to lord Hanuman. I have made offerings through you(Setuu) after reading every chapter posted on your website so far.\n\n"+
    "Hanumanji, please forgive me for my sins either of this birth or of previous births and bless me with a good health and sound mind. Bless me with a good job and protect me against all odds.\n\n"+
    "Thank you Mathangs\n"+
    "Thank you Setuu\n"+
    "Regards",
  answer:
    "Divine Soul,\n\n"+
    "To know why offerings are made and how, please wait for chapter 7 in which description of offerings made on behalf of Basantha Mathang will be given.It is a good sign that you are getting queries related to a chapter immediately before its release.\n\n"+
    "Blessings"
  },
  {
  id: 101,
  header: "Ashaant man",
  question: 
    "Meraa man ashaant hai. Aisaa hameshaa mehsoos kiyaa hai ki prabhu ne kisee vishesh kaam karne ke liye bhejaa hai, lekin phir bhee meraa man bhataktaa rehtaa hai. Use thaamne kee koshish kartaa hoon par ek pal aisaa aataa hai jab main man ke aage vivash hoke kuch kar letaa hoon jabki pataa hotaa hai ki ye galat hai. Us ke baad glaani hotee hai. He Prabhu, main so bhee nahee paataa ab. Raaton ko jaag jaataa hoon, andar ashaanti rehtee hai. Kripa karke in sab uljhanon kaa samaadhaan karein. Main kaun hoon? Kisliye mujhe bhejaa hai? Mere andar itnee oorjaa paidaa hotee hai lekin main use sambhaal nahee paataa aur antatah nikaal detaa hoon. Kripyaa bataayein ki kaise is oorjaa ko sahee dishaa dekar main aapke charnon ke sameep aa saktaa hoon? Meree ardhaanginee bhee ek behad samarpit bachchee hai aapkee. Man mein jo hai wo aap jaante hain. Aaj main apne sankalpon ke saath nitaant akelaa khadaa hoon. Shaayad meree is oorjaa ke chalte jitnaa kuch main apne jeevan mein karne kee koshish kartaa hoon us se sab log confuse ho jaate hain. Par main akelaa rehke aur dridh sankalpit ho gayaa hoon. Prabhu, apne is baalak ko sharan mein lein, meraa haath thaamiye. Humein sharan mein lein Prabhu. Samadhaan karein. Jai Hanuman. Jai Shree Ram.",
  answer:
    "दिव्य आत्म स्वरुप ,\n\n"+
    "आप एक आत्मा हैं मन नहीं | अपने मन को आत्मा से अलग पहचानना सीखें | मन चाहे शांत रहे या अशांत , आत्मा स्थिर रह सकती है | मन एक घोडा है जिसकी नकेल आत्मा के हाथ में है | जिस दिन आप अपनी आत्मा को पहचान लेंगे , आप मन को जहाँ चाहें मोड़ सकेंगे | मन को नियंत्रित करने का प्रयत्न करना छोड़कर केवल अपनी आत्मा को पहचाने | आत्मा को पहचान लेंगे तो आप नकेल को पहचान लेंगे |\n\n"+
    "|| राम ||"
  },
{
  id: 102,
  header: "Asking questions",
  question: 
    "Prabhu! Sadar pranam apko..dhanyawad apko koti koti..prabhu main pichle kuch saalo s bimar Hu..jada hi..man b kuch ashant Sa rehta h.aisa lgta h jaise kuch chut raha h..koi kam zaruri Jo muje krne the..pata Ni pr kuch to h..prabhu muje bhavishya dikhai deta h..kya Karan h iska??mere man m kis bat ka Dar rehta h hmesha..jaan ni payi Hu ajtk. Prabhu muje or mere parivar Ko swasth Kr dijiye..main kya kru jisse main swasth rahu??Ek or zaruri bat prabhu..Maine suna h k hum naariyan apke sbse kareeb hoti h sbse majbut..hoti h..to fir ye samaj hamare sath aisa kyun krta h??betiyo Ko janam ni lene dete??betiyan ni chahte..??kyun Kisi stri k sath ghranit karya hota h?.kyun??kya stri hona galat h??",
  answer:
    "देवी ,\n"+
    "प्रभु की नजर में तो केवल आत्मा होती है और उसके अनुभव होते हैं | महिला पुरुष आदि नजरिये तो मानव के नजरिय हैं , प्रभु के नहीं | अगर कोई आत्मा है जो दुःख का अनुभव कर रही है तो उसका कारण उसके कर्म हैं | इसमें महिला या पुरुष होने से कोई फर्क नहीं पड़ता |\n"+
    "आप भी एक आत्मा हैं , आप कोई देह नहीं है | देह का कोई काम छूट सकता है लेकिन आत्मा की यात्रा तब तक चलती रहेगी जब तक कि उसके कर्मों का खाता सही नहीं बैठ जाता और उसे ब्रह्मज्ञान से सत्य का आभास नहीं हो जाता |\n"+
    "|| राम ||"
  },

  {
  id: 103,
  header: "Astral travelling or soul leaving body from 4th chapter",
  question: 
    "hello ,\n"+
    "I am Garima from Kolkata.Few days back I had an astral travel experience which I wish to state.Few days back as I am a REligious -Hindu person and my family is into hardcore RELIGIOUS practices .Due to some reason around the world ,the situation we are experiencing and the negative approaches towards God leaves me disturbed always but that night I was terribly in pain and distress and so I prayed to my Guru maa that I dont wish to stay in this mortal world anymore as I m having burning sensations of this world's evil acts are making me to burn and get distressed.I felt like a sleepy feeling and slept but withng seconds I heard a call but didnot see any figure,it caleed out my name and said \"let go let go\".The soft and tendering voice with full of love compelled me to leave my body and I did.With a thousand wind speed like helicopter I started flying high ,high up to the sky.Even my body could feel the winds around.I could see myself leaving my body as a white patch of fluid but its tail still coiling my body I went to a place fully becoming Dark (as mentioned in 4th chapter of dream state)but saw many unknown people around and I was playing with kids .Suddenly I saw my GUru maa telling me that I am wasting my place in here and we need to move high up.We again started rising up in windy speed that was even blowing my body face so much.Then I landed a mountain place but didn't see anyone(then my guru maa wasn't there) I heard many people chattering ,whispering saying this the Abode of Shiva ,I raised my wish to see him but the voices said that it's not my time as I need to do many many other great deeds to see him.I consoled myself and returned and came down but was wandering ahppily without my body could do and afford.So the experiences described in the 4th chapter is so true that f with my experiences..its true that we can leave our body without dieng.I think its my bhakti only that lord hanuman made me read this.thank u lord hanuman for explaining my querries thorugh this page ..jai hanumanjiki,jai pawanputra ki jai........"
},
{
  id: 104,
  header: "Asuro se Chutkara",
  question: 
    "Jai Shri Ram,\n\n"+
    "Hame kese pata chalega ki hamare dware kiye gaye karam asuro se ya suro dwara kiye ja rahe hai\n\n"+
    "Aur ense chutkara kese paya ja sakta\n\n"+
    "apne aap ko ense kese bachaya ja sakta ha\n\n"+
    "Shri Charano me Sadar Parnam",
  answer:
    "मान लीजिये आप किसी Crime Scene पर पकडे गए | वह क्राइम आपने नहीं किया है , किसी और ने किया है | लेकिन आप बदकिस्मती से उस समय इस अवस्था में थे कि देखने वाले को शक हो गया कि अपराध आपने ही किया है |\n\n"+
    "ऐसे होते हैं असुर | वे आपके तन अथवा मन का उपयोग करके कोई अपराध करते हैं लेकिन आपको लगता है कि वह अपराध आपने किया है इसलिए आप उसकी जिम्मेदारी ले लेते हैं और उसके परिणाम भुगतते हैं |\n\n"+
    "कलियुग में असुरों के प्रभाव से तन मन को बचाना तो मुश्किल है लेकिन आपको इतना तो करना पड़ेगा कि आप यह पहचान सकें कि कोई कर्म आपने किया है या असुर ने | अगर असुर ने किया है तो आप उसकी जिम्मेदारी न ले |\n\n"+
    "|| राम ||"
  },
  {
  id: 105,
  header: "Atma Gyan",
  question: 
    "main atma gyan ke baare me janana chahta hoon.\n"+
    "mere andar moksha ki prabal iksha hai pr maine bahot hi bure karma bhi kiye hai .......bahot sare bure karma mere bahi khato me hoga....pr main bilkul bhi aisa ab ni krna chahta .....\n"+
    "mujhe marg dikave apne andar ke asur ko bahar krne ke liye aur bhagwaan vishnu ke charano mein vapas mil jane ke liye.....\n"+
    "kripya is papi ke upar kripa dikhaye......",
  answer:
    "श्री हनुमान जी को अपना गुरु मानकर उनकी लीलाओं के अध्याय पढ़ते जाइए | आपको ज्ञान की प्राप्ति अवश्य होगी | उसके बाद कल्कि भगवान् भी संसार में ज्ञान का प्रकाश फैलाने आ रहे हैं | इसलिए चिंता की कोई बात नहीं है | एक बार अगर आभास हो जाए कि अज्ञान है , तो ज्ञान का मार्ग अपने आप निकल आता है | चिंता उन्हें करनी चाहिए जिन्हें अभी तक यह भी आभास नहीं हुआ है कि वे अज्ञान के अँधेरे में हैं |\n\n"+
    "|| राम ||"
  },
  {
  id: 106,
  header: "Attaining Moksha while being in the world",
  question: 
    "Continued from #515704\n"+
    "Jai Shri Ram\n"+
    "Jai Shri Hanuman\n"+
    "Parnaam,\n"+
    "Thank you for addressing my concerns. I have read in several literature that a Guru is absolutely essential for any spiritual advancement. I have also read that when a disciple is ready, Guru comes to him.\n\n"+
    "Regarding my worldly duties, I have no intention of getting married. I feel that after getting married, I will be completely immersed in the worldly duties and I cannot progress on the path of Moksha. My prime desire right now is to serve my parents, and after they leave for their heavenly abode, I will renounce everything. But suddenly leaving everything is not possible. So I must prepare my body from now itself.\n\n"+
    "My major obstacle is that I am a prey to lust. Whenever lust attacks I just cannot resist it. This often results in loss of precious energy which could otherwise be directed towards the Bhakti of my Lord.\n\n"+
    "Dear Setuu Masters, through you, I want that my Lord to guide me. I want to know how to convert this sexual energy that arises through lust into pure devotion. I want to devote my entire body and mind to Hanumanji. Although I am a healthy individual, I feel that I am caged and severely limited in this human form.\n\n"+
    "Hey Prabhu! I implore you. Please guide me my Lord! Show me the way to you. I wish not to be caged. I wish to transcend my limitations. I wish to be forever with you. Guide me my Lord. Show me the path to devote myself completely to you while serving my parents. I believe in you. I am yours my Lord.\n\n"+
    "|| Sankat Kate Mite Sab Peera ||\n"+
    "|| Jo Sumire Hanumant Balbeera ||\n\n"+
    "Have mercy on this pitiful existence my Lord. Please guide me!",
  answer:
    "Divine Soul,\n\n"+
    "Learn to differentiate between your body-mind and your soul.. The lust and all other low level energies manifest in body-mind. Make your soul witness to it. When lust rises, just detach yourself from body-mind and rise at the level of soul.\n\n"+
    "Blessings"
  },
  {
  id: 107,
  header: "Atul Anubhau",
  question: 
    "me bagwan hanuman jee ki shasart dekhna chata hu era hanuman je prathna hia jo log galt krte hai atyachar krte hai onko jeene kya hak hai jo ache kisi ka bura nahi sochte hai onko paresani ku hote mera to na baag sat sat de rha na meri nokri lag rhai hanuman je se khot meri nokri lag jaye ya ya mujje is kabil bana de ki ki me garbi ki madt kru or onke liye makan roti de sahu muje bahut ctina ho rhai is des kya hoga jo ktl krte masoom ko marte onko bagawan peda na krne yaha dharti ache aadmi peda krne muje achaa bada aadmi banade pese dolat se jise me gareebo ki madat ke saku jay hanuman jee or hauman jee se ye jaroor khan mujseyak bar baat jarror kr le me onse bahut naraj hu muje onse milna hai agr aap mujse onse mulwa doge bahu achi baat hai jay shri ram",
  answer:
    "बहुत सारे भक्त यह गलती करते हैं कि वे अपनी प्रार्थना को जटिल बना देते हैं | कोई अपने परिवार को अपनी प्रार्थना में सम्मिलित करता है तो कोई अपने पूरे कुनबे, समाज और मानवता को सम्मिलित कर लेता है | भाई आप जिन अज्ञात लोगो को अपनी प्रार्थना में सम्मिलित कर रहे हैं क्या आप उनके कर्मों का फल भुगतने के लिए तैयार हैं ? आप केवल अपनी आत्मा के लिए प्रार्थना कीजिये | सबसे सही प्रार्थना होती है - \"हे प्रभु , मेरी जरूरतों को पूरा करें |\" अगर ऐसी प्रार्थना करेंगे तो प्रभु को केवल आपके कर्मों का हिसाब लगाकर आपकी इच्छा पूरी करनी होगी | अगर आप कहेंगे कि आप पूरी दुनिया कि सहायता करना चाहते हैं तो प्रभु को पूरी दुनिया के कर्मों के हिसाब से आपकी इच्छा पूरी करनी होगी | अपनी प्रार्थना को सरल बनाइये जटिल नहीं |"
  },
  {
  id: 108,
  header: "BABA",
  question: 
    "JAI SIDHBALI BABA",
  answer:
    "Blessings divine soul,\n\n"+
    "May Lord Hanuman always protect you.\n\n"+
    "There is a person in your life who is trying to hurt you. That person is under influence of His past Karmas. The best way to reduce the hurt caused by that person is to pardon the person. Do not hold any grudge against the person. Because more grudge you hold, more will be the penetration of the person in your life space.\n\n"+
    "Ram"
  },
  {
  id: 109,
  header: "BABA ji",
  question: 
    "Lord Hanumanji is everything for me my mother,father,guru,brother When I remember Hanumanji all my sorrows,tensions goes away.I owe my Life to Lord Hanumanji."
  },
  {
  id: 110,
  header: "Baba saved me from accident",
  question: 
    "Dear baba,\n"+
    "You know I keep taking to you all the time there is not one hour that goes without your thought I still remember how you miraculously saved me from that accident that could have c changed my life forever, I felt your strong presence holding out the charging ox just enough to let my scooty pass by baba you saved my life and I am forever thankful to you, after coming to Mumbai also you contacted and reminded me to visit you daily through ashish thank you for making me feel your presence so strongly thank you baba"
  },
  {
  id: 111,
  header: "Baba thank you for everything",
  question: 
    "Baba you have always protected me in every step of my life and enlightened me with your guidance, I could not have done anything without you but baba recently I feel I have lost you and lost touch with my real feelings pls bring me back to the truth and pls do it as softly and kindly as you can pls help me know my purpose and give me the courage and guidance to fulfill it, Baba pls take care of my husband and his life purpose also please bless us with a happy and peaceful life, please help us jump to the good illusion like you helped chitta, Baba be with us always and pls remove all our obstacles, Baba thank you for everything I could have never done this without you thank you Baba"
  },
  {
  id: 112,
  header: "TO Bagavan Marutiji",
  question: 
    "Dear oh Great baktha of Rama,\n"+
    "I also want Rama bakthi like you.I want do Sahasra koti ramayana parayana,every cornor of holy bharat ,also iwant chant rama nama without any disturbances from mind &any other worldy objectes,Want to build Rammandir at ayodya,iwant bakthi like Samartha\n"+
    "RAMDASS,BADRACHALAM Ramadas,tulsidas and all other rama bakths who visited this world till now"

  },
  {
  id: 113,
  header: "bajarangbali ke sath mere anubhav",
  question: 
    "bhagawan hanuman mere ishta dev hai\n"+
    "mai sadiav hanuman chalisa ka path niymit roop se karta hu avam prabhu shri ram aur prabhi hanuman ko apni sarv shreshtha shakti manta hu.\n"+
    "hanuman ji ko dekhe jane ka anubhav mere mamaji logo k sath hua hai apne baachpan me jab ve jabalpur kshetra me rahta the tab unhe aakash me udte hue hanumanji ke darshan hue the."
  },
  {
  id: 114,
  header: "bajarangbali ke sath mere anubhav",
  question: 
    "main atma gyan ke baare me janana chahta hoon.\n"+
    "mere andar moksha ki prabal iksha hai pr maine bahot hi bure karma bhi kiye hai .......bahot sare bure karma mere bahi khato me hoga....pr main bilkul bhi aisa ab ni krna chahta .....\n"+
    "mujhe marg dikave apne andar ke asur ko bahar krne ke liye aur bhagwaan vishnu ke charano mein vapas mil jane ke liye.....\n"+
    "kripya is papi ke upar kripa dikhaye......",
  answer:
    "श्री हनुमान जी को अपना गुरु मानकर उनकी लीलाओं के अध्याय पढ़ते जाइए | आपको ज्ञान की प्राप्ति अवश्य होगी | उसके बाद कल्कि भगवान् भी संसार में ज्ञान का प्रकाश फैलाने आ रहे हैं | इसलिए चिंता की कोई बात नहीं है | एक बार अगर आभास हो जाए कि अज्ञान है , तो ज्ञान का मार्ग अपने आप निकल आता है | चिंता उन्हें करनी चाहिए जिन्हें अभी तक यह भी आभास नहीं हुआ है कि वे अज्ञान के अँधेरे में हैं |\n\n"+
    "|| राम ||"
  },
  {
  id: 115,
  header: "Bajranbali ki mahima",
  question: 
    "I am a devotee of lord Hanumaan!Whenever I am in distress Lord helps me. wirhout fail.After hearing about setuu.org and going through two chapters I am thrilled to experience the presenceof lord."
  },
  {
  id: 116,
  header: "Bajrang Baan",
  question: 
    "Jai shree Ram\n"+
    "I am greatul to mathangs for connecting us to lord Hanumana and his lelas.\n"+
    "I have a query.\n"+
    "How and when one should do Bajrang Baan? Can Bajrang Baan be done daily?",
  answer:
    "Divine Soul,\n\n"+
    "Any chanting which helps you rise to the level of soul, and helps you in connecting with the Lord, can be done anytime you want. We have no instructions from Lord Hanuman about Bajrang Ban. Please consult the Guru who has given you this mantra.\n\n"+
    "Blessings"
  },
  {
  id: 117,
  header: "Bajrang Bali",
  question: 
    "hanumaan ji ki pooja karne ke baad athwa hanumaan mandir me mujhe shanti kaa anubhav hota hai. mai kewal yah chahta hu ki bajrangbali mujhpar apni kripa drishti banaye rakhe...."
  },
  {
  id: 118,
  header: "Bajrang Bali's blessings",
  question: 
    "I did Charan Puja in April. I did it with full bhakti and shraddha. Took leave from office on that day.\n"+
    "I could see changes in my life. The changes were on the positive side. Though I did not do puja with any expectation, but still I could see things going towards the good.\n"+
    "Thanks to Bajrang Bali for his blessings.\n"
  },
  {
  id: 119,
  header: "BALA JI MAHARAJ K CHARNO ME...",
  question: 
    "HE PARBHU MAI APPSE JO MAANGU,AAP MERI MAT SUNNNAHE PARBHU JO KUCH MERE V MERE PRIYAR K LIYE SAHI HO AAP VAHI KARNA.....\n"+
    "\"JAI SHREE RAM\"\n"+
    "\"JAI SIYA RAM\""
  },
  {
  id: 120,
  header: "Balaji",
  question: 
    "Sri rama jaya rama jai jai rama.. Pavanputra Ram bhakta Maruti .. Please give identity of genuiness to the visa officials for granting the Australian and now swiss tourist visa for Shiv Sagar alias Shivananda of VPO Old Kangra. The same office should issue visa to Shiv Sagar after understanding that this is a genuine visit to bring Baba's padukas to Australia ,swiss .Bow to your lotus feet shri hanumanji anjenaya. Make it happen within days before start of Dussera by tourist visa okayed by you. Let me experience ananda every day and feel everyday."
  },
  {
  id: 121,
  header: "Balaji maharaj",
  question: 
    "main ek baar balaji gaya tha or wah hanuman ji ke darshan kiye the. darshan karne k baad main wapas mandir se nikal aaya tha jab mujhe dhyan aaya ki andar hanumanji ke saamne jo khamba hain us khambe par manokamna hetu sikka chipkta hain or main bahar se paise khulakar laya main sikka chupkaya tha balaji ka naam lekar woh sikka 1 inch ki duri se itani tez chupka maano ki chumbak ne khicha ho or mere sath do ladake or the unohone chipkaya toh unke sikke nhn chipke the par mera sikka chupka tha. par sikka toh chupka manokamna ka par meri manokamna puri nhn ho paayi yeh nhn pata kyun nhn hui lekin manokamna sikaa jarur chipka tha meri manokamna kyon nhn puri hui par haan iss cheez ka vishwas bahut hain ki mera sikka chupka tha bahut achha laga",
  answer:
    "निम्न 4 बातों का ख्याल रखें -\n"+
    "(1) आप में अपने लक्ष्य को पूरा करने की तीव्र इच्छा होनी चाहिए |\n"+
    "(2) उन इच्छाओं को पूरा करने के लिए आवश्यक प्रयास करें अन्यथा आपकी आत्मा उन लक्ष्यों को इस संसार में पूरा करने की बजाय स्वपन लोक में पूरे कर लेगी |\n"+
    "(3) अपने दिल दिमाग में “भय” “चिंता” आदि नाम के असुरों को जगह न बनाने दे अन्यथा हनुमान जी को लगेगा कि आप उनकी बजाय असुरों को अपने दिल दिमाग में रखना पसंद करते हैं | बाधाएं दूर करने के लिए हनुमान जी की सहायता प्राप्त करने के लिय यह अति आवश्यक है |\n"+
    "(4) अपनी प्रार्थना को सरल रखें | अपनी प्रार्थना अपने और प्रभु के बीच रहने दें उसमे आप परिवार , समाज तथा अन्य लोगो को शामिल न करें | सही प्रार्थना - “हे प्रभु मेरी आवश्यकताए पूरी करें ताकि मै मोक्ष के मार्ग पर चल सकूँ |” गलत प्रार्थना - “मेरे जीवन में फलां व्यक्ति को ले आयें , मेरे परिवार को ऐसा करें , मेरे समाज को ऐसा करें|” आप जितने लोगो को अपनी प्रार्थना में शामिल करेंगे उतने लोगो के कर्म रोड़ा बनते जायेंगे | आपके कर्मों के रोड़े काफी हैं , किसी अन्य के रोड़े मत लायें | जब आपकी इच्छा पूरी होगी तो आपके आस पास के लोगो को खुद ब खुद सहायता मिलेगी |"
  },
  {
  id: 122,
  header: "balaji rajasthan me meri ankho se ansu ka girana",
  question: 
    "march 2015 me mai balaji rajasthan gaya sham ko shayad 4:00 baj rahe honge jb mujhe balaji maharaj ji ka darshan hua unke darshan k baad mujhe pret raj ji ka darshan hua phir achanak waha ka nazara dekhkr meri ankho se ansu nikal gaya ki mere prabhu hum logo k liye kitna pareshan rahate hi jb hume fever hota hui aur sharir garm hone lagati hi to hamara poora pariwar pareshan ho jata hi lekin hamare prabhu to hum jaise kitno ka sankat apne upar le lete hi to unko kitni problum hoti hogi yahi sochkr meri ankho me ansu a gaye kyki wo sb pret atmaye thi .........\n"+
    "uske baad mai mandir se neeche a gaya uske baad shayad mujhe mere prabhu ne sapne me darshan diya lekin mujhe yaad nahi hi kuch dhundhala sa hi yaad hi . shri maan ji meri zigyasa hi ki mere mun me jo sawal us samaya aya aur uske baad jo ansu aye wo achank aur anayas hi kyo aye jbki mai janata hu ki mere prabhu sarvashaktiman hi plz help me? aur kya mere prabhu mujhe dekh rahe honge kyoki mujhse bhi bade bade bhakt hi aur ami to life me galatya bhi kr deta hu kya uske baad bhi wo mujhe pyar krte honge ?",
  answer:
    "प्रभु की केवल दो आँखें नहीं हैं | संसार का जर्रा जर्रा उनकी आँखें हैं | जब भी कोई जीव देह से ऊपर उठकर आत्मा के स्तर पर उठता है तो प्रभु उसके कर्म को अवश्य देखते हैं | जिस समय आपका आंसू गिरा उस समय आप आत्मा के स्तर पर उठ गए थे इसलिए प्रभु ने आपको देखा था |"
  },
  {
  id: 123,
  header: "Barren women",
  question: 
    "Sri Raam Setu, I come across the setuu organisation. This is by lord hanuman blessing that we are distributing his leelas to world. I have read that a women could give birth of thousands of child. How this is possible in this time. How to pray lord hanuman to get child. Who could help us to get child. My other concern is did lord hanuman come in his same form as monkey god.",
  answer:
    "Divine Soul,\n\n"+
    "Your prayer has been conveyed to Lord Hanuman. Read chapter 10 sincerely so that your soul can perform the required changes in your body-mind. If your Karmas permit, your desire shall be definitely fulfilled.\n\n"+
    "Blessings"
  },
  {
  id: 124,
  header: "Bas Kripa chaiye aur kya",
  question: 
    "!! Jai Shree Ram ! Jai Jai Hanuman !!\n\n"+
    "I was reading some questions posted by devotees of Hanuman ji and their answered given by you. One question it was asked that reading Bajrang Ban is not good and you replied that reciting his name in any manner cannot be wrong.\n\n"+
    "I have one doubt and question here \"In bajrang ban there is one line which give vow to do someone work\", I don't think it is right, It is also true that no one can black mail him on the name of his lord but it is not right to complete any task by giving shree Ram's oath to hanumanji. Being human, we also get frustrated, irritated or angry when anyone give oath of someone to do a job and specially if we don't want to do it. So how can we think to give oath to Maruti. I think it is not right. I love him and cannot give oath to do any job.If he think that this is good for me he will do if he think it is not good for me he will not do. Then why demand and demand for what ? for this world which is not real.\n\n"+
    "Agar kuch aisa hain jo main samajh nahi paya hu to kirpa kar mujhe samjhaiye. Apki bahut kirpa hogi.\n\n"+
    "Aur jahan tak bajarang bali ka sawal hain to bas itna hi kahunga ki. Aa raha hu prabhu koshik kar raha hu. Umeed hain ki girte padte pahuch hi januga apke kadmo tak. bas bahe phela kar rakhikye ga aur sambhal lijiye ga.\n\n"+
    "Mushkile bahut hain raho main par raho par apki in mushkilo se bhi pyar hain mujhe.\n\n"+
    "Maruti bas kirpa karna aur satbudhi aur sanyam dena. Dheeraj dena, kripa dena.\n\n"+
    "Dene ke liye bas bhav hain mere pass mere mitr, kabhi aao aur seva ka moka zaroor dena.\n\n"+
    "Apko shree Ram jald hi mile, ye dua hain meri apke liye. Apne prabhu se bichadne ka dukh janta hu main.\n\n"+
    "Jai Shree Ram ! Jai Jai Hanuman",
  answer:
    "Divine Soul,\n\n"+
    "Any kind of reciting is done for purpose of connecting soul with Lord Hanuman. Once the soul is connected, Lord Hanuman only does welfare of the soul. He never does any harm to the soul, no matter what you have recited to connect your soul with Him.\n\n"+
    "However, when your soul is not connected with Lord Hanuman, your prayers are handled by Lord Indra. Lord Indra doesn't have any agenda of doing welfare. He is just a fair distributor. He just looks at your Karma and Desires and gives you pain/pleasure accordingly.\n\n"+
    "If your soul is not connected with Lord Hanuman, and Lord Indra gives you pain, you may get an impression that Lord Hanuman has given you pain. But that is not true.\n\n"+
    "If Bajrang Ban or any other Mantra doesn't connect your soul with Lord Hanuman, do not recite it.\n\n"+
    "Blessings"
  },
  {
  id: 125,
  header: "A beggar in this world, a King in another",
  question: 
    "Namaste,\n"+
    "I read a reply by Setuu in 'Devotee queries' section. It was written that a person may be a beggar in this world but he is a King in some another world.\n"+
    "So my question is does that mean that the beggar's soul is there in some another world and that his soul is experiencing King's life or his body look - alike is there. (I think his soul cannot be there as soul can only travel from place to place but cannot be at two places at one time. Or is it possible that it can be there at two or many places. Just like hanuman ji can be at many places at one time. Does our soul too has the potential to be every where)\n"+
    "My second question is - What is the purpose of making one live a beggar's life in one world and a king's life in another. I mean a person is living in this world, he or she is suffering so much. Does that pacify him to know that he is a king in some another world. He is living in this world, he cares for his family/children here. Who cares if he is king in some another world. He is suffering now. To me this doesn't make sense at all. May be what makes sense to me is - We all are part of this world. Some other creatures are part of some another world. And we have no link or connection between (I mean yes our soul can travel there but not that the same person is happy there and sad here). They should stay according to their Karma and desire and we stay with ours.\n\n"+
    "Please explain.\n\n"+
    "Jai Shri Ram",
  answer:
    "Divine Soul,\n\n"+
    "The illusion of Time comes into play here. There is no 'same time'. Two worlds have two different sets of Time. You have already explained in another experience that you are finding it hard to realize the illusion of Time. You won't be able to understand this also. Lets leave it.\n\n"+
    "Who establishes the link? The one who see both worlds can establish the link. For you it doesn't make sense because you can't even perceive that world. But for someone who can see one part of you as beggar in one world and can also see another part of you as king in another world, for that God it makes sense. Lord Hanuman can see multiple worlds. For Him, it makes sense.\n\n"+
    "Blessings"
  },
  {
  id: 126,
  header: "beleve in hanuman g",
  question: 
    "mujhe din ho ya rat jb bhi dr lgta h..to mujhe lgta h ki me kis se deu or kyo dru ..jb mere hanuman g abhi tk jinda h..wh meri hlp krenge....or jis din hm pe sankat aayega whi hmare sankt mochk bnkr aayenge...............................\n"+
    "mujhe aisa lgta h ki mere samne kbhi hanuman g aa gai to me ubko dekh nhi paunga kyoki eh bhut tru soul h or hm papi soul h...aisa lgta h ki hmare dekhne se unka soul ko pain hoga...ki aaj kal ka an kaisa ho gya h.. jai ho hanuma g jai hanan g"
  },
  {
  id: 127,
  header: "a believe and faith arise again.",
  question: 
    "Jai lord Hanuman\n"+
    "I have recently joined this awesome site. I want to thank for this.\n"+
    "I just want blessings right now.I am in despair.My career growth have been stopped.No right thing is happening.I realized that it was my mistake I had just forgot lord hanuman but now I am in full devotion with Lord Hanuman\n\n"+
    "PLEASE BLESS ME LORD HANUMAN.I WANT MORE BLESSINGS. I want thanks to this awesome site for meeting me to LORD HANUMANA.",
  answer:
    "--- Raam ---"
  },
  {
  id: 128,
  header: "From a believer of lord hanuman",
  question: 
    "I hv not seen my lord yet...but have experienced his divine presence and my love for him which grew day by day...i got inclined to him on my own signifying his actual presence and blessings for his devotees..there is something divine in worshipping him which comes out to be like he is watching me from somewhere and protecting me and my family from something bad\n"+
    "Please my lord keep growing my faith in you and bless your child and enlighten me :)"
  },
  {
  id: 129,
  header: "Bhagvan hai",
  question: 
    "Mere manane anusar Bhagvan Sri Ram ke Bhakt Hanumanji Amar hai, Abhi bhi Bahut se log jo inki pooja archna karte hai bhakti bhav se inka dhyan dharte hai , Hanumanji ki Aaradhna karte hai unka karya hammesha safal raha hai, Unko har mushkeli me se Chhutkara mila hai, unke har kast dur hue hai. Hanumanji Sakhshat is Pruthvi lok pe Virajman hai. Prantu kai loh andhkar rupi agyan ki aad me unko pehchan nahi sakte. Hanumanji ne Hamare kai kast nivare jab bhi yad karo hamare kast dur karte hai , ve to gyan aur gun ke sagar hai , sab ke dukh ko dur karne vale hai. \" Jai Shree Ram \" \" Jai Hanuman \""
  },
  {
  id: 130,
  header: "Bhagvan mujhe darshan kyon nhi dete, kab mujhe prabhu ke darshan hoge.",
  question: 
    "Me apne is janam me prabhu ke darshan ka abhilashi hu. me jeevan maran ke chakkr se mukt hona chahta hu. Mujhe kabhi lagta he ki wo mere sath he aur fir lagta he ki me ekdum akela hu. mujhe kyon poori tarah se bharosha nhi he ki prabhu he, ya aa jayege.\n\n"+
    "mujhe atmic santi kab milegi."
  },
  {
  id: 131,
  header: "bhagwaan Vishu Ji Re-Incarnation",
  question: 
    "Hello Sir\n\n"+
    "Had a question, that When will Bhagwaan Vishu Ji take re-incarnation in Kalyug or he has already taken? After yesterday's earthquake, just thought of asking this question...Had heard of that Vishnu ji have take birth as Kalki..Is there any relation of Kalki with Vishnu Ji re-incarnation?\n\n",
  answer:
    "Divine Soul,\n\n"+
    "We cannot speculate anything. Setuu's job is to convey only the message of Lord Hanuman to the devotees. Until now we have not get any concrete message from Lord Hanuman regarding Lord Vishnu's Kalki avatar. As soon as we do, we shall inform all the devotees.\n\n"+
    "Blessings"
  },
  {
  id: 132,
  header: "bhakti",
  question: 
    "mere Hanuman ji.... mera jivan safal bana do..muje rashta dhikhao please...muje me koi khaas baat nhi...na hi muje me koi quality...mai ek khata sikka hnu..meri help karo"
  },
  {
  id: 133,
  header: "BHAKTI",
  question: 
    "PAWANSUT HANUMAAN KI JAI......JAI SHRI RAM..........HEY PRABHU,MAI BHAGWAAN MEIN PURI TARAH AASTHA RKHTA HU....MAI APNE MATA-PITA KI BHI PURI KOSIS KRTA HU KI UNKI PURI SEWA KR SKU....ISKE LIYE AASIRWAAD CHAHIYE AAPKA.........MAI YH KHNA CHAHTA HU KI MAI HAR BHAGWAAN KI PURI POOJA KRTA HOON..........MAI APNE MATA -PITA KO SUKHI DEKHNA CHAHTA HOON...AUR GARIB BACCHO AUR NIRDHAN LOGO KI BHI SEVA KRNA CHAHTA HOON..ISKE LIYE MUJHE EK ACCHI SI NAUKRI CHAHIYE.....AUR ISKE LIYE MAIN HAR BHAGWAAN SE PRAY KRTA HOON KI MUJHE AASIRVAAD DE aur meri naukri KHOOB ACCHE COMPANY MEIN KHOOB ACCHE PACKAGE KE SAATH LGWA DE............MAI HAMESA HR BHAGWAAN SE PRAY KRTA HOON APNI NAUKRI KE LIYE..............EK PANDIT JI NE MUJHE BTAYA KI HR DIN 11 BAAR HANUMAAN CHALISA PDHO TB TMHARA HR KAAM HONE LAGEGA,LEKIN HR DIN MUJHSE 11 BAAR NHI PDHA JAYEGA HANUMAAN CHALISA TO AB ISSI TENSN MEIN MAI 1 BAAR BHI NHI PDH PATA HOON AUR HAMESA DRA HUA RHTA HOON KI PTA NHI MERI NAUKRI LGEGI YA NHI AUR MAINE APNE MAA -BABUJI KE LIYE JO SPNE DEKHE HAI WO POORA KR PAUNGA KI NHI..........HEY PRABHU MERA MAARGDARSHN KIJIYE..MUJHE HIMMAT AUR APNA AASHIRWAAD DIJIYE KI MAIN APNE SARE SAPNE KO PURA KR PAAU..............MAI HR MANDIR SE JB BHI GUJARTA HOON TO WHA SE PRANAAM KRKE GUJARTA HOON KI MUJHE EK ACCHI SI NAUKRI DILWA DIJIYE TAKI MAIN APNE MAA-BAAP KE DUKH KO KHATAM KR SAKU...........MAIN HAMESA BHAGWAAN SE YE PRAY KRTA HOON KI KOI MUJHE MILE AUR YE BTA DE KI TM YE KAAM KRO TO TMHARA MANOKAAMNA PURN HO JAYEGA...........MAIN HMESA ISSI BAAT KE TENSON MEIN RHTA HOON AUR AAJKL BAHUT TENSON MEIN JEETA HOON..........MERI MAA AUR BABUJI KA BAHUT SAUKH HAI KI MAIN EK ACCHA SA NAUKRI KRU........PTA NHI MAIN UNKI YE SAUKH KB POORA KR PAUNGA...............TO HEY PRABHU MAIN AAPSE PRAY KRTA HOON KI MERA MARGDARSHAN KIJIYE AUR MUJHE AASHIRWAAD DIJIYE TAKI MAIN APNE MAA-BABUJI KE SAPNO KO PURA KR SAKU...................HEY PRABHU MAIN SACH MEIN BAHUT JAYADA PRESAAN HOON,MUJH PE DYA KIJIYE..DYA KIJIYE..DYA KIJIYE...JAY BAJRANG BALI.............."
  },
  {
  id: 134,
  header: "Bhakti",
  question: 
    "Mai shivji Ki puja krta Hu or maine apne spno(dreams) me kitni baar shivji ka darshan, shivling k darshan kiye hai....... Mai baccpan Se abtk bahut baar sapno me darshan kr chuka Hu or mai chahta bhi Hu ab Ki mai jb chahu Mujhe shivji or shri ram ji ke darshan Ho pr asal me, spne Mt nhi...... Kya esa Ho sakta hai Ki mai jb chahu prabhu ke darshan kr saku.\n\n"+
    "Pareshani :-\n\n"+
    "Mai puja apni continue nhi rakh pata. Har 7-8 din tk meri puja chalti hai pr Fir mai puja kr nhi pata esa kis liye.",
  answer:
    "पवित्र आत्मस्वरुप , आप उनके दर्शन प्राप्त करने के योग्य बनिए | ज्ञान प्राप्ति ही एक मात्र रास्ता है | || राम ||"
  },
  {
  id: 135,
  header: "BHAKTI",
  question: 
    "JAI SHRI RAAM, SAMST KO PERA KOTI KOTI PRANAM. MERA NAAM ANJNA SRIVASTAV HAI OR MAIN EK PRIVET JOB KART HU. MAINE ACHANK YE SITE FIND KI HAI OR READ KIYA. ASIA LAGTA HAI MUJHE ADHYATM KI BHOOKH HAI , PER MAIN ANYA DHARMIK PUSTAK PADHTI HU. MAINE SARE CHAPTER PAD KER RAM BHAKT HANU MAN JI KO MANDIR JA KAR ARPAN KIYA , YE LETTER LIKHTE HUE MUJHE KUCH ABHAS HO RAHA HAI PER PATA NAHI KYA. MAINE KAL RAAT EK SAPNA DEKHA KI COW OR KUCH ANIMAL MERA PICHHA KAR RAHE HAI MAIN CHUP JATI HU. TO KOI JOR SE CHALANG LAGATA HAI, OR EK AWAZ ATI HAI WAH TUMNE ACHHI JUMP KI, PER US JANWER NE KAHA. PER PEBHU APKE JAISE NAHI JO EK CHALAG MAIN SAMUDRA PAAR KAR LIYA, MAIN APNA JIVAN BHAKTI OU SHANTI SE BITANA CHAHTI HUN. OR ISI JIVAN MAIN HANUMAN JI KE DARSHAN KARNA CHAHTI HUN.MUJHE APNE FUTURE KE LIYE BHI KOI KHAS FIKR NAHI HAI. BAS JO JIVAN MILA HAI USE JEE NA. KRAPYA MERA MARG DARSHAN KARE. I AM WATTING FOR ANSWER. MERA PAAS SHABD NAHI PER MUJHE PATA HAI KI MERI BHAVNAY AAP TAK PAHUCH RAHI HAI. MAIN BHI MOKSH PRAPT KARNA CHAHTI HU.MAIN APNE STAR SE KYA KOSHISH KARU.......\n"+
    "JAI SHREE RAAM",
  answer:
    "दिव्य आत्मस्वरूपा ,\n\n"+
    "आपके मन में अध्यात्म की जो भूख है उसे जगाये रखिये | जिस तरह आपको ये लीलाएं पढने को मिली हैं वैसे ही आपके लिए रास्ता अपने आप बनता चला जाएगा | आगे क्या होगा , कैसे होगा , उसकी फिक्र छोड़कर इस क्षण में आपको क्या मिला हैं उसको आत्मसात कीजिये |\n\n"+
    "||राम||"
  },
  {
  id: 136,
  header: "bhatimay jiwan",
  question: 
    "Jab se Maine hanuman ji ka 7 chapter pad liya to mera jeevan hi badal gaya hai ab jeevan hamesa bhaktiras Mai dubha rahta hai .bhaktiras Mai itna aanad hai Ki man nahi Karta sansarik Maya Mai Jane ka . Bhakti Ki vajah se hi hanuman ji and unaki Puri sena aur bhagawan shiv mere sapne Mai aaye the aur keval mujhe hi dikai diye aur Kisi ko bhi dikhai nahi diye . Ab to man Karta hai bas isi tarah bahkti Mai dubha rahu aur mayamoha ka prabhav bhi kam rahega .thank you hanuman ji Jo apane mujhe apni bahkti karne ka avsar pradan kiye ."
  },
  {
  id: 137,
  header: "भूल के लिए छमाँ प्रार्थना",
  question: 
    "हनुमत् जी को सभी भक्तो सहित नमन\n"+
    "एक बार हनुमान जी को मैंने किशी बड़े बनमांश के द्वारा पकड़ा हुआ सपने मै देखा था जिसने हनुमान जी को केबल एक हाथ की मुठी मै पकड़ रखा था , ओर ये सत्य था तब से मेरा मन हनुमान जी का विस्वाश तो करता है पर अनुभब नहीं कर पाता ऐशा क्यों हुआ हनुमान जी ने यह लीला किश लिए दिखाई थी ? कृपया अपना अनुमान उजागर करै\n"+
    "ओर मेरी तरफ से कृपया करके छमा याचना बिनती करने की कृपया करै\n"+
    "है हनुमान बाबा मै आपसे तथा श्री राम से सभी भक्तो सहित छमा की पार्थना करता हूँ कृपया करके मुझहे परिबार सहित छमाँ करै कृपया मरी पार्थना स्वीकार करै\n"+
    "आपका बलहीन बद्धिहीन विद्याहीन प्रकाशहीन छमाहीन भक्त\n"+
    "दीपक कुमार शर्मा\n"+
    "बिसेष:- दीपक के तल मै अंधकार रहता है,\n"+
    "है हनुमान बाबा कृपया करके उस अंधकार का नाश करै,मुझे राक्छसो से मुक्त करै"
  },
  {
  id: 138,
  header: "bhout he achaa experience rhaa",
  question: 
    "Meri life ka sbse achaa experience rhaa shyad meri aatma lucky hai Jo main setu se jura Maine bhout kush sikha or aisa lagta hai k ab main kush nya pa liya hai main apni aatma se aapko thanx bolna chahta hoon Jo aap ne yeah prkash logon tk phounchaya or main chahta hoon k aage b aap hume rstaa dikhate rhen bs mere hanuman ji se ek anurodh hai k mere meri aatma ka dhyan always hanuman ji k charnoo main rhe or jab b meri aatma nya deh (body) dharn kre sda mera dhyan shree hanuman ji k sath jura rhe or mujh pr kirpa bnaaye rkhe .\n"+
    "He shree hanuman ji main bhout kush sikhna chahta hoon aapke darshan krna chahta hoon so please aap mujhe rasta dikhyan or us raste pr chlne main meri help kre\n"+
    "Or aap sdaa sdaa mere sath rhen\n"+
    "Jai shree ram jai hanuman"
  },
  {
  id: 139,
  header: "Bipin Gurjar",
  question: 
    "mera anubhav ki is tarah se hai, pahale mai svapno ki duniya ke barame nahi janata tha, par 8 ve athyay ko path kar mera pahele jo anubhav hua tha usaka muje thoda thoda khayal yaya hai\n"+
    "bat kuchha is tarah se hai ki pahele mai sundar kand path karata tha to pure din mai usake vicharo me rahata tha, ek din rat ko mai so gaya our muje ek svapnna aya jo kuchha is tarah tha mai mere gar me hu our bahar bade bade vanar mere garki chhat par aye hai, usame ed bahot bada vanar tha vo muje dekha gaya our ve muje pakad ne aya, mail bhaga our garme chala gaya, maine garke darava je undar se bandh kardiye, to vo vanar upar se mere ghar ki chhat tod kar garame agaya, mai bahot gabara gaya tha , fir usa vanar ne muje uthaya our mere gav ke bich me ek mata ji ka mandir hai hava legay jab mai vaha gaya to mera dar chala gaya our muje aisa laga ki mare sath to Hanumanji hai, mai ne unko kaha ki muje apke sath le jao to unhone muje kaha ki tum tumhare sare kapade utar do to hi mai le jauga, maine mere kapade utar diye our unhone mara hath pakad liya our udane lage our tabhi meri akha khul gai our mai sapane se bahar agya, vo yad karake muje ajabhi bahot achha lagata hai, par mai use ek sapana hi samaj ta tha, par yah 8 va adhay pathkar muje lagata hai ki vo sach much sahi me dadaji mere pas ayethe.\n\n"+
    "Sitaram"
  },
  {
  id: 140,
  header: "birth of a soul.",
  question: 
    "JAI SHREE RAM\n"+
    "As explained by Lord hanuman it was told that the ocean of souls have all their desires fulfilled when they are in the ocean but once they come out of it they have unfulfilled desires.A question arised in my mind that if the soul have their desires fulfilled then why do they to come out of the muktisagar and prays to lord Vishnu for other desires to be fulfilled.Please clear this doubt of mine.Thank you.\n"+
    "I m feeling very fortunate on having come in contact with this information which I was unaware of and feels like all the doubts which I had are starting to clear.\n"+
    "please give my gratitude to lord hanuman and touch the Lord's feet on my behalf when he comes next to visit.\n"+
    "JAI SHREE RAM.",
  answer:
    "Divine Soul,\n\n"+
    "Hope chapter 12 have cleared your doubts. Lord Brahma is the owner of souls. Everything is connected with each other. If a requirement arises in mortal worlds, Lord Brahma has to create waves in MuktiSagara so as to fulfill requirement of mortal worlds.\n\n"+
    "Blessings"
  },
  {
  id: 141,
  header: "Black magic",
  question: 
    "basically my and my family's life has been affected badly by black magic. And none other than my real aunt has been doing it. Me and my mum believe it as we've seen and experienced it but my grandparents are not ready to believe. Its a very difficult situation as it was getting very hard to escape from this because me and my mum lived at my gradparents house as my mum is divorced. And my aunt used to visit us frequently.\n"+
    "So we escaped to u.k. now we're here but I want to make the main aim of my life to achieve moksha and meet hanuman ji. How can I do that at home, myself and how can I get blessings of hanumanji. I really and badly want to speak to hanuman ji. Please tell me how can I do that.\n"+
    "Thanks that will be of great help to me",
  answer:
    "Divine Soul,\n\n"+
    "The target can easily mitigate and stop effect of black magic. If target allows other souls to influence himself/herself, then he/she becomes vulnerable to black magic. Hate is a form of influence others have on you. If you hate your aunt, that hatred becomes the cord through which your aunt can pass the black magic. Neither love nor hate. Remain indifferent to your aunt. Then she won't be able to do anything. Forgive her so that you stop hating her. Forget and forgive. Then black magic will stop.\n\n"+
    "If you want to meet Lord Hanuman, first of all know who you are. Are you a body? Are you a mind? Who are you? Pursue this question. Then layers of illusion which are blocking your path to Lord hanuman shall disappear and you will meet Lord Hanuman.\n\n"+
    "|| Ram ||"
  },
  {
  id: 142,
  header: "Bless me",
  question: 
    "Baba\n\n"+
    "Anjaneya,Please bless me and my family\n\n"+
    "Thanks,\n"+
    "Suresh"
  },
  {
  id: 143,
  header: "BLESS US",
  question: 
    "JAI SHRI BAJRANGBALI YOU ARE THE ONLY POWER ON THIS EARTH TO SAVE HUMANS FROM ANY PROBLEM.PRABHU KRIPA KARO BLESS MY MOTHER , BROTHER , HUSBAND AND ME .SAVE AND KEEP US SAVE FROM ALL THE PROBLEMS.BLESS US SO THAT WE REMAIN AS YOUR BAKTHS ALWAYS. APNE SHARAN ME RAKHLO PRABHU .JAI HO KRIPA KARO"
  },
  {
  id: 144,
  header: "Bless us with a positive attitude, perfect thinking skill, problem solving capability and perfect approach to every situation in life",
  question: 
    "Shri Ram Jai Ram Jai Jai Ram!!!!!! Shri Ram Jai Ram Jai Jai Ram!!!!!!\n\n"+
    "Ohh Anjaneyar, pls accept my bowings on behalf of my entire clan including my ancestors.\n\n"+
    "We seek mercy at your feet and seek your blessings in our journey to conquer our bad habits and shortcomings in us\n\n"+
    "Ohh Hanuman, please bless us with a very Positive and Optimistic attitude , self confidence , thought process, perfect thinking abilities ( analytical ,logical and leadership) , problem solving capabilities. Please bless us that whatever may be the situation in life our approach to life and situation is perfect and leads us to peace, happiness , material and spiritual progress.\n\n"+
    "Please bless us with the skills, competencies and capabilities to be a material and a spiritual success.\n\n"+
    "Please cure us of our shortcomings in mental aptitude, thought management, thinking and\n\n"+
    "analytical abilities. Let us tread every situation with calmness and caution and win over it\n\n"+
    "using your given capabilties and with faith ,patience, persistence and self confidence\n"+
    "keeping our senses, body , heart , mind and soul centered at the lotus feet of our Eastha devas and Guru.\n\n"+
    "Please bless us. we need it badly. we are sorry for not being able to nurture it. the problem\n\n"+
    "is with us only. But we are working hard to develop this but have failed over the years.\n\n"+
    "please have mercy on us and guide us through the highs and lows of life.\n\n"+
    "Please bless us with smart hardwork.\n\n"+
    "Please bless us so that we overcome mental and physical lethargy and work with\n\n"+
    "dedication, focus and persistence and achieve our material goals and vision .\n\n"+
    "Please bless us with material stability proper cash inflows and savings"
  },
  {
  id: 145,
  header: "Blessed with Baby Boy",
  question: 
    "Recently we blessed with Baby Boy and I sincerely thanks to Lord Hanumanji;\n"+
    "I am so happy;\n\n"+
    "I am reading the chapters and try to feel more from my soul rather than from my wish;\n"+
    "Now a days I am being so much busy with my office work and in spite of I cannot able to connect with my soul;\n\n"+
    "I pray and request Lord Hanumanji to give me enough guidance; so that whatever I do, I do it right and I can connect more with my Soul;\n\n"+
    "Jay Shri RAM! Love you Hanumanji"
  },
  {
  id: 146,
  header: "blessed Help me to get back my child and build a gr;eat career i",
  question: 
    "I m very much blessed to read it.found all abswers to my query\n"+
    "Request you to add more chapters, and try to make the arphnam sinpler\n"+
    "Let us add our choice of amount\n"+
    "And make the offeeribg\n"+
    "Lord Help me to decide,to take an action\n"+
    "Solve my problems and obstacles\n"+
    "Settlemy and my sons life peacefully with harmony and graet joy love from a supporting husband.\n"+
    "Each word communicated. Make me feel realistic\n"+
    "Thabk you",
  answer:
    "Divine Soul,\n\n"+
    "You can choose the \"Other\" option to enter amount of your choice. You can also make Arpanam in any temple near you.\n\n"+
    "Blessings"
  },
  {
  id: 147,
  header: "Blessing",
  question: 
    "My bow to the Lord Hanuman..\n"+
    "Hi setu master,today(14.8.2015) i got interview call letter from my dream company.This call letter came for me is a big miracle.I believe it happened due to my lord,thanks to my lord,then i prayed constantly for this interview as you mentioned for me to pray.Thank for you too.Monday is the interview.Pray for me on my behalf in sakshat pooja to get SUCCESSFUL in this interview to my Lord Hanuman.Maa sharada devi to be with me to get clear in this interview.I beg on your feet my Lord Hanuman.Please help me.Shower your blessings for me to get SUCESS in this job.Convey this message to Hanuman ji ,setu master and get reply fr me please.Dont tell me that we wont tell your future.Please reply me.\n"+
    "Query:\n"+
    "1.Many people pray to god in different language,does he know all language and understand our prayer???\n"+
    "2.Is Lord Hanuman look like same as the photo you uploaded in setuu bhakthimala page with those ornaments and look??",
  answer:
    "Divine Soul,\n\n"+
    "Language comes out of your lips only after thoughts are generated in your mind and respective vibrations are generated in your soul. The relationship between you and God and between your soul to His supreme soul. Lips or language have nothing to do in that relationship.\n\n"+
    "Same is true for the look of the Lord. Your eyes are an instrument of your soul. Look may change from instrument to instrument. You may see Him in differemt form and someone else may see Him in some other form/look.\n\n"+
    "Blessings\n\n"+
    "Note : Your prayer has been conveyed to the Lord."
  },
  {
  id: 148,
  header: "Blessings",
  question: 
    "As soon as, I had started praying to Hanuman, I have experienced courage and peace in the family. I am still far from all the vices, I still get angry and lazy. I know that by the constant prayers, I can overcome it. I had been going through a particularly a bad phase with my family getting affected and resentment being built.I have been able to bring down some amount of negativity and the resentment.\n\n"+
    "I pray to the Great Hnumanji that to help me in facing the world and helping others overcome their difficulties. i would also want my family to be blessed especially my children, wife and my mother and father to be blessed by your divine grace. I would want Hanumanji to bless us with the courage and intelligence to help us help the community and the society to do greater good. Hanumanji I would also seek your blessings for good health, intelligence and wealth through good karmas, to be able to lead a pious life. Hanumanji please bless my children with intelligence and a sense of commitment for the poor in the society, so that they are able to do good work for teh society.\n\n"+
    "Jai Shree Hanuman"
  },
  {
  id: 149,
  header: "blessings",
  question: 
    "Jai shri ram jai shri hanuman. Pl bless me with dear hanumans faith surrender n love fr shri ram to my dear guru also. May my self experience happiness of a very healthy wealthy happy spiritual mother and husband and son who r healed completely body mind n soul with the grace if god. My mother is healed completely. May myself experience happy n loving relationship with all my karmic souls. Thank u n love u fr blessings."
  },
  {
  id: 150,
  header: "Blessings",
  question: 
    "Thank you for the 14 chapter.\n"+
    "I had this experience in year 1991 that I am pure consciousness not the body nor the soul.\n"+
    "And on February 2016 on my birthday experienced gentle blessing from lord Shiva.\n"+
    "Om Namah Shivaya\n"+
    "Thanks to lord Hanuman"
  },
  {
  id: 151,
  header: "Blessings of The all powerful all merciful Mahabali Hanumanji",
  question: 
    "My experiences are joyful and beautiful from childhood to adult hood. I cannot mention anyone particular incident as there are many times that Bajrangbali Baba, Hanumanji has bestowed my family and I wid his mercy. Even as an ignorant innocent child I was blessd with his grace just by chanting the Sri Hanuman Chalisa.\n"+
    "when i fail to get restful sleep chanting his name brings me peaceful rest. His holy name and grace has saved my gran from untimely death on numerous occasions esp when she was medically dead she came back to us and as she did she found his all powerful presence by her side.\n\n"+
    "Hanumanji helped me find truth during a very dark time in life. With his grace\n"+
    "iwas able to move on. He is all knowing and all seeing. Right now he knws my needs. I humbly prostrate\n"+
    "before u hanumanji and seek yr love protection and blessing. May i find success happiness good health wealth and prosperity to be able to live my life\n"+
    "in this maya world during these dark times of Kaliyug. May I always be your\n"+
    "humble servant till the end of my days\n"+
    "until that glorious moment I find\n"+
    "salvation or moksha from this cycle of\n"+
    "birth and death. Jai Sri Ram. Jai\n"+
    "Hanuman."
  },
  {
  id: 152,
  header: "Blessings from Goddess Ganga",
  question: 
    "After reading this chapter my soul is getting near to Maa Ganga and needs her blessing for purifications."
  },
  {
  id: 153,
  header: "Blessings of Lord Hanuman",
  question: 
    "Lord Hanuman has showered his blessings upon me on several occasions, big and small.He has protected me from several negative incidences. I am grateful to him.\n\n"+
    "Also I look forward to be showered by his blessings more and I want his blessings so that I can be his disciple till my last breath. I want him to help me to do good deeds which will help others .\n"+
    "He has recently blessed me with a very good feeling/emotion longed by everyone and I want him to bless me to retain this feeling lifelong and be happy.\n\n"+
    "I pray to him for keeping me,my mother physically,mentally and spiritually healthy.My heartfelt gratitude and devotion for him. Forgive me Lord Hanuman for all my sins, fulfil my desire and bless me ,my mother and my dear ones.",
  answer:
    "This experience has been communicated to Lord Hanuman in Sakshat Hanuman Pooja."
  },
  {
  id: 154,
  header: "Blessings from Lord Hanuman",
  question: 
    "Jai Bajrangbali\n"+
    "Jai Shree Ram\n\n"+
    "Hey Hanumanji, you know everything. Nothing is invisible from you. I need your blessings at every step of life. Without your blessings, I am nothing. I can't do anything without your blessings. Keep your blessings on me always.\n\n"+
    "Prabhu, I request you to keep me healthy always without any disease or problem either mental or physical. Please cure me from all kinds of problems or diseases which I have right now. Bless me with a good and healthy body. Also, Prabhu, keep my mind sound and calm so that I do everything perfectly. Prabhu, I lack in confidence and I don't have decision-making capacity. So, give me confidence so that I take decisions independently on my own. Also, protect me from evil things.\n\n"+
    "Hanumanji, make my soul pure so that I come very close to you and get your sakshat darshan in this birth of mine. Guide me to follow the right direction in life always without any diversion. Erase negativity from me. Give me positive energy. Fill my mind with positive energy only so that there is no place for negative thoughts in my mind.\n\n"+
    "Hanumanji, I have lost my job and am looking for another one. Bless me Prabhu so that I get a new job soon. You know how important job is for me right now. I have full faith in you. I strongly believe that very soon you will bless me with a very good job.\n\n"+
    "Hanumanji, please forgive me if I have done anything wrong either in this birth or previous births. Please accept my prayers and keep your blessings on me forever.\n\n"+
    "I request the Mathangs to pray to Lord Hanuman on my behalf.\n\n"+
    "Truly speaking, I lack in words to thank Setuu for connecting the modern world with Lord Hanuman. You people are really doing a great job.\n\n"+
    "Thank you Mathangs.\n"+
    "Thank you Setuu.\n"+
    "Regards"
  },
  {
  id: 155,
  header: "Blessings to Mankind",
  question: 
    "From yesterday i have started my readings on setuu..This life having a monetary issues every day..Yesterday didn't have enough money to purchase some medicine for parents which they also refuse because they might be knowing my status..Today morning by the grace of Hanuman Ji , onces i get up & when to the shop for that medicine and found that the medicine is made available to me with only the Coins in the purse and then i started to read the next two chapters also from this Setuu..How life & problems are managed....Namaskar & Pranam ."
  },
  {
  id: 156,
  header: "Blessings for my Father",
  question: 
    "Jai Shree Ram\n"+
    "Jai Maa Jaanki\n"+
    "Jai Bajrangbali\n\n"+
    "Hanumanji, you know very well how simple my father is. Everyone in the family and outside tries to take advantage of his simplicity. As far as I know, in recent past many people have taken advantage of his simplicity.\n\n"+
    "Prabhu you know the scenario at our house. Nothing is hidden from you. Everyone is pressurizing my father to sell the house. He is left alone. No one is from his side. Everyone takes the other side. He is not able to face all these alone. Even I live outside and I am looking for a good job. So, he has become weak as I am also not earning. He has to look after me also. He has got retired and there is no pension too. He always lives in anxiety. He has so many tensions regarding my job and house. He is not healthy too. He has so many health issues like diabetes, blood pressure etc. Also, he takes tensions more than required. He is very emotional too. He wants to live with peace with all family members i.e. uncles, aunt etc. But it doesn't seem possible now because nowadays no one wants to live united. Everyone wants to live separately.\n\n"+
    "I think my father is very much attached to me because he doesn't want me to go far away from him for job or anything. Many a times he has told me not to look for jobs outside country or very far away from home. He cares for me lot and also keep on thinking about me.\n\n"+
    "So, Hanumanji, bless my father with good health, strength, patience and confidence so that he face everything and do well in life. He is very much involved in worship and all that. Bless his soul so that he move towards Moksha after settling all his Karma.\n\n"+
    "Astrologers also tell that he is suffering from \"Pitradosh\" and some other planetary problems of Rahu, Ketu etc. Hanumanji, take care of these too. Bless my father so that no dosh or anything like that even dare to come near to my father. Save him from evil powers too. Some days ago, he saw something in his dream and got very much frightened. My mother told me this had never happened before i.e. the way he got scared. He was sweating very much.\n\n"+
    "Hanumanji, keep you blessings on my father always and forgive him if he has done anything wrong either in this birth or previous births.\n\n"+
    "Thanks and regards.",
  },
  {
  id: 157,
  header: "Blessings for my Mother",
  question: 
    "Jai Shree Ram\n"+
    "Jai Hanuman\n"+
    "Hanumanji, aap sabkuchh jaante hain. Meri mummy theek nahi rahti. Hamesha usko koi n koi problem rehta hai. Kabhi sharirik to kabhi maanshik.\n\n"+
    "Ungliyon ke dard aur pair ke dard se to wo hamesha pateshan rehti hai. Kabhi kabhi sir me bhi usko kaafi dard hota hai. Aur uska wo skin wala problem jo ki ab theek ho rha hai, wo puri tarah se theek ho jaaye. Aur to aur ab to usko diabetes bhi ho gaya hai. Prabhu uske aankh me koi problem n ho. Sab theek rahe.\n\n"+
    "Wo chinta bhi bahut krti hai. Har samay sochti rehti hai. Uski chinta ka main kaaran meri job aur ghar ka problem hai. Sochte sochte uska aur jyaada tabiyat kharab ho jaata hai.\n\n"+
    "Hey Hanumanji, main apni mummy ka dukh aur taklif nhi dekh sakta. Ya to meri mummy ka dukh aur takleef door kar dijiye ya mujhe itni shakti dijiye ki main ye sab dekh saku. Hanumanji, mummy ko har takleef se door rakhiyega aur kisi bhi prakar ki buri shakti se raksha kijiyega. Mummy pe hamesha apni kripa banaye rakhiyega prabhu. Usse ek swasth aur sukhi jeevan ka aashirwaad de prabhu.\n\n"+
    "Thank you Setuu\n"+
    "Thank you Mathangs\n"+
    "Regards"
  },
  {
  id: 158,
  header: "Blessings for my Parents",
  question: 
    "This is for my parents Prabhu. Hanumanji, you know everything.\n\n"+
    "My mother always suffers from pain in legs, hands and other body parts and that skin problem too. Also, she has many tensions and worries in life. One of her major worries is regarding my job and future. Also, she has tensions regarding our house. Please make my mother healthy and make her free from all kinds of worries and tensions. Also, protect her from all kinds of evils or troubles or sufferings or anything like that. Please Hanumanji, keep your blessings on my mother always.\n\n"+
    "My father also has many sufferings and tensions. One of the most important sufferings of my father is that of diabetes. He has some other sufferings too. His main tension is that of our house and how to spend life after retirement without pension. Also, he has tensions regarding my job and future. Please Hanumanji, remove all tensions and sufferings from my father's life. Give him a very good health and sound mind so that he may enjoy his life. Bless my father Prabhu.\n\n"+
    "I request the Mathangs to pray for my mother and father in their daily Shakshat Hanuman Puja. I hope all the worries and tensions of my parents will vanish very soon with the blessings of almighty Hanumanji.\n\n"+
    "Thank you Mathangs. Thank you Setuu.\n\n"+
    "Jai Bajrangbali. Jai Shree Ram."
  },
  {
  id: 159,
  header: "Blessings needed",
  question: 
    "Hello Setu Master,\n\n"+
    "While I am still waiting for the answers to my questions on many of the queries I shared on Setuu websitre, but particularly today, I seek blessings for my mother from Lord Hanuman. My mother is going for a medical operation for the removal of stones from her gall bladder. I seek blessing for her from Lord Hanuman for the successful operation and for her good health. Lord Hanuman please be with her and bless her!\n\n"+
    "Please convey this to Lord, asap.",
  answer:
    "Dine Soul,\n"+
    "Your prayer has been included.\n\n"+
    "Queries may take time because there is a limit to how many queries we can discuss in Sakshat Hanuman Pooja everyday. Number of queries submitted by devotees are rising exponentially. We will try to include all queries. Please have patience.\n\n"+
    "Blessings"
  },
  {
  id: 160,
  header: "Blessings needed - 2",
  question: 
    "Continued from #520522\n\n"+
    "Thank you so much!\n\n"+
    "I request Hanuman ji to please be with my Mother.\n\n"+
    "I am out- of- city and could not be with her in person. Today morning, I got to know that doctor did a minor operation yesterday. But it got a bit of complications.\n\n"+
    "They will do the next operation in a week or so.\n\n"+
    "Please Setuu, communicate this message to Lord. My family needs His blessings!\n\n"+
    "We pray for full recovery of my mother!\n\n"+
    "Jai Shri Ram"
  },
  {
  id: 161,
  header: "Blessings for new venture",
  question: 
    "Dear Lord\n"+
    "Have joined a business till date run solely by my husband . Seek your Blessings for the same and to protect my family ! Jai Hanuman"
  },
  {
  id: 162,
  header: "Blessings required for fighting in kaliyuga",
  question: 
    "Please accept pronam lord hanuman ji from a humble soul of kaliyuga. My lord You know me my past, present and my future --You know me best more than I do. There is a vast change in me since I am reading your leelas. I am feeling blessed by this opportunity that my destiny rather YOU have bestowed upon me. I have a little daughter named her Radharani . In this kaliyuga I as a mother seek Your Blessings on her for a long and good life . I beg your blessings for her entire life when the world is witnessing such a war and pralay. I love my husband as he has been my sole support in my life. I fear for him as well. Thirdly I am trapped in my desire as your leela 11 th chapter has mentioned. kuruksetra has begun in 2015. I need your blessings to ride through this time along with my family. Please protect us from adharma and evil of war. I do not want to loose any of them. LORD please help us.",
  answer:
    "Blessings.\n\n"+
    "||Ram||"
  },
  {
  id: 163,
  header: "Blessings of Shri Ram ji",
  question: 
    "jai siya ram\n"+
    "after reading 10th chapter i got admired that my gurudev Hanumanji can change all the bad /worst happening of thier bhakts into good happenins by good luck.lord Hanuman ji is always with me and my family by the blessings of supreme lord shri Ram ji.\n"+
    "Dinesh Gupta\n"+
    "sewak pawan putra Hanuman ji"
  },
  {
  id: 164,
  header: "braham gyan kaise prapt ho sakta hai",
  question: 
    "Namaskar ...jay bajrang bali\n"+
    "Sir mera question ye hai ki brahm gyan kaise prapt kare.brahm gyan k liye kya kya sarte hoti hai.or ha hamare hindu dharm me 33karod devi devta hai ham kinka poojan kare or kinka chhode.parampita parmeshwar ka sawroop kya hai .koi kahta hai we nirgun,nirankar hai.koi kahta hai we sagun rup hai.koi shiv baba ko to koi bhagwan vishnu ko bada batata hai .ab aap bataiye ki ham is bharam se kaise nikle.parampita parmeshwar kon hai or brahma vishnu or shiv ki utpati kaise huaa.is pure brahmand ka nirman kisne kiya.kya koi maa durga ki bhakti karke moksha prapt nahi kr sakta hai.kripya samadhan kare or sahi margdarshan de\n"+
    "Jay mata di\n"+
    "Jay bajrang bali\n"+
    "Rupesh pandey",
  answer:
    "दिव्य आत्मस्वरूप ,\n\n"+
    "अगर आप शांति और गंभीरता से हनुमान जी की लीलाओं के यहाँ पर प्रकाशित किये गए अध्याय पढेंगे तो आपके सभी संशय एक एक करके दूर हो जायेंगे | आपके शब्दों से लगता है कि आपने एक भी अध्याय नहीं पढ़ा है |\n\n"+
    "|| राम ||"
  },
  {
  id: 165,
  header: "Brahma ji Sansar ke Srijan kyun karte hain?",
  question: 
    "Agar Atma Muktisagar mein Purna (complete/no desire) hai toh sagar ke sataha (surface) pe kyun aati hai? Aur yadi Brahma ji usse Apne attraction se bahar extract kar lete hain toh Atma kis Ichcha-vishesh (particular-wish) ke saath bahar aati hai (as it was having no desire in its previous state)?",
  answer:
    "इस बारे में आप आगे की लीलाओं में पढेंगे लेकिन अभी आप यह जान लीजिये कि इश्वर एक है | जब हम उस एक इश्वर के दृष्टिकोण से देखते हैं तो न तो कोई सृजन हो रहा है न ही विनाश | सब कुछ शांत है | लेकिन आप उस दृष्टिकोण से नीचे आकर त्रिदेव यानी ब्रह्मा , विष्णु , महेश को देखते हैं तब आपको सृजन , पालन और विनाश दिखाई देता है | उस दृष्टिकोण में ब्रह्मा जी आत्मा में उसी तरह इच्छाएं पैदा करते हैं जैसे चंद्रमा समुद्र में लहरे पैदा करता है | सभी आत्माए भिन्न भिन्न इच्छाओं के साथ मुक्तिसागर से उठती है |\n\n"+
    "|| राम ||"
  },
  {
  id: 166,
  header: "Bram Ki Duniya",
  question: 
    "JAY SHRI RAM JAY HANUMAN\n\n"+
    "Aj Date 14 jun 2015 Time 11.23PM\n\n"+
    "Aj Mene Lesson 1 (Chiranjivi Hanuman Ka Agman) pada. Muje is bare me What’s Up Mobile App ke duwra pata chala. Is lesson me Hnuman ji ki lila ke bare me bataya gya he. Is lesson me Hanuman ji ne badi saralta ke sath ek balak ki matao ki samsya ka samadhan kiya. Aj muje Is bat Ka Pata chala ki jo kuch bhi hamare aas-pas he yah sab bram he, Agar koi vyakti apne jiwan ko bhagwan ki sewa me laga de to uska jivan dhany ho jayega.\n\n"+
    "JAY SHRI RAM JAY HANUMAN\n\n"+
    "EK CHOTA SA BHAKTA\n\n"+
    "RAJIV GUPTA"
  },
  {
  id: 167,
  header: "bramgyan",
  question: 
    "Meri life pahle bhut aachi to nahi thi per meri bachpan se hi satsang Mai man lagta tha .bhut se kitabe read kiya per ko santi nahi mili jab satgur meri life Mai mile tab bramgyan Hua tab Jo kitabe and satsang sunta tha tab samaj Mai aane laga aur nirankar ang sang dikai dene kaga tab pata chala Ki god hamare kitana karib per ab ja samj paya .shri hanuman ji Ki ye bate read kar ke mujhe lag rah hai Ki Jo much Mai bhati karke nahi sik paya tha Vo yaha per read kar ke kar liya.papa ji ghar per her Sal satsang karate hai ak Sal mujako sapne Mai hunman ji apni sena ke sath satsang Mai mere ghar per aaye the tab Mai hanuman ji ko Darshan kar paya tha .aue satsang sun kar chale Gaye sab Puri but ye samag Mai nahi aaya Ki kaha se aaye aur kaha sab chale Gaye."
  },
  {
  id: 168,
  header: "bramhagyan ki jigyasa",
  question: 
    "Baba ek jigyasa tha ki kya tridevo ke upar koi aur dev hain! Hum india main sabhi radha Krishna ko sabse upar jante hai aur woh golok dham main rahte hai.aur Vishnu dev unhi ke ansa hai aur yeh bhi batate hai ki Vishnu ke avtar hai! Kya sach main koi golok dham hai yah Vishnu lok hi sesh hai! Baba purna bramha koun hai aur sabhi kahte hai bramha to nirakar note hai! Phir sakar kaisa? ( baba kripya meri is jigyasa ko sant kare mujh mera marg darsan kijiye( prabhu ka sebak ( Sukanto Mukherjee) from- india",
  answer:
    "नाम, रूप और पहचान के जाल में मत फंसिए | परम सत्य किसी नाम या रूप का मोहताज नहीं है | परम सत्य का वर्णन करने की आवश्यकता नहीं होती | परम सत्य स्वयं अनुभव किया जाता है, किसी और के वर्णन की आवश्यकता नहीं होती | जो ज्ञान आपके मस्तिष्क में बैठना चाहता है वह ज्ञान भ्रमज्ञान है , ब्रह्म ज्ञान नहीं | जो ज्ञान आपको मस्तिष्क और तमाम पहचानों से ऊपर उठाकर परम सत्य का अनुभव करा दे वह ब्रह्म ज्ञान है | उसकी खोज कीजिये |\n\n"+
    "||राम||"
  },
  {
  id: 169,
  header: "bramhagyan ki khoj",
  question: 
    "Baba mera naam Sukanto Mukherjee hai.aur mujhe yesi hi gyan ki talash thi Jo prabhu ne diya.isse Maine Jana ki atma gyan kiya hoti hai.Sab kuch samanya sa hone laga hai.baba prabhu jab Vishnu lok ki yatra ke liye ja rahe the sath main 2aswini Kumar bhi the.baba mera karo jab hanuman ji mukti sagar ke bare main bata rahe the mujhe lag raha tha ki main unhi ke bich main khara hun aur unki batyen sun raha hun! Baba Maine Jana hai ki apne indriyo ko kaise bas main karna hai! Baba main ek Krishna bhakt hun aur main mukti nahi balki Krishna ko cahta hun! Unki lilao ko saksat dekhna cahta hun! Baba ap bajrang Bali ko mere bare main batayenge na? Kripya daya! Ap ko mera pranam!!",
  answer:
    "इन्द्रियों को बस में करने के लिए पहले यह जानना आवश्यक है कि आप आत्मा हैं , देह नहीं | जब आप यह जान जायेंगे , इन्द्रियं स्वत बस में हो जायेंगी |\n\n"+
    "||राम||"
  },
  {
  id: 170,
  header: "Brownys health request",
  question: 
    "Lord Hanuman I humbly request you to cure Browny of her disease. Help her gain weight and muscle mass. Protect her from all side effects of medications. And please activate her pancreas and protect her intestines from all infection and inflammation . Please help me to know and give the right treatment for her. Help her lead a healthy and happy long life. This I ask as the deepest favour from you. I place my request at your golden feet dearest Hanuman . Please grant me this favour"
  },
  {
  id: 171,
  header: "Bus ek chota sa swal",
  question: 
    "उर्वा ने कुछ पल सोचा और उत्तर दिया – \“हे प्रभु, मेरे मस्तिष्क में एक ज्ञान है | वह ज्ञान मुझे बताता है कि यह चीज सेब है | अगर मैं उस ज्ञान को अपने मस्तिष्क से निकाल फेंकू , तो मैं इसे सेब की तरह नहीं देखूंगा , मैं इसे ...\"\n\n"+
    "\“... एक अनजानी चीज की तरह देखूंगा |\” हनुमान जी ने वाक्य पूरा किया और बोले – \“ठीक | तुमने सेब को गायब कर दिया लेकिन उसके स्थान पर एक चीज रह गई | क्योंकि तुम इसे एक अनजानी चीज की तरह देखोगे | क्या तुम इसे पूर्णतः गायब कर सकते हो?\”\n\n"+
    "Jab hanuman mandal me etny log baithy hai or sb us seb ko dekh rahy hai to sirf urva ke astitav se jab apple ka gyan nikal jata hai to apple gyab kaisy ho jata hai jabki baki log bhe to apple dekh rahy thy.",
  answer:
    "दिव्य आत्मस्वरूप ,\n\n"+
    "कृपा ध्यान से पढ़ें , सेब केवल उर्वा के लिए गायब होता है , किसी अन्य के लिए नहीं | यही तो रहस्य है यहाँ | ऐसा करके उर्वा ने काल देव को अपना ऋणी बनाया है किसी अन्य ने नहीं | इसलिए काल देव उर्वा को हर्जाना देने के लिए बाध्य हैं किसी अन्य को नहीं | इस बात पर आप गहराई से विचार करेंगे तो आप पायेंगे कि जो चीजे आपके सामने उपस्थित हैं , वो चीजे इसलिए उपस्थित हैं क्योंकि आप उपस्थित हैं और आपके मन में वो भ्रामक ज्ञान उपस्थित हैं जिससे आप चीजों को पहचानते हैं | योग साधना आँखे बंद करके बाहरी संसार से ध्यान हटाना नहीं है बल्कि खुली आँखें होते हुए भी बाहरी संसार को न देखना योग साधना है |\n\n"+
    "||राम||"
  },
  {
  id: 172,
  header: "Business not moving forward",
  question: 
    "Dear Hanumanji\n\n"+
    "I am facing lots of obstacles for my business, could not move further steps everything is getting blocked while going forward towards my business. Now I am facing lots of financial burdens commitments are not in my favour.\n\n"+
    "Plenty of projects in hand but nothing is getting forward due to finance block, please pray for me to come out of this situation.\n\n"+
    "Regards\n"+
    "Jerusson Devassy"
  },
  {
  id: 173,
  header: "buy new house",
  question: 
    "Jai SRI RAM\n"+
    "JAI SRI HANUMANJI\n\n"+
    "WE need a own beautifull house,\n"+
    "we need knowledge about GOD"
  },
  {
  id: 174,
  header: "BVR Murthy",
  question: 
    "Jai Sri Ram\n"+
    "Swamy I am disturbed about my surrounds, what will be the future of our little ones. Kindly help them in finding the meaning of their life and save the world. It is going from bad to worse. Please same the future of the human beings.",
  answer:
    "Divine Soul,\n"+
    "Your children are not your children alone. Their souls are on the journey from one birth to another since a long time and Lord is watching the path of their journey. Do not worry, they are under protection of Lord. He knows what is best for them and their souls. You should just pay your duties towards them and leave the worry for the Lord.\n\n"+
    "Blessings"
  },
  {
  id: 175,
  header: "Call for help and guidance",
  question: 
    "Jai Sri Ram.\n\n"+
    "I have been thro' a lot of challenges at work from last June and was forced to exit the organization in Jan this year. I am looking for jobs but in vain. I have always believed that prayers move mountains and continue to pray to Lord Hanuman by reciting Hanuman Chalisa 11 times everyday. My belief is still strong and wait for the day when my prayers will be answered. However, I am worried about my wife as she is bearing all the financial pain of the family and working hard to make ends meet. There is also a possibility of leaving the family to look for jobs elsewhere. Is there a special prayer that I can do to please the lord and get a job soon? It would be also good if you can do some prayer for me so that I get the job in the country where I currently stay (Singapore).\n\n"+
    "Thanks & Regards\n"+
    "Prabhu",
  answer:
    "Divine Soul,\n\n"+
    "Your prayer has been conveyed to the Lord.\n"+
    "Take care of these 4 things-\n"+
    "(1) Make sure you have a deep desire to reach goals.\n"+
    "(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n"+
    "(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\", \"worry\", \“doubt\”, \“victimhood\” etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n"+
    "(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled.\n\n"+
    "Blessings"
  },
  {
  id: 176,
  header: "calling lord hanuman",
  question: 
    "Jai shree Ram\n"+
    "I have met 2 peoples in my life who arw either devotee or tapaswaii of lord hanuman.\n"+
    "And I have seen that, lord hanuman comes to there body on particular day and time and help in resolving all problems which we humans have!\n"+
    "So is there a way through which I can also call him and other people get benefit in there life, through the grace of lord hanuman!\n"+
    "please guide me!\n\n"+
    "Jai shree Ram",
  answer:
    "Divine soul,\n\n"+
    "Yes, Lord Hanuman can control anyone's body in order to accomplish something with that body. If you want Lord Hanuman to control your body, then you must create a reason around you as to why Lord Hanuman should control your body. In other words, you must surround yourself with true devotees of Lord Hanuman who are in need. In order to help them, Lord Hanuman may \"come in your body\". You can start by organizing a small Satsang at your place where you can invite Lord Hanuman'd devotees. Sing Bhajans together and spend time together in Bhakti of Lord Hanuman. Secondly, you must be pure at the time when devotees are assembled. No ill thought should enter in your mind. If you fully involve yourself into Bhajans and Bhakti, no ill thought will enter your mind and you will become pure. Then Lord Hanuman can \"enter\" your body.\n\n"+
    "Blessings"
  },
  {
  id: 177,
  header: "Can Hanumandal Prayer be conducted at our homes",
  question: 
    "Jai Shree Ram,\n\n"+
    "The 7th Chapter is having a wonderful experience of how the Puja is conducted inside the hanumandal. How each past karma is peeled off one-by-one by devoting flowers/fruits to the Lord Hanuman.\n"+
    "Can we normal human beings living in this world perform the same puja/prayer at our home for other peoples, or our family members.\n"+
    "What is required in order to perform the same prayer.\n"+
    "And will lord hanuman can come to us in physical form in order to attend the prayer.\n\n"+
    "Please guide me.",
  answer:
    "Divine Soul,\n\n"+
    "First of all Asurrahs must be kept away. You do not have secret oil but you may try to put a red thread around the circle. Secondly the Yajmaan and Brahmana cannot be same. You can perform Pooja for someone else who brings fruits or flowers as a Yajmaan. You should be pure enough to judge whether a flower or fruit belongs to a Surrah or Asurrah. You will get a vision when you touch the fruit or flower on your forehead. If you get negative vision mostly, put that in red basket. If you get positive vision largely, put that in a white basket. If you draw a blank, offer that to Lord.\n\n"+
    "Blessings"
  },
  {
  id: 178,
  header: "Can I come back to outer world after completing after one year of Sadhana",
  question: 
    "1)Pranam Setuu masters& Mathangs\n"+
    "I have read in your website that if you have strong yearning to see higher truth and meet God you can come to setuu Hanuman bodhi & have penance\n\n"+
    "I have read one sadhaka experience in Setuu Hanuman bodhi that He know Setuu Hanuman by the program which was conducted by aaj tak channel and he sent an application to you for Sadhana\n"+
    "You asked some questions and selected him\n"+
    "And after completing one year of Sadhana\n"+
    "We are left with 3 options\n"+
    "1) you can still go to outer world\n"+
    "2) if you want to continue Sadhana you can continue your Sadhana in Setuu Hanuman bodhi\n"+
    "3) you can go to outer world and spread Hanuman Leela's as Hanuman devotees\n\n"+
    "In this Sadhana you are given only two pair of white clothes And only milk and fruits to eat\n\n"+
    "My question is when I came to setuu Hanuman bodhi And after completing 1 year of Sadhana\n"+
    "Can I still come to the outer world? And have a normal life?\n"+
    "Or if I come to setuu Hanuman bodhi there is no chance of returning to outer world and having a normal life?",
  answer:
    "Divine Soul,\n\n"+
    "We place no restrictions. But once you complete Sadhana, it is highly unlikely that you would want to lead an ordinary life in mainstream society. Sadhana takes away your limited identity and gives you infinite identity.\n\n"+
    "However, if during the course of Sadhana, your soul gets Moksha, your body shall be occupied by a pure soul from Vishnuloka which we call as \"visitor soul\". That soul may decide to go back to mainstream society of Lord Vishnu assigns any task which mandates the soul to go to mainstream society.\n\n"+
    "Blessings"
  },
  {
  id: 179,
  header: "Can a woman visit temple or chant Lord's name during her menstruation(periods)?",
  question: 
    "Aapko Saadar Pranam,\n"+
    "I was taught not to worship and to stay away from all idols. Please tell me.",
  answer:
    "Divine Soul,\n\n"+
    "Prayer is done with soul, not body. Your soul communicates with Lord, not body. If you are able to rise above body; If you are able to rise to level of soul; then you can pray. Functions of body sometimes create hindrance and don't let us rise to level of soul. For example, if someone is drunk he can never rise to level of soul, hence he/she cannot pray. Whether it is menstruation or any other body condition. you have to decide whether you are able to rise above your body or not. If you are, you can pray.\n\n"+
    "Blessings"
  },
  {
  id: 180,
  header: "can you help me",
  question: 
    "Please if anyone available who can judge what hanuman ji realy want from me.\n"+
    "I Can not survive with thses dilemmas.\n"+
    "If they want my future to get worsed, i surely help them to do so.\n"+
    "I only want to know what they want from me. I dont need anything from them.\n"+
    "Please clear these dilemmas and tell what one want from me.",
  answer:
    "Divine Soul,\n\n"+
    "There are only two questions-\n\n"+
    "(1) What do you want?\n\n"+
    "(2) What do the circumstances want you to do?\n\n"+
    "There is no third question.\n\n"+
    "\"What Lord Hanuman wants you to do.\" This is third question created by your own mind. As soon as you create this question, dilemmas will start. If Lord Hanuman wants you to direct you, He will create circumstances in your life to direct you. Therefore always ask yourself- \"What do the circumstances want me to do?\""+
    "Now, opposite circumstances can be there because of two reasons-\n\n"+
    "(1) Because of you\n\n"+
    "(2) Because of Lord Hanuman\n\n"+
    "How to know that which type of circumstance are you facing? Always assume that the circumstance is of first type i.e. created by you. NEVER ASSUME THAT CIRCUMSTANCE IS CREATED BY LORD HANUMAN. YOU DO NOT HAVE THE AUTHORITY TO ASSUME ON BEHALF OF LORD HANUMAN. You can only assume for yourself not Lord Hanuman.\n\n"+
    "Therefore always think that the circumstance is created by me not Lord Hanuman. Act according to that assumption. If the assumption is wrong, you will find an alternative way suggested by Lord Hanuman which you can follow.\n\n"+
    "Never abandon a path because of circumstances until Lord Hanuman shows an alternative path.\n\n"+
    "Blessings"
  },
  {
  id: 181,
  header: "Cancer treatment",
  question: 
    "My friends relative is fighting with 4th stage cervical cancer.She wants blessing so that she cud get cured.Any form of help will be highly considered.We're seeking Devine intervention. Kindly Reply."
  },
  {
  id: 182,
  header: "Chandra Prakash",
  question: 
    "H baba me to bas ye chahta hu ki mujhe jab bhi is sansharik jiwan se mukati mile to me apke charno me rhu apka sewak banke. h baba mujhe shakti do or sad bubbi bhi taki me is jiwan me kuch kr saku. He baba agr mujhe koi galti hui ho to mujhe maaf kar dena me to apka bccha hu h malik rahem kro apke daas pe h baba mere jiwan me apki karpa karna jay jay siya ram jay jay hanuman h mere parm pita is jiwan me sabhi ko ektha pureak rakhna sabhi ko sd buddi dena"
  },
  {
  id: 183,
  header: "The change and the present turmoil",
  question: 
    "O lord Hanuman,\n"+
    "I have been seeing lots of positiveness since i started praying u and reciting the hanuman chalisa,i find calm when i visit ur temple every morning,and i have got strong hopes that i will shine in my future professionally also and i hope u to stand by me when we are gonna start our new business shortly,sometimes i face a bit of health issues but its not a matter of concern as they are not major,but the only thing which is killing me now from inside is about my love life,as you know that i have been in love with a girl who also loved or still loves me,o lord i dream of making her my life partner but due to family restrictions i cannot marry her as she is from our family itself and we dont marry blood relatives,and over this her marriage has been fixed due to this i lose my calm most of the time and even think of doing wrong things to her which i dont want to,and even my relationship with her is getting spoilt due to my aggressiveness, i want her to love me as she used to earlier , o lord as u know i hav never been in any kind of relationships earlier and this was my first one, being a human i too like to be loved and love , if this was supposed to be happen then y did she come into my life first of all and made my life beautifull for few days?iam totally going mad about her ,please hanuman ji bless me with her for my entire life,ur blessings can do wonder this is a small thing for u,i want her love by any means, i cant tolerate her to be with some other person ,and coincidentally we both started praying you for our present problem,please babaji bless me for this, i dont want a alternate of her,i want her to be my wife,with ur blessing everything is possible , please dont let me down in this matter,i have experienced lots of negative thing in my life like in studies and financial matters and i have tolerated them,but i cant take this lightly ,please bless me baba ,i dont want her to go away from me ,i have not got anything in my life which i desired since my childhood i have only compromised for everything but please dont make me compromise on this,i cant take it,the thoughts are killing me day by day, please bless me o lord, ur the only hope for me as i cant share this with anyone else,please get her back in my life and i accept that i too have been taking a lot of advantage of her kindness but it was bcoz of my love towards her,please lord i beg u to bless me on this,,, and my request to the sethu group to advise me on how to pray lord hanuman if any particular method, though iam having a positive vibes when i pray the lord,this thing is killing me,, appreciate a quick and positive reply.....jai shriram,jai shriram, jai shiram",
  answer:
    "--- conveyed to Lord ---"
  },
  {
  id: 184,
  header: "changes",
  question: 
    "I have been noticing changes in myself. Sometimes I feel it is good. But sometimes I don't know. Yesterday I went to a Devi temple and then to an ashram. I was at peace but felt that my heart had become like a stone, unfeeling towards anybody. I meditated for a while and came off. Most of the work I do, I do without any feeling. At the same time I am unable to forget the disturbing experiences in my life. Occasionally they come back to me. I also feel depressed then.I also experience some kind of fear and feel I am a misfit.I am unable to progress spiritually. Om namah shivaya. jai sri hanuman Jai Siyaram. Sri Gurubhyo namah. Pranams to all there."
  },
  {
  id: 185,
  header: "Changing my perspective about this World",
  question: 
    "While reading the first chapter, I was crying all through the way until the last line. I was so deeply connected with Hanuman where I have felt his presence is inside my soul and standing besides me while reading the chapter. Few points from chapter 1 has already started changing my thought process and looking at this World. I feel the time has come for me to look the World and Worldly things with a different perspective from today and I believe Hanuman is inside me helping me every minute to get a good feel and peacefulness.\n\n"+
    "I think he has reminded me again about one of the pending projects to take up, which I forgot or parked temporarily due to everyday worldy things. I wish to donate to construct a brass covering to one of the Hanuman temples near my residence. Though I was doing follow-up with the temple authorities, they said Ok, we will look into it but somehow kept on getting delayed. I will once again do a close follow up with temple authorities and wish Hanuman gives me enough courage and strength to finish this project with the estimated amount.\n\n"+
    "Eagerly looking forward to read the second chapter. First chapter, due to many things came up on my head, I couldn't donate on time.\n\n"+
    "Jai Bajarang Bali! Jai Sri Ram! Jai Hanuman."
  },
  {
  id: 186,
  header: "Chanting ram nam",
  question: 
    "I chant Aum Shri Ram Jai Ram Jai Jai ram.I consider it as a supreme mantra,but i don't know whether it is supreme. But still Ram nam in any form is supreme to me.I want to know what mantra or Form of ram nam will bring me closer to lord Hanuman.",
  answer:
    "Divine Soul,\n\n"+
    "The Mantra is perfect. However, to know whether you are chanting it rightly, do this test.\n\n"+
    "When a Vimaanaa ( Aeroplane ) takes off, it leaves the ground behind. It doesn't take the ground with it. When it takes off, the pilot is able to see the earth from where the Vimaana has taken off.\n\n"+
    "When you chant Mantra, your soul should be able to take off a little from your body. You should be able to see the body chanting the Mantra. You should be able to feel that you are not the body which is chanting the Mantra. You are something higher which is watching the body.\n\n"+
    "Blessings"
  },
  {
  id: 187,
  header: "Chapter 1",
  question: 
    "HE is everywhere & in everything. HE is the greatest illusion & I am just a part of it. I have to try to get over this illusion to achieve moksh."
  },
  {
  id: 188,
  header: "Chapter #1 reading / My Experience",
  question: 
    "I was reading this chapter towards the end of this chapter I went into deep sleep & again woke up that I realized that I went to sleep for some time & got up.\n\n"+
    "Anil"
  },
  {
  id: 189,
  header: "chapter-11",
  question: 
    "This chapter and removed a layer of desires which has negative and positive both side by side.Oh Lord , bless me so that I can get rid of my unwanted desires."
  },
  {
  id: 190,
  header: "Chapter -11 The secert of Desire fulfillment",
  question: 
    "First of all thank you for your wonderful chapter which explains very clearly about desire Fulfillment's.\n"+
    "\"If you see a bad dream, thank god for dumping your bad desire in swapnaloka.If you see a good dream, renew that desire an work on your karma so that good desire can be fulfilled in Manvaloka next time\".\n\n"+
    "I have an query on this :\n\n"+
    "Usually elder people said they if we get dream come at early morning timings it will definitely\n"+
    "happen to us and same time if you get bad dream then they ask us to read hanuman chalisa\n"+
    "and kept hanuman photo beside the bed.\n\n"+
    "In so many epic stories when we heard, god appear in their dreams and told that they appear here in particular place and anything bad happening they will tell before and altering his devotees.\n\n"+
    "In vishnu shasranama , one line we can say\n"+
    "In vishnu shasranama , one line we can say\n"+
    "veeraha rakshana santo jeevanaa parya vasthitah...!!!\n\n"+
    "The line means he will destroy the bad dreams coming to us.As per your note the bad dreams is good for us , becoz those are happening in the swapnaloka.\n\n"+
    "Please help me on this query , Lord Hanuma will give us more divine knowledge.\n\n"+
    "and we are eagerly waiting for the next part.\n\n"+
    "Thanks for your reply but can you please give some examples and explain it more clearly",
  answer:
    "Update : Divine Soul,\n"+
    "If you see a dream early in the morning, there are high chances that you will remember them because your soul is preparing to depart from SwapanLoka at that time. Your soul brings memories of early morning dreams in MaanavLoka.\n\n"+
    "Suppose you went to a relative's house and you found out that their cow gives 30 litres milk in a day. You decide to buy that cow and bring it in your home. In you home, that cow gave only 2 litres of milk! Therefore \"cow in your relative's house\" and \"cow in your house\" are not the same thing. Similarly a \"dream lived in SwapanLoka\" and \"memory of that dream brought to MaanavLoka\" are not the same thing. They are two different thing. If you bring memory of bad dream in Maanavloka, that bad dream may become reality. If you bring memory of good dream in MaanavLoka, that too can become a reality. Because memory leads to a desire and desires bring fruits.\n\n"+
    "If you have seen a bad dream but you have forgotten it as soon as you woke up, that is good. That means a bad desire has been dumped. But if you keep on thinking about that bad dream after waking up, it may become a reality in MaanavLoka. Same is the case with Good dreams.\n\n"+
    "for further queries, please post a new experience. Please do not edit an existing experience. >>\n"+
    "---------------\n"+
    "Divine Soul,\n\n"+
    "There are two things : (1) Dreams (2) Memory of Dreams in SwapnLoka\n\n"+
    "We do not remember even 0.1% memory of our dreams. If you are retaining memory of bad dreams, it can turn your Karma bad way and harm you. Sometimes memories of some dreams become signboards in MaanavLoka. \"Memory of dreams\" is a thing of MaanavLoka. It behaves like all other things of MaanavLoka. However \"dreams\" are a thing of SwapanLoka. They happen there in order to dump unwanted desires.\n\n"+
    "Blessings"
  },
  {
  id: 191,
  header: "Chapter 18",
  question: 
    "As I hav observed so far... this time the permission for publishing seems to be delayed? Am I correct?! And the experiences are processed in hanuman pooja only after arpanam is offered right? other wise those experiences r not replied to? And Cld u plz explain wat exactly sakshat hanuman pooja means? is it done exactly like how mathangs performed it in presence of hanuman around the hanumandal?!",
  answer:
    "Divine Soul,\n\n"+
    "Yes, permission is taking longer than usual for chapter 18.\n\n"+
    "Yes, experiences are processed before and after Arpanam. But Arpanam sent by a devotee has no relation to whether his experience will get replied to or not. If experience is sincere, we process it in Sakshat Hanuman Pooja. The screening team has no way to know whether the devotee who has submitted an experience sent Arpanam or not. They only have access to data of time spent by devotee on each chapter. Screening of experiences is done based on that data and the sincerity of content of experience. If a devotee has sent Arpanam, it gets clubbed together with experience after screening so that his/her Arpanam and experience are processed together if possible.\n\n"+
    "Sakshat Hanuman Pooja is similar to Charan Pooja but unlike Charan Pooja, Lord Hanuman's physical presence is not there in Sakshat Hanuman Pooja. Only His angelic presence is there.\n\n"+
    "Blessings"
  },
  {
  id: 192,
  header: "Chapter 21",
  question: 
    "O Setuu..\n\n"+
    "Thank You so much for your service. And convey my Regards and Thanks to Lord Hanuma for his Leela's sharing with us. Thank you Hanuma for enlightening me by saying about Mother Sitha's sacrifices.\n\n"+
    "|| Ram ||"
  },
  {
  id: 193,
  header: "chapter 4 Se ek question hai",
  question: 
    "Es chapter me ye likha hua hai Ki universe k Bahar ek white samundra(sea) hai jha sari moksh ko prapt soul rahti hai or unki koi wish Ho to Wo kinare pr aati hai or brahma ji Ki wajah Se Wo bhagwan vishnu Se request krke wapas yha mritulok me aati hai\n\n"+
    "Mera sawal ye hai Ki jb hmari sb wishes puri Ho jati hai tb humare Mann me moksh Ki lalsa utpann hoti hai or jb moksh mil gya tb kaise koi wish Fir aa sakti hai. Ese to hum us parmatma Se Fir alag Ho jate hai..... May darr gya Hu esa soch kr Ki moksh k baad bhi aatma ko parmatma Se alag hona padta hai. Kripya mera darr dur kre or Mujhe esa rasta dikhye Ki mere me or lalsa Ho prabhu dash na Ki.\n\n"+
    "Saath hi ma bhagwan shivji Ki puja krta Hu unke Li Aap log jo puja kr rhe ha Wo Mujhe bhi de taki mai unke darshan kr saku",
  answer:
    "आपके प्रश्न का उत्तर चौथे अध्याय के आखिरी गद्यांश में निहित है जिसमे समुद्र से एक बाल्टी पानी डालने और फिर एक बाल्टी पानी निकालने का उदाहरण दिया गया है |"
  },
  {
  id: 194,
  header: "Chapter 6",
  question: 
    "Today I felt something different , as in the middle of the chapter I felt my head is getting heavy and something is on my head . There was heaviness feeling , but after completing the chapter I feel little relief .\n\n"+
    "Can I know what is this heaviness as I am still feeling the pressure on my head. Need your suggestions and blessings.",
  answer:
    "Divine Soul,\n\n"+
    "That is a good sign. You are realizing your soul and getting to differentiate between your own soul and Surrahs-Asurrahs.\n\n"+
    "Blessings"
  },
  {
  id: 195,
  header: "chapter-8 (Makradwaja was not the son of Hanuman)",
  question: 
    "Sir i had a doubt please i reques u to clear my doubt in chapter - 8 that hanuman ji had said that when he went in to deep meditation he found the way to patal and listen the word \" father\" and said that he was not surprised by listening the word father and also said that makaradwaja is the son of agnikush. what i cant understand was y makardwaja called hanuman ji as father and y hanuman ji wsa not angry in this issue pls tell me sir here in this point some thing is missing sir",
  answer:
    "Lord Hanuman's soul was inside the body of Agnikush. That is why he felt that Makardhwaja was his son."
  },
  {
  id: 196,
  header: "chapter seven query",
  question: 
    "Ram\n\n"+
    "In Chapter seven para one\n\n"+
    "Maathang baba is saying that \" when you came 30 years ago basant was a kid \"\n\n"+
    "How 30 years it has to be 41 years?\n\n"+
    "Please clarify.\n\n"+
    "I read the chapter in Hindi.",
  answer:
    "Divine Soul,\n\n"+
    "We have been notified by our technical team that it was not a technical or typing error. Instead only you saw it 30 instead of 41. The best part is that you have seen it in the chapter in which Lord Hanuman tells about \"different forms of reality\". So whatever is \"reality\" for you, may not exist at all for someone else. Reality is dependent on what body your soul wears. You are a truly blessed soul that you have got live example from Lord Hanuman.\n\n"+
    "Blessings"
  },
  {
  id: 197,
  header: "Chapter Six",
  question: 
    "After reading through the 6th chapter there was a feel of some vibrations which I could not understand , but the vibrations were very positive. I feel previledge to be part in reading these chapter and making my soul pure and positive.\n\n"+
    "Kindly let me know any mantra that I can recite every day which can my life nearer to Mahavir Hanuman ji.",
  answer:
    "Divine Soul,\n"+
    "Until all the 36 lines of secret Mantra are revealed, devotees can chant || Raam || mantra.\n\n"+
    "Blessings"
  },
  {
  id: 198,
  header: "Charan Chirtram Brought change in life",
  question: 
    "I got to know about Charan Chitram of Shree Hanuman Ji, last year while surfing on Facebook, clicked on the articles shred on FB got very exited to learn about charan chitram and its Pooja. Booked the pooja on the Names of Myself, My Wife and My Elder sister. As the booking was full till jan 2014 the message shows that if somebody will quit the Pooja I may have chance, Now I under stand its not chance its the will of Shree Hanuman ji, The pooja dates got fixed for my Wife and For my Siseter the pooja took place on 14th Jan 2014 and I received the Charanchitram by the last week of Jan itself. I handed over one to my wife and sent my sister's to her place. Nothing happened miraculously neither I have expected.\n"+
    "Then after a month I got the news from my sisters house that they have started construction there house which was like pending project from last 10 years, we have never thought that the In laws of my sisters will ever make there own house it was such a great news for us. Later when my sister gave all the credit to charan chitram I also started to thing of it, then I was talking to my wife when Shree Hanuman ji give his blessing to our family (We were trying for a baby from last two years met all the best doctors possible never got any negative report neither my side nor her side still nothing was happening and My wife was very upset and doctors keep on testing with medicines for her and for me too) One day I just asked my wife to stop taking any medicine and think about Shree Hanuman ji, if it helps My Sister to get what was her a long pending wish, We will also be blessed, And after the news from my sister house within next ten days My wife was tested positive she is expecting now her date is expected to be in Nov 2014, And I have full faith in Shree hanuman whose blessings every thing will be fine.\n"+
    "The desire of man never ends but I have found every thing is going smooth in our life since Jan this year and now I dont akf for anything I know Shree Hanuman is watching our family and he will do what is best for us.\n\n"+
    "Jai Shree Ram bhakt Hanuman."
  },
  {
  id: 199,
  header: "Charan Pooja",
  question: 
    "Jai Hanuman\n"+
    "Jai Shree Ram\n"+
    "Ever since childhood I have been a devotee of Hanumanji. I am very much devoted to Hanumanji ever since childhood. I did Charan Pooja of Hanumanji through Setuu and also participated in Sakshat Hanuman Pooja. I really consider myself fortunate that I got to know about Setuu. I have the blessings of Hanumanji. This is only because of the blessings of Hanumanji that of millions and millions of devotees of Hanumanji I got the chance to become a part of Charan Pooja.\n\n"+
    "Now, some questions came to my mind. Am I really fortunate that of millions and millions of devotees of Hanumanji I got a chance to become a part of Charan Pooja? Am I really special? Am I close to Hanumanji?\n\n"+
    "What doest it signify that I participated in Charan Pooja? Will it help me in getting materialistic goals or non-materialistic goals or both? Will it help me in getting close to Hanumanji and get his sakshat darshan? Will it be helpful for me in getting Moksh in this birth of mine only? I am just asking. Please forgive me if I asked anything wrong.\n\n"+
    "Hanumanji, please forgive me for my misdeeds of this birth and of previous births. Please keep your blessings on me always Hanumanji. I need you at every step of my life. Please purify my soul so that I can have your sakshat darshan before I die.\n\n"+
    "My sincere pranam to Setuu Masters and Mathangs.\n"+
    "Thanks and Regards.\n\n"+
    "Jai Hanuman\n"+
    "Jai Shree Ram",
  answer:
    "Divine Soul,\n\n"+
    "You will read about Charan Pooja and its significance in detail in upcoming chapters.\n\n"+
    "Blessings"
  },
  {
  id: 200,
  header: "Charan Pooja",
  question: 
    "dear setuu masters,\n\n"+
    "i have a query that can you do charan pooja in name of mine of lord hanuman ji? as you all know hanuman ji is the best of all and knows when to create urge in devotee's mind to ask a question. so similarly i have a urge know whether the charan pooja in name of mine is possible or not and if possible then please i request you to do charan pooja of lord hanuman.\n\n",
  answer:
    "Divine Soul,\n\n"+
    "Charan Pooja is performed every 41 years. It is closed now. Only Sakshat Hanuman Pooja is being performed now.\n\n"+
    "Blessings"    
  },
  {
  id: 201,
  header: "Charan Pooja performed for me",
  question: 
    "Jai Shree Ram\n"+
    "Jai Sita Maiya\n"+
    "Jai Bajrangbali\n\n"+
    "I had participated in Charan Pooja of Lord Hanuman and the Charan Pooja was performed by Mathangs for me. I also got a Pooja Log Number. When I checked my status after the Pooja was done on the link which is not available now, the message used to come \"Pooja has been done and Pooja Log Number has been included in the Logbook\". So, can I expect my Charan Pooja of Lord Hanuman also in any chapter in future? I didn't get any specific or rare message after the Pooja was performed. If my Pooja Log Number is there in the Logbook of Mathangs, then, it should come in any chapter in future. How will it feature? Will it include any message or anything related to me? Will I also be a part of any chapter? Will I be able to know my connection with Lord Hanuman in coming chapters?\n\n"+
    "Please tell me more about Charan Pooja.\n\n"+
    "Pranam to Mathangs and Setuu.",
  answer:
    "Divine Soul,\n\n"+
    "Yes, all the devotees who have got their Charan Pooja performed can expect their stories in upcoming chapters. It depends on Lord Hanuman what knowledge He gives in Prasadam to Yajmaan. For example, Charita in chapter 10 got knowledge of existence of story of 60000 sons of queen Sumati. Similarly all devotees will get specific knowledge from Lord Hanuman. First Mathangs performed Charan Pooja for their community members, after that only devotees of mainstream society got chance. Therefore, first stories of Mathangs will come and then that of other devotees.\n\n"+
    "Blessings"
  },
  {
  id: 202,
  header: "chqpter 16",
  question: 
    "Jai Ganeshaya NaMaH\n\n"+
    "Sometimes I feel like I forgotten all the meaning of the words am, reading, I am able to recite it, but cannot able to understand it for sometime like a trance, I felt in many times while reading Hanuman leelas, published here, same now I was reading chapter 16 I again experienced that, i can spell words perfectly , i also found some spelling mistakes in some words, but this trance was different and something large, big I can't explain that,, I realized that my answers where in chapter 16, but am still confused, In normal life I spend my time in confusion and questioning myself, which I get answers through you or from outer world."
  },
  {
  id: 203,
  header: "circumstances",
  question: 
    "i feel i have been controlled by certain situations and circumstances with little choice to avoid them. my nature also was another thing that made me think and do everything the way i did. very often i felt closest to god, especially when i was sick. i don't think i'll understand the ultimate reason. i only want to remain connected to god till i die. that way i may also help my family and others. i feel i have lived a life full of imagination where people and everything were seen by me according to what i imagined. i've been under illusion. but i also need help to overcome this. i don't know anything. i just want the company of god and my guru whom i don't know at all though he is helping me. he is kind and full of pure divine love. i need to direct myself well and not fall prey to distractions.something is preventing me still. i'm unable to offer anything, except mentally.i do experience certain changes, but still not sure.i think i have to withdraw from everything around me. i always thought i must do whatever i can and then wait for god's blessings as the result. but now i don't know. everything is guided by him including my thoughts and actions. i'm so ignorant. i have been a fool all my life. sometimes i also feel i 'm on the verge of reaching what i lost over the years. i want to clean the mirror, my mind.i want to forgive all and be forgiven. i sense that. all i can do and want to is surrender as always. i surrender again and again. i bow to hanumanji again and again. all my prayers, at the feet of sri hanuman, sriram jaya ram jaya ram. sri anjaneyaya namah. sri gurubhyo namah! i thank all of you and the mathangs for everything.now what should i do if i'm unable to send money via the net? can there be an alternative? i really want to be part of the pooja. i went to a hanuman temple without really planning. i felt it was hanuman's way of calling me. i was able to put rs100 in the hundi. i felt touched. am i right in my feelings? do guide me and help me.",
  answer:
    "Divine Soul,\n\n"+
    "You can go to any nearby Hanuman Temple where there are monkeys. You can offer your fruit offerings there.\n\n"+
    "When you post your words here, then also you become part of Pooja. Your words were included in yesterday's Sakshat Hanuman Pooja and message which came out for you was- \"Do not dwell in past.\"\n\n"+
    "Blessings"
  },
  {
  id: 204,
  header: "Clarifications for Chapter 4",
  question: 
    "Jai Shree Ram,\n\n"+
    "I have my clarifications for Chapter 4 to understand it better.\n\n"+
    "Chapter 4: When a soul comes out of MuktiSagar (due to the waves created by Lord Brahma)\n"+
    "and then goes to Lord Vishnu and then it asks for a wish to be fulfilled to Lord Vishnu.\n"+
    "Lord Vishnu then grants the wish and sends the soul to any of the Mortal worlds(like Maanavloka ).\n\n"+
    "My doubt is when all the wishes are being fulfilled in MuktiSagar (the Milky White Ocean) then why each soul does not wish to go back to Muktisagar but instead ,it asks or wishes to go to a Mortal world and then Lord Vishnu directs the soul to the Mortal World. It could have simply asked Lord Vishnu , to allow it to go back to MuktiSagar.\n\n"+
    "In that way millions of souls do not have to switch over different bodies in different births and then finally land up in MuktiSagar.\n\n"+
    "Kindly clarify..\n\n"+
    "I am yet to read Chapter 6 and 7.\n\n"+
    "Jai Shree Ram",
  answer:
    "Divine Soul,\n\n"+
    "When a child is in mother's womb, child gets food from inside mother's body. When the child comes out in the world, s/he cannot go inside the womb again; s/he has to get outside food only.\n\n"+
    "Blessings"
  },
  {
  id: 205,
  header: "Clarity and conciousness but I am shocked about it with my own experience",
  question: 
    "O Dear Divine God Hanuman/ Mathangs/ Setu Masters - using one blog link sent by my friend i have found the setu website site and started reading Lord hanuman leela's, Till now had been till chapter 8 and each chapter seems pierced into me so softly and i do not have any doubts nor the satisfaction nor the feeling of i got something except the divine knowledge /wisdom of lord's leela.\n\n"+
    "My query is how to know i am at right direction and please teach me secret of experiencing the though less zone and embrace the energy of dear god presence.Teach me the meditation to attain the progressive steps.\n\n"+
    "Kindly guide me in right direction. I will be eagerly waiting for your guidance.\n\n"+
    "Jai Sri Raam,\n"+
    "Jai Sir Hanuman\n\n"+
    "-- Sandeep",
  answer:
    "Divine Soul,\n\n"+
    "Your first step is to find out what is \"I\". When you say \"I\", does it mean a body, a mind, or a soul, or all? Mind cannot be thoughtless. You have to detach yourself from mind and rise towards soul. You have to start identifying with soul instead of body. Then you will discover your inner silence.\n\n"+
    "Blessings"
  },
  {
  id: 206,
  header: "Cleanse my mind & purify my thought process.",
  question: 
    "Continued from # 49733\n\n"+
    "O Lord Hanuman, I bow before you!\n\n"+
    "My mind is plagued with conflicting & dirty thoughts and it wavers a lot. Though these are momentary and I know that it is not right, but am just not able to defeat the devil which tries to bring these thoughts in my head. I know that there is lot of goodness in me but these moments where I am not able to control my thoughts do trouble me. I surrender to you, O Anjaneya. Please help liberate my mind of these dirty thoughts & make me strong enough to defeat them.\n\n"+
    "I just want to think positively and want to be able to pray and do service to you with a clean & noble mind. Please help me!\n\n"+
    "Naman, O Lord Hanuman!",
  answer:
    "--- conveyed to the Lord ---"
  },
  {
  id: 207,
  header: "Climbed a tree",
  question: 
    "Woke up reading Chapter 1 and then I took a walk in the park and felt calm and at peace and then I climbed a tree and relaxed. Thanks for the child like sprightly capabilities!"
  },
  {
  id: 208,
  header: "Communicate to Lord",
  question: 
    "Dear Setuu Master,\n\n"+
    "I'm writing this in hour of great need. Since last few weeks my mother is fighting with a medical illness. Today, she had one important medical test done. The result of the test will come by tomorrow or day after.\n\n"+
    "With all due regards and with my utmost belief I seek blessings of Lord Hanuman for my mother.\n\n"+
    "Lord please. Please do not let any harm touch my mother. No disease shall touch her. Hanuman ji, the faith I have developed in you after reading the chapters is my only source of strength now. With folded hands and with utmost sincerity I ask for forgiveness. Please listen to me Hanuman ji. I hope I'm connected to you and that my thoughts/feelings reach you. Hanuman ji please tell what shall I do to relieve my mother from this suffering. Please Hanuman ji, understand the pain I'm going through. My world seems to be ending. Please help. Speak to me. Come to me. I bow to you and Lord Ram.\n\n"+
    "Please speak to me. Help us!\n\n"+
    "Setuu please communicate this to my Hanuman.\n\n"+
    "Ps :- Before going for the medical test. I made my mother read the first chapter.\n\n"+
    "Ram"
  },
  {
  id: 209,
  header: "Compassion and Omnipresence of Lord Hanuman",
  question: 
    "Contrary to all popular beliefs and assumptions that Lord Hanuman is the purest demonstration of Bhakti to Maha Vishnu-Jai Sri Ram and that He expects the same standards of devotion from His devotees, I have experienced Lord Hanuman's Grace with the least effort. While invoking the blessings of all Gods and Goddesses that I have had the fortune of worshippping, I found that Lord Hanuman responds with the greatest compassion and speed. May the pantheon of all Gods and Goddesses from all religions bless Lord Hanuman with such infinite empowerment that He protects us against all evils and hardships, known or unknown, real or imaginary, present or potential. Jai Hanuman! Veer Hanuman! Jai Jai Hanuman.Oh Lord! Do kindly rid this world of all the negativism that surrounds us, today. May your glory and grandeur score over all the nefarious designs of the devils around us. Jai Hanuman!"
  },
  {
  id: 210,
  header: "the complexity of desire",
  question: 
    "It seems to me that desire is too complex.\n\n"+
    "There are too many levels of desire. There are unconscience desires that we control but that we don't include in our awareness like the desire to get up and walk, or position ourselves more comfortably in sleep. Then, there are the more conscience desires like wanting a comfortable home or wanting our husband to live longer.\n\n"+
    "How is it possible to move all desires from our mind when there are thousands of them in a minute or in the space of an hour? Even the desire to obtain moksha is in and of itself a desire. It, too, then must come with good and bad. If the desire is strong, then we have to accept that bad that comes our way as a clearing of the way for the good. We can't expect that our love for Sri Hanuman will protect us from an unpleasant consequence.\n\n"+
    "I think I really want to know how one separates the desires we wish for to feel secure and comfortable in life from the ones that are frivolous and that chain us to existence. How do we move to moksha when even that desire comes with potential challenges and paths.",
  answer:
    "Divine Soul,\n\n"+
    "You cannot drive desires out of your mind. What you can do it is, you can distance yourself from mind. You can detach yourself from mind and rise towards the level of soul. You must realize that what you call as \"I\" is not a static entity. You can move your \"I\". You can go to as down as the level of body and live like an animal, and you can go as high as the soul (or even supreme soul) and live like Gods.\n\n"+
    "Blessings"
  },
  {
  id: 211,
  header: "confession of my sin and it's effect",
  question: 
    "Guru dev ko dandvat pranam.\n"+
    "Respected setuu,\n"+
    "Mera naam deenu hai , jo hanuman bhagvan ne parshadam mein mere mata pita ko diya tha .bachpan se mein hanuman chalisa padta tha , magar jab 11 class mein aaya tab mein galat sangat mein pad gaya .mein alcohol peene laga mein chicken khane laga , mein pooja se dur rehne laga.\n\n"+
    "Ek din sapne mein mujhe assurah tang karene lage vo dus din tak mujhe sapne mein saatane lage fir ek din hanuman ji aaye aur mujhe mere ghar ki roof pe mere sath khade hoker mujhse gurudev ne kha \"\n\n"+
    "tum yaha rehne layak nahi ho\"\n\n"+
    "aur meine khud ko unke sath jaate dekha .mein subha utha aur pareshan ho gaya .mere fooishness thi us baat ko nahi samjha aur lagatar prabhu se dur hota chala gaya. Aaj unh baato ko 9 saal ho gaye aur es ghatna ke baad se meri tabyit (health) bahut kharab rehne lagi ......meri bahut se karma galat hai mein Aaj bhi bahut galat kaam kerta hu ...\n\n"+
    "Mere baare mein vo sab jante hai, aap se vinti hai ki hanuman gurudev se puchiye mein Kya karu meri aagyanta kaise dur hogi.\n\n"+
    "Setuu ek baar unse mere bare mein baat kijiye\n\n"+
    "devotee\n"+
    "deenu",
  answer:
    "जिसको हनुमान जी ने स्वपनलोक में दर्शन दिए थे वो आपकी आत्मा थी और जो बुरे कामो में लगी रहती है वो आपकी देह/मन है | देह और आत्मा में अंतर करना सीखिए | देह आपकी आत्मा का मात्र एक उपकरण है | अपने आपको देह समझकर आप अपनी आत्मा को देह के कृत्यों से मलिन कर रहे हैं | जब आप देह और आत्मा में फर्क करना सीख लेंगे, तब देह के कृत्यों का आपकी आत्मा पर कोई फर्क नहीं पड़ेगा | फिर आत्मा मास्टर बन जायेगी , देह दास | फिर देह भी रास्ते पर आ जायेगी |\n\n"+
    "||राम||"
  },
  {
  id: 212,
  header: "conflicts in mind",
  question: 
    "dear lord, please forgive me for my sins and bad karma in my past life and this life....i want to come close to you and experience bliss...i know that the learned and wise say that it is good deeds and good karma that will take you to God but in my mind there are queries, doubts, pride, ego that i cannot let go of....it keeps me rooted to this material world and makes me long for things and makes me a very selfish person...i want to give up my vices and experience the happiness, bliss and contentment that the heart can feel when none of these fears, anguish, greed, jealousy and negative thoughts crowd my mind. how can this be done lord?\n"+
    "How do i know for what purpose i have taken this birth and what is it that i was supposed to have done or what lesson i was supposed to have learnt in this life....pls help me and direct me lord so that my this birth is meaningful in bringing me closer to you....\n"+
    "please lord....savoiur of my soul and our teacher....save me by showing me the way....i have wishes in my life to be fulfilled - happy and healthy children, doing well in my profession, husband's business, good health of my parents and in laws and families....are these material vices....are wanting these things also part of maya?.... pls show me the way lord And i will follow you",
  answer:
    "Divine Soul,\n"+
    "Every soul takes a birth in order to finish its past accounts of Karma. Your soul and your birth is no exception. Longing for materialistic things is Maya, no doubt but if while doing materialistic pursuits, there is awareness and remembrance of your true self (i.e. soul), then it does not become an hindrance in attaining Mukthi. The problem occurs when you become so much indulged in the Maya that you forget that you are a soul who has taken birth to finish your past accounts. Always remember the higher purpose and you will never go wrong, no matter what you do. Even breathing is also a \"selfish\" thing because you are breathing to keep yourself alive. But if you are aware that you are a soul and you have taken this body to finish your account of Karmas, then every action of your body takes you towards Mukthi or liberation.\n\n"+
    "Blessings"
  },
  {
  id: 213,
  header: "Confused",
  question: 
    "Jai Shri Ram..... Jai Hanuman\n\n"+
    "I have read all 7 chapters. I am confused sometimes i feel like i have done so many sins till this journey of my life. I feel very thankful also that i have got known about this \"Mantra or Secret\" of life. I m devotee of Lord Hanuman. I wish if I could meet him in personal but i know my soul is not that much pure now but i will try my best to remove illusions of this world.\n"+
    "I heartly want to apologize from Lord Hanuman for all my Sins. Please Forgive Me and I want Lord Hanuman Blessings. I want to know from Lord Hanuman about my this Life.\n"+
    "I have so many things in my mind but unable to express.\n"+
    "Please Lord Hanuman Help me in removing these Illusions from my Soul.\n\n"+
    "I and My family is facing trouble from so many years please make us free from these troubles (Financially,Physically,Mentally) Lord Hanuman ji. You Know Everything \"Bhagwan\"\n"+
    "Please Forgive Our sins.. Please.. Forgive me for this less amount of Arpanam.\n\n"+
    "\"JAI JAI HANUMAN GOSAIII KRUPA KARU BHAGWAAN\""
  },
  {
  id: 214,
  header: "Confused about how to lead a life",
  question: 
    "I believe in God and their presence across every part of this universe. People say that god comes to us in the form of parents so i respect my parents a lot. But i don't know why i feel that i am not so close to my parents in terms of sharing my views and thoughts. So now i am unable to tell them what i want in life and what i don't want. Because whatever i ask them they simply push it away saying its not correct for you. I atleast want the major decisions of my life to go according to my wish so that i would not blame them for anything if something goes wrong . I get a lot of negative feelings that i must have been cursed . But then i console myself saying that God is there with me who keeps helping me to overcome a lot of obstacles in life. I always wished that i talk freely to my parents and look after them. I would like to know how i could overcome this because i want to be happy and make my parents also happy",
  answer:
    "Divine Soul,\n\n"+
    "There is a thing called \"Dharma\". And Dharma is different for different people. It is nothing but a set of principles which help u to do everything with full responsibility. You have to set your \"Dharma\" for yourself. What are the principles you would adhere to so that you do not have to repent if something goes wrong. So that you can assert to your mind, \"That was my decision and I take full responsibility. So what if it went wrong.\"\n\n"+
    "You have to set this Dharma and then live fearlessly no matter what the social conditions wants you to behave like. Dharma is personal. Social norms must not dictate your Dharma.\n\n"+
    "Blessings"
  },
  {
  id: 215,
  header: "Confused after reading many religious books",
  question: 
    "Please hanuman ji tell me who is the first God who give rise to all God's according to Hindu mythology. And in vishnulok yatra you have told that muktisagar is boundary of universe and is spherical in shape above it Brahmlok is present and what is present above Brahmlok is Brahmlok infinity or Lord shiva hails outside and inside the universe. Please bajrangbali tell me this...... Plz",
  answer:
    "Divine Soul,\n\n"+
    "First ponder on these two points :\n\n"+
    "(1) Who asked this question and who is confused? Are you a body? Are you a mind? Are you a soul? If a mind is asking this question, what are its limits? Can a limited thing perceive the unlimited? Therefore can you rely on the questions arising in mind and answers which satisfy those questions?\n\n"+
    "(2) What is \"first\" and what is \"last\"? Can there be something which is neither first, nor last, nor inbetween? Can there be something beyond the counting of first and last?\n\n"+
    "Blessings"
  },
  {
  id: 216,
  header: "Confusion",
  question: 
    "In Chapter 6, it was said By Lord Hanuman that kaliyuga is that time when people are in such a trance that they believe there in LIGHT whereas in reality they are in darkness. To know what is light and darkness , one needs to have an inherent knowledge of it. I am assuming, the soul does but the assurahs or the \"sins\" as its usually termed is preventing from realising the true knowledge. But the real question is : Is this all an illusion ? conforming with the theory that the entire universe just a simulation or a computer program if you may and we all are some sort of a \"variable\" ( i am interlinking many terms here from physics, optimization etc). I can only marvel at such a creator in that case...so many VARIABLES,..so many parameters...its just deafening to my senses and brains to even think someone as intelligent can exist and control all our variables. Again when i say control i mean conforming with freedom of choice and its causal effects on the remaining variables.\n\n"+
    "One more question :\n"+
    "Why do people suffer, Yes! i get that its the result of past karma and suffering is a part of a procedure where the soul repents(?) for its mistakes from its past journeys. But for example, a child begging on the streets might have been someone in its past life who was a sinner. But without the knowledge of the sin from the previous lives, or journeys if you may, a true repenting never happens right ?\n\n"+
    "I guess at this point , i am becoming very incoherent and confusing.\n\n"+
    "In simple terms, i have just begun to appreciate and marvel at this \"accident\" called as creation and the creator. Tough choices are always a part of the system i suppose.",
  answer:
    "Divine Soul,\n\n"+
    "After reading chapter 10, you might have learned that it is not that complex. From outset, it is just space falling on Time. Nothing else. Complexities lie inside the illusion which is created by space-time. We are inside that illusion. But we have the power to come out of that illusion if we leave our bodily identity and realize larger identity.\n\n"+
    "About the sufferings : Memory itself is subject of Karma. What memory you have right now depends on your past Karma. Memory itself causes sufferings and pleasures. If you have memory that you are poor because of your so and so Karma then your response to poverty will change. \"Why don't I have memory of past Karmas\" is akin to saying \"Why don't I have body of past Janma\"? Memory is part of bodily reality.\n\n"+
    "Ponder.\n\n"+
    "Blessings"
  },
  {
  id: 217,
  header: "Confusion",
  question: 
    "Jay hanuman, my darling papa hanuman muahhhh love you soo much, just want to express my pain i keep inside . I see no doors open for me as opportunities maybe cause i am depressed , stressed. I lost a lot of money in 2007/2008 in a scam people said business venture but cheated me. Then my dad passed in 2008 .got married in 2010, before wedding a friend borrowed money ,actually i took a loan for her ,she said will pay me back but until today no news ,paid a bit a few years ago but no more. Really regret helping her cause it caused me soooo much pain . Until now i cannot get up. Back financially, if there is some money suddenly something comes up and i am without money. I hope the lord helps me, i kinda of given up hope, pray to a lot of gods but prayers not answered at times get angry but realise i am wrong ,seek forgiveness, love the gods its my karma i think but hope lord hanuman help and blesses me. To day went to temple and tied hanuman string feel good a bit. But still sad with my life."
  },
  {
  id: 218,
  header: "confusion and fight in mind with me",
  question: 
    "Gratitude setuu..\n"+
    "Dandwat pranam guru hanuman ji...\n\n"+
    "If a soul take moksha in the kaliyug , is there a chance it come back again in next kaliyug again for attaing moksha ..\n\n"+
    "Like guru hanuman will come go  back and come in next treta yug. Similarly if i got moksha now, will my soul come back and ask for it...\n\n"+
    "Everything is repeating again and again to infinite cycle .is the cycle is somehow similar to previous or next ...\n"+
    "Is lord vishnu will take birth in next treta yug as lord ram again and kill ravana again in next cycle or its going to different one..\n"+
    "Because name are same ,taken in the context that lord kalki was with lord guru hanuman in previous one then now its repeating ..\n"+
    "Confusion i devender will come back and get bramgyan in next kaliyug by setuu.org..\n\n"+
    "What a great illusion ...\n"+
    "I have repeated the query forgive me\n\n"+
    "Second i have fight going in my mind of two individuallity .\n\n"+
    "One is asking question and second is answering the question , it makes depression and pain in forehead .\n"+
    "Getting difficulties regarding differenciate regarding mind ,chitt,and soul. Ask gurudev to make it understand .\n"+
    "I will not take back or reduce the devotion, just want to through .\n\n"+
    "I always talk to myself ,always positive response ,is it my mind or anything else.\n\n"+
    "||RAM||\n\n"+
    "Devotee\n"+
    "Devender",
  answer:
    "Divine Soul,\n\n"+
    "Everything will be exactly the same but what you call as 'your soul' gets dissolved when it gets Mukti. The soul which comes out again cannot be called 'your soul' though it will have same desires to begin with.\n\n"+
    "If you pour a glass of water into ocean and then fill that glass again from the ocean, is the water you take out same as you poured. The glass is same not the water.\n\n"+
    "Also, Lord Hanuman remains in VishnuLoka in Satyuga. He doesn't merge with the Muktisagara, In treta Yuga Lord Vishnu sends Him when His need arises in MaanavLoka.\n\n"+
    "The \"I\" is not static entity. You, the soul, is driver and you have many cars available to drive. Those cars are body, mind, intellect and many other identities. As a soul you should be able to realize that you are separate from cars. You, the soul, is not the car.\n\n"+
    "Blessings"
  },
  {
  id: 219,
  header: "Confusion and Gratitude",
  question: 
    "Lord Namaste,\n"+
    "Right from the day i remember i have been ur and Lord Shiva's devotee . All i have ever asked u is to help me to keep my family and friends happy and help me to reach my aspirations and donno lord y am not able to do it. Lately am feelin like a loser and worth nothing . Pls help me lord. Am thankful dat u have always taken good care of me..\n\n"+
    "Expect to hear and witness miracles happen my way Lord.",
  answer:
    "Take care of these 4 things-\n"+
    "(1) Make sure you have a deep desire to reach goals.\n"+
    "(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n"+
    "(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\" and \"worry\" etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n"+
    "(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
  },
  {
  id: 220,
  header: "Confusion in my mind",
  question: 
    "My name is kushal DR. I am having confusion about which path to follow (\"former type\" or \"latter type\" which you people are mentioned) to reach lord hanuman. I started feeling some power in my forehead in between my eyes while I was reading hanuman chalisa. But no growth in my life. Since 6 years of working as a civil engineer . Feels like life stuck somewhere and not moving ahead. I offered fruits to hanuman after reading first chapter.\n"+
    "So please help me what to do and how to do.\n"+
    "Waiting for your reply.",
  answer:
    "Divine Soul,\n\n"+
    "Your case was considered in the Sakshat Hanuman Pooja and it was found that there is a problem of miscommunication. Where Lord Hanuman wants you to be, you are not there to grab the opportunity. This happens because of lack of pure faith.\n\n"+
    "For example, suppose you have to go somewhere at 9AM and you have become ready at 7AM. You have 2 hours left. You have no work in hand for these 2 hours but you cannot remain without work even for a minute. Then you realize that electricity of your house has gone. You call up the electrician. By the time electrician does his work, it is 9AM. Then you feel like, it was a bad start of the day because of electricity fault. You feel, \"I should not go for this important work now because it seems like a bad day.\" and you give up. Lord Hanuman caused a electricity fault so that you could spend your 2 hours and be ready at 9. Instead you misread His communication and gave up!\n\n"+
    "This is just an example. Reflect it on your life, you will find the way.\n\n"+
    "Blessings"
  },
  {
  id: 221,
  header: "Confusion in my mind",
  question: 
    "Continued from #31938\n\n"+
    "I understood what u said masters. And just now I red the second chapter about hanuman and honey hunting. And I made the offerings too with gratitude.\n"+
    "And I understood what happened and how I missed the opportunity of blessings from anjaneya.\n"+
    "Please insist me what I should do further to get the blessings of anjaneya.I want see my life beautiful, peaceful and successful I am already frustrated and desperate in my life since last 6 to 7 years . Please help me in this regard. And I am continuing to read hanuman chalisa daily.\n\n"+
    "Thank you\n\n"+
    "Kushal DR",
  answer:
    "Divine Soul,\n"+
    "See Lord Hanuman not only as God but also as your Guru. Make Him your Guru. You will come closer to Him. You will start seeing and experiencing things which will work as signboards on the road of your life. Your prayers have been initiated. You will see first signboard very soon. Keep your inner eyes open all the time. If you experience something strange and fail to decipher the meaning, do write the experience here. We will decipher it for you.\n\n"+
    "Blessings"
  },
  {
  id: 222,
  header: "confusion surrounding mind",
  question: 
    "I am very grateful that lord hanuman has chose me his as devotee as a servant. With so many ups and downs of life,I just stooped thinking that someone is there in this world to care me think about me and guide me.but lord hanuman saved me from the grave.I used to have so many nightmares in fact it was a daily habit.but after surrendering myself to lord hanuman I relieved from those horrifying nightmares.i bow down to lord hanuman's feet. Now whenever I get the feeling of loneliness I find lord Hanuman to be with me.and because of him I get the blessings of shri ram. as per chapter 6 our body is controlled by surrahs,asurrahs, and soul itself, my confusion is how can we stop the evil wish so that we will have good karmas? And is sin is done only by one person in a circumstance? Or equally responsible? I want to ask what's in mind but don't know how shall I explain. Am very confused. I hope lord hanuman read my mind to know this question. Everyday I ask this... Whether am doing right or wrong.and get lost in deep thoughts and become depressed. What's matter most, thoughts present for a person in your mind and heart or somehow knowingly or unknowingly you hurt that person. I think am not getting clear to that question. But overall I trust lord hanuman that he will guide me in right path as he is the one who can understand my soul. I pray lord hanuman that if I am doing anything wrong then deprive me from those evil acts and wrong doings.shower blessings on me and let my soul always be attached with him. Thank you setuasia for your effort for the world to make everyone connected with lord vishnu lord hanuman. Jai shri ram jai hanuman...",
  answer:
    "Divine Soul,\n\n"+
    "Suppose a criminal commits a crime in such a way that he flees but you are found in crime scene by the authorities. You get charged for the crime you have not done. After that your whole life changes.\n\n"+
    "Same is the case with Surrahs and Asurrahs. They commit an action and make the soul own up that action. Then only all the troubles start.\n\n"+
    "The most important thing is to recognize what is your action and what is the action of Surrahs and Asurrahs. If you observe that you have done something wrong, you should be able to recognize whether it was actually you who have done this or it was an Asurrahs.\n\n"+
    "To do that you must know your soul. When you know your soul, you will not do the mistake of owning up actions of Surrahs and Asurrahs.\n\n"+
    "Blessings"
  },
  {
  id: 223,
  header: "confusion in yugas",
  question: 
    "Shree Ganesh\n"+
    "Shree Ram\n"+
    "In mahabharat episode, Hanuman ji\n"+
    "explain Bheema about the yugas,\n"+
    "Like,\n"+
    "Satyayuga>tretayuga>dwaparyuga>kaliyug>kaliyug>dwaparyuga>tretayuga>Satyayuga like this to infinite..\n"+
    "And here i read inti some query u explain,\n"+
    "Like,\n"+
    "Satyayuga>tretayuga>dwaparyuga>kaliyug>Satyayuga>tretayuga>dwaparyuga>kaliyug like this to infinite..\n"+
    "What is the right order of yugas, there are many theories based on the information bheema type of yugas description,\n"+
    "Please explain.\n"+
    "Thank you",
  answer:
    "Divine Soul,\n\n"+
    "It is cyclic, not cycle-anticycle-cyclic\n\n"+
    "Therefore it is:\n"+
    "Satyayuga>tretayuga>dwaparyuga>kaliyug>Satyayuga>tretayuga>dwaparyuga>kaliyug\n\n"+
    "Trust your own experience of soul. What you experience is the truth. Not what you read somewhere. If Leelas of Lord Hanuman help you to realize your soul and enable you to experience the supreme truth, then only read them.\n\n"+
    "Any word of supreme knowledge should help you transcend your mind. It shouldn't force you to make a space for the word to settle in your mind. If any word is getting settled in your mind, either you are receiving the word wrongly, or the word is not of supreme knowledge.\n\n"+
    "Blessings"
  },
  {
  id: 224,
  header: "Connecting with the Lord",
  question: 
    "Dear Hanumanji\n"+
    "I have been a devotee of yours , but off lately have been through turbulent time in my life which has shaken my belief system.\n"+
    "I am thankful for the great gift you have give to me as I am expecting a new member of the family. But at the same time, hey Great hanuman, my source of income and my job is currently at stake. My repeated attempts to change my job is not giving me the results.\n"+
    "Bhagwan, its been a tough time and I request and pray to solve all my financial and emotional issues.\n"+
    "prabhu, a new job at a new place which is emotionally satisfying is what I need along with the well being of new member and everyone in my family.\n"+
    "Prabhu, I still have this belief that my wishes will be granted and fulliled at the earliest\n"+
    "Bhagwan, one last thing I know my faith has dwindled but at the end of day I have always come to you and you have given me what I have asked for and not left me empty handed. I expect the same and would like to be devotee of yours for my rest of life\n"+
    "Best Regards\n"+
    "manish"
  },
  {
  id: 225,
  header: "Connecting with the Lord",
  question: 
    "Hey Prabhu\n"+
    "Sadar Charan Sparch\n"+
    "Hey Hanuman, the conversations with Matangs of yours are very interesting and exciting and gave me a few answers to my questions which I have been seeking. Some one told me my dada and dadi;s atman is still in my parents house and the reason is their love for my daddy. I got the reason hey Hanuman when I read it.\n"+
    "Hey Aprampar, the grief and mental instability I am feeling due to the instability of job is defining. He dev, you got my extension for 2 months is just excellent and great! Lakhon Lakhon pranam. Hey Prabhu, I am trying to change my job which will help me and my family to come out of the financial trouble and help me use my skills.\n"+
    "He prabhu, I want to join a company in Qatar, either vodafone or ooredoo, please make it happen and I request you prabhu to get it done before I receive the 4th chapter from Setuu.\n"+
    "Hanumanji with the baby on its way, I want to relieve myself from the financial and mental stress and no one other than you can do it. Please prabhu please...show me the way and take me out of this agony.\n"+
    "Also, prabhu protect my family from all the physical, mental and emotional troubles and stresses which transcend many many lives\n"+
    "I know you will listen and hear me out and work out a solution which will allow me to fulfill what I expect and desire\n"+
    "Your Bhakt\n"+
    "Manish"
  },
  {
  id: 226,
  header: "Connection with unknown beings",
  question: 
    "Setuu,\n\n"+
    "I have been reading all of the chapters since last year.\n\n"+
    "I have been having a weird experience since childhood of connecting with few unknown people whom I seen on television (like cine star or players). I have this connection as if they were/ are my family or a close friend.\n\n"+
    "I was able to come out of that feeling and move on with my routine life with maturity and better understanding of my family.\n\n"+
    "I recently had a strange connection with a person (again a TV personality) as if I had shared a bond and a family with him or about to share with him. That person is also married and living with his family in another country. I am married with a kid and I love my family despite the challenges I have faced and am facing everyday.\n\n"+
    "And this connection with the unknown is sometimes tearing me apart. I have prayed to God and would like to present this for your advice.\n\n"+
    "Your words of wisdom would give me relief.",
  answer:
    "Divine Soul,\n\n"+
    "It could be a problem for an ordinary soul but for you it is a blessing in disguise. The fact that you are sincerely reading Leelas of Lord Hanuman shows that you are a seeker. You are seeking answers and trying to solve this mysterious illusion called universe. Therefore, you are not an ordinary soul.\n\n"+
    "Ask questions. Explore human emotions. Why do we feel disgusted/infatuated/angry/happy when we see someone? Is it just biological connection, or soul connection, or something else. Are the people around you real or are they merely projection of your own identity? Chase these questions. Don't stop if any idea satisfies your mind. These questions will ultimately lead you outside the mind and then you will see the supreme truth.\n\n"+
    "However, if you want to stay ordinary and want to just live a peaceful life, let the Lord know clearly. He will eliminate these emotions and bring you back to ordinary level.\n\n"+
    "Blessings"
  },
  {
  id: 227,
  header: "continue from #495521",
  question: 
    "my lord...I don't knw procedure how I can make guru...but air my body using...water my body used... all parts of this universe know that how I miss my lord.....I love u so much hanuman......when no body with me...I found myself in the foot of hanuman.....my lord...I can't live without your chapter...why u give so late permission for these chapter...I am addicted for these chapter......so plzzzzz...... every weak I need one new chapter.....when I read your chapter found my self in free..I enjoy alot...my lord I want to reality about my Questions describes in #495521...,,,plzzzz tel me reality. .. plzzzz......."
  },
  {
  id: 228,
  header: "continue Experience#495521",
  question: 
    "My lord..i have read alot about an indian sant 'kabir' according to them they r pram puras...which live in satlok..with an indentity 'satpuras'..they have claimed in his own book that they will come in world after 550 year to kabir janm...in satyuga they have an indentity with 'karunamya' in treta yuga 'muninder rishi '(guru of nal and neel) in kaliyuga with name of kabir...plz my lord avoid my all confusion about santa..in india..out of 90% adhyatmic santa using lighting source of their bookes and moral...i so confused my lord plz plz plz plz plz plz plz plz plz plz plz..i wana observe higher truth...@ thanx for your kindness instead of dat i m so bad...bt i alwaz i feel my lord with in me..",
  answer:
    "Divine Soul,\n\n"+
    "Your soul is as powerful as any other soul. Instead of depending on others, search for truth yourself. Instead of seeking a Guru, seek the truth. When you seek the truth, a right Guru will automatically walk in your life. If you seek Guru instead of seeking truth, you will end up with a wrong Guru.\n\n"+
    "Blessings"
  },
  {
  id: 229,
  header: "continued from 35928",
  question: 
    "Hanumanji\n\n"+
    "I want a good permanent job as son as possible and want to get marraied soon as i am 37 yeras , pls help me with this , want to build a house and want to keep my parents happy , i am feeling some one has done black magic on me or in my house soem vastu problem is there , for which no good is happening to me , pls help me get rid of it this black magic and vastu problem , i am chanting the mantra , but pls help me , i am ready to forgive people who have hurt me , and insulted me and move on\n\n"+
    "plss help me , that i have a secure job permanent job with good salary , and good husband , pls help , hope hunumanji can help me plss hanumaji slove all my problems"
  },
  {
  id: 230,
  header: "Continued from 367883",
  question: 
    "Continued from 367883 Sairam. I am devotee of Bhagwan Sri satya sai baba. I strongly believe my swamy and lord hanuman are one. I want blessings of lord hanuman and I pray he should be with me every moment and every second. I dont want anything else. My pranams to my hanuman swamy"
  },
  {
  id: 231,
  header: "continued from #428217",
  question: 
    "very very heartily thanks i will always keep in mind your suggestion. prabhu fulfill my needs so that i can be on the way of moksh. \"param iswar ko bahut bahut........... dhanyawaad.\n"+
    "meri wish puri krne ke liye prabhu ke charno me nit nit pranaam.\""
  },
  {
  id: 232,
  header: "Continued from #47659",
  question: 
    "Koti-Koti Pranaam my lord,\n\n"+
    "Thanks for your guidance!!!! Feeling more blessed and lucky after having direct contact between my lord and me. Keep showering your blessings on me and society.\n\n"+
    "I shall surely pay attention to my current job. But sometimes I feel insecurity in my current job,as you know my lord,about my R Systems's (Previous organisation) experience. I fear of repetition Of same incident in future,when I was fired from the job suddenly one day.If same will happen,then what I shall do? What will happen with my family members?\n\n"+
    "So I kindly request my lord to bless me with a secured government Job, as a bank PO by blessings me to pass the exam going to happen this year.Without your blessings, it is not possible my lord.",
  answer:
    "--- This prayer was read out in Sakshat Hanuman Pooja today ---"
  },
  {
  id: 233,
  header: "Continued from #49031",
  question: 
    "Jai Bajrangbali Ji ki,\n\n"+
    "O my lord, Thank you Lord for your blessings . my mid year review in my current organisation is at hand. Please shower your grace and blessings on me so that may my manager give very good feedback on my performance.\n\n"+
    "Regards,\n"+
    "Koti-Koti Pranaam,\n"+
    "Your son",
  answer:
    "--- conveyed to the Lord ---"
  },
  {
  id: 234,
  header: "continued from #491691",
  question: 
    "If every person has a memory of whatsoever they read or learn in this physical world and duplicate it in the swapnalok.. is this possible that this knowledge can be taken along to the next birth. That means can i carry my memory of hanuman chalisa over to my next birth .... or.... can it be transfered to someone else through the dreamworld ?",
  answer:
    "Divine Soul,\n\n"+
    "Suppose you went to USA for a trip related to your work and you forgot to carry your favorite sunglasses there. While clicking pictures and moving around, you started feeling that you must have those sunglasses. You went to a shop and bought new sunglasses. Of course, you have a unique choice of your own. So the sunglasses you bought there are exactly of same shape and brand which you left at home.\n\n"+
    "You sent a picture of yours to your family from there and your family says, \"You left your sunglasses here, how come you are wearing the same sunglasses in this picture?\"\n\n"+
    "You replied, \"Oh come on, isn't this a common sense thing. Is that the only sunglasses of this brand and shape in this world? Of course I bought a new and identical sunglasses here. That is what I am wearing\"\n\n"+
    "In the same way, when you go to Swapan Loka (dream world), your soul leaves this body here and gets another identical body there in Swapan Loka. That identical body of Swapan Loka also has memories of Hanuman Chalisa installed in it.\n\n"+
    "Blessings"
  },
  {
  id: 235,
  header: "Continued from #493229",
  question: 
    "Thanks for reply setuu masters,\n\n"+
    "1) My question is how to i break the layers of illusions, so that i can reach lord.\n"+
    "2) How do i gain Knowledge, Since Lord only can be Guru for me. If he can teach me.\n\n"+
    "Last but not least, I really felt that lord was there beside me, but unable to see him. I felt that i have heard the Mantra. Want to confirm weather it is true or not. I heard it in early morning hours when i was sleeping. Dream world some thing like that.\n\n"+
    "Can you please inform lord now, since i am now running with Shani effet( sadesati) Only Lord can help me.\n\n"+
    "Regards\n"+
    "Ashok",
  answer:
    "Divine Soul,\n\n"+
    "Keep reading Lord Hanuman's Leelas. He will guide you as a Guru in invisible form and He will give you Darshan in visible form at right time.\n\n"+
    "When you rise above body-mind and reach the level of your soul, you feel proximity with Lord Hanuman. Whatever you experienced was not dream. It was in this world only.\n\n"+
    "Blessings"
  },
  {
  id: 236,
  header: "Continued from #495744",
  question: 
    "Continued from #495744\n"+
    "सभी सेतु तपस्व्यो को मेरा सादर प्रणाम हनुमानजी को उनके श्री चरणों मे सत सत नमन .\n"+ 
    "आपका उतर मिला इसके लिए आभारी हूँ कपया मुझे जो दोरा पड़ रहा है उसका कोई निदान भी बता दो ताकि मैं\n"+
    "हनुमानजी को उनके श्री चरणों अपने आपको पूण रूप से समर्पित कर सकू डोरे से मै अपने आप से डरता हूँ मै अपने आपको भी अजीब सा अनुभव करता हूँ कभी कभी लगता ह कि मै इस शारीर को दो रहा हूँ इस सरीर का बोझ सा लगता ह .\n"+
    "कपया मुझे जो दोरा पड़ रहा है उसका कोई निदान बता दो\n"+
    "एक बार फिर सभी सेतु तपस्व्यो को मेरा सादर प्रणाम और हनुमानजी को उनके श्री चरणों मे सत सत नमन .",
  answer:
    "दिव्य आत्म स्वरुप .\n\n"+
    "अगर आप आध्यात्मिकता की राह पर मोक्ष की ओर बढ़ रहे हैं तो वह इस दौरे के कारण | इस दौरे ने ही आपको देह और आत्मा में भेद करना सिखाया है अन्यथा करोड़ों लोग कीड़े मकोड़ों की तरह अज्ञानता में जी रहे हैं |\n\n"+
    "हमने आपकी प्रार्थना प्रभु तक पहुंचा दी है | वे जैसा आपकी आत्मा की भलाई के लिए ठीक रहेगा , वैसा करेंगे |\n\n"+
    "|| राम ||"
  },
  {
  id: 237,
  header: "continued from # 506413",
  question: 
    "aap sabko pranaam,\n\n"+
    "mere question ka answer dene ke liya dhanyavaad.\n\n"+
    "11th chapter release hua aur read karne ke baad aachank ek question puchne ki jigg-yasa hu isliye kuch vishesh gyan aapse is question ke madhyam se lena chahta hu. kirpya anumati de prashan puchne ki!\n\n"+
    "prashan\n\n"+
    "satyug, dwapar, treta, kalyug = 1 kalp\n\n"+
    "jaise ki hame gyan mila hai hum kalyug ke antim charan me hai aur pra-ley aane ko kuch saal hi baki bache hai.\n\n"+
    "mein kewal ye janna chahta hu ke\n\n"+
    "* aaise kitne kalp aur beet chuke hai?\n\n"+
    "* kya shri raam ne ek hi baar raam bankar janam liya hai ya har baar dwapar me woh janam lete rehte hai?\n\n"+
    "* jaise ke hum kalyug me hai, to hum kitne no. wale kalyug se guzar rahe hai? isse pehle aur kitne kalyug beete hai?\n\n"+
    "aur bhi aaise anek prashan hai jo puchne ka mann karta hai lekin pehle ye jannana jaruri hai. janta hu ke ye aaisa prashan hai jo manav ka manav ko puchna v-yarth hai, kyuke is prashno ka uttar koi manav nahi balke raam bhagat shri hanumaan hi de sakte hai...\n\n"+
    "hanumaan ji kirpa kare is prashan ka uttar dekar, samasth manav jati ye jan-na chati hai?\n\n"+
    "dhanyavaad\n\n"+
    "jai shree raam",
  answer:
    "काल के जंजाल से ऊपर उठो , दिव्य आत्मस्वरूप |\n\n"+
    "||राम||"
  },
  {
  id: 238,
  header: "continued from #508192",
  question: 
    "continued from #508192\n\n"+
    "Jai shree Ram!!!\n\n"+
    "Hey patit pawan prabhu ke ParamDas aapki sda hi jai ho ..Sda Raho Raghupati ke Dasa..\n\n"+
    "Is jeevan me antrman ki sabse bdi peeda ye hai ki Mata Pita aur Guru ke liye kuch nhi kar paya..inke liye samrpit hote huye..aapki aur agrasar hoon aur ek bar aapko pa jaon .."
  },
  {
  id: 239,
  header: "\"Continued from # 511713....\" Failed in Significant Aspect of Life!!!!!",
  question: 
    "\"Continued from .....# 511713\""+
    "Lord Hanuman\n"+
    "Getting failure in significant aspect of life…… Got in to Debt of Money….. Tried to achieve but failed in almost of all stages. I understood it must be my earlier Bad Karma. But due to this my wife and son also getting suffered with me. Don’t know whether in this life span I can be able to come out of my misfortune?\n"+
    "I realised there is only one way, if Maa Durga मेरे अस्तित्व को शुद्ध कर दे… Hence I Pray Lord Hanuman to Help & guide me to get this Impossible(for Human being) task completed.\n"+
    "Waiting for Blessing from Lord Hanuman."
  },
  {
  id: 240,
  header: "\"Continued from #515458 \"",
  question: 
    "My pronam to Lord Hanumanji and Mathang Sadhaks .\n"+
    "On behalf of my family I am expressing our gratitude for offering charan puja in the name of my father-in-law who was critically ill. He has passed away on tuesday at night very peacefully.\n"+
    "He had been paralyzed since September 2001 and was confined to bed for last 3 years.\n"+
    "He was groaning in pain for last few weeks . But his soul rests in peace now.\n\n"+
    "You have realized our agony and mental trauma and offered to offer puja to Lord Hanumanji .\n"+
    "May his soul rests at His feet .\n\n"+
    "Your artilces on Hanuman Leelas have helped us to cope up with this stress in last few months .\n"+
    "Our sufferings have greatly reduced .\n\n"+
    "His Last rituals (Shraddha) shall be performed on 25th DEcember .\n"+
    "I would like to offer Charan pooja to Lord Hanumanji on that day in the name of my father in law if it is possible .\n\n"+
    "We are grateful to You .\n"+
    "Thank you so much .\n"+
    "Looking forward to your reply .",
  answer:
    "Divine Soul,\n\n"+
    "Charan Pooja happens only once in 41 years. Hence Charan Pooja is not possible. But your prayers have been scheduled for Sakshat Hanuman Pooja on 25th december.\n\n"+
    "Blessings"
  },
  {
  id: 241,
  header: "continued from #515846",
  question: 
    "।।जय श्री राम।।\n"+
    "मुझे श्री बजरंगबली में बहुत आस्था बढ़ गयी है। और लोगों से सेतु से जुड़ने को बोला है पर कुछ लोगों का मैंने समाधान भी किया है और कुछ लोगों का कहना है की जब मातंग किसी बाहरी व्यक्ति से नही मिलते तो फिर सेतु से कैसे मिले और इसकी क्या कहानी है ये सबाल कुछ लोगों ने मुझ से किये है। जय जय श्री राम जय जय श्री बजरंगवली",
  answer:
    "दिव्य आत्मस्वरूप ,\n\n"+
    "प्रतीत होता है कि आपने दूसरा अध्याय नहीं पढ़ा है जिसमे इस बात का वर्णन है कि सेतु संतों ने बाबा मातंग से मिलने की कोशिश कैसे की |\n\n"+
    "|| राम ||"
  },
  {
  id: 242,
  header: "Continued from Experience Number #49031",
  question: 
    "Jai BajrangBali Ji Ki,\n\n"+
    "Oh My father Lord Hanumaan, Please shower your blessings on me. I am appearing for State Bank Of India, PO exam in June 2015. Please bless me with an employment in State Bank Of India. I shall be happy my lord.\n"+
    "Please bless me by accepting my prayer lord.\n\n"+
    "Yours Son\n"+
    "Sudhanshu",
  answer:
    "Take care of these 4 things-\n"+
    "(1) Make sure you have a deep desire to reach goals.\n"+
    "(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n"+
    "(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\" and \"worry\" etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n"+
    "(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
  },
  {
  id: 243,
  header: "Control of thoughts",
  question: 
    "Jai Bajrangbali\n"+
    "Jai Shree Ram\n"+
    "Thank you setuu for helping the mainstream society to connect with Lord Hanuman. I must say your section \"My Experience\" is quite worthy. Here, we express our questions, thoughts, queries, prayers, etc and you forward them to the Mathangs and they include them in Sakshat Hanuman Pooja.\n\n"+
    "I have been a bhakt of Lord Hanuman since childhood. I have been a regular visitor of your site ever since I first visited it. I have a query related to \"thoughts\"."+
    "Whatever work I do whether spiritual or non-spiritual or anything, two thoughts come to my mind. One positive and the other negative. This doesn't happen with me one or two times. It happens with me everytime. I do not know why this happens to me. I don't know why negative thoughts come to my mind. I don't have control over my thoughts.\n\n"+
    "Suppose I am doing something. But I am not concentrated only to this work. Some other thoughts do come to my mind. I am not able to concentrate on one thing.\n\n"+
    "Even if I am worshipping, something negative or anything else do come to my mind. I try not to pay attention to this negative thought and divert my mind by thinking something positive.\n\n"+
    "Although I always do what is right, yet why this negative thought comes to my mind? I want to know why negative thought comes to my mind though I never do anything wrong knowingly.\n\n"+
    "Please help me. I want to make my soul so pure that negative thoughts don't come to my mind. Also, I want to concentrate on my work.\n"+
    "Hanumanji, please give me peace of mind so that I concentrate on my aim only and don't get diverted.\n\n"+
    "Hanumanji, please forgive my mistakes or misdeeds of this life or of previous births. Always keep your blessings on me Prabhu.\n\n"+
    "Thank you Setuu.\n"+
    "Thank you Mathangs.\n"+
    "Regards.",
  answer:
    "Divine Soul,\n\n"+
    "More you try to obstruct the thoughts, more potential they will acquire. The key is not to obstruct the thoughts, but to rise above the mind. Mind is a turbulent region. The peaceful region is above mind.\n\n"+
    "Body < Mind < Intellect < Chitt <....... and so on\n\n"+
    "More and more you rise, more peaceful you shall feel.\n\n"+
    "How to rise?\n\n"+
    "Observe the body, you will rise to mind.\n\n"+
    "Observe mind, you will rise to intellect.\n\n"+
    "Observe intellect, you will rise to Chitt.\n\n"+
    "and so on.\n\n"+
    "Observe the Observer.\n\n"+
    "Blessings"
  },
  {
  id: 244,
  header: "Control of thoughts-2 (How to rise above mind)",
  question: 
    "\"Continued from #367504\"\n\n"+
    "Thank you Setuu for your reply. You said it very rightly \"More I try to obstruct the thoughts, more potential they will acquire\". The key is not to obstruct the thoughts, but to rise above the mind. The peaceful region is above the mind.\n\n"+
    "But how to rise above mind? I am not getting an answer to this.\n\n"+
    "Observe mind, you will rise to intellect.\n"+
    "Observe intellect, you will rise to Chitt.\n"+
    "And so on.\n"+
    "Observe the observer.\n\n"+
    "I didn't get what to do i.e. I didn't understand what you said to me.\n\n"+
    "Please tell me in detail what should I do to rise above mind. I am really fed up with so many thoughts(positive and negative) coming to my mind at the same time. Due to this, I am not able to concentrate on one thing. I am not getting peace of mind. Please help me.\n\n"+
    "Thank you Setuu\n"+
    "Thank you Mathangs\n\n"+
    "Jai Bajrangbali\n"+
    "Jai Shree Ram",
  answer:
    "Divine Soul,\n\n"+
    "If even after reading all the chapters posted so far, you are unable to get a thing, you should leave the path of seeking. You should just remain on the path of devotion and surrender fully to the Lord. Once you surrender, whatever happens to you- Good or Bad-- does not remain yours. So you will neither feel any suffering nor any joy. You will remain in \"Samaras\" state --- detached from everything good or bad.\n\n"+
    "Blessings"
  },
  {
  id: 245,
  header: "Conversation Between Shri Hanuman Ji and Monkeys",
  question: 
    "Jai Shri Ram,\n\n"+
    "In third chapter , there was incidence of some monkeys,who were running here & there and finally sat on urmis last birth house.\n\n"+
    "There Shri Hanuman Ji met with monkeys and made many conversation with them\n\n"+
    "What is conversation that took place between Shri Hanuman Ji and monkeys",
  answer:
    "Divine Soul,\n\n"+
    "To understand that conversation, few more chapters need to be understood. We will publish that conversation at appropriate time.\n\n"+
    "Blessings"
  },
  {
  id: 246,
  header: "CREATION OF THIS LIFE",
  question: 
    "JAI SRI RAM HEY HANUMANJI I HAVE BEEN ALWAYS WONDERING IF YOU ARE THE TRUTH AND CREATOR THEN HOW YOUR CREATION SPOIL IF EVERYTHING IS DECIDED BY YOU THEN WHATS HAPPENING HERE ON THE EARTH ALSO YOUR PLAN BUT YOUR PLAN HOW CAN YOU WRITE ALL SIN HAPPENING AROUND . NO ONE HAS PEACE EVERY WHERE I SEE ONLY SORROW ,GREED, DISHONESTY ,NOBODY CAN TRUST ANYBODY ALL FALSE FACES WHAT TO DO ARE YOU GOING TO END YOUR CREATION IN THIS WAY TELL ME PLEASE I DON'T KNOW WHAT REAL HERE ALL TIME CONFUSION I WANT TO KNOW WHAT I CAN DO WHICH IS RIGHT WAY TO LIVE I HAVE ONLY ONE BELIEF THAT YOU ARE THERE PLEASE TELL EVERYONE WHAT IS RIGHT WRONG AND I TRUST THERE IS A SOLUTION BUT I DON'T KNOW WHY I AM HERE WHENEVER I ASK YOU I GET THE SOLUTION HOW ITS HAPPENING I WANT THIS WORLD TO BECOME ONLY PURE IS IT POSSIBLE?",
  answer:
    "Divine Soul,\n\n"+
    "First of all be clear who you are. Are you a body? Are you a mind? Are you an intellect? Are you a soul?\n\n"+
    "Then be clear what is this world? Is this what you experience with your 5 senses? Or is there any world beyond your senses too?\n\n"+
    "Read the first chapter of Lord Hanuman's Leela again. Is the sorrow you see everywhere \"Real\"?\n\n"+
    "When you ponder over above questions, you will start your journey towards the supreme truth. You are a blessed soul that you have got the spark. All great souls initially get the spark of knowing truth after seeing sorrow of this world. Now that you have got the spark, do not get satisfied with ready-made answers. Find your own answers. Lord Hanuman will guide you in this journey if you make Him your Guru.\n\n"+
    "Blessings"
  },
  {
  id: 247,
  header: "Curiosity to know about Lord Hanuman",
  question: 
    "Ever since childhood I have been a devotee of Hanumanji. During my childhood I was very curious to know about Hanumanji and the curiosity has not lessened even today. I used to watch serials on Lord Hanuman like Ramayan, Jai Hanuman, Jai Jai Jai Bajarangbali and others on tv.\n\n"+
    "I have so many questions in my mind regarding Hanumanji. I have completely gone through your website. Although I get some information about Bajarangbali, it has not complete information about him. I want to know everything about him right from his birth.\n\n"+
    "I came to know through Setuu that Hanumanji comes to visit Mathangs every 41 years and he recently visited them and May 27 2014 would be his last visit this year. I came to know about Charan Pooja and after knowing about it, I immediately thought of booking Charan Pooja for myself. But at the same time, a thought came to my mind. Whether it's a genuine site or a fake one. I was totally confused because today many organizations are just fooling people in the name of God and Dharm. Such organizations play with the feelings of people in the name of God and are in the business of making money. I thought for a while but couldn't resist myself from booking Charan Pooja for myself because it was all about my Lord Hanuman. I booked Charan Pooja for myself taking the name of Lord Hanuman.\n\n"+
    "I felt really very nice the moment I booked Charan Pooja. A feeling came from inside that now I will be blessed by Bajarangbali and all my problems will vanish and I will achieve all my goals and my career will flourish. Now, my life will be very easy and will be guided by Hanumanji.\n\n"+
    "Now, some questions came to my mind. Why Hanumanji visits Mathangs only after 41 years? 41 years are a very long period. Why such a long gap? Where does he live in these 41 years? Yes, I know he is God. He can be anywhere but still. I have also heard that Hanumanji lives in the Himalayas. In India, I think there are thousands of small and big temples of Hanumanji. Does he come to every such temple or some specific temples or he is present everywhere? I have always heard God is everywhere. Why Hanumanji chose to visit Mathangs only? When did he visit the Mathangs for the very first time? I have read on your website that the script of the logbook of the Mathangs is not an easy one. Then, how are you people translating it in English, Hindi or other languages? How are you able to understand their writing?\n\n"+
    "I do visit a Hanuman temple or other temples whenever I get time and chance. If I don't visit, I just bow my head and take his name or other God's whenever I pass through a temple. But Hanumanji is always in my heart and mind whether I visit a temple or not.\n\n"+
    "I know I have his blessings always. Most of the times, my prayers are answered. But sometimes my pyayers remain unanswered. I want to know why sometimes my prayers remain unanswered. Although the unanswered prayers don't lessen my belief in Lord Hanuman even a little bit, still I want to know the reasons behind it. I want to know why he doesn't listen to me (his own bhakt) sometimes. I want to know why he keeps me (his own bhakt) waiting and waiting sometimes and why he says me (his own bhakt) no sometimes.\n\n"+
    "I want to get very close to Hanumanji and offer my service to him. I really want to serve Lord Hanuman from the core of my heart. Will I be able to get his darshan in this life of mine?\n\n"+
    "I have many more such questions in my heart and mind which I will ask in my next experience post.\n\n"+
    "Thank you.",
  answer:
    "Divine Soul,\n\n"+
    "Lord Hanuman visited the Mathangs almost 3 years after Samadhi of Lord Ram. He promised them to visit them every 41 years because in 41 years another generation grows up. Lord Hanuman gives supreme knowledge to their every generation.\n\n"+
    "He gives Darshan to many people, not only Mathangs. Because of modern lifestyle, not many people have the pure heart with no desires. Until few centuries ago, He gave Darshan to many people but as a community only Mathangs have the privilege of Lord Hanuman's Darshan in this century. There may be many people who have had His Darshan individually. Many devotees have written to us that they saw Him in their home after the Charan Pooja and reading of chapters of His Leela. It is not difficult to see Him. What all is needed is detachment from this materialistic world so that heart and soul can be pure.\n\n"+
    "Ancient temples are the places where Lord Hanuman once came and gave Darshan to someone. The person to whom He gave Darshan became Mahatma and a temple was built by people living around that place. Ancient temples are important places because Lord Hanuman once sat His foot there. But it is not necessary that He comes to those places even now.\n\n"+
    "This universe is endless. Human beings have limited capabilities to see and sense this world. Lord Hanuman has infinite space to live.\n\n"+
    "Blessings"
  },
  {
  id: 248,
  header: "The dark girl in my dreams",
  question: 
    "In around August 2003, i came back from delhi, where i went to prepare for certain exam. it was slightly raining and then electricity went kaput...we all were trying to sleep. I was lying on one corner of the bed while my mother was lying on another side. Just two of us in the room.while I was sleeping...my eyes were shut..I was lying on bed...I saw the room in which I was sleeping ...I saw a dark girl ...who was of about 12 to 13 year old ...wearing a skirt and top...which I used to wear as a child...she entered in my room through an open door and sat next to me while I was sleeping... And then suddenly I felt wave formation in my body...3 times...and I woke up.\n\n"+
    "I went to my father immediately and narrated it...He said it happens when u r half asleep and half awake.\n"+
    "It wasn't a dream...It wasn't a waking reality. ..what was it...\n"+
    "And who entered my body...me or that girl?\n"+
    "Before this incident only significant dream I had was of kali matas image.it happened just the night before I was leaving for delhi.It was like a huge poster of goddess kali and that was all and nothing else...There was nothing except her...and there was no movement in that dream...nothing just a kalis image.\n"+
    "This dream did bad for me because In all things I started to desperately seek signals from mata and wasn't applying my intellect.\n\n"+
    "I had this trust in my dreams because of this one particular dream may be in 2001 or 2002. .I was trying to save a badly injured dog, his one eye had come out. While I was doing whatever I could to heal him...I had this dream...where I am cooking a kheer. I started cooking kheer in the day, in the dream I am stiring it ...now it is evening and when I stop to look at the kheer the milk is spilled.\n\n"+
    "I woke up and immediately I knew that dog won't survive...It died the same day In the evening.\n"+
    "After this dream I started to believe in my dreams.\n"+
    "I have had few more significant dreams but right now I am curious about that dark girl who was she?",
  answer:
    "Divine Soul,\n\n"+
    "It is unfortunate that even after reading all the chapters, your mind is buzzing with this query. Dreams are dumping grounds of your unwanted/unfulfillable desires. Do not bring them back into MaanavLoka reality by thinking about them or trying to find a meaning behind them. This approach has cost you a lot in your life and you are still not giving it up. Don't let your Swapanloka reality drive your MaanavLoka reality. If you read experiences of other devotees related to dreams, and the answer they got in Sakshat Hanuman Pooja, you would be able to understand how desires become recipe of dreams. We always advise devotees to never think about dreams, especially bad dreams, after waking up.\n\n"+
    "Blessings"
  },
  {
  id: 249,
  header: "from dark to lightness",
  question: 
    "I have done a lot of sins & never ever realized them in my life, due to the grace of lord hanuman I became vegetarian, & got to know about shree ram, whom I have never worshiped, though I have worshiped hamuman jee since my childhood. Right now I have lost everything due to my past sins & I have also become drug free, earlier I used to be alcoholic, I am going through a very bad phase, my health is too bad , I have no job, I have no mental piece, I don't know what to do other than to suicide but as it is a sin, I don't want to do that.\n"+
    "Please help me out. Lead my path to a happy & peacefully life.\n"+
    "Jai shree ram , jai hanuman.",
  answer:
    "Divine Soul,\n"+
    "Your prayer has been initiated. Things will change for better from now onwards. Lord Hanuman has given a message for you. The message is:\n\n"+
    "See your past as a lesson, not as an excuse.\n\n"+
    "Meaning: Do not feel bad about your past. It has made you a unique person with unique experiences. These unique experiences make you stand out from others. See it as a lesson. It was not your fault alone. This was how it was destined. Now look forward. Never use your past as an excuse when you deal with situations and people. See it as a lesson which has made you a more experienced person than others around you. These same experiences will help you excel in life.\n\n"+
    "Blessings"
  },
  {
  id: 250,
  header: "darshan",
  question: 
    "please give me darshan and i can recognize u and touch ur feet AND GET UR BLESSINGS my lord hanumaNA. please fulfill all my dreams."
  },
  {
  id: 251,
  header: "darshan",
  question: 
    "Continued from #373072\n\n"+
    "Muje yebhi jan na heki\n"+
    "Prabhu hanuman dada ke shakshat darshan karna sambhav he ki nahi mere jese naswar manushy ko.....\n\n"+
    "Agar ha to kese kar sakta hu\n"+
    "Muje batane ki krupa karke mera manushya jivan dhany banane me meri sahayta kijiye",
  answer:
    "आपको दर्शन करना अवश्य संभव है | इसके लिए आपको पहले आत्मा का ज्ञान प्राप्त करना होगा फिर परमात्मा का ज्ञान प्राप्त करके आत्मा को शुद्ध करना होगा | यहाँ पर हनुमान जी की लीलाओं के अध्याय पढ़ते रहिये , आप एक एक कदम करके हनुमान जी की तरफ बढ़ते चले जायेंगे और अंततः आपको दर्शन होंगे |"
  },
  {
  id: 252,
  header: "Darshan of God Hanuman...",
  question: 
    "Our greatest thanks to Hanumanji who came in my dream after reading first chapter... Lots of thanks special Setuu who gave great opportunity join this community.. I also like to reciprocate my thanks to My father & Mother who is great devotee who brings my heart for God.\n"+
    "Now a days, I pray lord hanumana that my life will be go well, but my mind is not setup towards my work and my lord Hanuman. Jai Shriram..."
  },
  {
  id: 253,
  header: "Darshan of Lord Hanumaan in dream",
  question: 
    "In 1974 my father passed away and left a will of his house to me and my brother on a condition that we can enjoy the property after conducting the marriages of my two sisters one younger and other much older than my elder brother.\n"+
    "It so happened that I lost the original will on my way to residence in Bangalore. Being the only copy I lost all peace of mind and was afraid to tell this to my other sisters and brother.\n"+
    "I used to attend regularly poojas conducted to Sri Ragavendra swamy and Goddess Gayathri those days. And I revealed only to those people who were doing pooja.\n"+
    "After about a fortnight I had a strange dream in the early hours of the morning. I used to get up around 5 am daily.\n\n"+
    "I WAS WANDERING AROUND IN THE STREET SEARCHING FOR SOMETHING WHEN I HEARD A LOUD NOISE LIKE A DEMON ROARING. BUT I COULD NOT SEE THE DEMON. SUDDENLY FROM BEHIND I HEARD ANOTHER VOICE. AND I COULD NOT BELEIVE MY EYES. IT WAS LORD HANUMAAN IN A GIGANTIC FORM [ LIKE A SKYSCRAPPER ] AND TALKING IN A MILD VOICE CALLING ME TO ACCOMPANY HIM IN SEARCH OF SITAMATA AND LIFTING ME IN HIS GIGANTIC HAND AND READY TO FLY.\n\n"+
    "I woke up suddenly and saw the time was 4.30 am.I could not decipher the dream but when I told the lady who was doing Guru pooja she explained the sequences. The demon was Raavana and search for Sita mata was wealth [ here it is the will ] and Hanumaan helps me in searching the same. Exactly after a week I got a msg by post from a person named Venktraman that the will is with him and he requested me to collect from his residence with the proof of the post card.\n\n"+
    "This chilling experience of HIS DARSHAN and many more incidences in my last 40 years has been the cause for my living even today."
  },
  {
  id: 254,
  header: "Darshan of Mata vaishno Devi",
  question: 
    "Jai siya Ram\n"+
    "Jai Radhe shyam\n\n"+
    "Pyare settu, mein himachal state me rahta hun.wahan mere baapu ji aur mummy mata vaishno devi ki pooja krte hein.wahan mene mata ke bhaqti wale chamatkaar dekhen he in.me abi andhra Pradesh state me GOVERMENT vizag steel plant me kaam kr RHA hun.yahan es month December mein ek 40 se 50 age ki woman ko red colour clothes me plant me ghumtae hue first time dekha..aur yahan abhi mata ki pooja fast days b chal rhe he in.aap kirpa krke ye bta dijiye ke WO woman ,aam hamari tarah hi h ya prabhu mata vaishno devi\n\n"+
    "Jai siya ram",
  answer:
    "वे एक सामान्य औरत है लेकिन उनको देखकर आपको माता की याद आई तो आप अवश्य भाग्यशाली आत्मा हैं |\n\n"+
    "||राम||"
  },
  {
  id: 255,
  header: "Dear blessed souls",
  question: 
    "The community Mathangs are they normal human beings or Monkey community? Where are they living in India?? Is it possible to meet them and discuss?? I would like to know more about them and their existence.... Thank you... Ravikumar.",
  answer:
    "Divine Soul,\n"+
    "They are human being and they are living in Sri Lanka, not India. You can know about their lifestyle by reading the chapters of their log books. 2 Chapters have been posted. More will follow.\n\n"+
    "Blessings."
  },
  {
  id: 256,
  header: "dear hanuman",
  question: 
    "you know what i have done to my family and what they have done to me.You saved from death, by coming to home on that day. I am not angry with the my family and other people. Give me strengh to help people releive their sorrows and make the world to live in peace."
  },
  {
  id: 257,
  header: "Dear Hanuman -Please help me in my Job Monthly Sales Target",
  question: 
    "Dear Lord Hanuman ,\n"+
    "I have monthly sales target ,which has to be crossed under the same month ,\n"+
    "in the job where I am working currently .\n\n"+
    "I am kindly requesting Lord Hanuman to help me cross this monthly sales target\n"+
    "before the end of 2nd week of every month .\n\n"+
    "This will reduce my personal stress to a big extent .\n\n"+
    "For the current month ,please help me to cross the target under next 3 days .\n\n"+
    "Thanks"
  },
  {
  id: 258,
  header: "Dear Lord Hanuman ---Pls fulfill my wish",
  question: 
    "Dear Hanuman ,\n"+
    "Kindly bless me with divine child at the earliest .\n\n"+
    "Thanks"
  },
  {
  id: 259,
  header: "DEATH",
  question: 
    "In previous Chapter when any have not 7 kal then he have in danger . Any one give his kal to save their life.\n"+
    "In 5 chapter why did hanuman ji not do this process to save urmi life.",
  answer:
    "Divine Soul,\n\n"+
    "It was necessary to fulfill Ramnarayan's wish through Urmi's body.\n\n"+
    "Ram."
  },
  {
  id: 260,
  header: "Deja wu",
  question: 
    "There are some events which when happen, I feel that I knew that situation of the event before hand. This feeling I had from child hood. Pls help me know why does that happen?\n"+
    "For example : 4 relatives of mine including me are sitting over a cup of tea and discussing something. When the event is happening, I feel that I knew this situation. I asked my Maa in childhood and she also had that feeling.....but reason remains unknown.",
  answer:
    "Mathangs have this knowledge that when Lord Vishnu looks in eyes of Devi Lakshami in Vaikuntham, some souls in mortal worlds experience a state in which grip of Maya (illusion) on their soul gets weakened. That is why they see a loophole in this illusion of external world. This loophole is the feeling that you have seen an event before. Mathangs say that Lord Hanuman has elaborated on this phenomenon. If it is in one of the chapters, you will get to read it when we decipher it."
  },
  {
  id: 261,
  header: "Depressed soul",
  question: 
    "Dear hanuman\n"+
    "After the demise of my parents I've been very lost and depressed. No doubt I'm married for 19 years and have 4 kids but unable to be happy as I've so many questions asking why my mother had to commit suicide and the demise of my father was to sudden as I wasn't mentally prepared.\n"+
    "Now I faced lots of financial challenges and difficulties with little success.\n"+
    "My father was a hanuman devotee yet he had a painful death with lots of sufferings.\n"+
    "Till today although it's been years of my parents demise I've not been able to be happy and it's affecting me and my family\n"+
    "And what can or must I do to be financially stable and secured as I've 4kids to raise, educate and look after\n"+
    "I'm also in so much distress and unable to share my pain sorrows nor my feelings to anyone. My health too is not good at all.\n"+
    "Please help me Hanuman and relieve me of all my bad luck and bless me with health, happiness, protection, prosperity,wealth for me and my family"
  },
  {
  id: 262,
  header: "From the depths of my heart",
  question: 
    "How can I even put into words the feelings that surge everytime I read a chapter. I am overflowing with gratitude to Lord Anjaneya for giving me this experience to be connected to His grace through the Mathangs.\n\n"+
    "I have always had within me this deep longing to experience the Divine and be free from all the negativity that I see around me. Sometimes I feel very restless and sad, sometimes I feel I am mechanically going through the motions of living, while my soul yearns for something else . There are days when I feel a strong desire to get liberated, and then the feeling that I am pulling myself inescapably into the world of illusion by generating more and more karma each day makes me feel afraid. I know that I must work towards my liberation , yet when I become angry or act selfishly at times, I feel disappointed that I am taking one step backwards. I despair whether I will ever be fit for moksha. But certain circumstances which seem to make me behave that way I am unable to overcome. I am always aware of my connection to the Supreme, all the time. Still at times I get upset by the negativity in people I see around me, because I feel helpless.What should I do to live a more fulfilling spiritual life and work towards salvation ?\n\n"+
    "My heartfelt love and gratitude to Lord Brahma,Vishnu, Shiva and the Divine Mothers Maa Lakshmi, Maa Saraswati , Maa Shakti and Lord Anjaneya.",
  answer:
    "Divine Soul,\n\n"+
    "This is identification problem. You are calm and still but there is a gross form of \"I\" which is unsettled. You have a choice as to with which form you want to identify yourself. If you identify yourself with the latter, you will feel unsettled.\n\n"+
    "You will understand more about this phenomenon in 5th chapter which will be posted soon.\n\n"+
    "|| Ram ||"
  },
  {
  id: 263,
  header: "desire",
  question: 
    "From past several days I was having a desire to know the purpose of my life , why I came to this planet . what are my duties to do here . purpose of this body . but could not got .but at the same instance of my desire I was mysteriously guided or getting one by one hints or getting books automatically to read the wise knowledge as if some one is directing me to go step by step to know your destiny . In same sequence of incidents I got randomly this site after I chant Hanuman chalissa again as if Hanuman ji showed the way to read . I am heartly thankful and extreemly obliged to Great lord Hanuman ji that now they had started talking to their child still want to experiance my soul connection with them which one day will be known by this soul which riding my body by grace of almighty lord Hanuman . I bow to him , I invoke my soul to welcome their kind blessings . My sole purpose of human life will be revealed by blessing of Lord hanuman . One day My soul connection with them will be revealed by them .\n\n"+
    "Manojdeva Marutulyavegam jitendriyam buddhivarithayam ,vatatjam vanaryuthmukhyan sri ram dutham sharanam prapadheye . shri ram jai ram jai jai ram ."
  },
  {
  id: 264,
  header: "DESIRE",
  question: 
    "Pranam Lord Hanuman\n"+
    "Pranam setuu masters\n\n"+
    "After reading the 11th chapter of lord hanuman leelas, i certainly know the fact of desire fulfillment which requires the adequate karmas.\n"+
    "I want to ask wheather any desire which is being spread to the universe could ever be cancelled? or that desire would fulfill itself once narrated to the universe.\n"+
    "Can a desire be transferred to another person ?\n"+
    "Pranam lord hanuman\n"+
    "Pranam setuu masters.\n\n"+
    "yours devotee\n"+
    "Puneet Bhargava",
  answer:
    "Divine Soul,\n\n"+
    "A desire cannot be cancelled once expressed. You can express an opposite desire so that both can cancel each other.\n\n"+
    "Similarly you cannot transfer your desire but you can create a more powerful desire saying -\"Let this be fulfilled for XYZ person, not me.\""+
    "Blessings"
  },
  {
  id: 265,
  header: "Desire",
  question: 
    "Respected Teacher,\n\n"+
    "I have read chapter, I have notice one point “Desire” who on creating give us “SUKH” & “DUKH”.\n\n"+
    "And hanuman ji says that don’t create desire it will give u both.\n\n"+
    "Sir if I will not create any desire then how it is possible to gain anything.\n\n"+
    "Please solve this puzzle.",
  answer:
    "Divine Soul,\n\n"+
    "You already have millions of desires pending from previous births. If you want Moksha, you need to dump those desires and stop creating new ones.\n\n"+
    "If you want to gain materialistic things, you may desire whatever you want.\n\n"+
    "Blessings"
  },
  {
  id: 266,
  header: "Is Desire ever ending?",
  question: 
    "Hey Prabhu,\n"+
    "I would like to know, are desire ever ending? From the Chapter 6 , i got to know that even suras, asuras and soul have desires , there is no relation with the body , even the soul in Vaikhunta have desires which makes them to come to this material world and then infinite cycle of problem and misery starts.\n\n"+
    "if a soul once gets Moksha then why again he desires, being in Vaikhunta does soul still has separate entity, is he not merged completely with Lord Vishnu ?\n\n"+
    "When Lord Vishnu knows that desire will make soul to fall , why he does not desire to have other souls no more desire/wishes ,so no more misery will ever occur.\n\n"+
    "Also as in chapter 6, cycle of kalpa is infinite , will in each kalpa, Ram, krishna will incarnate? if yes then How bajarangbali will be reborn?\n\n"+
    "Ram,\n"+
    "Neeraj",
  answer:
    "Divine Soul,\n\n"+
    "Your queries reflect that you have read the chapters very sincerely. We do not want to ruin such a wonderful query by replying to it with a standard answer. You should wait for Lord Hanuman Himself to answer you. Actually, The three Lokas (BrahmLoka, VishnuLoka and MaranLokas) are not three. They are One and the movement happening between these Lokas (i.e. BrahmLoka causing desires in souls of Vishnuloka thereby descending the souls to MaranLoka) , these movements cease to exist when one realizes that they are not Three Lokas but One. Please wait till Lord Hanuman solves this mystery in His Leelas in upcoming chapters.\n\n"+
    "Blessings"
  },
  {
  id: 267,
  header: "desire of soul",
  question: 
    "Sir,\n\n"+
    "I have a question after reading this chapter, it has been written that if strong desire created then powers started to work for its fulfillment, but what if anyone have a strong desire now a days in kalyuga and they dont have sources to fulfill it,\n\n"+
    "Then how powers can help to fulfill it.\n\n"+
    "Thanks.\n"+
    "Sanjeev.",
  answer:
    "Divine Soul,\n\n"+
    "First of all you must recognize whether it is desire of your own soul or a desire induced in you by Surrahs and Asurrahs. Go to the origin of that desire. How was it triggered? How shall it help you in your soul's purpose of liberation.\n\n"+
    "Once you are sure that the desire is indeed yours, then only you should proceed further. You have taken many births before this birth. In the course of your journey, you have expressed a large number of desires to the universe. Some desires have been fulfilled but those which are not fulfilled, the universe is working to fulfill them. To reduce influence of those past desires, you need to make another desire -\"That, O Universe, I do not want those desires to be fulfilled which have been expressed by me in previous births.\" You need to make this desire so powerful that it overpowers those past desires. To do that, you need to realize the unity in this universe. When you realize that unity, you will feel that everything is happening around you just for me. You are the center of the universe. At this stage, you will most likely drop all your desires. The sages who reach this stage give up all desire because they seem futile.\n\n"+
    "Blessings"
  },
  {
  id: 268,
  header: "Desire a thought?",
  question: 
    "Pranam Lord Hanuman\n"+
    "Pranam mathangs\n\n"+
    "Reading chapter 11 is a fantastic learning of lord Indra working and karmas.\n"+
    "I want to ask when we do anything ,we thought , and most of the time it happens automatically can it be constituted as a desire?\n"+
    "If yes how can this could b controlled ?\n"+
    "Thank you for answering my last experience.\n"+
    "pranam lord hanuman\n"+
    "Jai shri Ram\n"+
    "Pranam setuu masters",
  answer:
    "Divine Soul,\n\n"+
    "Yes, it constitutes as desire. There is no harm in merely desiring. When Karma match desires, then only desires get fulfilled in MaanavLoka.\n\n"+
    "Blessings"
  },
  {
  id: 269,
  header: "desires and undesired",
  question: 
    "I have suffered my whole life in seek of some love ( sneha ) from my friends, but the moment I think they love me, I find profound evidence of them perpetuating me in one way or another. Why is that desire of me to be loved never gets fulfilled.",
  answer:
    "Divine Soul,\n\n"+
    "When you reach to the conclusion that the outer world is merely an illusion, start your journey to the inner world. You will get to experience the true divine love and bliss.\n\n"+
    "Blessings"
  },
  {
  id: 270,
  header: "destroy the desire",
  question: 
    "Respected master,\n"+
    "Happy hanuman jayanthi. I am vyshak,17 yrs old,a devotee of Lord hanuman.I have read 12 chapters and waiting for upcoming chapters. Can I know the way for burning all our desires pending like for example haribodhi ekadasi by complete fasting burns all our karmas accumulated. Plz kindly tell me the way which I could follow. Master I am waiting for your answer. Please let me know. And also thank you for replying me the question I asked in last week.\n"+
    "Thanking you,",
  answer:
    "Divine Soul, There are many ways to erase bad Karmas. Some of them have been explained in the chapters posted so far, more will be explained in upcoming chapters. Blessings"
  },
  {
  id: 271,
  header: "Destruction & Illness",
  question: 
    "1) Destruction -\n"+
    "If everything is lord's design & everything the books say is true, then the end of Kaliyuga is near and large-scale destruction is inevitable. After which we'll again go back to zero and start again. So my question is, why? Why create something to destroy it later? Why can it there just be singularity? Since that's the real truth and the only thing/non-thing, why this circus of life and death? If we're a part of lord, then why separate us and put us here there everywhere. Just let there be nothing.\n\n"+
    "2) illness -\n"+
    "How would you explain mental illnesses like depression, anxiety and the like. I understand that it's all 'Maya' and nothing's really happening, but why would someone be thrown into the depths of despair?",
  answer:
    "Divine Soul,\n\n"+
    "It depends from where you are looking. If you look from Shunya tunnel, everything has already happened. There is nothing to be created, nothing to be destroyed. There is no depression, no happiness. You are null. You are shunya. You can choose experiences. You can choose to live depressing scenes as well as happy scenes.\n\n"+
    "Blessings"
  },
  {
  id: 272,
  header: "Developed fear of losing loved ones after losing my Mother",
  question: 
    "Reading this beautiful knowledge has really calmed me down in past few months and I thank you for that.\n\n"+
    "After losing my mother, I have these unintentional bad thoughts of losing my family. As soon as I have such a bad thought, I try to shun it and tell myself to not think like that and really hope in some way that Universe understands its not a desire and does not ever act upon it. How do I get rid of this fear and unwanted desire. I feel we have no control over our mind and even if heart knows we do not want it, thoughts keep coming to the mind which we have no control over. Does Lord Indra note every smallest of thought that erupts in your mind and hold on to it? How do control our thoughts and desires then?\n\n"+
    "Please shed some more light on it.\n\n"+
    "Thank you",
  answer:
    "Divine Soul,\n\n"+
    "Witness the mind and separate yourself from whatever the mind is thinking. When your soul is in the illusion that the mind is \"I\", then only your soul owns up the activity of mind. When you are aware that you are a soul and the mind is not you, let the mind think anything, it won't affect you at all.\n\n"+
    "Blessings"
  },
  {
  id: 273,
  header: "A DEVELOPED KNOWLEDGE",
  question: 
    "Jai HANUMAN JI\n"+
    "Today is birthday of shri HANUMAN JI.Hey BAJARANG BALI KEEP BLESSED ME.TODAY I HAVE finished all eleven chapter.Chapter eleven gave me a developed knowledge.It is just eye opening for me.\n"+
    "HEY BAJRANG BALI please fulfil my desire in this real world and give me strength so that I can be able to find happiness in my real life .\n"+
    "Hey MAHAVEER I need only your ASHIRVAD. Forgive me for my wrong doing and decision.\n"+
    "Please Accept my CHARAN VANDANA jai Ho MAHAVEER BAJRANG BALI."
  },
  {
  id: 274,
  header: "Devotee Query to Setuu",
  question: 
    "Shat Shat Naman\n\n"+
    "I'm of age 30 years & I have some queries in my mind. Till now I have read all the chapters published in setuu.org.\n\n"+
    "I have been born and bought up in a environment where studies were given utter importance, so in accordance to that my parents have dreams that they see in their child, but a child I failed to deliver.\n"+
    "As the time passed by, so do I kept performing karma. I believed in lord Sai Ram & devoted myself, but I keep asking for wishes from the lord, but they were never fulfilled. Then I thought may be I'm not good enough that Lord Sai Ram will ever fulfill my wishes & even got angered from lord & assumed that lord will never pay any heed to my voice.\n\n"+
    "I turn to lord Hanuman ji & started devoting myself. But sometimes I promise lord Hanuman that I'll not do few things & I broke the promise and does those things, which I believe makes lord Hanuman ji take his eyes from me .\n"+
    "Now since we are trapped in Maya, but in this Maya world as a mortal human being I have some duties to perform. One of the duties are to make my parents proud by my achievements (which I failed to deliver).\n\n"+
    "I prayed to lord Hanuman ji to fulfill my wishes, which I think wont be fulfilled since I failed as a soul to devote myself fully to him.\n"+
    "So whatever I do whether its studies or pray or devotion, I actually failed. As a soul I'm unable to connect to Lord Hanuman ji. I'm completely blank now to as what I want to do, what I want to achieve in my life.\n\n"+
    "I do recite Lord Hanuman ji name everyday but not whole heatedly. I also know whatever I do I cant win the heart of Lord Hanuman ji & can never be his devotee although I wanted to be.\n\n"+
    "Also If my wishes are not fulfilled I ll keep asking for them to be fulfilled & remain trapped in maya world forever\n\n"+
    "Setuu please guide me since I'm highly confused to what I want to do in my life. I read teh chapters once or twice , they leave their impression on my mind for a day or two, then I go back regular course of life & obeying to Maya world rules",
  answer:
    "Divine Soul,\n\n"+
    "First of all detach yourself from your body-mind. You are a soul. Not body-mind. Let the soul witness activities of body-mind. Even if body-mind does something wrong, don't let that leave any impression on your soul. This way, you can keep your soul pure even when body-mind is not pure. Slowly, you will see that your body-mind will also start falling on right track.\n\n"+
    "When your soul is pure, you can connect with Lord Hanuman, no matter what your body-mind are up to.\n\n"+
    "Another thing, keep everything between your soul and Lord Hanuman. Don't bring your family or society in between. There are millions of people around you. When you start living as per their criteria, you in effect put burden of millions of suffering souls onto your soul. Figure out what you want to do in your life. You means your soul. What is your higher purpose? Don't let 'making parents proud' become your purpose. It should only be a side product of whatever you do. Don't bring your parents' Karma onto your soul. Free yourself from attachment. It will benefit you as well as your parents. Remember, attachment is not same as love. Attachment complicates things. It adds up others' Karma onto your soul while love frees you.\n\n"+
    "Figure out what you like to do and do that irrespective of what your family or society expects. When you follow your own goal without bringing others into picture, Lord Hanuman will certainly help you. You will achieve your goals and happiness of people around you will be a side product.\n\n"+
    "Blessings"
  },
  {
  id: 275,
  header: "Devotion and Expectation",
  question: 
    "Jai Shree Ram\n"+
    "Jai Bajrangbali\n\n"+
    "We all worship God (except few who don't believe in God). We all have different reasons to worship God. Some worship God to get materialistic goals while others for non-materialistic goals. There are some people who worship God for both i.e. materialistic as well as non-materialistic goals.\n\n"+
    "I have heard that there should not be expectations in devotion. There should be only devotion from true heart. If there are expectations, the devotion is not from true heart. I have heard like this. Is it really so? Can't devotion and expectations go parallel?\n\n"+
    "Suppose I worship God with full devotion from true heart and expect some materialistic or non-materialistic goals or both from God. Is it wrong? Is is wrong to have some expectations either materialistic or non-materialistic or both from God? If I expect something from God, my devotion towards God is not true? Is it so?\n\n"+
    "Thanks and regards",
  answer:
    "Divine Soul,\n\n"+
    "There are many parts of your being viz. Body, Mind, Intellect, Chitt and .... soul. You connect to God at the level of soul. You connect to God when you rise above your body, mind etc. Expectations happen at the level of body and mind. If you are able to rise above your body and mind to do prayer, it does not matter what you do at level of body and mind.\n\n"+
    "But this world is such that, once mind and body get stuck into materialistic desires, it becomes impossible to rise above them. The connection to God fails in that case. No matter how many times you go in temple, how many times you chant a Mantra, the connection fails as you are not able to rise above body and mind. To avoid that problem , body and mind should be kept in control.\n\n"+
    "Blessings"
  },
  {
  id: 276,
  header: "Devotion and Expectation-2",
  question: 
    "\"Continued from #366929\"\n"+
    "Thank you Setuu for the reply. To meet God, we need to rise above mind and body. If body and mind are stuck to materialistic desires, it becomes impossible to rise above them.\n\n"+
    "But to live in this world, we need three basic necessities of life i.e. food, cloth and shelter. To get these things, we need job i.e. money. Does this come within materialistic desires? If we dream of a good living standard, are our mind and body stuck to materialistic desires? If we pray to God for a good life in the world, can't we rise above mind and body?\n\n"+
    "Jai Hanuman\n"+
    "Jai Shree Ram",
  answer:
    "Divine Soul,\n\n"+
    "Rising above body and mind does not mean leaving them. Let body and mind do their job. You are not a body-mind. You are a soul. You have to just be in the awareness of soul while body-mind do their worldly job.\n\n"+
    "Blessings"
  },
  {
  id: 277,
  header: "dharm",
  question: 
    "mujhe apka lekh padhkar bhut acha mahsus ho rah hai me to bs ye jannna chahta hu ki me apne dharm ka palan kese karu or sachai ke marg par kese chlu",
  answer:
    "दिव्य आत्मा ,\n\n"+
    "पहले तो ये जानो कि धर्म क्या है , सत्य क्या है और आप जिसे 'मैं' कहते हैं वो क्या है | उसके बाद पालन करने की बात आएगी | हनुमान जी को गुरु मानकर उनकी लीलाएं पढेंगे तो सत्य का ज्ञान होगा |\n\n"+
    "||राम||"
  },
  {
  id: 278,
  header: "Dharma Of Human Beings",
  question: 
    "Jai Shree Hanuman ...\n\n"+
    "My deep­most gratitude to My guru shree Hanuman Ji,All Mathangs and Setuu Masters.\n\n"+
    "Today ...Don't know why But I got a question hitting my mind that I wanna ask Shree Hanuman Ji.\n\n"+
    "Hanuman ji....Shree Ram is known as the person who always followed his Dharma throughout their life and whatever he had done was in accordance with his Dharma.If I am not wrong. Hanuman Ji ....I request you from bottom of my soul please Liberate your disciple hanuman ji,Please tell me what are the Various Dharma that a Human Being must follow throughout his life? I have already surrendered the mortal body in which my soul is living in this life and my soul in your feet My Lord hanuman Ji .... Everything I have is because of you ..The reason that I am secure is You .....I am all yours Hanuman Ji....Please accept my gratitude....My Lord,My Guru hanuman Ji please accept me as Your Disciple.\n\n"+
    "I have asked this question because I really want to be there with you My Lord in Sakshat Hanuman Pooja and I want to get rid of my Ego,My Ignorance.....I want to seek supreme knowledge Hanuman Ji and I just want to always be with you...My Lord Hanuman Ji ..I Love You so much Hanuman Ji ...And you Know everything MY lord ....\n\n"+
    "Please forgive me If I have said anything wrong Hanuman ji ...and liberate my soul ...My Lord Hanuman ji !\n\n"+
    "Jai Shree Ram ...Jai Shree Hanuman...\n\n"+
    "kaaltantu karecharanti enar marishnu nirmukter kaletwam amarishnu karma vineeyataham karan aaruddha Anant Vahnetwam Sarwaruddha Nemeetme naimitikecha bhooloka Puchetwam Vistarasti Vyahriti Patalecha... Jai Shree Hanuman...",
  answer:
    "Divine Soul,\n\n"+
    "Dharma is not something you get as instructions from outside. It has to come from inside your soul.\n\n"+
    "Therefore, seek knowledge, not Dharma. When you get supreme knowledge, your soul will direct your body-mind. Those directions will be your Dharma.\n\n"+
    "Blessings"
  },
  {
  id: 279,
  header: "Dharshan",
  question: 
    "I used to go outside on weekend along with my friend S.Jaipal in his car. Both used to sit in open air in natural atmosphere and used to share our plans and problems. My friend is a devotee of Hanuman. Once in every year he used to perform (41) days Mandala Darshan to Hanuman Temple at Karmanghat Temple, Hyderabad. He used to do (41) Pradakshanas daily for (41) days without any gap. My friend has experienced number of miracles. When he is surrounded in a web of troubles and problems, his problems vanished one by one in wonderful manner. One or the other way, the solutions used to come up to put an end to the problem. He used to share the miracles with me and I have strong faith in Hanuman, as I used to chant (11) times Hanuman Chalisa in my child hood. At the age of my school time, One day in my dream, I noticed that I fell in water accidentally and I am struggling for breath in the water. But at the same time, I found lord hanuman sitting at the base of the water. And to my surprise, when I saw the God, I got free from breathing frustration and my existence in water has become natural. In his eyes I have seen an assurance that \" You don`t get panic, I am with you\". I never forget this dream in my life.\n\n"+
    "As usual on one sunday we both left in car towards Outskirts and while we turning towards a corner from road, we noticed a Big Monkey with long tail ( tail was erected straight towards sky), came from our right side bushes, stood a while before our car, and seen us in pleasant manner and went away into bushes of the left side in a way of lion walking. I and my friend both surprised to see at that spot, where there is no possibility of existence of monkeys. For a while we both became speech less at that movement. We prayed Hanuman for giving Darshan. I think Hanumanji was pleased with the Mandala Pooja of my friend and gave a darshan to him. But to my luck, I too got the darshan. By this incident , it is revealed that Hanumanji will shower Karuna over the friends of his devotees too."
  },
  {
  id: 280,
  header: "Difference Between Charan Puja & Sakshat puja",
  question: 
    "Jai Shri Ram\n\n"+
    "What is major difference in charan puja and sakshat puja\n\n"+
    "You are requested to please clarify\n\n"+
    "With Best Regards",
  answer:
    "|| Ram ||\n\n"+
    "Divine Soul,\n\n"+
    "When a person is in front of you and you interact with him is a different experience.\n\n"+
    "When a person is not near you in terms of space coordinates but you speak to that person through video conferencing or any such media, that experience is different.\n\n"+
    "Now you can understand the difference between Charan Pooja and Sakshat Hanuman Pooja.\n\n"+
    "Charan Pooja is performed once in 41 years when Lord Hanuman visits Mathangs. When He left them He directed them to perform Sakshat Hanuman Pooja until revelation of Kalki comes out. In Sakshat Hanuman Pooja, the seers see Lord Hanuman through divine vision. He is not with them in terms of space coordinates but they can see and talk to Him through divine vision.\n\n"+
    "You will read more about CharanPooja in upcoming chapters. In chapter 6 you will read what happened on first day of Charan Pooja.\n\n"+
    "Blessings"
  },
  {
  id: 281,
  header: "Difference between vegetarian and non-vegetarian.",
  question: 
    "A question came to my mind that plants are also living beings and animals are also living beings. But some people say that eating non vegetarian (animals) is a sin. There are many religions, many communities, some says that it is sin but others say that it is not a sin. This thing is not clear. Why for some people it is sin and for others it is not? Is it really a sin? There are many uncleared doubts regarding this. Please clear this, as it has been always a question of debate.\n\n"+
    "Thank you very much.",
  answer:
    "Divine Soul,\n\n"+
    "If you are eating non-vegetarian from early childhood, there is no problem with it. If your body was born in such circumstances where eating non-veg was a norm, then your soul has made no choice in that. Your soul has no role in that. If you have started eating non-veg after you are grown enough to make choices, then remember the first day when you ate non-veg. On that day actually an Asurrah entered in your body and you could not resist eating the non-veg. Once an Asurrah gets the taste of fulfilling its desires through a particular body, that Asurrah wants to enter that body again and again. It starts manipulating that body and that mind to fulfill its desires. That is why those who eat non-veg once, those who drink liquor once etc, tend to get addicted to it. That is where the problem lies. Then your all Karma gets influenced by Asurrahs.\n\n"+
    "Blessings"
  },
  {
  id: 282,
  header: "Differentiate between voice of soul and mann",
  question: 
    "Thanks for the previous reply.\n\n"+
    "How to find out or what is right that, the voice come to us by our soul or by mann( from Ashurah or indri). Always I am facing difficulty to differentiate between voice of soul and mann.",
  answer:
    "Divine Soul,\n\n"+
    "Follow the \"One Step Up\" rule. If a voice is coming from somewhere, just go one step up and try to witness the voice. For example, suppose a voice is coming which says, \"Enjoy, life is short\", then go one step up and try to witness the source of this voice. Ask the question, \"Who is saying this?\" If you are able to watch the entity which is saying this, it is not the highest point i.e. it is not soul. It is just one point between the outer mind and the soul. You may not be able to name it but you can feel that it is not the highest point of observation.\n\n"+
    "If a voice is coming and you are not able to witness that voice from a higher point, then it may the the voice of your soul.\n\n"+
    "Blessings"
  },
  {
  id: 283,
  header: "Difficult to get rid of MAYA",
  question: 
    "Dear Master\n\n"+
    "It is incredibly difficult to get rid of maya or the concept of everything being me and an extension of my body, and it all being real and everlasting.\n\n"+
    "Just before writing this post and reading devotee questions, I had a terrible thought experience, surreal, yet something I would never like to experience first hand. The incredible pain of losing a child.\n\n"+
    "While going through this surrogate experience, I was also recollecting Chapter 24 and its messages, but saw how hopeless was the case. I realized that I have an ever so strong clinging for the body and its relations, and would never consciously want to experience that pain.\n\n"+
    "Changing the scene, however sounds good, but the pre-requisite is less attachment to surroundings, desires, etc.\n\n"+
    "Its a CATCH 22 sort of a situation.\n\n"+
    "The best part is that I dont even know what to ask here, and am relating my thought process.\n\n"+
    "Meditation does give some respite, but for a small amount of time, rest of the waking and sleeping time are passed in this infinite play of scenes.\n\n"+
    "I am very grateful for you in bringing this message online to thousands, and potentially millions.\n\n"+
    "Pranams"
  },
  {
  id: 284,
  header: "Difficulties in job, promotion and get little salary",
  question: 
    "I, Arvind, is currently working with a company for last 6 years now. During these six years I have not received any good increment or promotion. The management has been telling me that I would promoted soon, but I am yet to get any promotion and good increment. When do you think I would be getting an increment and promotion? Besides, I also want to change the company and join a new company now. When early do I expect a new job?\n"+
    "I want a job along with which I could pray/chant god's name all in equal measure during the morning, evening and even during the day.\n"+
    "Recently, I bought a house in Mohali and I am not sure as to how I have managed to buy it because I did not had enough money.\n"+
    "God somehow ensured that I could buy a house. Its a miracle to me."
  },
  {
  id: 285,
  header: "difficulty",
  question: 
    "I don't know why I'm going through depressive moods now and then. It is painful, making me cry. It is a horrible phase. At this rate I doubt if I'll ever get moksha. It seems far away. May be I am not fit for anything.I am unable to stop medicines.What shall I do. I don't seem to have enough strength to overcome the barriers. Not feeling well.Kindly guide me and help me hanumane. Jai sriram. Pranams to all there- setu masters and Mathangs.\n\n"+
    "If I don't take medicines, others in the family get disturbed, as they do not and cannot understand me. so I take. There is peace. But I will be harming myself. It seems so important that they don't hurt me, which they don't even realize. Why am I like this? Wavering?\n\n"+
    "Both of us expect from each other to change. My children think I am very emotional and sentimental, and, I feel they don't respect feelings.\n\n"+
    "Whenever I get that liberated feeling, it stays for a very short while. Then I am back on the ground. I have to learn to balance. However, all my effort fail because I get pulled down. I get affected by harsh insensitive words. I am unable to ignore that.I am so different in nature.\n\n"+
    "Hanumane, pull me out of this. Give me bhakti. jai hanuman, jai sriram. anjaneya saranam."
  },
  {
  id: 286,
  header: "dilemma",
  question: 
    "Pranam,\n\n"+
    "sometimes if feel like having a peaceful govt job,sometimes feel like do some business and get richer,sometime feel like marrying ,sometimes feel like be alone for ever.\n\n"+
    "sometimes i search for the meaning why i am living here on earth.\n\n"+
    "hey hanuman please help me get a meaning for my life.\n\n"+
    "jai sriram.\n\n"+
    "hope i get a chance for sakshat hanuman pooja.\n\n"+
    "Dear Setu masters,\n\n"+
    "I am greatful that i received reply on hanuman jayanthi.\n"+
    "jai sriram.Hope i will attain moksha.\n"+
    "my wishes to lord hanuman on his janmadin",
  answer:
    "Divine Soul,\n\n"+
    "Along with the day-to-day work, find a higher purpose in life like getting Moksha or supreme knowledge. Then only you will discover peace in life.\n\n"+
    "Blessings"
  },
  {
  id: 287,
  header: "dilemma",
  question: 
    "Continued from #516671\n\n"+
    "Dear Setu masters,\n\n"+
    "I am greatful that i received reply on hanuman jayanthi.\n"+
    "jai sriram.Hope i will attain moksha.\n"+
    "My wishes to lord hanuman on his janmadin.Jai srirama."
  },
  {
  id: 288,
  header: "Dipawali wishes and Birthday wishes",
  question: 
    "Namaskarm sir,\n\n"+
    "We wish you Happy Deepawali to entire and each individual of Setuu.org Team....\n\n"+
    "We wish to Hanumanji also Deepwali wishes..\n\n"+
    "In some part of North India, ayodya,uttarpardesh..\n"+
    "Celebrating Shri Hanumanji Birthday..\n\n"+
    "Sir, we want to know when Shri Hanumanji Birthday,\n\n"+
    "With Regards..",
  answer:
    "Divine Soul,\n\n"+
    "We cannot speculate. The correct answer about birth of Lord Hanuman is known to Him only. In one of the upcoming chapters, He will reveal this. Meanwhile, read story of birth of Lord Ram in chapter 16 and purify your soul.\n\n"+
    "Blessings"
  },
  {
  id: 289,
  header: "Discrepancy in My marriage",
  question: 
    "I consider Lord Hanuman as my elder brother. I am only child of my parents and at a very young age one of my cousins who was closest to me refused to get the Rakhi tied on his wrist. I felt very bad and was very sad of that fact that I have no brother. I came back to my home. My father noticed my despair and asked me what has happened. I told him the facts, later that day my Dad motivated me and asked to tie Rakhi on wrist of Lord Hanuman as he was an ardent follower of Lord and considered Him as his Guru. Since then every Raksha Bandahan I have been tying knot of rakhi on His wrist and god has also helped me through thick and thin. Certain instances to quote are one day I was going to my college and a boy came and started teasing me. As it was a hot summer day and my college was in a lonely place I was very scared. An old Baba wearing a white turban appeared from back of a nearby construction site and asked me to stay there till this notorious fellow leaves the place. After that boy left the site that old Baba asked me to go the college, but after going ahead a few steps that old man could not be seen anywhere. Still whenever I feel lonely or could not find any solution to my problem I pray Lord Hanuman whom I consider as my elder brother and somehow that problem gets resolves. But from sometime I have been facing a problem related to my Husband. He is in influence of his Bhabhi (Sister In Law) and gives all his earnings to him, when I opposed I was beaten severally. My marriage is there for last 4 and half years and I have a 3 years old daughter and my Husband has not returned to home since past two years. He is living with his Bhabhi and spending all his earning there. I am only earning member for my daughter and my old mother and I dont have father. Just wanted to know when could probably he return. I know Lord Hanuman is very helpful to me but since now my daughter is also growing up and miss her father I want him back with me. If anyone could find an answer to my question please reply.",
  answer:
    "Divine Soul,\n\n"+
    "The Karma situation is such that more you hate that woman, more the bond between her and your husband will grow. Therefore forgive that woman. Forgiveness is the key. More you forgive her and your husband, weaker their bond will get. You won't be able to forgive her if you keep blaming her for the mess in your life. Remember this, no outsider is responsible for problems. It is all a game of Karma. Therefore get closer to your soul. Realize that you are complete in yourself and you do not need anyone for happy life. Once you do that, you will see that your husband will slowly drift towards you.\n\n"+
    "Blessings"
  },
  {
  id: 290,
  header: "Divine experience",
  question: 
    "O Lord,this life is difficult without you. You are the ocean of knowledge, one cannot weigh the Krupa you had given to us. You are merciful, powerful & divine, such an experience is divine & writing it down is divine. My heart cannot speak, i want to be with you without any notion, motion, thinking, & want to observe the divinity. O protector of this world, bestow your presence in my heart, so that i feel your presence ever after. In your feets."
  },
  {
  id: 291,
  header: "divya aatma abhishek ka apna bhram dur karne ke liye prashn",
  question: 
    "JAI SHREE RAM\n"+
    "setuu ke santo ko mera pranaam,yaha par diye gaye adhyayo ko padh kabhi kabhi man hota hai ki sab kuch choddkar apke paas tapasya ke liye aa jau....lekin mere pas to itne paise bhi nahi ki waha aa pau....fir waha aakar tap karne ki bat to bahot dur hai....\n"+
    "mera anurodha hai ap sabhi se ki mujhe kuch baatein hanuman ji ke madhyam se batane ki kripa kare.....\n"+
    "mujhe mere pandit ji ne bataya tha ki mai apne hi parivar ka purvaj hu aur kisi uddeshya se vapas aya hu....iss kathan mein kitni sacchai hai ye janna chahta hu....hanuman ji se kyuki wo antaryami hai....aur ye bhi ap log keht hai ki apko jo bhi maangna hai apne liye maangiye,apsab ko lekar sath chalenge to unke karma bhi sammilit ho jaenge apki cheshta mein....lekin jab aisa sochta hu to log mujhe swarthi kehte hai....wo kehte apke mata pitaah sabse pehle hai unki seva kariye....mai bhot sari cheeze aisa karna chahta tha is jeevan mei jisse sabko lambh mile....aur khud ki bhi aisi pehchaan banana chahta tha ki mujhe puri duniya jane...aur ek manuysha hone ke naate apni icchapurti bhi chahta tha....to bas apse ye anorodh hai....ki mai apne sapno ko pura karne ke liye prayaas karu....agar meri vo icchaen puri ho sakti hai....agar mere pichle janmo ke karma mere avrodh na bane ya mera satkarm meri madad kare aage badhne mei to mai bharsak prayaas karu unhe pura karne mei ya apni mata pitaah ki bat maankar ek sadi zindagi jeeyu jaisi wo cheshta rakhte hai...kripa karke mujhe rasta dikhaye mere aradhya....kyuki mai bhot soch mein pad gaya hu ki mai kya karu....apse bhot bhot vinti hai mere bhagwaan hanuman aur bhi bhot sandeh vo bhi puchunga lekin iske baad....",
  answer:
    "दिव्य आत्मस्वरूप ,\n\n"+
    "सबसे पहले तो अपनी आत्मा को पहचानिए | आपकी आत्मा सत्य है | बाकी जिन भी लोगो की आप बात कर रहे हैं वे काल और अस्तित्व में पड़ रही एक परछाई मात्र हैं | हनुमान जी अपनी लीलाओं से जो ज्ञान आप तक पहुँचा रहे हैं उस ज्ञान को आत्मसात कीजिये | जब आपको आत्मज्ञान होगा तो आपको अपने आप पता चल जाएगा कि आप कौन है , आपको किसी अन्य से अपने बारे में पूछने की आवश्यकता नहीं पड़ेगी |\n\n"+
    "||राम||"
  },
  {
  id: 292,
  header: "Do God take care of everyone?",
  question: 
    "Dear LORD HANUMAN, I want the answer of a simple question.\n"+
    "LORD HANUMAN, I am getting married on 15th to a girl whom I love very much. Her father passed away yesterday and this pain is emotionally very deep. She is depressed, she is hurt, she is broken emotionally.\n"+
    "Dear LORD HANUMAN, her father made all the arrangements, he was very excited that his daughter is getting married. Each father has this dream that he sees his daughter gets married. Each father has this dream that he does \"KANYADAAN\". He was very very happy.\n"+
    "Dear LORD HANUMAN, my question is this that if it was definite to happen then why could not GOD waited for 10 days so that he could saw the marriage of his daughter. I have heard that GOD IS GREAT, but Dear LORD what type of justice is this? I have heard that GOD takes care of His children, but LORD what type of care is this? Why God did not wait for few days?",
  answer:
    "Divine Soul,\n\n"+
    "There are laws of Karma and desire on which this universe runs. God helps souls in fulfilling their desires within the framework of the laws of this universe.\n\n"+
    "Blessings"
  },
  {
  id: 293,
  header: "Do I have the right to pray?",
  question: 
    "Jai Sriram,\n"+
    "I am a person who carries a lot of guilt and pain in my heart. I realised after reading the first chapter that everything is an illusion. Though, it relieved my heart and gave me slight courage to worship God, the sins I have done and the guilt I carry make me afraid to worship and pray to God. I feel as i f I have the lost the right to worship God. What shall I do?\n\n"+
    "Please help me.\n\n"+
    "Poornima jaiganesh.",
  answer:
    "Divine Soul,\n\n"+
    "Read chapter 9 in which Baba Mathang doubts his own purity. Then Lord Hanuman appears and says, \"You keep yourself under constant observation. It is a sign that you are completely pure.\"\n\n"+
    "You have also brought yourself under observation, finally. So you are purer than many other souls who feel that they are pure but they are not.\n\n"+
    "Blessings"
  },
  {
  id: 294,
  header: "Do Prayers help in achieving materialistic desires?",
  question: 
    "Jai Shree Ram\n"+
    "Jai Sita Maiya\n"+
    "Jai Bajrangbali\n\n"+
    "Everyone who believes in God prays to God. Different people have different prayers. Everyone has a reason to pray. Some people pray to God for peace of mind while some for getting Moksha while others for getting their desires fulfilled.\n\n"+
    "Now, my question is \"Do Prayers really help in getting materialistic desires fulfilled?\" Do Prayers also have an important role in getting the desires fulfilled or it is only the Karma of a person which is responsible for fulfillment of a desire?\n\n"+
    "Please answer.\n\n"+
    "Thanks and regards.",
  answer:
    "Divine Soul,\n\n"+
    "Yes, prayers help in fulfilling desires. Chapter 11 is entirely dedicated to the secret of fulfilling desires. Please wait till we get permission to publish this chapter.\n\n"+
    "Blessings"
  },
  {
  id: 295,
  header: "Does God judge me?",
  question: 
    "Many times in my personal and professional life I feel people around do not accept me easily and I wonder why it is so. Is it because I am too honest or because even a slight injustice agitates me or is it because people think I am insecure? Yes I am honest person, I cannot take it if injustice happens to me, I openly share my concerns. I'm a person who doesn't look aggressive but I generally put my views strongly which is many times misplaced as misbehaviour.\n"+
    "I always judge myself and am honest about my mistakes. I just wonder whether My Lord Hanuman also judges me? If I'm right why I am so anxious all the time? I seek peace. I seek the knowledge and purpose of my existence. I want to get rid of the mundane pursuits of life. Please guide. Jai Hanuman",
  answer:
    "Divine Soul,\n\n"+
    "We hope chapters being posted here are helping you to know the purpose of your existence.\n\n"+
    "About Judging. There is a thing called Dharma. To lead a peaceful human life one must define his/her Dharma. Dharma does not mean religion. It means what rules and beliefs you set to live your life. Do contemplate what are your beliefs and principles. Those beliefs and principles may be rigid or they may be flexible and change according to new experiences and circumstances. Choose your principles and beliefs. Choose your Dharma. Once you choose it, take the responsibility of your choice. Whatever comes with your choice, abuses or praises, you have to accept it with responsibility. Then you will lead a peaceful life.\n\n"+
    "Blessings"
  },
  {
  id: 296,
  header: "Does Hanumanji accept the bouquet of dedication and love of His female bhakt???",
  question: 
    "Since childhood I am an admirer of Lord Hanumanji. I grew up by thinking that He is my biggest supporter and my guide.I was connected to Him mentally and emotionally.But last year a jyotish told me that women should not say Hanuman Chalisa and should not even do His bhakti as Hanumanji do not really like women and stay away from them.Is this true??? Since then , I gave up reading chalisa and following Him because I really do not want to hurt or bother Him in anyway.",
  answer:
    "Divine Soul,\n"+
    "This is not true. Read third chapter carefully, Lord Hanuman Himself says that it is a misconception. When we do prayer, we do not remain a man or woman. We rise above our bodies. Body can be a man or woman but not the soul. Hence women can very much pray to Lord Hanuman.\n\n"+
    "Blessings"
  },
  {
  id: 297,
  header: "Does Lord Love me ?",
  question: 
    "AS EXPRESSED IN MY EARLIER COMMUNICATION, I AM DEVOTEE OF LORD HANUMAN SINCE MY CHILDHOOD. I WANT TO KNOW THAT WHETHER HIS BLESSINGS ARE ON ME AND MY FAMILY.",
  answer:
    "Divine Soul,\n\n"+
    "You have done some mistakes in life but Lord Hanuman understands the circumstances which led to those mistakes. Hence He has forgiven you. Yes, His blessings are on you and your family."
  },
  {
  id: 298,
  header: "Does the soul have any responsibilities?",
  question: 
    "Jai Hanuman,\n\n"+
    "Greetings MahaYogi Anjaneya,\n\n"+
    "Why is MAYA cast as evil in one of the replies to devotees? She is as she is. Should we not thank her for allowing the veil to slip off?\n\n"+
    "Of what use is pursuit of Moksha when other souls remain trapped? Can wholesale change be brought for all? It does not matter if there is only one soul in my illusion, or billions, how can one seek moksha when the answer to that is also a one way ticket out of dodge?\n\n"+
    "The pain of this illusion is experienced as real as are its pleasures, to punish surrah and asurrah for an entire kalpa is not right. Has the punishment ever cured the cycle?\n\n"+
    "If Shukracharya is taken out, existence will run out of fuel? Why does it look like he is winning, how can we help in the battle?\n\n"+
    "Jai Hanuman",
  answer:
    "Divine Soul,\n\n"+
    "If a soul wants to get Moksha, it has to be free from claws of Maya. If you label something within Maya-- a person or a thing-- as evil, you are serving the cause of Maya. But if you label the entire Maya as evil, it helps you in the realization of supreme truth.\n\n"+
    "What are 'others' here? The external world is not something 'well-defined' as Maya wants you to believe. When you change, the external world too changes and you never notice it because 'absolute change' takes place. When you become enlightened and desire to be in an external world where everyone is enlightened, your desire shall be fulfilled.\n\n"+
    "Reflect more on the concept of Surrahs- Asurrahs. Everything is necessary for the cycle.\n\n"+
    "You are already in the battle. On which side is the question.\n\n"+
    "Blessings"
  },
  {
  id: 299,
  header: "Donating years from my own age",
  question: 
    "Dear god,\n\n"+
    "Out of my own sixth sense,I came to know that my parents might have a shorter age span then I expected. I prayed with semi conscious state to give equal share of few years from my age to them.I am most attached to them and consider them gods.Therefore, any act that I do against their will makes me feel worse.I am currently seeking my purpose in life.Also I feel I am not able to find a fine direction and guidance in my life.I know I have extremel potential and energy to do something worthwhile in this life.Please guide me towards the best.\n"+
    "Thank you",
  answer:
    "Divine Soul,\n\n"+
    "If you want to wish good for them, wish for their Moksha. Wish that they get out of the cycle of birth and death. By wishing them long life in this life, you are being selfish.\n\n"+
    "Blessings for finding right path in life.\n\n"+
    "Ram"
  },
  {
  id: 300,
  header: "Don't know why",
  question: 
    "For past few months, after I got in contact with you, I had started changing. In the sense, I w as very positive and generally satisfied, strong etc.In spite of many difficult situations, I was able to manage surprisingly well.\n"+
    "Suddenly, I am experiencing severe depression and am unable to control.\n"+
    "Though my poojas are going on okay, there's some kind of uneasiness that is troubling me and I feel like crying all the time. Today I went to my doctor who gave me new medicines.I was under the impression that I had come out of a difficult health problem. But now I realize I am going back. I am depending on Anjaneya more. Am I being tested? Am I going wrong somewhere.Mind seems to pose as the biggest challenge I have to overcome. What do I do.? If there is one step a little forward, there seems to be a hundred backwards. Sriram jayaram jayajaya Ram! Sri Anjaneyaya namah. om namah shivaya. Sri gurubhyo namah. Pranams to all at setu and the mathangs. Forgive me and help me.",
  answer:
    "Divine Soul,\n\n"+
    "\"The opposite two\" are always temporary.\n\n"+
    "Opposite two means:\n\n"+
    "Good - Bad,\n"+
    "Happiness- Sorrow,\n"+
    "Hot- old,\n"+
    "Healthy- Sick,\n"+
    "Positive- Negative,\n\n"+
    "You have to come out of these opposite two and experience the real bliss which lies beyond positive or negative.\n\n"+
    "You are not doing anything wrong. You have considered Lord Hanuman as your Guru. And a Guru tries to create situations to make their disciples learn the truth. The truth is neither in POSITIVE nor in NEGATIVE.\n\n"+
    "The truth is beyond Positive and Negative. Try to come out of the \"opposite two\". If you have any confusion or doubt, post it here. You may not be able to hear Lord Hanuman directly because of worldly chaos but you can hear Him via Setuu. Post your confusions here with detail. Some of your confusions will fly away while you write them. And some will fly away when you hear a word or two from the Guru--- Lord Hanuman.\n\n"+
    "Blessings"
  },
  {
  id: 301,
  header: "doubt",
  question: 
    "If Hindu gods are the only spiritual power in the universe then why are there are so many religions...like Hindu, Muslim, Christianity....I sometimes get confused to whom should I worship....n there is one hanuman chalisa Yantra should girls wear that...It contains some type of spiritual power or not...thnx:)",
  answer:
    "Divine Soul,\n\n"+
    "You should only seek truth, not religion. By truth, we mean supreme truth. You are unique, hence your path to truth shall also be unique. No two paths are same. But we can classify those paths in many ways. If you are walking on the path of supreme truth and somebody tells you, \"Hey, the path you are traveling on is classified as Hindu path.\" That classification should not bother you.\n\n"+
    "What power you see and experience depends on where exactly you are. At the top, you will see only one single power. If you decline a bit, you will see two things (duality) - God and the universe. If you decline further, you will see 3 powers- Brahma, Vishnu and Shiva. If you decline further, you will see Indra and Kaaldeva. If you decline further, you will see the complicated world. In that complicated world, there are infinite powers. Out of them, we worship only those powers which help us to ascend further towards unity. If Christ is helping you to ascend, worship Him. If Lord Hanuman is helping you to ascend, worship Him. It depends who you are and which power you are connected with.\n\n"+
    "We do not know about the Yantra you are talking about but if there is anything spiritual about it, then there shouldn't be any restriction based on gender. Because spiritual means related to soul. Soul doesn't have a gender.\n\n"+
    "Blessings"
  },
  {
  id: 302,
  header: "Doubt",
  question: 
    "Om namah shivaya. jai Hanuman.\n\n"+
    "At one point in the chapter, it is said that the souls in the Mukthisagara are fools and that.....\n\n"+
    "It is also said that this explains why souls come out of the Mukthisagara.\n\n"+
    "I still haven't understood that part. Please make me understand.\n\n"+
    "Thank you. Jai sriram. Pranams to Setu Masters and Mathangs.",
  answer:
    "Divine Soul,\n\n"+
    "You read it incorrectly.\n\n"+
    "It is said that the souls who are stuck in BrahmaLoka think that the souls of Muktisagara are fools.\n\n"+
    "If a wise man goes into group of fools, the fools will manage to make the wise man fool. Similarly the souls of BrahmaLoka who themselves are fools, call souls of MuktiSagara as fools and they even manage to convince them that they should come out of MuktiSagara.\n\n"+
    "Blessings"
  },
  {
    id: 303,
    header: "Doubt after reading chapter-11",
    question:
      "Jai Siya Ram\n"+
      "Jai Hanuman\n\n"+
      "First of all accept my sincere Pranam. I have read chapter-11 sincerely 2-3 times and after reading it, I have a doubt.\n\n"+
      "Once you had told me 4 points to take care of for getting a desire fulfilled. Of the 4 points that you told me, I have a question regarding the 2nd point. The 2nd point is \"Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become realty in this world.\"\n\n"+
      "But in chapter-11 when Dhanushka asked Lord Indra that he wasted his desire of getting reward from Lord Hanuman in Swapan Lok, then, Lord Indra told him to renew the same desire. If his desire meets his Karmas, then, that desired will be fulfilled in this world.\n\n"+
      "So, now, after reading chapter-11, I think that the 2nd point which you told me and the conversation between Lord Indra and Dhanushka in chapter-11 regarding renewing the same desire after it got dumped in Swapan Lok is quite contradicting to each other.\n\n"+
      "According to Lord Indra, if a desire meets required Karmas, then, the same desire can be fulfilled in this world even though it has already been dumped in Swapan Lok. But according to you, if a desire gets fulfilled in Swapan Lok, then, that desire will never become realty in this world.\n\n"+
      "So, here, I have become very much confused. Please clear my doubt and enlighten me with real knowledge. Please forgive me if I made any mistake or I misinterpreted anything. I am just an ignorant bhat of Hanumanji who follows this site very sincerely and regularly. Please guide me.\n\n"+
      "Waiting for your reply.\n\n"+
      "Thank you Setuu\n"+
      "Thank you Mathangs\n"+
      "Regards",
    answer:
      "Divine Soul,\n\n"+
      "Think of a train which is running on the track for sometime and then going offtrack , then brought to track again, then going offtrack and so on.\n\n"+
      "Think of another train which is running continuously on track without going offtrack.\n\n"+
      "Which train shall reach its destination faster?\n\n"+
      "Same is case with desires. If it gets dumped in SwapanLoka and then you renew it again, the universe has to realign itself to fulfill the desire. It takes longer to fulfill the desire then.\n\n"+
      "Blessings"
  },
  {
    id: 304,
    header: "A doubt from Chapter -3",
    question:
      "Hello! In chapter 3 strings of time are talked about. Am not very clear about the 'strings of time'. Can you please help me understand what are these strings?\n"+
      "Thanks :)",
    answer:
      "Divine Soul,\n\n"+
      "Notice everything you see around you. Objects, people, sounds, air, light, space etc. etc...\n\n"+
      "Meditate this way for some time, you will realize the secret of existence.\n\n"+
      "Blessings"
  },
  {
    id: 305,
    header: "Doubt for Eatables Things",
    question:
      "Why people eat nonveg when veg is available...\n\n"+
      "People say even plants have life they also feel pain then why you eat them and you are called vegetarian?",
    answer:
      "Divine Soul,\n\n"+
      "generally there are 4 levels of awareness at which a human being can live...\n\n"+
      "The \"Bali\" can be performed only by an ascetic, no one less than that."
  },
  {
    id: 306,
    header: "doubt regarding chapter 1",
    question:
      "JAI SHRI RAM\n"+
      "JAI SHRI HANUMAN\n\n"+
      "I am feeling blessed by surrendering myself to the holy feet of Lord Hanuman...\n\n"+
      "RAM RAM RAM RAM",
    answer:
      "Divine Soul,\n\n"+
      "You will understand the concept of 'Time' in upcoming chapters...\n\n"+
      "Blessings"
  },
  {
    id: 307,
    header: "Doubt related to chapter 13",
    question:
      "जय बजरंगबली\n"+
      "अध्याय १३ पढ़ने के बाद मुझे कुछ कुछ लग रहा है...\n\n"+
      "||श्री राम||\n"+
      "जय हनुमान keep blessed me.",
    answer:
      "दिव्य आत्मस्वरूप ,\n\n"+
      "उस मंदिर का रहस्य जानने के लिए उसकी परम्पराओं...\n\n"+
      "||राम||"
  },
  {
    id: 308,
    header: "?? Doubts ??",
    question:
      "I have couple of questions...\n\n"+
      "But just a question.",
    answer:
      "Divine Soul,\n\n"+
      "Lord Hanuman can take any form in this universe...\n\n"+
      "Blessings"
  },
  {
    id: 309,
    header: "doubts",
    question:
      "if a soul does not have a form, how are the souls separated from each other?...",
    answer:
      "Divine Soul,\n\n"+
      "Soul itself has no form...\n\n"+
      "Blessings"
  },
  {
    id: 310,
    header: "Doubts in Chapter10",
    question:
      "Hi Setuu Master,\n"+
      "1. You have mentioned...\n\n"+
      "Jai Sri Ram..",
    answer:
      "Divine Soul,\n\n"+
      "Please take print out of the chapter...\n\n"+
      "Blessings"
  },
  {
    id: 311,
    header: "Dr Nishi Gupta",
    question:
      "I am suffering from knee pain. Please pray for me that it heals completely"
  },
  {
    id: 312,
    header: "Dr Vasantha Nair",
    question:
      "I needed something powerful for a close relative...\n\n"+
      "I bow before Lord Hanuman for choosing me for this puja as it cannot happen again in my lifetime."
  },
  {
    id: 313,
    header: "Draupadi's five husband",
    question:
      "Jai shri ram..\n\n"+
      "Dandwat pranam to hanumanji, mathang and setuu saints.\n\n"+
      "The issue of draupadis marriage with five pandu putra is very confusing. I request you to clear this story. Why was this done?? Why did she marry all five of the??",
    answer:
      "Divine Soul,\n\n"+
      "If Lord Hanuman has told about this to Mathangs, it may come up in upcoming chapters and we will publish it as soon as the respective chapters are deciphered.\n\n"+
      "Blessings"
  },
  {
    id: 314,
    header: "Dream",
    question:
      "Hi divine Setuu's..\n"+
      "i have a doubt.A soul doesnt carry memories right?then how come we are able to remember dreams. only Soul goes to swapnaloka, body and mind will remain here in maanavaloka.then how it is possible?\n"+
      "Thank you..",
    answer:
      "Divine Soul,\n\n"+
      "Answer to this question is given in chapter 8. Whatever a soul has in its possession - including body, mind, memory - is determined by Karma-Desire of the soul. So if your soul's Karma, Desire coordinates allow you to have a certain memory, you will have that memory.\n\n"+
      "Blessings"
  },
  {
    id: 315,
    header: "Dream about no one loved People Alive",
    question:
      "Jai Shree Ram,\n\n"+
      "I had an amazing fearful dream, few days back at around 4 am, which i would like to understand, about its meaning or message.\n\n"+
      "I saw that 2 peoples who are very close to me are dead i.e. my wife and a person whom i have considered as a guru, as he is more in devotion of maa kali and Lord Hanuman.\n"+
      "I saw that there is a priest who is praying to Lord hanuman, and Lord hanuman idol is placed in open under a tree.\n\n"+
      "And i saw myself totally lost mentality and Physically as have lost my wife and i am crying and shouting to the Lord, as we have been married to now around 1 year.\n\n"+
      "I woke up in fear and was crying, and i called my wife and that person, as i was in a different place then there's.\n\n"+
      "Can you please do let me know what is the meaning of this dream?\n"+
      "Is Lord hanuman is showing me some way? or is there is some problem on my known peoples?\n\n"+
      "Please provide the guidance.\n\n"+
      "jai shree ram.",
    answer:
      "Divine Soul,\n\n"+
      "This only means that Lord Hanuman has averted danger from life of your wife and that person. Now they are completely safe.\n\n"+
      "There are many myths about dreams. Do not believe in those myths. To know the mystery of dreams, wait for 11th chapter.\n\n"+
      "Blessings"
  },
  {
    id: 316,
    header: "Dream of hanuman Ji and a Muslim Saint",
    question:
      "In That experience, you have mentioned that Lord Hanuman Wants me to do devotion of Goddess Kali in my path of spritualuty, Hence i have started doing small prayer.\n\n"+
      "I had a dream few months back, where lord hanuman was with a muslim saint(peer baba), and hanuman ji introduced me by saying that \"He is a saint from a known place\" .they opened (reading) a book . and they walk together.\n\n"+
      "Can you please suggest whether Lord hanuman wants me to do prayer of that Saint or Peer Baba.\n"+
      "Or is there any other significance of this dream.",
    answer:
      "Divine Soul,\n\n"+
      "Your soul already have a special bond with Lord Hanuman. It is therefore not right to ask for meanings of your soul's experience from others. Your soul's bond to the Lord is powerful enough. Decipher the meanings of your soul's experiences yourself.\n\n"+
      "Blessings"
  },
  {
    id: 317,
    header: "Dream meaning",
    question:
      "Jai shree ram\n\n"+
      "I had an experience with lord hanuman few month back and would like to request mathangs to help me in that.\n"+
      "I had a dream one day (tuesday/saturday) where lord hanuman is sitting in front of me and I am touching his feet, and he is saying something about some mantra's which I should chant, he smiled and the dream was over.\n\n"+
      "Can you please ask mathangs which mantra he was referring to me?\n"+
      "And what is the process to chant it?\n\n"+
      "Name- Bhavesh Bhatnagar",
    answer:
      "Divine Soul,\n\n"+
      "It seems you were a part of Charan Pooja. If that is so, you might have a unique Mantra which is there only for yourself...\n\n"+
      "Blessings."
  },
  {
    id: 318,
    header: "Dream while sleeping",
    question:
      "Jai Shree Ram\n"+
      "Jai Hanuman\n\n"+
      "Although I have interacted with you on this very topic yet I think I need to interact with you once more on the topic \"Dream while sleeping\". Some questions have come into my mind regarding the topic.\n\n"+
      "After reading chapter-4, we got to know that our dreams may be related to our previous births. Urmi used to see the dream that her son was dead and she was weeping. Similarly, her son used to see an unknown woman weeping in his dream and he was not able to do anything. This used to happen to them since they had a relation in their previous birth.\n\n"+
      "Do the dreams we see while sleeping also have anything related to our previous or present birth? Leave others. Let me talk about myself only.\n\n"+
      "I always see dreams while sleeping. Some of them I remember fully while others partially and some of them I am not able to remember after waking up.\n\n"+
      "Many a times, I see people and places I know in my dreams. But sometimes I see unknown faces and places in my dreams while sleeping.\n\n"+
      "I often see scary dreams. I see some ghosts or evil spirits in my dreams.\n\n"+
      "I have heard we see those things in our dream about which we always keep on thinking? Is it so?\n\n"+
      "One more thing that I would like to ask you do every dreams which we see has any relation with us?\n\n"+
      "Please answer these.\n\n"+
      "Thank you Mathangs. Thank you Setuu.\n\n"+
      "Regards.",
    answer:
      "Divine Soul,\n\n"+
      "First and foremost : Never assume that you are a human being. YOU ARE A SOUL which has a human body right now.\n\n"+
      "You are not living a life. You are living moments one after another which are giving an impression of continuum.\n\n"+
      "Similarly suppose you feared about something in real life at moment A and then saw a ghost in dreams at moment B. A and B are separate moments of the same SOUL, but their is a relationship between them.\n\n"+
      "Think."
  },
  {
    id: 319,
    header: "Dream while sleeping-2",
    question:
      "Jai Shree Ram\n"+
      "Jai Bajrangbali\n\n"+
      "Thank you for your reply. I went through it and thought over it.\n\n"+
      "If this incident happens in dream, what is the relationship between the two separate moments of the same soul?\n\n"+
      "Why are we not able to correlate the incidents of dreamworld?\n\n"+
      "Please answer these.\n\n"+
      "Thanks and regards.",
    answer:
      "Divine Soul,\n\n"+
      "Swapanlok is a different world. The rules and laws of Swapanlok are different from Maanavlok.\n\n"+
      "Relationship between two events is perceived by your mind. And your mind of Maanavlok is used to rules and laws of Maanavlok. Hence it cannot clearly connect the events of Maanavlok with events of Swapanlok.\n\n"+
      "Blessings"
  },
  {
    id: 320,
    header: "Dreams",
    question:
      "As Lord indra said about desire and deserving of happiness n sorrow are based on your karmas...\n\n"+
      "once my friend saw my marriage in her dream.. what does it mean...",
    answer:
      "Divine Soul,\n\n"+
      "It only means that your friend has deep desire to see you getting married. She could not wait anymore so Indra fulfilled her desire in SwapanLoka.\n\n"+
      "Blessings"
  },
  {
    id: 321,
    header: "Dreams",
    question:
      "My Husband sees lots of snakes in his dreams and gets scared...\n\n"+
      "Can anything be done to curb it completely?",
    answer:
      "Divine Soul,\n\n"+
      "Your husband is on the path of Bhakti. In order to move his soul towards Moksha, all his pending desires from previous births have to be purged.\n\n"+
      "Tell him to not think about the dreams after waking up.\n\n"+
      "Blessings"
  },
  {
    id: 322,
    header: "Dreams",
    question:
      "Yesterday nyt dream mai shree Ramji k sath sindoori rang mein hanuman ji k darshan huye.\n\n"+
      "है प्रभु, मेरी आवश्यकताओं को पूर्ण करें\n\n"+
      "।।राम।।"
  },
  {
    id: 323,
    header: "Dreams of early morning",
    question:
      "Jai Siya Ram\n"+
      "Jai Hanuman\n\n"+
      "I had a dream that I am doing Puja of Lord Hanuman in some temple...\n\n"+
      "Next day I saw that I am fighting with a devil and Lord Hanuman comes to help me.\n\n"+
      "What does these two dreams mean?",
    answer:
      "Divine Soul,\n\n"+
      "You don't have to get meaning of what your soul experiences in SwapanLoka.\n\n"+
      "They are simply a process through which your unwanted desires get purged.\n\n"+
      "Blessings"
  },
  {
    id: 324,
    header: "Dreams of early morning-2",
    question:
      "Thank you Setuu for your reply.\n\n"+
      "Did Lord Hanuman really come to my dream today? If yes, what does it signify?",
    answer:
      "Divine Soul,\n\n"+
      "It only means that you have deep desire to meet or see Lord Hanuman but that desire doesn't have matching Karma right now.\n\n"+
      "Those messages help a soul in following the right path.\n\n"+
      "Blessings"
  },
  {
    id: 325,
    header: "Dreams that haunt me",
    question:
      "I shifted my house from my birth place to another...\n\n"+
      "These things torture me. I don't know how to balance material world and spirituality.",
    answer:
      "Divine Soul,\n\n"+
      "Problem is not what you experience in SwapanLoka. The problem is what you bring from there.\n\n"+
      "Do not bring those memories in this world.\n\n"+
      "Blessings"
  },
  {
    id: 326,
    header: "Dreams While Sleeping",
    question:
      "Sometimes I dream like I have seen and talking to someone whom I never met...\n\n"+
      "how many loks are there apart of maanav and swapnalok?",
    answer:
      "Divine Soul,\n\n"+
      "Yes it is same as described in chapter 4.\n\n"+
      "There are infinite number of worlds.\n\n"+
      "Blessings"
  },
  {
    id: 327,
    header: "Dukh",
    question:
      "Agar koi mujhe dukh mile ya mai kisi ko dukh mile aisi icha prakat karu toh kya hota hai is bare Mai mujhe samjhae",
    answer:
      "इंद्र देव वह इच्छा भी पूरी करने का प्रयास करते हैं | लेकिन जैसे सुख के साथ दुःख आता है , वैसे ही दूसरों की दुःख की इच्छा करने के साथ आप स्वतः अपने दुःख की इच्छा भी प्रकट करते हैं |\n\n"+
      "||राम||"
  },
  {
    id: 328,
    header: "Dukho se chhutakara kaise paye",
    question:
      "My name is Kumar Gaurao Singh...\n\n"+
      "agar insan har jagah prayas se thak jaye aur uske maksad me kamyabi nahi mile to kya karna chahiye",
    answer:
      "सफलता का एक मंत्र यह है :\n\n"+
      "आप जो भी पाने की कोशिश कर रहे हैं उसके अलावा जीवन में कोई बड़ा उद्देश्य रखिये |\n\n"+
      "|| राम ||"
  },
  {
  id: 329,
  header: "Duties",
  question:
    "I have always thought that one should do what one can and then wait for God's help. Accordingly I have tried my best and worked hard for my family. Still, I feel I haven't done enough and I could have done more. If I had not fallen sick I would have been able to do a lot more. However, falling sick opened my eyes to another reality. I really felt the closeness of Ishwara. But then, I feel I have failed in my duty, especially towards my younger son. What are my duties towards my son? What should I not do? These questions have troubled me at times. All I can say is I did my best in a particular restricting situation. Now I am out of it.But I feel uneasy for my sons. What should I do? Kindly guide me. Pranams. Sriram jayaram jaya jaya Ram. Om namah shivaya. Sri Anjaneyaya namah!",
  answer:
    "Divine Soul,\n\n"+
    "King Dasaratha was compelled by the circumstances to send his son for 14 years exile. From the point of view of a father, it was a disaster but this exile proved to be a boon for the world as Rama finished the evil from the world. Everything happens for a divine reason.\n\n"+
    "Blessings"
},
{
  id: 330,
  header: "Duvine pure soul in muktsaagar",
  question:
    "Jai siya raam\n\n"+
    "Thanks for giving great knowledge of lord hanumaan,s leela.I have a question for matang rishi that After merging of mokas soul into bekund dham ' s mukatsaagar...why prabhu Bhrama ji takes a pure soul from the sagar into the environment of bekund dham.is this process will be continuing forever for completing a kulp (all 4- yug) again n again ?.\n\n"+
    "And what about the living life procedure of swarg devta?Are they Amar forever?\n\n"+
    "Jai Hanumaan",
  answer:
    "Divine Soul,\n\n"+
    "It depends from where you see the universe. If you see from top, there is no separate God and no separate universe. Everything is one. But when you descend a bit, you will see creation, destruction etc. You will see Lord Brahma, Vishnu and Shiva. If you descend further, you will see Indra and Kaal. If you descend further, you will see a complicated universe. Wait for upcoming chapters, everything will become crystal clear to you.\n\n"+
    "Blessings"
},
{
  id: 331,
  header: "eagerly waiting for 11th and more adhyaay",
  question:
    "After reading 10 adhyay I am feeling somewhat relaxed.but a little more eager to know more about next adhayas and mathang people.I have written to setuu preveously that somebody please help me out with my querries about gyan and moksha as I am feeling very restless till I get satisfactory answers .This is my humble request to setuu please tell me if anybody can help me ,setuu masters or somebody from your comunity?\n\n"+
    "I would like to thank setuu and mathangas for such a valuable knowledgeful blog.And shatashaha dhanyawad to lord Hanumanji .koti koti pranam..",
  answer:
    "Divine Soul,\n\n"+
    "You can start writing your queries one by one here. They shall be answered by Setuu Masters or Mathangs or Lord Hanuman Himself.\n\n"+
    "If you are free from family responsibilities, you can apply for Sadhana at Setuu Hanuman Bodhi. You are required to commit at least 1 year for Sadhana.\n\n"+
    "Blessings"
},
{
  id: 332,
  header: "Effect of Adverse Grahas Doshas",
  question:
    "My Humble Bowings. jAI Jai shri Ram !!!!!!!. Shri Ram Jai Ram Jai Jai Ram!!!!!!\n\n"+
    "by Lord's grace and your support my experiences on my FB wall has been shared in the shakshaat Hanuman Pooja.\n\n"+
    "My question is that by this is it that my feelings, difficulties and Problems are now Known to Lord Hanuman and he will do the needful.\n\n"+
    "One more question which i would like you to ask Lord Hanuman via Mathangs is d solution to d Negative and adverse Planetary configurations (Graha Doshas) as indicated by our astrologers analyzing our horoscopes and our experiences and situations in life confirming that even after struggling and working hard.\n\n"+
    "Are these Planets (Grahas) Lord's servants and act as per Lord's will? and if Lord asks them to leave a particular devotee they will forgive him\n\n"+
    "Will Lord Hanuman find some way out for us and his devotees out of this, by forgiving our mistakes (sins of past births) and save us from Graha Doshas/ black magic by opponents , Vastu Doshas( defects in Lands /property house that we built) and bless us with some material success.\n\n"+
    "Please guide us. I bow at the feet of Lord Hanuman. Jai Jai Shri Ram!!!!!!! Sri Ram Jai Ram Jai Ram!!!!!",
  answer:
    "Divine Soul,\n\n"+
    "Yes, Your feelings are known to Lord Hanuman.\n\n"+
    "There are many limitations of astrology. One of the limitation is that it does not take concept of Karma in account. Because of this your astrologer is not able to see the real problem.\n\n"+
    "The reason of your problems is not Griha Dasha. Your soul is very dear to Lord Hanuman. Therefore Griha Dasha cannot affect you. The real problem is something different.\n\n"+
    "Your soul has become very close to Lord Hanuman.You have been a part of Charan Pooja as well. Apart from that also, your actions have made you very dear to Him. When that happens, Lord Hanuman starts moving the soul towards Moksha. To attain Moksha, the soul must settle accounts of its past karma. The only way to settle past accounts is to do Tapasya. For a householder, the Tapasya comes in the form of problems.\n\n"+
    "If you are finding it difficult to do this Tapasya and instead of Moksha you wish to get materialistic happiness from Lord Hanuman, then you need to reduce your devotion towards Him.\n\n"+
    "You have to choose whether you wish Moskha in this birth or you wish materialistic happiness.\n\n"+
    "Blessings"
},
{
  id: 333,
  header: "Effect of multiple mothers",
  question: 
    "From my childhood, I have seen mothers give priority to their children, then the children of their sisters and brothers. This sort of a situation is strange, but it is happening with my son, who has the love of his birth mother, and a friend of my wife, who treats him as her son, and he is fully accepted in their family.\n\n"+
    "The feelings expressed and the explanation given by the Lord Hanuman, and the images created in the memories, take away one's breath.\n\n"+
    "I pray to te LORD for guidance and grace to live safely in HIS blessings."
},
{
  id: 334,
  header: "Emotional kasto se mukti",
  question: 
    "Hey priya hanuman ji ,\n\n"+
    "Aap ki kripa ki ati awashyakta hai mujhe. Hey anjaneya maine jiwan me bahut se emotional dhokhe khaye hai jinhone mujhe tod diya tha jis ke bare me aaj bhi sochta hun to bada pareshan ho jata hun . Hey prabhu main kisi ko bahut chahta tha par wah mujh se chin gayi kyunki hamare guruji aur mandir ke swami krishna prem ne use ashram me bula kar wahi hamesha raha liya aur wah jante bhi the ki i loved her then too they snatched my love . Kya pyar karna gunah hai . Aur fir maine ashram jana band kar diya kuch samay haan par bhagwan ki bhakti swayam karna kabhi nahi chodi . Hey prabhu maine un swami ji ke bare me galat baate bhi suni hain relating to sharirik sambandh banana kai yo ke sath. Un swamiji ne mujhe padaya bhi hai during my school days by taking tutions . So i call swami ji as sir . Aur unki bahut izzat bhi gayi hai is prakar ki baato ke karan par hamare guruji un swamji ko support karte hai fir bhi . Kai bhakt kat gaye ashram se fir bhi they support each other. Par hey prabhu kya pyar karna gunah hai jo mujhse mera pyar chin gaya . Hey pyare prabhu jab pichle anubhav me maine yaha aapko ko likha tha to meri financial problems ke bare me bhi likha tha jo aap se prarthana karne ke baad hi mujhe ek chamatkar anubhav hua ki mujhe singapore se job offer aaya jo ek khusi ki baat thi par prabhu woh abhi puri nahi hui hai kyunki us job ke liye medical aur visa hona baki hai . Hey prabhu mai financial problem me to kai saalo se hun kyunki abhi job chalu nahi hui hai aur fir yeh aaj jo aap ko batayi emotional problem ne life ko tod ke rakh diya . Kripa kar meri emotional life bhi heal kare pyare hanuman ji . Is june me mai 29 varsha ka ho jaunga par na to kuch income hai kyunki singapore ki job chalu hone me samay hai aur na hi shadi hui hai. Hey prabhu me bekar baitha hun ghar main. Kripaya kripa kare meri life par. Prabhu meri kai jagah izzat bhi nahi hai i think unemployed hone ke karan . Kripaya meri laaj bhi rakh de mera maan sammaan banakar . Kyunki kewal aap hi kripa kar sakte hain mujh par .\n\n"+
    "Ab mai jisse prem karta tha woh to chin chuki hai par aap ab meri emotional life ko heal kare meri life me koi acha life partner la kar agar yeh mere liye acha ho to aur mai prabhu ram ji aur aapki ki bhakti mein leen hona chahta hun hey prabhu aur woh bhi bade anand se kyunki sache kewal aap hi hai is sansar me par prabhu mohi hun isliye aap se maang liya life partner bhi. Par asli prem to aap se hi hai.\n\n"+
    "Aap ka chota sa nadaan bhakt\n\n"+
    "Vikram jham.",
  answer: "दिव्य आत्मस्वरूप ,\n\n"+
    "सबसे पहले स्वयं से प्यार करना सीखो | स्वयं को जानो कि आप आत्मा हो और आपके कुछ कर्म और इच्छाएं हैं | देह और मन के स्तर पर जीवन जीओगे तो भावनात्मक कष्ट आते ही रहेंगे | आत्मा के स्तर पर जीवन जीओ और उसके बाद आपके जीवन में वही लोग आयेंगे जो उचित होंगे | ऐसे जीवन साथी का क्या लाभ जो दूसरों के कथन के अनुसार निर्णय लेती हो | अगर आप ज्ञानवान हैं और अपने निर्णय स्वयं लेने में समर्थ हैं तो आपके जीवन में साथी भी ऐसा आएगा जो ज्ञानवान होगा और किसी अन्य के बहकावे में नहीं आएगा |\n\n"+
    "|| राम ||"
},
{
  id: 335,
  header: "Emotional kasto se mukti",
  question: 
    "Continued from #519487- hey priya hanumanji pranam , aap ko shat shat naman . Setuu ke santo ko mera naman . Kripaya kar ke detail me mujhe aapke gyan se enlighten kariye jo aapne kaha tha ki deh aur mann ke star par na jiyu aatma ke star par jiyu woh kaise thoda sa detail me ek example de kripaya . Meri drishti me aatma star par rehna matlab jab mai puja path ya dhyan sadna karne ke baad khud ko kuch samay prabhu se khub kareeb aur zuda hua mehsoos karta hun kuch samay ke liye to kashto ko yaad nahi karta hun i just stay connected to almighty fir some time but jaise hi dincharya me aa jate hain to fir se moh prem ke vicharo se emotionally harm ho jata hun. Aur aaj prabhu naya aadhyay prakasit hua 'wastaviktaon ka anveshan hanuman ji dwara' me bhi swapn lok ke bare me bataya gaya hai jo ki ek wastwikta hai jisme dirdha swapn lok me khud ko sharmila samjh rahi thi jo sulochna ki deh me thi. Aur aaj hi maine swapn dekha ki jis se me pyar karta hun us se aalingan kar raha hun gale lag raha hun aur wah bhi lag rahi hai aage bad kar aur swapn aage badta hai jaha ko aa jata hai and we have to leave from there. kuch swapn pura yaad nahi hai but overall aadha swapna acha laga aur aadha bura. But prabhu deh aur mann ke star par na jiye yah to thik hai par kisiko bhulana bhi to aasaan nahi hai kyunki jinko ignore kara hai wah antar me to hai aur swapn me bhi aa gai.\n\n"+
    "Hey priya hanumanji aapse meri aatma ke kai janmo ke sambandh ke khatir aap se viniti hai arji hai ki prabhu kya aap uska vivah karwayenge mujhse uske mann me prem bharkar sirf mere liye aur kisi ke liye nahi aur na hi kisi ka behhkawa ho use. Kyunki really i want to marry her nathji. Aur jiwan me sab kuch mil bhi gaya to fir bhi yahi aasha chubhegi hamesha.\n\n"+
    "Pranam priya prabhu."
},
{
  id: 336,
  header: "Endless dreams for the entire night after reading through all 12 chapters",
  question: 
    "Namasthe Settu Masters/ Baba Mathang.\n\n"+
    "I have read through all the 12 chapters yesterday with clarity and devotion. However when i slept of, i felt entire night was furious like so many threads running one after another. I couldn't recall what are those dreams even a bit but entire night i was in half awaken state and couldn't sleep at all.\n\n"+
    "Kindly guide me through my experience , why exactly i felt it so much what was running in background which disturbed me so much for the whole night.\n\n"+
    "Thanks & Regards\n\n"+
    "Sandeep",
  answer: "Divine Soul,\n\n"+
    "This is called conflict of desires. After reading a chapter, your soul feels closest to God and wants to give up all worldly desires. But your mind pulls the soul towards the world and reminds it of pending worldly desires. This conflict results in half-awake state.\n\n"+
    "Blessings"
},
{
  id: 337,
  header: "The Enigmatic EkaDasha Rudra",
  question: 
    "Respected Sir / Madam,\n\n"+
    "I have always been a Rudra bhakta, to the extent that i do not accept any other god into my thought system with only one exception -- Lord Hanuman. It is is because, he is a Rudra-Ansha.\n\n"+
    "It has been a month and half since me, my daughter Tanvi and my wife Ashwini have been visiting Lord Hanuman mandir. I am getting drawn towards Hanuman Ji suddenly but i fear him very much as he is a celibate God and we need to follow a lot of \"niyam\" to take-up Mahavir's sadhana.\n\n"+
    "A couple of weeks back i also bought a small handbook of The \"Hanuman Chalisa\" and read it fully once. I feel very nice and positive when i look and think abt Hanuman Ji.\n\n"+
    "Now, i read the Setuu-Asia article and i feel blessed to read both the chapters.\n\n"+
    "First of all my deepest regards to you and your team's collective initiative to reach out to the mysterious and pure \"Mathangs\".\n\n"+
    "Please convey my regards to the preserved community and deepest regards to Lord Hanuman Ji.\n\n"+
    "I want to become an Intellectual and go deep into Philosophy and Learn Sanskrit and study Vedas. For that i would need Lord Hanuman Ji's blessings and guidance.\n\n"+
    "Best Regards,\n\n"+
    "Anirudh Sundar"
},
{
  id: 338,
  header: "Eradication of my current problems",
  question: 
    "I am very perplexed at the current stage of my life .\n\n"+
    "Nothing is working out in my material life..\n\n"+
    "I pray to Lord Hanuman to remove the obstacles in my life",
  answer: "--- conveyed to Lord ---"
},
{
  id: 339,
  header: "Eternal Knowledge.",
  question: 
    "I surrender at the Lotus feet of Lord Hanuman ji.\n\n"+
    "Today Hanuman ji explained me about Desires,\n\n"+
    "Karma and its effects and Various options\n\n"+
    "available to Lord Indra.The Value of our Connections\n\n"+
    "with Bhagavn Vishnu and Lord Siva is of great value to me.\n\n"+
    "I offer my soulful gratitude to Hanuman ji for the Blessings."
},
{
  id: 340,
  header: "Every Thing in my life is an illusion?",
  question: 
    "I would like to know if the life i'm leaving now, is this an illusion. Is there any chance of me seeing lord hanuman. if so ... How?and i want to gain knowledge on this.",
  answer: "Divine Soul,\n\n"+
    "Do not draw any conclusions. Just ponder over what Lord Hanuman says. Imagine a child who is crying. Child's parent says to her, \"Do not cry otherwise ghost will come and beat you.\" That does not mean that ghost will actually come. Parent is saying so to stop the child from crying. Similarly, when you consider Lord Hanuman as your Guru, you need to have full faith in Him. He knows what is best for you. Whatever He says, He is saying so to give you the highest knowledge- the Brahma Gnan. If you have made Lord Hanuman your Guru and follow these chapters as we post them here, you will see Lord Hanuman one day. Many devotees have written to us that they saw Hanuman after reading first chapter. It depends on how many barriers are there to be broken. How much impurity is there to be erased. According to that you will see Lord Hanuman one day.\n\n"+
    "Blessings"
},
{
  id: 341,
  header: "Is everything pre-destined or not",
  question: 
    "Pranam Mathangs and Setuu masters\n\n"+
    "Is everything predestined or not?\n\n"+
    "Do astrology and planets effect the lives of people?\n\n"+
    "Bcoz the life we are experiencing right now is due to past karmas\n\n"+
    "Bcoz if we take great people like Aadi Shankaracharya or Gautama or Ramakrishna paramahamsa\n\n"+
    "When they were born planets are in extraordinary position\n\n"+
    "That means planets effect humans lives\n\n"+
    "They are born to show the right path to the humanity not to lead ordinary human lives\n\n"+
    "Bcoz to my understanding what I understood was\n\n"+
    "If jaya vijaya (Gate keepers of vaikunta) were not cursed\n\n"+
    "Ramayana and mahabharata wouldn't have happened?\n\n"+
    "Bcoz due to the curse of them they were born as\n\n"+
    "Rakshasas and lord vishnu has to take birth and to kill them\n\n"+
    "This is how their destiny was planned\n\n"+
    "To take birth as enemies of vishnu in 3 lives and to be defeated in the hands of vishnu\n\n"+
    "after that they will be back again in vaikunta\n\n"+
    "Here there 3 lives was pre-planned\n\n"+
    "In ramayana there are many people Said to ravana and vibishna also said that\n\n"+
    "To return seeta back to Rama\n\n"+
    "He didn't listen\n\n"+
    "He didn't listen because due to his samskara?\n\n"+
    "Or his destiny was planned to defeat under lord vishnu(Lord Rama)?\n\n"+
    "And again in bhagavatam also\n\n"+
    "When narada visited sage vyasa ashram, vyasa was unhappy\n\n"+
    "Narada asked vyasa why he was so sad after writing the mahabharatam also\n\n"+
    "then vyasa said\n\n"+
    "\" I wrote 4 Vedas and 18 Purana's and mahabharata and iam still not satisfied\n\n"+
    "My heart is bursting with grief\n\n"+
    "O sage tell me a way to get peace?\n\n"+
    "Then sage narada replied\n\n"+
    "Though you have written all\n\n"+
    "But you didn't write about Lord vishnu\n\n"+
    "Who he is?\n\n"+
    "Where did he come from?\n\n"+
    "You should write all these\n\n"+
    "Then you will be happy\n\n"+
    "Mediatate on lord vishnu and you will know the whole story of bhagavatam\n\n"+
    "Then you teach the whole bhagavata Purana to your son and he will teach to the king parikshit who is in fear of death (Here narada is saying that king parikshit will listen bhagavat Purana who is in FEAR OF DEATH)\n\n"+
    "The incident happened when Parikshit went hunting. The King, after pursuing a specific prey in the forest for a long time, had become tired and hungry. This was when he came across the hermitage of rishi Shamika. Unaware that the rishi was under a vow of silence, the King enquired about the prey but the rishi answered not. Enraged by the rishi’s silence, Parikshit placed a dead snake on the rishi’s shoulder with the end of his bow. The rishi still did not protest. Observing this, Parikshit became repentant and walked away.\n\n"+
    "The rishi’s son Shringi, who himself was highly accomplished in penances, came to know of the insult meted out to his father through Krsha, son of another rishi. An enraged Shringi cursed that the King will meet his death by the live snake Takshaka in seven days\n\n"+
    "Though parikshit was a noble king but at that time he lost his cool and placed a dead snake on Rishis shoulders\n\n"+
    "Is it happened? Bcoz as narada said it is destined to happen?\n\n"+
    "Or is it happened Due to parikshits anger?\n\n"+
    "Bcoz narada clearly says to vyasa that\n\n"+
    "You teach this bhagavat Purana to your son and from him the first person who will hear this Purana is king parikshit WHO IS IN FEAR OF DEATH\n\n"+
    "And It is said that Lord Brahma will write our destinies and he will fix our life span for some X years?\n\n"+
    "When we go to some Astrologer by looking at horoscope he says that\n\n"+
    "You will become this you Will become that\n\n"+
    "You have this mahardasha running that running etc etc\n\n"+
    "Some will happen some will not happen\n\n"+
    "And lord Krishna in bhagavatgeeta said that\n\n"+
    "In chapter 3 sloka 27\n\n"+
    "प्रकृते: क्रियमाणानि गुणै: कर्माणि सर्वश: |\n\n"+
    "अहङ्कारविमूढात्मा कर्ताहमिति मन्यते || 27||\n\n"+
    "All activities are carried out by the three modes of material nature. But in ignorance, the soul, deluded by false identification with the body, thinks itself to be the doer.\n\n"+
    "In this sloka lord Krishna evidently makes clear that\n\n"+
    "This world is running by three modes of material nature The fool only thinks that he is the doer of all activities but a learned ones are aware he is not the doer this is all just illusion\n\n"+
    "And in 2chapter 47 sloka it is said that\n\n"+
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\n\n"+
    "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि || 47 ||\n\n"+
    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction\n\n"+
    "Here Krishna says that you have the right to do the duty but giving results is in my hands\n\n"+
    "He clearly says that Never consider yourself to be the cause of the results of your activities\n\n"+
    "It's Iam who giving the results\n\n"+
    "And in bhagavatgeeta in slokas chapter 9 sloka 18 and chapter 10 sloka 8 it is said that\n\n"+
    "He is saying Iam the whole\n\n"+
    "Creator and destroyer\n\n"+
    "Everything happening in this entire universe is happening with my will\n\n"+
    "गतिर्भर्ता प्रभु: साक्षी निवास: शरणं सुहृत् |\n\n"+
    "प्रभव: प्रलय: स्थानं निधानं बीजमव्ययम् || 18||\n\n"+
    "BG 9.18: I am the supreme goal of all living beings, and I am also their sustainer, master, witness, abode, shelter, and friend. I am the origin, end, and resting place of creation; I am the storehouse and eternal seed.\n\n"+
    "अहं सर्वस्य प्रभवो मत्त: सर्वं प्रवर्तते |\n\n"+
    "इति मत्वा भजन्ते मां बुधा भावसमन्विता: || 8||\n\n"+
    "BG10.8 I am the origin of all creation. Everything proceeds from me. The wise who know this perfectly worship me with great faith and devotion.\n\n"+
    "He says in gita that\n\n"+
    "I know the past\n\n"+
    "I know the present\n\n"+
    "I know the future\n\n"+
    "But no one knows me\n\n"+
    "Bcoz if everything is not pre-destined\n\n"+
    "How would God know the future?\n\n"+
    "But some say everything is in our hands\n\n"+
    "We are the creator of our own destinies?\n\n"+
    "What is true ?\n\n"+
    "Does really planets and horoscopes effect our lives?\n\n"+
    "And do our lives are pre-destined?\n\n"+
    "Or we have the destiny in our hands?\n\n"+
    "Sorry for the long question\n\n"+
    "But please reply",
  answer: "Divine Soul,\n\n"+
    "Many devotees have asked similar questions and it has been answered multiple times. Please go through the answers other devotees got.\n\n"+
    "To summarize:\n\n"+
    "This universe can be seen/experienced/observed from many levels and from infinite perspectives. While pursuing an answer, you must keep the observer in mind because when observer or point of observation changes, everything else changes.\n\n"+
    "If you see this universe from the perspective of Gods, yes, everything is pre-destined.\n\n"+
    "But when you come down to the level of humans and do an action, at that point you have the freewill and you have the power to shape your own destiny.\n\n"+
    "When you are level with the Rishis, they are in middle of ordinary humans and Gods. They can see their own future from perspective of Gods, and can plan their actions at level of humans. When they do something, they get both the feelings. They feel that they are doing action at their own will and at the same time they feel that what they are doing is pre-destined. It happens at the same time. So their knowledge about future does not affect their freewill or vice versa.\n\n"+
    "||Ram||"
},
{
  id: 342,
  header: "examples ( a list) of Higher Purpose or Dharma",
  question: 
    "Jai shri Ram Can you please send me some examples ( a list) of Higher Purpose or Dharma ? Apart from \"Getting Supreme Knowledge and Getting Moksha.\" I am just trying to find the purpose for which I have taken birth in these set of Karma desire, and what Worldly duties I have to fulfil while being connected to supreme lord. I know there can't be higher purpose than getting moksha. Please help, I am experiencing some divine things, And I know that now most importantly I have to set my DHARMA. Help me in setting up my dharma and knowing the purpose for which I am experiencing Manavlok as \"Shashank\" Jai shri Ram",
  answer: "Divine Soul,\n\n"+
    "Higher purpose is necessary for happiness in life. There are four categories of human endeavors or purposes in life- (1) Artha (2) Kama (3) Dharma (4) Moksha\n\n"+
    "Artha means earning livelihood. Every human being does that.\n\n"+
    "Kama means building relationships, friendships etc. Poor people can't afford Kama. They spend their life worrying and earning for food and basic necessities (Artha). Once your basic necessities are taken care of, you start building relationships. It gives you joy inviting someone at home and going at someone's place as guest. It gives you pleasure building relationships of various kinds.\n\n"+
    "Dharma means social services. Not everyone can afford that. Most people remain busy with Artha and Kama. Those who are lucky enough to be rich in terms of money as well as relationships, they enjoy being part of society and getting fame and recognition.\n\n"+
    "Moksha is the highest of human endeavors. Those who are satisfied in terms of Artha, fulfilled in terms of Kama, and content with their Dharma go on the path of Moksha. It is another matter that some people never get satisfied with Artha and keep earning money. Some people are so insecure that they remain entangled in relationships and cannot think of life without friends/family etc. Some people remain stuck in Dharma and never go a step beyond on the path of Moksha.\n\n"+
    "Blessings"
},
{
  id: 343,
  header: "Exams",
  question: 
    "Jai bajrang bali please bless me as my exams are nearing so that I may be able to clear it as i have worked very hard but I also need your blessings."
},
{
  id: 344,
  header: "exceptional learning",
  question: 
    "Pranam lord hanuman\n\n"+
    "I bow my head in front of you And also say pranam to the Mathang community and masters of setuu.\n\n"+
    "I am always in search of some mythological knowledge around me and try to possess and distribute it as much as I can so that more people could be brought closer to the divine powers of God.\n\n"+
    "I am blessed and sincerely want to say thank you lord hanuman and Setuu for empowering me with such supreme knowledge.\n\n"+
    "I have understood life more clearly and soul and the body more swiftly.\n\n"+
    "Working of the kalpa has held my eyes lit up and I can feel lord hanuman around me at different times.\n\n"+
    "I promise to lord hanuman that whenever I will get an opportunity of talking to people regarding this ,will definitely make them understand of this world and how they can attain moksha through you , my lord hanuman.\n\n"+
    "your devotee\n\n"+
    "PUNEET BHARGAVA"
},
{
  id: 345,
  header: "The experiace",
  question: 
    "mene kitabo me hi pada tha par ye jaan kar khushi hui.\n\n"+
    "kaash ham bhi unki blessing le pate"
},
{
  id: 346,
  header: "experience",
  question: 
    "plz convey my message to lord hanuman. plz ask him to give his darshan to me in my visio once. olease. this is a small request from my side. thank you"
},
{
  id: 347,
  header: "Experience",
  question: 
    "Jai Shree Ram, Jai bajrang bali.\n\n"+
    "I have always believed in your supreme power. I have always felt it around me, inside me. Right now I might not be suitable to attain a glimpse of your divine form but I soulfuly desire to attain that suitability one day and I believe I will manage to. I seek nothing but your blessings, and your protection.And I know you are always there for me whenever I need you."
},
{
  id: 348,
  header: "experience of 6th chapter",
  question: 
    "I SIMPLY WORDLESS TO DESCRIBE MY STATE OF MIND ..IT IS LIKE A STILL OCEAN WITHOUT WAVES....I AM NOT ONLY ENJOYING THE EXPERIENCE BUT ALSO PERCEIVING THE BLESSING OF LORD HANUMAN...\n\n"+
    "ONE THING I WOULD LIKE TO KNOW FROM SRI LORD HANUMANJI IS :INSTUCT A PRACTICAL PATH IN DAY TO DAY CHORES WHERE WE ARE DEVOID DESIRES BUT STILL FULFILLING DHARMA AND DOING KARMA FORMED DUE TO YESTER ACTIONS IN A RIGHT AND DHARMIC WAY....\n\n"+
    "JAI SHRI RAM,JAI HANUMAN,......LONG LIVE MATHANG..."
},
{
  id: 349,
  header: "Experience After Reading \"The Immortal Lord Hanuman Arives\"",
  question: 
    "Really Feeling Very Happy and Blessed to Know this Fact and Interested to Know More About Mathang Community and Their Life Style. I Have Searched a lot about them from internet but very less data are available about them.\n\n"+
    "Requesting to Share More Data About Their Life Style, Believes, Daily Life Would Give us More Knowledge.\n\n"+
    "Also it would be great pleasure if you share the pictures of their temple and spiritual places.\n\n"+
    "Jee Shree Ram.\n\n"+
    "Thanks and Regards,\n\n"+
    "Biswabhusan Prusty",
  answer: "Divine Soul,\n\n"+
    "Currently we are busy in understanding more about them and our first priority is to understand their logbook and translate it for the benefit of devotees across the world. While we communicate with them, we have to leave every modern thing and be like them. We need to tune our minds to the level of their spiritual height. Translating the Log Book is a mammoth task and it will take almost a year or so. After that we will work further on other things.\n\n"+
    "Blessings"
},
{
  id: 350,
  header: "Experience and eagerness",
  question: 
    "I have been through all eleven chapter published by setu and thanking you very much sharing leela of hanumanji that have touched the bottom of my heart. I am curious to know about bhaham gyan and looking for bhahamnist guru who knows the god by tatva and can be able to help me in his darshan/sakshatkar.\n\n"+
    "As you have mentioned the mantras of 36 panties..we have three of them please share rest all panties of mantras given by hanumanji so it could be helpfil for us to chant those panties for hanumanji's darshan.\n\n"+
    "Requesting you to please help me in finding a real Guru. Jai sri ram",
  answer: "Divine Soul,\n\n"+
    "Do not look for Guru. Rather look to become a good disciple. Guru will automatically walk into your life. If you search for Guru, you may end up with a wrong one. Therefore, concentrate only on becoming a good disciple. The Guru will walk into your life in one form or the other. Guru may or may not be a visible person. He can be invisible. Or He can be a group of people who come into your life from time to time.\n\n"+
    "The lines of Mantras will be released at the right time because lines are of no use until their meanings are explained. And their meanings are explained through the chapters of Lord Hanuman's Leelas. Wait for the chapters, lines will be released along with the chapters which enshrine their meaning,\n\n"+
    "Blessings"
},
{
  id: 351,
  header: "Experience on Chanting the Mantra Given By Settu Hanuman Group",
  question: 
    "My mind was at continuous unrest due to some worry since long time.Yesterday I chanted the Mantra given to me by Setuu Hanuman group for 2 hours , I saw the Lord Hanuman as the clouds several times .He was flying with Maruthva Mala up above the sky.I felt so much peace.\n\n"+
    "I thank for the great gift of Sight Hanuman Gave of Flying Maruthi with Maruthva Mala after chanting the mantra continuously for 2 hours .\n\n"+
    "O Lord HANUMAN bless my soul with eternal peace and guide my soul through difficult paths to Vishnu loka to See the beautifull Kheera Sagar .In my mind I can see the beautifull Ksheera Sagar waves shining in the moon light and Setuu Hanuman standing near it blessing us\n\n"+
    "Pranams at your feet O Lord Hanuman"
},
{
  id: 352,
  header: "The experience of Maya",
  question: 
    "Only Lord Hanuman, the Lord of Kaliyug, can dispel the effect of Maya, and the illusion it creates. If a sage like Baba Matang can get carried away, poor and already disillusioned souls like me are firmly in the grip of Maya, and the only boat I have is te devotion to Lord Hanuman.\n\n"+
    "I seek HIS blessings everyday in my life, so that HE may take care of me and protect me and my family from harm in each and every way."
},
{
  id: 353,
  header: "Experience in past ONE month.... *Awesome*....",
  question: 
    "Hello Sirs,\n\n"+
    "Thank you so much for your response for my previous message...!\n\n"+
    "Things I am sharing below are my personnel experience only, I really have no idea if they are true or my misunderstandings. Hope you understand.\n\n"+
    "I wish to mention here that during past one month I felt very light and tension free. I had expressed my wish to meet the almighty LORD and surprisingly today morning this happened:\n\n"+
    "# I purchased milk for my 3 year old son/ family from milk shop as I do daily. As I walked few steps I found one of milk packets leaking and milk was flowing drop by drop to ground.\n\n"+
    "# I returned to shop and shopkeeper packed leaking one liter milk packed in separate packing.\n\n"+
    "# \"When I was returning from milk shop after purchasing milk, few Vanars were passing near me. I was also trying to keep some distance from me, obviously due to FEAR.\"\n\n"+
    "# Such incident happened many times earlier also and usually I pass without any problem.\n\n"+
    "# Surprisingly, as I turned back I see two VANARS coming towards me. I was shocked for a moment. They were looking at the milk bags I was holding in my hand. Also looking at me in between. (I HAVE BEEN BRINGING MILK FOR LAST THREE YEARS BUT NEVER EVER VANARS CAME NEAR ME).\n\n"+
    "# I threw One liter milk pack to them out of fear (which was leaking and packed separately) and rushed towards my home.\n\n"+
    "# I turned back to see what was happening behind my back.\n\n"+
    "# VANARS took the milk packet and opened it. That was the last thing I could see.\n\n"+
    "I DON T KNOW WHAT'S THE MEANING OF THIS INCIDENT BUT FEEL LIKE LORD HANUMAN JEE HEARD ME AND CAME NEAR ME TO SHOW HIS PRESENCE.\n\n"+
    "I would be grateful to you if you may share your kind views about the incidence.\n\n"+
    "Also, I wish to share here that from my childhood I was a SHIVA BHAKT only. Now I pray to both Lord SHIVA and Lord HANUMAN JI. IS HANUMAN JI A AVTAR of LORD SHIVA....????\n\n"+
    "I will be highly obliged for your guidance.\n\n"+
    "Best regards,\n\n"+
    "Shishir Vats\n\n"+
    "Ghaziabad- UP\n\n"+
    "India",
  answer: "Divine Soul,\n\n"+
    "As a devotee, your relation with Lord Hanuman is a personal relation. You should not seek views of anyone else on this relationship. What you experienced is unique to your own soul. Noone else can comment on that experience. When we read this out in Sakshat Hanuman Pooja, Lord Hanuman simply smiled. Therefore it is only between you and the Lord. Noone else can express views on this experience.\n\n"+
    "Whether Lord Hanuman is a Shiva Avatar or not, answer to this question is not simple. In Chapter 6 Lord Hanuman has briefly told why He was sent to this mortal world. You should wait for upcoming chapters to know the answer of your question from Lord Hanuman Himself.\n\n"+
    "Blessings"
},
{
  id: 354,
  header: "experience of second chapter",
  question: 
    "JAI SRI RAM, I REALLY BELIEVE THAT THE BLESSINGS OF LORD HANUMAN MADE ME TO CONNECT TO SETUU ASIA.SECOND CHAPTER HAS GIVEN A REAL WOW EXPERIANCE WHEN HEARD THE PRAYERS OF BABA MATHANG ESPECIALLY PRAYING:\" LORD CLARITY TO ABODE HIS MIND AND WASH AWAY DEVIL CONFUSION AND ANGER EVIL FROM HIS MIND\"......I REALLY ENJOYED THE WORDINGS AND STARTED ADAPTING MYSELF ON VARIOUS OTHER CIRCUMSTANCES TO RESIDE MY THOUGHT AT PEACE... \"JAI SHRI RAM\" \"JAI VEER HANUMAN\" LONG LIVE MATHANGI COMMUNITY....."
},
{
  id: 355,
  header: "Experience#505719",
  question: 
    "Sabse pahile paka bahut bahut abhar jo ye website apne banayi! Mera anubhav bahut puarna hai,jab mai 25-26 vars ka tha,mai ek sadhka hu lekin maine diksha li huyi hai,lekin bavjut iske mere jivan me kuch ise dikate iyi ki mera vishawas har samay dol ta raha,kay karu kya na karu samje mai nahi aara tha ,mai puja patha bhahut karta tha lekin muje tabhi kuch rasha nahi di raha tha,phir ek din achnak mere hat me ek tantra ke kitab padi usme maine hanuman chalisa dekhi aur muje hanuman chalisa roj padneke icha hue tabse mai roj haunman mandir me jakar hanumanji ke samksha chalisa ka patha karta tha.use drmiyan hanuman jayniti bhi aagayi,hanuman jayti ke din mai gharke bahar soya hu tha to achanka muje mere rajyi pe koyi kudta hua mahsu hua ,muje laga mai sapna dekh rah hu lekin jab rajayi hatyi to dekha ek bandar ka bacha mere pe kudh raha tha aur vo din hanumanjayniti tha. isse mere hanumanji ke prati astha aur bad gayi aur jadli hi muje mara fal mil gaya. iske lava ek anubahav aur hai mai ek jaga jaya karta tha va pe ek pir ki savari ke sadhu maharj ko atithi,us din 3 log aur the jinko alag alg devo ki savri atithi,usme se ek ko hanumanji ke savari atithi,jab mai unko namasaker karne gaya to hanumanji ke savari val;e vyakti ne muje kasa kar pakad liya,kyu pakad muje ye aaj tak maj nahi aya,ya to hanumanji mere bahkti parasan hoge is liye ya phir muje pe koyi bala hogi use rokne ke liye. bas yahi do anubav mere javan me aaye hai.aaj muje pahla adhya padne ke bad thoda hal laga jaru lekin mai ye nahi bol sakta ki isase mere atma ki koyi parat hati hogi. mera apse ek prashan hai agr aap mere is prasana ka uttar de denge to badi maher bani hogi.\n\n"+
    "Q:mai hanumnaji ki puja (hanuman chalisa ) bahut dino se padta hu ,ek do bar maine 100 bar bhi path kiya hai lekin muje abhi tak isa kuch bhi anubhav nahi hua jise mai kah sakta hu ki mujpe hanumanji ki kripa hia,ya mere karya safal ho rahi hai?\n\n"+
    "thanks,\n\n"+
    "Mahehs Nageshwar",
  answer: "दिव्य आत्मस्वरुप ,\n\n"+
    "हनुमान चालीसा का पाठ तब करें जब आप देह और मन से ऊपर उठ जाएँ | जब पाठ करने बैठे तो कुछ मिनट शांत रहें और सोचें कि आप कौन हैं | जब आपको यह लगने लग जाए कि आप देह नहि, मन नहीं , अपितु एक आत्मा हैं , तब पाठ शुरू करें | तब आपका हनुमान जी से संपर्क सधेगा | कितनी बार पाठ किया यह गिनने कि आवश्यकता नहीं है क्योंकि गिनती मन से होती है , आत्मा से नहीं | मन के स्तर पर मत गिरिये , आत्मा के स्तर पर उठकर पाठ कीजिये |\n\n"+
    "|| राम ||"
},
{
  id: 356,
  header: "experienced assurah works.",
  question: 
    "Gurudev ko sat sat naman. Gratitude setuu... Today i have eexperienced assurahs aactivities and found out how they are rresponsible for what they did to my body mind. Only gurudev and i know today incident. But praying to make me stronger to fight and win this war. Observations are nnecessary for every tthought . Bless me holy one. ||RAM||"
},
{
  id: 357,
  header: "Experiences of Lord Hanuman",
  question: 
    "Jai Shree Ram Jai Shree Hanuman\n\n"+
    "Gratitude to my gurudev shree Hanuman Ji gratitude to all the Mathangs and setuu team.\n\n"+
    "Gurudev I (the soul riding on body of Karan) every moment feel your presence around me everywhere I go I feel you with me My Lord. Whatever happens around is your blessings gurudev and I am part of you and will soon be one with you and I do not own anything gurudev everything is yours.\n\n"+
    "Hey Gurudeva Shree Hanuman Ji with your blessings I came to know about Brahmcharya at a very young age of this body but at that time I was unable to maintain brahmcharya and then I tried and failed and then tried and failed and then forget that and at that time I knew that there is some relation of me with you but not fully aware of and so many things happened but I never go away from you or I should say You never left me you were always with me and are here always with me gurudev and than last year I came to know about setuu from Inspiration that I got from a dream in which I met Lord SHiva and In which I was told that I am on the right path and I should not stop and This was told by a priest in the temple near shivalinga and outside that temple I saw shiva in the form he is known in this maanavloka and then after waking up I decided that there is definetly some strong bond with my lord shree Hanuman ji and I shearched alot on internet and then I came to Setuu with your blessings and then I read all the divine chapters by your blessings gurudev and then I saw you In swapanloka and you also gave me blessings and you also gave me a piece of cloth that was on your body and smiled and then once again I concluded that there is some special bond with you gurudev and then again 2 time I got your divine darshan in swapanloka and I kind-off felt that the society in which I have taken birth in body of Karan is also your blessings gurudeva and I now felt nothing here I just always want to be with you I see everyone's happiness and sorrows as a result of their karam-desires and every event that happen around me as your blessings to show me the path of Moksha by giving me the supreme knowledge and I found you everywhere and the knowledge given by you in everything I experience through this body and you always teach me the way to moksha and with your blessings now I once again came to brahmcharya I studied its principles and there I also found the supreme knowledge with your blessings and therefore I took vow of brahmacharya with your blessings gurudev I am not fond of any supernatural powers or siddhis all I know is Brahmcharya is a way by which I can get above this body-mind to the level of soul and then only I can have your sakshat darshan in maanavloka itself and then only i can leave this body I firmly believe that this is your blessings my gurudeva you are showing me the path that came to you I am a part of you and will be merged with you soon. Jai Shree Hanuman.\n\n"+
    "Hey gurudeva I always wanted to serve you help you I am your servant gurudeva I dont want any materialistic thing or money I want you only gurudeva nothing else. Hey Gurudeva I wanted to come to Setuu Hanuman Bodhi at sri Lanka Soon so that i can fully devote myself to you and get out of the trap of Maya and serve you gurudev please make path for me so that I can come there and do my sadhna and so I can always be near you and help you and Shree Vishnu and all gods if you wish my lord I am nothing without you Please make path for me so that I can come there. Jai Shree Ram Jai Shree Hanuman. I am always at your service my gurudeva jai shree Hanuman.Please show me the path. Jai Shree Ram Jai Shree Hanuman."
},
{
  id: 358,
  header: "Experience/Thoughts",
  question: 
    "In my experience by praying God/Lord Hanuman we get peace from whatever we are going through in this material world. Just by uttering his name in distress brings a lot of calmness to our mind. Sometimes god comes in unknown ways to help us out. My very surprising experience was when I moved to an unknown place and I had to shift my luggage 3 floors. I was wondering how to go about it, meanwhile from nowhere there came a girl and offered help. I didn't have to carry any suitcases, she carried everything for me. My work was carried out so easily. I still cannot forget that incident as it was very surprising to find someone at night in a sort of deserted place.\n\n"+
    "I have a query: My marriage is delayed from sometime although my parents are looking matches for me. Also apart from matches which are coming, if I like someone, it usually ends up being one-sided and it does not work for me. Even arranged marriages mostly people look at my horoscope/photos and reject, this is with most of the cases.",
  answer: "Divine Soul,\n\n"+
    "Do not get desperate. Everything will happen at right time. Just love yourself. Be assured that the right match is waiting for you and it will come at right time.\n\n"+
    "Blessings"
},
{
  id: 359,
  header: "Experince in the Reading Journey",
  question: 
    "Jai Shree Ram Jai Jai Hanuman,\n\n"+
    "Hey Prabhu Bhakto,\n\n"+
    "First of all I must say that Thank you so much to bring Hanumanji so close to me that I can now feel a link between me and Hanumanji since I started reading these chapters one by one. Previously also I loved him, I worshipped him as my Prabhu, as my Guru and as my friend but there was something due to which I couldn't control my MAN, something was there due to which I couldn't say that I am devotee of Hanumanji. There was lot of love, lot of feeling toward him but Maya Itni Prabhavi thi mujh par ki main swaym ko uske prabhav se bacha nahi paya tha. But now when I started reading this chapter I began to feel a link between me and Hanumanji. Very suprisingly when I stop reading this chapters or I couldn't give time to him or his worship then I feel very bad I feel that link is breaking, I feel like a fish feeling that water is going I am dying. Until and unless I don't cry for him, unless there are no tears to meet him unless I don't image about him my heart and my soul don't calm down. I love hiim very much, I eagerly want to meet him and perhaps with the help of these chapters I took a step forward, may be and may not be, else Hanumamji knows better than me.\n\n"+
    "Now just want to ask or confirm that am I on the right track. I think yes because now I can control my thoughts, my bad thoughts, I started loving him so deeply, Bas ab koi Hanumanji ya phir un Mahamanv Matang ji se puch kar mujhe bata de ki Hanumanji mere bare main kya sochte hain. Mujhe aur unke samip jane ke liye kya karna hoga. Kuch aisa tarika jisse main sansarik karye sanyas ki bhawna se karte hua sidhe unke pas pahuch jaun aur unke charno main gir kar ek bar apne tears se unke pav dho payu. Sirf ek bar ! sirf ek bar !\n\n"+
    "May God Bless you all for this deed !! Hanumanji will bless you all for this !!\n\n"+
    "Jai Siya Ram Jai Jai Hanuman !!",
  answer: "Edit: In this world where we are living and interacting through the words you are reading right now, 108 is a very important number. Mantras should be chanted only when the devotee know meaning and essence of them. When you chant a mantra once it takes your \"self\" in higher circle. You will start from body and move through intellect, Chitt and so on. Ultimately you will find yourself ONE with the SUPREME. Right now we have released only 2 lines but once all the lines are released and once you get the essence of them through chapters of Lord Hanuman's Leelas, you will experience the ONENESS and you will get the Sakshat Darshan of Lord. Till then you can practice with the 2 lines the art of moving up in the circle of identities. When you chant a Mantra, you should never hold on to your body. Just hold on to your soul which is invisible. When you chant Mantras, practice to leave your body and assume higher self. Remember, you are a soul and you can assume any \"self\" you want. The \"self\" attached with your body is just one \"self\". You have to move higher and higher and merge with the Lord ultimately. Usually a soul can cross all the circles by chanting a Mantra 108 times but the counting cannot be continued through the process. At one time , say after chanting 21 times, you will leave your mind and then counting will stop but the chanting will continue.\n\n"+
    "Blessings\n\n"+
    "--------\n\n"+
    "Divine Soul,\n\n"+
    "All the devotees who are reading chapters of Lord Hanuman's Leelas are special. You are either in the 99 Lakh people who will get Moksha through Kalki or 33 Crore people who will become Surrahs for next Kalpa. Therefore, make Lord Hanuman your Guru and keep reading His Leelas being posted here regularly. All your confusions will go away. Your queries about non-vegetarianism shall also be answered in one of the chapters. Know the truth through these Leelas and take decisions on your own instead of taking advice of others.\n\n"+
    "Blessings"
},
{
  id: 360,
  header: "Exploitation of human by the human",
  question: 
    "what should we do when people try to exploit us or anyone else?when i try behaving properly the person on the other side take me granted as a weak section of the society.when we should became violent and aggressive?how can we overcome our fears and bad illussions?society has been lossing basic truths of happiness.truth,tolerance,acceptance sàtisfaction love for all, moral values etc all lost out.when i m on right side and other on one on wrong why i am suppossed to not use unfair means to harm him?",
  answer: "Divine Soul,\n\n"+
    "Follow principles of Lord Krishna laid down in MahaBharata to deal with such situations. You can even give those principles even sharper edge because those principles were for Dwapar Yuga; in Kaliyuga Lord Kalki will be fiercest avatar of Lord Vishnu,\n\n"+
    "Blessings"
},
{
  id: 361,
  header: "Expressing Gratitude and Queries.",
  question: 
    "Dear all devotees of Lord Hanuman,\n\n"+
    "Greetings and Good Day. Om Jey Sri Hanuman.\n\n"+
    "First of all, I would like to express my deepest gratitude to Setuu organization for giving me an opportunity to read such a thoughtful knowledge from Lord Hanuman leelas. Thank You.\n\n"+
    "Being an adolescent, and living up in this mortal world for 23 years, I have been through hardships and I always believe I have all the needed strength to face it.\n\n"+
    "My mom and family members used to tell me, when you are experiencing serious health issues during your birth, its the Lord Hanuman who saved you. Ever since then, my prayers always start with the worship of Lord Hanuman.\n\n"+
    "Currently, I am looking for a job after my undergraduate studies in engineering. I have applied to most of the companies and related organizations. However, there is yet to be any reply for an interview. I would like to seek forgiveness to Lord Hanuman if there is any offensive act that I have committed without my own realisation.\n\n"+
    "Meanwhile, I pray for HIS continous well-being in supporting lots of souls desire in this mortal world. No matter how hard it goes, I am seeking for the strength to not give up.\n\n"+
    "Thank You and I am feeling lighter after reading each chapter.\n\n"+
    "Om Jey Sri Hanuman.",
  answer: "--- conveyed to the Lord. ---\n\n"+
    "Divine Soul,\n\n"+
    "Take care of these 4 things-\n\n"+
    "(1) Make sure you have a deep desire to reach goals.\n\n"+
    "(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n\n"+
    "(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\", \"worry\", “doubt”, “victimhood” etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n\n"+
    "(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
},
{
  id: 362,
  header: "Failed in significant aspect of life!!!!!!",
  question: 
    "Lord Hanuman\n\n"+
    "Getting failure in significant aspect of life.....\n\n"+
    "Got in to Debt of money....tried to achieve but failed in almost all stages.\n\n"+
    "I Understand it must be my earlier bad karma. But due to this my wife and son also getting suffered with me.\n\n"+
    "Don';t know whether in this life span i can be able to come out of my misfortune?",
  answer: "Divine Soul,\n\n"+
    "You will certainly come out of it. Do not blame yourself. Do not be too emotional about your family so that everyone's Karma don't get mixed up. Lord Hanuman shall suggest you solution. Keep doing what you think is right to do. He will insert the thoughts which will lead you to the solution.\n\n"+
    "Blessings"
},
{
  id: 363,
  header: "Family",
  question: 
    "Jai Bajrangbali Hanuman, Jai Mahaveer Hanuman, Jai Pawan Putra Hanuman, Jai Dakhksinmukhi Hanuman,Jai Jai Balaji Maharaj, Jai Jai Sankatmochan Hanuman, Jai Jai Panchmukhi Hanuman, Save my family with me, sabko sadbudhdhi pradaan kare avam sabper kripadrishti banaye rakhe,"
},
{
  id: 364,
  header: "Family Members not internally strong and being karta how do i (my soul) can stop and not to allow Asurrahs to do evil Act",
  question: 
    "Continued from #495067 After analyzing deeply about events in our day to day life i feel depth from my heart that Since other family members are not so strong (internally), and being karta of my family how do i (my soul) stop and not allow Asurrahs to do evil Act with our family members and disturb our life? Pl guide me....",
  answer: "Divine Soul,\n\n"+
    "There are many techniques to control body-mind of others so as to insulate them from Asurrahs. But those techniques can be executed only by skilled Gurus. An ordinary human being cannot do that. At your position, you can only decline the Asurrahs pleasure of hurting you through your family members. That would keep Asurrahs in control.\n\n"+
    "Blessings"
},
{
  id: 365,
  header: "Family problem",
  question: 
    "Hamari family main bahot problems go Rahi hai..\n\n"+
    "Meri wife Aur mere pitaji ki nahi Banti hai. Roz ki kalaah hoti hai jisse ki main bahot pareshan ho Gaya hu.. Meri Patni bhi bahot ajib behave karti hai, hsmesha mujhse jhagda karti hai. Kabhi kabhi Lagta hai ki kahi Chala jau.\n\n"+
    "Kripa bataiye ki mere kin karmo ki wajah we yaha mere sath ho raha hai.\n\n"+
    "Meri Shri ram ji Aur hanuman ji me puri Aastha hai. Mujhe Vishwas hai Prabhu meri sahayta karenge.\n\n"+
    "Jai Shriram Jai veer hanuman",
  answer: "हे आत्मस्वरूप जब किसी के मस्तिष्क पर असुरों का कब्जा हो जाए तो आपके पास श्रीराम जी जैसा धैर्य होना चाहिए | आप जितना विचलित होंगें , असुरों को उतना ही आनंद आएगा और वे और भी ज्यादा बुरा व्यवहार करेंगे | आपको यह जानने की आवश्यकता नहीं है कि किन कर्मों के कारण आपके भाग्य में एसा हो रहा है | विचलित होने की बजाए ,यह समझ लीजिये कि आपको यह योग अभ्यास मिला है | बाहरी संसार भ्रम है | भ्रम जितना कड़वा हो , उतना ही उससे बाहर निकलने के आसार ज्यादा है | अगर भ्रम मीठा हो तो मनुष्य और भी ज्यादा भ्रम में फंसता चला जाता है |\n\n"+
    "||राम ||"
},
{
  id: 366,
  header: "family problems",
  question: 
    "O Lord Brahma shower Your Divine Grace on my eldest son who is bed ridden for his recovery and regain his normal life; my children to settle in their lives with good alliances and jobs with spiritual lives. Grant us bhakthi in our family, peace, love and seva."
},
{
  id: 367,
  header: "Family's matter",
  question: 
    "Namaskarm sir,\n\n"+
    "We have family issues. My mother died 16 years ago, after that my father Shri K Chandran was devotee of Hanumanji, he will go for bajana at Shri Hanumanjki temple, My father remarried in 2009, Presently my father is changed due to evil nature of second marriage woman name sujatha, For property and money she diverted my father's mind, she is always want non vegfood, she does not like any vartas,homam, poojas at home . My father presently hesitate for going temple and reading Shri Hamnuman chalisa My father presently talk rudely, less loving behaving with me and my small sister.. We are confused as the changed behaviour of our loving father, He always obey ,second wife whether it is right or wrong. Never listen our sides.. We loves our great ,loving father Shri K CHANDRAN Kindly guide us, Is it possible of black magic, or something like that ,that changed fathers behavior.. How to save father..what will we do, how to improve fathers abnormal psychology, and mind",
  answer: "Divine Soul,\n\n"+
    "It is not black magic. It is influence of Asurrahs. Don't get disturbed by words and activities of your father. More you get disturbed, more Asurrahs will become powerful in his mind. Show Saatvik qualities of Surrahs. Let Surrahs manifest in you. Let the force of Surrahs in you become so powerful that his asurrah flees away. When you get angry or disturbed, you get infected by that Asurrah. You have to remain calm and good so that that Asurrah in your father does not affect you.\n\n"+
    "Blessings"
},
{
  id: 368,
  header: "Father hospitalized",
  question: 
    "Dear friends,\n\n"+
    "My father is hospitalized.\n\n"+
    "Pray to Lord Hanuman for quick recovery and well being of my father.\n\n"+
    "Regards\n\n"+
    "Tamoghna Dassharma"
},
{
  id: 369,
  header: "Fear?",
  question: 
    "This is not an experience,but this is how I felt after reading these chapters.After reading these chapters I felt fear inside me. I don't know why? Probably because it is too good for me to believe.It is not that I don't believe what you are saying. I do not know how to explain. I would be happy if you clear my doubts.\n\n"+
    "Thanking you,\n\n"+
    "Apurupa",
  answer: "Divine Soul,\n\n"+
    "Suppose you go for a walk very early in the morning. It is still dark but street lights are being switched off. Would you fear the darkness or would you cherish the hope that the Sun is going to rise soon? These chapters sure switch off the artificial lights which keep us in illusion but there is nothing to fear as the Sun of reality is going to rise soon.\n\n"+
    "Blessings"
},
{
  id: 370,
  header: "fearless now",
  question: 
    "once i had bad dream.Some devils was trying to kill me in my dream.i was very scared.They were coming toward me and i could not move my legs because of fear.When devils came very close to me i felt a hand on my shoulder and i looked back,lord hanuman was standing beside me.he said to me that \"don't worry my child i m with u.Suddenly i came out into my dream.After that i was more stronger than before.Thanks very much hanuman ji for your blessing."
},
{
  id: 371,
  header: "Feel Happy",
  question: 
    "mai punjab se hun jb maine yeh lines padi to uske baad mai kafi accha feel kr rha hu muje yeh bhut hi accha laga thanks Jai Shri Ram ji...Jai Hanuman Ji"
},
{
  id: 372,
  header: "Feeling Blessed",
  question: 
    "It was wonderful experience....I was experiencing the conversation in front of me.."
},
{
  id: 373,
  header: "Feeling Blessed !",
  question: 
    "Respected Setuu family,\n\n"+
    "First and foremost, it is beyond me to realize that I am blessed by Setuu and that means I am blessed by Lord Hanuman himself, who is \"Gyan Gun Sagar \" !\n\n"+
    "I have always believed that Hanumanji exists, and I pray to him, by reciting Hunaman Chalisa everyday. I used to think that why would he give Darshana to a wordly person like me, who is full of unwise doings during life ?\n\n"+
    "But after reading the initial post, which claimed that Hanumandada ( we call him \"Dada\" fondly, as that means \"grandfather \" in Gujarati language ) visits Matang community in Sri Lanka every 41 years, I was curious, and eager to learn more about it.\n\n"+
    "As I read first and second chapters, some myths are cleared from my mind, and am very very eager to complete all 5 chapters.\n\n"+
    "World is an illusion, that statement is so well explained by Hanumanji, and I bow down to him, for his wisdom and bhakti to the supreme. He is like Guru to me, I always feel that way.. Hope his blessings flow in my life as well as for my family, and whole mankind, for better life and happiness on this planet.\n\n"+
    "Today morning when I saw the e-mail with Mantra - to be recited for Hanumanji, tears filled my eyes with gratitude. I feel that my life is worth afterall, as I feel blessed in so many ways !\n\n"+
    "I have a humble question : How and when should I recite this Mantra ?\n\n"+
    "Secondly, please do not publish this writing, as I want to keep this experience as something very precious to me, to myself and share only with you as you have reached me till here !\n\n"+
    "With pranams for the wonderful work that you are doing,\n\n"+
    "Sincerely,\n\n"+
    "Smita Dhruv",
  answer: "Divine Soul,\n\n"+
    "These Mantra are to be recited in the state of transcendence. In that state, time and space lose their meaning. In that state, only a soul speaks to Lord directly. The body and other parameters of physical world have no meaning.\n\n"+
    "Blessings"
},
{
  id: 374,
  header: "FEELING GOOD",
  question: 
    "SHRI RAM, AFTER READING THIS 9TH CHAPTER I AM FEELING VERY GOOD. AND OUR KNOWLEDGE GOT CORRECTED BY SHRI RAM DOOT HANUMANJI WHAT WAS ACTUAL HAPPEND.VERYLUCKY TO READ. ANJANISUT HANUMAAN JI KINDLY BLESS MY SON SHOBIT REAGARDING STUDY AND HEALTH.AND SHOWER YOUR BLESSINGS ON MY ENTIRE FAMILY.\n\n"+
    "JAI SHRI RAM\n\n"+
    "RAMBHAKAT\n\n"+
    "DINESH GUPTA"
},
{
  id: 375,
  header: "Feeling of His Blessing at Every Instance",
  question: 
    "I feel the Blessing of Shri. Ram Bhat Prabhu Hanuman bestowed upon at every instance.....Hey Prabhu keep your blessing bestowed upon all of us for ever Wish to Gain the Pious Brahm Gyan from you ....Jai Shri Ram , Jai Veer Hanuman"
},
{
  id: 376,
  header: "Feeling protected & blessed to my family by HANUMANJI............",
  question: 
    "As I started the reading of Hamunmanji's apperance with mathangs, gave me plenty of spiritual experiences as going through the chapters. I am confident now he is around me & my all family members giving us immense blessing and coverd us in his shield of protection by providing us Health,Happiness,Prosperityang Longvity with spiritual growth..........Thank You very much Hanumanji for everything.............."
},
{
  id: 377,
  header: "feelings",
  question: 
    "i'm feeling better, stronger. so strange. i read why hanuman was chained only now. i didn't see it earlier. i got many answers. if there is hanuman to protect me, i guess my karma results also will be taken care of. i feel relieved. but as humans we'll never be able to not create karmas. won't hanuman help me with that as well so that only good karmas and good results are created? i'm trying to stop thinking about my past. yes, may be some of the karma results have gone from me.i should live the present. i should not create more and more wants. should reach the state of no desires.only ram.till i die. how to remain in that state? bless me, i pray with all my heart. i'm also trying to find a temple that has monkeys. i'll offer the fruits there as asked by you. i think hanuman is pure love. he is very kind. my namaskars to him again and again. i thank the sarangs and the Setuu masters again and again. do keep guiding me to the right path.jai sri hanuman. sriram jaya ram jaya jaya ram. sri gurubhyo namah.bless me so that my heart to is filled with love for ram, for ishwara.sri anjaneyaya namah."
},
{
  id: 378,
  header: "Feelings",
  question: 
    "I dont knw why....Jab bhi mai Koi bhi chapter read krta hu is page pr...andar se mai bahot hi emotional feel krta hu or meri Ankhon se Aansu aane lagtey hai..!!\n\n"+
    "Why it is happening with me..??\n\n"+
    "I hve 1 more qstn...If Lord Hanuman Ji is present in this world at this time...why evryday Womens or girls are getting raped...evryday I read or see in news...I feel so sad abt this...dat if Lord Hanuman ji is here then why he is nt protecting womens or girls...he cn reach at any place as fast as he cn..bcze he is nt bound with time...bt why....?? Whnevr i read such news.....I always ask...to Lord...Why Hanuman ji...??\n\n"+
    "I always drim dat...i wish i culd get some powers like Lord has...so dat i cn protect evry women or girl at same at diffrent locations....!!\n\n"+
    "Im eagrly waiting fr this Ans from Lord Hanuman....??\n\n"+
    "Will he rply to me..??",
  answer: "Divine Soul,\n\n"+
    "If you read the chapters with full awareness, you will get all your answers. Answer of your question is hidden in first chapter itself.\n\n"+
    "Blessings"
},
{
  id: 379,
  header: "feelings",
  question: "Lord Hanuman. the word itself makes me feel lighter and talking to him makes me feel like i am talking to a guru at times i imagine Him to be a child and the love that i feel for him is just what i feel for my son i don;t know why i feel this and i have not thought to ask anybody about the way i feel for Shri Hanuman. i have experience His presense around me and after connecting with Setu the presence of Lord Hanuman is much stronger i feel that i am in his proctection and he is the one with whom i can share all my feelings.i do belive that my karmas are affected by the suras and the asuras, what's the way of getting rid of them how connect with Lord Hanuman if i am disturbed by these hinderense. i sit to meditate but after some time i loose my concentration",
  answer: "Divine Soul,\n\nObserve; do not resist. Because you have two kinds of Asurrahs affecting you. One disturbs you and then you react saying, \"Oh, I am not able to concentrate.\". Then the second Asurrahs comes in picture which exploits your worry that \"I am not able to concentrate\".\n\nTo get rid of them, just observe them. Let them pass through you. Keep smiling and say to them, \"I know your trick. I can see you.\" They will leave then.\n\nBlessings"
},
{
  id: 380,
  header: "felt your presence",
  question: "i was told the planet shani is going to affect my star. i thought of the hanuman temple in the city and pray. however, when i went there, the temple was not yet open. as my aunt was waiting, i could not stay long. so i went around the closed temple, prayed for my niece and others and put some money in the hundi. when i came around , i asked a person sitting there when the temple would open. he asked to ask two people waiting in front of the closed temple,at the main door. they told me the temple would open only at five. but, they said i could see hanuman through the holes. and i did. felt happy when i saw the face and feet of the lord. on the way back i reached another temple. hanuman was there too and the doors were open. i prayed, chanted slokas etc and returned home with some prasadams. then i felt, as a surrendered person, i was ready to accept anything given by god. i'll bear it and if i can't, the lord will help me. i will feel his presence closely!did he really communicate with me? sri anjaneyaya namah. sri ram jaya ram jaya jaya ram. sri gurubhyo namah. namaskarams. namaskarams to the sarangs and Setuu masters."
},
{
  id: 381,
  header: "before few days i feel",
  question: "before few days i feel that hanuman ji is living with me jb se maine hanuman ji ka yantra dharan kiya hi meri smaoking km hoti gaiyi aur aj ekdm se choot gayi mai ek student hu bs ab job ki deri hi aur mujhe vishwas hi ki hanuman ji wo bhi de denge shri hanumate namaha............."
},
{
  id: 382,
  header: "few questions i got while reading this chapter.",
  question: "Dear Setuu, Sai Ram Jai Hanuman Accept my humble pranamas. I am reading this probably 2time. The layer of illusion seems to get shaken now. I felt this is a gradual process as the soul has taken many bodies and got bound by karmas and desires. So in that case your 108 hours of arpanam is insufficient. Simply because there are chances for people like me to take time to understand it. 2) I am still not clear whether mathangs are monkeys or humans. If you want to know about me, well than I look like human but am monkey in side.(no intentions to compare with mathangs or other wise monkeys) 3)in bhaghavat gita Lord Krishna says all things in this universe are fragments of me. So is going back to mukthisagar should be the goal or going back to the lord(merge with him) 4)are mukthi and moksha two different things?",
  answer: "Divine Soul,\n\nYou may follow your family tradition for Arpanam. We have been instructed to put in place the Mathang tradition which calls for Arpanam within 108 of reading the chapter for first time. It is like breaking coconut. It is considered best if the coconut is broken in first attempt.\n\nMukthi and Moksha are the same thing.\n\nWe cannot influence your soul's goal. There are thousands of souls who prefer either Shivaloka or Vishnuloka over Moksha. But as described in chapter 13, Moksha is the ultimate destination for a soul. (Actually it is something where all destinations end. So it cannot be called destination.)\n\nTo be able to get Moksha, one has to let go off their identity. That is what is difficult for most souls.\n\nSuppose you are given two options - (1) A trip to Paris (2) A trip to heaven. The condition is that you cannot carry any luggage. You get excited. Of course heaven is better than Paris. So you would choose heaven. But then the flight attendant tells you that you cannot carry any luggage. You frown at her and say, 'I have no luggage.' and then the flight attendant says, \"Your body itself is the luggage'. Then you will probably freak out, turn around and run away as fast as you can.\n\nBlessings"
},
{
  id: 383,
  header: "Fight Inside me",
  question: "Continued from #36812 Thanks for your response and apologies for my late feedback. I am a normal human being with lots of desires which includes good as well as bad ones. I don't think I would qualify as a messenger of Lord Hanuman as of today as I feel I am impure and need lot of changes in the way i think and live. I am a normal householder with wife, 2 daughter and dependent parents, however of late due to various problems in my married life, I had started looking into my spiritual aspects as to why I am subjected to such a harsh and rough personal life. On one hand I have my personal life with bad relation with my wife and in laws and my wife not having any love for my parents and my sister, then on second hand I have a big fight going inside me that is the good intent and bad intent. Sometimes the good inside me wins and most of the time the bad inside me wins. Till last year i was a man who was messenger of evil with heavy desires of lust, anger and ego. But since Jan 2015, when i visited Sabarimala, after doing my deeksha, I have made truthful attempt to change myself. I also became a member of Brahma Kumaris, who taught me what is life all about and what we are in true sense. They taught me the meaning of soul. I now feel that the bad part is gradually dying inside me and I have stared transforming into a better person in all sense. I pray to lord hanuman daily and infact all time, while doing my daily chores. The lust inside me is dying sooner and i dont feel the pull of my body anymore, though it is there, but the intensity has gone down drastically. I have now started feeling that I come to Mathangs and start living a simple life with them and attain higher self and knowledge, but my responsibilities stop me from doing that. I want to give my parents and my family a happy life, but i also want to come out from this world and join a spiritual life which i feel is more fulfilling and meaningful. i dont like living a materialistic life any more. I also have started feeling that Lord hanuman is standing close to me all the times. Lord ayyappa came in my dreams during my deeksha during Jan 2015 for my sabarimala trip and he saved me from breaking my deeksha twice. I have also noticed and felt that, it is lord hanuman who has guided me to your website wherein i have read all the chapters with great interest. They are really interesting and knowledgeable. I have started forming an intense desire to meet him and love for him. I sometimes cry alone thinking of him and while chanting \"Hanuman Chalisa\" which i do daily atleast once. I know i have to complete my responsibilities towards my parents and family and then only i can come there, but the desire inside me to meet lord hanuman is increasing day by day. I have started disliking my family life and want to pursue spiritual path. I dont know much about the people who run this organization. Can you tell me more about your organization and how you run it. How can people join your organization. How old is ur organization and more details.... Also after reading chapter 6 which states that we are going through different kalpas and after each kalpa, the cycle begins again. What is the age of each kalpa and how many years left in this Kalpa. I want to meet my lord, can you guide me how? Also how can one clean their old bad karma, is their any method or we have to really go through the punishment to clear them. I think my life has been quite hard and dont wish to have such a life again. I also feel the way my life is going is according to a preplanned route to turn me toward GOD, which i may not have done if my personal life was happy and comfortable. Please respond with your feedback. Waiting for it.... Thanks and Regards, P Sudeesh",
  answer: "Divine Soul,\n\nIf you leave your family responsibilities to avoid the pains associated with those responsibilities, it will be called \"Escapism\" and not \"Sanyas\". Therefore we suggest you to be a Grihasth Sadhaka. That means, fulfill all your family responsibilities while remaining detached from them at the same time.\n\nThe first thing you should recognize is that you are not a body; You are a soul. Let your body-mind do the worldly things and let your soul remain connected to the supreme power. There is no conflict here. These are two functions of your \"self\". Both can run at the same time.\n\nIf you dislike family life, you cannot love Sanyasi life also. Dislike originates in mind. It only signifies that your mind wants change. If you get into Sanyas just for the sake of \"change', soon your mind will get fed up of it and then again it will ask for \"change\". Therefore we suggest you to follow Lord Hanuman's Leelas being posted here. Wait for Lord Hanuman's light before moving towards Sanyas.\n\nBlessings"
},
{
  id: 384,
  header: "Financial support for my life/My brother's marriage",
  question: "Exp 50351 continued... Thank you dear Matangs, I request you to pray for my brother's marriage in the near future as per your reply. One small clarification, I do not have any children and have an old mother whom I need to take care, I am alone and need to take care of me. Only God is my support and He has been leading me till this time. You have mentioned that if I have a child of 14 years my needs will be well taken careof. Hence, I request your blessings, support and prayers so that I can do some seva in the later part of my life as I am presently 51 years. Thanks again dear souls Matangs ..Hanuman ji Ki Jai Ho!! Jai Sree Ram!!!",
  answer: "--- conveyed to lord ---"
},
{
  id: 385,
  header: "First Experience",
  question: "My friend told me about this website....... I am also a devotee of Hanumanj. When I read the first chapter my all the stress tension problems and happiness too have gone somewhere. When I was reading I can feel Hanumanji here reading with me. This was very unusual experience......."
},
{
  id: 386,
  header: "The first realisation",
  question: "Few days back on my holidays in Kolkata I dreamt of a black creature sitting by my head it was causing an immense pain in my left eye by concentrating its gaze towards it. Before this happened ...a few days before this experience I had a similar experience a black creature in form of a woman with open hair sitting on me causing paralysis and pain ...it also tried to put its palm in my mouth as if trying to enter me. In that case I bit one of its finger clean and I woke up. But the last time when the black creature again tried like I said to cause pain I somehow remembered to chant Hanuman Chalisa in my dream - I don't remember if I completed the chanting but as soon as I read the first lines I woke up with the creature gone . Since then it has not happened again . I think his name have my soul the strength to fight off the feeling of evil. Jai Sri Hanuman"
},
{
  id: 387,
  header: "FLOWER OF LIFE",
  question: "It is being said that we are living in an Aquarian Age & Science & Spirituality are running on the parallel tracks. In 2014, I happened to read a book named the ANCIENT SECRET OF THE FLOWER OF LIFE in which the various secrets of the Pyramids of Egypt have been revealed & the figure of flower of life has been given due importance because of its presence in many important temples of the world. It has been also written in that book that this sacred figure holds the entire secrets of the Universe & everything originated from this figure. I didn't trusted it fully but after few days I got stunned to see the same image at GOLDEN TEMPLE, Amritsar India & I really feel that it contains the vast secrets of the Universe. Same thing happened recently when I was praying to lord Durga for her blessings that I happened to see this settu site the very next day & read first 5 chapters. Few days back I watched a movie named INCEPTION in which the hero had the ability to enter into people's dreams & get knowledge about their Subconscious & I was thinking whether this can happen really & see I got this book & read all about Swapanlok. I love Lord Hanuman ji & really craving for his holy darshan & really sanguine that one day I will see him with the grace of Waheguru. Jai Sri Hanuman."
},
{
  id: 388,
  header: "forgiving",
  question: "After reading the chapters sent, I have tried a couple of things. To stop thinking about past, especially the hurting memories, to forgive people and to forget whatever bad I experienced. I haven't succeeded completely but I can feel a difference. It is difficult to forget. At times they come back in the form of depression. I also feel worthless. But I have to thank you hanumane for being with me and helping me. Though I cannot see you with my physical eyes, I know you are keeping track of me. Sometimes I feel your presence. I don't know if I am imagining that. Pranams and Namaskars again and again. Jai sriram. Jai hanuma. Pranams to that Mathangs and the Setuu masters. Thank you. For navrathri, I do pooja and japam along with fasting every year. I have started. I need your blessings. Om namah shivaya. Durgam deveem saranam."
},
{
  id: 389,
  header: "FRAMING OF HANUMANJ'S PICTURE",
  question: "I had been keeping a paper picture of Hanumanji which I received after praying at a temple at Trivandrum consecutively for 9 weeks (I think weekly once without any break ) and I used to pray to the picture mainly after taking bath and wearing wet towel and used to smear ash on my forehead. One day I visited one devi temple (Chottanikkara) at Cochin(Kerala state ) and it was a day of Chandra Grahanam(if my memory is ok) and it was a day of Hanumal Jayanthi also. After my prayers at devi temple I wanted to get the picture remaining in my pocket to be framed and I approached a small shop close to the devi temple and expressed by need. The time was around 7-40 pm and the the person at the shop went inside and returned saying that a frame fit for this picture was not there. Although I requested him to have a second look he refused and was trying to get rid of me and avoid me.Suddenly even without my knowledge or effort ( I should say) there was shout from by throat with a commanding voice \" Go and see.there is a frame right inside . who said you don't have it. get it done now it self\".this voice came out from even to my surprise since I am a submissive person and would never speak like that.As a result he went inside and came back with apologies stating that by there is a frame exactly to suit thus picture and hit it framed within 15 minutes.When I asked for the charges to pay him he called me as \"Swami' and said he would not take any charges. When I forced him he wanted just one rupee for that. I paid film a little more and got back from the temple. This was a strange experience. Now a query :_ I have had a basic course on Reiki (healing with hands ) and would like to have this power with be in abundance to serve the people /beings around as service without accepting any remuneration. Will I have the blessings of HANUMANJI.I am nearing 60 now.Like to hear from you .with pranams Gopinath",
  answer: "Divine Soul,\n\nYes, you should help people with your skills of Reiki. But you should not set arbitrary rules. For example \"without any remuneration\" is an arbitrary rule. Just concentrate on serving people without any arbitrary rules. Service will define its rules by itself.\n\nBlessings"
},
{
  id: 390,
  header: "fulfill my wish",
  question: "jai shree hanuman I have always wished to clear medical entrance examination. Lord please bestow your blessings on me so that i can fulfill my dreams. This year I have filled examination form of all india level (AIPMT) and U.P state PMT. I wish to clear these 2 examinations. Lord please give your blessings without which i can't be able to perform well and clear my exams. Please lord give your blessings so that this year I can pass my exams with good rank and get admitted to a govt medical college. Yours devotee Shikha Priyadarshani",
  answer: "Divine Soul,\n\nTake care of these 4 things-\n\n(1) Make sure you have a deep desire to reach goals.\n\n(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n\n(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\", \"worry\", “doubt”, “victimhood” etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n\n(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
},
{
  id: 391,
  header: "Full circle?",
  question: "Right from childhood I was so dedicated to the Gods that I used to talk to them; I used to recite prayers with dedication and concentration every day and then when I finished school my results were totally differenet from expectation and my whole life changed. Slowly but steadily I started moving from one bad habit to another till finally I stopped reciting prayers altogether. All along I started hating every day of my life but recently I have been wanting to get back to my earlier routines. But even then I am still unable to make myself do that. Today, as I read the first chapter I suddenly feel that I may still have a chance to get back to being my old self . I just hope Lord Hanuman makes it hppen at the earliest.... Lord please help me get closer to you I also hope that Lord Hanuman will help me get out of the total mess I am in right now? Will it happen Lord? If so, when?"
},
{
  id: 392,
  header: "Full of Confusion",
  question: "Hi...My name is Raghavendra.I am completed B.tech and working for TCS( multi national Company) now.Since my childhood, I had two dreams in my life. 1) A beautiful looking girl who should love me immensely and I should marry her only in my life.I proposed 4 girls in that search and all got flop.I am still searching for a beautiful girl who would give me immense love and I would also marry her.I have no interest in other girls once she comes in my life.Help me for this please.... 2) I should earn a lot of money in my life and look after my parents like a King and Queen.They should have no complaints of anything.Not only them, I should also look after my relations and give all of them a posh life.I should help poor by contributing crores of rupees for them.And here also I want my life partner(my love) help me by being my side in all my sufferings. I am 24 now and not able to fulfill these two dreams are making me depressed a lot.I am not at all satisfied with my life.Please help me ASAP.....And I am LORD HANUMAN Devotee.I chant Hanuman Chalisa everyday..and most of the times twice a day. Please Please Please help me... :( :( :(",
  answer: "Divine Soul,\n\nWe have two advices for you.\n\n(1) Every human being is unique. What works for others may not work for you. Do some soul searching. Sit at a quiet place and rewind your life. Think. From childhood what has worked best for you. How did you meet new people. How those new people became part of your life. Was there any effort from your side. If yes, what was your approach. Similarly, think about success. How did you get success/failure. Find out the patterns from your life. And make decisions according to those patterns. Do not copy approach of others. Instead follow what works best for you.\n\n(2) Think. Whenever a good news of something came in your life, what were you doing? Were you anxious about your future? Were you normally enjoying your life or were you stressed about your future? Were you expecting the good news when it came? In most of the cases, good things happen in life when you are enjoying life in the present moment. Find what is true for your life so far. According to that switch gear.\n\nWhen you follow the patterns of your own life instead of following advices from others, your body mind and spirit becomes in sync with the supreme self of Lord Hanuman. Then only His powers best work in your life.\n\nBlessings"
},
{
  id: 393,
  header: "Full of Confusion",
  question: "Continuation from #30656 Presently I am close with 2 girls.With first girl,I am spending a lot of time talking and thinking about her as I feel that she is my soulmate.Even she likes to talk to me but less than me. I feel that she is perfect for me.What should i do now ??? How to know that I am right.?? Other girl started talking to me and sent friend request to me on facebook.And generally showing a lot of interest in me, but I have no feelings for her. I am very much desperate to meet my soulmate.After her arrival, I wont even have the need to see any other girls also.I want to be like Shri Ram and searching very hard for my Sita. And regarding the search of Soulmate , I have never taken any advice from others.I did what I feel good.But no success. :( :( :( Please help.....",
  answer: "Divine Soul,\n\nSoul-mate cannot be found outside. You have to find her within. When you find her within, she will automatically appear before you in physical form too.\n\nDo not assign label of soul-mate to anyone who comes in your life. Rather connect with your own soul. More you connect with your soul, more clearly visible your soul mate would be.\n\nBlessings"
},
{
  id: 394,
  header: "Full of Confusion",
  question: "Continued from #31246 I am not able to do soul searching.I am feeling very disturbed.Please help me how and at what time I should do soul searching.I am working.I start at 7 in the morning and reach home by 11 pm.So, very stressed and in this time, I also spend time with my love.I have proposed her, she has yet to accept it.But never stops me when I am saying \"I love You\" or if I am taking care of her. Is she the right woman for me.How can I know that.How can I win her love.Please help me.",
  answer: "Divine Soul,\n\nYou do not need separate time for soul searching. Whatever you do, wherever you are, you can do soul searching. it just takes a second. What all you have to do is just back off from your body level and come to your soul level. This will also release all the stress and increase your efficiency in whatever you do. It will remove all your fears and pressures. You have to just become an observer for one second. Just observe what your body and what it is doing. Forget names and identities of people around you. Unlearn everything for a second. Imagine that you are a troglodyte for a second. Then get back to whatever you are doing.\n\nAs for love, be patient. Everything will take place at right time.\n\nBlessings"
},
{
  id: 395,
  header: "Gaining inner peace",
  question: "Every single time, after reading each chapter, i am not sure if i did feel light, all i understand and feel is that, a sense of safety and peace that lord hanuman is out there watching and protecting all his devotees in any form. The more i read and understand each chapter, the more reasons i find to read mahabaratha, ramayana,To learn more. Great job guys. God bless"
},
{
  id: 396,
  header: "Gangavataran.",
  question: "I had a thrilling experience of Gangavataran, and very glad to have the Knowledge of Mathangs, Passed on to us by Setu.Hanuman Raksha Sarvada. Jai Hanuman,Jai Hanuman,Jai Hanuman, Jai Hanuman, JAi Hanuman."
},
{
  id: 397,
  header: "garbh ke andar aatma kab pravesh karti h",
  question: "mera nam aakash kaushik h or me prabhu hanumanji ka ek chota sa bhakt hu. mera sawal hai ki jab aatma muktisagar se bahar niaklti h tab vo 9 mahino me se konse mahine me garbh ke andar pravesh karti h arthat karan sharir kya h or iska faisla kon karta h ki aatma garbh ke andar kab pravesh karegi.",
  answer: "दिव्य आत्मस्वरूप ,\n\nगर्भवती होते ही यह निर्धारित हो जाता है कि कौन सी आत्मा उस नई देह को धारण करेगी | लेकिन आत्मा तभी प्रवेश करती है जब देह माता की देह से अलग हो जाती है | तब तक आत्मा इन्तजार करती है |\n\n||राम||"
},
{
  id: 398,
  header: "Get rid of Sins",
  question: "As life progresses and I get to know about world, I feel sorry for sins that done in childhood in influence of environment around me. I have done those sins to fulfill body desire. Today when I think about those, I feel guilty and very sad. I do not know how to get rid of those sins. Please pray for me in Sakchat Hanuman Puja. So that GOD forgive me for those conduct that I have done in ignorance and crossed my line. Also confirm to me that Lord Hanuman has forgiven me for those conducts.",
  answer: "Divine Soul,\n\nYou have to forgive yourself and forget those past memories. You are what you choose to be. Your identity is dynamic, not static.\n\nTo understand this, take this example. Suppose Lord Hanuman is sitting on top of a mountain. You want to climb the mountain to meet Him but you have a heavy baggage on your back. You cannot climb unless you give up that baggage. Instead of giving up the baggage, you pray to Lord Hanuman, \"O Lord, please lift me along with my baggage.\" That is not going to happen.\n\nIf you want to meet Lord Hanuman, you need to get rid of the baggage. Same is the case with your bad past. You have to get rid of it. Once you forget it from your memory and forgive yourself for that, Lord Hanuman will embrace you. He has already forgiven you. Now you have to forgive yourself.\n\nBlessings"
},
{
  id: 399,
  header: "Getting lord hanuma's blessings in my dreams",
  question: "I am a very small devotee of lord hanuman. I live in Bhopal (madhya pradesh state) India. It all started in year 2015 that i began to experience out of body experiences, some mantra was heard when i closed my eyes. I even saw a beautiful lady clothed in red.Took medical help but it didn't help. Then someone took me to Shri. Rawatpura sarkarji's asharam in MP. He suggested me to ask for help from hanuman. I started his pooja in 2007 and after 2 years i started feeling heat in my body,shaking,vibrations. Whenever i go to any hanuman temple and pray i begin to shake. Whenever i recite hanuman chalisa,bajrang baan or hanuman bahuk i experience vibrations and shaking. whenever i listen to ram bhajans i cry. Last year i saw lord hanuman in my dream coming out of picture(of lord hanuman i pray to) and keeping his hand on my head,another dream where i saw him sitting on aasaana and i am pressing his feet and he is smiling. I also see dreams of tigers and lions standing at my house entrance. i talked to people with hight spritual level some says he is happy with you, some says pray to south facing hanuman and he will help you out,some says it is your kuldevi. I am confused ? Can you help me ?",
  answer: "Divine Soul,\n\nYou are having out-of-the-body experiences. Most of the people live at the level of body-mind. Only blessed people get to have experiences at the level of Chitta (consciousness) and at the level of soul. You are living two different realities. Through your body-mind, you are very much attached to this world and people around you. Through your soul, you are very close to the supreme power. These two opposite realities are causing this friction. You should lower your attachment with the Maya or the outer word and embrace the higher reality you are blessed to experiences.\n\nBlessings"
},
{
  id: 400,
  header: "God is Great",
  question: "It was just few minutes ago, i was left to wonder how come i didnt receive an email for the next chapter, and when i refreshed my email, i was shocked to see the email for setuu website. God is Great. He heard me undoubtedly. Shri rama jayam"
},
{
  id: 401,
  header: "God Hanuma saved me",
  question: "Once I traveled in RTC Bus last seat. When that time, I prayed Lord Hanuma with Dandakam (in telugu). That is habit to me, whenever I go to office or some other places from home in the morning. After completion of One stage in the bus, suddenly one Lorry Hit our bus, whereever I am sitting (back side). But nothing will happen to me., because I am studying Hanuman Dandakam at that time. Some one fell in front door. After these incident, many functions and good things, good decisions are occurred only on TUES DAY ( which is GOD HANUMAN's auspicious day). I need some answers from Mathangs. 1) Whenever we pray starting for Hanuma, first Hanuma will test the devotee, and create problems to him. If he tolerate ( bearing). Then Hanuman will help him long life. Is it correct ?",
  answer: "Divine Soul,\n\nThis is not true. Lord Hanuman does not create problems for His devotees. They face problems because of their own old Karmas. But when you start connecting with Him, the bond between devotee and Lord Hanuman becomes so strong that everything which happens to the devotee He start seeing the origin of it from Lord Hanuman. That is a good sign. That shows that the devotee has formed a strong bond with the Lord. When the bond becomes strong enough, Lord Hanuman starts removing the problems.\n\nBlessings"
},
{
  id: 402,
  header: "God Hanuman Ji",
  question: "God Hanuman is bigger god i am to say god hanuman ji hanuman ji meri naya par karo muge bhav sagar se par lago or meri samyso ka haal de do prbhu."
},
{
id: 403,
header: "god or alien",
question: "Vartman me samay samay par dusre grah ke praniyo ki upasthiti ko anubhav kiya ja rha h jinhe alien ke nam se pukara jata h. Ufo ka dikhna ya manusyo ke alava kuchh chhote kad ke saphed hare ya lal prani bhi dekhe jate h. Mai hanuman ji se janna chahta hu ki jo aj kal scientist kahte h ki wo alien hi bhagwan h kya ye sach h?",
answer: "हो सकता है उन्होंने सुरों अथवा असुरों को देखा हो | वे भगवान् नहीं हैं |"
},
{
id: 404,
header: "The Good and The Bad",
question: "Hello,\nOur last conversation helped me a lot. I used to assume a lot. But your path helped me to move away from assumptions.\nI am replying after a long time. Work keeps me busy. Today I read the chapter about Linga Shastra. It has definitely 'peeled off' few more layers of assumptions. But one thought keeps lingering in my mind. We had already discussed about 'the good' and 'the bad' in previous conversation. Your answer to that query was satisfactory. But in this chapter, I once again came across these words viz; the good and the bad OR the positive and the negative.\nLord Vishnu is all about positivity. Lord Shiva is all about perfect balance of the positive and the negative. How do these Gods define positive and negative?\nFor example, the tiger eats the cow. Is Tiger a negative force? Is it a bad fellow? Tiger kills its prey for survival. Is he bad? A thief robs a person. Is the thief bad? He does it for his own survival. It appears that 'the good' and 'the bad' are relative terms. What is 'good' for me, may not be good for others. What is bad for me, may be good for others.\nHow should we look at these terminologies?\nThank You for reading. I humbly request you to show me the path.",
answer: "Divine Soul,\n\nThere is a 3 dimensional space around you. Your body moves in that space. How do you denote that space geometrically? You draw three axis : x-axis, y-axis, z-axis. You can denote location of an object in the graph of these axes.\n\nThe way body moves in space dimensions, your soul moves in the Karma-desire dimensions. Imagine your soul as a point in the graph of x,y,z axis. In every axis there is positive side and negative side.\n\nSo when you do something in this world which accumulates negative Karma on you, your soul moves on negative side of Karma-axis. And when you do positive Karma, your soul moves in the positive side of Karma-axis. This way your soul's Karma-Desire coordinates keep changing. It is similar to change of location of your body in space.\n\nIf your soul remains at negative side of axis (AsurLoka), then also you are trapped in the illusion. If you are only at positive side (i.e. you are in VishnuLoka), then also you are trapped. Even if you are at zero (In BrahmaLoka), you are trapped. If you keep oscillating between negative and positive i.e. if you are indifferent to both positives and negatives (in ShivaLoka), then also you are trapped.\n\nThe truth lies beyond positives and negatives.\n\nBlessings"
},
{
id: 405,
header: "good and evil",
question: "From chapter number 6 as hanumanji explained about sura and asura.... does it mean that the cause of increase in eartlhy calamiyues and the phenominon like terorrism, smuggling, rapes , murders and corruptions are all the wishes granted asper the rule of trideva or all they all preplanned so that lord vishnu can once again come to earth to cleance this earth and provide moksha to human souls and reassign the sura and asura on earth????",
answer: "Lord Vishnu can never grant a wish which has evil consequences but Lord Shiva can. \"Universal Law of Trideva\" pertains to all three supreme deities- Brahma, Vishnu and Shiva. If an evil desire is expressed, then that desire shall also fulfill according to this law.\n\n\"Preplanned\" depends on the observer. The supreme deities have seen this world going through cycle of Kalpa again and again same way. Hence they can call it \"preplanned.\" But you have not seen the Kalpa happening before your eyes. You cannot call it \"preplanned\". You should perceive it in terms of desires and their fulfillment through Universal Law of Trideva.\n\nBlessings"
},
{
id: 406,
header: "good and evil 2",
question: "In continuation to # 492639... thanks a lot for replying sir but I am far more curious now... I want to know why would lord Shiva fullfill the evil wishes when lord Vishu won't .... they all are different forms of the same energy and have always maintained the balance of nature.. why will one like to disturb it ??? Lord Shiva has been assigned the duty of destruction of the evil when it upsurges.. then why would he full fill the evil wishes as per the law of trideva ?",
answer: "Divine Soul,\n\nThere is distorted and misinterpreted knowledge embedded in human mind of Kaliyuga. Therefore if you seek true knowledge in its purest form, you should flush out whatever you have learned so far and read Lord Hanuman's Leelas. Then only you can get answer to your queries systematically. For example in 6th chapter, Lord Hanuman speaks of Surrahs. If you go by the popular knowledge, people have mistranslated \"Surrah\" as \"Gods\". Therefore people say there are 33 Crore Gods. But if you have read Lord Hanuman's Leelas, you would know that Surrahs are not Gods.\n\nYou should wait for upcoming chapters to clear your misconceptions about Shiva, Vishnu and Brahma. In the meantime you should think why Lord Shiva granted boons to evil Ravana but Lord Vishnu (in Rama avatar) killed Ravana?\n\nBlessings"
},
{
id: 407,
header: "Good & Bad Times in Life",
question: "I am currently going through tough phase in life . My career wherein i lost my job in the month of August 2014.It's being almost 4.5 months ,am struggling to get a new job,but didn't succeed in my efforts as yet . Going through the 3rd chapter of my greatest lord,Shri HanumanJi, i learned that we all are in the web of time in which like a conveyer belt there are Up & Down phases in life ,these phases are nothing but Good & Bad times.\nNowadays there's a lot of Competition and High expectation in the Job Market. We have to put in more efforts to meet the expectations to get a good Job in the Market.\nAs the time Gap of me being jobless is slowly increasing , i am feeling a little restless & Insecure with not getting success.Kindly guide me the way forward with your divine thoughts.Is it possible to know when would i get success in my Job search efforts.\nKind Regards.",
answer: "Divine Soul,\n\nThis prayer was made part of Sakshat Hanuman Pooja today and Lord Hanuman responded. However his symbolism could be best understood only by you because only you know about your past. Our interpretation is as follows:\n\nProbably you are expert in two fields. One field was chosen by you (Primary field), and another field was chosen by life itself for you (Secondary). Some unexpected things happened in your life and life taught you many things in that secondary field. You have been made jobless in primary field because Lord Hanuman wants you to take some free time and think about the secondary field. Probably this secondary field has some larger interest of society.Disconnect yourself from worries of job for 24 hours. Just go blank for 24 hours. You might get some signal from Lord Hanuman. Once that message of Lord Hanuman is delivered to you, the blockage will be cleared. It does not mean that He wants you to abandon the primary field. He just wants you to realize goal of your life. Once you realize that, you shall see some positive developments either in your primary field or in the alternative path suggested by Him.\n\nBlessings"
},
{
id: 408,
header: "Good & Bad Times in Life",
question: "Continued from #37022 :---\nDear Sir,\nI had a deep thought for 2 days after reading your message. What i understood after my thought process is that my Primary Field is to follow all the things a normal human being does in this world like go for a bright career, take care of family,earn money,assets etc.\nWhat i understands about the secondary field which is created by life is that i have a habit of doing sewa or service . I offered my sewa's or services to my father when he was ill since last two years,which a son is supposed to do . My father was having no moral,emotional or financial support from my grand father, also in between my father lost two of his brother's.He was suffering from ill health and demoralization for last 15-16 yrs due to this.\nSince last 3 yrs i took utmost care of my father ,wherein i took the responsibility of his treatment.\nI think my greatest lord shri Hanuman Ji wants me to do the sewa or services to other people of society also,in the form of feeding the poor,helping a poor in need.\nI hope i understood my lord's message correctly.\nAlso i wish i shall get a good job as soon as possible.\nI also wish to pray for my elder brother to be blessed with child.He also had a very struggling life.He lives in city of jaipur in the state rajasthan.\nKind Regards.\nAbhishek Gautam.",
answer: "Divine Soul,\n\nA service cannot be counted as expertise. Lord Hanuman spoke of two fields of expertise in terms of your profession. However it is good that you tried to channelize your thoughts. You should see the results soon.\n\nBlessings"
},
{
id: 409,
header: "Good & Bad Times in Life",
question: "Continued from #37022 :---\nDear Sir,\nI had a deep thought for 2 days after reading your message. What i understood after my thought process is that my Primary Field is to follow all the things a normal human being does in this world like go for a bright career, take care of family,earn money,assets etc.\nWhat i understands about the secondary field which is created by life is that i have a habit of doing sewa or service . I offered my sewa's or services to my father when he was ill since last two years,which a son is supposed to do . My father was having no moral,emotional or financial support from my grand father, also in between my father lost two of his brother's.He was suffering from ill health and demoralization for last 15-16 yrs due to this.\nSince last 3 yrs i took utmost care of my father ,wherein i took the responsibility of his treatment.\nI think my greatest lord shri Hanuman Ji wants me to do the sewa or services to other people of society also,in the form of feeding the poor,helping a poor in need.\nI hope i understood my lord's message correctly.\nAlso i wish i shall get a good job as soon as possible.\nI also wish to pray for my elder brother to be blessed with child.He also had a very struggling life.He lives in city of jaipur in the state rajasthan.\nKind Regards.\nAbhishek Gautam.",
answer: "Divine Soul,\n\nA service cannot be counted as expertise. Lord Hanuman spoke of two fields of expertise in terms of your profession. However it is good that you tried to channelize your thoughts. You should see the results soon.\n\nBlessings"
},
{
id: 410,
header: "Good & Bad Times in Life",
question: "Dear Sir,\nOn this auspicious occasion of Hanuman Jayati. I would like to tell that with the grace & love of my lord shri hanuman Ji, i finally got a job offer. Finally my hard work paid & lord shri hanuman's blessings showed results.\nOn the occasion of hanuman jayanti, i again would like to pray for my elder brother, let lord hanuman's blessings remain with him too. Let shri Hanuman pardon him for whatever mistakes done by him unknowingly.\nMy elder brother has suffered lot of miseries of life. I sincerely pray for him to have a place on my lord's feet as i have."
},
{
id: 411,
header: "A good feeling",
question: "Jai LORD HANUMAN\nA little bit happiness has come to my life.I have just cleared a pre exam and got shortlisted for main examination.\nLORD HANUMAN KEEP BLESSED ME .I NEED ONLY YOUR BLESSINGS FOR MY EFFORTS and forgive me for my wrong doing.\nKAUN SO SANKAT MOR GARIB KO JO TUMSO NAHI JAT HAI TARO.\nBEGI HARO HANUMAN MAHAPRABHU JO KACHHU SANKAT HOY HAMARO.\nJai bolo Mahavir HANUMAN JI KI."
},
{
id: 412,
header: "Good Karma Vs Bad Karma",
question: "How do I categorize a good karma from a bad karma?\nIn this Loka, we lie everyday for something. Sometimes we call it white lies as we say those not to hurt our loved ones. The intention behind that is good but it is still a lie. Is it all bad karma then?\nSimilarly, there are many emotional confusions we go through everyday. Sometimes we give in and do something that justifies in our mind and sometimes we don't. How do I tell good from bad because it all can be relative. Please explain more in detail.\nThanks\nAnnie",
answer: "Divine Soul,\n\nYes, there is no absolute list of dos and don's, good and bad.\n\nWhat you do as per your Dharma is good Karma and what you do against your Dharma adds to your bad Karmas.\n\nNow Dharma is also soul specific. In any situation, two different souls can have two different Dharmas. When you are in a situation, you should decide what is your Dharma. In the example given by you, you should ask yourself, \"Is my Dharma telling truth or keeping my loved one happy?\" Then do what your Dharma says. That would count as your good Karma.\n\nIf you read Mahabharata, you can know concept of Dharma better.\n\nBlessings"
},
{
id: 413,
header: "Got answers to a lot of questions",
question: "Jai Hanumanji, Pranams .... I am visiting the Ragi gudda temple at bangalore for the last 8 years every saturday .... and I believe I got access to setuu as a result of Hanumanji's grace...... I have been praying to help me get my soulmate for the last 8 years .... I believe marriage is not happening due to my past karmas.... the understanding I got after reading the chapters helped me to deal with the situation and not go into depression ...\nI am thrilled to know about how Hanumanji could go to pathal change the past so that our present is secured and go to vyahruthi to change our future ....also equally thrilled to learn about kaal and the strings of time . understanding body moves on space -time co-ordinates while soul moves on karma-desire co-ordinates has answered a lot of doubts and queries I had about human life ....also understanding Moksha as a state of being desireless and Mathangs as a race prefer higher knowledge to fulfilling desires is awe-inspiring .....\nThough my ultimate aim is to become a mathang ( read being desireless) , I am in the current birth unable to overcome this desire to marry and lead a gruhastha life ...Please convey my prayer to Lord Hanuman so that by his grace he could help me find my soulmate and help me get married soon . There are no words that could explain the happiness one gains by reading the chapters ..the level of knowledge is supreme and ultimate ... Pray Lord Hanuman blesses setuu to continue the Good work .\nThank You ,\nYours sincerely,\nVishwanath"
},
{
id: 414,
header: "Got saved",
question: "This event occurred in the year 2010.\nThat time I was working for a company and was posted in Bhubaneshwar. My family was in kolkata. I uaed to travel to and fro from Kolkata to Bhubaneshwar quite often on my car during the week ends.\nOne such day I was travelling back from Bhubaneshwar on my car and started in the morning and was in a huury to reach back to kolkata. I was traveling in a brisk speed.\nAs I was travelling - suddenly I started chanting Hanuman Chalisa. Here I must mention that fee months back I was advised by someone to start chanting Hanuman Chalisa daily. And gradually I started chanting by reading line by line as I couldn't memorise it fully. But that day suddenly I felt the chant is coming quite automatically and i kept chanting without any disxomfort and i kept driving.\nI was speeding across almost at a speed of 120 kms per hour. It was a smooth and wide road. Hence no question of stopping.\nTill i arrive in a place where I found a number of truxks parked in the side of the drive way. It was a long queue. But still there was enough space which allowed to to keep my speed intact.\nSuddenly I swa an elephant appeared from no where by the side of the parked trucks and was dangerously blocking my passage. On sighting this i had shaken a bit and my steering went out of control. Immediately I realised I have lost my control. And didn't know what to do.\nI applied break and found I am off the track and luckily it was a graas land on the other side. I started rotating the steering and applied break and after some time as the speed came down I gradually got control on my car and croosed the elephant and slowly go back to the driving track.\nI was totally shock strikken. Only realising why I was made to chant the Hanuman Chalisa just some time back.\nI strongly belive it was his blessing that I could avoid a sure accident which could be fatal enough.\nI believe it was his wish that I am still alive .\nJai Hanuman Ji\nRegards\nSwarnabha Guha"
},
{
id: 415,
header: "The Gr8 Lord Hanumanji !!!",
question: "Hey Bhagwan Hanumanji,\nYahan par jo matangio ke dwara apke sath rehena ka anubhav bataya hua hai tinon chapters mein wah bahut adbhut hai waha padhkar ahesaas hua jaise ke aap mere sath hi hain mere paas hi hain. Shukriya ke apne muje is kabil samjha aur yahan tak pahuchaya apke bare mein sunne ka, padhne ka apko karib se janne ka saubhagya prapt karvaya.\nAgar mere ya mere parivaar se pure hamare is jivan mein ya kisi bhi janm mein jo bhi galti hui hon kripaya hamein apna baalak, bachha samajhkar maaf kar dijiyega. ham nadan hain manushya hain isliye hamse galti ho gai hogi lekin aap to hamare param pita parmatma hai aap mein hi waha kshmata hai ki aap hamein maaf kar dein. Hamare jivan mein anewali sabhi chintaon, badhaon, shok, rukavaton ko dur kar dijiyegaur hamari Raksha kijiyega. Agar shanidev bhagwan ya aur koi bhi graha-nakshatron ki dasha hamare jivan mein badha rup ho rahi ho to unhe kripaya dur kar dijiyega.\nMeine Saarangpur hanumanji se jude dadaji se apke pas mere aur mere bhai ke liye jo vidhi karvai thi usko kripaya swikaar kijiyega aur hamne jo us mantra ka mala-jaap shuru kiya hai us puja ko kripaya swikaar kijiyega yahi meri dil se apse prarthana hai aur agar us puja ko karne mein hamse ki bhi galti ho gai ho ya truti rehe gai ho to hamko maaf kar dijiyega.\nApko to hamari jivan ki saari samasyaon ke bare mein pata hi hoga aap to sarv gyani, trikal darshi hain, antaryamin hain to apse bus yahi prarthana namra nivedan hain ki meri, mere pure pariwar ki aur mujse jude sabhi logon ki samasyaon ko Nirakaran kar dijiyega ham sabhi ka uddhar kijiyega....Muje pura vishwas hai ke mere dil ki ye bat aap tak jarur pahunchegi. Muje aur mere pariwar ko apke darshan jarur ho sakein aisi shuddh ichha hai ham sabki aatmaein hamesha apse judi rahe aisa hamko bana dijiyega. ham hamesha apko yad rakhein, apka ahesas rakhein aur apko kabhi na bhulein aisi hamko sadbuddhi dijiyega.\nSetuu org. mein apka bahut abhar - shukriya manti hun ke apne muje yahan tak pahunchne ke lye madhyam bane.\nMein Matangi se yaha saval puchna chahti hun ki mere aur mere bhai ki shadi mein itna vilamb kyun ho raha hai kab tak hogi hamari shadi ? kab tak hame dono ko apna apna jivan sathi milega taki hamari maa ke jivan ki jo sabse badi samasya hain jisse wo dukhi-chintit hain wo dur ho jae. aur meri aur mere bhai ki koi achi jagah job-naukari lag jae aur meri bhai ko jo bachpan se bimari taklif hai wo jad se dur ho jaye yahi sawal hain jo mein unse janana chahit hun ho sake to mere sawalon ke uttar jald se jald jankar bataiyega.\nAapka khub khub dhanyawad. Jyada se jyada atmaein is site dwara hanumanji se jud sake yahi dil se prarthana hai. Hanumanji ka ashirwad sab par hamesha bana rahe yahi unke Shri Charanon mein mer prarthana hai.",
answer: "Conveyed to the Lord in MahaShivaRatri Pooja."
},
{
id: 416,
header: "The grace of Lord Hanuma",
question: "Recently we visited Tirumala for darshan of Lord Shri. Venkateshwara on 21 August. Our Kalyanam tickets were booked for 22 August. By standing in the que line we were able to secure tickets for the early morning Angapradakshina seva on 22 August. It almost took 2 hours for waiting and getting the tickets. We had to report at Vaikuntam que complex at 1 0'clock. In the evening we went and visited Japali teertam. This is the place where Sri Rama and Maata Sita stayed there along with Hanuma. There is a small temple which is dedicated to hanuman. We had a good darshan of the lord and came back to the room. It is a long walk with many steps both sides coming and going to the teetham. I was very tired.\nMy daughter-in-law had arranged the alarm for 12am for Angapradakshina. I never rely on alarms.\nAt exactly 11:44 pm I was awoken by a pleasant voice in my left ear saying the mantra Kaaltantu Kaarecharanti Enar Marishnu\nNirmukter Kaaletwam Amarishnu\nThis mantra was so sweet, that I got up forgetting all my pains and problems and did all my tasks and was able to do the Angapradakshina without the slightest discomfort. From the moment the mantra was spoken into my ear, I am still experiencing the same blissfulness and feeling the grace of Lord Hanuma.\nJai Shri Ram."
},
{
id: 417,
header: "Grace of Lord Hanuman",
question: "I have full faith and trust and also an ardent devotee of Lord Hanuman. He has solved my several personal problems indirectly.He is graceful enough to remind me of His presence on this Universe whenever I likely to forget His Name(smaran) during my prayer. Indeed I am and will ever surrender to His feet for all time to come for His grace and blessings on me. However, as an human being having materialistic desires, I pray Lord Hanuman to free me from all problems both financial and personal, which He is quite aware by minimising my karma, at shortest period. I have already suffered enough of upheavals in my life so as to enable me to renounce the worldly affairs and to serve Lord Hanuman during the remaining period of my life."
},
{
id: 418,
header: "Grace my mother with your blessings",
question: "Jai Hanuman.\nI have started explaining Sri Hanuman leelas to my mother, who was very much interested in materialistic world and had influence of Assurrahs. I have completed explaining her till chapter 9, and I am seeing some change in her behavior and the influence of Assurrahs are reducing. Still it seems she is interested in materialistic things of this world. She believes in teachings of Babas/Sadhus by watching television daily. She believes in miracles. I request Lord Hanuman to bless her Soul with Supreme Knowledge that will lead to Moksha and make her free from influences of Assurrahs.\nAlso I request Lord Hanuman to bless my children and my wife with good health, knowledge and courage to face the difficulties in their lives.\nThank you Hanuman.",
answer: "Blessings"
},
{
id: 419,
header: "grant moksha to my beloved mother",
question: "JAI VEERA HANUMAN\nU have supported me every time which i had wished for.\ni know i have commited many mistakes....\ni just want my mother soul to rest in peace..grant her moksha.....please do take care of her hanuman ji..... which i had failed to do inspite of being her son......hope this message reaches u........jai hanuman.."
},
{
id: 420,
header: "Grateful",
question: "I express gratitude to Lord Hanuman for enlightening my existence through these chapters from the Matang's log and Settuu org for sharing this\nJai Shri Hanuman"
},
{
id: 421,
header: "Grateful",
question: "Hello, I have had several small experiences where I felt like I was being smiled at by Lord Hanuman, or where I was being told not to worry about life. I've just begun to study and learn about him and Lord Ram and the Ramayana. But most of all now I want to say that I am very grateful to have found this site. I don't know whether I am enlightened or not, but I hope that I am a good person. Also, because I can't always read the stories online, I did copy them to my computer for my own personal reading lessons. The Leelas of Lord Hanuman are powerful and I believe that I am fortunate to have discovered them. I am also grateful for the efforts of the Setuu organization in being respectful of the Mathang tribe and the wishes of Lord Hanuman in translating these Leelas for those who may need them. Thank you for this.\nNamaste."
},
{
id: 422,
header: "gratitude",
question: "dearest loving lord, with your blessings and grace we are able to do this dearest and nearest anjineya tomorrow, on 11th jan 2015 is this body birthday pls bless with your grace and love and bless me I should love swami and serve him pls catch my hand and take me to HIM with lots of love your brother soul brother Chandra shekar"
},
{
id: 423,
header: "Gratitude",
question: "I always feel the presence of Hanumanji near me..I believe strongly that no one can do harm to me or my family...whenever I was in danger lord Hanuman always save me.where I standbin life all because of Hanuman jee..and today I am waiting for another miracle....hope Hanuman ji save me from that too...I am grateful to Hanuman ji for whatever I achieved in my life..."
},
{
id: 424,
header: "GRATITUDE",
question: "I express my heartfelt gratitude towards the supreme lord, hanuman ji , & The setuu team for blessings our lives. i am short of words to express the bliss i am experiencing after the reading.i do not know why but tears kept rolling out of my eyes in most of the chapters.now even looking at a pic of hanuman ji brings tears of bliss out of my eyes. i pray to the holy feet of lord to help us all get out of the illusion and May the BIG \"I\" in us be dissolved on to your holly feet. jai sita ram hanumanta..."
},
{
id: 425,
header: "Gratitude to God",
question: "Jai Siya Ram\nJai Hanuman\nFirst of all I bow my head before all Gods. Although I respect all Gods equally, yet I must say I am attracted more towards Lord Hanuman. I don't know why and how but I have been very much attracted to Lord Hanuman since childhood.\nI believe in prayers. Before starting anything, I rarely forget to remember God. Most of the times, God listens to my prayers but sometimes my prayers go unlistened. I don't know the reasons behind this. May be my Karmas are not enough or may be it is not in my fate or destiny. But these unlistened prayers never ever shattered my faith in God even a bit.\nToday, I thank God from the core of my heart for giving me such a beautiful life. My life has not been bed of roses. It has been full of ups and downs, yet I appreciate it. I am very much thankful to God. I thank God especially for two things. First for getting my masters degree from one of best institutes in the country in which I always wanted to study and second for my first job in one of the best companies of IT Industry. The time spent at these two places are really very memorable and I am not going to forget any moment spent here ever in my life.\nToday, I don't have a job. I have been jobless for around a year now. Yet I thank God for giving so much to me. Also, I thank God for all the things which God will give me in future. I am looking for a good, permanent and stable job with handsome salary. And I believe that God will surely fulfill all my dreams very soon.\nO Lord, please fulfill all my dreams. Let me be happy and content. I request Lord to fulfill my dreams so that I concentrate fully towards Moksha after fulfilling all my Karmas(responsibilities). Please give me a sound mind and a healthy body. Please purify my soul so that I can have your darshan. Let my body and mind be in my control and free from Assurahs. Let my body and mind do worldly things and my soul connect to you. Keep your blessings on me forever and ever.\nI am also very much thankful to Setuu and Mathangs. Please accept my sincere pranam. Had you people been not there, souls like me would not have been able to connect to Lord Hanuman in a better way.\nThanks and regards.\nJai Siya Ram\nJai Hanuman"
},
{
id: 426,
header: "Gratitude to God - 2",
question: "Jai Shree Ram\nJai Maa Jaanki\nJai Hanuman\nI bow my head to the holy feet of Hanumanji. Pranam to Mathangs and Setuu masters.\nFirst of all, I like to thank God for the life which He has given to me. I believe that whatever and wherever I am today, it's just because of God. He is always there to protect me against all odds.\nAround one year ago, I was to come to a different city in search of job. I was very much bothered about where would I live in such a big and unknown city and how would I search job. But due to God's grace I got a very good place to live in and got some good people who helped me and are still helping me. It has been an year living here. Thank you God. I really thank you from the core of my heart. This was a big problem which got solved easily. However, I haven't got a job as yet. It has been an year here searching for a job but I didn't get any. But it hasn't shattered my faith in my God even a bit. I strongly believe that very soon God will give me a very good, permanent and stable job. I have full faith in my God. My life may not be going as I have planned, but it's surely going the way God has planned it. And God's planning would be 100% better than that of my planning. God knows very well what to give me at what time. He knows very well what would be best for me in the long run. So, I have surrendered myself completely to God.\nOnce again, I thank God for everything in my life. I also thank God in advance for all the good things which will happen with me in future. O God, please keep your blessings on me forever.\nThank you Mathangs. Thank you Setuu.\nRegards."
},
{
id: 427,
header: "Gratitude to Lord Hanuman",
question: "My Dear Lord,\nI am writing this note to acknowledge your beautiful gifts in my life.\n1. Hey Prabhu, i am grateful to you for providing me all that is needed for live a comfortable life.\n2. Hey Prabhu, i am blessed by you with two beautiful children Maahi and Aadi.\n3. Hey Prabhu, i am grateful to you for giving me loving and caring parents.\n4. Hey Prabhu, i am grateful to you for giving me a beautiful, caring and chaste wife.\n5. Hey Prabhu, i am grateful to you for blessing me with good job and colleagues.\n6. Hey Prabhu, i thank you for instilling in me a light of Bhakti of Lord Vishnu/Lord Krishna.\n7. Hey Prabhu, i am grateful to you for loving and caring me in all my births i have taken since time immemorial.\n8. Hey Prabhu, i will always be grateful to you for showing me the righteous path in my life to attain the Holy Abode.\nThank you. Thank you. Thank you.\nYour Dasa,\nMayukh Sinha ."
},
{
  id: 428,
  header: "Gratitude To Lord Hanumanji",
  question: "\"Jai HARIVAYUGURUBHYONAMAH\"\n\nMy sincere Prayers, Gratitude and Remembrance to the Lotus Feet of the Lord.\n\nDearest Lord, Please remember me and Awaken Your name in the form of constant remembrance of Sri Ramji and Hanumanji.\n\nAlways keep me in Satsang of your devotees.\n\nAlmighty My LORD,\n\nThanks for everything"
},
{
  id: 429,
  header: "Gratitude towards Lord Hanuman",
  question: "Dear readers, First of all I would like to express my gratitude and feeling blessed to be given this opportunity in providing my thoughts and queries to Lord Hanuman. I am a sincere devotee of lord Hanuman ever since my birth. I always have this belief that he is bonded to my soul and whatever challenges and hardship I am experiencing is HIS test to make me more confident. OM JEY SRI HANUMAN, the only mantra I have been telling before starting my prayers. Right now, I have completed my studies in engineering and looking forward for job related to my field of study. I have applied to most of the companies and it's been almost 4 months there is no call for interview. And I am getting news that few companies are not even taking in newcomers. I been through disheartened period, yet I still believe HE is saving the best one for me . Whatever situation and challenges I am put into, I am seeking Lord Hanuman blessings. I wish this would reach all devotees and I pray everyone would be blessed too. Lets be strong to face our hardship. Take care all. Jey Sri Hanuman."
},
{
  id: 430,
  header: "Great dilemma whether mother who gave birth is correct or husband with whom I decided to spend life with",
  question: "My husband has a very bad temper that always puts me and my people in great sorrow and shame. I have a fear that his anger and adamant nature may someday end our relation. We are from different cultures and initially my mother was not happy with the proposal. But my father and in laws supported the alliance. Eventually my mother also accepted the relation. Recently my younger sister got married within our culture. I and my husband generously supported the marriage financialy. But my mother tried to create misunderstanding about my in laws in the minds of her relatives. My husband also feels deep inside that the younger son in law will be accepted more by my parents. There has been a huge misunderstanding which I am not able to resolve.\nLord Hanuman please give me the brahma gyan to understand prabhu's leela.",
  answer: "Divine Soul,\n\nIf you resolve this, something else will come up. This is part of human life. Brahma Gnan enables you to rise these human emotions so that you feel these emotions as an observer and not as a subject of these emotions. Start observing people and human emotions. Observe them like you observe waves of an ocean while you sit on a beach.\n\nBlessings"
},
{
  id: 431,
  header: "Great Experience.",
  question: "Lord hanuman is the very powerful ideal in whole world.\n\nHar insan ka sukh dukh me sath dete or har manokamna puran b karte h.\n\nhumne is bat ko bhut bar dekha or smjha h.\n\nJAI BAJRANG BALI.\n\nJAI SHREE RAM."
},
{
  id: 432,
  header: "Great experience",
  question: "Lord hanuman has always been a part in our life.he continues to be so now also.he blesses us every now and then.my son and son in law are true devotees of Sri anjaneya."
},
{
  id: 433,
  header: "Great peace of mind...........!!",
  question: "Jai Hanuman , कालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णु कालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णुकालतंतु कारेचरन्ति एनर मरिष्णु , निर्मुक्तेर कालेत्वम अमरिष्णु jai Hanumaaaaannn!!!!!"
},
{
  id: 434,
  header: "The greatest friend",
  question: "There have been many instances in my life where I was supposed to carried away to the other world, but I am thankfully alive. I am not even 21 years old and have almost survived 5 or 6 accidents which could have been fatal. As a person who believes in GOD with my life, thanking him is not even too close to say. I usually call the male GOD as THANDE and the female one as THAAYI as they are my parents. They have fostered me and they have taken care of me in such a way that I can distinguish myself from the others. When the modern youth like to party hard, and act in the so called modern way, I like to read about Hinduism and atleast try to be a moral and an ethical person to say the least. My only wish at the end of the day is to be a good human being and a good devotee. I would like my THANDE and THAAYI to be proud of me and tell that he is my son. And I shall work for that.\nAnjenaya Swamy, I am sure you won't leave my hand. I am sure you know my devotion to you. I shall always be like you wanted me to be. Thank you for everything."
},
{
  id: 435,
  header: "Guidance",
  question: "Raam Raamay namah.\nOm Hari Markat Markataaya Namah.\n\nMy Lord,\n\nPlease guide me when will I get my eternal Guru who will guide me through the path to liberation (If I've already met with him/her, why he/she is not paying any heed to my sufferings ?). Also, please guide me through the way to find and reach the holy feet of my mother (Ofcourse, U know well. what & whom I'm talking about). Can I join your benign holy presence to spend my remaining life in your holy feet leaving behind my wordly name and relations ? Please tell me the process for the same.\n\nShree Seeta Raamay Namah.\n\nSoul Mukesh.",
  answer: "Divine Soul,\n\nDo not seek a Guru. Seek the supreme truth. An appropriate Guru shall automatically walk in your life in some form or formless. If you seek Guru, you are likely to get a wrong one.\n\nBlessings"
},
{
  id: 436,
  header: "GURU",
  question: "CONTINUED FROM #32810\nJAI SRI RAM\nThank you for reply\ni have one big query that what is the actual process to look upon a Guru\nall this life we are educated through a guru as a mother ,teacher ,father then waht is the real method to look for a Guru. i already trust on hanumanji then what is making him as Guru\nand i am a married woman and a mother can i make Hanumanji as a Guru will he accept a woman woman as his shishya . People say that married one should not worship more hanumanji . is that true please reply\nwhen all his leela only then why given birth to us what is right way to live life .. i am very suffocating with these question is the bible say about creator is right? are we ruled by davil nowadays . whom should i believe tell me i am hindu finding answers for my questions what the purpose of god to create this leela why it is necessary it may take time to get answer by myself please help me to find it i am feeling helpless and confused\n\njai hanumanji",
  answer: "Compare these two scenarios:\n\n(1) Somebody tells you, \"You are a good person\"\n\n(2) You yourself feel, \"I am a good person\"\n\nThe same information coming from two sources. When it comes from outside, it touches your mind and ego. Just imagine how would you feel when somebody else tell you that you are a good person. Your mind will react according to the image it has about the person who is saying so. Your mind will react according to the ego you have built about yourself. (Ego means sense of \"I\". It is not a bad thing.)\n\nNow imagine how you would feel when you yourself feel that you are a good person. The information you receive from yourself touches your soul. You do not react to that information. You just feel it.\n\nNow, in simple words, an information coming from Guru is received by the disciple as if the information is coming of his/her soul itself. Not from outside.\n\nYour Guru becomes your soul.\n\nNow , another question. See, the relationship between Guru and disciple is not at the level of body and mind. It is at the level of soul. \"Men\", \"Women\" etc are classifications based on body structure and feelings of mind. At the level of soul, we are same. Soul is not male or female, married or unmarried. Soul is Soul.\n\nBlessings"
},
{
  id: 437,
  header: "GURU",
  question: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Ram Hare Ram Ram Ram Hare Hare\nMahaPrabhu Sri Ram Ke Param Priya Bhakt evam Sevak Mahaveer Hanuman ke Sri Charan Kamal mein Koti Koti Pranam.\n\nDear Master,\n\nIn my heart I have accepted Sri Hanuman as my Guru.\nI will also tie a red thread around by wrist as a sign that Sri Hanumanji is my Guru.\nPlease disclose the secret mantra that Sri Hanumanji have given so that I can also repeat and have sakshat darshan of the Lord.\n\nI have full faith that Sri Hanumanji will bring me to a level where according to my karma will have sakshat darshan of Sri Hanumanji.\n\nNamaste"
},
{
  id: 438,
  header: "Guru Dikhsa",
  question: "Jay Hanuman ji, Jay Anjani mai.\n\nI am very much engaged in the worldy matter to fullfull my duties towards my family (wife & one child) but i want sanyas from this life and devoted my rest life in hanuman devotion.\n\nI am very much devotte of Maa Kali alongwith Hanuman Ji and i want to worship them whole heartidly but am facing several issues . I dont know any mantra & i always call hanuman ji & maa kali for darshan but they didnt came yet. I didnt get any guru dikha & i need guru diskha for a proper mantra to call maa kali & hanuman ji.\n\nPlease ask hanuman ji to help me for giving darshan of maa kali & himself to me and also give guru diksha to me.\n\nI am crying daily for a darshan of Hanuman ji & Maa Kali. Please help , please help for darshan of hanuman ji & maa kali.\n\nPls help hanuman ji .",
  answer: "Divine Soul,\n\nFirst become eligible to get the Mantra. Don't take family as a hurdle. If you have got family responsibilities, fulfill them. Practice detachment while fulfilling family responsibilities. That would be a great Sadhana.\n\nBlessings"
},
{
  id: 439,
  header: "guru ji se pararthna..",
  question: "Me 2 Sal pahle bahut hatas v niras Ho Gaya tha...parntu mene jab se sree hanuman ji Ki bhakti sru Ki h mera Kalyan hi Kalyan h...me hanuman ji ko apna guru banaya h...me sree hanuman ji mere guru dev se yahi prarthana Karta Hu Ki hamesha mere v mere pariwar par kripa banaye rakhe v mera v sampurn visva ka Marg darasan kare..v mujhe bhi baraham gyan lene layak bana kar mujhe bhi Vo Divya barahm dayan de v mera har manirath purn kare....mere gurudev hamesha mujhe apne charno me sathan deve aisi mete guru se meri pararthna h...."
},
{
  id: 440,
  header: "GURU,LORD & GOD HANUMAN JI - Mera Mata & Piita se shuru hoai Vaansh Vraksh Par BAGWAN & PRABHU kai Bhakti Prasad kee saidaiv vaarsha kartai raihai, aur saidaiv AAP SABHI GODS & GODDESSES Kee Sabhi Prakaar Ki Kirpa Drashti baani Raaihai",
  question: "Oh, Our GURU , LORD & GOD In particular HANUMAN JI- We all love YOU and give Us The Good Minds, Hearts and Souls that We shall continue to do so, till YOU & we are there in this Universe and Beyond.\nTake all of us in YOUR FEET services.\nWe would be highly Obliged.\nJai Shri Ram"
},
{
  id: 441,
  header: "Guruvyur temple and dwarika",
  question: "Jai Shri RAM,\nNamaskarm,\n\n1) as you discussed in the 9th chapter the whole granthas And other old literature corrupted or mixed, or changed\n\nKindly guide us from where we will get original grathas.\n\n2) please explain truth of lord Guruvyur Appan temple,thrishur,Kerala. It's idol and dwarika, Gujarat.\n\n3) is this Muslims or Muslim religion are asuras..\n\n4) we get obstruction for doing good deed or good devotional work by...\nMy father's second wife,,\n\nShe always quarelled,demanding non veg foods,fighting, scoulding my father\nShe cooks food without bathing..\n\nShe cooks non veg foods in the evening time when me and my father is praying and Sandya deepam\nShe is greedy.\n\n5) how we see naked eye to Shri Hanumanji.\n\n6) I have studied MSc Agri. But presently I don't have any job,and I did not get married.\nEconomic conditions going worst..\n\nPlease guide me..\n\nWhere presently hanumanji staying..\nAnd many more questions..\n\nJai Shri RAM..\nJai Hanuman.",
  answer: "Divine Soul,\n\nOriginal Grathans are not available. The oldest copies of these texts which are available in this world are also corrupted. For supreme knowledge, Lord Hanuman's recent Leelas are the only source of which 10 chapters have been deciphered. More are being deciphered.\n\nWe have not come across any content related to the temple mentioned by you. If we get any content in Lord Hanuman's Leelas, we shall publish it.\n\nAsurrahs are in everyone in this time of Kaliyuga. No human being is free from influence of Asurrahs. They have captured body-mind of almost all human beings. Some are fully captured by Asurrahs while some still have control on their body and mind. It has nothing to do with any religion.\n\nYour step mother's body and mind are fully captured by Asurrahs. The only way to loose grip of Asurrahs is to show her that you are not affected by her behavior. If you show that you are getting affected and irritated by her behavior, the Asurrahs will more intensely show their colors. Just show them that you are not affected by whatever she is doing.\n\nTo have Sakshat Darshan of Lord Hanuman, you need to purify your soul. Supreme knowledge is the only way of purifying the soul.\n\nIt seems the environment at home is affecting your progress. Do not waste your energy in trying to change your step mother or anyone else. Just concentrate on your life. You will get success as there is no other obstacle.\n\nBlessings"
},
{
  id: 442,
  header: "gyan",
  question: "jab se mai es gyan ko prapt kiya hu meri dimag se bahut sare sawalo or bhrantiyo ka nash ho gaya hai .es gyan ke samne mujhe sab kuchh jhuta lag raha hai.aap dhany hai bajrangbali aap jaisa bhakt koe nahi hai sansar me jai shri ram."
},
{
  id: 443,
  header: "A Halo encircling the sun",
  question: "Lord Hanuman,\nToday I experienced an unique phenomena. .... at around 11-11:30 am. ..I was morally very down and missing my maa when I could spot a beautiful halo encircling the sun....came to know from Google that it is also called 22 degree halo.\nPlease let me know whether there is any divine meaning associated with this event....since lot many scientific explanations are available in sites....actual divine relationship can be explained by you only....pls explain the divine meaning of such wonderful natural phenomena\nI wouldn't have experienced such phenomena unless my mother's sister had called us to experience the same...pls do bless her.\nI am sending the photographs vide email.\nWill be eagerly waiting for the reply Lord",
  answer: "Divine Soul,\n\nAll the powers of the universe are saying to you, \"Embrace the Change.\"\n\nBlessings"
},
{
  id: 444,
  header: "Hamare Hanuman",
  question: "Main bahut hi khush hu ye sb pad kr or aj main poore vishwash se kh skta hu ke bhagwan aj bhi hamare aaas paas hai....or har waqt hme dekh rhe hai..\nOr question aapse hai ki dharm granthon main likha hai ki jo hota hai accha hota hai..or jo beet gya ab usse bhi accha ho in sbdon main kitni sacchai hai...or ...\nEk question ye bhi hai ke aapne bola ki hmsbki aatma shudh nhi hai to main punchna chaunga ki hm aisa kya kr skte hai jisse bhagwan hme apne layak smjhe or hm bhi bhagwan se mil ske or hme iss moh maya se mukti mil sake or hm bhagwan ke charon main ja sake..\nAapke answer ka intzaar rhega......!",
  answer: "क्या आपने अपने जीवन में अनुभव नहीं किया है कि जो होता है अच्छे के लिए होता है ? आपका प्रश्न इस सन्दर्भ में क्या है कृपा विस्तार से अपनी अगली पोस्ट में लिखें।\nआपका यह जीवन आपके जन्म से शुरू हुआ है लेकिन आपकी आत्मा हज़ारों वर्षों से यही पर विभिन्न जन्म ले रही है। अशुद्धियाँ जन्मों जन्मों से इकट्ठी हो रही हैं। एक समय था जब हर आत्मा शुद्ध रूप में दैवीय देह में थी। उसके बाद ह्रास शुरू हुआ। आत्म ज्ञान से इन अशुद्धियों का नाश होता हैं। श्री हनुमान जी को अपना गुरु मानिए। उनके द्वारा कहे गए शब्दों और लीलाओं को पढ़िए। वे आपका भी मोक्ष का मार्ग प्रशस्त करेंगे।\nमंगल कामनाएं।"
},
{
  id: 445,
  header: "Hamesha kripalu",
  question: "When I was pregnant first time I visited hanuman mandir every evening... I am blessed with healthy and very well behaved and intelligent boy...I read ramayna then and I found so many qualities of Lord ram in my son.. I am pregnant second time and I wish to have a baby girl this time... May hanuman ji bless me this time too..."
},
{
  id: 446,
  header: "hamesha meri problem solve ki hai",
  question: "ek baar nahi kitni baar mere eeshth hanuman ji ne sirf yaad karne bhar se meri essi mushkilen hal ki hain jinka koi solution nahi tha. log agar chamatkaar ko namaskaar karte hain to hanuman ji se sache man se keh kar to dekhen khud namaskar karenge."
},
{
  id: 447,
  header: "Hanuma experience",
  question: "Dear ALL,\n\nThis was an experience I had few years back. May be 4 years has been passed since then. It was a silent afternoon and I was alone at home reading some book about meditation/philosophy. I did not realize when I fell asleep but I clearly remember feeling as if I am pulled into darkness and I do not have any power to get out of it. The only thing I do was chant Hanuman's name asking to help me out. This is when a miracle happened!\n\nI saw a shadow of Hanuman (With one arm in Blessing pose and holding Gadhe in his left hand). The darkness around me vanished instantly and I felt like someone telling me \"I am with you\".\n\nI do not know how to express this feeling but that is the day I realized my prayers are heard by my beloved Hanuma and he came in my rescue.\n\nJust wanted to share this with you all.\n\nHope someone can give a better, deeper explanation of my experience.\nThank you - Jai Bajarang Bali!"
},
{
  id: 448,
  header: "hanumaan ji se prashan",
  question: "agar hanumaan ji sach mein isi dunia mein hai toh woh baaki dunia waalo ko kyu nahi milte yaa dikhayi kyu nahi detey kya hum sab unke bachey yaa unka parivaar nahi hai kya hum sab bhi unke sachey bhakt nahi hai hum sab bhi toh hanumaan ji se pyaar karte hai aur unki pooja karte hai kya woh hame kabhi darshan dengey",
  answer: "दिव्य आत्मस्वरूप ,\n\nवे कही नहीं गए हैं , कलियुग के मनुष्य चेतना के नीचले स्तर पर चले गए हैं | ब्रह्मा ज्ञान द्वारा अपनी चेतना का स्तर उठाइए , वे आपको साक्षात् मिलेंगे | उनको अपने स्तर पर लाने की इच्छा रखने की बजाए , आप आत्मा के स्तर की और प्रस्थान कीजिए जहाँ हनुमान जी विद्यमान हैं |\n\n|| राम ||"
},
{
  id: 449,
  header: "Hanuman",
  question: "A few years ago, One day i was going to a shop to buy a file.at that shop shop i had seen Vagwat Gita published by geeta press and i bought a copy..with that copy the shopkeeper gave me a copy of hanuman chalisa.the surprising fact is that after a monyh later an astrologer also advised me to worship lord hanuman..till date i regularly worship Sankatmochan Hanuman everyday..\nI think it is Mahaveer who saves me from every bad situatn of my life..one can easily get the fruits of Hari bhakti through the worship of param Ram vakt Hanuman..\nHe anjanisut, vayuputra, laksman prandata, sankatmochan, mahaveer, maharudra, mahaprovu Hanuman kripa korke mujhe is dukh se bahar nikaliye.."
},
{
  id: 450,
  header: "hanuman",
  question: "meine 6va adhyay padha. muze padhate wakt aeisa mehsus hua ki kuch mere andar se nikala. thodha mein halka mehsus kar rahi hu. muze aur ek baat mesus karani thi. ki mere janmdin ke din muze aisa mehasus hua ki jaise hanuman ji ne mere sar pe haath rakha. kya muze aap baata sakate ki kya such mein hanuman mere ghar pe aye the.",
  answer: "जी हाँ , वे आपकी आत्मा के समीप आये थे, आपके घर पर नहीं | आत्मा का कोई space coordinate नहीं होता | या यूँ कहें कि सभी आत्माएं एक ही बिंदु पर होती है | जब आप आत्मा के स्तर पर उठते हैं तब आपको हनुमान जी का सामीप्य अनुभव होता है |"
},
{
  id: 451,
  header: "hanuman",
  question: "I know I am no one or not even close to think abt hangman this way, but I am soooo proud of him. He has gained so many wonderful deciples across the globe and seeing the love all of them have for him, makes me feel so happy for him. Hanuman if\ngiven a chance I wish upon the stars n moon that I will be able to at least hear ur bell sound which is tied to ur tail....96"
},
{
  id: 452,
  header: "Hanuman",
  question: "I always get lot of energy after reading every Hanuman chapter. I actually wait for them.\nMy prayers are answered by Hanuman. Thank you Hanuman. My Husband is somewhat confused about his career. Please help him, Give him what he wants."
},
{
  id: 453,
  header: "Hanuman",
  question: "from the last 15yrs I have been a humble devotee of Hanuman ji. .he has graced me with many visions of his..several times I have seen him jumping out of his pic and standing beside my bed..sometimes he is huge with bluish hue &at other times v tiny &all red flying past me..inspired by Him my family constructed e temple dedicated to Him &the temple also hosts an idol of Shiv ji Ganesh ji &shivlingam. ..often I have seen him sitting there a young red monkey &sometimes a v old man...Once after a long holiday when I returned home &entered the temple I heard a loud Jai shrr Ram ..I thought I was hallucinating but this happened again when I entered the temple after after a gap of few days &since then whenever I enter this temple after some gap of time I am greeted with Jai shrr Ram chant...amazing !!! its said that women should not touch hanuman idol but I do all the sevas of his idol &now I know he treats me like his Anjana maa..when I am angry he pacifies me when I am in distress or a painful situation he consoles me..he is my son now..in my meditations he has taken me so deep within connecting me with my soul & awakening so many energy channels paving a path for higher possibilities. ..from the last 6 days I have been doing the 1st line of setu mantra Kaaltantu kaarecharanti,..I didn't know it was so powerful..just few minutes into this mantra &my body starts dissolving &I see myself in a v ancient hanuman temple painted in red & a vv old man sitting in a corner..could be him!!! since I have been doing this mantra I am in a state of intoxication..but now I want to see him in person ..be with him..merge in him...can I visit mathangs",
  answer: "Blessings."
},
{
  id: 454,
  header: "Hanuman- The benevolent",
  question: "Sai Ram,\nJai Hanuma,\nGreetings to all my brothers and sisters. It gives me immense pleasure to write my experience with Lord Hanuman to you. This was in 2012/13. I have a practice of visiting Lord Vinayaka of Kudumale, Kolar dist., Karnataka every year as a thanksgiving when my son graduates to next standard. Place called Mulbagilu, dedicated for Lord Anjaneya is very close by.( Lord Anjaneya is said to be installed by Arjuna here. Here the lord is seen with a sword and not Ghadha.)Therefore we visit him also on our every trip. On the above mentioned year, after visiting Lord Vinayaka, on the way to Anjaneya temple, I discovered Lord Narshimha's temple(it is said Lord Narshimha sat to rest here after he started off from Ahobila). So...it consumed lot of time when we were knowing the Stala purana. I knew I was late to Lord Anjaneya's temple because the temple would close in the afternoon. So I rushed my family immediately to the car. I was down hearted because I knew I was going to miss his darshan. Suddenly a sense of calmness encompassed me. I turned to my husband and said, \"listen temple will be closed by now. But Hanuman will see to it that we have his darshan and then depart.\" Waiting to see how my faith is going to give fruit we headed towards Hanuman's temple.\nHere was the twist. As we got close to the temple, I saw a man's back. I was so curious just by looking him from back. He had a matted hair. He wore a shirt and a dhothi which was dirtier than the word dirty. He was drinking tender coconut and all the monkeys had gathered around. He seemed least bothered about the world around him. I felt I should give him some money(it must be noted that this incident happened so fast than my understanding) I stopped the car and called out to that man. He turned to me and lo!!!what should I say about his beauty. I had never seen someone with such radiance on face. It was opposite to the dress what he was wearing. His eyes shined with brilliance. I was curious to see what mark he wore on his forehead. It was just some kumkum smeared across. I stretched out a note of rupees 10 and told him to eat food from that money. He just noded his head and walked away. We were awestruck looking at him, we discussed him till we reached the gate of the temple. On reaching we found the temple was closed as expected. But we had great sense of calmness that lord had kept his promise.\nI being an agyani, sinful how and why did he give me darshan. Doubt started to crop in my mind. I thought about it almost every day. If it was really Hanuma why is he not removing the problems in my life. Why am I having so may confusion, stress, helplessness, defeat...\nIt was three months after this incident, one night I had a dream that I am in a temple of Lord bala Hanuman (bala means child) standing in namaskara mudra. I stood with my family in front of him and were praying. Suddenly I see that idol of the Lord moving. First I see his eyes moving. I am telling my family, \"see the murthy has come to life. His eyes are moving. When my family begings to identify it, Lord manifests there in front of us. He said looking at me \" Rama Rama Rama Sita Rama Rama Rama, Rama Rama Rama Sita Rama Rama Rama. \" and he instructed me to repeat. I did accordingly. When we all chanted what he taught. I saw him, he was dancing in joy. And then...my dream broke. This was my experience which I have shared with you, other than my family. I hope that my experience is not made fun off. Thanks for all the patience you have taken to read.\nIf you permit me I have a question to ask. Even now at this point of time I am not peaceful. I have gone to see many saints, temples but still I can't find peace and harmony. I keep asking Lord Hanuman, why am i not chanting that mantra that you have taught? What is stopping me from attaining you?????? I am yet to get answer. Dear Setuu, if you are committed to your words please help me? I am not able to achieve tranquility of mind. Though i was so close to him what is the wall separating us?? Why is my Mukhya Prana not running in my Prana??\nWaiting for your advice with all trust and love.\nRadha.\nSai Ram, Jai Hanuman.",
  answer: "Divine Soul,\n\nThe souls who are very close to Lord Hanuman get roller coaster of experiences, because those souls deserve Moksha. In order to assist those souls in their journey towards Moksha, He makes sure that the soul gets opposite experiences frequently. The opposite experiences means, Happiness-Sadness, Darkness-Light, ignorance-knowledge, and so on. A soul gets Moksha when the soul rises above these opposites, and doesn't indulge in any of the opposites. That is what is happening with your soul.\n\nBlessings"
},
{
  id: 455,
  header: "Hanuman bhakt",
  question: "Me hanuman ji ka bhakt hu or hr mangal bar unki pooja b krta hu pr me adhiktar ram ji ka nam japta hu. Mujhe ye btaye k kya ye theek h? Me hanuman ji ka bhakt kya mera har samay ram nam japna theek h?\n\nBaise bachpan se hanuman ji ne meri hr murad poori ki h\n\nJAI SHRI RAM\nJAI HANUMAN JI",
  answer: "पवित्र आत्मस्वरुप ,\n\nयह पूर्णतया उचित है |\n\nराम ||"
},
{
  id: 456,
  header: "Hanuman Bhakth",
  question: "I am a devotee of Lord Hanuman. I love him very much. I think the story of lord hanuman coming to Srilanka is true. I would have liked to see hanumanji before my death. I will pray more sincerely. I wish i can travel to Srilanka to actually see those people who have met hanumanji. I will touch their feet since they have already had a darshan of lord hanuman"
},
{
  id: 457,
  header: "Hanuman in bus",
  question: "This happen to my father where he was in the bus had travelling with his friends on the way to Tirichi. On of his friend had indigestion and his stomach started to bloat. A lady in the bus started to meditate so can use spiritual power to neutralise it.Out of sudden my dad who was in the bus he saw he walking across in the bus with orange dhoti. He was shocked where I suppose to be back home not here and the next moment he saw mahaprabhu veera anjaneya swami walking behind me across the bus, stand a while, turn look at my dad, smile and walk away.A big light spark and it seems both of us disappeared. He started to tear in bus and everyone questions him reason he blast into tears and the lady who sit in meditation told him \"Sir, I do saw what you saw \"and smile.."
},
{
  id: 458,
  header: "Hanuman Chalisa",
  question: "Hello,\nHanuman Chalisa had been written at around 16th Century.. Does Mathangs also offer prayers through hanuman chalisa..? Its just written in 16th Century.. so was there any other method before to pray before that to Hanuman ji..? Does Hanuman ji talks about hanuman chalisa and its importance in day to day life..? Please throw some light on Hanuman Chalisa..\n\nThank you",
  answer: "Divine Soul,\n\nUntil Treta Yuga, people could see Lord Hanuman in the Ashram of their Gurus, or randomly in mountains (away from mainstream society). There was no need of Mantras. Only a desire to meet Him was enough. In Kaliyuga, humans lost their contact with Lord Hanuman. Guru tradition was still there. Every caste/category of humans had a Guru. Those Gurus used to discover/realize (through Lord Hanuman) Mantras which were applicable only for the caste/category that Guru belonged to. That too disappeared. In the time around 16th century, communities had no Gurus. So Lord Hanuman revealed a general Mantra called Hanuman Chalisa to a sage. Because it was revealed by lord Hanuman Himself, it became famous across various communities.\n\nNow is a very different Time. Now people are too much into visuals, very less into words. Visuals are vehicle of illusions, word is the vehicle of divine. So the word (Hanuman Chalisa) is not effective for people who are too much into visuals. Why?\n\nA devotee in 16th/17th/18th/19th century could chant Hanuman Chalisa and visualize Lord Hanuman's Leelas as per his own vision. So even though Hanuman Chalisa was only general Mantra, each devotee had a unique manifestation from this Mantra.\n\nNow when you chant Hanuman Chalisa, your mind visualizes scenes from various TV serials/movies related to Lord Hanuman. Those TV series/movies are not created by any sage. They are created by ordinary film makers. So your visualization of Lord Hanuman's feats is adulterated by visualization of a single person (director/writer of movie).\n\nPerhaps, that is the reason Lord Hanuman has made His Mathang Leelas public. May be through the words being published through Setuu, people can connect better with Lord Hanuman. These words are so powerful that visuals of TV serials don't fit in mind of reader. So the reader visualizes a unique visual of Lord Hanuman. Probably this is the Time in Kaliyuga where combination of Mantras and Supreme Knowledge is necessary to connect with Him.\n\nAs far as Mathangs are concerned, they have their own Mantra of 36 lines. They do not chant Hanuman Chalisa. We had published 3 lines of this Mantra but after that Lord Hanuman did not give permission to publish more lines. Either people misused these lines or they pronounced them wrongly. Lord Hanuman will give permission to publish these 36 lines if they are meant to be for all devotees in general. Let us wait.\n\nBlessings"
},
{
  id: 459,
  header: "Hanuman Chalisa ka Chamatakar ....",
  question: "24 year ki thi tab mai ne Hanuman Chalisa ka har din me 40 bar har roj pathan kiya , aisa 40 dino tak pathan aur pooja ki aur meri sari mano kamana puri hui. aur sankat kal me unko kabhi bhi yad karo wo kisi na kisi rup me aakar madat karate hai. meri mother-in-law ne muze 4 bar jan se mar ne koshish ki lekin wo kabhi safal nahi ho pai. 5 wi bar unoh ne koshish ki tab unake jan par hadasa ho gya tha. tab wo bhot darr gai thi, aur muze puchahne lagi tu kis bhagawan ki puja path karati hai? 1 week tak wo sirf muze dekh ti rah gai. iske bad unoh ne kabhi aesi harakat nahi ki. aur mere pati se juda nahi kar pai. shata-shata-shata koti dhanyawad Hanumanji...... sabhi bhakato ke uapar Hanumanji ki krupa-drushati rahe."
},
{
  id: 460,
  header: "hanuman chalisa shakti",
  question: "helped me in every needed time of my life."
},
{
  id: 461,
  header: "Hanuman Darshan",
  question: "Hi\n\nWe from the mortal world, we always have many endless desires in life. why we always have problems in life, is it because of the past life karma.\n\nOnce with his eyes we want to see Hanuman. want to end all this problems in life. Please ask this question to Mathangas for the Hanuman Dhrashan.\n\nRegards\nAshok",
  answer: "Divine Soul,\n\nIf you try to find answer to this question yourself, it will help you come out of all problems of life. Instead of seeking a ready made answer, find your own answer. It will help your soul in coming back to path of Moksha where you will have Darshan of Lord Hanuman.\n\nBlessings"
},
{
  id: 462,
  header: "hanuman darshan",
  question: "mein jab bhi hanumanji ka adhyay padhati hu. muze bahot achha lagata mein. mein jab bhi apani aankhe band karati hu tab muze hanuman ji ke darshan hote hein. ab to meine hanuman chalisa padhna bhi chalu kiya hein. muze aise bar bar lagata hein hanuman meri baate sunate hein.mere man ki har baat woh jaanate hein. raat ko mein so ti hu to muze unke darshan hamesha hote hein.gehri nind mein hoti hu to muze dikhta hei ki samane kai sari building hein aur ek building ke baju se hanuman ji ko mein dekhti hu. mano jaise unki nazar muz per hein. muze bahot achha lagata hein. aisa kai bar mere saath hua hei.aaj unki vajah se mein apne life kaffi behater mehsus kar rahi hu."
},
{
  id: 463,
  header: "hanuman darshan",
  question: "meine setu ka 8 va adhyay padha, muze bahut halka mehsus hua. muze setu ke sabhi adyay achhe lagate hein. iname muze 8va adyay bahut pasand aaya. mein samaz gayi ki makardvaz hanuman ji ka putra nahi tha. mein jab bhi setuu ka adhyay padhti hu apne aap ko bahot halka mesus karati hu.aur muze kai bar band aankhonse hanuman ji ke darshan bhi hui. ab mein unke khuli aankhon se darshan karana chahti hu. aap jab ye mera post padhe to aap hanuman ji se jarurr prarthana kare ki mere mann mein koi paap na aaye. aur burai muze kabhi chhu na sake."
},
{
  id: 464,
  header: "hanuman darshan ke liye aur kitni pratiksha karni hai....",
  question: "Aap sabhi ko naman. aap sabhi sey yeh vinamra prarthana hai ki yathasheegra hanuman sakshat darshan ke liye nirdharit unn 36 pankhtiyon ko sheeghra athi sheeghra pradan kari jaye.......\n\naapke aabhari\nsoul( vyoam namah dheham)",
  answer: "पवित्र आत्म स्वरुप , अकेले मंत्र का कोई लाभ नहीं जब तक उसका अर्थ न समझा जाये और अर्थ हनुमान जी की लीलाओं के अध्यायों में निहित हैं | जैसे जैसे अध्यायों को समझकर हम प्रकाशित करेंगे वैसे वैसे हनुमान जी की अनुमति से वे पंक्तियाँ भी प्रकाशित करेंगे | || राम ||"
},
{
  id: 465,
  header: "HANUMAN G KO CHARAN SPARSH",
  question: "ME HAMESH SE HI HANUMAN G KI POOJA KARTA RAHA HU AUR UN PAR ATOOTH VISHWAS HE. JAB BHI MUJHE KOI SANKAT GHER LETA HE MUJHE SIRF HANUMAN G HI YAAD AATE HE. KYONKI UNKE SIVA JALDI SE SANKAT KAATNE WALA KOI NHI HE. YE CHIRANJIVI HE ISLIYE APNE BHAKTO KI PUKAR JALDI SUNTE HE YE MERI KHUD KA ANUBHAV HE. ME HAR MANGALWAR KO MANDIR JAATA HU AUR MUJHE BAHUT SHANTI MILTI HE. MUJH PAR KUCH SAMAY SE MERE APNE HI TANTRA KAR RAHE HE MUJHE MARNE KE LIYE. MERE PAS HANUMAN G KE SIVA KOI NHI HE. ISLIYE ME UNKI POOJA ARCHANA KAR RAHA HU AUR UNKE MANTRO KA JAAP BHI KAR RAHA HU.\nMUJHE UNPAR VISHWAS HE KI VO MUJHE JAROOR BACHA LENGE."
},
{
  id: 466,
  header: "hanuman is great",
  question: "first iam thank ful to your site because day by day there is a vast change in humans\ni have complete faith on hanuman , now ima in the cadre of a superintendent due to his blessings as in first chapter i read i am in illusion about this dirty world means kama krodha madam , my ambition is to chant sundara kanda like a song every day but iam not doing it but from to day i will start"
},
{
  id: 467,
  header: "Hanuman Heals",
  question: "Whenever I have felt anxious about my health I come across Chapters of Setuu orgn. After reading the chapter I get a blessing from Lord Vishnu through Lord Hanuman"
},
{
  id: 468,
  header: "Hanuman - the immorta lord",
  question: "i have read hanuman chalisa 108 ti,es for several times to fulfill my wishes and they actually get fulfilled within 15 days of reading hanuman chalisa.\n\nis this true that reading hanuman chalisa 108 times fulfills my wishes and does hanumanji listens to my prayers???\n\nhanuman is an avatar of shivji???\n\nand last one :- The last avatra of vishnu will take birth at which place and who would be his mother??",
  answer: "Lord Hanuman works to fulfill all the wishes which reach Him. But wishes reach Him only when a devotee rises above body-mind and realizes his/her soul. In your case, you rise above body-mind by chanting Hanuman Chalisa.\n\nLord Shiva has many forms but He has no avatar.\n\nMystery of Lord Kalki is yet to be unraveled. It is still not known where He will take birth. But we will know it soon.\n\nBlessings"
},
{
  id: 469,
  header: "Hanuman the Immortal soul(Pancha Mukhi Hanuman)",
  question: "Seetu:\n\nThis chapter has tremendous amount of knowledge about spiritual and deep knowledge. Lord Hanuman has express the true knowlodge about soul, were are not body or mind nor anything we are completely soul. Soul can be travel any space and time without any trouble. Whoever will read this all chapter will feel the presence of hanuman and will have his darshan."
},
{
  id: 470,
  header: "Hanuman Jauyanti.2-3rd April.",
  question: "On the night between 2 & 3rd\nApril, I had a very beautiful experience, for more than an hour. However I cannot describe it in words and I hope this comes again.\n\nI seem to be flying less of late. I don't know why.\n\nI repeat Hanuman Chalisa 4 x 11 times a day. Sometimes I am repeating it in my dream. And sometimes I am repeating it voiceless in my mind.\n\nI haven't started the mantra chanting as yet and don't know if I should do it voiced or unvoiced or both.\n\nI am very grateful to Hanuman for the progress I have been making from so many problems.\n\nMy blood type is Rhesus B negative which is very rare and it seems that it is not terrestrial. What are my extra-terrestrial connections, because I see my home is in another planet and I don't belong to this world.",
  answer: "Divine Soul,\nThis Mantra are to be recited in the state of transcendence. In that state, time and space lose their meaning. In that state, only a soul speaks to Lord directly. The body and other parameters of physical world have no meaning.\n\nBlessings"
},
{
  id: 471,
  header: "hanuman jee bhakti",
  question: "Mujhae, meri behan anju, meri ma aur mera friend ram ko hanuman jee ka kripa huwa hae hum apnae jiwan Mae hanumanjee ka jeewan var bhakti karna chahatae hai hanuman jee hamae kripa karae aur hamae aasirwad dae aur hamara dukh dard mitayae aur hamae sukh dae aur hamara aatma sudh kardae aur buraiya sae bachayae aur hamara iccha pura karae aur hamae sadbuddi dae aur sadaiba gyan ki vandar pradan karae.Hae hanuman jee humae harek janm mae aapka bhakti karnae ka awasar pradan karae aur hamae moksh pradan karae............hanuman jee aap humae sapnae mae darsan dae..........hum par kripa karae hanuman jee.....hum aapkae kripa prasad kae Liyae apnae jholi failayaetae hai humae kripa karae......jai shree ram........jai siyaram.........jai hanumanjee............."
},
{
  id: 472,
  header: "hanuman jee k prati sharda bhav",
  question: "Main pehle mansahari tha mutton mujhe bahut acha lagta tha lekin jab se prabhu hanuman jee k sharan main gaya tab se ab mutton khane man nahi karta jeevan k bhaut sari rahin aasan se hoti chali gayi\nJai sri ram jai hanuman"
},
{
  id: 473,
  header: "hanuman ji",
  question: "apke dwara kiya gya post mene bhut dhyan se pda or muje bhut pasnd bh aaya.... meri bh icha h ki me bh hanuman ji se milu, me bh unhe dekhna chahta hu. mere ghr ke samne bh ek hanuman ji ka mandir h... ar sath hi sath is mandir me unke bete makrdhvj bh virajit h mene apni life me kbh esa koi hanuman ji ka mandir nh dekha jisme unke bete makrdhvj bh unke sath virajit ho... muje sapne me ek bar hanuman ji ka aabhas hua tha pr koshish krne ke bad bh me unhe apne sapne me dekh nh paya tha.. to islye meri bh icha h ki me hanuman ji ke darshn ek bar jarur kru"
},
{
  id: 474,
  header: "hanuman ji",
  question: "Today I got my happiness all because of hanuman Ji.....my wish is to see hanumanji in reality......hanumanji please never let me leave alone......ap mere sab kuch ho ....Bhaiya papa mummy guru best frnd everything.....please mere mummy papa Jo bi wish maangte hai unhe pura kareyega hanumanji.....n ap kaisr hai...meri saari khushiya apko mummy papa ko mil jaye....jai agree ram jai hanumanji ki"
},
{
  id: 475,
  header: "Hanuman ji",
  question: "Mera hanuman ji aapse yai prashan hai ki aap humse rushat toh nahi hai prabhu jai bajrangbali",
  answer: "बिलकुल नहीं |\n\n||राम||"
},
{
  id: 476,
  header: "hanuman ji",
  question: ".ek bar hanuman jaynti ke din me aur meri behan gallery me baithe the, hamara ghar 3rd floor pe hai, tabhi achank tej roshni aiii esiliye hum dono ne baher dekha to God hanuman jo hamaree samane thee,hath me gada bhi thi, lol mitti bhii udd rhiii thi aur hme unka Darshan Ho gaya,,, us din se me hanuman ji ki bhakti karne lagi.\nPar mujhe ek bat nhi samjh aiii keep mene usase pehle kbhi bhi unki bhakti nhiii ki. Fir unhone mujhe Darshan kyuuu die...",
  answer: "इस जन्म में नहीं की , पिछले जन्म में की थी भक्ति |\n\n||राम||"
},
{
  id: 477,
  header: "Hanuman ji changed my life",
  question: "When i was in kaghaznagar i did fill when i was restarted to praye hanuman ji & fasting on every tuesday.my life was totaly being changed.because at that time what i was wishing i got that .at that time i was a security guard.now i am a despatch excutive in chennai.so its all about hanuman ji ki kripa."
},
{
  id: 478,
  header: "hanuman ji give me ur blessings",
  question: "in this story i have learn that if we r not good enough to see u then how can we see hanuman just tell me some thing that make me to darshan hanuman gi its my wish to see u if i have done any mistakes just forgive me and just teach me some gnanam we r in kaliyugam and we dont know how relations are and dont even know how to pray for god",
  answer: "Divine Soul,\n\nMany devotees have written to us that they got Darshan of Lord Hanuman after reading first chapter. It depends on the impurities which are putting veil on your soul. It may take 1 chapter or 10 chapters to remove those impurities. Make Lord Hanuman your Guru. You will soon have His Darshan.\n\nBlessings"
},
{
  id: 479,
  header: "hanuman ji give me ur blessings",
  question: "From past many years i have done lots of mistakes knowingly or unknowingly, just teach me what mistakes i have done and i dont gonna repeat them again, my mother knee is paining her a lot, i love my mother please cure her and make me happy, i am in search of ur blessings hanuman ji just come in my dream and bless me, give me a new job which will be a turning point of my life"
},
{
  id: 480,
  header: "Hanuman ji helps",
  question: "Kai baar mere pass pese nahi the khane tak ke mene eyes close ki aur bola babba(hanuman ji) please mujhe pese dila do kahi se main kuch kha sakun\nKuch der baad mere pass mere account main pese aa Gaye the. Jisko mere pese dene the uane daal diye the."
},
{
  id: 481,
  header: "Hanuman ji jaanam",
  question: "Jai shree ram....\nmeri alap bhuddhi abhi tak kisi ek mat ko sahi se nhi maan rahi hai ki hanuma ji ka janma kaise hui?????/ jaise ko kahata hai hamuman ji ka janma shiv ji ke virye ko anjani ko kano me dalne se hui to,, koi kahata hai anjani mata ne shiv ji ki tapasaya karne se unko vardaan rup me mile.... koi kahata hai ki hanuman ji ke janamte hi unki mata ne unko chhod diya tha aur bhukh lagane par hanuman ji ne surye dev ko nigal liya tha......\nkoi aap log mujhe hanuman ji ke Janma ki sahi ghatana ke bare me vistar se bata sakate hai..... ki hanuman ji ka janm kis parkar aur kaha hua???\nthanks to a'lot of setu asia & Matang....\nJai shree Ram.....",
  answer: "महोदय,\nयह एक लम्बी घटना है | आगे आने वाले अध्यायों में इसका जिक्र आएगा | कृपा आगे आने वाले अध्याय पढ़ें |\n\nराम ||"
},
{
  id: 482,
  header: "hanuman ji k baare m meri raay",
  question: "M bhagwan ko maanta tha ,manta hu\nMgr jo pehle waala maan na tha\nUsme ras ki kmi thi\nBhagwan kaa name lene pr jo aanand milta hai vo heen tha\nQki m bs itna smjhta tha ki bhagwan hai kuj b maango kbi toh milega\nMgr m anjaan tha is baat se ki\nAgr bhagwan ji ne apni shktio ka hi use krna hota toh sita maata ko ussi time le aate jb pta lgaane gye the\nMgr bhagwan ji ne purusharth kia\nEk bhagwan hote hue b purusharth kia\nAur apne bhagto ki madad krne k liye kya kr dete hain vo mene aapki site se pda\nTb mujme ye baat jaagi ki bhagwan ji agr purusharth krte hain toh m toh ek insaan hu\nM ku naa kru\nMe pehle pdta ni tha dhang se\nAb purusharth kr rha hu\nAur ab baat krta hu\nVishnu ji ki\nHm har time peso k piche bhagte hain\nAur khud peso ya yu kahu sobhagya ki devi maa lakshmi jinke per dbaati hain vo svym khud bhagwan vishnu hain\nAur unhi bhagwan ne gau mata ki sewa krne k liye gwaale k roop m krishan avtaar lia\nAb khud ishwar jinki sewa krte hain\nHm insaano ka b frz bnta hai\nKi hm b unki sewa kre\nAur m ab gau sewa kr rha hu\nAur muje aanand ki prapti ho rhi hai"
},
{
  id: 483,
  header: "hanuman ji ka bhakt",
  question: "me ek hindu hun aur mujhe hanuman ji ke uppar pura biwass he aur me ye bhi janta tha ki wo amar he aur aaj iska sabut bhi mil gaya mujhe bahut khusi hui...........\n\njai shree ram\njai hanuman"
},
{
  id: 484,
  header: "hanuman ji ke parti merae man ka virat hona",
  question: "He mahanubhav, pichle kuch salo me mera hanuman ji ke prati agadi saradha bhav man me tha unki chali dekhne matra se man bhakti bhav me doob jata tha par kuch salo idhar man me bada uthal puthal macha hua hai na hanuman man lagta hai na kisi dharmikkand me man bare bare khayal at ate hai sadi ho gai hai par aulad na hone se man anant hai kripa kar ke matangi se meri pratha na kar dijiye ki aisa ku ho raha hai mere kast hanuman ji kab karenge"
},
{
  id: 485,
  header: "Hanuman ji ki aseem kripa prapti",
  question: "Pyare hanuman ji ,\nAapko koti koti pranam , hey prabhu jeevan me aapse maangane ki to kai ichhaaen hai jo sansarik hai par kabhi kabhi lagta hai ki itne bade aur mahaan prabhu se kya magna . Aap to sarv shaktimaan aur sarv gyata hai. Par mandiro me aap se maang bhi leta hun kyunki aakhir ek sansari hun aur ichhaaen kai hoti hai jaise pragati ki sansarik wali, aur samasyaon ka samadhan wali aadi . Prabhu kai prashno ke haal nahi milte to yah sochkar khud ko aaswashan de deta hun ki abhi jawab milna naseeb me sahi nahi hoga. So shant ho jata hun. Hey prabhu mai apne jeewan me safal nahi hun materialistic life me yani sthool life me. Par apni tarif nahi kar raha hun is kathan se ki pooja bahut karta hun aur nitya ek urja mehsoos karta hun apne sharir me jo ab bhi mehsoos ho rahi hai. Aur yeh urja sarv pratham kuch saal pehle tab mehsoos hui thi jab 7 baar roj hanuman chalisa padta tha kariban saal bhar tak. Fir sapshati diksha li to usme karte karte aur bad gayi urja. Aur jo bhi puja karta hun to wah feel hoti hai. Iska matlab divinity yani ishwariya divyata to aa gayi hai mujh me par chuki safal nahi hun stool life me to pareshani hoti hai. Aap par vishwas to hai ki yeh bhi pareshani aur kai mujse aur pariwar ki pareshaniyan dut hongi par jald ho yeh chahta hun. Aur sabse jyada safal hone ke baad is adyatm me khub badna chata hun ishwar ko aapko prapt karne ki lalsa hai. Hey prabhu hamara do plot hai jo lafde me phase hai jo indore me hai aap kripa kar unhe free karwa de to kuch paiso ki pareshani khatm ho ghar ki. Aur yeh to sansarik ichha hai khas to prabhu Aapki bhakti bade aur aapke aur ram ji prabhu ke darshano ka saubhagya prapt ho aise anant kripa jald se jald kare. Hey prabhu mujhe aisa lagta hai ki pichle janam me mai ek parrot tha jo ki kuch kuch yaad hai mujhe aur yah manushya janam uske baad mila hai shayad pehla hi hai. Is baat se kuch exp. Ka lena nahi hai bad aapko batani thi.\nKripa kare pyare prabhuji\nAapka chota sa bhakt\nVikram"
},
{
  id: 486,
  header: "Hanuman ji ki bhagti",
  question: "Jai Sri Ram\n\nMera naam Virender hai.\n\nMein hanuman ji ki kirpa prapt karna chahta hu. iskeliye kya karu. unke kis swaroop ka dhyan karu?\n\nhanuman ji Hindu dhatam ki raksha karte ya muslim etc ki?\n\naajkal itna adharam bad gaya hai. hanuman ji kuch kyu nahi karte?\n\nBhagwan Sri Vishnu ji ka avtaar ho gaya hai kya?\n\nBhagwan Sri Vishnu ji itne papiyo ko kaise khatam karenge?\n\nkaba mein jo shivling hai jiski puja muslim karte hai kya wo sahi hai?\n\nDharam ki raksha ke liye kya karna chahiye?\n\nHanuman ji kis dharam se jyada sneh rakhte hai?\n\nHindustan pure hindu country kab banega?\n\nmein manta hu ki mere kuch questions galat hai phir bhi mein unke jawaab chahta hu.",
  answer: "आपके सवालों को जब साक्षात् हनुमान पूजा में रखा गया तो एक प्रतिप्रश्न प्राप्त हुआ जिस पर आपको विचार करने की जरूरत है | वह प्रतिप्रश्न है -\n\n\"मातंग भी मनुष्य हैं और इसी युग में इसी धरती पर रहते हैं | फिर हनुमान जी सिर्फ मातंगों को साक्षात् दर्शन देते हैं अन्य मनुष्यों को क्यों नहीं ?\"\n\nइसका उत्तर आपको स्वयं खोजना चाहिए |"
},
{
  id: 487,
  header: "Hanuman ji ki bhakti",
  question: "Jai Sri Ram\nApp sabhi hanuman bhakto ko Mera ram Ram ji.mera anubhav h ki m 17 saal say hanuman ji ki bhakti kar raha hu . hanuman ji ne mayre bahut say kaam shid k ray .mager aab 7 saalo m vo mayre ek bhee nahi sun rahay h.pata nahi Kyo. Plz aap mujko bahane ki kirti karay ki hanuman ji as ha Kyo kar rahay h.app mujko hindi m batanay ki Kiran karay. Jai shree ram",
  answer: "दिव्य आत्मस्वरूप ,\n\nशायद आपने हनुमान जी से जाने अनजाने में मोक्ष अथवा ब्रह्मज्ञान की इच्छा प्रकट की है | मोक्ष की इच्छा सिद्ध करने के लिए भक्त को हर तरह के अनुभव देना आवश्यक होता है - सुख दुःख , हानि लाभ , आदि आदि , ताकि भक्त इन सांसारिक अनुभवों से ऊपर उठाना सीख सके | हनुमान जी आपको परम ज्ञान की और ले जाना चाह रहे हैं |\n\n||राम||"
},
{
  id: 488,
  header: "Hanuman ji ki Kripya",
  question: "I belong to a lower class family in Delhi, From the childhood i have seen may ups and downs in my life no relatives even my family family members were not supporting to us. My father was not taking care of us, My Mother works and feed us though she is not educated as a house made she take care of us. we lived in extreme poor condition but my father never worked for it. As we have full faith in Lord Hanuman, we did not had enough money to feed 10 people in a single time but with the blessings and help of Hanuman ji My sister got married and sufficient amount were received as a loan of other sources for her marriage, I was not good in study and having good marks in graduation like a dumb. with the blessings of Hanuman ji i am completing my further study with zeal to success and got a good job in a good company. Hanuman ji made so many changes in my and in my family , still we are facing some problems but i can say our problems is not greater than Lord Hanuman. Jai Hanuman Jai Shri Ram.\nNow i urge to serve my life to my mother and needy people like her.want strength and dedication.\nPlease pray Hanuman ji sabke dukh kare."
},
{
  id: 489,
  header: "Hanuman ji r soul purifier",
  question: "Jai hanuman thank u so much for making a part of this , really feel blessed n wait for d next chapter . Had become devotte of hanuman ji after joining this sight . Have started feeling nyc n lighter . Wanted to share had seen Lord hanuman in my Dream few days back n saw myself touching his feet n felt so blessed n since that day was waitng for d next 5 th chapter more eagerly . Feel hanuman his presence sumtyms . Don't know but after reading 5th chapter had felt as if d 5 th chapter was sumwhr giving a big message to me . Jai hanuman ji Jai guruji"
},
{
  id: 490,
  header: "HANUMAN JI RAM RAM",
  question: "HANUMAN JI RAM RAM....PLS BLESS ME WITH BHAKTI,SHAKTI COMPASSION and FEARLESSNESS\n\nPRANAM HANUMAN JI\n\nPLS FORGIVE MY PAST SINS AND MAKE ME PURE SO THAT I CAN SEE YOU LIKE MATANGS"
},
{
  id: 491,
  header: "hanuman ji se milne ki chahat............and my experience with lord hanuman puja",
  question: "mera naam rakesh h mera janam sikar district, rajasthan, india me hua h. abhi mai delhi me rahta hu. mera yah experience h ki mere ko bahut year se sapne aate h jo sahi hote h matlab mujhe aage future me happen hone wali incidences ka pahle pata chal jata h. na ki apne bare me balki aap paas ke bare me bhi. mai hanuman ji bhakt hu mujhe raat ko sote waqt aisa mahsus hota h jaise lord hanuman mere paas ho.or mujhe aisa lagta h jaise mere saat koi ho. mai mere bare me jan na chahta hu ki mere saat kon h or wo mere liye kya karte h. mai bhi jan na chahta hu ki meri aatama ka bodh lord hanuman ji ki aatama ke saat h ya nhi. mai chahta hu ki lord hanuman mujhe sukh shanti de or mari man ki iccha puri kare. mai abhi jan na chahta hu ki mera pich la janam kya tha or mere pich le janam se is janam ka kya relation h. or mai is janam me aage jakar kya karuga . kya mere ko lord hanuman ke darshan honge ya nhi. Thank you\n\nmai jab bhi lord hanuman ka naam leta hu......mujhe habhasi aati h",
  answer: "कृपया धैर्य रखे | किसी न किसी अध्याय में आपके पिछले जन्म की कहानी भी आएगी और आपको प्रभु के दर्शन भी होंगे |"
},
{
  id: 492,
  header: "Hanuman ji se prathna h hmari binti sune",
  question: "Jai sree ram. Mera sawal ye hai ki kya iss yug may bhi hanuman ji hai agar hsi to hmare prathna ko swikar kyu nhi kar rhe hai mere kasto ka niwaran kare prabhu ji. Hm prem viwah karna chahte hai par hmare pariwar k log nhi maan rhe h aisa kyu mere sath ho rha hai jabki mere pehchan may jinlogo ne prem viwah kiya unk ghar wale maan gye hai. Hay prabhu kis baat ki saja de rhe hai ap hm har roj apki puja karte hai par hmare kasto ka niwaran nhi ho rha prabhu. Hmara jivan sukhmai bnaye hanuman ji. Matang guru hmara bhagya btye pls. Mera date of birth 25/09/1984 hai subh k 8.30 am. Naukari may bahut pareshani hoti hai har jagah mera paisa dub jata hai kyu aisa ho rha hai. Mujhe apmay pura viswas hai hanuman ji ap meri prathna sunoge.",
  answer: "निम्न 4 बातों का ख्याल रखें -\n(1) आप में अपने लक्ष्य को पूरा करने की तीव्र इच्छा होनी चाहिए |\n(2) उन इच्छाओं को पूरा करने के लिए आवश्यक प्रयास करें अन्यथा आपकी आत्मा उन लक्ष्यों को इस संसार में पूरा करने की बजाय स्वपन लोक में पूरे कर लेगी |\n(3) अपने दिल दिमाग में “भय” “चिंता” आदि नाम के असुरों को जगह न बनाने दे अन्यथा हनुमान जी को लगेगा कि आप उनकी बजाय असुरों को अपने दिल दिमाग में रखना पसंद करते हैं | बाधाएं दूर करने के लिए हनुमान जी की सहायता प्राप्त करने के लिय यह अति आवश्यक है |\n(4) अपनी प्रार्थना को सरल रखें | अपनी प्रार्थना अपने और प्रभु के बीच रहने दें उसमे आप परिवार , समाज तथा अन्य लोगो को शामिल न करें | सही प्रार्थना - “हे प्रभु मेरी आवश्यकताए पूरी करें ताकि मै मोक्ष के मार्ग पर चल सकूँ |” गलत प्रार्थना - “मेरे जीवन में फलां व्यक्ति को ले आयें , मेरे परिवार को ऐसा करें , मेरे समाज को ऐसा करें|” आप जितने लोगो को अपनी प्रार्थना में शामिल करेंगे उतने लोगो के कर्म रोड़ा बनते जायेंगे | आपके कर्मों के रोड़े काफी हैं , किसी अन्य के रोड़े मत लायें | जब आपकी इच्छा पूरी होगी तो आपके आस पास के लोगो को खुद ब खुद सहायता मिलेगी |"
},
{
  id: 493,
  header: "Hanuman Ji Solved Biggest Problem of My Life, Gives Me Dream Darshan for Quick Time Frame and Suddenly I am Directed To Setuu,",
  question: "Jay Shree Ram\nJay Hanuman Ji,\n\nHello,\n\nHonestly, I didn't know, How I came to Setuu.org , but the ways that directed me to came here was interconnected. Here I would Like to Share My experience, not just because I really want to, but Honestly, I didn't want to share Hanuman Ji Gives me a Short quick dream darshan, where I wasn't able to see Hanuman ji's clear Face Because of the daivik Shine on Face, my eyes were not able to see. Without sharing my experience I am not able to read hanuman Ji 's leela s and brahmgyan pravachans.\n\nThis was the beginning,\n\nI was living abroad apart from wife, and any how me and my wife couldn't get together, for visa issues. After marriage, 6 months after I came abroad and she was backhome India, and She stayed without me for 5 years, crying everyday,.\n\nThere was a Day, I was so Upset , and i don't know how, but sudden sit for praying hanuman ji and was cryingly requesting him please, Solve the biggest problem of my life , i prayed in hindi'' he hanuman ji, jese tumne shree ram or sita maiya ko firse mila diya tha, muje bhi meri wife se milado ''' from then I was sincerely Praying Hanuman Ji by chanting Hanuman Chalisa everyday, in few weeks after heared a good news for approval and Finally she approved and The 5 year 4 month wait is over and my wife is with me,\n\nI always chanting hanuman chalisa, ...and..\n\nThere was a day , I see a dream , where I was In place were Big mountain surrounded by green forests, and I see a quick , darshan of Hanuman Ji, right infront of me and immidiately I was on my knee and spoke, Jay shree ram, '' I seen Hanuman Ji, with Very shining face, but eyes couldn't catch the face clearly, but I seen Beared, hairy body, Gadaa, ... i was On my knee and I spoke, Jay shree ram. ( I didn't Know , How suddenly That Happened).\n\nI don't want to share it as I have that moment captured in my mind and Everyday while chanting Hanuman Chalisa, I have my closed eyes with rememebering Hajuman Ji Darshan.\n\nNow, After that, Seriously, honestly How I came to Know about setuu.org, but I believe this all is interconnected and ( Hanuman Ji 's Leela ). brings me here to read Hanuman ji 's Leela.\n\n****** At this Moment, Me , my wife are strongly Believing that, Hanuman Ji Protecting Their Devotees,\n\nJay Shree Ram\nJay Kesari Nanadan."
},
{
  id: 494,
  header: "Hanuman ji Is watching the world",
  question: "Jai Shri Ram , My very first experience is simple yet it is very much linked to my life .\nI was already in the charans of shri hanumanji , And that is when i started getting really connected to hanumanjis leelas through emails , I had no idea hoe suddenly i started receiving information about hanumanji , As this itself says that lord Hanuman is watching each and every one in this world and trying to help each needy in this world .\nJAI SHRI RAM , JAI HANUMANJI"
},
{
  id: 495,
  header: "Hanuman Kavach",
  question: "Hello Setuu Masters,\nI have been reading Panchmukhi Hanuman Kavach daily for the past two weeks and feel a lot better now a days.\nI wanted to understand how sanskrit verses and shlokas for Gods and Godesses like Hanuman Kavach and Durga Kavach work.\nDoes playing or listening to mantras and prayers continuously help to transfer positive energy into our sub-conscious?\nAny information regarding sound energy, vibration etc. will be helpful.\nThanks a lot!",
  answer: "Divine Soul,\n\nWhen you transcend your mind, you reach to level of your soul. That is when you connect with God. When you are living at level of body-mind, you are disconnected from higher powers. And to help you transcend your body-mind, there are many ways. To transcend your body, you can simply close your eyes. You will cut off from entire outside world and transcend your body. But transcending mind is very difficult in this age. You start getting random thoughts which keep you tied to your mind. To transcend your mind, the word or Shabda is the key. There are words which have sounds that help you transcend your mind. Those words or pattern of words is called Mantra. And then there are words which have information attached to them that help you transcend your mind. When your mind absorbs that information, you tend to fly out of horizons of mind. Those words are called Brahm Gnan or the supreme knowledge.\n\nMantra is used by devotees following Bhakti Marga and BrahmGnan is used by those who are following Gnan Marga. However, in Kaliyuga, the combination of both is recommended.\n\nBlessings"
},
{
  id: 496,
  header: "Hanuman my Brother and Friend",
  question: "The biggest impact I felt was when i began to go beyond just prayers to Hanuman. When I began to actually imagine him in his form walk near me, sleeping next to me and having conversations with me (even casual/joking ones), it made me feel safe, never lonely and always taken care of."
},
{
  id: 497,
  header: "Hanuman as my maanaseega Puthra",
  question: "Hanuman!! You have always answered my prayers when it is very sincere from the deepest of my heart. But nowadays I am very distracted and not able to feel the same amount of devotion. I feel so bad about it. I feel that i approach You only when i need something. Why have i become so selfish? I want my relationship with you as something selfless, as someone who just enjoys praying you, as someone who is your mother. Also I want to learn all the nuances of music from you. Will You oblige oh Lord!! Will You oblige, my son?\n\nJust reading the conversation that You had with the monkeys gave me goosebumps. My heart longs to see You, talk to You and be in Your company the rest of my life. I want to exprience You in every minute of my life.\n\nWith devotion,\nSowmya."
},
{
  id: 498,
  header: "Hanuman The rakhsyak of this world",
  question: "Maine apne daily life mein bohot kuch experience kiya hai lord hanuman ko lekar. Jabse maine setuu Hanuman ka page mein kuch chapters padha hai tabse mere sath ajib ajib ghatnae ho rahi hai kavi mere sapne mein toh kavi real mein. But usse pehle vi lord hanuman ji mere sapne mein ek bandar ke roop mein aa rahe thee aur jab mai unko dekh kar ghabra gai tab woh ek chote bache ke roop dharan kar liye mere samne aur ek mandir ke pass mai baithi thi tab woh aake mere godi mein apna saar rakh kar mere ankho ko dekh kar mujhe Maa bolke pukarne lage tab maine unke karuna vari ankho ko dekha aur yeh sapna maine subah mein dekha tha aur jab mai uthi tab maine hanuman chalisa ko suna jo ki kahin mandir mein baaj raha tha aur uss samaya maine dekha ki mujhe chicken pox ho gaya tha.yeh sapna maine 2011 ko november ke mahine mein dekha tha. Aur 26th january, 2015, subah ke 5 am ko maine spne mein dekha ki mai , Hanuman ji, aur kuch adibasi loog srilanka ke ek jungle mein ghum rahe thee aur hanuman ji hum sabko puri jungle ghuma kar dikha rahe thee aur uss samaya hum sab ek bohot hi alaag language mein baat kar rahe thee.....aur maine hanuman ji ke liye ek Marigold flower ka mala banakar liya tha unke gale mein pehnane ke liye aur uss time maine jab woh mala hanuman ji ke gale mein dalne ke liye hath badhaya tab hanuman ji achanak badhne lage 20 ft tak aur itne bade ho gaye ki hum sab dekhte hi reh gaye aur uss time teez hawa vi ane laga fir hanuman ji ne mujhe bole ki aab mujhe woh mala pehnao fir maine bola ki kaise yeh mala mai aapko pehnaungi aap toh bohot bade ho ki mera haath aap tak pohonch nahi payega fir hanuman ji ne apna right hand lakar mere pairon ke pass rakhe zameen par aur bole ki yeh raha mera hath aab tum mere haath ke upar chadh jao fir mai bohot ghabra gai toh hanuman ji ne firse mujhe bole ki daroo mat tumhe kuch nahi hoga fir main unke haath par chadh gai aur hanuman ji ne mujhe dhire dhire apne face ke samne le gaye aur fir bole ki aab mere gale mein woh mala daloo fir maine hanuman ji ke gale mein woh mala dala aur unke face ko dekh kar muskuraya....fir hanuman ji ne mujhe apne haathon se niche utar diye...aur woh apne height ko ek manav jaisa hi bana diye aur hume firse jungle ghumane lage ....kuch der baad hum sab ne dekha ki ek adibasi ladka around 25 age ka tha usko chicken pox hua tha aur uska sharir bubbles se vara hua tha aur woh ek purane jamane ka bed jaisa kuch tha usme leta hua tadap raha tha tavi hanuman ji ne usse kuch jadibutiyan khilaye aur uske sharir pe apna haath laga diye toh uska pura sharir thik ho gaya......aur woh hanuman ji ko pranam kiya aur fir hum agge badhte gaye aur jungle mein ghumne lage....."
},
{
  id: 499,
  header: "To Hanuman ---Regarding payment not being given by one customer from long time",
  question: "Hello Hanuman ,\n\nOne of the customers ,whose company name starts with \"S\" has not made the payment from last 6 months ,inspite of giving committment and assurances .\n\nIs this the way of keeping committment ?\n\nMake him to give the payment ,it will reduce my stess.\n\nThanks"
},
{
  id: 500,
  header: "hanuman shiv",
  question: "mene akasar apne sath ye mehsus kiya h ki hanuman shiv hamesha mere sath rhte h jo meri har mushikil ko aasan aur nirakaran kr jate h.\njai shiv hauman"
},
{
id: 501,
header: "Hanuman Swami's Blessings",
question: "I have lived in Daman near Gujrat with my husband and kid. Even though we hail from Kerala, we went to Daman since my husband was working there. So, the house we lived in Daman, was a kind of ghost-house like. And have heard many experiences from the helper boys who stayed there, telling that during night time, somebody used to come and catch their neck. Finally no helper boy was left there because of frequent scary things happening. Finally, when my husband went to work, me and my kid would be left there. The owners were staying in the same house- One aunty, her husband and her daughter. But most of the day time, nobody would be there in the house, except me and my daughter who was 4 months then. Aunty used to go for shopping, her daughter used to go for studies and uncle used to go to his Hotel. In midst, i used to experience certain scary moments in our room. I used to feel that somebody is standing in our room and sometimes, at night somebody catching my neck etc. It was a time full of terrible experience. But when i told my concern to husband, he was not ready to believe all those. Then, finally i started praying Hanumanji daily and i could feel his presence there. Then, I started gaining inner strength. I believe that Hanuman swamy was there with us to save us from all worries. Thank you Hanuman swami. Prayers. Bless us all including all animals and birds from worries both mental and physical.\n\nThank you"
},{
id: 502,
header: "Hanuman visitation on jayanit",
question: "when i read here that anyone who loves hanuman will be able to see him on hanuman jayanti between 4 and 8 pm, i did not want to miss the darshan, so i set my alarm clock for 4 pm.\nas it was a hot and humid afternoon, i easily fell asleep.\njust before 4 pm, the wind picked up, and all the trees were swaying, and i was slowly coming out of my sleep.\nfirst i felt a tingling above my upper lip, and slowly the tingling came all around my mouth, as if it was swelling up. it felt as if pins were pricking me all around my mouth. it was a sensation that i have experienced for the first time in my life.\nthe alarm started to ring, and the sensations stopped. that is when i realized that hanuman has blessed me with darshan.\nlater in the evening, i and my wife went to a dance party to celebrate the darshan. i love to dance, and as i was dancing with my eyes closed, i suddenly saw hanuman sitting on the speakers!! he seemed amused to see us dancing, and said that we are all behaving like monkeys!!"
},{
id: 503,
header: "HanuMandal aur Charan pooja kaise karein.",
question: "jai shri hanuman\n\naapke 6 th adhyaye ke liye dhanyawaad. kripya bataye kaise HanuMandal banaya jaata hai....yadi humey pics mill jaye HanuMandal ki toh aapka bahut bahut dhanyawaad. Hum kaise uss khas tel to prapt karey jo woh Hanumandal ke Bahar aur Rekha par rakhtey hai. Kripya sheegra Uttar dey. Thatha charan pooja kaise kii jaati hai..??",
answer: "पवित्र आत्मस्वरुप ,\n\nसेतु का कार्य श्री हनुमान जी के निर्देशानुसार उनकी लीलाओं को भक्तों तक पहुँचाना है | हमें साक्षात् हनुमान पूजा में जो भी आदेश श्री हनुमान जी से प्राप्त होगा, हम उसी अनुसार कार्य करेंगे | अगर उनका आदेश होगा कि मातंगों का गुप्त ज्ञान आप तक पहुँचाया जाए, तो हम अवश्य पहुचाएंगे | लेकिन अभी तक हमें ऐसा कोई आदेश प्राप्त नहीं हुआ है |\n\n|| राम ||"
},{
id: 504,
header: "hanumane",
question: "You are my guru. But i am happy experiencing you as god. i relate more that way. i have been waiting for some message from you. i don't think I am advanced enough to see you. However i also believe miracles can happen with you around. We had a Ganesha pooja and Devi pooja at home. Felt good. hanumane, we all need your blessings. Jai Hanuman. Jai siya ram. Pranams to all there."
},{
id: 505,
header: "Hanumanji",
question: "main din ba din pareshaniyo main ghira rahta hu. har samay ulta sidha sochta rahta hu. karta sab ke liye acha hu par galat samjha jata hai. ji karta hai marty ko gale laga lu. agar koi upay ho pareshaniyo se nikala ka to bataye. hhanuman ji ka upasak hu. par lagta hai ki main uki bhakti kar nahi pa raha hu",
answer: "निम्न 4 बातों का ख्याल रखें -\n(1) आप में अपने लक्ष्य को पूरा करने की तीव्र इच्छा होनी चाहिए |\n(2) उन इच्छाओं को पूरा करने के लिए आवश्यक प्रयास करें अन्यथा आपकी आत्मा उन लक्ष्यों को इस संसार में पूरा करने की बजाय स्वपन लोक में पूरे कर लेगी |\n(3) अपने दिल दिमाग में “भय” “चिंता” आदि नाम के असुरों को जगह न बनाने दे अन्यथा हनुमान जी को लगेगा कि आप उनकी बजाय असुरों को अपने दिल दिमाग में रखना पसंद करते हैं | बाधाएं दूर करने के लिए हनुमान जी की सहायता प्राप्त करने के लिय यह अति आवश्यक है |\n(4) अपनी प्रार्थना को सरल रखें | अपनी प्रार्थना अपने और प्रभु के बीच रहने दें उसमे आप परिवार , समाज तथा अन्य लोगो को शामिल न करें | सही प्रार्थना - “हे प्रभु मेरी आवश्यकताए पूरी करें ताकि मै मोक्ष के मार्ग पर चल सकूँ |” गलत प्रार्थना - “मेरे जीवन में फलां व्यक्ति को ले आयें , मेरे परिवार को ऐसा करें , मेरे समाज को ऐसा करें|” आप जितने लोगो को अपनी प्रार्थना में शामिल करेंगे उतने लोगो के कर्म रोड़ा बनते जायेंगे | आपके कर्मों के रोड़े काफी हैं , किसी अन्य के रोड़े मत लायें | जब आपकी इच्छा पूरी होगी तो आपके आस पास के लोगो को खुद ब खुद सहायता मिलेगी |"
},{
id: 506,
header: "hanumanji",
question: "jay hanuman ji ki jay, aapki charnome pronam karti hu hanumanji, aap sab ka vala kore, or mujhe thora sa gayan dijiye."
},{
id: 507,
header: "Hanumanji give me blessings & strength",
question: "With the grace of almighty Lord Hanuman, I got a job in a reputed software company in december 2014. My training is going on right now. But I am not able to perform well in my training. Two assessments are over and I didn't do well in any of them. May be this is because I am from Electrical and my training is in Computer or I didn't study well. I don't know.\n\nSometimes I think to go for Phd and sometimes I think to prepare for government jobs and sometimes I think to continue my this very job and do my best in this very field. I am really very confused. Also, I am not able to concentrate on my study(training). I don't know what to do. I don't know why all this is happening to me.\n\nIf I don't perform well in my retest, I will lose my job. My parents have lot of expectations from me. I don't want to hurt their feelings by losing this job. I want to make them proud by performing well at my job.\n\nPlease show me the right path.\n\nIf Lord Hanuman is testing me, I request him to give me blessings and strength so that I pass his test with good marks.\n\nHanumanji, give me blessings that I complete my training and perform well in my this very job. Prabhu please forgive me if knowingly or unknowingly I have made any mistake either in this birth or in previous births.\n\nJai Bajrangbali. Jai Shree Ram."
},{
id: 508,
header: "Hanumanji has filled me with positive energy",
question: "After reading chapter 1 I feel positive energy filled in myself. Since yesterday my life was filled with negatives. I feel Hanumanji has come to help me. Thank u Hanumanji. Please bless my family. Protect us and guide us in right path. Please make all my dreams come true. Please be with us always. I continue to worship and adore you till the last breath of my life."
},{
id: 509,
header: "Hanumanji ka mere sapne me bar bar aana...",
question: "mera naan jitendra sukdeo gosavi he..\nme Erandol, dist -jalgaon,state maharashta, India me rahta hu..\nme hanumanji ka ek chhota sa bhakt hu..or me hanumanji ki dhyan me har roj rahta hu uthte ,baithte, sothe, aur nahate samay bhi me hanunamji ka naam ko smaran karto hu aou unka bhajan me gata rahta hu..ek bar me hanumanji ki hanuman chalisa 7bar roj padha krta tha auo 7 din tak me subah uthkr pehle hanumann chalisa ka path krta aur fir anya kam kaj..pan 7 din hote hi agli raat jab me hanumanji ka naam leke soya ..tabhi hanumanji me muze sapne ek drustant diya..sapna aisa tha ki me khet me khel raha tha or achanak koi mere samne upar akash me udd raha tha to meme gor se dekha to mere ramdut hanumanji the..auor wo me upar se age ki oour chale gaye ..me bhi unke pichhe bhaga or bhagte bhagte muze ek admi ne roka or wo bola ki tu apne pyare hanumanji se milne ja rahe hoto apne kamar me se wo kaale rang ka dhaga tod kar fenk de to me wo kaal rang ka dhaga me kamar me se kat kr fenk deta hu or..us admi se puchhta hu ki apne mere hanumanji ko dekha he..to wo bola age jao maine waha dekha prabhu ko..to me age bhagte bhagte jata hu to waha ek bahut purana mandir hota jo ki pathhar se bana hua tha ..tabhi maine hanumanji ko us dwar k andar jate dekha to me unke pichhe bhaga to age andhera sa tha..tabhi me us andhere me hanumanji se takra jata hu....tab mera man bahut komal hogaya or khushi ka thikana nhi raha ..me kuch hanumanji se kehta tabhi hanumanji me muze apne kamar par utha liya jase meri maa muze bachpan uthaya krti ti thi..maine dekha tab hanumanji ka ang sharir bhi bilkul pathhar ki tarah tha or me unke kandho se hanth bheta raha...or tabhi meri nind khul gai....\nor tab se me hanumanji ki dhundh me sada rahta hu..or aisi ichha hoti he ki kash prabhu muze sakshT me mile or me unse bate kru....our bhi 4 sapne muze aise aye he hanumanji ke...me wo age likhunga....\n\nJay shree Raam..jay shree Haanuman...samarpan..."
},{
id: 510,
header: "Hanumanji maharaj ki kripa.",
question: "I hv experience. many times in my life when was young that any worry or obstacles of life as my husbands sichness has been removed ,after I chanted 108 times Hanuman chalisa.\nI felt that Bhagwan Hanumanji is my grand father and whenever I cried in desperation after getting humiliated in family life ,I experiences that Lord Hanuman ji has given me strength to cope up.I bow my head infront of Hanumanji.\nI know in my heart or soul that Hanumanji is alive in this world and protecting people.I have recieved a photo of Hanuman ji ,looks very old..\nKripa ho to apke darshan sapne me karane ki bahut ichcha hai."
},{
id: 511,
header: "Hanumanji protected me from my bosses at work in a multinational company in mumbai",
question: "The year was 1985 .I was deputed as a unit head for our companys first budget hotel in a remote area.For reason beyond my control and due to lack of support of some directors of my company I was suddenly told one day that my services were not required as I was ineffective.This, I was aware was not true.My father advised me not to leave this job else they would say I left due to corruption from my side,\n\nThen I was sure as always that since I am innocent and had not cheated or robbed Hanumanji would protect my job.As usual I prayed to him .But now a known Brahmin and worshiper of his advised me to say in fact the same mantra of Hanumanji several more times than I normally do.\n\nI was troubled and harassed by these superiors for six months with cheap baits and offers.\nBut I prayed hard to Hanumanji as advised by my spiritual brahamin teacher.Exactly six months later I was called back to work and all became well.\n\nThe mantra I was reciting was Vadavanal Stotra and also Vichitra Vanal stotra.\n\nPlease let me have the Mathang Baba Mantra of Hanumanji as well.\n\nHANUMANJI KI JAI RAM JI KI JAI !\n\nArun V Ajinkya",
answer: "Divine Soul,\n\nYour experience has been included in the Sakshat Hanuman Pooja. We have released only first line of Mantra after release of 3rd chapter as per direction of the Lord. Second line will be released after 5th or 6th chapter. If you have not got the first line yet, please drop a line at soul@setuu.org to get your Mantra.\n\nBlessings"
},{
id: 512,
header: "Hanumanji's CharanChitra Experience",
question: "My sincere thanks and obeisance to Lord Hanumanji, since I became matured, I worshipped Lord Hanumanji, and Lord Hanumanji is my only strength, I am so honour to write here and feeling so blessed that I got an opportunity to worship Lord Hanumanji and really thankful to the lord for the same, I have Hanumanji's Charan Chitra via Blisla and I used to worship and I become so positive, I just want that Lord Hanumanji to be with me every time and provide me and my family strength as and when we need, and also make me such person that I can help the other, and always allows me by giving the opportunity to worship Lord Hanumaji, Soon I will become a father and I really thank lord Hanumanji for the same, and I really wish my child to have qualities like Lord Hanumanji. I pray to Lord Hanumanji to protect us always, Jay Siya Ram, Jay Hanumanji, LOVE YOU :) I wish and hope to be blessed from Lord Hanumanji forever..........."
},{
id: 513,
header: "Hanumans Blessings",
question: "Hello All... I am one among the millions and trillions who worship Chiranjevi Anajani Puthra Rama Priyaya Hanuman. I always wanted to be his true devotee & have read very few storoes of him in Ramayana & Mahabaratham. Whenever I used to read about him I will wish to see him in a temple. Once I read about Aanhaneyar in a book that comes twice in a month & I found that temple close by from where I stay. I've crossed that place a lot of times & I dint know that there was a Hanuman temple there.. I was praying & I was telling Hanuman to bless me by showing me where the temple is & attain his blessings there.. One night as usual from my office I started to home & all of a sudden there was a rain surprisingly. So I had to stop my bike for a shelter. When I parked my bike & looked the opposite side I was standing at the entrance of the street where the temple was situated. The rain then stopped & I went to the temple in the Saturday.. I was very happy since Hanuman blessed me.. I will be there frequently. There are lot more to share.. But all that I wanted to say is be true & believe in Hanuman. Hanuman will always be with. I am experiencing it all the time. I've even asked him for a chance to meet in person with his original form. Jai Shree Ram..\n\n\"Abara Karunaam Murthim Aanjaneyam Namamyeham\" This means he showers his blessings on all of us. \"Asathya Kariya Saadhika Aanjaneya Potri\": This means he is capable of doing anything in this world. Jai Aanjaneya! Om!"
},{
id: 514,
header: "Hanumans presence",
question: "First experience I had is when I was doing a Pooja at the alter and as soon as I closed my eyes the apple flew out of the alter and landed on me.\nSecond experience my family and I was coming back from a trip, reaching my house at around 1 am.my son and wife said oh my god..we just saw hanuman..I took it lightly..throughout the months I came to know and visited a very very old secluded hanuman temple at the same spot they saw him.since then that has been my constant visit.\n3Rd experience. I never dreamt of any gods..nor remembered any if I did.however when I woke up it is still clear in my head, I was going up some steps into hanumans cave, and saw his troops coming down the steps amd I still kept climbing the steps to see him in the cave.i woke up.\n4th experience. My dad have been dreaming alot about him since I started praying to hanuman ji.my dad was worried at one point of my declining biz and family life, hence he prayed and went to bed.he dreamt a group of monkeys surrounding him by his bed and a big big monkey was sitting next to him and he was stroking his soft and amazing fur...explained my dad."
},{
id: 515,
header: "hanumat",
question: "hanumanji maharaj swami, rakshak, guru, aradhya sabhi kuchh hai. unse prarthana hai ki ek bar darshan avashya de."
},{
id: 516,
header: "hanumat kripa",
question: "hanumanji to bare bhai ki tarah sda meri sahayta karte hai , jab b unka dhyan karti hu to bhgwan Ram ke charno ke paas baithe dikhayi dete hain .Hanumanji apni kripa bnaye rakhna\nRAM RAM Ji"
},{
id: 517,
header: "happiness and fear",
question: "A s a child I never needed a reason to be happy. Even as young adult it was more or less the same. But now I am afraid of being happy. I am afraid of showing happiness. When there is so much unhappiness around us, so much so that I feel I can never do anything for that, I feel guilty and I feel like holding that happiness within me. May be my experiences in life has made me so. At the same time I feel not showing happiness is like not being satisfied which is wrong. These are my thoughts. Anjaneya, I prostrate before you. Accept me and enlighten me. Namasthasyei namasthasyei namasthasyei namo namah. sri gurobhyo namah. pranams to all there.",
answer: "Divine Soul,\n\nYou are shifting from outward happiness towards inner happiness. You are moving towards inner peace and contentment. Unfortunately the way from outwards happiness to inner happiness goes via sorrows. But for you that period is also over. Now just sit back and watch yourself moving towards absolute happiness which does not depend on outer circumstances.\n\nBlessings"
},{
id: 518,
header: "Happy Hanuman jayanti",
question: "Dear Settu,\n\nSai Ram\nJai Hanuman\n\nToday we are celebrating Hanuman jayanti here, in Andra & Karnataka. It is said that Hanuman met Mata Sitadevi in Ashoka vana on this Vaishaka suddha dashami.(jai Sri Ram).\nI was not able to go to temple as I was on my 4th day of my menses. Instead I read Hanuman chalisa at home 5 times. I heard here from the mainstream society that 5 is the number for Hanuman. Like offer him any fruits in 5, coconut 5, and so on. So I recited Hanuman chalisa 5 times :)\nHope I have also joined you today in your upasana :)\n\nHey Anjaneya Hanumaa Ramabhakta remove the fear of death O Lord\nMake my heart your residence.\nLet at every blink of my eye I feel only you. Jai Hanumaa, Jai Sri Ram.\n\nWith gratitude and devotion,"
},{
id: 519,
header: "happyness from worship",
question: "from start of the reading of the chapters from 1 i feel nothing strange with me, but when i got this mantra firstly from my brother. slowly-slowly i start chanting these mantra. now these days when i chant \"sitaram\" and this mantra i feel like that my body want to fly in the sky. my soul want to see hanuman ji as soon as possibly. Ofcourse i know that hanuman ji is with me all the time but i am unable to see him till this time. I am very curious to know about the true relation between me and hanuman ji. slowly-slowly I start loosing interest in this world and want badly to connect with hanuman ji properly and forever. i want the pure form of his bhakti and i believe him that somehow very soon he give me the way to find him out and see him...talk to him...."
},{
id: 520,
header: "Have a question.....",
question: "When I am reading these chapters it appears to me that when LORD HANUMAN JI is blessing the Mathangs with supreme knowledge I am also sitting with that assembly and seeing him live. These chapters enlighten me.....\n\nApart from this I had a question related to the 11th chapter. When we are dreaming, we sometimes encounter the fact that we are dreaming i.e., conscious dreaming. In dreams we know that we are dreaming. Oh SETU MASTERS I want to ask that is conscious dreaming an another concept or it is somehow related to desire fulfilment. Please seek me with this concept....\n\nA Devotee of HANUMANJI",
answer: "Divine Soul,\n\nWhen your soul is halfway between MaanavLoka and SwapanLoka, you experience what you call as conscious dreaming. It happens usually just before you are about to wake up in MaanavLoka.\n\nBlessings"
},{
id: 521,
header: "HE is listening",
question: "Me and my family were unable to get in touch with my brother abroad. I chanted the mantra once with a sincere prayer in my heart of my brother's safety and well being. within 5 minutes ,my brother called. I know it's sounding somewhat insignificant but since the time I have read the Lord Hanuman's leelas I have a connection with HIM :) He is more than an idol I used to see every Tuesday :)"
},{
id: 522,
header: "Healing by lord Hanuman",
question: "Jai Sairam jai hanumannji\nI am suffering some ill health and lots of pain in the body and even staying in the best country in the world all I have at disposal to treat is a bottle of pain killers just as mentioned in the first chapter here. I saw a dream of lord hanuman standing and in my sleep I started chanting hanuman chalisa . The pain reduced . Next day morning I get the link of setuu. And then the first chapter . I am full of faith that the lord will cure me soon. I hold on to Him tightly . I pray He hold on to me and heal me and set me toward His holy feet . I Pray lord cure the lameness of my body and mind . O merciful lord .\nI put my prayers onto your divine feet .. My abode.\nJai veer hanuman Ji namah"
},{
id: 523,
header: "Health & Wealth weakness",
question: "Jai Hanumaan ji.......\n\nMein apni aaj ki zindagi se bohat preshaan hoon. meri sehat 7,8 saal se kharaab rehne lagi hai. aaj ke time mein bohat preshaan hoon. mera sir chakrata rehta hai, jiski wajeh se mein job v nahi kar paa raha. mein sara din ghar per pra rehta hoon. mera man poora udaas ho geya hai. mera kahin jaane aane ko man nahi karta. Hey Hanumaan Ji, meri taraf se benti hai ke muje theek kijiye aur muje path pooja karne ki bal budhi dijiye.\n\naapka abhaari\n\nJaspreet Singh\nMohali.\n+918566000036"
},{
id: 524,
header: "heart felt gratitude to setuu masters, the whole mathang community, Lord Hanumanji, Supreme Lord Rama",
question: "Namaste!!\n\nMy salutes to the Supreme Being Lord Ram, Lord Hanuman and all the Divine setuu and mathang souls!!\n\n(1) As a child I always wondered who I am and why I am, what the universe is and why there is happiness or sadness. I have anticipated for some of these answers from some point in my life, I dint have a peace of mind at all after that. My existence din’t make sense to me. Everything around me stopped making sense. I yearned for the answers, an invisible force guided me to my answers, it was like the universe was putting me in places to get me the answers, which led me on to the spiritual path. And it was this force that led me to setuu website. It is a blessing from the Divine Lord, I got peace of mind after I started reading the words of Hanumanji himself from these chapters. I always felt getting lighter or nothing at all after reading a chapter. My friends tell me I look much more happy now. I see the difference in me, I am not who I was. I am lighter, more happier and complete than before. My heart felt gratitude to setuu masters, the whole mathang community, Lord Hanumanji, Supreme Lord Rama and the entire universe for this Divine work. Thanks you!!\n\n(2) Most of the questions I had have been answered, but I have a few more questions. Kindly, answer these questions for me. It has been explained by Hanumanji in previous chapters, how, why n when souls raise out of Muktisagar, but what was the first instance of a soul raising out of Mukti sagar and how could it have occurred? There would have been no suras and asuras then, how could have people generated good/bad karma? When did the first kalpa happen? How did this cycle of kalpa come into existence? Shukracharya, asuras and all good and bad come from the supreme lord himself. He is the creator. He must have lead to the start of all of this. What is the purpose of all these? Is this a plan for a greater progression?\n\n(3)In previous chapters, Hanumanji said there are several worlds and each of the worlds are different and some are higher (shiva loka, vishnu loka, Brahma loka) and only the worlds closer to our world affect us. In the recent chapters, he said we have many parallel universes co-existing at the same time. What is the exact relation between these worlds and universes?\n\n(4) The world around me and every aspect of it is very much real to me, and that is what is conveyed when end of kaliyuga is mentioned, but Hanumanji also says it is all an illusion/maya. If its only an illusion, it should be modified in a second right? Why does the Supreme Lord have to come down himself to change things? Then, is the maya described only individualistic, restricted to the way one perceives the world, and not including all aspects of existence? Are the effects of maya on an individual soul and the collective consciousness different? If an individual breaks free of this maya and attains liberation, the world would still continue to exist as it is, but does this single soul leaving effect the world anyway? I am not able to comprehend the extend of the maya. Can it me explained further?\nOr, is my the thought process flawed here? my mind expects a start and end to everything, it wants everything to be linear, is this an aspect of maya, and I am not able to perceive the truth beyond the constraints of the mind?\n\n(5) I have been meditating for past 9-10 years and I had these instances in life, when I have foreseen or fore-thought something happen and it happened. It was a different state of mind, a more grounded and connected state, thats how I perceived it. But, I never could fully get a control of the state. These instances happened more when I meditated regularly. But then, when I stopped the meditations this skill vanished away. I understand Kamadhenu cow such a state of the being, or the state of the realization of maya. Am I right? Or, am I misinterpreting these instances?\n\nMy apologies for such long para, and for the poorly framed questions. I couldn’t put them in a better way. The whole idea of maya is elusive to my mind.\n\nThanking you in advance,",
answer: "Divine Soul,\n\nIn MuktiSagara, concept of TIME doesn't hold. So 'first' or 'last' doesn't make any sense in Muktisagara's perspective. For example, your soul can go to Muktisagara now and see an event which happened millions years ago (from human perspective) happening in MuktiSagara right now. We humans are used to concept of 'Time'. You need to go beyond Time to be able to witness events happening in MuktiSagara. From human perspective, there is no first. It is a cycle. There is no end and no beginning. You may find a beginning only to discover that it is just another point in the cycle. You may stop exploring and call something a beginning. But if you keep exploring, there is no beginning.\n\nYou have read about higher worlds wrongly. Shivaloka, BrahmaLoka and VishnuLoka are different. Patala and Vyahritis are different. Lord Hanuman has called 'Vyahritis' as higher worlds and 'Patalas' as lower worlds. Only 7 Vyahritis above us are perceptible to us. Only 7 Patals below us are perceptible to us. For sake of our observations, we can say that there are 7 Patals and 7 Vyahritis. But actually they are infinite. To visualize this, you may imagine that you are in a mysterious room which has doors in all 4 directions + doors on the ceiling + doors on the floor. You can exit from any door and you will get into another world. And there is no end thereafter. You may keep on going and you will find no end. If you exit from the doors in the ceiling, you are going higher. The worlds which exist beyond those doors are 'higher worlds' or vyahritis. Similarly the worlds which exist beyond the doors in the floor are called Patals or lower worlds. The doors in the 4 walls of the room lead to parallel worlds.\n\nthe words you have written in paragraph 4 should be meditated upon deeply by you. These are divine words which show that you were in a very high level of consciousness when you wrote them. Here is a hint which will help you in sailing in correct direction :\nSuppose you do not have any identity. You are in complete darkness. Then you happen to find a box. You open the box and discover a identity and whole universe which comes with an identity. Within a second you start identifying yourself as a human which is in MaanavLoka where Lord Vishnu is expected to come for welfare of the world. When you close this box again, you again lose everything and go into complete darkness. You forget about humans, MaanavLoka, Lord Vishnu and everything. You are in that box right now. Lord Vishnu is the power which helps you realize that you are in a box. You have written this paragraph by the blessings of Lord Vishnu. If you manage to come out if this box, it will be thanks to Lord Vishnu. Coming out of this box means attaining Moksha.\n\nKaamdhenu is when you don't come out of the box but get the ability to jump from one box to another.\n\n||Ram||"
},{
id: 525,
header: "Heaviness in head",
question: "A friend of mine suggested this website yesterday. Today I read the first chapter fully. I don't feel wow but stunned that how connected we all are and that we are all part of an illusion. Felt heaviness in the back of my head initially. Later slightly dizzy. Should I continue reading? I am a Christian and have not done arpan before. What does it mean? If I make an arpan, what am I committing myself to?\nI felt some energy in my body while reading this first chapter. Am I feeling outside energy because my own energy is weak? Please help, jai guru dev.",
answer: "Divine Soul,\n\nDizziness and heaviness may happen because first chapter creates a strong disillusionment about the world in the reader. It basically switches you one layer up from your bodily identity towards your soul identity. Switching from smaller identity to larger identity involves energy which you feel flowing towards you.\n\nArpanam can be done to any deity you worship. It is a commitment to the deity that, \"I have switched to a higher identity by reading this chapter and I do not wish to fall back on the smaller identity.\" .... OR \"I have taken one step towards realization of supreme truth and I don't want to go back\". Arpanam should be done immediately after feeling that energy as you have described. Fruits or flowers can be offered to deity at home or temple.\n\nBlessings"
},{
id: 526,
header: "help",
question: "Swamy i am in a big problem. Please help me immediately please."
},{
id: 527,
header: "Help me",
question: "Hi mera naam prayas hai. Maine hanuman g ki puja ki hai 2 yrs. Tk aur maine aisa anubhav kiya hai ki wo mere saath hai... mujhe aane waale bhaviysha ka ghyaan hone lagta tha apne baare mai aur mai khuli aankho se ghatit hone waala ko dekh sakta tha...pr meri puja chut gayi. . Aur hanuman g ki kripa b hat gayi... ab mai bahut pareshan hu...apni life se sankat hi sankat hai har jagh\nAb unki puja ki koshish krta hu...pr waise puja mere se nai ho pati jaise mai pehle kiya krta tha...mai mantro ka jaap kiya krta tha ik pustak se padhkar jiska naam hanuman sidhi tha..\nKuch hanuman g se sahyta mil jaaye to mai phr se unki puja aarambh krna chahta hu pr dil se nai ho paa rahi hai puja"
},{
id: 528,
header: "Help me get a glimpse of Shri Hari Shri Ram",
question: "I am 32 years old and am living in a state of indecision not knowing what to do. I am working as a banker but not satisfied. I have worked as software engineer but was not very happy . I feel something is missing in me but don't know what is that? I take Ram's name I remember Lord Hanuman several times but don't find him anywhere? I want to be on the right path as Lord krishna says you do my duty i will take care of you. What is that Lord krishna wants me to do?\nWhat was i in my previous birth?",
answer: "Divine Soul,\n\none should always have a higher purpose in life like Moksha or getting supreme knowledge. Then only you get peace, happiness and satisfaction in life. Ultimate destiny of every soul is Moksha or liberation from the mortal worlds. If a soul has reached to a certain level on path of Moksha in previous birth, but in present birth has completely forgotten it's purpose of life, this kind of feeling of disturbance arise. You don't need to know details of your previous births in order to resume your journey. When you start it, you will realize that you are already evolved to a certain level. You don't have to start afresh. You can resume from where you stopped in previous birth.\n\nBlessings"
},{
id: 529,
header: "Help me Hanuman Ji",
question: "I need help in getting permanent job and want to get married .. nothing at all happening , feel like ending my life lost trust in all Gods and myself and fed up in this bad world , ave been cheated in life and in job , marriage also .\n\nArathi jain",
answer: "Divine Soul,\n\nYour prayer has been initiated. From today, get rid of negative thoughts. Look around you with a positive outlook. We have got a message that you do not listen to the signals of Lord Hanuman. To get something good in future, you need to be in peace with your past. From this moment, forgive everyone who has cheated you. From this moment, stop repenting on your past. If you forgive everyone and remove the baggage of your past from your back, very soon you will get someone in your life who will bring good luck in your life. As of now, be happy with whatever job you are doing. You should be proud of yourself that you have lived your life with dignity so far. Do not care about what others think about you. Love yourself and be proud of yourself. You have lived your life with dignity, do not let others ruin your love for yourself. Soon you will get someone in your life and after that your life will become secure on both personal and professional front. Do not forget the conditions: (1) Forgive everyone who has harmed you. (2) Stop repenting on past and look towards future (3) Be proud of yourself and love yourself.\n\nBlessings"
},{
id: 530,
header: "Help me please.",
question: "Jai Sriram,\n\nContinued from #499073.\n\nI understand intellectually that all that happens ,happen for a reason. My fear of worshipping God came from the fear of unforgiving parents who gave me cruel punishments and mental torture. I am ashamed to say that today I am a person with very low self-esteem , afraid of people and indecisive. I have this belief that if parents themselves don't understand kids and punish them cruelly why wouldn't God do the same?\n\nKindly answer me.",
answer: "Divine Soul,\n\nAt least feel blessed that you have a different perspective from the crowd. While most people worship parents because of the love they get from them, you have a completely different experience. Hence you are at an advantageous position as far as perspective is concerned. When you have a different perspective from others, you are closer to God because it become easier for you to rise above body-mind and live at the level of soul.\n\nThink like this. That is how you amend the past and move towards a better future.If you remain stuck with the bad memories of past, the future wont come out good either.\n\nBlessings"
},{
id: 531,
header: "help needed",
question: "Hi\n\nThanks for bringing light to me. After reading I got lots of answer in my life\n\nHowever I have few queries\n\nFrom Past almost 6 months\nMost of time I have depression and unhappy from my life. Recently looks like I am being sort tempered getting angry quickly and fearful\n\nPlease help\n\nBhavesh",
answer: "Divine Soul,\n\nYou are blessed one. Lord Hanuman wants you to observe who is getting short-tempered and who is getting angry. It is not you. When you get angry, just watch yourself. This is a way of Lord Hanuman to teach His disciples. Just observe yourself. There is no need to suppress these feelings and no need to feel bad about it. He wants you to separate your body-mind and soul. The anger comes in body-mind. You are a soul, not body-mind.\n\nBlessings"
},{
id: 532,
header: "Help Required",
question: "My self always believe that we all are child of lord Hanuman and I feel from child hood that I am a part OR an extension of lord Hanuman soul. I always prayer only lord Hanuman and fully devoted to them. Also after getting membership of \"Setuu\" and reading there chapters, I feel my cleanness of my soul from dust.\n\nBut, from last 1-2 years, nothing is going positive in my life and all thing goes wrong OR unhealthy. It gave me feeling that Lord Hanuman is not happy with my soul, it may be possible that something goes wrongly by my work which can hurt the lord.\n\nI want to ask lord Hanuman through your team of Matang's , please let me know my mistake and it's solution, so that my life will again go smoothly and my all work will be done positively and myself leave the life with his blessing.\n\nAwaiting your revert.\n\nThanks & Regards,\n\nRajesh",
answer: "Divine Soul,\nAnger and Cheer are Lord Hanuman's Leelas to bring a devotee on right path. It doesn't mean that He doesn't care for you. Those souls who are not connected to Him neither get anger nor cheer from him. So, even if you have faced His anger, that means your soul is connected to Him and He loves you.\nJust take care of these 4 things-\n(1) Make sure you have a deep desire to reach goals : Be it materialistic goal or Moksha.\n(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\", \"worry\", \“doubt\”, \“victimhood\” etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
},{
id: 533,
header: "Help & Support",
question: "Glad to read and know about Sh HanumanJi presence and kindness showered on us still. I am very spiritual and believe in God, the life cycle and karma. Hope my offerings please HanumanJi and I seek his kindness, wisdom and togetherness in return, always and always in this and next birth too.\n\nDear setuu.org team, I would be happy if I could be of any operational support in this great cause by any way possible. I would feel privilege in helping you to deliver all the chapters of the book to the world, or in any other form.\n\nThank you Again!"
},{
id: 534,
header: "Help Us Lord",
question: "Everyday when i wake up,, I thank the God to for helping me ,to bless those born with good health,to give a happy life for those married & to please give moksha to 5hose dead.Thank you God for letting me start everyday with a good note.I start writing my experience by thanking all those who have helped me directly or indirectly to be who Iam now.After reading Lord Hanuman's chapter about the past, present & future,I told my Mother and we did dussehra dishes ,, Prayed to Lord and distributed them.God I have a few wishes , My Mother has suffered soo much in the past and is suffering even in the present , knowingly she has nt done any harm to anyone she has mostly gone in the path of righteous , please Help My Mother My Lord. Iam studying in a place where we students are treated like animals , please Help me Lord to complete this course with minimal obsracles that i can bear.Please Help My Mother,Father & Brother to have all thier good wishes fulfilled and please make them happy my Lord. I also wish that Lord my Husband to be and his Family & All Others in this World be blessed with Happiness and Good Health ; to help those to get knowledge and regret for their mistakes who have did wrong deeds in thier life."
},{
id: 535,
header: "Hey Prabhu DsharathNandanPramDas!",
question: "||Ram||\n\nBar bar ki asflata kya batati hai..pichle janam ke karam ya is janm ke karam me kami ?\n\nmai kai sarkari jobs ke from bhar chuka hoon..lekin har bar asflta..mata pita ki ummede kuch puri nhi ho rhi..is deh ke jane kitne karam bandhe hain.ek Jyotishi ne bola ki aapki kabhi sarakti job nhi lagegi..to kya me prayas band kar doon ab ?\n\nab Umra bhi 31 ki hone aagyi..lekin me prayas karta rhunga..akbhi to karam katenge pichle\n\njeevan ka Lakshya bus yahi hai ki kha liya so liya,kuch jeevan ke liye uprajn kar liya..aise hi budhe hokar mar gye?\n\n||Ram ||",
answer: "दिव्य आत्मस्वरूप ,\n\nइस बारे में इंद्र देव ने ११ वे अध्याय में बताया है | अगर आपके कर्म (इस जन्म और पिछले जन्म मिलाकर) योग्य हों तब इच्छा पूरी होती है | यह बहुत पेचीदा प्रश्न है और इसके कई पहलु हैं | अगर आप चाहे तो पिछले जन्मों के सभी कर्म शुद्ध कर सकते हैं | शुद्धिकरण का एक तरीका १२ वे अध्याय में बताया गया है | आगे के अध्यायों में भी कुछ पहलु सामने आयेंगे |\n\nएक बात ये भी है कि माता पिता अथवा किसी भी अन्य व्यक्ति को अपनी इच्छा में सम्मिलित मत कीजिये | इससे उनके कर्म भी आपके कर्मों में जुड़ जाते हैं |\n\nज्योतिष मात्र एक गणना है जो सही भी हो सकती है और गलत भी | उस गणना के आधार पर हार मान लेना गलत है |\n\nहर आत्मा का उद्देश्य मोक्ष होना चाहिए | तभी जीवन में संतोष और शांति आती है | उदाहरण के तौर पर , यहाँ पर एक भक्त ने कुछ महीने पहले इच्छा प्रकट की थी कि सरकारी नौकरी मिले | वह उसे मिल गई | अब हाल ही में उसने लिखा कि नौकरी तो मिल गई किन्तु मुझे शराब की लत लग गई है , उससे छुटकारा दिलाइये | जब यह इच्छा भी पूर्ण हो जायेगी तो कोई और इच्छा आ जायेगी | ऐसा जीवं पशु के जीवन के समान है : जहाँ घास मिला उधर हो लिए | इसलिए बड़ी इच्छा रखिये - मोक्ष की इच्छा रखिये | बाकी इच्छाएं शांति कभी नहीं ला पाएंगी |\n\n|| राम ||"
},{
id: 536,
header: "Hey Prabhu Krodh aur akrmanyta...",
question: "Jai Shree Ram!\n\nHey Prabhu jab Krodh aur Akarmanyta bdhe tab manushya kya kare..jisse ki jeevan me sambndhit aatamao ka udhhar ho..\n\n|| Jai shree DashrathNandanPramdas(Hanumanji) ||",
answer: "दिव्य आत्मस्वरूप ,\n\nआपका जो हिस्सा क्रोध और अकर्मण्य धारण करता है उसे देह तथा मन कहते हैं | आप देह और मन ही केवल नहीं हैं | आपकी पहचान आत्मा की है | जब देह-मन में असुरी प्रवृतियां आने लगे तो आत्मा के स्तर की और उठ जाइए, व प्रवृतियाँ चली जायेंगी | या फिर उन प्रवृतियों का देह और मन के स्तर पर रहकर ही विरोध करें और सूरी प्रवृतियाँ लाये ताकि असुरी प्रवृतियाँ भाग जाएँ |\n||राम||"
},{
id: 537,
header: "Hi",
question: "Hi\n\nJay hanuman\n\nI m devotee of hanuman.\n\nNow a days i m facing lots of problem.\nPaise ka itna tension he paise aate nai he sirf karcha hota rehta he.\nKab tak ye bure din he meri life me.\n\nLast 6 8 months se esa hi chal raha he\nKuch achcha hoga ya fir sab esa hi rahega.",
answer: "दिव्य आत्मस्वरूप ,\n\nधैर्य रखिये और अपना ध्यान रोजमर्रा के जीवन के अलावा किसी बड़े उद्देश्य जैसे ब्रह्मज्ञान/मोक्ष की प्राप्ति आदि में लगाइए , सब कुछ अच्छा होगा |\n\n||राम||"
},{
id: 538,
header: "hindi",
question: "deen dayal birdu sambhari harhu naath mam sankat bhari isme bahut sakti hain bade sankat ke samay main is mantar se akdam raksha huyi"
},{
id: 539,
header: "hindi mai margdarshit kare...",
question: "As per u said in chapter 7,\n\nलगभग 3 घंटे बीत गए | बसंत की टोकरी में अब केवल 1 फल बचा था | लाल टोकरी में ज्यादातर फल गए थे जबकि एक दो फल श्वेत टोकरी में दिखाई दे रहे थे | जब कोई फल श्वेत या लाल टोकरी में गिरता था तब बसंत की आत्मा हल्का महसूस कर रही थी क्योंकि उसको सुरों और असुरों के प्रभावों से छुटकारा मिल रहा था |\n\nHum jab setuu par arpan bhejte hai paiso k roop mai,\nTo aap log hamare paiso se fal khareedte hai charan pooja k liye ?\nAur kya humare fal charam pooja maI shaamil hote hai matango ki tarah ?\nAur wo humare fal bhi karmo k hisaab se alag kiye jate hai ? Jisse humari atma ko bhi sur aur asoor k prabhaav se chhutkara mile?\nKya process hoti hai humare kiye huve arpan kii ?\nPlz I want to know it...\n\nPlz reply me in HINDI ONLY",
answer: "प्रक्रिया तो वही होती है किन्तु आपके भेजे फल चरण पूजा में नहीं साक्षात् हनुमान पूजा में अर्पित होते हैं जो रोज होती है | चरण पूजा केवल 41 साल में एक बार होती है |\n\n||राम||"
},{
id: 540,
header: "Hoi gurudev",
question: "Jai gurudev. How I apply these knowledge in my life. May I make Arpan at my local Honuman temple.",
answer: "Divine Soul,\n\nYes, Arpanam of fruits and flowers can be done in any Hanuman temple. This knowledge is transcendental, just flow with it. It will take you towards Moksha,\n\nBlessings"
},{
id: 541,
header: "Hope that Future will be good",
question: "\"Continued from #495374\"\n\nThanks for the quick reply. I must say after going through your reply a positive energy comes to me and I feel more energetic and confident than before.\nI don't think about what people think about me. People say so many things behind me and in front of me too. But I try to ignore everything and focus on my work.\nForget people, sometimes even I start thinking about myself. It has been almost more than a year and I am not able to get a good job. Time is passing and I am not able to stand on my feet. Still I am dependent on my parents. I don't understand what and where the problem is. Why I am not getting a good job of my liking? Are my Karmas not enough to get a good job of my liking?\nNot always but sometimes I really get depressed, frustrated and worried regarding my career. Even after studying so much, I am not able to grab a job yet. Many of my friends and others get job just after B.Tech. I did M.Tech and too from one of the premier colleges of the country but I am finding it hard to get a good job. I am not comparing myself with others or my friends. I am just saying. I know everyone's Karma is different. I have been a good student since childhood but I don't know why I am facing so many problems in getting a good job.\nBut I have full faith in Hanumanji and I believe soon he will give me a very good job. I don't know what he has thought for me. But whatever he has thought for me must be good for me in the long run. He must have something bigger and better for me.\nAnd I believe in your words too Setuu. You have told me Accept the past, live in the present. Do your Karma without any worry, Future will be good. If you are saying that my future will be good, then, I am sure my future will really be good.\nI have started reading Sunderkand. I read 12 dohas everyday and in this way Sunderkand will be completed in 5 days and the cycle will be repeated. Also, I have started chanting Hanuman Chalisa 11 times or more everyday.\nMy Pranam to Setuu Masters and Mathangs.\nThanks and regards.\n\nJai Shree Ram\nJai Hanuman"
},{
id: 542,
header: "Horrible Feeling",
question: "My dear Lord Hanuman,\n\nI am going through a very bad stage now. My mind is experiencing a kind of fear that i become mad or something. I feel very low nowadays. especially after my marriage. Its been 5 years since i got married and i m really unhappy. I have a daughter now. But throughout my married life, i had bitter experiences only. I have no day without crying. Even my husband was careless on me, even sometimes i feel hes still the same now.\nIn 2012, I have been working in a firm. During that time, i stayed in my home and travelled to the job place. And each weekend, my husband used to take me to his home, just for the sake of showing other people that i visit my husband's home. Neither he nor his parents talked to me with compassion or love. They saw me as some girl from outside. I have never felt any attachment towards them. Initially, even though i considered all of them as my close people, eventually, they proved that they are not as sincere or genuine as me or my parents. And later, since i suffered from certain mental problems, I was taken to a Psychiatrist. And then later, i was almost cured from my big problems which i suffered mentally. Even now, im taking my medicines, prescribed by the Psychiatrist.\n\nNow, again, i have started feeling the same suffocation i used to experience before. And now, what im thinking more and making me kind of mad is i couldnt marry a person of my wish or i didnt get the person i liked.\n\nHanumanji, please save me from all these unnecessary worldly thoughts, and kindly help me live in midst of peace and happiness, and also good people around me, who doesnt hurt my feelings. Bless me Hanuman swamy. Please save me from all fears, anxieties, evils, tensions and other health problems.\n\nPlease hear my Prayer Hanuman Swamy",
answer: "Divine Soul,\n\nIf an animal wants to hurt a human, human can climb to a higher place like a tree where animal cannot reach.\n\nEveryone of us has a higher place to climb. That higher place is our soul. People can hurt mind, not the soul. Rise to the level of soul and then enjoy the drama being created by ignorant people. Recognize your soul. Your circumstances are an opportunity in disguise.\n\nBlessings"
},{
id: 543,
header: "How to be free from Desires and Attractions?",
question: "O Lord Please give some clarity!!!\nTo lead a peaceful life- a Desire.\nTo lead a financially secured life- a Desire.\nTo lead a successful and stress-free life - a Desire.\nTo bring up children as useful citizens- a Desire.\nThese seem noble..\n\nTo experience every possible comfort - a Desire.\nTo experience richness and power - a Desire.\nTo experience pollution free environment -a Desire.\nThese seem selfish...\n\nTo do a disturbance -free penance and impress God- a Desire.\nTo be able to become one with the Para Brahman- a Desire\nThese seem spiritual....\n\nWithout desire I am unable to live. I am so weak to resist any sort of attraction. How can I overcome this problem?\nEveryday if one swtiches his TV on, many advertisements show casing many Yantras (like Shani Hanumathe Kavach) and other spiritual related goods like rudrakshaas, pendants etc are being aired. Is this the correct way to pursue buying them or is there any way to reach one's own inner self?\n\nO Guru!!! Please enlighten!!!",
answer: "Divine Soul,\nDo not believe in superstitions. If you want to fulfill your desires, here are the 4 things you need to take care of:\n\n(1) Make sure you have a deep desire to reach goals.\n(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\" and \"worry\" etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
},{
id: 544,
header: "How to be liberated inside the world",
question: "Jai Shri Ram\nJai Shri Hanuman\nPranaam,\nI am a 21 year old male currently pursuing my Engineering. I have no shortage of anything in life due to Prabhu's grace. Every time I am in danger, Prabhu comes to my rescue. My Lord is always watching me.\n\nAs mentioned earlier, I do not lack anything in life. I have a great family, a good future and no financial issues. However, due to the immense blessings of my Lord, I have a spiritual bent of mind. While I am attracted towards questions like \"Who am I\", it is the bhakti of My Lord that gives me the most joy. Listening to my Lord's Leelas often brings me to tears. I know that the form of Bhakti I have is lowly and that it is due to His infinite kindness that Lord Hanuman has taken care of me. However, I still do not have a burning desire for his Darshan. I feel that maybe this is because the time has not yet arrived but I know that I love My Lord a lot. Even when I am in difficult situations, I know that my Lord will do nothing that can harm me. So every bad situation is a blessing in disguise that removes my bad karma.\n\nWhat I want to know, however, is that how can I attain Moksha while being in the world. While I am ready to give up everything (not at the moment though, I will prepare my body first) for Moksha, I feel that I have a sense of duty towards my parents. They spent their entire life for me so it's my duty as a son to see to it that they receive all the happiness in their old age. I know, this may be a form of attachment, but still, I am ready to leave everything after they depart their worldly bodies. I want to provide them with all the happiness possible. I will take on any bad karma if it removes their sorrows.\n\nTherefore, Dear Setuu Masters, I want you to guide me, as to what to do next? I feel that Lord Hanuman will talk through you and provide me with answers. I have received some answers. Some answers remain. Please guide me. I know that by the Grace of Lord Hanuman, I will surely get advice.\nSorry for the long post, I just wanted you to know my situation.\nI look forward to your words of wisdom.",
answer: "Divine Soul,\n\nTo Grihastha Sadhakas, we can only suggest reading Lord Hanuman's Leelas being published here. You should fulfill your family responsibilities sincerely. Your words suggest that you are a sincere seeker. When there is a sincere seeking of supreme knowledge, there is a Guru. That Guru can be invisible, That Guru may or may not be human, That Guru can be Lord Hanuman Himself. You must be having a Guru around you. Recognize that Guru. He will create situations in your life in order to impart supreme knowledge. Observe those situations. While your boy-mind are performing worldly duties, at the same time your soul can remain connected with the Guru. Then your life itself will become a Sadhana. Then you will be on path of Moksha.\n\nBlessings"
},{
id: 545,
header: "How to be a perfect human",
question: "with people around us, with different characters i am finding it hard to digest their selfish characters. Please advice",
answer: "Lord Hanuman says,\n\nIt is good that banks of a river does not attract the impurities towards it. Let the impurities flow in the river. If banks of the river start collecting the impurities, river will start shrinking and one day it will disappear. Only impurities will remain. When you look at the impurities flowing in the water, do not say- ,\"Impurities are so lucky. They are enjoying the ride in the river.\" Instead say- \"I am the banks of the river. I have bigger responsibilities.\""
},{
id: 546,
header: "How to be sure that you are on right path now...",
question: "I would like to know that in our life we choose so many different paths, and due to this sometimes get confused about the correct one. How can we make us assured that we are on right path.",
answer: "Divine Soul,\n\nRight path is a relative term. Set your goals first. At a given time, with all the information and authority at your command, if a path looks right for your goal, you should follow that path.\n\nIf your goal is Moksha, Just observe how do you feel while following a path. If you feel connected with the higher reality while following the path, you are on a right path.\n\nBlessings"
},{
id: 547,
header: "HOW CAN I DEVELOP A STRONG BELIEF TOWARDS LORD HANUMAN",
question: "\"continued from experience 513746\"\nजय श्री राम\nजय श्री हनुमान जी\nहे प्रिय मातंग ऋषियों आपको चरण स्पर्श।\nमैं दो महीने पहले setuuसे जुड़ा। तब मैं श्री हनुमान की भक्ति में खो गया,मुझे हर तरफ हनुमान जी महसूस होने लगे। तभी मैं एक परीक्षा में सफल हुआ लेकिन मुख्य परीक्षा में सफल नहीं हो पाया फिर मेरे अन्दर भक्ति कम हो गयी लेकिन मैंने आपके अध्यायों को पढ़कर थोड़ा बहुत जो नालेज पाया हूँ वही मुझे भगवान से जुड़ने की ताकत दे रहा है।\nमैं और किस प्रकार श्री हनुमान जी से मजबूती से जुड़ सकता हूँ।क्या मेरा स्वार्थ मेरी कमजोरी है? अभी मैं अपने जीवन की कठिन परिस्थितियों से गुजर रहा हूँ। मेरे माता पिता जब किसी पंडित या ज्योतिषियों से मेरे समस्याओं का समाधान पूछते हैं तो वो लोग मुझे श्री हनुमान जी की पूजा करने की सलाह देते हैं और वानर को चना खिलाने को कहते हैं। मैं हर मंगलवार व्रत भी रखता हूँ जिससे मुझे अच्छा अनुभव होता है।\nमैं श्री हनुमान जी से किस प्रकार जुड़ा हूँ और मैं कैसे उनसे मजबूती से जुड़ सकता हूँ,ताकि मेरे कर्म मेरी सफलता के लायक बनें।मेरा मार्गदर्शन करने की कृपा करें।\n।।श्री राम।।",
answer: "दिव्य आत्मस्वरूप ,\n\nअपनी भक्ति को सांसारिक सफलताओं और असफलताओं से न जोडीये | हनुमान जी की भक्ति को मोक्ष से जोडीये , फिर भक्ति प्रगाढ़ होगी और सांसारिक चीजे अपने आप पटरी पर आ जायेंगी\n\n||राम||"
},{
id: 548,
header: "How can a student grow in his career and spirituality at the same time",
question: "Jai Hanuman.\nI'm kalyan a medical student. I don't remember how i came to know about setuu but since the day i first read the first chapter my life or to be precise my view about the world has completely changed. It was like lord hanuman wanted me to follow his path. It is a great blessing for me. I am kinda interested in spirituality since my childhood. I used to go to hanuman temple every Saturday all my childhood untill i was kept in hostel for further studies. But after knowing about lord hanuman return after 42 years love for spiritual path in me has increased tremendously. I think it is only because of lord hanuman's blessings. Thank you so much setuu for connecting my lord with me again.\n\nHere's my question:\nSince im a student i have to continue my career and be part of family. Since I'm the elder son and lost my father when i was 12years old i have a lot of responsibilities for the family. I'm a little short tempered also which i want to change all the time but couldn't do it. Can you help me in enlightening me with this knowledge of how to manage both family and spiritual life parallelly and how to get off the anger from me. Thank you. Jai hanuman.",
answer: "Chapter 27 answers your question."
},{
id: 549,
header: "How can we get associated with lord ?",
question: "Its always said that human life is very precious and being in materialistic world we are always busy in various other activities which does not serve the purpose in true sense of getting the ultimate goal of human life.\nIt seems so hard to be left pure as these blessed tribes are in this world so the chance of getting interacted to lord Hanuman ji is very less. Lord Krishna or Ram is said to be the ultimate supreme in the universe so is there anyway we can get directions from Lord Hanuman ji to get Lord Krishna in our lives. I mean to say if Lord Hanuman can guide us a way like Guru. Since lord Hanuman is nearest and dearest to Lord Krishna and Ram.\nI urge to leave this body and get my tiny soul be the part of ultimate soul of that Prmatma or to remain in the consciousness of Lord so as to serve throughout. Since being human we are always indulge in the materialistic activities and slave to the maya and moh. How can we be associated to lord and can get escape from this annoying experience of repeated births and not getting what we are looking for.",
answer: "Divine Soul,\n\nLord Hanuman comes to the Mathangs to give them Brahmagyan. Whatever He has spoken, He has spoken to unsettle the structured belief of the new generation of Mathangs and to make room for the BrahmaGyan. Therefore If you accept Him as your Guru and follow the conversation between Him and Mathangs, we can assure you that you will also get the Brahmagyan. We are translating the Log Book. Do read every chapter as we post them. We will be posting second chapter shortly.\n\nBlessings."
},{
id: 550,
header: "How is caste of a person correctly determined?",
question: "Dear Setuu Team,\nIs the caste of a person supposed to be determined by his birth or by his profession?\nThank you.",
answer: "Divine Soul,\n\nAs described in chapter 20, humans create systems of classification for smooth functioning of society but these systems turn out to be faulty and have to be chucked or repaired over time. Firstly, no human designed system is perfect. Secondly, when times change, almost all systems get infested with social evils. No system is flexible enough to last forever. Current caste system is beyond repair.\n\nTo answer your question, caste of a person cannot be determined by birth. That can be implemented if all children, no matter what their parentage is, are admitted in an education system which gives equal opportunity. Their caste should be determined after graduating from that education system, based on how their characters develop.\n\nBlessings"
},{
id: 551,
header: "how to chant om mantra",
question: "जय श्री राम\nजय श्री हनुमान\nमातंग ऋषिओं को मेरा प्रणाम एवं नमन\nमैं लगभग तीन महीने से ॐ मंत्र का उच्चारण कर रहा हूँ। परन्तु मुझे इसका सही उच्चारण नहीं पता। अगर मैं इसे तेज ध्वनि में उच्चारण करता हूँ, तो इसका अलग प्रभाव दिखता है। पर यदि धीमी आवाज में उच्चारण करता हूँ तो इसका अलग प्रभाव दिखता है।\nमैं अपने आप ही ओम मंत्र का उच्चारण करने लगा था। मुझे पता है कि ये सब श्री हनुमान जी की कृपा है। ओम मंत्र की महत्ता का मुझे पहले पता नहीं था। लेकिन जबसे मैंने इसका उच्चारण आरंभ किया तब से मैं ऐसे अनुभव किया कि उसे शब्दों में नहीं बता सकता। इतना कह सकता हूँ कि ये मंत्र हमें ईश्वर के करीब ले आता है।\nकृपया मुझे बताये इस मंत्र के बारे बतायें। क्या श्री हनुमान जी ने कभी इसकी उत्पत्ति के बारे में कुछ बताया है।\nकृपया मुझे इस मंत्र के उच्चारण का सही तरीका बतायें।\nजय सीता राम\nजय हनुमान\nअपनी कृपा बनायें रखें।",
answer: "दिव्य आत्मस्वरूप ,\n\nहनुमान जी ने विश्व की हर चीज के बारे में विस्तार से बताया है लेकिन उनकी लीलाओं को समझने में हमें समय लग रहा है | आप आने वाले अध्यायों में धीरे धीरे विश्व का सारा ज्ञान प्राप्त करेंगे |\n\n||राम||"
},{
id: 552,
header: "How to communicate with our own Antaryamin?",
question: "Pada Pranams to the Lotus feet of Shree Hanumaan ji.\nNamashkaar Setuu Masters & Mathangs\nWhat is sadhana/ contemplation required to achieve Mukthi & God Realization? Is love and devotion towards the Aaradhya alone enough for that? Humans beings are stucked at various levels such that they are unable to seek the real path to Enlightment. Please guide us and help us to understand its necessity with your incredible wisdom.\nWhat is the way to recognize and communicate with our own Antaryamin?\nI completely believe that the phenomenon of Kalki has already descended on Earth to save the Humanity and make the righteous stand for the coming ages because kali yuga is at its peak. Please enlighten us about it.",
answer: "Divine Soul,\n\nIn Kaliyuga the illusion is at such a peak that you may be in illusion that you are devoted to Lord but actually you may be entertaining the Asurrahs residing in your body-mind. Therefore, at this point, only the supreme knowledge is that sword which can break the illusion and help us realize the supreme truth. Lord Hanuman is imparting that knowledge through these chapters and Lord Kalki will have His own ways to do so.\n\nBlessings"
},{
id: 553,
header: "How to concentrate on aim",
question: "\"Continued from #46195\"\n\nJai Bajrangbali\nJai Shree Ram\n\nAs I have mentioned in my previous experience that I didn't do well in my first two exams of training, I am not getting peace of mind. All the time, fear of losing the job comes to my mind. Also, I am not able to concentrate on my study for further exams. I am really very much disturbed.\n\nI don't know why all this is happening to me. All the time I just keep on thinking how will I complete my training and save my job. Every time I pray to Lord Hanuman for my job.\n\nI just want to know if Lord Hanuman is testing me by creating such situations? I have been in such situations earlier too. Every time I came out of it with the grace of Lord Hanuman. I always think nothing wrong can happen to me as Lord Hanuman is always there to protect me.\n\nOnce you told me that even the greatest bhakts of Lord Hanuman have to go through many difficulties to reach very close to Lord Hanuman. Is my present situation similar to or related to it? I also want to be very close to Lord Hanuman. I am just a mere ignorant bhakt of Lord Hanuman. I don't know what Prabhu has thought for me. May be he is doing all this thinking of my long term benefit and I am not able to recognize it because I am looking for my short term benefit. Also, I don't know about my karms in my previous births.\n\nSuch thoughts always come to my mind. I don't know whether this is right or wrong. I am saying all this to you so that you may tell what is right. Also, after going through your reply I really feel relieved and feel good and confidence come to me. And I think I have moved one more step closer to Lord Hanuman following your advices. Please forgive me thinking as an ignorant if I said anything wrong.\n\nRight now I am really very disturbed. All the time, fear of losing the job comes to my mind. I am not able to concentrate on my study. I really need to concentrate on my study seriously and pass all my tests and retests and complete my training. Please show me the way.\n\nJai Bajrangbali\nJai Shree Ram"
},{
id: 554,
header: "How do I know and when do I know that i become eligible for sadhana",
question: "Before reading your answer I thought i was in spirituality but you said that\n\"He would think that he is in to spiritually but actually he would be in to an illusion of spirituality created by Maya\"\n\nHow do I know that iam in spirituality?\nAnd you said there is a huge difference between running away and detaching away\n\nAt present iam 20 in a year or two I have to find a job to earn my living\nHow many years do I depend on my parents?\n\nWhen I get a job I will in that tension\nAfter wards Marriage\nChildren\nBringing up the children\nold age\nDiseases pains\nAnd finally death\n\nI don't want to get in to that trap\nAt present I don't have much attachments but when I get a job marriage children\nI will have my wife, children, there children\nGrand sons grand daughter and so many attachments\nI don't want that attachments\n\nBcoz I don't want to waste my precious life\nI was worried about leading the life in a normal way\nBut after reading Setuu Hanuman stories\nI realised that I shouldn't waste this precious life\n\nI don't want to get in to that routein human cycle\nI want to detach away and come to setuu Hanuman bodhi and have Sadhana\n\nI want to know how do I become eligible for sadhana\nWhen do I become eligible for sadhana?",
answer: "Divine Soul,\n\nYour current state of evolution is such that you would want to run back to the society within 1 month of obtaining Sanyasi robes. You need at least 6 more years in mainstream society to find yourself and your purpose. Living in mainstream society with unusual and 'far from ordinary' tag is itself a Sadhana. Don't run away from this Sadhana. Face the people who are saying mean things about you. Face the society which is out to judge you. When you do this Sadhana, you will actually realize the illusion. Right now you have only read about it and it has pierced you only upto your intellect. Let it pierce further and reach your soul.Don't worry about marriage and kids. It won't happen in next 6 years. You are safe from that trap as long as you truly intend to become a Sanyasi and Lord Hanuman is there to guide your steps.\n\nBlessings"
},{
id: 555,
header: "How do I know that you are able to listen to my prayers",
question: "Being a normal human being how do I know whether my prayers are reaching to Lord Hanuman or not....so that I can correct myself. ....I need his blessings"
},{
id: 556,
header: "How do souls in Muktisagara develop desire?",
question: "Dear sirs,\n\nAttaining moksha requires supreme knowledge about releasing the concept of 'I' and also to be void of any desires, sorrow, pleasure, pain, etc. And attaining Moksha is the supreme goal of any soul once it understand the web of nets the mortal world is. And once the souls attain Moksha (leaving the karma and desires and also understand that there is no 'I'); they enter Muktisagara.\n\nOnce they are in Muktisagara, please enlighten me on the different reasons why souls leave them - as i understand there could be 2 reasons:\n\n1. Illusion of Brahmaloka being so powerful pulls the souls out of Muktisagara\n2. Souls developing desire\n\nMy questions are:\n\n1. Are there any other reasons for souls to leave muktisagara?\n2. How does a soul develop desire Muktisagara since it will get all that it needs within Muktisagara itself?\n3. What happens to a soul without any desire being pulled out of Muktisagara due to the illusion power of Brahmaloka? does it go back into Muktisagara?\n\nI find the chapters peeling off all my questions and providing a better understanding of the universe. I really pray to Lord Hanuman to provide me with the knowledge to attain Moksha.",
answer: "Divine Soul,\n\nThese questions are meant to be answered gradually in stages. If your mind gets satisfied right now, it won't be able to absorb further supreme knowledge. Please wait for upcoming chapters and enjoy the journey as it unfolds. Only the Guru Shri Hanuman knows when to ignite a question and when to answer it.\n\nBlessings"
},{
id: 557,
header: "How does Illusionary universe help us attain moksh",
question: "Jai shree Ram! Hanuman ji. I dont understand this concept of illusion. I want to know if we are also living in illusion. Isn't this real world and also want to know how we can attain moksh by bypassing this illusionary universe. Please help me understand hanuman dada",
answer: "Divine Soul,\n\nYou have to experience the supreme truth yourself. Anybody else may guide you or inspire you to take the journey of the supreme truth but the journey has to be undertaken by you and only you.\n\nBlessings"
},{
id: 558,
header: "How does Lord Hanuman look?",
question: "Dear Setuu,\n\nNone of us have ever seen Lord Hanuman except in images and idols.\nCan someone from Mathang community actually depict a sketch of Lord and post that in the subsequent chapters?",
answer: "Divine Soul,\n\nEvery word and every piece of content being posted here is posted only after taking permission from the Lord in Sakshat Hanuman Pooja. When He asks us to reveal His visible form, we will. He has not given this direction yet, most probably because visible form will be hindrance in imparting the supreme knowledge. When the world becomes eligible to see Him, you will see Him. Alternatively, you can detach from the world and come for Sadhana. If you complete Sadhana, you shall have His Sakshat Darshan.If you do not have family responsibilities and can devote at least 12 months in His service, write to us. We will guide you how to proceed.\n\nBlessings"
},{
id: 559,
header: "how does a shadhak promote or preach lord hanuman leelas in the society",
question: "gratitude setuu...\ngurudev ko pranam...\n\nhow i the brahman can promote the hanuman leelas or setuu to the main stream society.\nwhat are the condition and tools used by or what method does a setuu grant.\n\n||ram||",
answer: "Divine Soul,\n\nThe Sadhakas act according to their own inspiration and direct guidance of Lord Hanuman. We, as an organization, only engage in deciphering Lord Hanuman's Leelas. We have no system to send preachers in the society.\n\nblessings"
},{
id: 560,
header: "How to forgive people",
question: "Pranam Guruji,\n\nI am unable to understand few chapters,may be it will take time .guruji chapter 15th was very troubling for my mind( in true words I got scared and confused).I know its \"bramagyan\" so obviously aatma need some time. Chapter 16 was blissful. Guruji till now of all 16 chapters only for 2 chapters (chapter 12,16) I felt some lightness in soul but not for others,is it fine? I was in bliss or different world till chapter 13 but after this I felt lot of disturbances.\n\nDue to rough situation in life since young age my tongue has become very bitter. I tell people whatever comes in my mind without thinking and my mind justifies my action saying that \"its good as I am a straight forward person\" but deep in my heart someone keeps telling that I need to change my nature.\n\nThe one person I hate in this world is my \"mother in law\",no matter what I do, I am UNABLE to forgive her.I have tried various methods like yoga,bhakti etc to forgive her but always FAILED in my all attempts till date.I keep bad mouthing her everywhere,friends,family,colleagues etc.I tried controlling my tongue,mind etc but no success. please suggest me something that can be understood by me.\n\npranam from my heart",
answer: "Divine Soul,\n\nFor a householder, it is fine to have absorbed 2-3 chapters out of 16.\n\nAbout forgiving, you must realize that you aren't doing any favor to anyone by forgiving them; instead you are doing favor to yourself. If a person is trying to harm you by any means, you must cut off from that person immediately in order to render him/her ineffective. Forgiving is a way to cut off from that person emotionally. As far as attachment is concerned, hate and love are same things. If you hate someone, you are attached to that person emotionally. And when you are attached, you can be harmed. Therefore, forgive them not for them but for yourself.\n\nAlso, practice silence. Speak to people only when it is necessary. Let your words be precious jewels. If you speak more than required, you are inviting trouble for yourself. Words spark troubles. Speak less, listen more.\n\nBlessings"
},{
id: 561,
header: "How to get peace of mind",
question: "Jai Bajrangbali.\n\nNowadays, I am going through a very tough phase of life. After completing my Post Graduate, I am looking for a job and admission in PHD. It has been around five months and I haven't succeeded yet in getting a job or admission in PHD. That's why I am not getting mental peace and am very stressed. Also, sometimes I get very irritated on small things.\n\nI am not able to concentrate on my studies and job due to absence of mental peace. Some say that I am not getting job due to some dosh in my kundali. This also makes my mind very disturbed. Truly speaking, I am really very disturbed these days.\n\nI really want to get mental peace. I really want to relax.\n\nPlease guide me in getting peace of mind so that I get over these anxieties and concentrate on my studies and job. Please show me the path to connect to Lord Hanuman.\n\nThank you.\n\nHanumanji, please keep your blessings on me always and purify my soul and forgive my mistakes either of this birth or of previous births.\n\nJai Bajrangbali. Jai Shree Ram."
},{
id: 562,
header: "How to get ridoff sin..?",
question: "I want to see lord hanuman but wil i able to see..??does lord hanuman give darshan to them who dont hve much sins..?i feel i hve commited though unitensionly but stil it is a sin.so will i able to see him?how to get ridoff my sins??",
answer: "Divine Soul,\n\nRead chapter 16 to Learn how Queen Kaushalya used to do it for her countrymen. Limit your experiences arising out of illusionary knowledge. Then Lord Kaaldeva will be indebted to you and will erase your sins.\n\nThere are other methods also which are explained in other chapters. For example going to ShivaLoka or forcing Indra to purge your bad desires in SwapanLoka.\n\nBlessings"
},{
id: 563,
header: "How i came to know about Setuu?.By supreme grace of Bajrangbali on our family",
question: "It was one fine rainy sunday afternoon in april when i logged into facebook. I am not a subscriber or member of a community named Hanuman Chalisa.But somehow on my FB wall there was a photo of Lord Hanuman along with a Link to Nabharat Times. I read the Link and then from there i was redirected to Setu.. I read everthing on Setu and also the experiences people had after performing the Charan Pooja on the Nabharat Link. In no time i reserved 4 Charan Poojas ( for m Dad, Mom , elder brother and sister in law). Lord Hanuman is our KUL DEVATA( LORD OF OUR ENTIRE FAMILY INCLUDING THE ANCESORS). he is the Eastha deva of m Mom and my elder brother. My dad is his sincere devotee. By blessings of my Guru Jagadguru Shri Kripaluji Maharaj ( 5th Original Jagadguru of this world and founder of Jagadguru Kripalu Parishat known as JKP . Also known as BHAKTIYOG RASAWATAR, as his entire teaching is on NISKAAM BHAKTI , selfless devotion to the Lord. No favours , only serve the lord as his servant. Complete surrender), I also am a devotee of Lord Hanuman and visit a temple in Bhubaneswar conatining 108 idols of d Lord almost every Sat for the last 1 yr. What i meant here is thalt this is d supreme grace of the Lord dat somehow we were able to do Charanpooja and offer our Karma to Lord Hanuman,\n\nContinued from #634, i am sorry as i myself am very concerned abt my nature. On one hand i am a sincere devotee of God and m Guru and on other side most of time m mind worries a lot abt future state of my family nd my career and life and the challlenges in life and how i can overcome them owing to my limited capabilties. It all stems from a negative thinking and lack of self confodence which i am culprit of allowig to grow in my mind.\nThe message i received from d Mathangs.. i took it this way. The tree symbolises the path of Bhakti (selfless devotion) as ordered by Guru. And the feet resembles faith in d lord (which i strongly lack) . In fact my devotion to lord stems mostly out of fear of the future and worry. So i pray Lord Hanuman to nless me with devotion and smaran of my guru and strong faith, shraddha in my Guru and myself (self confidence) and my capabilities. And take every situation in my life as a blessing of my Guru and Lord.Pls carry my prayers to d Lord."
},{
id: 564,
header: "how to ignore senses?",
question: "I am reading all chapters very carefully when they uploaded to site.\n\nI am quite glad that i got knowledge to fly out your soul from this body and enter in other available bodies.\n\nFor that one must stop to react on senses, so brain get disconnected from senses and connects to soul (might be).\n\nI have tried to do so, it might be happening to for a fraction of seconds but not more than that.\n\nCould you suggest me simpler way to control senses or ignore senses.\n\nRegards",
answer: "Divine Soul,\n\nThink of bank of a river. It remains still while gallons of water flows through the river.\n\nLet the experiences flow through senses, do not try to stop the experiences. Let them flow.\n\nBlessings"
},{
id: 565,
header: "How long before I can be one with you",
question: "Lord, As I understand you sent me here for a purpose or maybe I was being very stubborn to come here. Either ways, it's the end of my patience and I can bear no more suffering by being here any longer. I am really sorry and want to come back. How long before I can be one with you? Please give me a date so I can count down and wait for it. Its becoming very difficult to stay in this darkness.",
answer: "Divine Soul,\n\nEscapism is not same as liberation. When you try to escape from situations in life, you will land up in next birth with more complex situations. Supreme knowledge is the answer. Get knowledge and enlighten your soul.\n\nBlessings"
},{
id: 566,
header: "How many years of Sadhana will it take to become rishi?",
question: "Pranam Mathangs and Setuu masters\n\nIn chapter 18 it is said that\nJust solve the kamdhenu puzzle\nAnd know what is kamdhenu ?\nYou can become rishi\n\"Being rishi is being in heaven is being in heaven because a rishi can fulfill any desire without doing any Purushartha \"\n\nThat means rishi can doing anything\n\nIf you solve this puzzle you will get all the powers which all Rishis have and become rishi\n\nBut being in this material world\nIt is very difficult to find an solution with the limited human minds\nAnd it is said in 18 th chapter\nDon't be trapped by your mind go beyond it\n\nSo it is very difficult to find the answer with the normal human brains\n\nMy question is if i come to setuu Hanuman bodhi\nAnd have Sadhana\nHow many years will it take to solve puzzle and become rishi ?\n\nIam asked with my normal human mind\nIam sorry if am I asked anything wrong\n\nWaiting for your reply",
answer: "Divine Soul,\n\nWithin 6 months of Sadhana, you will drop the idea of 'becoming' anything. Most souls choose to depart from this mortal world (for Moksha) once the realization happens. That means, your soul will depart from your body and it will be replaced by a 'visitor soul' from Vishnu Loka. That soul may choose to become a Rishi to complete the tasks assigned to it by Lord Vishnu.\n\nBlessings"
},{
id: 567,
header: "How to \"minimise OR get rid of\" these infiltration act of Asurahs",
question: "\"Pl reply in hindi\"\nAfter reading all 7 chapters it is quite clear, although we normal human being\n> can not see those asurahs who are infiltrating in our body and do all wrong behavior by taking control of \"Body / Vivek / Samskar\", now having known these facts how to prevent these?\n> Since in our daily family life some times \"myself or my wife or other family members\" makes inappropriate behavior and started blaming each other for our wrong doing, this further disturb our peace of mind.\n> Do we have any way to \"get rid of\" OR \"minimize this effect\" by safeguarding our \"Culture / Vivek / Body\" from infiltration of these asurahs?\n> I hope, answer to above question, will blessed us with some source of energy for a normal human being",
answer: "आपके प्रश्नों का उत्तर 7 वें अध्याय में निहित है | एक कलियुग के मनुष्य को एक नहीं बहुत सारे असुर जकड़े रहते हैं अर्थात मन - तन को जकड़कर उनके माध्यम से कोई बुरा कार्य करने की ताक में रहते हैं |\n\nउदाहरण के तौर पर मान लीजिये किसी मनुष्य ने पहली बार शराब पी | अर्थात कोई असुर उसकी देह और विवेक पर कब्ज़ा करके उससे शराब पिलवाने में सफल हो गया | अब वह असुर ओर उसके भाई बंधू उस देह और विवेक को निशाना बना लेंगे और शराब की तलब लगायेंगे | वह इंसान शराब के साथ साथ अन्य कई बुरे कार्यों में लग जायेगा क्योंकि असुर अंतत उसके संस्कारों पर कब्ज़ा कर लेंगे | अगर वह मनुष्य पहली बार शराब पीने के तुरंत बाद अपने संस्कारों को जगा लेगा और यह चेतना जगा लेगा कि किसी असुर ने उससे गलत कार्य करवाया है और उस असुर के अगले 1 - 2 प्रयासों को अपनी चेतना और संस्कारों से विफल कर देगा तो वह असुर अपने आप भाग जाएगा | वह उसके आस पास नहीं मंडराएगा |\n\nअगर आपके परिवार के कुछ लोगों को असुरों ने संक्रमित कर दिया है तो कम से कम आप संक्रमित न हो और हाँ जब उन पर असुर सवार हों तब उन्हें संस्कारों का पाठ पढ़ाने की कोशिश न करें | असुर अच्छे कार्यों से दूर भागते हैं | अगर आप गुस्सा करके कोई गलत कदम उठाएंगे तो समझ लीजिये असुरों ने आपको भी संक्रमित कर दिया | अगर आप अपने विवेक से अच्छा कार्य उनके आस पास करेंगे तो असुर कुछ पल के लिए दूर भाग जायेंगे और उन कुछ पलों में उनके संस्कार जाग जाये तो वे असुर फिर नहीं कब्ज़ा जमा पायेंगे |"
},{
id: 568,
header: "how to overcome barriers",
question: "Thank you so much for everything.thank you for accepting my prayers. i can feel the difference. sri anjaneyaya namah.\n\ni have a feeling there are two persons in me.or three perhaps? as i write or when i speak to myself, i'm both speaking and listening. one seems to be constant or unchanging and speaks very rarely or watches everything. and, the other is always active and confusing. i feel i need to overcome the latter. how do i do that? or, if i'm wrong, how do i overcome the confusion? everything seems to be affecting the latter as well. if i'm a soul, which one is it? who bears the karma? who dies? are all the souls connected? for instance, aren't my children's souls connected to me? whether i understand all that or not, i want to be with god all the time. anjaneya, give me bhakthi and save me.be with me all the time.please remove all the dirt accumulated over the years. i am doing my japam etc. still i remain impure.i'm sure i must have done a lot of paapams in my previous as well as presnt births intentionlly and unintentionally. i repent now. what should i do to be forgiven? i need a lot of strength and blessings to overcome all the hurdles. help me. give me and my family sadbudhi. give me bhakthi. sri gurubhyo namah. sri anjaneyaya namah. sri ram jaya ram jaya jaya ram. my namaskars to you. my namaskars to the sarangs and Setuu masters as well .",
answer: "Divine soul,\n\nIf \"you\" feel that there are two persons in \"you\", then total how many persons are there?\n\nSuppose there is a room and in that room, you can see two persons, then how many total persons are there in the room? 2+1=3\n\nSimilarly if you can see three persons in the room, total how many persons are there? 3+1=4\n\nWith the grace of God, you are on the right path. There is no \"final\" answer to this question because this question will take you to God. There is no stopping. If you have got an answer, that means you have given up the journey in the middle.\n\nKeep watching \"you\". This \"you\" will make you observe 2, then 3, then 4 .... and then finally you will have Darshan of God.\n\nDo not confuse yourself with the concepts of Karma and Soul. You might have heard many things about \"Karma\" and \"Soul\" from your childhood. Do not confuse yourself with those contradictory thoughts heard from here and there. Just do the Japa and keep observing \"you\"! You are on the right path. When you see God, you will have a clear understanding of \"Karma\" and \"Soul\". You won't need to rely on books when you have the first hand experience of seeing God.\n\nBlessings"
},{
id: 569,
header: "How to overcome hurt and live a blissful life?",
question: "\"continued from #10056\"\n-----------\nso happy i got a reply. am i accepted as a sishya of sri hanuman?! what more can i expect?am i worthy of it? i certainly want to go beyond the barriers and find the real self to reach rama. i've heard a guru recognizes his sishya and there is a special bond. will i experience that? to attain moksha. I have experienced many difficulties.i thought i won't be even able to get up. i had given up myself. but i also have been helped with a lot of kindness from ishwara. i've been protected as well. i've often felt that may be these difficuties are my guru's way of making me think.i have felt at one point in life that i was not anybody's slave and that god is the only truth but how to reach that? how to cross the barrier? anyway this is all i can. i need help for that great realization and blessings from my guru. i want to be blessed by hanuman. i want to be forgiven for my sins. i want to lead a fruitful life of peace and happiness so that i can also help the people around me. i want to reach god and not get stuck with all the hurts.i was very different. then when i saw problems around my people, i thought it's not worth it in life if i don't help. that was the beginning leading me into the world of maya. now so much of dirt has filled me that i can't purify without the guru's help. i also want to know why my brother too is going through a similar situation. how will i know hanuman closely? i have also felt that this is not what i want and that i have to leave. at the same time all my attacments pull me down.i need a lot of strength, wisdom and proper guidance from my guru who is still not visible to me. i also want my husband to join me in this path of spiritual wellbeing and realization. my earnest and sincere prayers for everything, especially to go beyond the superficial self. how to overcome that barrier? waiting with prayers,namaskarams to mathangs,\nthanking you for everything,\ngeeta\nom sri anjaneyaya namah\nsri ram jaya ram jaya jaya ram",
answer: "Divine Soul,\nIf you have full faith in Lord Hanuman, you have the quality to be His shishya. The Mathangs' Guru is Lord Hanuman. He comes to impart the supreme knowledge; the Brahma Gnan to their new generation every 41 years. Right from the beginning of His visit to the Mathangs, until the visit end, Every incidence which happens with Mathangs and every word spoken by Lord Hanuman is only and only for the purpose of imparting the Brahma Gnan. He first dismantles the structured beliefs of His shishyas and then imparts the divine knowledge. Follow these incidences and words by reading the chapters as we post here, you will also get the Brahma Gnan. One day you will get His Darshan too. It depends on the number of barriers which are there to be unlocked. It depends on the amount of impurities to be shed. Many devotees have written to us that they saw Lord Hanuman immediately after reading first chapter. It depends how many chapters it will take to break barriers of your mind and intellect.\nAttachment with family members is also a big barrier. Attachment and Love are two different things. You can love your family and still be detached from them. You have no control over life of others including your brother and husband. They have their own history of Karmas. You have your own history of Karmas. When you \"want\" your husband to walk with you on the path of supreme, you are actually locking yourself in one more barrier of \"want\". Every soul has an independent relationship with the supreme soul of Lord Hanuman. Recognize and cherish that relation and walk in faith.\nBlessings"
},{
id: 570,
header: "How to pay tribute to my GOD",
question: "As i am student and i am totally dependent on my father i am studying and my father use to do so much pooja and Daan to Pandits. As i have read the chapters in Setu and they say that offering can be done in 108 hours and i want to offer to my LORD my own money which i will earn by my hard work so what to do please help me.",
answer: "Divine Soul,\n\nYou can grow small flower plants in your home. Pluck those flowers and do the Arpanam in nearest temple.\n\nBlessings"
},{
id: 571,
header: "How to purify my soul so as to connect to the supreme soul of Lord Hanuman",
question: "Thank you Setuu. I really feel that after interacting with you people my soul must have come a bit close to the supreme soul of Lord Hanuman.\n\nContinued from #31581(As per Setuu has spoken)\nEver since childhood I have been a devotee of Hanumanji. I want to surrender to Lord Hanuman. I really want to connect to the supreme soul of Lord Hanuman. I really want to purify my soul so that I can connect to the supreme soul of Hanumanji. I want to clear my vision so that I can connect to the almighty Hanuman.\n\nPlease guide me and show me the way to purify my soul and make my vision so clear that I can connect my soul to the supreme soul of Lord Hanuman.\n\nThank you.\n\nHanumanji, keep your blessings on me and my parents always and forgive all our sins which we may have done knowingly or unknowingly either in this birth or previous births.\n\nJai Bajrangbali. Jai Shree Ram.",
answer: "Divine Soul,\n\nBrahma Gnan is the only way to purify soul. Lord Hanuman came to Mathangs to give Brahma Gnan. If you read every incidence which happened during this visit and Every word spoken by Lord Hanuman, then you will also get the same Brahma Gnan which was imparted to Mathangs by Lord Hanuman. Make Lord Hanuman your Guru and read the chapters as we post them here. Next chapter will be posted soon.\n\nBlessings"
},{
id: 572,
header: "How to realise and utilize potential of the soul?",
question: "Lord Hanuman said in chapter 5 that\n\nThere are millions of devotees who want to have my Sakshat Darshan but they fail to get over their bodily desires. The most they do in their life is to utilize their body and mind to their full potential. They fail to even touch the potential of their souls. You have to realize and utilize potential of your soul.\n\nHow to realise and utilize potential of the soul?",
answer: "Divine Soul,\n\nFirst you need to know your soul and then rise to the level of soul.\n\nYou can start by not shooting questions from top of your mind. Let the questions pierce your being and reach to the deep most level. Do not yearn for easy and ready-made answers. Let your queries create an unbearable anguish. Let your questions bore deep into the layers of illusions which are covering your soul.\n\nSeeking supreme knowledge is not like sitting in a school or college exam. Do not post questions until they drill your being. There are 20 chapters deciphered now. There is plenty of knowledge to ponder upon. Bathe in that knowledge. An answer you get by yourself will be worth more than a thousand ready-made answers you tend to seek.\n\nBlessings"
},{
id: 573,
header: "how to remember all bad karma of life",
question: "jai shree hanuman\njaisa ki maine abhi padha ki ganga mata ke paas jaakar apne puraney sabhi karmo ko yaad karna chahiye aur ganga mata ko batana chahiye. Main yeh jaanna chahata hunn ki agar uss samay usse apne sabhi bure karma yaad nahin aayey. keval kuch hee yaad aaye toh kya hoga?",
answer: "दिव्य आत्मस्वरूप ,\n\nयहाँ पर गंगा माता के पास जाने का अर्थ उनकी देह अर्थात गंगा नदी के पास जाना नहीं है | इसका अर्थ है अपनी आत्मा को उनकी आत्मा के पास ले जाना |\n\nजैसे आप किसी ऑफिस में जाते है तो अपना ID कार्ड गेट पर दिखाते हैं वैसे ही जब आपकी आत्मा गंगा जी के पास जाती है तो अपना परिचय देने के लिए अपने बुरे कर्म दिखाती है | जब आप गंगा जी के ध्यान में होंगे तब आपके दिमाग को उनके साथ हुए वार्तालाप का आभास तक नहीं होगा | आपकी आत्मा वार्तालाप करेगी |\n\n|| राम ||"
},{
id: 574,
header: "How to rise above mind-2",
question: "\"Continued from #443626\"\n\nThank you Setuu for the reply.\n\nAfter going through all the chapters posted so far, I have got many things except \"How to rise above mind\". I have already made Lord Hanuman my guru and seeking knowledge(Brahm Gyan) from him through his Leela's. Now, how can I leave the path of seeking as told by you? I didn't get just one thing. Should I leave the path of seeking just for not understanding one thing?\n\nYou told me to remain on the path of devotion and surrender fully to the Lord. Here, I want to tell you that I am always on the path of devotion and have surrendered myself fully to Lord Hanuman. I don't know where I am exactly right now. I must say right now I have the feeling of suffering and joy. But it doesn't bother me much. I think whatever happens to me it's the will of Lord Hanuman and my karma of this birth and previous births are responsible for it. I have the feeling that Hanumanji is there to help me and when Hanumanji is with me nothing bad can happen to me. I don't know whether I am moving towards \"Samras\" or not.\n\nPlease help me and show me the right direction.\n\nPlease forgive me if I said anything wrong. I just wrote my views.\n\nThank you Setuu\nThank you Mathangs\nRegards\n\nJai Hanuman\nJai Shree Ram",
answer: "Divine Soul,\n\nThere are two ways to reach God- (1) Knowledge (2) Devotion\n\nIf knowledge doesn't suit, one should go for devotion. Devotion towards God is different than commitment towards a Guru. In devotion, you will see God in everything and every phenomena.\n\nAfter reading 5 chapters, all confusions will not settle but the level of question should certainly rise. Instead of asking \"How should I rise above mind\", you should give your point of view and elaborate it with examples of your life. Then only you are on the path of seeking knowledge.\n\nBlessings"
},{
id: 575,
header: "How to rise above mind-3",
question: "\"Continued from 486328\"\n\nThank you Setuu for the reply. But I didn't get all my answers and doubts cleared from your reply.\n\nLet me ask you few questions. As you said there are two ways to reach God - Knowledge and Devotion. Do I need to follow only one out or two to reach God? Can't I follow both Knowledge and Devotion both to reach God. I am seeking knowledge from the leelas of lord Hanuman and as far as devotion is concerned, I am fully devoted to lord Hanuman. I have full faith in Hanumanji. Thus, I am following both the paths. Is it wrong?\n\nNow comes how should I rise above mind. Truly speaking, here I am not very clear. I tried to get answer from your previous reply but I couldn't get much. You told to observe mind, observe intellect, observe the observer. I really didn't understand what actually to do. You also told that the peaceful region is above mind. So, I tried to move over there. But I am not able to reach that peaceful region fully. More I try to obstruct the thoughts, more potential they acquire.\n\nI am not able to think peacefully on anything. So many thoughts come to my mind at the same time. There come positive thoughts too but most of the times there are negative thoughts. For example, let us suppose I am holding something in my hand. Then, a thought will come to my mind what if it falls from my hand. Let us take another example. Suppose someone or I am going to catch a train for some important work, then also it does come to my mind what if someone or I miss the train. What if someone or I meet with an accident? Even when I am doing Pooja, evil thoughts come to my mind. I try to ignore them. But again after sometime they come to my mind. I am not even able to do even pooja peacefully. There are numerous such examples.\n\nAlthough so many negative thoughts come to mind but I never do anything negative. I always do what is right. That's why I really want to know why these negative thoughts come to my mind when I never do anything negative or wrong.\n\nI really want my mind to be free from negative thoughts. I really want to concentrate on my aim without any deviation. I want my thoughts to be pure and positive.\n\nPlease show me the way. Please guide me. I really need your help.\n\nJai Bajrangbali. Jai Shree Ram.\n\nThank you Setuu. Thank you Mathangs.\n\nRegards.",
answer: "Divine Soul,\n\nIf you have read 7th chapter, you must have got the answer why evil thoughts come in your mind. It is because of Asurrahs who linger around your body. That is a result of many past Karmas. It will take time to purge all those Karmas. Sure way to get rid of Asurrahs one by one is DENIAL. Whenever an evil thought comes, deny the Asurrahs pleasure of experiencing fear through your body-mind. That means, resist the fear. You will get rid of them one by one.\n\nBlessings"
},{
id: 576,
header: "How should I practice the concept of \"I am paramatma\"?",
question: "Continued from 531907\nPranam on lord Hanuman's holy feet\n\nShould I imagine the concept in this way \" I am paramatma and all other living and non living things and the whole universe are my reflection .The person /animal/non-living thing infront of me is paramatma and I am his/her reflection.\"\n\nBut another person /animal/good and bad people/ universe(stars ,planets ,galaxies)are so different from me. Is this due to very high variation of my reflection?\n\nWhich is the mirror? Where is this mirror ?(in another belt of time?/ Is my body the mirror?) .Is it a typical mirror or any other thing that is called as mirror?\n\nAfter I had read chapter 23 i am trying to practice this concept. It is helping me in this way---- whenever I become angry on someone or don't like their behaviour i think that \"I am paramatma and he /she is my reflection\" and I get relief from anger or just like the way he/she treated with me .\nIs it right way practising the concept? If not then please show me the path.\n\nWhatever enlightenment/supreme knowledge we achieve in each birth,does it get stored? Like suppose there are 100 types of supreme knowledge. Let i have achieve 5 types in one birth .so in next birth will these 5 types will get stored and I can achieve other types except these 5 types OR i have to achieve again these 5 types and then continue?\n\nNOW THESE QUESTIONS ARE IRRITATING MY MIND(this happens to all of us when unable to find answers of our questions)\nPLEASE SIR GIVE REPLY (if possible soon) TO MY QUESTIONS\n\nPLEASE FORGIVE MY IGNORANCE.\nPRANAM",
answer: "Divine Soul,\n\n\"I am Paramatma and my body as well as bodies of people around me are my reflections.\" This is correct.\n\nLord Ram encountered a lion and thought that how could lion be my reflection. Yes, the lion is very high variation of my reflection.\n\nIf you can find a mirror, that mirror is also the reflection of Paramatma. That is not the mirror where Paramatma is reflected. That mirror is just another reflection.\n\nYour thoughts about '100 types of knowledge' are in wrong direction. Think this way: Suppose there is a monk who has attained all types of knowledge you could possibly think, why can't your soul enter into the body of that monk?\n\nBlessings"
},{
id: 577,
header: "How Soul chosses which body to pursue?",
question: "My query is how soul chooses in which body to pursue his/ her journey?\nIt do not always choose a healthy body otherwise there will be no persons with special abilities?",
answer: "Divine Soul,\n\nIf you have read the chapters sincerely, you must have read that the soul travels in the coordinates of desire and Karma just like body travels in coordinates of Time-Space. At any point, what is the Karma and Desire coordinate of soul, determines the body and the experiences of the soul.\n\nBlessings"
},{
id: 578,
header: "How to stay away or get awareness of surrah and assurah?",
question: "Gratitude setuu..\nlord guru hanuman ji ko koti koti pranam...\n\nI have confusion about my body regarding who is controlling myself..\n\nIf i am on back seat who is driving myself .\nWho is making desires, is it my soul or surrah and if one of them is responsible for it then how ?\n\nIf i have desire who is filfulling it ?\n\nHow to distinguish between my soul or surrah or assurah?\n\nIf i want to myself away from surrah or assurah , what is the procedure?\n\nIf i do not make any desire just eat drink or sleep other personal work ,are these desire mine (soul)or surrah or assurah ??\n\nbless my soul and remove confusion .",
answer: "Divine Soul,\n\nIf you are vulnerable to the trap of space-time, you are vulnerable to Surrahs-Asurrahs. If you are aware that space-time is playing an illusion before you, then Surrahs-Asurrahs cannot affect you. This awareness comes from supreme knowledge.\n\nSometime Sanskaras also may help in recognizing Surrahs-Asurrahs. But that is not the fool-proof way. When you do something, think whether what you have done is as per your Sanskaras. If you have done something which is not in your Sanskara, then some Asurrah or Surrah has influenced your action. But if a Asurrah or Surrah takes over your Sanskara, then this method won't work. You are a \"good\" soul. Therefore your Sanskara is not captured by any Asurrah. It may be under influence of Surrahs though. So, you can recognize Asurrahs but you may not recognize Surrahs. Higher knowledge is the only fool-proof way.\n\nBlessings"
},{
id: 579,
header: "how will the state of Moksha be in real life",
question: "can anybody explain the state of moksha, just to say wil l i still be I or will i achieve one all -where in i really cant experience anything, is not experiencing anything moksha, if so will there be separate energy entity for it or how is it",
answer: "Divine Soul,\n\nMoksha is not a state, neither is it state-less-ness. It is when you completely melt your identity and merge with the whole. When you are not there, how can there be a state? Think on these lines and you will realize the truth.\n\nBlessings"
},{
id: 580,
header: "A hug through Vayu by my dearest Vayu Putra",
question: "I am a devotee of Lord Hanuman. Right from my Childhood I have been in love with my LORD. Near my house is a popular hanuman temple on a mountain. Once during one of my visits when i stepped in, I saw the lord beautifully decorated. I closed my hands in avahan mudra and prayed.. Lord you were lucky to hug your Rama. When will i be lucky to get a hug from you? Just then a strong breeze engulfed me from front as though it came right from the idol inside. There are no windows or entrances in front. But where did this wind come from? I felt as though the Lord heard my prayer and he in the form of Vayu he himself came and hugged me. It may sound silly for many... but for me it was my Lords way of responding to my prayer. Another experience, Last week when i was sick my body woud shiver uncontrollably in the middle of the night. I would just recollect Lord Hanuman's face and start chanting Ram...within 3 times of chanting my shivering would stop. What Love of my LORD!\nJAi Sri Ram!"
},{
id: 581,
header: "HUM LOG APNI ATMA KA ANUBHAV KAISE KAR SAKTE HAIN",
question: "MAIN JAB BHI PRABHU KI ARADHANA KARTA HUN, MERA MAN HAMESHA SANSARIK CHINTAO MAIN, ACHCHE BURE, ATYANT BURE BICHARON ME BHATAK JATA HAI. APNE MAN KO OR MASTISHK KO PRABHU KE ANEK ROOPO ME KENDRIT KARNE KI KOSHISH KARTA HUN , KABHI SHIV KE ROOP ME, KABHI MAA KE ROOP ME, LEKIN SAFAL NAHI HOTA. MERE PRABHU TO BAHUT DAYALU HAMSHA MERI GALTIYO IGNORE KAR DETE HAIN. LEKIN ME APRADH BODH SE GIRAST REHTA HUN.\nKIYA KARU JO MERA MAN PRABHU KE KISI ROOP ME EKAGR HO JAYE? MUJHE AISA ANUBHAV HOTA HAI KI MERA MAN IS PRASHN KA UTTAR DE SAKTA, HAI. ABHI BHI AISA HI LAG RAHA HAI, LEKIN JABAB BAHAR NAHI AATA. PRABHU NE MERI ULJHAN SAMAJH LI HOGI, VO AAPKE MADHYAM SE JABAB DENGE. \"JAI SHREE RAM\" JAI SHREE HANUMAN\"\ncontinued from #410493\"\nMERE PRABHU SHREE HANUMAN JI KO SAT SAT NAMAN OR MERI SANKAON KE SAMBAHND MAIN UPAY BATANE KE LIYE BHI SAT SAT NAMAN/\nMAN KO KENDRIT KARNE KE LIYE KIYA KARNA CHAHIY",
answer: "आप मन को केन्द्रित करने की बजाये नियंत्रित करने की कोशिश कर रहे हैं | आपको सिर्फ मन से ऊपर उठकर आत्मा की ओर बढ़ना है | धरती को छोड़कर वृक्ष पर चढ़ा जाता है, आप धरती को वृक्ष पर चढाने की कोशिश कर रहे हैं |"
},{
id: 582,
header: "hum parmatma ansh kis prakar sey ling ki tarango mein badlav karein",
question: "Jai shree hanuman.\nMera prashan yeh hai ki, jaise 13 th chapter mein yeh ek vishesh rahasyamayi khulasa hua ki ek rishi ney aur unke 1 shishya ney ling par adhyan kiya. hum parmatma ke ansh yeh janna chahatey hai ki kis prakar sey hum swayam apne ling ki tarango mein badlav kar saktey hai ya unhe bana saktey hai ya mita saktey hai."
},{
id: 584,
header: "Human Form",
question: "Thank you so much for my earlier question.I need to know some more.Is soul receive human form after doing some good deeds.and what was my earlier birth.Presently I'm not married and even after so much effort unable to find someone due to this there is so much of tension in my family.please tell me and suggest me the suitable path.\nThank you",
answer: "Divine Soul,\n\nExperiences of past are a baggage too heavy that it has shadowed the real you. It has changed your perspective of this world completely. Rebuild your self esteem and rediscover the beauty in the world. Meanwhile Lord Hanuman is working with Lord Indra to fulfill your desires.\n\nBlessings"
},{
id: 585,
header: "Humble gratitude for this living master",
question: "I am offering my humble prayers to lord hanuman since long time and is graced by his presence always. His blessed prayers have powers of manifesting anything materialistic and non materialistic. His mere recitation of name can do severe miracles even in worldly matters. I wish to be with hanuman grace all the time. I wish lord hanuman gives us strength and wisdom to overcome all odds in all the births.\n\nQuery to Mathangs:\n\nWill I get salvation with grace of lord hanuman in this birth? Also what are the plans for lord hanuman for people having religion Hinduism who used to perform tough austerities. How feasible can it be for worldly persons to get salvation while living worldly life?",
answer: "Divine Soul,\n\nSometimes worldly life can become a boon for the soul. Only the first spark is needed in householder's life. Unfortunately they get that first spark only when some bad things happen in their life. Once the spark is there and he/she starts questioning the existence, then it doesn't matter whether one is in worldly life or not. Worldly life can also become Sadhana. You only need to realize that you are not a body. You are a soul. Then let the body do worldly things. You can remain detached from those activities. You can remain detached from things done by your body and thoughts flowing in your mind. Once you reach that stage, you can have Sakshat Darshan of Lord Hanuman. He will guide you further.\n\nBlessings"
},{
id: 586,
header: "hurt",
question: "how to overcome hurt? how to become pure? how to reach god? i have some barrier. please help me overcome. i've lost all the goodness and love. please help me. how to help my husband and children?please guide me.sriram jairam jai jai ram om sri anjaneyaya namah.\nhow to, most importantly, forgive and forget, when people have hurt me badly? how to help my brother?",
answer: "Divine Soul,\n\nCongratulations for realizing the barrier. Majority of human beings live with barriers for their entire life but you have at least realized it. So the \"hurt\" has done its work. Now it is up to you if you want a patch to cover your hurt and then go back to your normal life. Or you want to smile over the hurt and try to find \"Who is Really Hurt?\". It is not you who is hurt. You are a divine soul, how come you be hurt? It is actually a \"superficial self\" which is hurt. Majority of people live with this superficial self. You are on the verge of identifying this superficial self and then the journey starts. To reach God, make Lord Hanuman your Guru. Lord Hanuman comes to Mathangs to tell them the way to reach Ram. If you follow this conversation, you will definitely reach God. Read the chapters of this conversation between Mathangs and Lord Hanuman as we post them. Second chapter will be posted shortly.\n\nBlessings"
},{
id: 587,
header: "I am better than before",
question: "I had very bad times in past but by the grace of lord i am now in better situations. I am really heartliy thankful to my helping hands. I do not know but i am bold with postivity around me. I am sure lord Hanuman dada is only one who was with me in my bad times. But please do not leave me. I want your warmth and protection from sins. Also i want you to magically separate me from my body. And take me to supreme happiness of abode of supreme lord.i had experienced that truth and joy.yes there was only joy.no sorrow only joy. I was not in my body. I do not know. I want to enjoy freedom. I want to fly like that experience. What was that? How can i explain in words? It was only light.light and light.",
answer: "Divine Soul,\n\nThat cannot be explained in words.\n\nBlessings"
},{
id: 588,
header: "i am bit confused regarding my dreams",
question: "!!Jai Shri Ram!!\n!!Jai hanuman ji!!\n\nRespected setuu masters\n\nKindly guide me as i am bit confused regarding my dreams.i am frequently dreaming of hanuman ji,and two days before i had dream in which there was a saint organising for some kind of pooja,and somebody was chanting \"jai shri ram\".when the person chanting \"jai shri ram\",my soul was experiencing strange feeling,i was feeling like my soul was flying out of my body.The person was chanting \"jai shri ram\" was not clearly visible to me but i was sure in my dream that he was my guru hanuman ji.The dream was like real but it was a dream.my mind is not able to bear such dreams.Plz settle my mind with your divine words.ll\n\n\"Jai shri ram\".",
answer: "Divine Soul,\n\nWe advise devotees not to try to do postmortem of dreams. If it is a good dream and you do postmortem, you may waste an opportunity to realize that dream in real world. If it is a bad dream and you do postmortem of it, you recycle your bad desires which may result in a bad reality next time.\n\nDo not try to understand dreams. Just let them be,\n\nBlessings"
},{
id: 589,
header: "I am confused.",
question: "I love Lord and His devotees. I was under the umbrella of The Lord in my childhood and since I stooped to a prey to my \"Vasanas\" I lost the grace of The Lord. Now my life is so lost and I want to come back to the loving abode of the Grace of The Lord. I know I have some divine mysteries associated with my past birth. I also love my parents and I feel that there is some divinity and some secret associated with them.\nHow do I find the answers to my questions and what should I do now. I tried to leave this world, I am not able to leave it. I want to know how should I live in this world as per the guidance of Lord Vishnu and how can I surrender to His devotees.",
answer: "Divine Soul,\n\nRead the chapters of Lord Hanuman's Leelas. There is no need to leave your world.\n\nBlessings"
},{
id: 590,
header: "I am interested and I want to meet the hanumanji saxat",
question: "I visited your site. Reference of internet surfing. In fact, I am great believer of hindu traditions, religion and lords. I am really impressed by your site. I just created my account to read the adhyays which are said by the lord hanumanji to the matangs. I just completed first adhyay. But I am confused that what I do next ?. How can I give my arpan . And whrn and how I can meet the hanumanji.. please guide me.please reply me in between next 108 hours. I am very very very much interested to meet the hanumanji saxat.\nIt is my humble request to you...",
answer: "Divine Soul,\n\nArpanam can be done in any Hanuman temple where Vaanars are present. Fruits Arpanam is preferred.\n\nTo have Sakshat Darshan of Lord Hanuman, you have two options :\n\n(1) Come to Setuu Hanuman Bodhi and do Sadhana under guidance of Setuu Masters. You need to be free from worldly responsibilities and you need to devote at least 1 year for Sadhana initially (Depending on how evolved you are, spiritually). If you want to do Sadhana, write about yourself in detail. Write about your family, your soul's history of relationship with Lord Hanuman and any experience/dream you had recently where you saw Lord Hanuman. Tell about that dream/experience in detail. Also tell about the knowledge you acquired by reading chapters of Lord Hanuman's Leelas posted here so that Setuu masters can get an impression of your soul.\n\n(2) Or you can duly read the Leelas of Lord Hanuman being posted here. You will get the 36 line long Mantra when all the chapters are posted here and read by you. By reciting that Mantra, a devotee can have Sakshat Darshan of Lord Hanuman.\n\nBlessings"
},{
id: 591,
header: "I am live due to Hanuman Ji only.",
question: "I was injured in the age of around 4-5 years in 1984/85 and my breathes stops at hospital in the Meerut city.Then in the morning time around 4.30 am Hanuman je appeared in the dreams of my father and asked him for not to consumed the wine and meat and also to offer Sindur and Chola in his temple.But my father told the God he will trust only then if I will speak by myself.Then I asked my father to pass the urine.And by the Gau mutra my treatment was done. And as on today I am 35 years old and having two children by God blessings.\n\nRegards\n\nAftab Singh"
},{
id: 592,
header: "I am lucky I read hanuman lilas",
question: "Thanks baba Mathang for sharing all the lila of lord Hanuman to us .now I got alot faith in god .after reading all of them chapter I totally faith that he is immortal nd living this yug in kalyug .\nBut I have question when lord vishnu take birth as a kalki??"
},{
id: 593,
header: "I AM NOT HAVING PEACE IN MY LIFE",
question: "After finishing my work means I am working in factory after working hours I will go to home I don,t get peace, I f I saw my husband I will get angry, I do not want to see his face, I donot want listen what he will speak, why it is happening I am not understand, he is not co operating person in all the way, so I feel lonely less little bit,because my childrens are their, so I don,t mind, in the factory I don,t have close friends, my character is easily mingal but then also I have so many enemies, I want people should like me, but some people hates me more.",
answer: "Divine Soul,\n\nForgiveness and Gratitude are solution of your problems. Forgive everyone around you no matter what they have done to you and what they say. Find out what is good happening in your life and have gratitude for the same.\n\nBlessings"
},{
id: 594,
header: "I am very eager to know the birth of lord Vishnu's Next Avatar",
question: "Hi,\nPlease let me know when will you decipher chapter that details about Kalki Avtar. I am really exicted to know vishnu's next avatar. These days I have strong feeling that kaliyug is nearing the end. Since i can't see people suffer for more years with injustice or corruption or murder of inncoents or droughts or no much rain earlier, I pray vishnu god to come soon to the earth.\n\none more question, whenver I talk about hindu gods and tradition, practises,belifes. Many others have commented that why other religion in the world do not have all these? for example diffrent avatar of vishnu, or why vishnu avatar is happening only in India? why not UK or US or Japan? Vishnu is only for Hundus? not for other religion people in the world?\n\nKindly answer my query, pls atleast let me know vishnu has already taken a birth or yet to take a birth? how many more years to end thi kaliyug?\n\nThanks in advance,\nRaghu",
answer: "Divine Soul,\n\nWe cannot speculate. There are signs and hints in the chapters of Lord Hanuman's Leelas. As soon as we confirm, we will publicly post the details. This world is already full of confusions and speculations. We do not want to contribute to the confusion. We will only publish the definite details as soon as we get them. Right now we cannot tell when we will get them.\n\nLord Vishnu is not India specific. It is not necessary that He takes birth in Asia. He can take birth in Europe or any other continent also.\n\nBlessings"
},{
id: 595,
header: "i believe in god.",
question: "Some peoples in this world dont belive in god. They stic to the science. But beyond science there is some power. 18 years back i was in such physical condition and i couldnt get proper medicine. According to science nothing was wrong with me. But i was feeling something odd. Only strong devotees of sree hanuman, sree gurudev datta and some saints without toching me told me the truth. There was no way out. I was still trying. I must have commited lot of sin.\n\nWhen god blesses u.you get started proper medicines to come out any disease. This is applicable to any situation to come out in the life."
},{
id: 596,
header: "I BELIEVE HANUMAN JI",
question: "MY HUSBAND WAS IN DEATH BED IN 2006 DUE TO AN ROAD ACCIDENT AND I WAS PREGNANT . HE WENT TO COMMA . DOCTOR GAVE 72 HRS AND THAT TIME MY MAIN MANTRA WAS JAI HANUMAN GAYAN GUN SAGAR------------DAY AND NIGHT I PRAYED AND AFTER 48 HRS MIRACLES HAPPENED. HE GOT BACK TO SENSE SLOWLY.I THINK GOD'S POWER IS TO BE REALIZED BY ALL. AND HAS TO BE APPRECIATED THROUGH OUT. I BELIEVE HIM A LOT. FOR ANY CRISIS HE HELPS ME NOW ALSO ALTHE TIME WHEN EVER I RECALL HIM. NO DOUBT ABOUT IT THAT HIS PRESENCE IS EVERY WHERE., JAI HANUMANJI"
},{
id: 597,
header: "I don't know",
question: "I don't know whether a layer of ignorance and dirt has been removed or not. I do want to make an arpanam. i'll describe what I felt. After reading the chapter, for a while I was thoughtful. Then I sang a bhajan and felt like crying. Then I had my bath and did puja, offering flowers. Tomorrow I'll be going to Hanuman temple for a puja and want to offer fruits. in my mind I offered fruits to a monkey who comes here sometimes. A banana and apples. This was my experience immediately after reading the chapter. While doing my regular puja, I meditated on Sri Hanuman and Sriram and offered flowers to Shiva, Vishnu and Devi as well. i need further guidance. Om Namah Shivaya. Jai SriRam, Jai Anjaneya!\n\nThen I had a doubt. As a mother I want my children to lead a good life. I should be able to provide what they need for education etc. Is that an unfair wish or a desire? I don't think I can avoid that. I have to be with them as a support, I feel. is that wrong? sriram Jairam Jaijairam. Pranams to all there. Prostrations to Hanuman.",
answer: "Divine Soul,\n\nThat is not an unfair desire. You should fulfill your duties and family responsibilities with a sense of detachment. When detachment appears, pure love evolves.\n\nBlessings"
},{
id: 598,
header: "I dont know why but i dont feel something tumbling out of me when i read chapters",
question: "Jai shree ram! I want to know why i dont feel lighter after reading chapters. I feel i have gained knowledge. Is thinking that i have gained knowledge wrong. Why dont i feel lighter. Please help me get an answer to it hanuman dada. Happy birthday dada",
answer: "Divine Soul,\n\nSuppose you have fallen into a deep well. People who are trying to get you out of the well send two things down - (1) Some food and water so that you can get energy (2) A rope. Rope is supposed to take you out of the well. But you keep both food and rope inside and say, \"I am happy. I have got food to eat. I want to stay in the well itself.\"\n\nThis is what we are. We are fallen into a well called mind. The supreme knowledge sends you something to feed the mind and a rope to take you out of the boundaries of mind. Being a householder living in a mainstream society, it is understandable that you are finding it difficult to transcend your mind.\n\nYou should have an urge to reach to the supreme truth. You should not be comfortable in the boundaries of time. Then only this supreme knowledge will bring you on the path of Moksha.\n\nBlessings"
},{
id: 599,
header: "i have a mixed state of mind.",
question: "jai hanuman before i start anything.\n\ni want to know it from mathangs that why is that i always remember the bad in people and not the good they have done. whenever i meet a person for the first time i feel so glad about them and later as time passes i always feel more negatives about them and not positive. i am selfish at some things like i dont want anyone to get above me in my career but i have a very humble heart towards animals and people suffering. when i see a animal suffering i cant tolerate and also when i see a child or a old person begging and being ignored by people i just get angry and will try helping them. why is that i am in a mixed state? how can i cure my soul from selfishness and other evil. And one more thing is my mind never sticks to one things. when i love some work and start doing it and suddenly change my interest to something else and will go for it leaving the old one and due to this i am unable to gain full knowledge in anything. can you tell me what exactly is happening with me. but while reading chapters my bold really went cold and my heart beat rose at certain levels of the story. please answer and suggest me what best i can do. thankyou very much Setuu for connecting people with the almighty anjeneya swamy. and if you could personally forward my blessings to lord anjeneya through mathans i have a small request, my father fells ill frequently and he is been facing problems in the matter of health as well as money. he has struggled a lot in his life so far i want to see him happy from now onwards. this one wish of mine is not being addressed by god dont know for what reason. he has been with me in all my tough times and gave me lot of success but i pray lord hanuman to bless my dad and mom with lot of happiness through out their life.\n\nmy humble request is kindly answer my questions. thankyou jai sri ram jai hanuman",
answer: "Ram.\n\nThis stream of thoughts were taken up in Sakshat Hanuman Pooja of 1st November 2014, Saturday.\n\nEvery person has his/her own nature. Instead of feeling guilty about your nature, you should realize that you are unique in this world. Your behavior is alright as long as you are aware of what you are doing. Awareness is most crucial thing which you already have. You should come out of guilty consciousness.\n\nInstead of getting influenced from everything you come across, you should define a set of rule to live life. and then you should live life according to those rules.\n\nFor example, suppose your rule is- \"I will live my life to achieve goals defined by me time to time. If need be, I would change myself in order to be eligible person to achieve those goals. If situation demands, I will change my goals.\"\n\nThen suppose a situation comes when you do not see any way forward. At the end, you have to change your way. At that juncture, you cannot sit and think- \"oh, I am changing my way. See, how weak a person I am.\"\n\nInstead you should think- \"It is within the set of rules of my life that if a roadblock comes, and no way is left, I will change my way. Hence I am not weak. I am living my life as per my rules and this change of way is within those rules.\"\n\n----\n\nPrayer was initiated for your father.\n\n-----"
},
{
  id: 600,
  header: "i have no experience abt lyf this is my reality?",
  question: "i m agree with u..nd i hope u will understand me also..plzz m bchpn se hi god ko manti ayi hu..un mhsus bhe kiya h or bus un swaplok m dheka h... m yha jo bhe write kr rhi hu wo pura sincerly hi mane likha h..jb mane hanuman ji k chapters padhe i m very happy ki muje hanuman ji k bare m janne ko or mila..i now es world m hr chizo m lines h ro yha bhe hongi..lekin bchpn se aj tk m puri bato tk nai puch payi hu or muje etna vishwas jrur h ki m es rashay tk ek din jrur pochungi...i m very thankful ro setus nd matng baba's... but muje ye h ki what is reality....that' s all my question.\nand next tym i aware ki questions only chptrs m se hi kru thanku so much........",
  answer: "दिव्य आत्मा,\n\nहनुमान जी की लीलाओं के अध्याय पढ़िए और परम सत्य की ओर पढ़िए | परम सत्य को शब्दों में बयान नहीं किया जा सकता | जब आप सत्य तक पहुंचेंगे तो आपको वह दिव्य अनुभव होगा जो सभी सांसारिक अनुभवों से आपका मोह भंग कर देगा और आप मोक्ष की ओर अग्रसर होंगी |\n\n|| राम ||"
},{
  id: 601,
  header: "i have scored good marks in my online examination",
  question: "i have scored good marks in hardware and networking course before a day of examination i have chanted lord rama's name and chanted hanuman chalisa 11 times and bajrang baan 6 times and after next day i gone to give my online examination i score very easily good marks that is my only experience of this"
},{
  id: 602,
  header: "I Love Rama Baktha Hanuman Ji Jai Shree Rama Rama",
  question: "I felt the divine purpose of that story and my illusion is so strong I only pray lord hanuman to destroy my illusion and give me Moksha"
},{
  id: 603,
  header: "I met two hanumanaji in dream. Small hanumanaji and big hanumanaji at a one time in Dream. If sadhak feels to roam in swargloak vishnuloak patalloak in deep medition then what is true.Is sadhak really visits to that loka or just is it imagination.",
  question: "scientist proved and says our brain is responcible for creation of dream.out of body experiance. Ghost .loklokantar swarg patal loak parallel universe are created by our brain. I have asked you that if our brain creates dream word and out of body experiances to roam in swarg and patalloak then how ones soul can go to swarglok patalloak .is it our just imagination of brain or true condition .I met two hanumanaji at a one time in dream .Is it just imagination of my brain during dream and sleep or is it true.please tell me what is true. In deep medition sadhak feels that he is leaving body and going to roam vishnuloaka patalloaka .then what is true acording to science that stages are created by our midbrain imagination cells.means that word is not exists just it is brain imaginations.some psychitik patients feels another word due to chemical imbalance of brain.if some person has taken higher druas then he has also feeling of that word is moving around him.he may see ten faces of frontstanding man duetobrain.",
  answer: "Divine Soul,\n\nThere are two separate things : (1) The experience (2) Explanation of the experience.\n\nExplanation is sought by mind while experience by the soul. Your soul experiences other worlds and then your mind tries to explain it in its limits. If a write goes to visit Paris and write about his experience in a book, it does not mean that Paris exists only in that book. It means that he has gone to Paris and written the experience in book. Similarly, your mind can found a thousand ways to describe the experiences of soul. Don't dwell in explanations, go for experiences.\n\nBlessings"
},{
  id: 604,
  header: "I need clarity in life",
  question: "Jai Shree Ram.\nI have been divorced for almost 2 years now. I had agree for divorce due to certain issues though internally I never wanted to separate from my husband whom I dearly love till this moment. No second in the day passes when I dont think about him or miss him. The memories haunt me badly. Though it has been more than 2 years since everything ended and we have not been in contact but something inside me still says that we are meant to be together and one day we will reunite. What should I perceive from this inner voice? My family is after me to marry again but I can't. My mind and soul dont permit for the same. I can't think of anyone in place of my ex husband. Please help me.",
  answer: "Have you read Chapter 2 of Immortal Talks- Book 1? It tells about the mathematics of Karma.\n\nIf this attachment to your ex-husband is one-sided, you are doing immense harm to yourself and your family. Every soul has bad Karma and because of one-sided attachment you are taking on your husband's Karma on yourself thereby creating more and more suffering for yourself.\n\nSo, if it is a one-sided attachment, earlier you let go of him, is better. Marry again only and only when you've let go of this one-sided attachment otherwise the new companion and his family will also suffer due to this one-sided attachment."
},{
  id: 605,
  header: "I need help !",
  question: "Due to my foolish behaviour, I am in trouble. I need urgent help from Hanumanji !\nI know that he knows my weakness and mistakes all along, which warned me time and again, but I did not understand and have done a huge mistake.\n\nI am reading Shiv Raksha Stotra every day, as much as I can.\n\nAm I on the right path ? Please request Mahabali Hanumanji to guide me.\n\nI am sure he is my saviour and Guru !\n\nwith sashtang pranams,\n\nyour bhakta & desciple,\n\nSmita"
},{
  id: 606,
  header: "I never believed on god",
  question: "I exprience lot of negative things in human world that i stop believings on god. That they exist in this cruel world where human for his all selfisness can do anything. Since i m a girl, everyone treating me with different percepective. No one asked my dreams.,my happiness but everyone decide it on my behalf. Partiality always keep me questioning on my mind why god made that type of world where boys can do any good or bad thing bt no one blame bt if girl step out from her home every one questioning on her character.my heart is always true with myself nd i think same good thing with nearby people. But whenever i intract with someone people never want to intract with my soul and heart bt they want my body.\nBut now after reading all the chapters i start beliving on god. I can now understand whatever god give us a exprience to learn on different kind of illusion that we always think a real kind bt actually thats a illusion. After reading all the chapters lot of answer i get which i always wanted."
},{
  id: 607,
  header: "I really want to meet lord hanumandada",
  question: "Once i meet lord hanuman dada i will ask him what to do in life. Right now i am thinking as lord rama is archetype. As he obeyed his parents i also do. I go to office and do dinural actovoties. But after i meet lord hanumandada he will take me to cold mountains and will teach me meditation. I will do penance with him. Lord will enjoin me to leave sinful ways and will pious my soul like lord rama and shivaji soul. I will perform activities driven by lord hanumandada. I know i am sinful so he is not appearing in front of me.but one day i will get my sins cut by lord hanuman dada and i will also leave this body and will be freed to roam with shri bhagwan.",
  answer: "||Ram||"
},{
  id: 608,
  header: "I request you to ask lord hanuman on my behalf",
  question: "Pranam Setu Sant ji,\n\nI am doing my best to follow your instructions guruji.I am trying my best to divert my mind for adoption but still I am lost. please dont get upset with\nmy words as I dont mean to irritate you.I am daily speaking to lord Hanuman but\nunable to get any response. I have read in \"query\" section that \"lord vishnu has given human beings capacity to change our destinyby doing \"karma\" is it true?.\n\nday by day I am becoming a \"LONER\",is it normal? I am losing interest in friends,relative etc. Earlier I use to be a very friendly person but not now. guruji I stay at home whole day alone.I dont have any job to keep myself busy.I have already mentioned in my earlier email that for last 10 years\ni have done only 2 things \"struggled to get job\" and than \"trying to stay in job\" but at last I failed,may be gods wish.Before my marriage I prayed & struggled\nfor education and job,after marriage for kid but got nothing at the end.I will never be praying for anything in life as i have understood one very hard thing that no matter how we pray only our karma & destiny rules.\n\nMy father is lord hanuman devotee since long time but everyone pities his life.he never complains but everyone questions his bhakti towards lord.two of his daughters are issue less (myself 1st one) & younger one still unmarried.\n\nI saw lord hanuman in my dreams(I saw him after reading chapter 13) but unable to understand it so have come to you for advice.I am at home trying to do reading,\nchanting ram nam but still feel disturbed/confused.I dont find interest in any work,people,what should I do? nowadays my health has also deteriorated in spite of doing yoga etc.blood reports are normal but I dont know where is the problem. LOrd hanuman I dont doubt your capability but even I am a common human being who can get lost.my future looks blank,will I do only eating.sleeping,idling. will this be my life than in what way I am different from animals? Please lord hanuman guide me or show me some way before i get insane.\n\nguruji I request you to ask lord hanuman on my behalf (as elders say that god listens to everyone but he can never deny his messengers prayers & you \"MA-TANGS\" are his messengers) this question in \"sakshat puja\". He has to answer my question.\n\nPranam",
  answer: "Divine Soul,\n\nPrayer does help. It helps a lot. But the prayer cannot be done by the body or mind. You are a free entity. You can come to level of body, mind or stay at higher levels of Chitt and Soul. Most human beings live at the level of body and mind. When you fear about your future, worry about circumstances etc., you are at the level of body-mind. At that level, you cannot do prayer. At that level, you express only fear and lower desires. Those desires are heard by Lord Indra, not the higher Gods. If you want to communicate with Lord Hanuman or other Gods who live in the realm of soul, you have to rise to the level of soul.\n\nThere can be many ways to rise to the level of soul. Some people can rise simply by chanting 'Ram', or any other Mantra. Or you can read a chapter of Lord Hanuman's Leelas to rise to the level of soul. When you try to express at the level of soul, you never express your fear. You will just remain silent. Only words which may come out of your mouth would be 'Hey Ram' or 'Om'. You will never express your materialistic desire at that level. When your soul connects with the supreme, prayer automatically happens. And that prayer does bear materialistic fruits also. At that level the soul expresses desire of Mukti. And to fulfill that desire, Gods have to settle down your worldly conflicts first. So they work to either settle down your worldly conflicts or design them so as to give you lessons.\n\nAlso, find a higher purpose in life. Materialistic desires get fulfilled when you are not desperate for them. Let your actions be driven by the higher purpose. Your higher purpose could simply be \"to find happiness in every moment'. Take it like a game. You have a puzzle of life in front of you and you have to locate happiness in there. Find reasons to be happy in every moment.\n\nSolitude is good but not loneliness. If you have disconnected from people to avoid their reactions, that is not good. Meet people just for the sake of testing your spiritual evolution. If somebody shows pity at you, just see if it hurt you. Then rise above that hurt. Witness how you respond to people. Just imagine yourself having a basket in which you are collecting experiences. Imagine experiences as flowers. There are different kind of flowers. Keep collecting them. 'Somebody showed pity at me' (put it in the basket), Somebody jeered at me (put it in basket), Somebody talked about me behind my back (put it in basket).\n\nYou have a choice- you can either get crashed by the circumstances or use them as steps towards spiritual evolution.\n\nBlessings"
},{
  id: 609,
  header: "I saw Lord Hanuman in form of a cloud.",
  question: "First of all thank you setuu group for making us all know more about Lord Hanuman. And also my pranams to Mathangs.\nI got Lord Hanuman's divine darshan in the form a cloud. That day was saturday and I was on my way from Gnana Saraswati Temple in Basara,Telangana to Hyderabad by train. It was evening and was feeling uneasy that I did not go to Hanuman temple that day being saturday. I was just feeling uncomfortable at that time due to this. But to my surprise wen I looked toward the sky, I could see a cloud in the form of Lord Hanuman sleeping sideways facing towards me and with his both hands between his legs. And his tail could be seen in the form of cloud. I was completely shocked to see that. But I did not understand, why did he not give darshan in the usual way i.e as if he is blessing his devotee. Why in the sleeping form. I wanted to ask this to any one who can tell me why. After that wen I went back home, my aunt how had come to visit hyd had just went to hanuman temple and got orange kumkum which is given in Hanuman temple and she applied the kumkum on my forehead. It was completely a shocking xp. Please ask the mathangs what does the sleeping hanuman mean.\n\nThank you for the post."
},{
  id: 610,
  header: "I saw Lord Shiva",
  question: "Dear Mataang friends\nOne day I was sleeping , what happened I don't know , I became awake and in kind of trans I saw Lord Shiva and then went back to sleep automatically. Please let me understand what happened since it was neither day dream nor night dream...nor I was praying to Lord Shiva. Yes I do pray to Lord Hanuman everyday.\nAlso convey my prayers to Lord Hanuman in Shakshat Hanuman Puja and please inform him that I am not well after I lost my mother. Even my father is also not well.\nPlease pray for the wellbeing of my son, my father and my wife. Also I want to get my mother back...may her passing away be like a bad illusion like chapter 1.\nPranam.",
  answer: "Divine Soul,\n\nWhen your soul connects with Lord Hanuman, it automatically connects with Lord Shiva because Lord Hanuman and Lord Shiva are close to each other. Lord Shiva was trying to destruct sharpness of your memories which you are holding onto. Those sharp memories are creating obstruction in next birth of your mother's souls. Do not think further about your dreams. Let the divine powers do their work.\n\nBlessings"
},{
  id: 611,
  header: "i think he was here",
  question: "I don't know whether it is coincidence or imagination or whether it is real. This happened earlier too. Today morning when i did my pooja, i thought of hanuman as usual, but a little differently and offered flowers. I wondered why there was no mails from setu. When I checked the mail, there was nothing again. I wondered why. In the afternoon I read the ramayan which was stopped for a few days due to a death in the family, followed by the story of hanuman's quest for sita in Lanka. In the evening, something made me go to the pooja room again. I sat there and repeated hanuman chalisa. I felt like meditating for a while. I chanted the manthra ( which got corrected today) and remained there for a short while.I felt a gentle presence. I wondered if hanuman was there then. I couldn't see him for obvious reasons, I understand. Then I thought may be I was imagining. I did not feel like leaving the place but had to for the duties at home. The thought of your mail kept coming. And just now I got it. Are you here? As you are there everywhere, you are. But I want to know ,did you come to me? Am I sensing right? I started my pooja and reading of the ramayan along with devi pooja etc from the new moon day onwards. I was feeling very heavy for the past two days. Now, after reading the fifth chapter, I am feeling a bit relieved. If I have sensed you, anjaneya, I am blessed. Do tell me and make me ready to really see you. Jai hanuman. jai sriram. prostrations and pranams! Pranams to setu masters and sarangs. Hope I am able to see your leela on the 4th. Hope my arpanam reaches you.Sri gurubhyo namah.My pooja continues till the 4th and want to visit a temple. Raam Raam Raam. jai sri Anjaneya."
},{
  id: 612,
  header: "I want to do Sadhna; How should I convince my parents",
  question: "Pranam Mathangs & Setuu masters\n\nI'm 20 year old kid and I have failed in b.tech &messed up with my life\niam free for one year and recently on Feb 2016 I came to know about Setuu Hanuman website and its stories\nWhen iam reading the stories I just want to run away and come to srilanka near you and have penance in Setuu Hanuman bodhi\n\nBut I have parents brothers and relations\nWhenever I want to come near you these relations stop me and and when I read Setuu Hanuman stories I just want to run away to setuu Hanuman bodhi\n\nBut when I mingle with my routein activities in my daily life Maya catches me\nI know that iam in a illusion\n\nSome force pulls me back and says this is real for example a movie or a relative or a neighbour kid or something else deviates me from spiritual path\n\nHow many time I say to me that this world is not real and illusion also\nThis is just a dream not real also\nI get anger and iam attached to sense pleasures\nI get addicted to tv, movies, and some nonsense\nMaya catches me and I can't come out of this illusion\n\nJust I want to come to srilanka and be in Setuu Hanuman bodhi to get this illusion\n\nBut I do not know how to convince my parents and my grand mother (she is next mother to me)\n\nThey will always why are you always talking like a monk?\nYou have failed in b.tech now do a degree\nAnd get some job enjoy your life\n\nif I run away to setuu Hanuman bodhi without informing they will be in grief and search for me\n\nI want to leave all attachments\n\nI don't how to convince them\n\nPlease tell me how to convince them and come to you\n\nPlease waiting for your answer",
  answer: "Divine Soul,\n\nIllusion or Maya works in very sophisticated ways.\n\nTo engage a monkey into illusion, Maya has to conjure up just a banana.\n\nTo engage an ordinary human being into illusion, Maya just has to conjure gold. An ordinary human being would run after gold much to the delight of Maya.\n\nIf a person is already rich, Maya just have to create some trouble or worry in their life to keep them engaged.\n\nSuppose a person is broke to the extent that he has given up on everything. Maya fails to engage him in illusion because he is done with everything. Then what will Maya do? It will acquire most stealth approach. It will conjure up an idea of 'spirituality' inside the mind of its target. The target will get attached to an illusion called 'spirituality'. He would think that he is into spirituality, but actually he would be into an illusion of spirituality created by Maya.\n\nYou are at this stage. Don't play into the hands of Maya. You cannot get supreme knowledge by running away from your current circumstances. There is a huge difference between 'running away' and 'detaching away'. When you run away from something, you get even more attached to it. You are not eligible for Sadhana until you are at peace with your present. And peace doesn't lie in running away from noise. It lies amidst noise. Running away from noise is called 'holiday' or 'a break'. Setuu Hanuman Bodhi is not a destination to take a break. For that you can choose any resort at any hill station.\n\nBlessings"
},{
  id: 613,
  header: "I want to know the purpose of my life...this is a query",
  question: "Jai Sri Ram,\n\nFrom the time I got to know about Setuu site and offering puja online,it gives me immense peace of mind.From childhood I have been away from my parents for education and job purpose till date.In the course of time,I met many people,I would only notice one thing that I have been a solace to many people from childhood from my parents to all people I met and all I meet.I dont have so called friends but I am always there with people in their bad times when they have pain of a broken heart.I pray for their happiness ,they get the happiness and move on.I dont know whether they remember me and I never expect anything in return.Once they get their desired thing I am aloof on the same journey being myself.Each day I am thankful and grateful for my wonderful life my Lord has given me and the best parents ever.\n\nI am always praying for their well being,good health and longevity.The mystery is I dont have a stable job.If I work somewhere I can just work for maximum 8 or 9 months.I am concerned about my spiritual life.I just love to be in peace.I have no high expectations to be famous,rule others and am not ambitious.I just wish whenever someone is in presence of me or speaks to me should be happy and find peace.\n\nI consulted good astrologers regarding my marriage,but all their predictions failed.Everyone in my family among my well wishers are just waiting for it,but my heart has lost all hope,my father gave me some spiritual things so that soon marriage would take place but even they got lost.\n\nAnything related to my marriage if someone is trying to do they are facing some major problems even one of my astrologer uncle,whose all predictions came true,died the next day after he predicted my marriage.I dont know what is the matter.\n\nI just want to know the purpose of my life from Lord Hanuman if granted by my Lord Sri Hari Vishnu.Everyone tells me my Lord loves me very much,but I want that the purpose of my life be revealed to me.\n\nMy wish is to love and serve my parents with all my heart mind and soul.I request you ask those Mathang rishis to put forward my query for the sake of my parents will my marriage take place?when ? what is the purpose of my life?\n\nThank you\n\nJai Sri Ram",
  answer: "Divine Soul,\n\nIt is true that you are close to God. That is precisely the reason why God is taking your soul on the path of Moksha. Basically there are two conflicting desires exhibited by your soul,\n\n(1) \"I want stable materialistic life.\" This desire is exhibited by your conscious mind. When you observe people around you (including your parents), this desire gets enforced.\n\n(2) \"I want Moksha\". This desire is exhibited by your subconscious mind.\n\nBecause of conflict of these two desires, you are virtually stuck at one place. You must take a decision. If you want a stable materialistic life, reduce your attention towards \"supreme truth\". Then God will understand that you want desire number 1 to be fulfilled. Once your desire 1 is fulfilled in a couple of years, you can resume desire 2.\n\nBlessings"
},{
  id: 614,
  header: "i want to meet hanuman ji",
  question: "i want to meet hanuman ji"
},{
  id: 615,
  header: "I want to meet you hanumanji",
  question: "mujhae ajab ka felling aa rahi hae.\nmeri dil bol rhi hae in this life span i want to meet hanumanji once...\nmae unki ake chota bhakt hun.\nyeah bhakt pae hamesa krupa banayae rkhae.\naab tak mae joe bhi pap karm ki hun uskae lea mujhae maaf kar daen.mae apnae dil sae uskae lea sarminda hun.plz god give me one chance to meet you.\ni want to disapper myself on you.\nmy soul is truly dedicated for u.\nmae aapkaee badan mae leen hona chati hun.yeah kalpanik sansar sae mukti chati hun.\nplease god show me the way. give a look to me.",
  answer: "पवित्र आत्मा ,\nआप श्री हनुमान जी को भगवान ही नहीं गुरु बनायें | एक एक करके आपके मस्तिष्क के सारे विकार समाप्त हो जायेंगे और एक दिन आप उन्हें अपने सामने साफ़ साफ़ देखेंगे |\n\nमंगल कामना"
},{
  id: 616,
  header: "i want my baby soon",
  question: "bhagwan hanuman ji,,Please solve my problems related pregnancy.I want to be pregnant but i am suffering from primary infertility,and i beg u please solve my problems..i want my own baby in my womb I do not want to opt surrogacy as doctor suggested....please bhagwan ji do something and fullfil my dreams and wishes.i m very frustated and lonely without my baby....i feel i m reason behind all sadness and bad things happen in my family life..so please give some true happiness to me n my family. i m going for new ivf cycle on dated 9 feb..please give me your blessings for succes of cycle and after treatments by that i could also give birth a healthy child..pls do something god!!!!"
},{
  id: 617,
  header: "I WANT TO SEE REAL ME",
  question: "I know that Lord Shiva is in me.He is always presebt there and will be.Also after knowing this,I have the desire to see him in this mortal world with my own eyes.\nWhy is that?\nI know that he listens my every prayer,my thoughts,He is my heart beat.\nBut after knowing all this,I want can't wait to see him.It means the same that 'I want fo see Real Me'!\nI just want his hug.And i know,he must be smiling know while I'm writing this...Cause he is Almighty.My Shiv!"
},{
  id: 618,
  header: "i was feeling that my soul was like coming out from my physical body",
  question: "when i read chapter 5 after finishing it reading i felt that my soul is feeling light when i gone to sleep when i fell asleep in my bed at night i felt like my soul is coming out from my physical body and want to leave my body and go somewhere but it did not happen just i was feeling like that my soul means that i am coming out of this body which god has granted me ."
},{
  id: 619,
  header: "Identity, Who I am or Who we Are.?",
  question: "This confusion came to my mind while reading one of the chapters here and also that time campaign for donating body parts came in newspapers\nLike a machine or car which is made of hundreds of parts.. every part is replacable., and yet the car remains the same, or the registration number remains the same.., for example.. A car registered with number 7652 has 100 parts , let it be named from 1 to 100.., and now in next 100 days due to any reasons we replace every part with a new part.. and now on 101 day we have a car with all different parts from the car we had on day 1, but yet we call it the same car with registratin number 7652. may it be because.. we had a registration card orit happens in daily human life.. watever.. but what about the we..,\nour body is made up of different parts., hairs, skin , blodd, bones, eyes, kidney, liver lungs etc..\nand in those newspapers i found almost all the body parts can be donated.. some parts can be donated during a healthy life., some can be in coma stage or brain dead stage..or some can be after death.., so, every part is donatable.., this means all those parts can be acceptable also to someone., let's suppose all those parts are transplanted in a body named someone in a timespan of 5 years.., after 5 years he/she has all parts of others.. like.. blood bones eyes skin heart lungs liver etc etc.. then why he/she still be called someone... WHY...\ni questioned this to myself and some of my frnds and some knowledgable persons.. there were only 2 answers... one is because of soul and second is brain.. some claims brain is still not donatable.. or still can't be transplanted.. and all persons including me satisfied with the answer that our soul lies in our brain.. but somewhere in my mind i thinks.. mind is only for memories.. (urmi story, where lord hanuman told her to fly out of body).\nthen after few days i read a article in newspaper that scientist in china are going to transplant a brain in humans for the very first time.., they also claims that they have done thausands of succesfull brain transpanted surgery on rats.... now if dis happens in humans.. if a person with identity or name X got all transplants possible inclusing brain.. whether he should be still called X.. obviously yes.. because X got the transplants.. now my question is.. all parts in X before transplants are now missing and in place of those parts all new parts belonging to M N o P. etc etc are present now.., so why he should be called X nor a combination of MNOP, again answer is obviously the soul... i guess it .. i may be wrong.., but actually the simplyfied question is\n\" IN which part of our body soul lives or rests.. \" as.., why X remains X after all transplants...\ndis is like Identity crisis for me..,\n\nhey lord hanuman pls guide me.. or give me power to understand this.. i m highly obliged to you.. thanks.",
  answer: "Divine Soul,\n\nThis sense of \"I\" is not because of soul. Suppose we show you video of your soul's previous life, will your soul recognize that person and feel a sense of \"I\" with that person? NO.\n\nIt is not because of memory either. Memory relates to your past, what about the imaginations you have about future? Those imaginations also contribute to sense of \"I\".\n\nYou have a three dimensional existence- Past, Present and Future. This three dimensional existence creates illusion of \"I\".\n\nAnd you are changing every moment. You don't have to change all the parts. You are changing every moment. Your cells are dying, new cells are taking birth and so on. You at 7:02:01 PM is completely different from you at 7:02:02PM\n\nThe answer to your question is existence which is three dimensional. At any point of time, you have a present, a future and a past. This 3 dimensional existence makes you feel who you are. Existence is a complex topic. Lord Hanuman has started elaborating it from chapter 10. You will read more of it in upcoming chapters.\n\nYes, your head and your memories can be completely replaced. Still you will feel the sense of \"I\". You are pursuing an excellent question. Do not let this question die. This question can lead you to realization. You will realize that Past is just an illusion. You think that you have \"lived\" your past, but that is not so. It is just an illusion. If a sage or God replaces your past, you will still feel that you have lived that past. Read 10th chapter and ponder upon it deeply.\n\nP.S. : The soul doesn't live in the body. It rides the body just like we ride a car. It is driving our body.\nBlessings"
},{
  id: 620,
  header: "Idol Worship",
  question: "Could you please make things clear about idol worship. When did it start and who started it and for what purpose? How is Idol worship supposed to be done correctly. Any correct way to do PranaPratishtha?",
  answer: "Divine Soul,\n\nSwayambhu idols have souls in them. You will learn a bit about them in chapter 13 which has been released today. The idols which are not Swayambhu probably have something to do with symbolism. It is better not to speculate until we decipher all the chapters of Lord Hanuman's Leelas.\n\nBlessings"
},{
  id: 621,
  header: "idols appeared in dreams are true",
  question: "Babaji..\n\nwhenever i chant hanuman with great devotion i will dreamt of god Hanuman and i will get darshan of hanuman in different idols that i never see anywhere before.. are they really exist in real? once i dreamed as…. i requested before hanuman statue to talk with me and then statue said “tell me.. and when i started saying something god read some verses and he disappeared”.. i usually have this types experiences in my dreams… are these because of my psychological condition?? or god’s delusion..?",
  answer: "Divine Soul,\n\nThose are desires which cannot be fulfilled in MaanavLoka at a particular time and space. They get fulfilled in SwapanLoka.\n\nBlessings"
},{
  id: 622,
  header: "IIlusion?",
  question: "I was happy to read about Lord Hanuman's visit, but was shocked to see that He preached the illusionary nature of the world? Shastras dont support that at all.\n\nThe first shloka of the Bhagavatha says that the world is real. We experience it as real. Veda says \"Satyam Vishwam maghavAna\".\n\nLord Hanuman born as Shri Madvacharya ( as per veda and as per Vayu purana? says the world is real, then how can Lord Hanuman say that the world, created by His only favourite Lord Rama or Narayana, is illusionary?\n\nThat set my mind ringing that this story might not be real, am sorry to say.\n\nHari parataraH ...satyaM jagat\n\nregards\nsriram",
  answer: "Divine Soul,\n\nLord Hanuman is not making any declarations here. He is Guru of Mathangs and He has come to give them the Brahmagyan. He knows what He has to speak to them to unsettle their structured beliefs and to make space for the Brahmagyan. We are not the right authority to comment on His words. We are translating the conversations in best of their essence. Please follow the conversations as we post next chapters. Your doubts will be cleared.\n\nBlessings"
},{
  id: 623,
  header: "ill thoughts",
  question: "Iam unable to perform pooja with peace of mind. Iam getting all bad thoughts and making me get out of meditation",
  answer: "Do not close your eyes when you pray or meditate. Just observe the sounds and scenes around you. Keep your body still. Feel your presence and presence of everything around you. Just observe everything. Do not try to control your thoughts. If thoughts are coming, just observe the thoughts coming. Do not try to stop them.\n\nBlessings"
},{
  id: 624,
  header: "illusion",
  question: "illusion is the word created by the divine soul just to test how much we are able to think, we never can overcome from all the illusion without help of hanuman ji"
},{
  id: 625,
  header: "illusion",
  question: "Is the whole universe an illusion?\nIs yoga a way to reach God?",
  answer: "Yes, the illusion of space-time.\n\nYoga means defying destiny and making Indra Deva and Kaaldeva obey you. Indra Deva can help you get rid of desires and Kaal deva can settle your Karma accounts. When both Karma and Desires are settled, you are free. You get Moksha,\n\nBlessings"
},{
  id: 626,
  header: "illusion of time",
  question: "As i read the ram setu secret chapter.what i understand about time illusion as follows. suppose sun is centre from where kaal accounibility starts first come bhulok and then pataal so the bhulokis can see future of the pataallokis and pataallokis when they see towards bhulok they see the past time of bhulok.\nNow i assume the earth as a tape roll as if like an audio cassette.. now i imagine a mark or time spot on topmost circle.if we see the immediate below layer of tape that will be at a forward position as in a straight line so that is why upperlayer person(bhuloki) can see future of below layered(pataalloki).and if we go to below layer (pataal)n mark a point at that point we can see past of upperlayer(bhulok)."
},{
  id: 627,
  header: "Important Question",
  question: "Main aapse ye puchna chahta Hu Ki main apne Mata pita ko Khushi kaise de sakta hu. Mje unse much nahi chahiye or Vo mjse naraaz na Ho uske liye me kya Kr skta Hu. Aesa main kya kru ki Vo mj par garv karain. Or me hmesha sach bolna chahta Hu par bol nahi pata. Or me logo ki sahayata krna chahta Hu par main isme bhi asmarth Hu. Kripya mje btaiye ki me kis prakaar ye sb kru..utter avashya dijiyega... Jai Shrii Ram",
  answer: "दिव्य आत्मस्वरुप ,\n\nआपके आस पास जो भी आपसे जुड़े हुए हैं , वे चाहे आपके माता पिता हों अथवा वे अजनबी जिनकी आप सहायता करना चाहते हैं , उनकी सहायता अपने आप हो जायेगी अगर आप अपनी स्वयं की सहायता करें | अपनी आत्मा और उसकी शक्ति को पहचानिए | आपके आस पास भ्रम की चादर है , आपके माता पिता व अन्य लोग वास्तव में आपके अन्दर ही हैं | जब आपकी आत्मा खुश होगी तो आप देखेंगे कि कैसे आपके आस पास के लोग भी खुश होते हैं | आपकी आत्मा तब खुश होगी जब आप ऐसा कार्य करेंगे जिससे आपकी आत्मा को संतुष्टि मिले | आपका जन्म यहाँ किस लिए हुआ है , यह जानिये | जीवन का ध्येय पहचानिए | हर आत्मा का ध्येय मोक्ष होना चाहिए , उसी में आत्मा का कल्याण है |\n\n|| राम ||"
},{
  id: 628,
  header: "An Important Question",
  question: "Jai Shree Ram\nJai Sita Mata\nJai Bajrangbali\n\nI read everything posted on this website sincerely and try to implement as much as I can. I always wait for the next chapter anxiously. I was just thinking that chapter - 24 is taking a bit longer time, in the meanwhile, yesterday I saw your message that it's because of Assurahs.\n\nAssurahs are everywhere. They influence our life too. We should try that our life shouldn't be influenced by Assurahs. For this, we need to connect to Lord Hanuman and purify our soul which we are doing or trying to do with the help of Setuu. Let's consider my case. I don't know how much I am successful or how much I implement in my life what I read on your website. But I am trying.\n\nOnly yesterday, I got to know that the delay in publishing chapter - 24 is due to Assurahs. Assurahs are creating problems to Mathangs and Setuu masters in publishing the chapter. Please correct me if I am wrong. And if I am right, then, my question is if Mathangs and Setuu masters, who are in direct service to Lord Hanuman and Mathangs who have got Brahm Gyaan directly from Lord Hanuman and Setuu Masters who take part in Sakshat Hanuman Puja, are not fully able to get over Assurahs, then, how can a normal person from mainstream society like me be able to get full control over Assurahs? I am just asking. Please forgive me if I ask anything wrong. Waiting for a reply.\n\nPranam to Mathangs and Setuu Masters.",
  answer: "Divine Soul,\n\nAt the end, the good side won and chapter was published. Asurrahs are right here. They always put obstacles in the good work. It may take time but the good side always wins. This creation itself is a constant war between good and the evil. If evil is not there, there would be no creation as you know.\n\nOnly the enlightened ones realize how important chapter 24 is. After one point, the realized masters face the situation where they lack words to describe the supreme truth. Even great sages couldn't do it. Their words would become incomprehensible and generic after a certain point: like 'truth can not be described in words', 'we can only hint' and so on. Lord Hanuman has done what greatest Rishis in the past couldn't do. Chapter 24 describes what cannot be described. It describes the internal world which can be experienced/realized but almost impossible to describe. The attack of Asurrahs in publication of such words of importance is understandable.\n\nBlessings"
},{
  id: 629,
  header: "indriya",
  question: "main ek atma jo ki manish naam ke deh main esthir hun main bhagwan hanuman ki 5 adhayay padhne ke bad thoda santi mahsush kiya lekin main apni endriyo ko vash main nahi kar pa raha hu mujhe ye nahi malum hai ki endriyon ko vas main kaise karte hai jiski vajah se main apni lakshya par nahi pahuch paa raha hun kripya kar marg darshan kare....",
  answer: "मान लीजिये कोई नटखट बच्चा है जो मौका पाते ही शरारत करता है | क्या उसके माता पिता उसे रस्सी से बांधकर रखेंगे ताकि वो शरारत ना करे ? नहीं | माता पिता का घर में होना ही पर्याप्त है | अगर बच्चे को लगेगा कि उसके माता पिता घर में ही हैं और वह शरारत करते पकड़ा जा सकता है तो वह अपने आप ही शरारत नहीं करेगा | कुछ ऐसा ही इन्द्रियों के साथ है | उन्हें बांधकर रखने की आवश्यकता नहीं है | अगर बाँधने की कोशिश करेंगे तो वे ज्यादा बिगड़ सकती हैं | बस उन्हें देखिए | अगर इन्द्रियों से कोई गलती हो जाती है तो इन्द्रियों की गलती का बोझ अपने सिर मत लीजिये | आप एक आत्मा हैं , शरीर हैं | शरीर जो करता है करने दीजिये | कुछ दिन में आप देखेंगे कि शरीर भी खुद ब खुद सुधर जाएगा |\n\nहाँ छटा अध्याय पढने के बाद आपको एक बात और पता चली होगी --- कि आपका शरीर सुर तथा असुर भी प्रयोग करते है | अगर एक बार किसी असुर को आपके शरीर की आदत लग जाए तो वह बार बार शरीर में आने की कोशिश करेगा | अगर असुर को एक बार फटकार लग जाए कि उसके बुरे कर्म इस शरीर के माध्यम से संभव नहीं हैं तो वह नहीं आएगा| इसलिए इन्द्रिय परिग्रह भी आवश्यक है | अगर कोई बुरा कार्य करते समय आपका शरीर आपके वस में नहीं रहता तो यह अवश्य असुर के नियंत्रण में है | जब भी कोई बुरा कार्य करने की मन में आये तो समझ लीजिये कि कोई असुर आपको बहला फुसलाकर आपके शरीर का उपयोग करना चाह रहा है | उसे वही पर फटकार लगा दीजिये तो वह फिर से नहीं आएगा |"
},{
  id: 630,
  header: "INFINITE HONOUR",
  question: "I have too much honour for lord HANUMAN. Recently I got sudden financial loss. I think I will get back this soon with interest."
},{
  id: 631,
  header: "Infinite number of Worlds",
  question: "Jai Siya Ram\nJai Hanuman\n\nThe world in which we are living is just one world out of infinite number of parallel worlds. I want to know more about this infinite number of worlds.\n\nIn chapter-1, the lady was on deathbed in one world which is termed as bad illusion and the same lady was alright in another world and this is termed as good illusion. Lord Hanuman helped the monk in jumping from one illusion to another. An ordinary human being cannot jump from one illusion to another. An ordinary human being would live a complete life in one world i.e. under a single illusion. But the monk had performed austerities in life. That is why Lord Hanuman could jump him fom bad illusion to good illusion.\n\nI have read more about infinite number of worlds on your website. For example, a person is a beggar in one world while in another world the same person is very rich. Now, my question is Are the souls of both the persons in two different worlds same or different? Both the persons are same but they are in living different worlds and they cannot interact. So, are both the souls same or different? Also, why can't they interact?\n\nThis is about two different worlds. But you say that there are infinite number of parallel worlds. Can't the people from these infinite parallel worlds interact? Are the people same in all these infinite parallel worlds? Are there the same souls in these infinite parallel worlds?\n\nPlease answer my questions and tell me more about infinite number of parallel worlds. It's quite interesting to know that a person just like me is also living in some different world. But I don't know him. I wish I could interact with him. Please tell me if there is any way I can interact with him? If not, then, why?\n\nThank you Setuu\nThank you Mathangs\nRegards",
  answer: "Divine Soul,\n\nPonder yourself. Think deeply. Shooting questions from outer mind will not help. Think and try to find answers yourself. Even if you don't find an answer by thinking, you will progress on the path of supreme truth. But by shooting questions from outer mind and seeking ready made answers, you will only go backward or remain stuck at the same place.\n\nBlessings"
},{
  id: 632,
  header: "Intution regarding earthquake in advance",
  question: "shri ramdoot anjaniputar hanuman ji,\n\non dated 25-4-2015 at near about 4 am i experienced a bad feeling duringmy sleep. i feel that there is huge earth quake and whole building of my home shaking.after few minutes i wake up and feel relax oh god it is dream . but afternoon i heard bad news that huge earthquake came in nepal and some parts of india. i pray to bajrang bali ji in future such type of pre intutions only occur for some good news inmy life.\n\njai shri Ram ,\naap ka sewak Dinesh Gupta"
},{
  id: 633,
  header: "Isse kalp ke baar HANUMAAN JI kaha chale jayenge ?",
  question: "Continued from #508063\nIss kalp ke baad Hanuman ji kaha chale jayenge... kya ve moksh chale jayenge ?",
  answer: "विष्णु लोक में |"
},{
  id: 634,
  header: "It is a query-",
  question: "Rama Ram Ram\n\nI submit this query after a lot of contemplation whether to ask and how to post this query etc.\n\nMy question is even if I chant Ram Nam regularly, why dont i get any sort of guidance from within or from some other super natural sources.\n\nWhat ever i do or think or decide to do, everything goes waste or in other words, my actions and efforts give the opposite reactions and results. Why????? I start with lots of confidence and positive thoughts and with good energy levels and what ever is needed for the particular actions - Then too they go in vain.\n\nWHY?????\n\nI need some guidance - for what to do - when to do - or how to !!!!\n\nHow will i get the proper guidance??????\n\nWhen will I get success in my life??????",
  answer: "Divine Soul,\n\nYou are not getting success because you are desperate for it. You are not at peace with your present, how can your future be peaceful and better. For instance, you haven't read even all the chapters of Lord Hanuman's Leelas published here. You don't do anything with patience because you are not comfortable with the way you are right now. You want to run away from your present. See, what you currently are right now is a sum total of your Karmas and Desires of past. You have to accept your past and present, then only future can be better.\n\nDon't chant Ram Nam just for motive of fulfilling desires. Chant it with your heart. First realize who you are? Are you a piece of blood and flesh which has some desires. Or are you something higher than that? Contemplate.\n\nBlessings"
},{
  id: 635,
  header: "It seems I become eligible",
  question: "Jai Shree Ram ! Jai Jai Hanuman !!\n\nIn chapter 18, it was mentioned that this truth cannot be explained to all. So if we came to know about this truth, does it means that we became eligible for this truth.\n\nAs you said (in answer of other devotees), that this chapter seeds questions in one's mind so that he\\she can promote their selves. There is number of questions in my mind also and one of them is -\n\nWhat is Kamdhenu ? I am still thinking about this only thing.\n\nMy Thoughts : in this question, sage said that don't limit to your mind and go beyond it to solve this puzzle. I think that to go beyond this mind we have to take help of this mind to awaken our \"Chetana\" because I think this is only thing which can help us to go beyond the mind. But to awaken \"Chetna\" we still need our mind which has all the Gyan in it.\n\nAll the knowledge I have, I came to the conclusion that Kamdhenu is the Guru | Milk is that knowledge given by Guru | That Gyan is the Base of \"Astitava\" and if we have that Gyan then we can fulfill our wish without efforts.\n\nI also think that I know that how to fulfill wishes without efforts. In previous chapters you explained that if we give up our \"Bhagye\" the Lord Indra offer us some choice that we can select or demand. So we give up our \"Bhagye\" then we can fulfill our wishes from him. Right ? Is it that Gyan but this cannot be the base of Astitava.\n\nBut somewhere I am feeling that I am lacking somewhere it could be or couldn't be the correct answer.\n\nI am confuse. please help me\n\nPlease correct me If I am wrong and help me to walk ahead.\n\nJai Shree Ram ! Jai Jai Hanuman !!",
  answer: "Divine Soul,\n\nKaamdhenu is not Guru. You are doing the same mistake which was done by king Arjuna. Human mind wants to categorize everything and put a label on it. Your mind wants to put the label of 'Kaamdhenu' on Guru. Mind wants comfort and questions give discomfort to mind. Specially the questions which have potential to take you beyond mind. Don't yield to tendencies of mind. If we tell the answer, you will lack the knowledge which you would have got in the process of getting the answer. Keep the question in mind. The answer will strike you all of a sudden.\n\nBlessings"
},{
  id: 636,
  header: "is it true..",
  question: "kya yeh stye h ki bhuke rhne se hanuman ji jaldi sunte h?",
  answer: "नहीं , यह सत्य नहीं है |\n\nहाँ , व्रत करने से आपको अपने तन मन से उपर आत्मा के स्तर पर पहुँचने में मदद अवश्य मिल सकती है | जब आप आत्मा के स्तर पर होते हैं तभी आप हनुमान जी के साथ संपर्क करने योग्य होते हैं |\n\n|| राम ||"
},{
  id: 637,
  header: "Jai Anjeneyar",
  question: "I have just completed my fast for Anjeneyar this and last year. I started the fast last year and he helped me to carry on by giving me the strength and courage to move forward when i was in my lowest point. We are not out of it yet as I pray to him everyday. I cannot afford to provide him anything but a simple glass of water and sometimes raisins or fruit. I have felt his energy and I cant describe what it was but it felt so calm and peaceful expecialy when chanting Hanuman chalisa.\nOh Lord, I know you have heard my plea and cries and I am still pleading with you for help. Om Sri Rama Jayam."
},{
  id: 638,
  header: "JAI BAJA JI SARKAR",
  question: "MERA NAM MAHENDRA SAHU HA ME LALITPUR ME RAHTA HU HUM LOG 3 BHAI OR 1 BANIN H MERE PAPA MAMI 4 SAL PAHLE MERE PAREBAR ME HISSA BAT HO RAHA THA TAB MERE TABIYAT ACHANAK KHARAB HO GAYE OR DR.NE MANA KAR DIYA TO MERE BUA JI KO COLL KARKE BATAYA TO BAH MUJHE DEKHNE A RAHE THI OR BO PAHLE SE HE BALA JI MAHDIPUR JATE THI TO UNHE EK AAMA JI BATATI H UNHONE BATAYA KI MAHENDRA KO KUCH NHI HUA H USE UPRE KALA JADU KARA DIYA H TO MERE BUA JI NE BATAYA TO MERE PAPA KO YAKEN NHI HUA FIR MERE BUA JI NE BATAYA KE AAMA JI NE BATAYA KE KUCH PUJA KARNE HO GE OR BALA JI DARSAN KO LIKAR JANA PADEGA MERE MAA NE MAN ME HE BOL DIYA KE DARSAN KARADE FIR MERE TABIYAT THODI THIK HO GAYE 3 DIN BAD JAB ME GHAR AYA TO MERE TABIYAT FIR SE KHARAB HO GAYE MERE PAPA MUJHE GABALIYAR LE GAYE BAHA CT SCNE KARAYA US ME KUCH NHI NIKLA FIR MERE BUA JI NE MUJHE AAMA JI SE MILNE BULAYA ME GAYA UNHONE BATAYA KI MERE GHARKE HE LOG HE JIN LOGO NE MUJHE KALA JADU KARAYA THA OR 2 DIN KE ANDAR HE BALAJI MAHDIPUR LE JAO NHI TO MUJHE KOI NHI BACHA SAKTA ME DUSRE HE DIN MAHDE PUR CHALA GAYA BAHA MENE BHOG LAGAYE OR MUJHE PASI AYE TO US ME SABHI LOGO KE NAM BATAE KE KIS KIS NE KALA JADU KARAYA MERE PAPA KE BADE OR CHOTE BHAYI OR UNKI BIBI KA NAM BATAYA TAB PAPA KO YAKIN HUA JAB SE ME SIR BALA JI SARKAR KE PUJA KARTA HU AB ME THIK HU BAS EK HE IKCHA KE MUJHE BALA JI SARKAR KE DARSAN KARNA H"
},{
  id: 639,
  header: "Jai Bajarangbali",
  question: "Jai Shree Ram , Jai Bajarangbali........! Hey Bajarangbali , mujhe shakti aur kabiliyat do ki main apne karyashetra me sarvoch oonchaiyon ko praapta karu aur is darmiyan mere vijay path me aane wali baadhaon ko main aapke aashirwad se aasani se paar kar shaku....! Mujhe aashirwad aur shakti do ke main is shrushti mai bahot saare bhalai ke kaam kar saku..\nJai Bajarangbali.....!"
},{
  id: 640,
  header: "JAI BAJRAN BALI JAI",
  question: "Oh Lord Hanumana !!! The word Moksha in Humans is possible only you wish to give us with\nlove and affection for the sake we are your childrens.\n\nHumanly is impossible, I need all your blessings, I totalally surrender to you on the Holy feet.\nShower all the blessings in every seconds of my life in this world and forever, forever, forever....\nBaba Bless your childrens, Baba Bless your childrens, Baba Bless your childrens.\n\nJai Jai Ram, Jai Jai Ram, Jai Jai ram...Jai Jai Ram, Jai Jai Ram, Jai Jai ram...Jai Jai Ram, Jai Jai Ram, Jai Jai ram...Jai Jai Ram, Jai Jai Ram, Jai Jai ram...Jai Jai Ram, Jai Jai Ram, Jai Jai ram...Jai Jai Ram, Jai Jai Ram, Jai Jai ram...Jai Jai Ram, Jai Jai Ram, Jai Jai ram...\n\nVeeranjaneyaswamy namasthe namasthe namasthe !!!\nVeeranjaneyaswamy namasthe namasthe namasthe !!!\nVeeranjaneyaswamy namasthe namasthe namasthe !!!"
},{
  id: 641,
  header: "jai bajrang bali",
  question: "bajrang bali baba ji maine apki shakti ko ajmaya hai.mujhe pata hai aap mere sath ho hamesha or mere har baat sunte ho. kabi b koi b kasht aata hai toh hamesha sath dete ho.mera bhai apka bagat hai.bachpan seh apki pooja karta hai shyad yeh mere bhai ka he vishvas tha jo mujhe b apki bhagti ki raah par leh aaya. maine aaj tak jinti baar b kuch b difficult wish mangi hai voh puri hue hai. 40 din lagatar 11 baar hunumaan chalisa padh kar human ji seh kuch b wish poori karvaye hai. ab maine tuesday k fast shuru kiye hai. or yeh fast maine apne mumaa,papa or bhai k liye rakhe hai taki hunamaan ji unn par hamesha kirpa rakhe.mere papa or bhai ka business or b jada badeh. or jab b mera fast hota hai tuesday ko useh din mere bhai ko kaam main lakho ka profit hota hai. mujhe pata hai hanumaan ji mere prathna sunte hai but main yeh jaanna chahti hu ki kya iss kalyug main mere jaise simple bhagat unn k darshan kar sakte hai? or kaise unn k darshan kar sakte hai? hum kaise unki pooja kare k voh khush ho jaye or hum ko darshan deh.",
  answer: "This experience has been communicated to Lord Hanuman in Sakshat Hanuman Pooja. आपके एक एक शब्द में मोह और माया के दर्शन हो रहे हैं | हनुमान जी के दर्शन हर कोई कर सकता है परन्तु मोह और माया जहाँ हैं वहां हनुमान जी साक्षात् दर्शन नहीं दे सकते | आपकी मासूमियत के चलते वे आपको परेशानियों से बचाते रहेंगे लेकिन साक्षात् दर्शन तभी संभव हैं जब मोह और माया दोनों का त्याग हो | गृहस्थी में रहकर त्याग कठिन जरूर है लेकिन अगर आप हनुमान जी को गुरु मानकर उनकी उंगली थामे तो वे आपको मोह माया के जंजाल से निकालकर दर्शन अवश्य देंगे | यहाँ पर पोस्ट किये जा रहे हनुमान जी की लीलाओं के अध्याय अगर आप एकांत में पढेंगे तो आपको हनुमान जी अवश्य अपने दर्शन का रास्ता दिखायेंगे | शुभम | मंगलम ||"
},{
  id: 642,
  header: "Jai bajrang bali",
  question: "Agar aisa real main hua hai to mere param pujya \"Pavanputra Hanuman ji\" apko sat-2 naman,\nmain bhi apka ek agyani putra huin , apni krupa mujh par aur mere parivar par kar dejiye prabhu. apko koti-koti pranam. aur is sansar ko papon se mukt kariye!"
},{
  id: 643,
  header: "Jai Bajrang Bali",
  question: "I have always had faith and belief in Lord Hanuman. Every time I was in a situation where I needed help, I would think of him and the situation would be overcome. I continue to pray and will continue to do so through out my life.\n\nJai Shri Ram !"
},{
  id: 644,
  header: "jai bajrang bali",
  question: "me bhut kush hu ki satuu hanuman ke madyam se me bajramg bali ke aur bhi jaan paya...\ni feel so luck.....................\nand i m waiting for 10 chepar...............?"
},{
  id: 645,
  header: "Jai Bajrang Bali maharaj",
  question: "Jai Bajrang Bali,\n\nHe mere Prabhu ye duniya itni matlabhi ho gaye hai ki apne Mata aur Pita ka hi parityag kar de rahe hai. He Prabhu ji jo ye accident ho rahe kahi pe pani ki bad ane se mar rahe hai kahi blast hone se mar rahe ye sab kya karan ho sakta hai. kya sab ka yek sath maran likha hai ya bhir ab manv hi danav ban gaye hai. Kya aise hi Bharat mata ki god se sab chale jayenge\nya phir kiska kuch nivarn hoga.",
  answer: "दिव्य आत्मा ,\n\nसृष्टि की माया को समझिये | यह कलियुग है | कोई कहीं नहीं जा रहा , आत्मा अजर और अमर है | समय के चक्र में आत्माएं अपने कर्मों का हिसाब चुकता कर रही हैं ताकि वे हिसाब चुकता होने के बाद वैकुण्ठ की ओर लौट सकें |\n\n|| राम ||"
},{
  id: 646,
  header: "Jai Bajrangbali",
  question: "Ever since childhood I have been a devotee of Hanumanji. I have immense faith in lord Hanuman. Hanumanji has always been protecting me from all kinds of evils and troubles. I have grown up worshipping lord Hanuman and all these years my faith in lord Hanuman has grown manifold times. Before starting any work I rarely forget to remember Hanumanji. He makes my work successful most of the times. Hanumanji, everything is visible to you. You know everything. Please forgive me and my parents if knowingly or unknowingly we have made any mistakes either in this birth or in previous births. I have also got my Charan Pooja done by the Mathangs. Also, I have offered some fruits to lord Hanuman after reading Chapter-1 of Setuu. Hanumanji, please accept my prayers and offerings and bless me and my parents. Hanumanji, please bless me with a good job. Also, help us become good souls. Hanumanji, keep your blessings on me and my parents and guide us to follow in the right direction of life which leads to you and make our souls so pure that we can get your glimpse. Hanumanji, I really want to have your glimpse in this life of mine. So, Hanumanji, please help in making my soul so pure that I can have your glimpse in this life with my naked eyes. I really want to thank Setuu and the Mathangs from the core of my heart for helping people connect with almighty Hanuman. They are really doing a great job and that must be appreciated. Jai Bajrangbali. Jai Shree Ram.",
  answer: "Divine Soul,\nYour prayers have been accepted on this auspicious day. Take a deep breath and break all the barriers. Let the light of Lord's blessings reach deep into your soul.\nBlessings"
},{
  id: 647,
  header: "jai bajrangbali",
  question: "Hai hanuman ji madat karo app sab jante ho ki kiya ho RHA hai meri jindgi mein madat karo bajrangbali"
},{
  id: 648,
  header: "Jai Bajrangbali-2",
  question: "Ever since childhood I have been a devotee of Lord Hanuman. I have full faith in Lord Hanuman. I know I have his blessings. Whatever I am today and whatever I have achieved in my life till today, that's all because of his blessings. I rarely forget to take his name before I start any work. Most of the times my prayers have been accepted except for some. In all these days my devotion towards Lord Hanuman has increased only. The unanswered prayers have not lessened my faith and devotion in Lord Hanuman even a bit.\n\nLast year while surfing on internet, I got to know about your website Setuu. I went through it. At first, I thought it's also like other websites which cheat people in the name of God. But later I couldn't stop myself and booked Charan Pooja for myself. I got the date of Charan Pooja on 13/05/14. I felt very relieved the moment I booked Charan Pooja. I thought now I will get the blessings of Lord Hanuman and everything good will happen to me. I was excited too. I got the mail that Charan Pooja of Shri Hanumanji was performed for me on 13/05/14 and it was completed without any Vighnam. I didn't get any rare message from Hanumanji or the Mathangs or Setuu.\n\nI was happy that Charan Pooja was completed without any Vighnam. At that time, I was in the final year of my Post Graduation. Days passed and nothing miraculously happened. Neither I had expected. But somewhere in my heart I had a feeling that now everything good would happen with me. I was feeling relieved and confident. I successfully completed my PG with Lord Hanuman's grace.\n\nBut I was not able to get a job or admission to Phd. I was very much disturbed and many a times got frustrated too. Days passed like this only. Everytime I prayed to Lord Hanuman for my job and Phd. Finally, that day came when my prayer was accepted and I got a job in a software company. I was happy that Lord Hanuman accepted my prayer and I thanked him from the core of my heart.\n\nBut soon after joining the job, I started facing problem in my training. I prayed to Lord Hanuman that anyhow I just complete my training. But I couldn't complete my training and I lost my job.\n\nI never get anything easily. I don't have peace in my life. After completing my schooling, I have to wait for a year to get admission in engineering and that too somehow. After completing my engineering with God's grace, I couldn't get any job. Even after trying hard, I didn't get any job. Then I joined a coaching institute and started preparing for government jobs. Even there I failed. I couldn't get any government job. But with God's grace I cracked gate(a competitive exam) and got admission in PG. Again aftet PG, I had to wait for around six months to get my first job. But that too didn't last long. I had my job only for three months.\n\nI don't know why all this is happening to me. Many people(astrologers) say that it's because of some dosh in my horoscope(kundali) while others say that it's because of our house problem or vaastu problem. I don't know what is the real reason which is stopping me from getting success and peace.\n\nRight now I am very disturbed and not able to concentrate on one thing. So many thoughts come to mind. Sometimes I think to go for Phd while sometimes for IT jobs while sometimes for government jobs. I am getting confused. I don't know which way I should go. I often get frustrated and sometimes depressed too.\n\nAlso, I have some health issues.\n\nWill I ever be able to get peace? When will I get another job rather permanent job? Will I ever be fully fit without any health issues? When will I settle in life? I need to get answer of these questions.\n\nRegarding the job that I lost, I got to know later through Setuu that it was my fault. I complicated my prayers to get fast result. I involved my parents and society in my prayer. That was my fault. But now it's only you and me Hanumanji. Please accept my prayer now again Hanumanji.\n\nI request the Mathangs to pray to Lord Hanuman in Sakshat Hanuman Pooja for my peace, good permanent job and health on my behalf.\n\nI have full faith in Lord Hanuman. I strongly believe that Lord Hanuman will give me a very good and permanent job very soon. Also, all my health problems will vanish and I will get peace of mind. Soon I will settle in life. Hanumanji, please forgive me if I have done anything wrong knowingly or unknowingly either in this birth or previous births. Please purify my soul and mind and give me positive energy so that there is no place for negativity in my soul and mind. Please keep your blessings on me forever.\n\nJai Bajrangbali\nJai Shree Ram\n\nMay God bless everyone.\n\nThank you Mathangs\nThank you Setuu\nRegards",
  answer: "Divine Soul,\nTake care of these 4 things-\n(1) Make sure you have a deep desire to reach goals.\n(2) Make sufficient efforts required to fulfill that desire otherwise your soul will just go to Swapan Lok and fulfill those deep desires. It will never become reality here in this world.\n(3) In order to get help of Lord Hanuman in removing obstacles, never allow demons of \"fear\" and \"worry\" etc make room in your heart and mind. If these demons remain there, you will not get help of Lord Hanuman. Because that would indicate that you prefer demons over Lord Hanuman.\n(4) Keep your prayer simple. Just ask, \"O Lord, fulfill my wishes.\" Do not bring your family, society and world into your wish. Otherwise their Karma will also affect you. Just keep it between you and Lord. Nobody else. Everyone related to you will automatically get fruits when your wish gets fulfilled."
},{
  id: 649,
  header: "Jai Bala Ji Maharah",
  question: "Hey Prabhu tumhari hi kripa hai jao hum abhi tak is sansar me jivit hai or jivan yapan ka anand le rahe hai.\nmera to yahi manana hai ki sab par parbhu tumhari kripa bani rahi.\nJai Siya Ram Jai Hanuman\nJai Bala ji maharaj\nJai bajrang bali maharaj"
},{
  id: 650,
  header: "jai banrang bli",
  question: "me hanuman ji ka bahut bda bhakt hu .................\nme abhi compition ki prepartion kar rhahu .......\nmere man me hmesha unka khyal rhta he me koi bhi kam karta hu chahe vo kisi bhi field me kyo na ho mere man me hmesha bjrang bli rhte he ..l\nlekin.....week me ek din mera esa hota he ki me kuch bhi acha nhi soch pata depresion me a jata hu .me try karta hu ki acha sochu lekin nhi soch pata is wajh se mera ek din bahut bigad jata me...aur me apne laksh ki aur badne me ek din peche rha jata hu .....\nmera question he ki me apne ap ko santulit kese rkhu?\n aur jada consntraret kar saku aur apne lakesh ko prapt kar saku",
  answer: "निम्न 5 बातों का ख्याल रखें -\n(1) आप में अपने लक्ष्य को पूरा करने की तीव्र इच्छा होनी चाहिए |\n(2) उन इच्छाओं को पूरा करने के लिए आवश्यक प्रयास करें अन्यथा आपकी आत्मा उन लक्ष्यों को इस संसार में पूरा करने की बजाय स्वपन लोक में पूरे कर लेगी |\n(3) अपने दिल दिमाग में “भय” “चिंता” आदि नाम के दानवों को जगह न बनाने दे अन्यथा हनुमान जी को लगेगा कि आप उनकी बजाय दानवों को अपने दिल दिमाग में रखना पसंद करते हैं | बाधाएं दूर करने के लिए हनुमान जी की सहायता प्राप्त करने के लिय यह अति आवश्यक है |\n(4) अगर आपका मन अपने कार्य की बजाय अन्य गतिविधियों में लगता है तो समझ लीजिये कि असुर आपके आस पास मंडराते हैं | असुर आपकी देह और मन का प्रयोग कर रहे हैं | असुरों का स्वभाव है कि उन्हें एक बार असफलता मिल जाए (देह - मन का प्रयोग करने में ) तो वे दूर चले जाते हैं | जब आपको लगे कि आप कुछ गलत कर रहे हैं तो तुरंत विरोध करें , असुर आपसे दूर चले जायेंगे |\n(5) अपनी प्रार्थना को सरल रखें | अपनी प्रार्थना अपने और प्रभु के बीच रहने दें उसमे आप परिवार , समाज तथा अन्य लोगो को शामिल न करें | सही प्रार्थना - “हे प्रभु मेरी आवश्यकताए पूरी करें ताकि मै मोक्ष के मार्ग पर चल सकूँ |” गलत प्रार्थना - “मेरे जीवन में फलां व्यक्ति को ले आयें , मेरे परिवार को ऐसा करें , मेरे समाज को ऐसा करें|” आप जितने लोगो को अपनी प्रार्थना में शामिल करेंगे उतने लोगो के कर्म रोड़ा बनते जायेंगे |"
},{
  id: 651,
  header: "Jai Bhajarangabali!!!",
  question: "I firstly want to express my heartfelt gratitude for all the blessings I have received in my life so far and for all the blessing I would receive in the future!!! I'm very grateful for Setuu Masters for connecting many souls to Shri Anjaneya through the divine Mathangs!!\n\nI can feel Shri Hanuman in my every breath, every step and every heartbeat.. I know that HE is guiding me through my intuitions..\n\nHanuma deva, you know my past and my present and my future.. You know I have suffered since my marriage, I've tried my best to do good deeds, be calm, forgiving and loving all the time.. I strongly feel the influence of Assurahs in my marital life, I know my husband has a good soul but he's unable to control the bad influence of assurahs because of which both our families are in great turmoil..\ncould you please give me and my loved ones harmony by removing obstacles from my married life?\n\nAre assurahs affecting all of us or it's our bad karma collectively manifesting simultaneously?\n\nAnjaneya I humbly pray to you to keep assurahs away from me and my loved ones.. I want my baby to be with his father and also my parents without difficulties..\n\nDeva kindly remove my karmas from my past lives and bless me with knowledge..\nMay I chant mrityunjaya mantra to attain moksha and break the cycle of life and death?\n\nTvamasmin karya niryoge pramanam\nHarisattama\nHanuman yatna maastaya dukha kshaya karo Bhava\n\nMy humble pranams to you deva\n\nThank you Setuu and Mathangs",
  answer: "Divine Soul,\n\nEverything around is you is a manifestation of your inner being. If you shift your point of existence, everything around you shall change. If you instead try to change things around you, you will get trapped more and more into this quicksand. Love your inner being and everyone around you will love you. Search your inner being and everyone you want in your life will automatically get attracted towards you.\n\nAnother advice for you is this : Oftentimes we figure out that a particular person is causing us troubles and we start hating that person. Hate is a form of attachment. More you hate that person, more troubles you will get. If a person seems to be cause of your troubles, immediately cut connections with that person. Neither hate nor love that person. That person can be an imaginary person who you think may be influencing decisions of your loved ones. Do not hate/love that imaginary person also. That is the only way to save ourselves from the Asurrahs who are mounted on other people's beings.\n\nIf an Asurrah is mounting on you, for example you get angry or exhibit negativity, then there is another way to get rid of that Asurrah. You must be able to differentiate between yourself and the Asurrah. When you do something negative, you should immediately realize that this is not you, this must be an Asurrah who got hold of your mind. If you start recognizing the Asurrah's actions done through you, the Asurrah will go away. Never own up the actions done by Asurrah through your body-mind, otherwise you will have to face the consequences of their actions.\n\nMantra alone won't help for Moksha. First of all you seek to know who you are. Seek and then you will meet a Guru - visible or invisible. Then you will proceed on path of Moksha.\n\nBlessings"
},{
  id: 652,
  header: "Jai chintaharan balaji mahraj",
  question: "बहुत समय से आपको ढुंढ रहा हु पृभु आखिर मेरी गलती क्या है।ब्राहम्ण कुल मे जन्म दिया आपने बस इतनी प्राथना इतना सार्मथ्य दे दो की अपने माता पिता को अच्छा आगे जिवन दे सकु।बस एक अच्छी नोकरी लगवा दो बहुत परेशान हूं प्रभु"
},{
  id: 653,
  header: "Jai Ganesh, Jai Sri Rama, Jai Hanuman",
  question: "Jai Sri Ram Jai Hanuman !!!\n\nRespected higher souls,\n\nLord Vishnu is my friend, guide His leelas attract me like no other, though I still have high respect towards Lord Ganesh, LordShiva&Lalitambika, Lord Hanuman, Lord Murugan..\n\n1. I wish my husband gets good longterm job, So we can spend our energy on devotional activites and provide better future for our son.\n2. I have stopped traditional puja like litting diya, arpanam(prasadam) at home, waiting to get better place so I can sit and do puja whole heartedly. but im feeling guilty for not making more efforts. I still pray in my heart though ask for blessing of Lord Vishnu and Lord Hanuman. Am I doing it right?\n3.Prayer: O Lord Hanuman, let me be happy and content. Let all my needs be met. Please help me forgive and forget my bad memories.\n\nPlease pass my humble queries and prayer to Lord Hanuman.\n\nI'm helpless I keep thinking about people who used to like me I am not sure whether they really like me or not because of them I had problems however when they stop liking me just because they think I'm in happy place is it my fault or there's? I hope Lord Hanuman helps me get over bad memories\n\nJai SRIRAMARAMARAMA !!!!",
  answer: "Divine Soul\n\n(1) You should not feel any need of approval of others on your relationship with your God. If it feels right to your soul, it is right. The traditions set by Rishis in general may be overruled by the traditions of the family set by the family Guru/ancestors. And traditions of family can be overruled by the devotee if their soul is connected with the Lord.\n\n(2) It is nobody's fault. Human relationships of Kaliyuga work this way only. If you are in a bad position, your relatives/friends will desert you out of contempt. If you are in good position, they will desert you out of jealousy/misunderstanding. Focus on the only relationship which is true: Your soul's relationship with the supreme.\n\nBlessings"
},{
  id: 654,
  header: "Jai hanuma ji",
  question: "It is really great feeling ...first Thanks to setuu organization. When I am reading these one by one getting more intrest about god hanuman ji"
},{
  id: 655,
  header: "Jai hanuma ji",
  question: "I am so happy by study n hearing hanuman ji stories thanq setuu ji baba matang ji ki"
},{
  id: 656,
  header: "Jai Hanumaan",
  question: "Jai Veer Hanumaan...! Hanumaan ji is shrushti ke har ek jeev ko aap apna aashirwad de aur unke mann me aanewale burey vichaaron ko door rakhen . Is shrushti to aap sukhi aur samruddh banaye and sabhi buraaiyon aur musibaton se bachaye . Hum aur sachche mann se aapki prarthana kare aisi bhakti humein pradaan karein . Is sansaar ko surakshit rakhein .\nJai Shree Raam...! Jai Hanumaan...!"
},{
  id: 657,
  header: "Jai hanumaan jai shreeram",
  question: "Jai veeranjaneya...hanumaan please listen my prayer...this is very important and this is the last chance i have...so if u bless me in this regard (u knw wat is in my mind) i will be very happy... and pls put full stop for past 3 years sufferings by giving blessings to my desire plsss hanumaan...and let me share my experience in future days...jai hanuman"
},{
  id: 658,
  header: "jai hanumaan ji",
  question: "main yeh janna chahti hu ki kya hanumaan ji ladies ko be darshan dete hai. main tuesday k fast rakhti hu but mujhe sab log yahi kehte hai k hanumaan ji k fast only male rakhte hai not female. bachpan seh he yahi sunna hai k hanumaan ji ki pooja female nhi karti or nah he unko murti ko touch be nhi karti. kya ladies tuesday ka fast rakh sakti hai or kya ladies hanumaan ji ki pooja kar sakti hai? kya hanumaan ji ladies ko darshan dete hai?\nfamily main reh kar hum kaise moh or maya ka tyag kare k hum ko bhagwan k darshan ho sake?",
  answer: "देखिये हनुमान जी की पूजा शरीर से नहीं होती , मन से होती है | जिस मन में भक्ति हो वह मन भक्त का मन होता है किसी औरत या पुरुष का नहीं | अगर पूजा कक्ष में हम शरीर से ऊपर उठ जाते हैं इसलिए यह केवल भ्रम है कि स्त्रियों को हनुमान जी की पूजा नहीं करनी चाहिए | यह भ्रम फ़ैलाने वाले मुर्ख हैं |\n\nशुरुआत तो यहाँ पर अध्याय पढ़कर कीजिये आपको मोह से दूर होने में सहायता मिलेगी | मोह और प्रेम में अंतर होता है | उस अंतर को समझने में सहायता मिलेगी | पहला अध्याय तो मोह पर ही तो आधारित है | उसे फिर से पढ़िए |"
},{
  id: 659,
  header: "jai hanuman",
  question: "jai hanuman, mere naam ganesh hai. mai jai hanuman ko manta,puja karta hu mere man me hanuman aapulki hai. muze padhai me maan nahi lagta hai aisa kuch koro ki muze bohot padhai karte achai job mil sake to kya hanuman ki mere help kar sakege kya.. or kuch aisa chamatkar ho ki hanuman ji mere sapne me akar muze darsan ke or margadarsan kare... .......jai shri ram jai hauman... thanks u."
},{
  id: 660,
  header: "JAI HANUMAN",
  question: "I experienced the presence of lord hanuman in each moment when i read this chapter. i am speechless. Jai Hanuman ||"
},{
  id: 661,
  header: "Jai Hanuman.",
  question: "I always carry his small photo in my DL book. I know he is protecting me from the evils and bad happenings to me and my family. Is it not? my lord."
},{
  id: 662,
  header: "Jai hanuman",
  question: "Today on 20th Oct 2014,\n\nI am bound to pay my loan emi almost needing Rs 100,000 /- including all expenses , But even though i received Rs70000/- , all the money evaporated like the water vapor.\n\nI am confused and worried, on reading chapter 2 , i became silent , waiting for the God's will to flash in me and act\n\nJAI Hanuman , May ur holy name purify me and dissolve the mind and make realize the self"
},{
  id: 663,
  header: "Jai Hanuman",
  question: "Namaste....(Hello)\n\nI thank the Setuu community to make me aware about LORD HANUMAN and other related knowledge.\n\nI have a question, what tasks we have to do to become so pure that I could see LORD HANUMAN with physical eyes as MATHANGS can do.\n\nHave to do some special kinds of Prayers or Yoga or make some particular habits to be pure souls.\n\nkindly Reply.\n\nJai Shree Ram\nJai Hanuman",
  answer: "Divine Soul,\n\nJust start observing yourself. In a given day, you observe many people and things. Make habit of observing yourself while you are indulged in worldly activities. One simple way to observe is to address yourself as third person.\n\nFor example, suppose your name is XYZ. When you are doing something, think in your mind, \"XYZ is doing this. XYZ is doing that.\"\n\nThen think if \"XYZ\" is doing this thing and I can see \"XYZ\" doing this thing, then who am I? Am I XYZ or someone who is observing XYZ?\n\nBlessings"
},{
  id: 664,
  header: "JAI HANUMAN",
  question: "I BELIEVE IN THIS STORY ... I PRAYER JAI HANUMAN BLESS ME ... PLEASE IMPROVE MY FUTURE .... GIVE ME BLESS FOR ESTABLISHED MY NEW BUSINESS & HAND MY ALL BUSINESS THOUGH YOUR BLESS. PLEASE ACCEPT MY HUMBLE PRAYER . ALWAYS BLESS ME ... JAI HANUMAN ."
},{
  id: 665,
  header: "Jai Hanuman",
  question: "Prathamavagi e Gautham maduva Shradda bhakthi ya Namaskaragalu Hanuma.\nYeradu dinagala hinde vishnu / narayana nannannu thanna drushti inda nodida haage kanasu kandidde, eega hanumana bagge vishaya odudthiddene. Hey hanuma nanna shradda bhaktiya namanagalannu sweekarisi haagu srhimannarayana pada kamalagaligu saha arpisi. nanna mathu nanna kutumbada sadasyarige sukha,shanthi, nemmadi haagu mokshavannu prasadisu tande. Hindu sanatana dharamavannu nashavagadanthe kapadi olleya margadarshanavannu kodu thande. Shri hariya kruapa kataksha nanna hagu nanna kutumbadavara mele sada iruvanthe madi nammannu kapadi , mokshadedege nadesi pavanarannagi madi. Sadaa nammomdigiri\n\nBhakti inda innomme : Jai Shree Ram, Om Namo Narayanaya"
},{
  id: 666,
  header: "Jai Hanuman",
  question: "Jai Hanuman. You are a great devotee of Lord Rama .We respect and admire you and your devotion towards Lord Rama and your experiences/adventures . People in today's generation are more materialistic and egoistic with limited or no values . Please give me strength and confidence to take care of my family and my daughter . Please give me energy to serve my parents. Please put me in right direction with right thoughts ."
},{
  id: 667,
  header: "Jai Hanuman",
  question: "Main Hanuman ji ka bada bhakta hu ye main kehta hoon lekin mujhe maloom nahi ki main ye kehne ke bhi layak ho ya nahi par ab main apni sansarik jeevan main bahut kashta sahan kar raha hu meri hanuman ji se prarthana hai ki wo mere jeevan ko saral marg de aur mera jeevan sukhi aur sampanna banaye...................JAI SHREE RAM"
},{
  id: 668,
  header: "Jai Hanuman",
  question: "I'm feeling wonderful and my soul always somewhat flying with Lord Hanuman while doing anything during working, playing, eating or anytime. I'm actually married and have some issues in my personal life. even though I'm not down due to the God power since I trust the God that he always help me anytime. will share the more details.\n\nPlease..please ask mathangs to remove my health issues due to karma in this life with help of Lord Hanuman. some times I feel to die due to bad life but as I trust the God..I'm not taking that tuff decision.",
  answer: "-- conveyed to the Lord ---"
},{
  id: 669,
  header: "Jai Hanuman",
  question: "Jai Sri Ram.\n\nI am fortunate enough to have the opportunity of going through\n\nthe Wisdom Blessed to us By Lord Hanuman.\n\nIt is a strange coincidence I got connected to Set Org\n\nwho are passing this secret Valuable knowledge to us.\n\nAfter reading the Chapters I had divine experiences\n\nand which are clearly told to us.Experiences are refined and more\n\nPositive Energies are Felt. I am reading with Total devotion and surrender\n\nto My God Hanuman Ji. Jai Sri Ram."
},{
  id: 670,
  header: "Jai Hanuman",
  question: "My dear lord,\nI truly believe that you are here around me to take care of us, I am no one to ask anything from you. We have very tiny hands to take but you have very large hands to give.\nI only have one request to give me strength, peace please my mind, a feeling of satisfaction,avoid feeling of hatred and revenge and ability to keep my loved once happy. And the devil who has entered in my family who is killing them one by one pl take him away from my family.\nPlease give me an apportunity to meet you , to see you in this life.",
  answer: "---- Prayer Conveyed to the Lord ---"
},{
  id: 671,
  header: "jai hanuman",
  question: "mai hanuman ji ka Bhakt hu muze mere jivan me mere Bhagwan hanuman ji se milana hai yahi mere jivan ka ek lakshya hai\njai hanuman jai hanuman jai hanuman jai hanuman jai hanuman"
},{
  id: 672,
  header: "Jai hanuman",
  question: "After reading about mathangs i feel how fortunate mathangs are. I feel I want to be with them. Am I that fortunate? After reading the chapters for few days I am feeling very much I wanted to be with my beloved hanuman.some times I wonder where I am in this world. The chapters show a great impact in me.Please mathangs masters my wish will be fullfilled or not? I thank hanuman to show me the website about him Jai hanuman and pranam"
},{
  id: 673,
  header: "Jai Hanuman",
  question: "While reading Chapter No 10\nI experienced some unknown\nPower Surrounded me and had a feeling of\nSakthi Path.Rama Priyam Namastubhayam.\nHanuman Raksha Sarvada."
},{
  id: 674,
  header: "jai hanuman",
  question: "i often read sunderkand when i am disturbed with anything sometimes i am just reading it without devotion but as i complete it i am more controlled in emotions"
},{
  id: 675,
  header: "Jai Hanuman",
  question: "Jai bajrangbali prabhu bless my younger brother ,mother and my full family.kripa Karo prabhu"
},{
  id: 676,
  header: "jai hanuman",
  question: "jai shri bajrangbali ,you are the most powerful in this kaliyug who can save their bhakts from problems. hey prabhu bless us, bless my brother who is facing some problems in his life regarding job .bless us prabhu also tell us the path through my brohter and i can achieve peace, happiness and materialistic wishes."
},{
  id: 677,
  header: "JAI HANUMAN",
  question: "RAM RAM JI\nMAINE JAB SE HANUMAN SETU PARNA SHRU KIYA SANKAT MOCHAN JI NE MERE SANKAT HARNE SHRU KER DIYE.MAINE JO SOCHA B NAI THA VO USSE B JADA HUA MERE SATH.MAI EK PRIVATE JOB KARTI HU .BARI MISHKIL SE GUZARA HOTA THA . MERE HUSBAND B PRIVATE JOB HI KARTE HAI. MAI HMESHA YAHI SOCHTI THI KI SUNA HAI KI MEHNAT KA PHAL MILTA HAI .LAKIN DIN BHAR MEHNAT KER KE B MUSHKIL SE GUZARA HOTA THA. EK DIN MAI BAHUT HI PERESHAN THI KI MERI EK PURANI SAHELI JO KI CANADA MAI REHTI HAI, USKA CALL AAYA KI MAI USKE SATH WORK KARU. MAINE USKE SATH USKE KAM KARNA SHRU KIYA MERI SALARY TO DUGNI HO GAI. AB MERE GHAR MAI B KHUSHIYO KA AANA SHRU HO GAYA. JAI SANKET MOCHAN APP SAB PER AISE HI KRIPA KARE.\n\nSHRI HANUMAN JI\nANJANI SUNU JI\nVAZU PUTRA JI\nMAHABALI JI\nRAMESHTH JI\nPHAGUNSAKH JI\nPINGLAKSH JI\nAMITVIKRAM JI\nUDDHIKRAMAN JI\nSITA SHOKVINASHAN JI\nLAKSHMAN PRANDATA JI\nDASGRIV DAPERHA JI"
},{
  id: 678,
  header: "JAI HANUMAN",
  question: "My life is going in a direction on which I have no control...Every day I have to sacrifice my self respect only for money.....which is killing me day by day.please lord hanuman help me as soon as possible...oh dear hanuman please help me."
},{
  id: 679,
  header: "jai hanuman",
  question: "shri ram jai ram jai jai ram jai hanuman\nhey hanuman ji mai yeh jaana chahti hu ki kya bhagwan mahavishnu ke avtar kalki kya janam le chukay hai? woh kaisay hai? mai yeh jaana chahti hu hey hanuman ji kripa kar ke mujhe bataye....\nhare ram hare ram ram ram hare hare hare krishna hare krishna krishna krishna hare hare...",
  answer: "नहीं , अभी जन्म नहीं हुआ है |"
},{
  id: 680,
  header: "Jai hanuman",
  question: "Jai Shree Ram\nJai Hanuman ji\nI am 22 years old and i am very lazy. From childhood i am living with my mother's relatives and feels like they have lead my life. I have not take any decisions in my life. From childhood i am living absent minded. My parents(relatives of mother) didn't let me mix up with same age peoples in childhood and by sitting in house most of time i was done day dreaming. I don't have good career, i dont have friends, i dont have harmony and love relatives and dont know much peoples outside relatives. Being in house most of day i started to read religious, spiritual websites and feels influenced by many things like non-attachment, bhakti, and even used to go at sahaj yoga center(with one relative who is sahaj yogi).\nI am very confused right now about how should i live life, and what things am able to do. My material condition is very bad( as i am not able to take my decisions, don't have my opinions and do as some peoples tell me to do, don't have good career, and belong to poor family) In spirituality i have some practical knowledge but not able to have full faith or be with certain type of sadhana.\nPlease guide me.\nJay Hanuman ji",
  answer: "Divine Soul,\n\nThat can prove to be a boon if you set your life purpose as Moksha or getting supreme knowledge. It is a blessing that you are different from the crowd. Make use of it and seek the supreme truth.\n\nBlessings"
},{
  id: 681,
  header: "Jai Hanuman...",
  question: "Dear knowledge giver i want to know how can i figure out on what stage my soul is to be free from any karma or desire as i am also a normal soul and living in this life of illusion. And how much my soul's bad karma is due to at least reach the karma of my soul is required to gain this knowledge directly from great Pra shakti LORD HANUMAN himself. And is there any possibility of knowing my previous birth and the purpose of this life.",
  answer: "Divine Soul,\n\nIf it were necessary for a human to know previous birth, we would all take birth with memory of previous births. Story of previous birth is told by sages only if it is required for world welfare. Your purpose is to get Moksha.\n\nBlessings"
},{
  id: 682,
  header: "Jai Hanuman",
  question: "Thank you so much Lord Hanuman ...i did not know about this Setu Hanuman ..i should thank my brother in law who told me about this website. I have started reading the chapters just now and i feel i am blessed .. i can share this information with my husband and children.\n\nOh lord please always keep the bhakti of God alive in me and my family always.\n\nJai Shriram ..Jai Hanuman"
},{
  id: 683,
  header: "Jai Hanuman",
  question: "Namaste Sir/Madam,\nFor a long time now, I have delayed and procrastinated writing this mail. I want to visit your ashram in Pittrubhu hills, meet Lord Hanuman and get set on my journey to attain Moksha. But, I am not yet ready to leave behind my identity and all that I have considered to be mine so far. I am at the cross roads and don't know which way to take. Help me with making my decision.\n\nRegards,",
  answer: "Divine Soul,\n\nThe journey to Moksha can be started from anywhere. All you have to do is start seeking the absolute truth. All the paths will open up by itself.\n\nIf you want to do Sadhana at Setuu Hanuman Bodhi, please answer following questions :\n\n(1) Describe your devotion towards Lord Hanuman. How it started and how it evolved over time.\n\n(2) Have you ever met Lord Hanuman in MaanavLoka or SwapanLoka? Describe that experience. What was the conversation between you and Lord Hanuman.\n\n(3) Who are you? If you are a soul, how far is Lord Hanuman from you. How do you think you can cover the distance between you and Lord Hanuman.\n\n(4) What did you learn/unlearn from chapters of Lord Hanuman's Leelas posted so far. Write your views about each chapter.\n\nBlessings"
},{
  id: 684,
  header: "Jai Hanuman",
  question: "Firstly I cant believe that my questions may get answer directly from bajranga bali I feel my self bit strange from before it was a sudden thought to read something about lord hanuman my only request is to do something for lokakalyan because today every where In the world terrorism is increasing innocents are being killed so do whatever to make this world peace\nJai Hanuman\njai hind\nBharat mata ki jai."
},{
  id: 685,
  header: "jai hanuman",
  question: "muze hanumanji ko phal chadane ho to keise chadaye? mein kitane dino se try kar rahi hu. par nahi raha hein. mein jab bhi ye pehala adhyay padhti hu to muze aisa lagta hanumanji mere samne ho. aisa lagata hein is adhyay mein jo bhi likaha hein woh mere ankhon ke samne dikh raha hein. meri madad jarur kijiye.",
  answer: "आत्म स्वरूप,\nराम।\nअगर आप ऑनलाइन फल अर्पण नहीं कर पा रहे हैं तो आप किसी भी नजदीकी श्री हनुमान मंदिर में जाकर फल प्रसाद अर्पित कर सकते हैं। अथवा आप किसी वानर , पक्षी , गाय आदि को भी फलादि भक्षण करवा सकते हैं।\nकल्याण हो।"
},{
  id: 686,
  header: "Jai hanuman",
  question: "Hanuman ji ki setu se jurne se pahle Mujhe sapne me charan poja aaya . Fir main apne bhaiya se batayi to bole tum setu se jur jao tumko pata chal jayega ye charan poja kya h. Fir main setu se juri or aaj tak hanuman ji ke chapter ka wait karti hun . Hanuman je ko or matango ko man hi man main pranam karti rahti hun . Mera bhi margadarshan kare .... Main bhi is sansar me jevan maran ke chakra me fashi hun ... Mujhe jo Anjali ke sarir me aarudh hai .. moksha de kar par kar do prabhu jai Shree Ram jai Shree Ram jai Shree Ram"
},{
  id: 687,
  header: "JAI HANUMAN",
  question: "Bajrang Bali is always with me for ever., He only protecting me and my family from the eternal evil forces. I pray lord Bajrang bali to save our country fellows and country from the rest of the workd.\n\nMay Hanuman bless all of ur\n\nJAI BAJRANG BALI"
},{
  id: 688,
  header: "jai hanuman",
  question: "apaka ye dusara adhyay padhakar mauze bahot achha laga. mein jab bhi ye adhyay padhati hu maze aisa lagata hei ki sab mare aankonke samne ho raha hein. us samay mein hanuman ji ko apane samne baat karate hui paati hu. mera man shaant ho jata hein. jaise mein usnse ekroop ho rahi hu. aap ko pata hein mein her shanivaar ko hanuman mandir jaakar unhe gud aur shengdana chadhati hu aur agarbatti lagati hu. to ek din mein mandir mein pooja kar rahi thi aur aankh band kar karake unka dhyan kar rahi thi to muze unke aashirvad dete hui darshan hui. us din se mere claish thode bahut kam ho gaye hein. mein kaafi achha mehsus kar rahi hu."
},{
  id: 689,
  header: "jai hanuman",
  question: "i only want to offer my prayers to hanumanji through mathangs that whenever i remember hanumanji, please he give me path to follow with sadh budhi. also i should be able to make correct decision for my family."
},{
  id: 690,
  header: "Jai Hanuman Baba",
  question: "May the blessings of Shri Hanumanji always remain as umbrela on my family and keeps the mind and soule of my family clean and away from bad thoughts."
},{
  id: 691,
  header: "Jai Hanuman Gyan Gun Sagar, Jai Kapish Tihun Lok Ujagar",
  question: "My immortal Lord, My God, My elder brother Mahavir Hanuman...You are the ocean of strength and kindness. Please never forget me. Keep showering your blessings, and grant me the things that I keep asking you so often. Jai Shri Ram!"
},{
  id: 692,
  header: "jai hanuman gyan guna sagar jai kapeesa",
  question: "it was few years back when i was crying for days and days after the demise of my beloved father who is a blessed soul of the lord, one day in the after noon i was alone in my bed room thinking of the lord suddenly i could see the lord hanuman who was near to my bed with gada blessing me. i still remember that day i just could not believe that it is him and visiting my home. may bless this world with rama bhakti to all people in this part of the world."
},{
  id: 693,
  header: "JAI HANUMAN JAI SREE RAMA",
  question: "To show my gratitude i am wordless, Ignorant and and an ordinary human.\n\nThanks for providing an opportunity to read these chapters and making me feel lord's presence in this motherly earth. I am very lucky being on earth.\n\nMe too wants to take a chance to make lord's Darshna if lard allow's me to do so.\n\nJAI HANUMAN"
},{
  id: 694,
  header: "JAI HANUMAN JAI SRIRAM",
  question: "After Lord Hanuman entered in our lives our troubles and worries disappeared,he gave the energy and spirit to our lives.He saved us from many problems.He showed us the spiritual path and showered his love and courtesy on us in every situation. Hanuman is everything for us.We dedicate our lives to Hanuman's feet.\n\nJAI HANUMAN JAI SRIRAM"
},{
  id: 695,
  header: "Jai Hanuman Ji",
  question: "Jai Hanuman,\n\nI want to thank you from the bottom of my heart for all the good things that you have given in my life. I want to remain blessed with your blessings throughout my life and all the births that I take after this. Please guide me with your light of divine blessing."
},{
  id: 696,
  header: "jai hanuman ji",
  question: "jai hanuman ji...... it is very grateful, joyful and increase the faith in hanuman ji...... it`s come close to shri hanuman ji.....feel very bless to read all of it..... thanks to all to bring so lovely chapter of hanuman ji for us...........thanks a lot to all this website team.........jai hanuman ji"
},{
  id: 697,
  header: "Jai Hanuman ji",
  question: "Thank you so much Guru ji..\n\ni got a job after four years.. i request you to be with me.. so that i do my job under your guidance... protect me in this alien place."
},{
  id: 698,
  header: "jai hanuman ji ki",
  question: "I have read all 14 chapters and waiting for the day when next will be published and I am really thankful to you for sharing...\n\nI have full faith in Hanuman ji and hanuman ji has helped me in various ways..Once long time back. Some one took Rs 20000 from my father and was not returning the money back.... for more than 1 year that person didn't returned the money.. We thought that we will never get the money back.. so we left the hope..\nthen a time came when we faced big financial crisis and I could see the tension in my fathers face,, As I was only studying in the 2nd year of Engineering ... & could not able to do any help .. I was also not feeling good.... Then one night as usually I do before sleeping ,,, I talk to Hanumanji mentally .... One thought came to my mind if that person returns the money... it will help us a lot.. So while thinking about hanuman ji ... I heard a voice mentally .. It was not actually voice but something like Hanuman Ji asked me .. He gave me 2 options\n\nDo you want that money back from that person or Do you want to win a lottery ?\nI said , I just want that the person should return the money to my father please.. and then I slept...\n\nnext morning , infact very early , when I was sleeping only, I heard someone ring the door bell, and I heard while sleeping that some one came.. I was feeling sleepy so I kept sleeping late..\n\nBut when I wake up and asked who came so early morning ,, I was shocked to know that the same person came and returned full money ..... I can't tell how I felt ,,, i was so happy to know that yesterday night it was hanuman ji who actually asked me and listened my prayer...\n\nIts been 10 years now and I still talk to Hanumanji..... but now I don't know why I am not getting that kind of feeling that I normally had while talking to Hanuman ji..\n\nI think I did something wrong which suddenly took him far away from me ... that makes me very sad from inside..\nPlease help me"
},{
  id: 699,
  header: "JAI HANUMAN JI KI",
  question: "NAMASTE SIR\n\nplease after reading chapter on BIRTH OF OUR SHRI RAM....i feel very light and at the same time wish to realise my soul.\n\nPlease if i offer anything to HANUMAN JI with my heart today in my local area in MANGALORE where i stay instead of online will HANUMAN JI bleesings please be there on my soul.\n\nTHANK YOU SIR\nJAI JAI SHRI RAM\nJAI JAI JAI SHRI RAM\n\nJAI JAI JAI HANUMAN JI KI",
  answer: "Divine Soul,\n\nYes, you can buy fruits anywhere and do arpanam. Prefer a temple where Vaanaras are present and the priest is skilled enough to do the Arpanam rightly. Otherwise do Arpanam at home and feed the fruits to Vaanaras, kids or Daridra Narayanas.\n\nBlessings"
},{
  id: 700,
  header: "JaI Hanuman Veer bajrangbali jai Shree Ram",
  question: "Ye adhyay padhkar dil ko bahut sukun mila , aur ye ahsaas hua ki prabhu hamare aas paas hi hai , aur bahut jaldi mere bhi dukho ka nivaran karenge , aur agar mujhse koi galti hui hai ,ya me kuch galat kar rahi hu to mujhe sahi raasta dikhyenge. bus itni hi prarthna hai ki hey prabhu hum par apna aashirwaad sadev banaye rakhna."
},{
  id: 701,
  header: "Jai Hanumanji",
  question: "Jai Hamumanji, Jai Bajrangballi,\n\nApka Ashirdad Hamare Uppar Sadhai Bani Rahe.\n\nJai Hanumanji"
},{
  id: 702,
  header: "Jai Hanumanji",
  question: "Hari Om,Jai Hanumanji,i have experienced hanumanji throughout my life every moment lord is with me and my family and each and every person in this world,whatever is good for me and my family lord does it very smothly.\n\nwhatever happens good or bad we have to face,but lord does it such a way that i have never felt bad days going off so smoothly,my daughter went for picnic and there many monkeys were troubling all her friends and she got so frightened she just closed her eyes and prayed hanumanji u won't believe non of the monkeys came close to her infact all her friends were saying we will stand with u so that they won't come near to them,these r small incidents but i ca only say lord is with us and we wish lord be with us thru out our life."
},{
  id: 703,
  header: "jai hanumanji ki",
  question: "ॐ\nबुद्धिहीन तनु जानिके, सुमिरो पवन कुमार\nबल ,बुदधि विद्या देहु मोय हरहुँ कलेश विकार\""
}
  ];

  // Calculate total pages
  const totalPages = Math.ceil(qnaData.length / itemsPerPage);

  // Get Q&A slice for current page
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return qnaData.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Render pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];

    buttons.push(
      <button
        key="prev"
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );

    return buttons;
  };

  return (
    <div className="qna-section-container" style={{ padding: "3rem" }}>
      <h1 className="qna-title" style={{ textAlign: "center" }}>
        My Experiences
      </h1>
      <h3 style={{ textAlign: "center", lineHeight: "1.6", maxWidth: "900px", margin: "20px auto" }}>
        The Experience Query posted below was posted by a devotee on Setu Asia.
        You can also post your queries or experiences by logging in to your
        devotee page. Please note, we answer questions as per the thought
        process of the person asking the question. There can be different
        answers for one question depending on the mind of the person who has
        asked it.
      </h3>

      <div className="qna-list">
        {getCurrentPageData().length > 0 ? (
          getCurrentPageData().map(({ id, header, question, answer }) => (
            <article key={id} className="qna-item" style={{ marginBottom: "2rem" }}>
              <h2 style={{paddingTop:'2rem', paddingBottom:'1.5rem'}}>
                {header}
              </h2>

              <h3 className="qna-question" style={{ marginTop: "1rem" }}>
                <strong>Experience {id}:</strong> <br />
                <em>Devotee Speaks:</em> <br />
                <TextWithBreaks text={question} />
              </h3>

              {answer && answer.trim() !== "" && (
              <p className="qna-answer" style={{ marginTop: "1rem" }}>
                <strong>Answer:</strong> <br />
                <em>Setu Speaks:</em> <br />
                {answer.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            )}
            </article>
          ))
        ) : (
          <p>No Q&A found for this page.</p>
        )}
      </div>

      {totalPages > 1 && (
        <nav
          className="pagination-wrapper"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          {renderPaginationButtons()}
        </nav>
      )}
    </div>
  );
};

export default MyExperiences;
