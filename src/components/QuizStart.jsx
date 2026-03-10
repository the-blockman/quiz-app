import { useState, useEffect } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");

  const handleStart = () => {
    startQuiz(amount, difficulty, category);
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    if (filteredCategories.length > 0) {
      setCategory(filteredCategories[0].id);
    }
  }, [searchTerm, filteredCategories]);

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <h1 className="text-3xl font-bold text-gray-900">Framer Quiz App</h1>

      <div>
        <label>Number of Questions:</label>
        <select
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3"
        >
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
          className="w-full border border-gray-300 rounded-lg p-3"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div>
        <label>Search Topic:</label>

        <div className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>
      </div>

      {filteredCategories.length === 0 && (
        <p>No topics found. Try another search.</p>
      )}

      <div>
        <label>Category:</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3"
        >
          {filteredCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleStart}
        className="w-full max-w-70.75 mx-auto bg-orange-400 text-white py-3 rounded-lg"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStart;
