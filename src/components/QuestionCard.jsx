import { useState, useEffect } from "react";

function QuestionCard({
  questionData,
  currentQuestion,
  totalQuestions,
  handleAnswer,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestion]);

  const answers = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];

  // shuffle answers
  answers.sort(() => Math.random() - 0.5);

  return (
    <div>
      <h2>
        Question {currentQuestion + 1} / {totalQuestions}
      </h2>

      <p>{questionData.question}</p>

      <div>
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedAnswer(answer);
              handleAnswer(answer);
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
