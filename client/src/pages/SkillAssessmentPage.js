import React, { useState } from 'react';
import '../styles/SkillAssessment.css';

// Questions for "Language" skill
const questions = {
  easy: [
    { q: "George's mother didn't want him to take the job on the oil rig. In fact, George didn't feel very happy about it _____________.", options: ["Itself", "Himself", "Herself", "None of the above"], answer: "Himself" },
    { q: "The river_____________ (flow) very quickly today, much faster than usual.", options: ["Is flowing", "Was flowing", "Have been flowing", "Flew"], answer: "Is flowing" },
    { q: "You're looking very ______________ with yourself! Have you won some money?", options: ["Afraid", "Angry", "Concerned", "Pleased", "Sorry"], answer: "Pleased" },
    { q: `Select the phrase that is the opposite of what someone said earlier.
      A. "Kristen is coming to the party tonight."
      B. "Is she? I thought you said she ___________________."`, options: ["Could come?", "Was going to come?", "Wasn't going to come?", "Would be able to come?"], answer: "Wasn't going to come?" },
    { q: "I learned English in school, but I _________________ most of it.", options: ["Forgotten", "Forget", "Have forgotten", "Forgetted"], answer: "Have forgotten" },
    { q: "Why are you filling that bucket with water? ____________________ the car (I / wash)", options: ["I was washing", "I'm washing", "I washing", "Washing"], answer: "I'm washing" },
    { q: "I’m busy right now, but I’ll be with you ___ a moment.", options: ["On", "At", "In", "Before", "By"], answer: "In" },
    { q: "House prices are very high. They’ve __________ a lot in the last few years.", options: ["Going up", "Will have gone up", "Going to go up", "Gone up", "Will go up"], answer: "Gone up" },
    { q: "There was so much traffic, I was lucky to get ____________ the road without being knocked over.", options: ["Across", "Over", "Along", "Through"], answer: "Across" },
  ],
  medium: [
    { q: "Call me after eight o'clock, we ____________________ dinner by then.", options: ["Finished", "Finishing", "Will have finished", "Ate"], answer: "Will have finished" },
    { q: "They didn’t want to come with us at first, but we ___________________ persuade them.", options: ["Able to", "Were", "Were able to", "Could"], answer: "Were able to" },
    { q: "It __________ us a fortune at the moment to send our daughter to dance classes.", options: ["is costing", "costed", "was costing", "costs"], answer: "is costing" },
    { q: "A bus goes to the airport. It arrives every half hour.", options: ["The bus, goes to the airport, that arrives every half hour.", "The bus arrives every half hour which goes to the airport.", "The bus that goes to the airport arrives every half hour.", "The bus goes to the airport, which arrives every half hour."], answer: "The bus that goes to the airport arrives every half hour." },
    { q: "With the factory closing next week, he ________ lose his job.", options: ["Yes", "No"], answer: "No" },
    { q: "Bruce has been traveling _____________", options: ["for the past two weeks.", "Since 8 weeks", "Since 10 days"], answer: "for the past two weeks." }
  ],
  hard: [
    { q: "Which sentence is correct?", options: ["The woman was arrested and charged because of murder.", "The woman was arrested and charged for murder.", "The woman was arrested and charged with murder."], answer: "The woman was arrested and charged with murder." },
    { q: "Which sentence is correct?", options: ["I want to have a word with you before you go.", "I want to have a word with you before you will go.", "I want to have a word with you before you will have gone."], answer: "I want to have a word with you before you go." },
    { q: "Which sentences are correct?", options: ["He is very sleepable.", "He looks sleepy.", "He wants to sleep."], correctAnswers: ["He looks sleepy.", "He wants to sleep."] },
    { q: "What do you call a person who was born in Norwich?", options: ["a native of Norwich", "a resident of Norwich", "an inhabitant of Norwich"], answer: "a native of Norwich" },
    { q: "Which phrases are correct?", options: ["an arm of a coat", "the arm of the family", "the arm of the law"], correctAnswers: ["the arm of the family", "the arm of the law"] },
  ]
};

// Shuffle and get random questions
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomQuestions = () => {
  const easy = shuffle([...questions.easy]).slice(0, 5);
  const medium = shuffle([...questions.medium]).slice(0, 3);
  const hard = shuffle([...questions.hard]).slice(0, 2);
  return [...easy, ...medium, ...hard];
};

function SkillAssessmentPage() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setResponses({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    if (skill === 'Language Skills') {
      setQuizQuestions(getRandomQuestions());
    } else {
      setQuizQuestions([]);
    }
  };

  const handleAnswer = (answer) => {
    setResponses({
      ...responses,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Quiz completed! Click "Show Results" to view your score.');
    }
  };

  const handleEndQuiz = () => {
    setSelectedSkill(null);
    setShowResults(false);
  };

  const calculateResults = () => {
    const correctAnswers = quizQuestions.reduce((count, question, index) => {
      if (Array.isArray(question.correctAnswers)) {
        // Multiple correct answers
        const isCorrect = question.correctAnswers.every((ans) => responses[index]?.includes(ans));
        return isCorrect ? count + 1 : count;
      } else if (responses[index] === question.answer) {
        // Single correct answer
        return count + 1;
      }
      return count;
    }, 0);

    return { correctAnswers, totalQuestions: quizQuestions.length };
  };

  return (
    <div className="assessment-container">
      {/* Left Panel - Bot & Skill Selection */}
      <div className="bot-panel">
        <h1>🤖</h1>
        <p
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '1.3rem',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '1rem auto',
            textAlign: 'center',
            fontWeight: '500',
          }}
        >
          Please choose the skill you would like to start with
        </p>
        <div className="skill-buttons">
          {['Communication Skills','Listening Skills', 'Presentation Skills', 'Time Management Skills', 'Team and Leadership Skills', 'Etiquette','Cross-cultural Skills','Language Skills', ].map((skill) => (
            <button
              key={skill}
              className="skill-button"
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Quiz */}
      {selectedSkill && (
        <div className="quiz-panel">
          <h3>{selectedSkill} Quiz</h3>
          {selectedSkill !== 'Language Skills' ? (
            <p>Under Construction</p>
          ) : (
            <>
              {!showResults ? (
                <>
                  <div className="question">
                    <p>{quizQuestions[currentQuestionIndex].q}</p>
                    <div>
                      {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                        <label key={index}>
                          <input
                            type="radio"
                            name="answer"
                            value={option}
                            onChange={() => handleAnswer(option)}
                            checked={responses[currentQuestionIndex] === option}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="quiz-button" onClick={handleNext}>
                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Save & Next' : 'Complete Quiz'}
                  </button>
                  <button className="quiz-button result-button" onClick={() => setShowResults(true)}>
                    Show Results
                  </button>
                  <button className="quiz-button" onClick={handleEndQuiz}>
                    End Quiz
                  </button>
                </>
              ) : (
                <div className="results">
                  <h4>Quiz Results</h4>
                  <p>Total Questions: {calculateResults().totalQuestions}</p>
                  <p>Correct Answers: {calculateResults().correctAnswers}</p>
                  <button className="quiz-button" onClick={handleEndQuiz}>
                    End Quiz
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SkillAssessmentPage;
