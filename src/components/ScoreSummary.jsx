import ScoreCard from "./ScoreCard";
import ResultButtons from "./ResultButtons";

function ScoreSummary({
  score,
  totalQuestions,
  restartQuiz,
  viewHistory,
  viewAnswers,
}) {
  return (
    <div>
      <h1>Quiz Finished!</h1>

      <ScoreCard score={score} totalQuestions={totalQuestions} />

      <ResultButtons
        restartQuiz={restartQuiz}
        viewHistory={viewHistory}
        viewAnswers={viewAnswers}
      />
    </div>
  );
}

export default ScoreSummary;
