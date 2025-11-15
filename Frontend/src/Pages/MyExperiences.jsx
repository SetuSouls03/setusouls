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
