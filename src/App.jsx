import { useState } from "react";
import QuizStart from "./components/QuizStart";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [screen, setScreen] = useState("landing");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const fetchQuestions = async (amount, difficulty) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`,
      );

      const data = await response.json();

      //console.log(data.results);

      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div>
      {screen === "landing" && (
        <QuizStart
          startQuiz={(amount, difficulty) => {
            fetchQuestions(amount, difficulty);
            setScreen("quiz");
          }}
        />
      )}

      {screen === "quiz" && (
        <div>
          <h1>Quiz Screen</h1>
          <button onClick={() => setScreen("results")}>Finish Quiz</button>
        </div>
      )}

      {screen === "results" && (
        <div>
          <h1>Results Screen</h1>
          <button onClick={() => setScreen("landing")}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
