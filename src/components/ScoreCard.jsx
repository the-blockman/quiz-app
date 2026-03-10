function ScoreCard({ score, totalQuestions }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-black-900">
        Your Score: {score} / {totalQuestions}
      </h2>
    </div>
  );
}

export default ScoreCard;
