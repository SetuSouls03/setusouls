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
  const itemsPerPage = 10;
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
