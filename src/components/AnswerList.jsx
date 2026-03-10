import decodeHtml from "../utils/decodeHtml";

function AnswerList({ userAnswers }) {
  return (
    <div>
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
    </div>
  );
}

export default AnswerList;
