import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay" />

      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="title"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          style={{textAlign:'center'}}
        >
          ॐ चिरंजीवी हनुमते नमः
        </motion.h1>

        <h2 className="subtitle">SetuSouls - A Devotion to Lord Hanuman</h2>

        <section className="setu-info">
  <div className="info-block">
    <p>
      Connect with the hills of <strong>Seetha Eliya (Sri Lanka)</strong> where Lord Hanuman in His immortal bodily form still lives with His Mathangs and Monkeys.
    </p>
    <p className="hindi">
      सीता एलिया (श्री लंका) की उन पहाड़ियों से जुड़ें जहाँ हनुमान जी आज भी अपने चिरंजीवी शारीरिक रूप में अपने मातंग और वानरो के साथ रहते हैं।
    </p>
  </div>

  <div className="info-block">
    <p>
      Mathang is a tribe of around 50 people who are in direct service of Lord Hanuman. SetuSouls builds the communication bridge between the modern world and the Mathangs.
    </p>
    <p className="hindi">
      मातंग एक 50 लोगों की जनजाति है जो हनुमान जी की सेवा में निरंतर लगे हुए हैं। सेतु मथांग और आधुनिक दुनिया के बीच संवाद का सेतु बना है।
    </p>
  </div>

  <div className="info-block">
    <p>
      Mathangs worship their deity (Immortal Hanuman Ji) for other souls in their own way. Through Setu Souls you can also learn how to do Hanuman Charan Pooja by yourself.
    </p>
    <p className="hindi">
      मातंग लोग दूसरी आत्माओं के लिए अपने भगवान श्री हनुमान के चरणों में विचित्र तरीके से पूजा कर सकते हैं। सेतु के माध्यम से आप भी अपने लिए वह पूजा करनी सीख सकते है।
    </p>
  </div>
</section>


        <section className="mantra-section">
          <h2 className="mantra-title">
            Divine Mantra of Lord Hanuman
          </h2>

          <div className="mantra-block">
            <p className="sanskrit">
              शान्तं शाश्वतमप्रमेयमनघं निर्वाणशान्तिप्रदं<br />
              ब्रह्माशम्भुफणीन्द्रसेव्यमनिशं वेदान्तवेद्यं विभुम्<br />
              रामाख्यं जगदीश्वरं सुरगुरुं मायामनुष्यं हरिं<br />
              वन्देऽहं करुणाकरं रघुवरं भूपालचूड़ामणिम् ॥१॥
            </p>
            <p className="meaning">
              <strong>Meaning:</strong> I adore the Lord of the universe bearing the name of Rama, the Chief of Raghu's line and the crest-jewel of kings, the mine of compassion, the dispeller of all sins, appearing in human form through His Maya (deluding potency), the greatest of all gods, knowable through Vedanta (the Upanisads), constantly worshipped by Brahma (the Creator), Sambhu (Lord Siva) and Sesa (the serpent-god), the bestower of supreme peace in the form of final beatitude, placid, eternal, beyond the ordinary means of cognition, sinless and all-pervading.
            </p>
          </div>
          <div className="imp-notes">Realise The Amsha Of Raam In You.</div>
          <div className="mantra-block">
            <p className="sanskrit">
              नान्या स्पृहा रघुपते हृदयेऽस्मदीये <br />
              सत्यं वदामि च भवानखिलान्तरात्मा।<br />
              भक्तिं प्रयच्छ रघुपुङ्गव निर्भरां मे <br />
              कामादिदोषरहितं कुरु मानसं च ॥२॥
            </p>
            <p className="meaning">
              <strong>Meaning:</strong> There is no other craving in my heart, O Lord of the Raghus: I speak the truth and You are the Spirit indwelling the hearts of all. Grant me intense devotion to Your feet, O crest-jewel of Raghus, and free my mind from faults like concupiscence etc.
            </p>
          </div>
          <div className="imp-notes">
            Let your soul connect to the immortal Lord Hanuman.
          </div>
          <div className="mantra-block">
            <p className="sanskrit">
              अतुलितबलधामं हेमशैलाभदेहं <br />
              दनुजवनकृशानुं ज्ञानिनामग्रगण्यम्।
              <br />
              सकलगुणनिधानं वानराणामधीशं <br />
              रघुपतिप्रियभक्तं वातजातं नमामि ॥३॥
            </p>
            <p className="meaning">
              <strong>Meaning:</strong> I bow to the son of the wind-god, the beloved devotee of Sri Rama (the Lord of the Raghus), the chief of the monkeys, the repository of all virtues, the foremost among the wise, a fire to consume the forest of the demon race, possessing a body shining as a mountain of gold and a home of immeasurable strength.
            </p>
          </div>
          <div className="imp-notes">
            Then you will be protected by Him at every step.
          </div>
        </section>

        <motion.p
          className="call-to-action"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🕉️ Take a break of 10 minutes from what you are doing right now. Do Login to Read all the pages on this website specially "History", "Charan Pooja" and "Important Notes"
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;