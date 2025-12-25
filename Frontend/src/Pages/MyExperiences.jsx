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
  const itemsPerPage = 20;
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
"id": 333,
"header": "Effect of multiple mothers",
"question":
"From my childhood, I have seen mothers give priority to their children, then the children of their sisters and brothers. This sort of a situation is strange, but it is happening with my son, who has the love of his birth mother, and a friend of my wife, who treats him as her son, and he is fully accepted in their family.\n\n"+
"The feelings expressed and the explanation given by the Lord Hanuman, and the images created in the memories, take away one's breath.\n\n"+
"I pray to te LORD for guidance and grace to live safely in HIS blessings."
},
{
"id": 334,
"header": "Emotional kasto se mukti",
"question":
"Hey priya hanuman ji ,\n\n"+
"Aap ki kripa ki ati awashyakta hai mujhe. Hey anjaneya maine jiwan me bahut se emotional dhokhe khaye hai jinhone mujhe tod diya tha jis ke bare me aaj bhi sochta hun to bada pareshan ho jata hun . Hey prabhu main kisi ko bahut chahta tha par wah mujh se chin gayi kyunki hamare guruji aur mandir ke swami krishna prem ne use ashram me bula kar wahi hamesha raha liya aur wah jante bhi the ki i loved her then too they snatched my love . Kya pyar karna gunah hai . Aur fir maine ashram jana band kar diya kuch samay haan par bhagwan ki bhakti swayam karna kabhi nahi chodi .\n\n"+
"Hey prabhu maine un swami ji ke bare me galat baate bhi suni hain relating to sharirik sambandh banana kai yo ke sath. Un swamiji ne mujhe padaya bhi hai during my school days by taking tutions . So i call swami ji as sir . Aur unki bahut izzat bhi gayi hai is prakar ki baato ke karan par hamare guruji un swamji ko support karte hai fir bhi . Kai bhakt kat gaye ashram se fir bhi they support each other.\n\n"+
"Par hey prabhu kya pyar karna gunah hai jo mujhse mera pyar chin gaya . Hey pyare prabhu jab pichle anubhav me maine yaha aapko ko likha tha to meri financial problems ke bare me bhi likha tha jo aap se prarthana karne ke baad hi mujhe ek chamatkar anubhav hua ki mujhe singapore se job offer aaya jo ek khusi ki baat thi par prabhu woh abhi puri nahi hui hai kyunki us job ke liye medical aur visa hona baki hai .\n\n"+
"Hey prabhu mai financial problem me to kai saalo se hun kyunki abhi job chalu nahi hui hai aur fir yeh aaj jo aap ko batayi emotional problem ne life ko tod ke rakh diya . Kripa kar meri emotional life bhi heal kare pyare hanuman ji . Is june me mai 29 varsha ka ho jaunga par na to kuch income hai kyunki singapore ki job chalu hone me samay hai aur na hi shadi hui hai.\n\n"+
"Hey prabhu me bekar baitha hun ghar main. Kripaya kripa kare meri life par. Prabhu meri kai jagah izzat bhi nahi hai i think unemployed hone ke karan . Kripaya meri laaj bhi rakh de mera maan sammaan banakar . Kyunki kewal aap hi kripa kar sakte hain mujh par .\n\n"+
"Ab mai jisse prem karta tha woh to chin chuki hai par aap ab meri emotional life ko heal kare meri life me koi acha life partner la kar agar yeh mere liye acha ho to aur mai prabhu ram ji aur aapki ki bhakti mein leen hona chahta hun hey prabhu aur woh bhi bade anand se kyunki sache kewal aap hi hai is sansar me par prabhu mohi hun isliye aap se maang liya life partner bhi. Par asli prem to aap se hi hai.\n\n"+
"Aap ka chota sa nadaan bhakt\n\n"+
"Vikram jham.",
"answer":
"दिव्य आत्मस्वरूप ,\n\n"+
"सबसे पहले स्वयं से प्यार करना सीखो | स्वयं को जानो कि आप आत्मा हो और आपके कुछ कर्म और इच्छाएं हैं | देह और मन के स्तर पर जीवन जीओगे तो भावनात्मक कष्ट आते ही रहेंगे | आत्मा के स्तर पर जीवन जीओ और उसके बाद आपके जीवन में वही लोग आयेंगे जो उचित होंगे |\n\n"+
"ऐसे जीवन साथी का क्या लाभ जो दूसरों के कथन के अनुसार निर्णय लेती हो | अगर आप ज्ञानवान हैं और अपने निर्णय स्वयं लेने में समर्थ हैं तो आपके जीवन में साथी भी ऐसा आएगा जो ज्ञानवान होगा और किसी अन्य के बहकावे में नहीं आएगा |\n\n"+
"|| राम ||"
},
{
"id": 335,
"header": "Emotional kasto se mukti",
"question":
"Continued from #519487- hey priya hanumanji pranam , aap ko shat shat naman . Setuu ke santo ko mera naman . Kripaya kar ke detail me mujhe aapke gyan se enlighten kariye jo aapne kaha tha ki deh aur mann ke star par na jiyu aatma ke star par jiyu woh kaise thoda sa detail me ek example de kripaya .\n\n"+
"Meri drishti me aatma star par rehna matlab jab mai puja path ya dhyan sadna karne ke baad khud ko kuch samay prabhu se khub kareeb aur zuda hua mehsoos karta hun kuch samay ke liye to kashto ko yaad nahi karta hun i just stay connected to almighty fir some time but jaise hi dincharya me aa jate hain to fir se moh prem ke vicharo se emotionally harm ho jata hun.\n\n"+
"Aur aaj prabhu naya aadhyay prakasit hua 'wastaviktaon ka anveshan hanuman ji dwara' me bhi swapn lok ke bare me bataya gaya hai jo ki ek wastwikta hai jisme dirdha swapn lok me khud ko sharmila samjh rahi thi jo sulochna ki deh me thi.\n\n"+
"Aur aaj hi maine swapn dekha ki jis se me pyar karta hun us se aalingan kar raha hun gale lag raha hun aur wah bhi lag rahi hai aage bad kar aur swapn aage badta hai jaha ko aa jata hai and we have to leave from there. kuch swapn pura yaad nahi hai but overall aadha swapna acha laga aur aadha bura.\n\n"+
"But prabhu deh aur mann ke star par na jiye yah to thik hai par kisiko bhulana bhi to aasaan nahi hai kyunki jinko ignore kara hai wah antar me to hai aur swapn me bhi aa gai.\n\n"+
"Hey priya hanumanji aapse meri aatma ke kai janmo ke sambandh ke khatir aap se viniti hai arji hai ki prabhu kya aap uska vivah karwayenge mujhse uske mann me prem bharkar sirf mere liye aur kisi ke liye nahi aur na hi kisi ka behhkawa ho use. Kyunki really i want to marry her nathji. Aur jiwan me sab kuch mil bhi gaya to fir bhi yahi aasha chubhegi hamesha.\n\n"+
"Pranam priya prabhu."
},
{
"id": 336,
"header": "Endless dreams for the entire night after reading through all 12 chapters",
"question":
"Namasthe Settu Masters/ Baba Mathang.\n\n"+
"I have read through all the 12 chapters yesterday with clarity and devotion. However when i slept of, i felt entire night was furious like so many threads running one after another. I couldn't recall what are those dreams even a bit but entire night i was in half awaken state and couldn't sleep at all.\n\n"+
"Kindly guide me through my experience , why exactly i felt it so much what was running in background which disturbed me so much for the whole night.\n\n"+
"Thanks & Regards\n\n"+
"Sandeep",
"answer":
"Divine Soul,\n\n"+
"This is called conflict of desires. After reading a chapter, your soul feels closest to God and wants to give up all worldly desires. But your mind pulls the soul towards the world and reminds it of pending worldly desires. This conflict results in half-awake state.\n\n"+
"Blessings"
},
{
"id": 337,
"header": "The Enigmatic EkaDasha Rudra",
"question":
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
"id": 338,
"header": "Eradication of my current problems",
"question":
"I am very perplexed at the current stage of my life .\n\n"+
"Nothing is working out in my material life..\n\n"+
"I pray to Lord Hanuman to remove the obstacles in my life",
"answer":
"--- conveyed to Lord ---"
},
{
"id": 339,
"header": "Eternal Knowledge.",
"question":
"I surrender at the Lotus feet of Lord Hanuman ji.\n\n"+
"Today Hanuman ji explained me about Desires,\n\n"+
"Karma and its effects and Various options\n\n"+
"available to Lord Indra.The Value of our Connections\n\n"+
"with Bhagavn Vishnu and Lord Siva is of great value to me.\n\n"+
"I offer my soulful gratitude to Hanuman ji for the Blessings."
},
{
"id": 340,
"header": "Every Thing in my life is an illusion?",
"question":
"I would like to know if the life i'm leaving now, is this an illusion. Is there any chance of me seeing lord hanuman. if so ... How?and i want to gain knowledge on this.",
"answer":
"Divine Soul,\n\n"+
"Do not draw any conclusions. Just ponder over what Lord Hanuman says. Imagine a child who is crying. Child's parent says to her, \"Do not cry otherwise ghost will come and beat you.\" That does not mean that ghost will actually come. Parent is saying so to stop the child from crying.\n\n"+
"Similarly, when you consider Lord Hanuman as your Guru, you need to have full faith in Him. He knows what is best for you. Whatever He says, He is saying so to give you the highest knowledge- the Brahma Gnan.\n\n"+
"If you have made Lord Hanuman your Guru and follow these chapters as we post them here, you will see Lord Hanuman one day. Many devotees have written to us that they saw Hanuman after reading first chapter. It depends on how many barriers are there to be broken. How much impurity is there to be erased. According to that you will see Lord Hanuman one day.\n\n"+
"Blessings"
},
{
"id": 341,
"header": "Is everything pre-destined or not",
"question":
"Pranam Mathangs and Setuu masters\n\n"+
"Is everything predestined or not?\n\n"+
"Do astrology and planets effect the lives of people?\n\n"+
"Bcoz the life we are experiencing right now is due to past karmas\n\n"+
"Sorry for the long question\n\n"+
"But please reply",
"answer":
"Divine Soul,\n\n"+
"Many devotees have asked similar questions and it has been answered multiple times. Please go through the answers other devotees got.\n\n"+
"To summarize:\n\n"+
"This universe can be seen/experienced/observed from many levels and from infinite perspectives.\n\n"+
"If you see this universe from the perspective of Gods, yes, everything is pre-destined.\n\n"+
"But when you come down to the level of humans and do an action, at that point you have the freewill and you have the power to shape your own destiny.\n\n"+
"||Ram||"
},
{
"id": 342,
"header": "examples ( a list) of Higher Purpose or Dharma",
"question":
"Jai shri Ram Can you please send me some examples ( a list) of Higher Purpose or Dharma ? Apart from \"Getting Supreme Knowledge and Getting Moksha.\" I am just trying to find the purpose for which I have taken birth in these set of Karma desire, and what Worldly duties I have to fulfil while being connected to supreme lord.\n\n"+
"I know there can't be higher purpose than getting moksha. Please help, I am experiencing some divine things, And I know that now most importantly I have to set my DHARMA.\n\n"+
"Help me in setting up my dharma and knowing the purpose for which I am experiencing Manavlok as \"Shashank\" Jai shri Ram",
"answer":
"Divine Soul,\n\n"+
"Higher purpose is necessary for happiness in life. There are four categories of human endeavors or purposes in life- (1) Artha (2) Kama (3) Dharma (4) Moksha\n\n"+
"Blessings"
},
{
"id": 343,
"header": "Exams",
"question":
"Jai bajrang bali please bless me as my exams are nearing so that I may be able to clear it as i have worked very hard but I also need your blessings."
},
{
"id": 344,
"header": "exceptional learning",
"question":
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
"id": 345,
"header": "The experiace",
"question":
"mene kitabo me hi pada tha par ye jaan kar khushi hui.\n\n"+
"kaash ham bhi unki blessing le pate"
},
{
"id": 346,
"header": "experience",
"question":
"plz convey my message to lord hanuman. plz ask him to give his darshan to me in my visio once. olease. this is a small request from my side. thank you"
},
{
"id": 347,
"header": "Experience",
"question":
"Jai Shree Ram, Jai bajrang bali.\n\n"+
"I have always believed in your supreme power. I have always felt it around me, inside me. Right now I might not be suitable to attain a glimpse of your divine form but I soulfuly desire to attain that suitability one day and I believe I will manage to.\n\n"+
"I seek nothing but your blessings, and your protection.And I know you are always there for me whenever I need you."
},
{
"id": 348,
"header": "experience of 6th chapter",
"question":
"I SIMPLY WORDLESS TO DESCRIBE MY STATE OF MIND ..IT IS LIKE A STILL OCEAN WITHOUT WAVES....\n\n"+
"I AM NOT ONLY ENJOYING THE EXPERIENCE BUT ALSO PERCEIVING THE BLESSING OF LORD HANUMAN...\n\n"+
"ONE THING I WOULD LIKE TO KNOW FROM SRI LORD HANUMANJI IS :INSTUCT A PRACTICAL PATH IN DAY TO DAY CHORES WHERE WE ARE DEVOID DESIRES BUT STILL FULFILLING DHARMA AND DOING KARMA FORMED DUE TO YESTER ACTIONS IN A RIGHT AND DHARMIC WAY....\n\n"+
"JAI SHRI RAM,JAI HANUMAN,......LONG LIVE MATHANG..."
},
{
"id": 349,
"header": "Experience After Reading \"The Immortal Lord Hanuman Arives\"",
"question":
"Really Feeling Very Happy and Blessed to Know this Fact and Interested to Know More About Mathang Community and Their Life Style.\n\n"+
"I Have Searched a lot about them from internet but very less data are available about them.\n\n"+
"Requesting to Share More Data About Their Life Style, Believes, Daily Life Would Give us More Knowledge.\n\n"+
"Also it would be great pleasure if you share the pictures of their temple and spiritual places.\n\n"+
"Jee Shree Ram.\n\n"+
"Thanks and Regards,\n\n"+
"Biswabhusan Prusty",
"answer":
"Divine Soul,\n\n"+
"Currently we are busy in understanding more about them and our first priority is to understand their logbook and translate it for the benefit of devotees across the world.\n\n"+
"Blessings"
},
{
"id": 350,
"header": "Experience and eagerness",
"question":
"I have been through all eleven chapter published by setu and thanking you very much sharing leela of hanumanji that have touched the bottom of my heart.\n\n"+
"I am curious to know about bhaham gyan and looking for bhahamnist guru who knows the god by tatva and can be able to help me in his darshan/sakshatkar.\n\n"+
"As you have mentioned the mantras of 36 panties..we have three of them please share rest all panties of mantras given by hanumanji so it could be helpfil for us to chant those panties for hanumanji's darshan.\n\n"+
"Requesting you to please help me in finding a real Guru. Jai sri ram",
"answer":
"Divine Soul,\n\n"+
"Do not look for Guru. Rather look to become a good disciple. Guru will automatically walk into your life.\n\n"+
"Blessings"
},
{
"id": 351,
"header": "Experience on Chanting the Mantra Given By Settu Hanuman Group",
"question":
"My mind was at continuous unrest due to some worry since long time.\n\n"+
"Yesterday I chanted the Mantra given to me by Setuu Hanuman group for 2 hours , I saw the Lord Hanuman as the clouds several times .\n\n"+
"He was flying with Maruthva Mala up above the sky.I felt so much peace.\n\n"+
"I thank for the great gift of Sight Hanuman Gave of Flying Maruthi with Maruthva Mala after chanting the mantra continuously for 2 hours .\n\n"+
"O Lord HANUMAN bless my soul with eternal peace and guide my soul through difficult paths to Vishnu loka to See the beautifull Kheera Sagar .\n\n"+
"Pranams at your feet O Lord Hanuman"
},
{
"id": 352,
"header": "The experience of Maya",
"question":
"Only Lord Hanuman, the Lord of Kaliyug, can dispel the effect of Maya, and the illusion it creates.\n\n"+
"If a sage like Baba Matang can get carried away, poor and already disillusioned souls like me are firmly in the grip of Maya, and the only boat I have is te devotion to Lord Hanuman.\n\n"+
"I seek HIS blessings everyday in my life, so that HE may take care of me and protect me and my family from harm in each and every way."
},
{
id: 353,
header: "Experience in past ONE month",
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
"Also, I wish to share here that from my childhood I was a SHIVA BHAKT only. Now I pray to both Lord SHIVA and Lord HANUMAN JI.\n\n"+
"IS HANUMAN JI A AVTAR of LORD SHIVA....????\n\n"+
"I will be highly obliged for your guidance.\n\n"+
"Best regards,\n\n"+
"Shishir Vats\n"+
"Ghaziabad- UP\n"+
"India",
answer:
"Divine Soul,\n\n"+
"As a devotee, your relation with Lord Hanuman is a personal relation. You should not seek views of anyone else on this relationship. What you experienced is unique to your own soul. Noone else can comment on that experience. When we read this out in Sakshat Hanuman Pooja, Lord Hanuman simply smiled. Therefore it is only between you and the Lord. Noone else can express views on this experience.\n\n"+
"Whether Lord Hanuman is a Shiva Avatar or not, answer to this question is not simple. In Chapter 6 Lord Hanuman has briefly told why He was sent to this mortal world. You should wait for upcoming chapters to know the answer of your question from Lord Hanuman Himself.\n\n"+
"Blessings"
},
{
id: 354,
header: "experience of second chapter",
question:
"JAI SRI RAM,\n\n"+
"I REALLY BELIEVE THAT THE BLESSINGS OF LORD HANUMAN MADE ME TO CONNECT TO SETUU ASIA.SECOND CHAPTER HAS GIVEN A REAL WOW EXPERIANCE WHEN HEARD THE PRAYERS OF BABA MATHANG ESPECIALLY PRAYING:\" LORD CLARITY TO ABODE HIS MIND AND WASH AWAY DEVIL CONFUSION AND ANGER EVIL FROM HIS MIND\"......I REALLY ENJOYED THE WORDINGS AND STARTED ADAPTING MYSELF ON VARIOUS OTHER CIRCUMSTANCES TO RESIDE MY THOUGHT AT PEACE...\n\n"+
"\"JAI SHRI RAM\" \"JAI VEER HANUMAN\" LONG LIVE MATHANGI COMMUNITY....."
},
{
id: 355,
header: "Experience#505719",
question:
"Sabse pahile paka bahut bahut abhar jo ye website apne banayi!\n\n"+
"Mera anubhav bahut puarna hai,jab mai 25-26 vars ka tha,mai ek sadhka hu lekin maine diksha li huyi hai,lekin bavjut iske mere jivan me kuch ise dikate iyi ki mera vishawas har samay dol ta raha,kay karu kya na karu samje mai nahi aara tha ,mai puja patha bhahut karta tha lekin muje tabhi kuch rasha nahi di raha tha,phir ek din achnak mere hat me ek tantra ke kitab padi usme maine hanuman chalisa dekhi aur muje hanuman chalisa roj padneke icha hue tabse mai roj haunman mandir me jakar hanumanji ke samksha chalisa ka patha karta tha.use drmiyan hanuman jayniti bhi aagayi,hanuman jayti ke din mai gharke bahar soya hu tha to achanka muje mere rajyi pe koyi kudta hua mahsu hua ,muje laga mai sapna dekh rah hu lekin jab rajayi hatyi to dekha ek bandar ka bacha mere pe kudh raha tha aur vo din hanumanjayniti tha. isse mere hanumanji ke prati astha aur bad gayi aur jadli hi muje mara fal mil gaya. iske lava ek anubahav aur hai mai ek jaga jaya karta tha va pe ek pir ki savari ke sadhu maharj ko atithi,us din 3 log aur the jinko alag alg devo ki savri atithi,usme se ek ko hanumanji ke savari atithi,jab mai unko namasaker karne gaya to hanumanji ke savari val;e vyakti ne muje kasa kar pakad liya,kyu pakad muje ye aaj tak maj nahi aya,ya to hanumanji mere bahkti parasan hoge is liye ya phir muje pe koyi bala hogi use rokne ke liye. bas yahi do anubav mere javan me aaye hai.aaj muje pahla adhya padne ke bad thoda hal laga jaru lekin mai ye nahi bol sakta ki isase mere atma ki koyi parat hati hogi.\n\n"+
"mera apse ek prashan hai agr aap mere is prasana ka uttar de denge to badi maher bani hogi.\n\n"+
"Q:mai hanumnaji ki puja (hanuman chalisa ) bahut dino se padta hu ,ek do bar maine 100 bar bhi path kiya hai lekin muje abhi tak isa kuch bhi anubhav nahi hua jise mai kah sakta hu ki mujpe hanumanji ki kripa hia,ya mere karya safal ho rahi hai?\n\n"+
"thanks,\n"+
"Mahehs Nageshwar",
answer:
"दिव्य आत्मस्वरुप ,\n\n"+
"हनुमान चालीसा का पाठ तब करें जब आप देह और मन से ऊपर उठ जाएँ | जब पाठ करने बैठे तो कुछ मिनट शांत रहें और सोचें कि आप कौन हैं | जब आपको यह लगने लग जाए कि आप देह नहि, मन नहीं , अपितु एक आत्मा हैं , तब पाठ शुरू करें | तब आपका हनुमान जी से संपर्क सधेगा | कितनी बार पाठ किया यह गिनने कि आवश्यकता नहीं है क्योंकि गिनती मन से होती है , आत्मा से नहीं | मन के स्तर पर मत गिरिये , आत्मा के स्तर पर उठकर पाठ कीजिये |\n\n"+
"|| राम ||"
},
{
id: 356,
header: "experienced assurah works",
question:
"Gurudev ko sat sat naman.\n"+
"Gratitude setuu...\n\n"+
"Today i have eexperienced assurahs aactivities and found out how they are rresponsible for what they did to my body mind.\n\n"+
"Only gurudev and i know today incident.\n\n"+
"But praying to make me stronger to fight and win this war.\n\n"+
"Observations are nnecessary for every tthought .\n\n"+
"Bless me holy one.\n\n"+
"||RAM||"
},
{
id: 357,
header: "Experiences of Lord Hanuman",
question:
"Jai Shree Ram Jai Shree Hanuman\n\n"+
"Gratitude to my gurudev shree Hanuman Ji\n"+
"gratitude to all the Mathangs and setuu team.\n\n"+
"Gurudev I (the soul riding on body of Karan) every moment feel your presence around me everywhere I go I feel you with me My Lord.\n\n"+
"Jai Shree Ram Jai Shree Hanuman."
},
{
id: 358,
header: "Experience/Thoughts",
question:
"In my experience by praying God/Lord Hanuman we get peace from whatever we are going through in this material world.\n\n"+
"I have a query: My marriage is delayed from sometime although my parents are looking matches for me.",
answer:
"Divine Soul,\n\n"+
"Do not get desperate. Everything will happen at right time. Just love yourself. Be assured that the right match is waiting for you and it will come at right time.\n\n"+
"Blessings"
},
{
id: 359,
header: "Experince in the Reading Journey",
question:
"Jai Shree Ram Jai Jai Hanuman,\n\n"+
"First of all I must say that Thank you so much to bring Hanumanji so close to me...\n\n"+
"Jai Siya Ram Jai Jai Hanuman !!",
answer:
"Divine Soul,\n\n"+
"All the devotees who are reading chapters of Lord Hanuman's Leelas are special.\n\n"+
"Blessings"
},
{
id: 360,
header: "Exploitation of human by the human",
question:
"what should we do when people try to exploit us or anyone else?",
answer:
"Divine Soul,\n\n"+
"Follow principles of Lord Krishna laid down in MahaBharata to deal with such situations.\n\n"+
"Blessings"
},
{
id: 361,
header: "Expressing Gratitude and Queries",
question:
"Dear all devotees of Lord Hanuman,\n\n"+
"Greetings and Good Day.\n\n"+
"Om Jey Sri Hanuman.\n\n"+
"Thank You and I am feeling lighter after reading each chapter. Om Jey Sri Hanuman.",
answer:
"Divine Soul,\n\n"+
"Take care of these 4 things-\n\n"+
"(1) Make sure you have a deep desire to reach goals.\n\n"+
"(2) Make sufficient efforts required to fulfill that desire.\n\n"+
"(3) Never allow demons of fear, worry, doubt to make room in your heart.\n\n"+
"(4) Keep your prayer simple.\n\n"+
"Blessings"
},
{
id: 362,
header: "Failed in significant aspect of life",
question:
"Lord Hanuman\n\n"+
"Getting failure in significant aspect of life.....",
answer:
"Divine Soul,\n\n"+
"You will certainly come out of it.\n\n"+
"Blessings"
},
{
id: 363,
header: "Family",
question:
"Jai Bajrangbali Hanuman,\n\n"+
"Save my family with me."
},
{
id: 364,
header: "Family Members not internally strong",
question:
"After analyzing deeply about events in our day to day life...",
answer:
"Divine Soul,\n\n"+
"There are many techniques to control body-mind of others.\n\n"+
"Blessings"
},
{
id: 365,
header: "Family problem",
question:
"Hamari family main bahot problems go Rahi hai..\n\n"+
"Jai Shriram\n"+
"Jai veer hanuman",
answer:
"हे आत्मस्वरूप\n\n"+
"जब किसी के मस्तिष्क पर असुरों का कब्जा हो जाए...\n\n"+
"||राम ||"
},
{
id: 366,
header: "family problems",
question:
"O Lord Brahma shower Your Divine Grace on my eldest son..."
},
{
id: 367,
header: "Family's matter",
question:
"Namaskarm sir,\n\n"+
"We have family issues...",
answer:
"Divine Soul,\n\n"+
"It is not black magic. It is influence of Asurrahs.\n\n"+
"Blessings"
},
{
id: 368,
header: "Father hospitalized",
question:
"Dear friends,\n\n"+
"My father is hospitalized.\n\n"+
"Regards\n"+
"Tamoghna Dassharma"
},
{
id: 369,
header: "Fear?",
question:
"This is not an experience,but this is how I felt after reading these chapters.",
answer:
"Divine Soul,\n\n"+
"These chapters sure switch off the artificial lights which keep us in illusion.\n\n"+
"Blessings"
},
{
id: 370,
header: "fearless now",
question:
"once i had bad dream.Some devils was trying to kill me in my dream..."
},
{
id: 371,
header: "Feel Happy",
question:
"mai punjab se hun jb maine yeh lines padi..."
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
"First and foremost, it is beyond me to realize that I am blessed...",
answer:
"Divine Soul,\n\n"+
"These Mantra are to be recited in the state of transcendence.\n\n"+
"Blessings"
},
{
id: 374,
header: "FEELING GOOD",
question:
"SHRI RAM,\n\n"+
"AFTER READING THIS 9TH CHAPTER I AM FEELING VERY GOOD."
},
{
id: 375,
header: "Feeling of His Blessing at Every Instance",
question:
"I feel the Blessing of Shri. Ram Bhat Prabhu Hanuman bestowed upon at every instance."
},
{
id: 376,
header: "Feeling protected & blessed to my family by HANUMANJI",
question:
"As I started the reading of Hamunmanji's apperance with mathangs..."
},
{
id: 377,
header: "feelings",
question:
"i'm feeling better, stronger. so strange. i read why hanuman was chained only now...\n\n"+
"jai sri hanuman. sriram jaya ram jaya jaya ram. sri gurubhyo namah."
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
answer:
"Divine Soul,\n\n"+
"If you read the chapters with full awareness, you will get all your answers. Answer of your question is hidden in first chapter itself.\n\n"+
"Blessings"
},
{
id: 379,
header: "feelings",
question:
"Lord Hanuman. the word itself makes me feel lighter and talking to him makes me feel like i am talking to a guru at times i imagine Him to be a child and the love that i feel for him is just what i feel for my son i don;t know why i feel this and i have not thought to ask anybody about the way i feel for Shri Hanuman.\n\n"+
"i have experience His presense around me and after connecting with Setu the presence of Lord Hanuman is much stronger i feel that i am in his proctection and he is the one with whom i can share all my feelings.i do belive that my karmas are affected by the suras and the asuras, what's the way of getting rid of them how connect with Lord Hanuman if i am disturbed by these hinderense. i sit to meditate but after some time i loose my concentration",
answer:
"Divine Soul,\n\n"+
"Observe; do not resist. Because you have two kinds of Asurrahs affecting you. One disturbs you and then you react saying, \"Oh, I am not able to concentrate.\". Then the second Asurrahs comes in picture which exploits your worry that \"I am not able to concentrate\". To get rid of them, just observe them. Let them pass through you. Keep smiling and say to them, \"I know your trick. I can see you.\" They will leave then.\n\n"+
"Blessings"
},
{
id: 380,
header: "felt your presence",
question:
"i was told the planet shani is going to affect my star. i thought of the hanuman temple in the city and pray. however, when i went there, the temple was not yet open. as my aunt was waiting, i could not stay long. so i went around the closed temple, prayed for my niece and others and put some money in the hundi. when i came around , i asked a person sitting there when the temple would open. he asked to ask two people waiting in front of the closed temple,at the main door. they told me the temple would open only at five. but, they said i could see hanuman through the holes. and i did. felt happy when i saw the face and feet of the lord. on the way back i reached another temple. hanuman was there too and the doors were open. i prayed, chanted slokas etc and returned home with some prasadams. then i felt, as a surrendered person, i was ready to accept anything given by god. i'll bear it and if i can't, the lord will help me. i will feel his presence closely!did he really communicate with me? sri anjaneyaya namah. sri ram jaya ram jaya jaya ram. sri gurubhyo namah. namaskarams. namaskarams to the sarangs and Setuu masters."
},
{
id: 381,
header: "before few days i feel",
question:
"before few days i feel that hanuman ji is living with me jb se maine hanuman ji ka yantra dharan kiya hi meri smaoking km hoti gaiyi aur aj ekdm se choot gayi mai ek student hu bs ab job ki deri hi aur mujhe vishwas hi ki hanuman ji wo bhi de denge shri hanumate namaha............."
},
{
id: 382,
header: "few questions i got while reading this chapter.",
question:
"Dear Setuu,\n\n"+
"Sai Ram\n"+
"Jai Hanuman\n\n"+
"Accept my humble pranamas. I am reading this probably 2time. The layer of illusion seems to get shaken now. I felt this is a gradual process as the soul has taken many bodies and got bound by karmas and desires. So in that case your 108 hours of arpanam is insufficient. Simply because there are chances for people like me to take time to understand it.\n"+
"2) I am still not clear whether mathangs are monkeys or humans. If you want to know about me, well than I look like human but am monkey in side.(no intentions to compare with mathangs or other wise monkeys)\n"+
"3)in bhaghavat gita Lord Krishna says all things in this universe are fragments of me. So is going back to mukthisagar should be the goal or going back to the lord(merge with him)\n"+
"4)are mukthi and moksha two different things?",
answer:
"Divine Soul,\n\n"+
"You may follow your family tradition for Arpanam. We have been instructed to put in place the Mathang tradition which calls for Arpanam within 108 of reading the chapter for first time. It is like breaking coconut. It is considered best if the coconut is broken in first attempt.\n\n"+
"Mukthi and Moksha are the same thing. We cannot influence your soul's goal. There are thousands of souls who prefer either Shivaloka or Vishnuloka over Moksha. But as described in chapter 13, Moksha is the ultimate destination for a soul. (Actually it is something where all destinations end. So it cannot be called destination.) To be able to get Moksha, one has to let go off their identity. That is what is difficult for most souls.\n\n"+
"Blessings"
},
{
id: 383,
header: "Fight Inside me",
question:
"Thanks for your response and apologies for my late feedback.\n\n"+
"I am a normal human being with lots of desires which includes good as well as bad ones.\n\n"+
"I don't think I would qualify as a messenger of Lord Hanuman as of today as I feel I am impure and need lot of changes in the way i think and live.\n\n"+
"I am a normal householder with wife, 2 daughter and dependent parents, however of late due to various problems in my married life, I had started looking into my spiritual aspects as to why I am subjected to such a harsh and rough personal life.\n\n"+
"I have started disliking my family life and want to pursue spiritual path.\n\n"+
"I want to meet my lord, can you guide me how?\n\n"+
"Please respond with your feedback. Waiting for it....\n\n"+
"Thanks and Regards,\n"+
"P Sudeesh",
answer:
"Divine Soul,\n\n"+
"If you leave your family responsibilities to avoid the pains associated with those responsibilities, it will be called \"Escapism\" and not \"Sanyas\".\n\n"+
"Therefore we suggest you to be a Grihasth Sadhaka.\n\n"+
"Therefore we suggest you to follow Lord Hanuman's Leelas being posted here. Wait for Lord Hanuman's light before moving towards Sanyas.\n\n"+
"Blessings"
},
{
id: 384,
header: "Financial support for my life/My brother's marriage",
question:
"Thank you dear Matangs,\n\n"+
"I request you to pray for my brother's marriage in the near future as per your reply.\n"+
"One small clarification, I do not have any children and have an old mother whom I need to take care, I am alone and need to take care of me. Only God is my support and He has been leading me till this time.\n\n"+
"Hence, I request your blessings, support and prayers so that I can do some seva in the later part of my life as I am presently 51 years.\n"+
"Thanks again dear souls Matangs ..Hanuman ji Ki Jai Ho!! Jai Sree Ram!!!",
answer:
"--- conveyed to lord ---"
},
{
id: 385,
header: "First Experience",
question:
"My friend told me about this website.......\n"+
"I am also a devotee of Hanumanj. When I read the first chapter my all the stress tension problems and happiness too have gone somewhere. When I was reading I can feel Hanumanji here reading with me. This was very unusual experience......."
},
{
id: 386,
header: "The first realisation",
question:
"Few days back on my holidays in Kolkata I dreamt of a black creature sitting by my head it was causing an immense pain in my left eye by concentrating its gaze towards it.\n\n"+
"I think his name have my soul the strength to fight off the feeling of evil.\n\n"+
"Jai Sri Hanuman"
},
{
id: 387,
header: "FLOWER OF LIFE",
question:
"It is being said that we are living in an Aquarian Age & Science & Spirituality are running on the parallel tracks.\n\n"+
"I love Lord Hanuman ji & really craving for his holy darshan & really sanguine that one day I will see him with the grace of Waheguru. Jai Sri Hanuman."
},
{
id: 388,
header: "forgiving",
question:
"After reading the chapters sent, I have tried a couple of things.\n\n"+
"I need your blessings. Om namah shivaya. Durgam deveem saranam."
},
{
id: 389,
header: "FRAMING OF HANUMANJ'S PICTURE",
question:
"I had been keeping a paper picture of Hanumanji which I received after praying at a temple at Trivandrum consecutively for 9 weeks.\n\n"+
"Now a query :_\n"+
"I have had a basic course on Reiki (healing with hands ) and would like to have this power with be in abundance to serve the people /beings around as service without accepting any remuneration.\n\n"+
"Gopinath",
answer:
"Divine Soul,\n\n"+
"Yes, you should help people with your skills of Reiki. But you should not set arbitrary rules. For example \"without any remuneration\" is an arbitrary rule.\n\n"+
"Blessings"
},
{
id: 390,
header: "fulfill my wish",
question:
"jai shree hanuman\n\n"+
"I have always wished to clear medical entrance examination.\n\n"+
"Yours devotee\n"+
"Shikha Priyadarshani",
answer:
"Divine Soul,\n"+
"Take care of these 4 things-\n"+
"(1) Make sure you have a deep desire to reach goals.\n"+
"(2) Make sufficient efforts required to fulfill that desire.\n"+
"(3) Never allow demons of \"fear\", \"worry\", \"doubt\" to make room in your heart.\n"+
"(4) Keep your prayer simple.\n\n"+
"Blessings"
},
{
id: 391,
header: "Full circle?",
question:
"Right from childhood I was so dedicated to the Gods that I used to talk to them; I used to recite prayers with dedication and concentration every day and then when I finished school my results were totally differenet from expectation and my whole life changed.\n\n"+
"Slowly but steadily I started moving from one bad habit to another till finally I stopped reciting prayers altogether. All along I started hating every day of my life but recently I have been wanting to get back to my earlier routines. But even then I am still unable to make myself do that.\n\n"+
"Today, as I read the first chapter I suddenly feel that I may still have a chance to get back to being my old self . I just hope Lord Hanuman makes it hppen at the earliest.... Lord please help me get closer to you\n\n"+
"I also hope that Lord Hanuman will help me get out of the total mess I am in right now? Will it happen Lord? If so, when?"
},
{
id: 392,
header: "Full of Confusion",
question:
"Hi...My name is Raghavendra.I am completed B.tech and working for TCS( multi national Company) now.Since my childhood, I had two dreams in my life.\n\n"+
"1) A beautiful looking girl who should love me immensely and I should marry her only in my life.I proposed 4 girls in that search and all got flop.I am still searching for a beautiful girl who would give me immense love and I would also marry her.I have no interest in other girls once she comes in my life.Help me for this please....\n\n"+
"2) I should earn a lot of money in my life and look after my parents like a King and Queen.They should have no complaints of anything.Not only them, I should also look after my relations and give all of them a posh life.I should help poor by contributing crores of rupees for them.And here also I want my life partner(my love) help me by being my side in all my sufferings.\n\n"+
"I am 24 now and not able to fulfill these two dreams are making me depressed a lot.I am not at all satisfied with my life.Please help me ASAP.....And I am LORD HANUMAN Devotee.I chant Hanuman Chalisa everyday..and most of the times twice a day.\n\n"+
"Please Please Please help me... :( :( :(",
answer:
"Divine Soul,\n\n"+
"We have two advices for you.\n\n"+
"(1) Every human being is unique. What works for others may not work for you. Do some soul searching. Sit at a quiet place and rewind your life. Think. From childhood what has worked best for you.\n\n"+
"(2) In most of the cases, good things happen in life when you are enjoying life in the present moment.\n\n"+
"When you follow the patterns of your own life instead of following advices from others, your body mind and spirit becomes in sync with the supreme self of Lord Hanuman.\n\n"+
"Blessings"
},
{
id: 393,
header: "Full of Confusion",
question:
"Continuation from #30656\n\n"+
"Presently I am close with 2 girls.With first girl,I am spending a lot of time talking and thinking about her as I feel that she is my soulmate.Even she likes to talk to me but less than me.\n\n"+
"I feel that she is perfect for me.What should i do now ???\n\n"+
"How to know that I am right.??\n\n"+
"Other girl started talking to me and sent friend request to me on facebook.And generally showing a lot of interest in me, but I have no feelings for her.\n\n"+
"I am very much desperate to meet my soulmate.After her arrival, I wont even have the need to see any other girls also.I want to be like Shri Ram and searching very hard for my Sita.\n\n"+
"Please help.....",
answer:
"Divine Soul,\n\n"+
"Soul-mate cannot be found outside. You have to find her within. When you find her within, she will automatically appear before you in physical form too.\n\n"+
"Do not assign label of soul-mate to anyone who comes in your life. Rather connect with your own soul.\n\n"+
"Blessings"
},
{
id: 394,
header: "Full of Confusion",
question:
"Continued from #31246\n\n"+
"I am not able to do soul searching.I am feeling very disturbed.Please help me how and at what time I should do soul searching.\n\n"+
"I am working.I start at 7 in the morning and reach home by 11 pm.So, very stressed and in this time, I also spend time with my love.\n\n"+
"Is she the right woman for me.How can I know that.How can I win her love.Please help me.",
answer:
"Divine Soul,\n\n"+
"You do not need separate time for soul searching. Whatever you do, wherever you are, you can do soul searching.\n\n"+
"You have to just become an observer for one second.\n\n"+
"As for love, be patient. Everything will take place at right time.\n\n"+
"Blessings"
},
{
id: 395,
header: "Gaining inner peace",
question:
"Every single time, after reading each chapter, i am not sure if i did feel light, all i understand and feel is that, a sense of safety and peace that lord hanuman is out there watching and protecting all his devotees in any form.\n\n"+
"The more i read and understand each chapter, the more reasons i find to read mahabaratha, ramayana,To learn more.\n\n"+
"Great job guys.\n\n"+
"God bless"
},
{
id: 396,
header: "Gangavataran.",
question:
"I had a thrilling experience of Gangavataran,\n"+
"and very glad to have the Knowledge of Mathangs,\n"+
"Passed on to us by Setu.Hanuman Raksha Sarvada.\n"+
"Jai Hanuman,Jai Hanuman,Jai Hanuman, Jai Hanuman,\n"+
"JAi Hanuman."
},
{
id: 397,
header: "garbh ke andar aatma kab pravesh karti h",
question:
"mera nam aakash kaushik h or me prabhu hanumanji ka ek chota sa bhakt hu.\n"+
"mera sawal hai ki jab aatma muktisagar se bahar niaklti h tab vo 9 mahino me se konse mahine me garbh ke andar pravesh karti h arthat karan sharir kya h or iska faisla kon karta h ki aatma garbh ke andar kab pravesh karegi.",
answer:
"दिव्य आत्मस्वरूप , गर्भवती होते ही यह निर्धारित हो जाता है कि कौन सी आत्मा उस नई देह को धारण करेगी |\n\n"+
"लेकिन आत्मा तभी प्रवेश करती है जब देह माता की देह से अलग हो जाती है | तब तक आत्मा इन्तजार करती है |\n\n"+
"||राम||"
},
{
id: 398,
header: "Get rid of Sins",
question:
"As life progresses and I get to know about world, I feel sorry for sins that done in childhood in influence of environment around me.\n\n"+
"I have done those sins to fulfill body desire. Today when I think about those, I feel guilty and very sad.\n\n"+
"Please pray for me in Sakchat Hanuman Puja. Also confirm to me that Lord Hanuman has forgiven me for those conducts.",
answer:
"Divine Soul,\n\n"+
"You have to forgive yourself and forget those past memories.\n\n"+
"Once you forget it from your memory and forgive yourself for that, Lord Hanuman will embrace you.\n\n"+
"He has already forgiven you. Now you have to forgive yourself.\n\n"+
"Blessings"
},
{
id: 399,
header: "Getting lord hanuma's blessings in my dreams",
question:
"I am a very small devotee of lord hanuman. I live in Bhopal (madhya pradesh state) India.\n\n"+
"I have started his pooja in 2007 and after 2 years i started feeling heat in my body,shaking,vibrations.\n\n"+
"I am confused ? Can you help me ?",
answer:
"Divine Soul,\n\n"+
"You are having out-of-the-body experiences.\n\n"+
"You are living two different realities.\n\n"+
"You should lower your attachment with the Maya or the outer word and embrace the higher reality you are blessed to experiences.\n\n"+
"Blessings"
},
{
id: 400,
header: "God is Great",
question:
"It was just few minutes ago, i was left to wonder how come i didnt receive an email for the next chapter, and when i refreshed my email, i was shocked to see the email for setuu website.\n\n"+
"God is Great. He heard me undoubtedly.\n\n"+
"Shri rama jayam"
},
{
id: 401,
header: "God Hanuma saved me",
question:
"Once I traveled in RTC Bus last seat. When that time, I prayed Lord Hanuma with Dandakam (in telugu).\n\n"+
"Suddenly one Lorry Hit our bus, whereever I am sitting (back side). But nothing will happen to me.\n\n"+
"I need some answers from Mathangs.\n"+
"1) Whenever we pray starting for Hanuma, first Hanuma will test the devotee, and create problems to him. Is it correct ?",
answer:
"Divine Soul,\n\n"+
"This is not true. Lord Hanuman does not create problems for His devotees.\n\n"+
"They face problems because of their own old Karmas.\n\n"+
"When the bond becomes strong enough, Lord Hanuman starts removing the problems.\n\n"+
"Blessings"
},
{
id: 402,
header: "God Hanuman Ji",
question:
"God Hanuman is bigger god i am to say god hanuman ji hanuman ji meri naya par karo muge bhav sagar se par lago or meri samyso ka haal de do prbhu."
},
{
"id": 403,
"header": "god or alien",
"question":
"Vartman me samay samay par dusre grah ke praniyo ki upasthiti ko anubhav kiya ja rha h jinhe alien ke nam se pukara jata h. Ufo ka dikhna ya manusyo ke alava kuchh chhote kad ke saphed hare ya lal prani bhi dekhe jate h. Mai hanuman ji se janna chahta hu ki jo aj kal scientist kahte h ki wo alien hi bhagwan h kya ye sach h?",
"answer":
"हो सकता है उन्होंने सुरों अथवा असुरों को देखा हो | वे भगवान् नहीं हैं |"
},
{
"id": 404,
"header": "The Good and The Bad",
"question":
"Hello,\n\n"+
"Our last conversation helped me a lot. I used to assume a lot. But your path helped me to move away from assumptions.\n"+
"I am replying after a long time. Work keeps me busy. Today I read the chapter about Linga Shastra. It has definitely 'peeled off' few more layers of assumptions. But one thought keeps lingering in my mind. We had already discussed about 'the good' and 'the bad' in previous conversation. Your answer to that query was satisfactory. But in this chapter, I once again came across these words viz; the good and the bad OR the positive and the negative.\n"+
"Lord Vishnu is all about positivity. Lord Shiva is all about perfect balance of the positive and the negative. How do these Gods define positive and negative?\n"+
"For example, the tiger eats the cow. Is Tiger a negative force? Is it a bad fellow? Tiger kills its prey for survival. Is he bad? A thief robs a person. Is the thief bad? He does it for his own survival. It appears that 'the good' and 'the bad' are relative terms. What is 'good' for me, may not be good for others. What is bad for me, may be good for others.\n"+
"How should we look at these terminologies?\n"+
"Thank You for reading. I humbly request you to show me the path.",
"answer":
"Divine Soul,\n\n"+
"There is a 3 dimensional space around you. Your body moves in that space. How do you denote that space geometrically? You draw three axis : x-axis, y-axis, z-axis. You can denote location of an object in the graph of these axes.\n\n"+
"The way body moves in space dimensions, your soul moves in the Karma-desire dimensions.\n\n"+
"The truth lies beyond positives and negatives.\n\n"+
"Blessings"
},
{
"id": 405,
"header": "good and evil",
"question":
"From chapter number 6 as hanumanji explained about sura and asura.... does it mean that the cause of increase in eartlhy calamiyues and the phenominon like terorrism, smuggling, rapes , murders and corruptions are all the wishes granted asper the rule of trideva or all they all preplanned so that lord vishnu can once again come to earth to cleance this earth and provide moksha to human souls and reassign the sura and asura on earth????",
"answer":
"Lord Vishnu can never grant a wish which has evil consequences but Lord Shiva can.\n\n"+
"\"Preplanned\" depends on the observer.\n\n"+
"Blessings"
},
{
"id": 406,
"header": "good and evil 2",
"question":
"In continuation to # 492639... thanks a lot for replying sir but I am far more curious now... I want to know why would lord Shiva fullfill the evil wishes when lord Vishu won't .... they all are different forms of the same energy and have always maintained the balance of nature.. why will one like to disturb it ???",
"answer":
"Divine Soul,\n\n"+
"There is distorted and misinterpreted knowledge embedded in human mind of Kaliyuga.\n\n"+
"You should wait for upcoming chapters to clear your misconceptions.\n\n"+
"Blessings"
},
{
"id": 407,
"header": "Good & Bad Times in Life",
"question":
"I am currently going through tough phase in life . My career wherein i lost my job in the month of August 2014.\n\n"+
"As the time Gap of me being jobless is slowly increasing , i am feeling a little restless & Insecure with not getting success.Kindly guide me the way forward with your divine thoughts.",
"answer":
"Divine Soul,\n\n"+
"Disconnect yourself from worries of job for 24 hours.\n\n"+
"Once that message of Lord Hanuman is delivered to you, the blockage will be cleared.\n\n"+
"Blessings"
},
{
"id": 408,
"header": "Good & Bad Times in Life",
"question":
"Dear Sir,\n\n"+
"I think my greatest lord shri Hanuman Ji wants me to do the sewa or services to other people of society also.\n\n"+
"Also i wish i shall get a good job as soon as possible.",
"answer":
"Divine Soul,\n\n"+
"A service cannot be counted as expertise.\n\n"+
"Blessings"
},
{
"id": 409,
"header": "Good & Bad Times in Life",
"question":
"Dear Sir,\n\n"+
"I think my greatest lord shri Hanuman Ji wants me to do the sewa or services to other people of society also.\n\n"+
"Also i wish i shall get a good job as soon as possible.",
"answer":
"Divine Soul,\n\n"+
"A service cannot be counted as expertise.\n\n"+
"Blessings"
},
{
"id": 410,
"header": "Good & Bad Times in Life",
"question":
"On this auspicious occasion of Hanuman Jayati. I would like to tell that with the grace & love of my lord shri hanuman Ji, i finally got a job offer."
},
{
"id": 411,
"header": "A good feeling",
"question":
"Jai LORD HANUMAN\n\n"+
"A little bit happiness has come to my life.I have just cleared a pre exam and got shortlisted for main examination.\n\n"+
"Jai bolo Mahavir HANUMAN JI KI."
},
{
"id": 412,
"header": "Good Karma Vs Bad Karma",
"question":
"How do I categorize a good karma from a bad karma?\n\n"+
"Please explain more in detail.\n\n"+
"Thanks\n\n"+
"Annie",
"answer":
"Divine Soul,\n\n"+
"What you do as per your Dharma is good Karma.\n\n"+
"Blessings"
},
{
"id": 413,
"header": "Got answers to a lot of questions",
"question":
"Jai Hanumanji, Pranams ....\n\n"+
"Please convey my prayer to Lord Hanuman so that by his grace he could help me find my soulmate.\n\n"+
"Thank You"
},
{
"id": 414,
"header": "Got saved",
"question":
"This event occurred in the year 2010.\n\n"+
"I strongly belive it was his blessing that I could avoid a sure accident.\n\n"+
"Jai Hanuman Ji"
},
{
"id": 415,
"header": "The Gr8 Lord Hanumanji !!!",
"question":
"Hey Bhagwan Hanumanji,\n\n"+
"Aapka khub khub dhanyawad."
},
{
"id": 416,
"header": "The grace of Lord Hanuma",
"question":
"Recently we visited Tirumala for darshan.\n\n"+
"From the moment the mantra was spoken into my ear, I am still experiencing the same blissfulness.\n\n"+
"Jai Shri Ram."
},
{
"id": 417,
"header": "Grace of Lord Hanuman",
"question":
"I have full faith and trust and also an ardent devotee of Lord Hanuman."
},
{
"id": 418,
"header": "Grace my mother with your blessings",
"question":
"Jai Hanuman.\n\n"+
"I request Lord Hanuman to bless her Soul with Supreme Knowledge.",
"answer":
"Blessings"
},
{
"id": 419,
"header": "grant moksha to my beloved mother",
"question":
"JAI VEERA HANUMAN\n\n"+
"i just want my mother soul to rest in peace..grant her moksha....."
},
{
"id": 420,
"header": "Grateful",
"question":
"I express gratitude to Lord Hanuman for enlightening my existence.\n\n"+
"Jai Shri Hanuman"
},
{
"id": 421,
"header": "Grateful",
"question":
"Hello, I have had several small experiences.\n\n"+
"Namaste."
},
{
"id": 422,
"header": "gratitude",
"question":
"dearest loving lord,\n\n"+
"pls bless with your grace and love."
},
{
"id": 423,
"header": "Gratitude",
"question":
"I always feel the presence of Hanumanji near me."
},
{
"id": 424,
"header": "GRATITUDE",
"question":
"I express my heartfelt gratitude towards the supreme lord, hanuman ji."
},
{
"id": 425,
"header": "Gratitude to God",
"question":
"Jai Siya Ram\n\n"+
"Please give me a sound mind and a healthy body.\n\n"+
"Jai Hanuman"
},
{
"id": 426,
"header": "Gratitude to God - 2",
"question":
"Jai Shree Ram\n\n"+
"I have surrendered myself completely to God.\n\n"+
"Regards."
},
{
"id": 427,
"header": "Gratitude to Lord Hanuman",
"question":
"My Dear Lord,\n\n"+
"Thank you. Thank you. Thank you.\n\n"+
"Your Dasa,\nMayukh Sinha."
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
