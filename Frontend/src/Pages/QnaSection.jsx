import React, { useState } from "react";
import "./QnaSection.css";

const QnaSection = () => {
  const itemsPerPage = 10; // Changed to 5 for demo; adjust as needed
  const [currentPage, setCurrentPage] = useState(1);

  const qnaData = [
    {
      id: 1,
      question: "Jai Shree Ram   I have been divorced for almost 2 years now. I had agree for divorce due to certain issues though internally I never wanted to separate from my husband whom I dearly love till this moment. No second in the day passes when I dont think about him or miss him. The memories haunt me badly. Though it has been more than 2 years since everything ended and we have not been in contact but something inside me still says that we are meant to be together and one day we will reunite. What should I perceive from this inner voice? My family is after me to marry again but I can't. My mind and soul dont permit for the same. I can't think of anyone in place of my ex husband. Please help me.",
      answer: "Have you read Chapter 2 of Immortal Talks- Book 1? It tells about the mathematics of Karma.If this attachment to your ex-husband is one-sided, you are doing immense harm to yourself and your family. Every soul has bad Karma and because of one-sided attachment you are taking on your husband's Karma on yourself thereby creating more and more suffering for yourself.So, if it is a one-sided attachment, earlier you let go of him, is better. Marry again only and only when you've let go of this one-sided attachment otherwise the new companion and his family will also suffer due to this one-sided attachment.",
    },
    {
      id: 2,
      question: `I want permission from lord Hanuman for can I give these chapters for reading to my parents ? I feel that it will reduce there burden I sometimes I feel that this is my duty to tell them about setuu .org I fell guilty about not doing this. I know If I will give them for reading they will not say no and They know that I am reading these chapters here.I am a college going studentAlso can I suggest to relatives , classmates , neighbors about setuu.org ? I feel that I must spread message about setuu.or to everyone as messenger of lord hanuman . Please I need urgent guidance from you sideI am confused.`,
      answer: `At this stage of Kaliyuga when people are deeply fallen into the pit of Maya, they won't take free knowledge seriously. Furthermore, they may raise suspicions over it, Therefore, we are now presenting this knowledge in the form of books. If you actually want them to follow this knowledge, don't give it free. Ask them to buy Immortal Talks book. They will appreciate it more.`,
    },
    {
      id: 3,
      question: "Hai hanuman. I might be pregnant. My husband doesnt want to go for abortion but i am not sure about having a baby. I had a few questions running in my head. I understand pregnancy is more a spiritual process than physical. The strings of space and time come together from both the parents for the new life to start. If its being disrupted, then it should be equivalent to a murder. Is it so? I want to understand if there can be any spiritual consequences for abortion. For the souls of the parents as well as the unborn child. What happens spititually? It is said in the lessons, a soul has to decide to come down for new life to happen otherwise asuras take residence in the body of the new child. So, in case of artificial pregnancy what happens? A decade back, i heard from a spiritual practitioner a soul decends down during the 6th month of pregnancy. Is this true?",
      answer: "Human body is like a house of a soul.Murder is like bulldozing an already-built house where somebody is already living. Comparing abortion and murder is sheer ignorance.Here is a simple way to explain pregnancy. You are pregnant. That means you have started building a house (read 'body') for a soul. Where is that soul right now which might become your child? That soul is not body-less right now. Lets say that soul is living in body of a 70 year old woman somewhere. That body is becoming a burden for the soul day by day. That old body is getting more and more insufficient and incompatible for the Karma-Desires that soul has accumulated. That soul is looking for an exit from that body. Lets say that soul finds a possibility of acquiring the body that is developing in your uterus.Right now the body you are developing in your uterus is just a possibility for that soul. If you abort your plans and carry out the abortion, what will happen? That soul will keep living in the 70 year old body while searching for another possibility.So in a way, you will be giving a few months of more life to that 70 years old woman by carrying out abortion.But if you look the other way, if you don't do abortion, you will be giving a new body to that soul. You will be freeing it from the old 70-year old body.So there is nothing good or bad here. If you think you are not yet ready to host the new soul, go ahead with the abortion.But yes, if you abort now and conceive later, another soul will come as your child, not the one we are talking about now. Once you abort, you give a clear signal to this soul to find new possibilities. It may take some time to find new possibilities but eventually it will find one and become someone else's child.",
    },
    {
      id: 4,
      question: "Jai sri Ram, Jai sri Hanuman I have many experiences to tell but I don't tell all the incidents as they might not be so important to be posted .... But they are priceless for me.So ,2-3 months ago -I was on Facebook ..... I am also a member of a group (perhaps made by the setuu sadhakas ) named setuu.orgAs usual a member of the group asked a random question and as I was a member so I was also notified. I saw many replies for that question but one of them made me sure that the person who replied it was a setuu's sadhaka.So I sent him friend request and what a coincidence that he also accepted it He accepted the friend request because he thought that I am his one of the friends (Perhaps classmate) in his schooldays . But I had nothing to do with that because I thought that now I can talk to a person who will share his divine knowledge with me and I could also ask him about any queries (if I had ) .I knew it that his answers to my questions will be better than that of mine and he will also answer all my questions (even when it is meaningless ) I assumed that at least he will tell me that the question I asked was meaningless. So now come to our chats on Facebook:First I however confirmed that he was a sadhaka then we had a conversation ..He asked me if I had read all the chapters posted on setuu up to now ...... I answered \"yes\".So he asked me a question :Q. We all know Lord Shiva goes in samadhi - I replied \"yes\" He asked - Do you know when he is in samadhi then he meditates on whom ?(In Hindi - \"Kya tum jante ho ki WO kiska dhyan karte hai jab WO samadhi me hote hai\" ?I had an answer but I was not sure if it was correct so I thought that i should search on Google to ensure that my answer was correct . And yes I got the same answer also on Google (Internet).This time I was not sure that the answer is correct (as I knew that all the vedic literatures were not like as it was written , in the past centuries many changes are made in them) but though I sent the answer . Unfortunately it was wrong according to him and he just told me that I was judging and I should not do it any more as it invites ashuras . I knew about the judgements (according to the chapters posted on setuu website).He told me that i had not gone through the chapters in detail ,,,, and the answer is in chapter 11th , or perhaps 12th ( I don't exactly remember what he said) . .. So I went through the chapters again but I still don't have an answer for this question. Please answer this question. As soon as possible.Jai sri Sita-Ram Jai Sri Hanuman",
      answer: "None of Setuu Sadhakas are member of any internet group. The group you mentioned may be started by devotees who read chapters on website just like you.Now that so many chapters have been published, we don't think there is any need to add our thoughts on the words of the immortal Guru. We suggest devotees to find answers only in chapters. There are a billion human minds having billions of thoughts. Instead of relying on thoughts generated in minds of mortal human beings, rely on the words of the Immortal Guru.Blessings",
    },
    {
      id: 5,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 6,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 7,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 8,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 9,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 10,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 11,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 12,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 13,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 14,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 15,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 16,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 17,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 18,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 19,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 20,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 21,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 22,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 23,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 24,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 25,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 26,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 27,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 28,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 29,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 40,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 41,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 42,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 43,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 44,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 45,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 46,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 47,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 48,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 49,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 50,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 51,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 52,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 53,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 54,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 55,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 56,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 57,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 58,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 59,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 60,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 61,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 62,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 63,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 64,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 65,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 66,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 67,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 68,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 69,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 70,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 71,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 72,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 73,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 74,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 75,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 76,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 77,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 78,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 79,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 80,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 81,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 82,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 83,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 84,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 85,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 86,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 87,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 88,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 89,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 90,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 91,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 92,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 93,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 94,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 95,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 96,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 97,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 98,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 99,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 100,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 101,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 102,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 103,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 104,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 105,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 106,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 107,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 108,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 109,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 110,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 111,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 112,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 113,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 114,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 115,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 116,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 117,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 118,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 119,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 120,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 121,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 122,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 123,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 124,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 125,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 126,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 127,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 128,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 129,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 130,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 131,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 132,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 133,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 134,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 135,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 136,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 137,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 138,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 139,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 140,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 141,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 142,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 143,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 144,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 145,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 146,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 147,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 148,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 149,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 150,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 151,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 152,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 153,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 154,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 155,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 156,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 157,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 158,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 159,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 160,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 161,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 162,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 163,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 164,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 165,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 166,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 167,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 168,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 169,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 170,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 171,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 172,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 173,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
    {
      id: 174,
      question: "What is Redux?",
      answer: "Redux is a state management tool...",
    },
    {
      id: 175,
      question: "What is React?",
      answer: "React is a JavaScript library...",
    },
    {
      id: 176,
      question: "What is a component in React?",
      answer: "A component is...",
    },
    {
      id: 177,
      question: "What is useState hook?",
      answer: "useState allows you to...",
    },
    {
      id: 178,
      question: "What is useEffect hook?",
      answer: "useEffect manages side effects...",
    },
    {
      id: 179,
      question: "What is a key in React?",
      answer: "A key helps React identify...",
    },
    {
      id: 180,
      question: "What is the virtual DOM?",
      answer: "Virtual DOM is a lightweight...",
    },
  ];

  // Calculate total number of pages
  const totalPages = Math.ceil(qnaData.length / itemsPerPage);

  // Get current page's Q&A slice
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return qnaData.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle changing page
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Render pagination buttons
  const renderPaginationButtons = () => {
    let buttons = [];

    // Previous button
    buttons.push(
      <button
        key="prev"
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
      >
        Previous
      </button>
    );

    // Numbered buttons
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
          aria-current={currentPage === i ? "page" : undefined}
        >
          {i}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
      >
        Next
      </button>
    );

    return buttons;
  };

  return (
    <div className="qna-section-container" style={{ padding: "3rem" }}>
      <h1 className="qna-title">Q&A Repository</h1>

      <div className="qna-list">
  {getCurrentPageData().length > 0 ? (
    getCurrentPageData().map(({ id, question, answer }) => (
      <article key={id} className="qna-item">
        <h3 className="qna-question">
          Question: {id}:<br />Devotee Speaks:
          {question.split('   ').map((line, index) => (
            <React.Fragment key={index}>
              <br />
              {line}
            </React.Fragment>
          ))}
        </h3>
        <p className="qna-answer">
          <br />Answer: <br />Setu Speaks: <br />{answer}
        </p>
      </article>
    ))
  ) : (
    <p>No Q&A found for this page.</p>
  )}
</div>



      {totalPages > 1 && (
        <nav className="pagination-wrapper" aria-label="Pagination Navigation">
          {renderPaginationButtons()}
        </nav>
      )}
    </div>
  );
};

export default QnaSection;
