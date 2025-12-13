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
  id: 16,
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
  id: 17,
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
  id: 18,
  header: "मेरे अनुभव",
  question: 
    "जिस दिन मैंने पहला अध्याय पढ़ा उसी दिन मुझे स्वप्न में वानर रूप में हनुमानजी का स्वरूप दिखाई दिया | मन बहुत खुश था | मैं और मेरे जीवनसाथी हर शनिवार सुन्दरकाण्ड और हनुमान चालीसा का पाठ करते हैं | हम श्री हनुमान में आस्था रखते हैं और जानते हैं कि भगवान किसी की भी बिगड़ी बात बना सकता है | मैंने पहले अध्याय पढ़ने के बाद एक सौ एक रुपये की राशि भेजनी चाही लेकिन मैं पैसा भेजने के लिए किसी कार्ड का प्रयोग नहीं करती इसलिए प्रयास असफल हुआ \ यदि बेंक खाते में भेजना हो तो मैं दुबारा कोशिश कर सकती हूँ \ पर मैं जानती हूँ मेरा पहला समय बीत चुका है इसके लिए मुझे प्रतीक्षा करनी होगी| हनुमान जी हमारा कल्याण अवश्य करेंगे|"
},
{
  id: 19,
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
  id: 20,
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
  id: 21,
  header: "स्वप्न में हनुमान जी ब्राह्मण के रूप में मिले ।",
  question: 
    "मुझे बचपन से ही जल से भय लगता हैं । कुछ वर्ष पूर्व मै गहरी निद्रा में था। अचानक मुझे लगा कि मै किसी तट में हूँ। अकस्मात् एक बूढ़ा व्यक्ति (ब्राह्मण) जिसे मैंने कभी नहीं देखा मेरे पास मेरेये , और मुझे ह्रदय से लगा लिया। मेरी अनुभूति को मै शब्दों में नहीं लिख सकता हूँ । मेरे पूरे शरीर में शीत लहर सी दौड़ने लगी और शांति का अद्धभुत अहसास हुआ । अचानक मेरी निद्रा खुली , मध्यरात्रि का समय था । आनंद की अनुभूति मै कर रहा था । पूरी रात मै सो नहीं पाया । मै अत्यधिक प्रसन्न था ।\n"+
    "जब मैने सुबह टीवी खोला , मै आश्चर्यचकित हो गया। सारे समाचार channels ये बता रहे थे कि जो महाकुंभ चल रहा है वह एक सदी में एक बार ही आता है जिससे मै पूरी तरह से अज्ञात था। ।",
},
{
  id: 22,
  header: "हनुमान जी का प्रभाव",
  question: 
    "यह एक सत्य घटना, सन् 1983-84 में उन दिनों की ह,ै जब मैं हाई-स्कूल का विद्यार्थी था । एक वैष्णव परिवार, जिनकी हमारे घर से घनिष्ठता थी । उस परिवार का मुख्यिा राज्य सरकार में सरकारी सेवक हुआ करते थे । उनकी धर्म पत्नी आध्यात्मिकता की ऊॅंची षिखर पर पहुॅंची हुई थीं । उन दिनों वे किराये के मकान पर दूसरी मंजिल पर रहा करते थे । मकान के एक कमरे में हनुमान जी को स्थान देकर उनकी नित्य पूजा, आरती, अर्चना हुआ करती थी । एक दिन मैंने देखा । उनके यहाॅं भोजन बनाने में प्रयुक्त होने वाली बड़ी, पापड़ आदि कमरे के ऊपरी छत पर सूखने के लिए बांस के बने पर्रा (बड़ी परात नुमा बांस-निर्मित) में डाले हुए थे । उनके चारों ओर बहुत सारे काले मुॅंह वाले बन्दर घेरा डाले बैठे हुए थे, कोई भी उन सामानों को क्षति नहीं पहॅंुचा रहे थे । जबकि यही सामान हमारे यहाॅं से पर्रा सहित सामान छीनकर बन्दर ले भागे थे । मेरे जीवन में यह अविष्वसनीय, किन्तु सत्य घटना है । मैं श्री हनुमान जी को सादर प्रणाम करता हॅूं । जय श्री राम ।\n"
},
{
  id: 23,
  header: "हनुमान जी की भक्ति",
  question: 
    "मेरा स्वंय का अनुभव ऐसा है कि सच्चे भक्त के साथ हनुमान जी सदा उसके साथ रहते हैँ तथा उसकी भक्ति की बाधाओँ को भी दूर करते हैँ।\n"
},
{
  id: 24,
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
  id: 25,
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
  id: 26,
  header: "1000 crore atmayein ?",
  question: 
    "kya kaliyuga ke ant mein sabhi jiv jantu ped paudhe pashu pakshi aur manav ko mila kar sirf 1000 crore atmayein bachengi ya sirf 1000 crore atmayein manav sareer ki hi btayi gayi hain to phir un atmaon ka kya hoga jo ped paudhe pashu pakshi aur banki duniya ke sabhi jiv jantu me hain......?",
  answer:
    "दिव्य आत्म स्वरुप ,\n"+
    "छठे अध्याय में केवल मानव शरीरो में फंसी आत्माओं की बात की गई है | अन्य आत्माओं के विषय में जानने के लिए आगे आने वाले अध्यायों का इन्तजार कीजिये |"
},
{
  id: 27,
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
  id: 28,
  header: "1st Birthday of son + father admitted in hospital",
  question: 
    "Dear friends \n"+
    "Tomorrow is my son's 1st birthday. \n"+
    "I want to pray to Lord Hanuman to bless him and always keep him safe. May Lord Hanuman make him a good human being who can do good to nature and its creations.\n"+
    "My father got admitted in hospital yesterday night, pray to Lord Hanuman to cure him and keep him safe.\n"+
    "Pranam."
},
{
  id: 29,
  header: "1st time my travel to Hanuman place",
  question: 
    "This happen when the first after I get matured with the way of praying to Hanuman where is started to pray when I was 6 years old and this happen when I was 17 years old.I sit on meditation in my pooja room around 2am and off all my light and put on the song decode let me make my heart strong and see him today. After some time I feel my body start to become cold and seem like I start to hear a voice say \"Ram.. Ram...\" and out of sudden a hand...A very big hand touch my shoulder. .and that's it. .The very first time I get trance and I felt it...since then the journey continue till now. .."
},
{
  id: 30,
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
  id: 31,
  header: "20 जनवरी 1985 को मेरा जन्म हुआ, और आज मेरा ३१ वा जन्मदिन है। दादी ने बोला की जन्म लेते ही मैंने जय या जय श्री राम बोला क्या यह सत्य है? यदि ऐसा है तो राम जी का अनुग्रह मेरे ऊपर कई जन्मो से है?\n",
  question: 
    "20 जनवरी 1985 को मेरा जन्म हुआ, और आज मेरा ३१ वा जन्मदिन है। दादी ने बोला की जन्म लेते ही मैंने जय या जय श्री राम बोला क्या यह सत्य है? यदि ऐसा है तो राम जी का अनुग्रह मेरे ऊपर कई जन्मो से है? \n\n"+
    "रामजी कृपा करें और मेरे प्रियजनों की जो मुझसे अपेक्षाएं हैं उनको में प्रभु आपकी कृपा से पूरी कर सकूँ,आपके सानिध्य के साथ। .... आपके चरण कमलों का आशीष लेना है प्रभु ! \n\n"+
    "।।दशरथनंदनपरमदास।।\n"+
    "।। राम ।।"
},
{
  id: 32,
  header: "अध्याय 21 के अनुसार देह में आत्मा का प्रवेश",
  question: 
    "मेरे गुरुदेव हनुमानजी को उनके श्रीचरणों में इस आत्मा का प्रणाम !! \n"+
    "सभी सेतु संतो और मतगो को भी इस आत्मा का प्रणाम स्वीकार हो !! \n"+
    "मेरे मन में 21 वा अध्याय पढने के बाद एक प्रश्न उठा है कि जब एक देह गर्भ में पल रही होती है तो उसमे क्या आत्मा का प्रवेश हो चूका होता है अगर जन्म लेने कि तुरंत बाद प्रवेश लेती है तो फिर वो देह गर्भ में हलचल केसे करती है (अल्ट्रासाउंड में ,और डाक्टरों द्वारा कम्प्यूटर निरीक्षण में हलचल का आना ) जेसे कि बताया गया है कि किसी भी देह में आत्मा नही होती है तो वो एक सास लेती हुई ( एक तरह से कोमा ) देह होती है मतलब उसका कोई मूमेंट नही होता है ! एक बार पुनः गुरुदेव और सभी संतो के श्रीचरणों में इस आत्मा का प्रणाम !!!",
  answer:
    "जब आप सो रहे होते हैं और स्वपन देख रहे होते हैं तब भी कभी कभी आपकी देह में हलचल होती है | उसी प्रकार जो आत्मा नया जीवन लेने वाली होती है , वह आत्मा स्वपनलोक में अपने पिछले जन्मों की इच्छाओं का निस्तारण कर रही होती है ( वे अटकी हुई इच्छाएं जो नया जीवन लेने में बाधा पहुंचाती हैं ) जिसके कारण कभी कभी उसकी नई विकसित हो रही देह में हलचल होती हैं |"
},
{
  id: 33,
  header: "अध्य्याय 24 को पढने के बाद ..........",
  question: 
    "गुरु हनुमानजी कि श्री चरणों में इस आत्मा का समर्पण \n"+
    "सभी सेतु संतो और मातांगो को नमन \n\n"+
    "जेसा की मेने पहले भी लिखा था और उसका उत्तर भी मिला कि मुझे दौरे पढ़ते थे और आपने मेरी प्राथना प्रभु तक पहुचाई थी उसके बाद मेरे दौरे पड़ना ना के बराबर हो गया था ......पर जब से अध्य्याय 24 को पढ़ा है ये दौरे वापस 2 दिन से चालू हो गए है और हा ये रात को सोते वक्त पड़ते है सब कुछ अजीब सा लग रहा है कभी कभी घर और आस पास कि चीजे भी अजनबी से लगती है लेकिन कुछ सेकण्ड के लिए ....हे गुरु देव कर्पा करो इन दोरो से पीछा छुड़ाओं\n"+
    "गुरुदेव व् सभी सेतु संतो और मातांगो को इस आत्मा का नमन \n"

},
{
  id: 34,
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
  id: 35,
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
  id: 36,
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
  id: 37,
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
  id: 38,
  header: "33 cores",
  question: 
    "are that 33 crores surrahs and 33 crores hindu devi devtas according to hindu vedic puran are one and the same or different thing..? and what are surrahs. enlightenment me with knowledge about surrahs",
  answer:
    "Divine Soul,\n\n"+
    "Vedas and Puranas which are available today are not the original ones. Except Upanishadas and Bhagwadgeetha part of mahabharata, most of the texts have been highly adulterated. Therefore we won't comment on anything you may have heard from those texts. Please wait for upcoming chapters to get the pure supreme knowledge from Lord Hanuman. Once you get the entire knowledge, you will get all your answers.\n\n"+
    "Blessings"
},
{
  id: 39,
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
  id: 40,
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
  id: 41,
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
  id: 42,
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
  id: 43,
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
  id: 44,
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
  id: 45,
  header: "AABHAR",
  question: 
    "Hanuman charan pooja mere anubhav pahuch rahe hein ye jankar bhut acchha laga. Lekin aapane ye nahi bataya ke hanumanji ne kya kaha. Kripa aap muze ye bataye. Meine ye adhyay padha to muze kafi halka mehasus huva.mein jab ye adhyay padhti hu to mera man ekagra ho jata hain.aur mera man mashtisk puri tarah se us ghatana per kendrit ho jata hein aur mein apane aakhon ke samane hota hua pati hu.aur padhte padhate muze wo baate bhi yaad aati hein jo meine padhi hein.e.g. tile ka rahsya aur magarmachh. Padhte hi samaz jaati hu.",
  answer:
    "दिब्य आत्मस्वरूप ,\n\n"+
    "हर अनुभव के बाद शब्दों की आवश्यकता नहीं होती | ज्यादातर हनुमान जी केवल मुस्कुराते हैं क्योंकि मुख्यधारा के भक्तों के अनुभव भावनाओं और नादानी से भरे होते हैं |\n\n"+
    "|| राम ||"
},
{
  id: 46,
  header: "AASHIRVAD",
  question: 
    "Bajrangi baba aap ki kripa hamare parivar par karo , hum sab saat rahein , mera rin jo liya hai usse mukat karo , parivar mein sabko raji khushi rakho. hamara beta videsh mein hai usko din dogani taraki do lambi aayu dena aur uski raksha karna.\n\n"+
    "Jai hanuman ji ki."
},
{
  id: 47,
  header: "AASHIRWAD",
  question: 
    "JAI SHREE RAM\n"+
    "meri ek beti hai. Meri wife aisi problem se ghiri hai Ki Dr. Ne bola hai Ki an usko bachha nahi hoga. Hum chahtey hai Ki hum logo ko hanuman ji kripa Kr k ek gunvan putra de. Hum hanuman ji ki krippa pane ko lalayit jai ...kripya Marg Darshan karey ..."
},
{
  id: 48,
  header: "Aasurah se kaise bache",
  question: 
    "Continued from # 499695\n\n"+
    "Aasurah se koi v kaise Bach skta h ...mai jaanti Hu Ki iss kalyog m aasurah se Bach pana bahut mushkil h pr fir v hamesha hmlog aasurah ko apne upper hawi toh nai hone de sakte h n.... Aur kaun sa kaam surah ne kiya h aur kaun sa kaam hamne khud kiya h wo kaise pahchan skte h ...\n\n",
  answer:
    "यह तो आप आत्मज्ञान से ही पहचान सकते हैं कि कोई कार्य सुर-असुरों ने किया है या स्वयं आपने | असुरो को भगाने के लिए अपने कर्म सात्विक करें ताकि सुर आपकी देह-मन में आयें और असुर उन सुरों को देखकर भाग जाएँ | असुर भागने के बाद आप सुरों से आसानी से निजात पा सकती हैं |"
},
{
  id: 49,
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
  id: 50,
  header: "AATMA GAYAN",
  question: 
    "HEY BAJRANGBALI MAI ISH JIVAN ME SARE UNEDUCATED LOGO KO AAP K OR BHAGWAN RAM K BARE ME BATANA CHAHTA HOON. JAISE HUM KAHA SE AAYE, HUME KYA KARNA CHAHIYE, BHAGWAN KI PRAPTI KAISE HOTI HAI. MUJHE IN SAB KA GAYAN DIJIYE BHAGWAN OR TAKAT , TAKI MAI ISH SANDESH KO HAR LOGO TAK PAHUCHA SAKU OR SAB K JIVAN K DUKH OR DARD KA NIWARAN KAR SAKU. JAI SHRI RAM ,. JAI BAJRANJBALI."
},
{
  id: 51,
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
  id: 52,
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
  id: 53,
  header: "About the chapter 8",
  question: 
    "Hello my dear brothers and sisters of setuu community,\n"+
    "In chapter 8, Setuu organisation gave a note saying only blessed souls can understand it. Dont doubt yourself here. Coming to know this organisation itself is a blessing. JUST HAVE FAITH ON LORD HANUMAN. U WILL UNDERSTAND IT. If you didnt understand any part, patiently read it from beginning. I was afraid to read it. But somehow i read it today. This was my experience.\n"+
    "Caution: Dont read after u indulged in any worldy activity. Your chances to understand the chapter will decrease.\n"+
    "I hope i did not hurt the organisation. If i did so please delete this entry."
  },
  {
  id: 54,
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
  id: 55,
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
  id: 56,
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
  id: 57,
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
  id: 58,
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
  id: 59,
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
  id: 60,
  header: "About Me",
  question: 
    "jai shree ram . Main apni kam- vasna yukt bhavnao pr control krna chahta hu. pr kr nhi pata hu . Real m main yog vidhya seekhna chahta hu but apni maa aur papa ko hurt b nhi krna chahta. Main koan hu , m mera man nhi hu , m apni budhi nhi hu, m meri aatma nhi hu, m mera shareer nhi hu , to fir m koan hu, kripa kr k margdashan kare.\n"
  },
    {
  id: 61,
  header: "About my experience",
  question: 
    "after i was started to reading HANUMAN CHALIS , i observed somone is protecting from the evil things .. And inwas introduced abt sethu hanuman from my friend.. And i feeling now is something inner story about life cycle And immortal power , about lokha s and the future happenings .. I wish to ask with my lord to fullfilled my dreams and do protect from asshuras and evil happenings , and take my soul for moksha .. Thanking you and ji hanuman"
  },
    {
  id: 62,
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
  id: 63,
  header: "About my mother",
  question: 
    "I do pray god every day but my mother health is not well from so many years, sometimes she feel good sometimes she feel that someone is talking to her and she see someone present in her room, but know one present there, she scold bad words taken the names of our relatives so please tell me what is the solution for this , and also we taken her to doctor psychairtist he told she his suffering with the rare disease so plz tell me any solution for this problem to totally get well .\n",
    answer:
    "--- conveyed to Lord ---"
  },
  {
  id: 64,
  header: "about my sister",
  question: 
    "sir,\n"+
    "my sister is mentally retarded she will also get seizures regularly.after reading the chapter of urmi's cure of seizure, i m also thinking dat might be the cause of my sister (i.e unfullfilled desires) .but my sis can understand all what we are saying.but shez having afraidness to talk and walk.\n\n"+
    "can she get cured????",
  answer:
    "Divine Soul, A prayer has been initiated. She will be cured if the Karmas allow. The minimum requirement for Ashwins to visit her is that people around her should stop cursing themselves or her. Her soul has taken this body-mind for a purpose. All of your family members must realize that. That purpose is not only related to her soul journey but also related to soul journey of some or all of your family members. Stop cursing and allow Ashwins to visit her. Do not take her to charlatans etc who claim to have a miraculous remedy. Let her soul fulfill the purpose of taking this body-mind. Blessings"
  },
  {
  id: 65,
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
  id: 66,
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
  id: 67,
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
  id: 68,
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
  id: 69,
  header: "Aditya Kumar",
  question: 
    "my lords hanumaan ji hai aur mujhe har pal hanumaan ji ki kripa mahsus hoti hai aur ye main apne aap ko khusnasib manta hu\n"
  },
    {
  id: 70,
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
  id: 71,
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
  id: 72,
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
  id: 73,
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
  id: 74,
  header: "All about devotions and Love to God, Ishwar, Prabhu Shri Ram",
  question: 
    "dear Prabhudhhas\n\n"+
    "very first it is a Nobel way to pray, worship Lord Shri Hanuman. and feeling grateful of being a reader of this unique way to do pray and worship.\n"+
    "I am feeling fearless comparatively."
  },
    {
  id: 75,
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
