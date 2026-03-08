import { useState } from "react";

function QuizStart({ startQuiz }) {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    startQuiz(amount, difficulty);
  };

  return (
    <div>
      <h1>Quiz App</h1>

      <div>
        <label>Number of Questions:</label>
        <select value={amount} onChange={(e) => setAmount(e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <div>
        <label>Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default QuizStart;
