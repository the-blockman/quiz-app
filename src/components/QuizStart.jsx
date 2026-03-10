import { useState } from "react";

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Computers" },
  { id: 23, name: "History" },
  { id: 21, name: "Sports" },
  { id: 11, name: "Movies" },
];

function QuizStart({ startQuiz }) {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState(9);

  const handleStart = () => {
    startQuiz(amount, difficulty, category);
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

      <div>
        <label>Category:</label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default QuizStart;
