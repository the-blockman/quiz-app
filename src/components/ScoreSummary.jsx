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
        <h2 className="score">
          Your Score: {score} / {totalQuestions}
        </h2>

        {userAnswers.map((answer, index) => {
          const isCorrect = answer.selectedAnswer === answer.correctAnswer;

          return (
            <div key={index} className="result-item">
              <p className="question">
                {index + 1}. {decodeHtml(answer.question)}
              </p>

              <p className={isCorrect ? "correct" : "wrong"}>
                Your answer: {decodeHtml(answer.selectedAnswer)}
              </p>

              {!isCorrect && (
                <p className="correct-answer">
                  Correct answer: {decodeHtml(answer.correctAnswer)}
                </p>
              )}
            </div>
          );
        })}

        <div className="result-buttons">
          <button onClick={restartQuiz}>Restart Quiz</button>

          <button onClick={viewHistory}>View Quiz History</button>
        </div>
      </div>
    </div>
  );
}

export default ScoreSummary;
