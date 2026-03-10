function ResultButtons({ restartQuiz, viewHistory, viewAnswers }) {
  return (
    <div className="grid gap-3 mt-3">
      <button
        onClick={restartQuiz}
        className="w-full border border-gray-600 rounded-lg p-3 text-left hover:bg-orange-400 hover:text-white transition"
      >
        Restart Quiz
      </button>

      <button
        onClick={viewHistory}
        className="w-full border border-gray-600 rounded-lg p-3 text-left hover:bg-orange-400 hover:text-white transition"
      >
        View Quiz History
      </button>

      <button
        onClick={viewAnswers}
        className="w-full border border-gray-600 rounded-lg p-3 text-left hover:bg-orange-400 hover:text-white transition"
      >
        Review Answers
      </button>
    </div>
  );
}

export default ResultButtons;
