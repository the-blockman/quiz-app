import { decodeHtml } from "../utils/decodeHtml";

function ScoreSummary({
  score,
  totalQuestions,
  userAnswers,
  restartQuiz,
  viewHistory,
}) {
  return (
    <div>
      <h1>Quiz Finished!</h1>

      <div>
        <h2>
          Your Score: {score} / {totalQuestions}
        </h2>

        {userAnswers.map((answer, index) => (
          <div key={index}>
            <p>{decodeHtml(answer.question)}</p>

            <p>Your answer: {decodeHtml(answer.selectedAnswer)}</p>

            {answer.selectedAnswer !== answer.correctAnswer && (
              <p>Correct answer: {decodeHtml(answer.correctAnswer)}</p>
            )}
          </div>
        ))}

        <button onClick={restartQuiz}>Restart Quiz</button>

        <button onClick={viewHistory}>View Quiz History</button>
      </div>
    </div>
  );
}

export default ScoreSummary;
