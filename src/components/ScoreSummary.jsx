function ScoreSummary({ score, totalQuestions, restartQuiz }) {
  return (
    <div>
      <h1>Quiz Finished!</h1>

      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default ScoreSummary;
