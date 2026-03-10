import { useState, useEffect } from "react";
import { decodeHtml } from "../utils/decodeHtml";

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
    <div className="flex flex-col gap-6">
      <h2 className="text-sm text-gray-400">
        Question {currentQuestion + 1} / {totalQuestions}
      </h2>

      <p className="text-xl font-semibold text-primary">
        {decodeHtml(questionData.question)}
      </p>

      <div className="grid gap-3 mt-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedAnswer(answer);
              handleAnswer(answer);
            }}
            className="w-full border border-gray-600 rounded-lg p-3 text-left hover:bg-#EA8827 hover:text-white transition"
          >
            {decodeHtml(answer)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
