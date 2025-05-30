import React, { useState } from 'react';
import './Sadhna.css';

const Sadhna = () => {
  const [language, setLanguage] = useState('en');

  const isHindi = language === 'hi';

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  return (<>
    <div className='Sadhna-container'>
      <img src="/Hanumandal.jpg" alt="Hanumandal" />
      <h1>
        {isHindi
          ? "सेतू हनुमान बोधि में साधना कार्यक्रम में कौन शामिल हो सकता है"
          : "Who can join Sadhana program at Setuu Hanuman Bodhi"}
      </h1>
      <h4>
        {isHindi
          ? "सेतू हनुमान बोधि में साधक - 29 नवंबर, 2015"
          : "Sadhaka at Setu Hanuman Bodhi - November 29, 2015"}
      </h4>

      <h5>
        {isHindi
          ? "हनुमान जी अमर हैं। वे आज भी उसी संसार में निवास करते हैं जिसमें हम रहते हैं। बस अंतर इतना है कि अधिकांश मनुष्य शरीर और मन के स्थूल क्षेत्र में रहते हैं, जबकि हनुमान जी आत्मा के सूक्ष्म क्षेत्र में निवास करते हैं। हनुमान जी से मिलने के लिए, एक सामान्य मानव को स्थूल क्षेत्र से उठकर योगियों के सूक्ष्म क्षेत्र में प्रवेश करना होता है। साधना या ध्यान ही इसका एकमात्र उपाय है। सेतू आपको सेतू हनुमान बोधि में सेतू मास्टर्स के मार्गदर्शन में साधना करने का अवसर प्रदान करता है।"
          : "Lord Hanuman is immortal. He still lives in the very world where we live. The only difference is that most human beings live in the Gross realm of body-mind while Lord Hanuman lives in the subtle realm of soul. In order to meet Lord Hanuman, one must transcend from gross realm of ordinary humans to the subtle realm of Yogis. Sadhana or meditation is the only way to do that. Setuu gives you an opportunity to do Sadhana under guidance of Setuu Masters at Setuu Hanuman Bodhi."}
      </h5>

      {/* Add other content similarly with translations... */}
      {/* Below is a sample of how you can structure each block: */}
      <h4>
        <span>
          {isHindi ? "आप इस साधना कार्यक्रम में शामिल हो सकते हैं यदि:" : "You can join the Sadhana program if:"}
        </span>
      </h4>

      <h5>
        {isHindi
          ? "(1) आपके पास तत्काल कोई पारिवारिक जिम्मेदारी नहीं है और आप 1 वर्ष तक परिवार और समाज से पूरी तरह से अलग रह सकते हैं।"
          : "(1) You have no immediate family responsibilities and you can remain completely disconnected from your family and society for at least 1 year."}
      </h5>
      <h5>
        {isHindi
          ? "(2) आप एक सादा (मिनिमलिस्ट) जीवनशैली का पालन करते हों। मोबाइल फोन, कैमरा जैसी मानव निर्मित मशीनें सेतू हनुमान बोधि में सख्त रूप से वर्जित हैं। ये मशीनें हमें स्थूल वास्तविकता में उलझाए रखती हैं। इसलिए, साधना के दौरान इन्हें पूरी तरह से त्यागना आवश्यक होता है। साथ ही, भोजन मुख्यतः फल और कच्ची सब्ज़ियों का ही होगा। यदि आपकी कोई ऐसी चिकित्सीय स्थिति है जिसमें जटिल खानपान की आवश्यकता हो, तो आप इस साधना के लिए उपयुक्त नहीं माने जाएंगे। आप आरामदायक वस्त्र पहन सकते हैं, लेकिन वे पूरी तरह से सफेद और साधारण होने चाहिए।"
          : "(2) You follow a minimalist lifestyle. Man-made machines like mobile phones, camera etc. are strictly prohibited at Setuu Hanuman Bodhi. These machines keep us indulged in gross reality. Therefore, it is necessary to abandon them completely during Sadhana. Furthermore, the food will be mostly fruits and raw vegetables. You should not have any medical condition which requires you to have complex food habits. You can wear comfortable clothes but they should be completely white and simple."}
      </h5>
      <h5>
        {isHindi
          ? "(3) आपका भगवान हनुमान से गहरा आत्मिक संबंध होना चाहिए। यदि आपने कभी स्वप्नलोक (सपनों) या मानवलोक (जाग्रत अवस्था) में भगवान हनुमान से संवाद किया है और उन्होंने आपको अपने पास आने का निर्देश दिया है, तो यह आपके आत्मिक संबंध की प्रबलता को दर्शाता है — और आप साधना के पात्र हो सकते हैं।"
          : "(3) You have a deep soul connection with Lord Hanuman. If you have ever spoken with Lord Hanuman – in SwapanLoka (dreams) or in MaanavLoka (human world) – and Lord Hanuman has instructed you to come to Him, then your soul connection with Him is strong and you may be eligible for Sadhana."}
      </h5>
      <h5>
        {isHindi
          ? "(4) आपको अंधकार या अलौकिक चीज़ों से कोई भय नहीं होना चाहिए। साधना के पहले दिन से ही आपको अलौकिक अनुभव होंगे। आप ऐसी चीज़ें देखेंगे जो सामान्य स्थूल जगत में दिखाई नहीं देतीं। उदाहरण के लिए, सूक्ष्म लोक में आपको अदृश्य शक्तियाँ जैसे सुर्राह और असुर्राह दिखाई देंगी। सुर्राह सकारात्मक शक्तियाँ होती हैं और असुर्राह नकारात्मक। ये शक्तियाँ आपके शरीर और मन पर नियंत्रण पा सकती हैं आप सभी दिव्य क्रियाएं सेतू मास्टर्स के मार्गदर्शन में करेंगे, इसलिए कोई भी शक्ति आपके शरीर या मन को नुकसान नहीं पहुँचा पाएगी। लेकिन आपका मानसिक संतुलन पूरी तरह स्थिर और भयमुक्त होना आवश्यक है यह जानने के लिए कि आप इस योग्यता को पूरा करते हैं या नहीं, नीचे दी गई तस्वीर को ध्यान से देखें। यह तस्वीर एक अज्ञानी साधक द्वारा चुपके से ली गई थी। इसमें आप असुर्राहों को हनुमंडल की ओर जाते हुए देख सकते हैं। यदि इस चित्र को देखने पर आपको जरा-सा भी डर महसूस नहीं होता, तो आप साधना के योग्य हो सकते हैं।"
          : "(4) You have no phobia from darkness and out-of-the-world things. You shall have out-of-the-world experiences from day 1 in Sadhana. You will see things which we do not usually see in the gross realm. For example, in subtle realm, you will see invisible powers like Surrahs and Asurrahs. Surrahs are positive powers and Asurrahs are negative. They can take control of your body and mind. You will do all divine activities under guidance of Setuu Masters. Therefore, no power shall harm your body-mind. But you should have a sound psyche, free from any phobia. To know whether you meet this requirement or not, look at the picture below. This was clicked by an ignorant Sadhaka secretly. You can see Asurrahs going towards the HanuMandal in this picture. If you do not feel even slightest of fear while looking at this picture, you may be eligible for the Sadhana."}
      </h5>
      {/* Repeat above structure for all text content... */}
      <img src='/Suras.jpg' alt='SURAS' />
      {/* Final Translate Button */}
      <h5>
        {isHindi
          ? "(5) आप पर्वतीय जीवनशैली को अपनाने में सक्षम हों। सेतू हनुमान बोधि श्रीलंका के पिदुरु पर्वतों में स्थित है, जो मंदारम नुवारा गाँव से 4 किलोमीटर ऊपर है। यहाँ के जीवन में प्राकृतिक कठिनाइयाँ हैं और आपको पर्वतों में चलने की आदत होनी चाहिए। आपको बोधि और गाँव के बीच ऊपर-नीचे आना-जाना पड़ेगा, विशेषकर सेतू से जुड़ी गतिविधियों के लिए — जैसे कि गाँव से बोधि तक अर्पणम फल लाने में स्वयंसेवा करना। इसलिए, शारीरिक रूप से सक्षम होना और पर्वतीय जीवनशैली को सहजता से स्वीकार करना इस साधना के लिए अनिवार्य है।"
          : "(5) You can adapt to lifestyle of mountains. Setuu Hanuman Bodhi is located in Piduru mountains 4 km above Mandaram Nuwara village. You will be required to do up-down from the Bodhi and the village for activities related to Setuu, for example to volunteer in bringing Arpanam fruits from the village to Bodhi."}
      </h5>
      <img src='/PidiruMountain.jpg' alt='Piduru Mountain' />
      <h5><strong>
        {isHindi
          ? " एक वर्ष की साधना से आप क्या अपेक्षा कर सकते हैं?"
          : " What can you expect from 1 year of Sadhana?"}
          </strong>
      </h5>
      <h5>
        {isHindi
          ? " 6 महीनों की साधना के पश्चात, जब आपका ‘अहं भाव’ पूरी तरह से समाप्त हो जाता है, तो आपको साक्षात हनुमान पूजा में भाग लेने की अनुमति दी जाती है। इस पूजा में, भगवान हनुमान स्वयं दिव्य दर्शन देते हैं — यह दर्शन हनुमंडल के भीतर होते हैं। हनुमंडल वह पवित्र क्षेत्र है, जो विशेष दीपों के वृत्त से बनाया जाता है, जिसके भीतर पूजा सम्पन्न की जाती है। भगवान हनुमान अपने देहधारी रूप में चरण पूजा में प्रकट होते हैं, जो प्रत्येक 41 वर्षों में एक बार मथंगों द्वारा की जाती है। चरण पूजा और साक्षात हनुमान पूजा में अंतर है। साक्षात हनुमान पूजा में, भगवान हनुमान अपने दिव्य रूप में प्रकट होते हैं। यह पूजा निरंतर होती रहती है, क्योंकि इसका उद्देश्य है — भगवान कल्कि के जन्म के रहस्योद्घाटन की प्रतीक्षा। यह पूजा एक अत्यंत दुर्लभ और पवित्र अनुभव है, जहाँ साधक को भगवान हनुमान के दिव्य रूप का साक्षात अनुभव होता है।"
          : " After 6 months of Sadhana, when your ‘sense of I’ is completely dissolved, you will be allowed to take part in Sakshat Hanuman Pooja. In this Pooja, Lord Hanuman gives His Divya Darshan inside the HanuMandal. HanuMandal is the sphere of purity created by drawing circle of special lamps in order to perform the Pooja inside it. Lord Hanuman comes in His body form in Charan Pooja which is performed every 41 years by Mathangs. Charan Pooja is different from Sakshat Hanuman Pooja. Lord Hanuman comes in His Divya form in Sakshat Hanuman Pooja which is being performed continuously in expectation of revelation of Lord Kalki’s birth."}
      </h5>
      <h5>
        {isHindi
          ? "एक वर्ष की साधना पूर्ण होने के पश्चात आपके सामने तीन विकल्प होंगे: (1) आप अपने दैनिक जीवन में लौट सकते हैं और भौतिक संसार में उत्कृष्टता प्राप्त कर सकते हैं। (2) आप संसार में लौटकर, भगवान हनुमान के संदेशवाहक के रूप में, इस परम ज्ञान का प्रचार कर सकते हैं। (3) आप सेतू के संगठन का हिस्सा बन सकते हैं और सेतू हनुमान बोधि में रहकर साधना को आगे बढ़ा सकते हैं। इन तीनों में से आप उस मार्ग का चयन कर सकते हैं, जो आपके आत्मिक विकास और आंतरिक आह्वान के अनुरूप हो।"
          : "After 1 year of Sadhana is completed you will have three options: (1) You can go back to your day-to-day life and excel in materialistic world. (2) Go back to the world and spread the supreme knowledge as a messenger of Lord Hanuman. (3) Join Setuu as an organizational member and stay at Setuu Hanuman Bodhi thereby continuing your Sadhana further."}
      </h5>
      <h5>
        {isHindi
          ? "यदि आप इस 1 वर्षीय साधना कार्यक्रम से जुड़ना चाहते हैं, तो www.setuu.org पर जाएँ और लॉगिन करें। इसके बाद अपने प्रोफ़ाइल के “My Experiences” सेक्शन में जाकर साधना हेतु अपना अनुरोध लिखें। इसमें निम्नलिखित बातों को विस्तार से लिखना आवश्यक है: (1) आपका पारिवारिक और भौतिक (स्थूल) संसार का परिचय: आपका परिवार, शिक्षा, कार्य, सामाजिक जीवन, और अब तक का सांसारिक अनुभव क्या रहा है। (2) आपका आध्यात्मिक परिचय: आपकी आत्मा का भगवान हनुमान से कब और कैसे संबंध जुड़ा। अब तक भगवान हनुमान से आपको क्या अनुभव और संवाद प्राप्त हुए हैं। समय के साथ आपकी भक्ति में कैसे विकास हुआ है। (3) भगवान हनुमान की लीलाओं के अध्यायों का सार: setuu.org पर प्रकाशित भगवान हनुमान की लीलाओं के अध्याय आपने किस प्रकार से आत्मसात किए हैं। आपने उन अध्यायों से क्या सीखा और क्या असीखा (unlearn)। आप अपने स्वयं के शब्दों में इसका सार लेख रूप में प्रस्तुत करें। यह विवरण ईमानदारी और आत्मचिंतन के साथ लिखा जाना चाहिए ताकि सेतू मास्टर्स आपके साधना हेतु पात्रता का मूल्यांकन कर सकें।"
          : "If you want to join this 1 year Sadhana program, go to www.setuu.org and login. Then go to “My Experiences” section of your profile and write your request for Sadhana. You should write the following in detail: (1) Your family background and your profile of the gross (physical) world. (2) Your spiritual background: like, when your soul got connected to Lord Hanuman and what interactions you have had with Lord Hanuman so far. How have you evolved in Bhakti of Lord Hanuman with time. (3) Write summary of the chapters of Lord Hanuman’s Leelas published at setuu.org . What have you learned/unlearned from these chapters so far. Write in your own words."}
      </h5>
      <h5>
        {isHindi
          ? "जब आपकी साधना के लिए आवेदन सेतू मास्टर्स द्वारा स्वीकार कर लिया जाएगा, तो सेतू हनुमान बोधि के किसी साधक आपसे संपर्क करेंगे ताकि बाकी औपचारिकताएँ पूरी की जा सकें।"
          : "Once your application of Sadhana is accepted by Setuu Masters, one of the Sadhakas from Setuu Hanuman Bodhi shall get in touch with you to complete other formalities."}
      </h5>
      <h5><strong>
        {isHindi
          ? "|| राम ||"
          : "|| Ram ||"}
      </strong>
      </h5>
    </div>
        <button onClick={toggleLanguage} className='translate-button'>
        {isHindi ? "Translate to English" : "Translate to Hindi"}
      </button>
    </>
  );
};

export default Sadhna;
