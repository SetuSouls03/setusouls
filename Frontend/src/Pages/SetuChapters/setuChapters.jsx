import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SetuChapters.css";

const chaptersEnglish = [
  { title: "Chapter 1: The immortal Lord Hanuman arrives", link: "https://drive.google.com/file/d/1q6mAWydvLV3s35ovviZC3fR0LtVfDT9Y/view?usp=drive_link" },
  { title: "Chapter 2: Hunting Honey with the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1KQQ8y7nucxl6TYxFj5P855sskS_rqW3E/view?usp=drive_link" },
  { title: "Chapter 3: The immortal Lord Hanuman in the web of Time", link: "https://drive.google.com/file/d/1l4RygkPbR2eoNsiJJvyqiwTmYnhN7iyQ/view?usp=drive_link" },
  { title: "Chapter 4: The immortal Lord Hanuman's visit to Vishnu Loka", link: "https://drive.google.com/file/d/1UYAsyKicUWD-xaPegKy8sg1zbHaRuKrh/view?usp=drive_link" },
  { title: "Chapter 5: The immortal Lord Hanuman teaches how to fly out of body", link: "https://drive.google.com/file/d/1zRkt6zAyN0xP-d0Ei0f-GpCoJDBQfO6C/view?usp=drive_link" },
  { title: "Chapter 6: The history and mystery of 33 Crore Surrahs revealed by the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1PiZzPRHLWtvEU8GJNRB2lmjNGhtuTint/view?usp=drive_link" },
  { title: "Chapter 7: Is that the Sun or a fruit? Reveals the immortal Lord Hanuman", link: "https://drive.google.com/file/d/16oc4qGnGEyy341capbP3gWF2JXjE54vc/view?usp=drive_link" },
  { title: "Chapter 8: Makardhwaja was not His son, reveals the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1KxG1DJHDUtCucOlAIN9MfOsXw6AghCg1/view?usp=drive_link" },
  { title: "Chapter 9: Secret of RamaSetu revealed by the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1fOMyUrlHVNImqSO87tM0c6vJpHN0qUIB/view?usp=drive_link" },
  { title: "Chapter 10: The secret of Existence: how a woman can give birth to as many as 60,000 children", link: "https://drive.google.com/file/d/1hjlV9USvmwuUmbH-GVgaO7i7M0s0PF91/view?usp=drive_link" },
  { title: "Chapter 11: The secret of desire fulfilment revealed by the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1P00a-2rGOP84kvDD0RzGdBFv9WsoPHlK/view?usp=drive_link" },
  { title: "Chapter 12: Descent of Goddess Ganga to the MaanavLoka", link: "https://drive.google.com/file/d/1sKjUfO6eqe1SWb3Mlskj_K_5ONgFob0u/view?usp=drive_link" },
  { title: "Chapter 13: The immortal Lord Hanuman reveals secret of Shiv Linga and the idol of Tirupathi", link: "https://drive.google.com/file/d/1Kh6cATgxPmnVA6OZ1-ALuw0Nn9DPsVXA/view?usp=drive_link" },
  { title: "Chapter 14: What is reality? The immortal Lord Hanuman explores", link: "https://drive.google.com/file/d/1kvqYqmIYL0RedPCb7oK5O-ciaZHOnwl8/view?usp=drive_link" },
  { title: "Chapter 15: Lord Krishna's point of view of Krishna-Sudama Leela (The secret of relativity)", link: "https://drive.google.com/file/d/1QPEoAys475aPxQLIKMWMo9ZfVRSnqt7D/view?usp=drive_link" },
  { title: "Chapter 16: Birth of Lord Ram in Maanavloka", link: "https://drive.google.com/file/d/1McE7_t5q8C1cczQbnqrBTAhgPI1ZmUmb/view?usp=drive_link" },
  { title: "Chapter 17: Story of Devi Renuka (Yellamma)", link: "https://drive.google.com/file/d/1RkKGGhz0hC3c5XhYe-miH0xORqkzRpXN/view?usp=drive_link" },
  { title: "Chapter 18: Rise of Vishwamitra and Trishanku's Universe", link: "https://drive.google.com/file/d/1FKZKpP2MN6Ev6YCDdSPrM6EaChEMJcgt/view?usp=drive_link" },
  { title: "Chapter 19: King Harishchandra and the Moksha Yajna", link: "https://drive.google.com/file/d/13dpSUDpcYqt7SIhrAOha74fE-tueAKNb/view?usp=drive_link" },
  { title: "Chapter 20: Shiva Yoga by young Lord Ram", link: "https://drive.google.com/file/d/1_Ec_4XY1dYqw9nppEtOUkrzP1DtDX9Az/view?usp=drive_link" },
  { title: "Chapter 21: Sacrifices of Devi Lakshmi in her Sita avatar", link: "https://drive.google.com/file/d/1Akzfbt53OKhahNlbcVb3npwRXNAlmiSu/view?usp=drive_link" },
  { title: "Chapter 22: Story of Ahalya told by the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1XR1ieYwXKQeKqsKreSj7p8EHUmO0_jOX/view?usp=drive_link" },
  { title: "Chapter 23: The immortal Lord Hanuman talks about the marriage of Lord Ram and Devi Sita", link: "https://drive.google.com/file/d/1iwmB0wGx-7oMW6JCJHR_lmyAwNTVvf1w/view?usp=drive_link" },
  { title: "Chapter 24: Battle against Maya – Knowledge of Karma, Destiny, and Freewill", link: "https://drive.google.com/file/d/1kRc1MyDUSo2o3CoC5acRZ8uPSPzagHju/view?usp=drive_link" },
  { title: "Chapter 25: Story of Ahalya told by the immortal Lord Hanuman", link: "https://drive.google.com/file/d/1c3rb8BO9mbM50jaN3W0kVCzYoKAPE4LA/view?usp=drive_link" },
  { title: "Chapter 26: The immortal Lord Hanuman talks about the marriage of Lord Ram and Devi Sita", link: "https://drive.google.com/file/d/1_L37ToFBEzEQSKkuesoGfOUwUiAo6gZS/view?usp=drive_link" },
  { title: "Chapter 27: Battle against Maya – Knowledge of Karma, Destiny, and Freewill", link: "https://drive.google.com/file/d/1_L37ToFBEzEQSKkuesoGfOUwUiAo6gZS/view?usp=drive_link" },
];
const chaptersHindi = [
  { title: "अध्याय १: चिरंजीवी हनुमान जी का आगमन", link: "https://drive.google.com/file/d/11twWKMRyOW0TrMkHFu-lmLAxd8UfXjdf/view?usp=drive_link" },
  { title: "अध्याय २: श्री हनुमान जी के साथ शहद की खोज", link: "https://drive.google.com/file/d/11mTwh5-J7yq2ywQAuL1W453GsIWgEDfc/view?usp=drive_link" },
  { title: "अध्याय ३: काल के जाल में चिरंजीवी हनुमान", link: "https://drive.google.com/file/d/12Xp_71T31VDNUZnRvpd7IyFsT3Yo_qIw/view?usp=drive_link" },
  { title: "अध्याय ४: चिरंजीवी श्री हनुमान की विष्णुलोक यात्रा", link: "https://drive.google.com/file/d/13WFMCBbJCFqIDZfmxdFeoM7pqPDGh0gV/view?usp=drive_link" },
  { title: "अध्याय ५: चिरंजीवी हनुमान ने सिखाया देह से बाहर निकलकर उड़ना", link: "https://drive.google.com/file/d/12q8wFkR0XBa47Q9o2eH_PhAXUvtEyR6h/view?usp=drive_link" },
  { title: "अध्याय ६: 33 करोड़ ‘सुरों’ का रहस्य और इतिहास खोला चिरंजीवी हनुमान जी ने", link: "https://drive.google.com/file/d/12iHKe-c0rwf2VaZN49FzXuT5FNmHu9dr/view?usp=drive_link" },
  { title: "अध्याय ७: वह फल है अथवा सूर्य? चिरंजीवी हनुमान जी ने खोला राज", link: "https://drive.google.com/file/d/12WF7rRM6is8mYmy4-3oxWF3mc1IuBoFo/view?usp=drive_link" },
  { title: "अध्याय ८: मकरध्वज उनके पुत्र नहीं थे, चिरंजीवी हनुमान जी ने किया खुलासा", link: "https://drive.google.com/file/d/13QCdeJUsIqROqGjKG75j5cAxUQnjEOoU/view?usp=drive_link" },
  { title: "अध्याय ९: रामसेतु का भेद खोला चिरंजीवी हनुमान जी ने", link: "https://drive.google.com/file/d/12q-7h05HaFoFvzaGy7qKpIHrtcliCeI0/view?usp=drive_link" },
  { title: "अध्याय १०: अस्तित्व का रहस्य — कैसे एक औरत आध्यात्मिक रूप से 60000 बच्चों को जन्म दे सकती है।", link: "https://drive.google.com/file/d/11hrOkBfgcq6eg1cIVfh9RbUMY67fZv5x/view?usp=drive_link" },
  { title: "अध्याय ११: इच्छा पूर्ति का रहस्य खोला चिरंजीवी हनुमान जी ने", link: "https://drive.google.com/file/d/12wbxE7hbxk3vXpgrDYkHr0g-5IRcRJog/view?usp=drive_link" },
  { title: "अध्याय १२: देवी गंगा का मानव लोक में अवतरण", link: "https://drive.google.com/file/d/11lBWChEpu0g97F1PHzB1Y-88kvlHk-Vi/view?usp=drive_link" },
  { title: "अध्याय १३: चिरंजीवी हनुमान जी ने बताया शिवलिंग और तिरुपति की मूर्ति का रहस्य", link:"https://drive.google.com/file/d/12mmGvIi2ZIAvOwF_m21zclQOXHFp_kRp/view?usp=drive_link" },
  { title: "अध्याय १४: वास्तविकता क्या होती है, श्री हनुमान जी ने अन्वेषण किया", link: "https://drive.google.com/file/d/126KSCo5qQH7gyP4khSDP38fHUypwoQvg/view?usp=drive_link" },
  { title: "अध्याय १५: कृष्ण-सुदामा की लीला भगवान कृष्ण के दृष्टिकोण से (संपर्कता का रहस्य)", link: "https://drive.google.com/file/d/12DFhfUwbfVJD64U9ZabS4oVUGU0JYbP-/view?usp=drive_link" },
  { title: "अध्याय १६: भगवान राम का मानव लोक में जन्म", link: "https://drive.google.com/file/d/12Telsm5oLZMSoM_KVfdem6sBkZr3gITS/view?usp=drive_link" },
  { title: "अध्याय १७: देवी रेणुका (येलम्मा) की पूर्ण कथा", link: "https://drive.google.com/file/d/12oZ8e2IC8SQHNqqkU3p2UVT9E0WRhmAy/view?usp=drive_link" },
  { title: "अध्याय १८: ऋषि विश्वामित्र और त्रिशंकु का उदय", link: "https://drive.google.com/file/d/12iTvAAz6BHIhSTzyWGrgh3TLowoK39lt/view?usp=drive_link" },
  { title: "अध्याय १९: राजा हरिश्चंद्र और मोक्ष यज्ञ के बारे में व्याख्यान", link: "https://drive.google.com/file/d/12YHOKZX3NMxDq0vRvKufibTBgHACRd5a/view?usp=drive_link" },
  { title: "अध्याय २०: युवा प्रभु राम का ताड़का के जंगल में शिव योग", link: "https://drive.google.com/file/d/12YHOKZX3NMxDq0vRvKufibTBgHACRd5a/view?usp=drive_link" },
  { title: "अध्याय २१: देवी लक्ष्मी के माता सीता अवतार में किए गए बलिदान", link: "https://drive.google.com/file/d/12jPf99F4gsqVlTWsRh9FBbWkWzM5L-ia/view?usp=drive_link" },
  { title: "अध्याय २२: चिरंजीवी हनुमान जी ने सुनाई माता अहिल्या की कथा", link: "https://drive.google.com/file/d/133IhNCmBc-5ivx3mCh2XnxwxZ5nBWQxw/view?usp=drive_link" },
  { title: "अध्याय २३: चिरंजीवी हनुमान जी का प्रभु राम और माता सीता के विवाह के बारे में व्याख्यान", link: "https://drive.google.com/file/d/13ZtfMpUmLSUeusYWRf4fvE2zZ4g6zC2c/view?usp=drive_link" },
  { title: "अध्याय २४: माया के साथ युद्ध — कर्म, भाग्य, स्वेच्छा और आत्मलोक का ब्रह्मज्ञान", link: "https://drive.google.com/file/d/12ZXl_lpfuxEDwSrHIDOOFLO6ckfT0o57/view?usp=drive_link" },
  { title: "अध्याय २५: जब असुर अयोध्या के महल में घुसे", link: "https://drive.google.com/file/d/13MLAwnUZd27Ey_0vuUMB5vyn58q-maYU/view?usp=drive_link" },
  { title: "अध्याय २६: जब भगवान राम ने युद्ध जीतने के लिए एक लड़ाई हारी", link: "https://drive.google.com/file/d/12PvFzxqcg6gMK2WoxJGr07cdLs3nBtTw/view?usp=drive_link" },
  { title: "अध्याय २७: प्रभु श्रीराम की अयोध्या लीला का वर्णन", link: "https://drive.google.com/file/d/13YyNXsA35Db-mmecQphaXrxcUdmoTYL2/view?usp=drive_link" },
  { title: "पिज़्ज़ा डिलीवरी के माध्यम से देवताओं ने कैसे एक भक्त के कर्मों का प्रतिसंतुलन किया", link: "https://drive.google.com/file/d/13f92DzIHJbEPrXLNzNkoIYj1bR0C9yK7/view?usp=drive_link"},
];

const SetuChapters = () => {
  const [language, setLanguage] = useState("english");

  const chapters = language === "english" ? chaptersEnglish : chaptersHindi;
  const heading = language === "english" ? "Setu Chapters" : "सेतु के अध्याय";

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "hindi" : "english"));
  };

  return (
    <>
      <div className="novel-index-wrapper">
      <h1 className="novel-index-title">{heading}</h1>
      <div className="chapter-list">
        {chapters.map((chapter, index) => (
          <motion.div
            className="chapter-item"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a href={chapter.link} className="chapter-title" rel="noopener noreferrer">
              {chapter.title}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="language-toggle">
        <button onClick={toggleLanguage}>
          Translate to {language === "english" ? "Hindi" : "English"}
        </button>
      </div>
    </>
  );
};

export default SetuChapters;
