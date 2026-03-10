function QuizHistory({ quizHistory, goBack }) {
  return (
    <div>
      <h1>Quiz History</h1>

      {quizHistory.length === 0 ? (
        <p>No quizzes taken yet.</p>
      ) : (
        quizHistory.map((quiz, index) => (
          <div key={index}>
            <p>Category: {quiz.category}</p>
            <p>
              Score: {quiz.score} / {quiz.totalQuestions}
            </p>
            <p>{quiz.date}</p>
          </div>
        ))
      )}

      <button
        onClick={goBack}
        className="w-full border border-gray-600 rounded-lg p-3 text-left hover:bg-orange-400 hover:text-white transition"
      >
        Back
      </button>
    </div>
  );
}

export default QuizHistory;
