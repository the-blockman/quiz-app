import { decodeHtml } from "../utils/decodeHtml";

function AnswerList({ userAnswers, goBack }) {
  return (
    <div>
      <h1>Answer Review</h1>

      {userAnswers.map((answer, index) => {
        const isCorrect = answer.selectedAnswer === answer.correctAnswer;

        return (
          <div key={index}>
            <p>
              {index + 1}. {decodeHtml(answer.question)}
            </p>

            <p>Your answer: {decodeHtml(answer.selectedAnswer)}</p>

            {!isCorrect && (
              <p>Correct answer: {decodeHtml(answer.correctAnswer)}</p>
            )}
          </div>
        );
      })}

      <button
        onClick={goBack}
        className="w-full border border-gray-600 rounded-lg p-3 text-left hover:bg-orange-400 hover:text-white transition"
      >
        Back to Results
      </button>
    </div>
  );
}

export default AnswerList;
