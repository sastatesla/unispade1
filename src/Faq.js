import React from 'react';
import faqPic from './assets/faqPhoto.png';
import Question from './component/Question';
import "./Faq.css";

const faqData = [
  {
    question: "How to find a career development mentor?",
    answer: "Finding the right mentor for your career goals is easy. Use our targeted filters and categories to narrow down options by industry, expertise, and availability, ensuring an easy and accurate match to support your career growth.",
  },
  {
    question: "What to expect from career design mentorship?",
    answer: "Experience personalized, goal-oriented sessions that focus on your unique career path. Our mentors work with you to create actionable plans that align with your aspirations, fostering growth and guiding you towards your professional objectives.",
  },
  {
    question: "How does mentor availability work?",
    answer: "Mentor profiles display their availability, allowing you to schedule sessions at times that suit you best. Flexible booking options ensure you can connect with mentors conveniently, making it easy to incorporate guidance into your routine.",
  },
];

function Faq() {
  return (
    <div className="home-faq-container">
      <h1 className="home-faq-heading">Frequently Asked Questions</h1>
      <p className="home-faq-subheading">
        Find answers to commonly asked questions:
      </p>

      <div className="home-faq-content">
        <div className="home-faq-image-wrapper">
          <img src={faqPic} alt="FAQ" className="faq-image" />
        </div>

        <div className="home-faq-questions">
          {faqData.map((faq, index) => (
            <Question 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === faqData.length - 1}
            />
          ))}
        </div>
      </div>
      <div className="home-break-line"></div>
    </div>
  );
}

export default Faq;
