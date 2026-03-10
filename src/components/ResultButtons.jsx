function ResultButtons({ restartQuiz, viewHistory, viewAnswers }) {
  return (
    <div>
      <button onClick={restartQuiz}>Restart Quiz</button>

      <button onClick={viewHistory}>View Quiz History</button>

      <button onClick={viewAnswers}>Review Answers</button>
    </div>
  );
}

export default ResultButtons;
