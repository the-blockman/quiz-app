import { useState } from "react";
import QuizStart from "./components/QuizStart";
import QuestionCard from "./components/QuestionCard";
import ScoreSummary from "./components/ScoreSummary";
import { fetchQuizQuestions } from "./services/api";

function App() {
  const [screen, setScreen] = useState("landing");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const fetchQuestions = async (amount, difficulty) => {
    setLoading(true);

    const results = await fetchQuizQuestions(amount, difficulty);

    setQuestions(results);

    setLoading(false);
  };

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correct_answer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreen("results");
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setScreen("landing");
  };

  return (
    <div className="app-container">
      {screen === "landing" && (
        <QuizStart
          startQuiz={(amount, difficulty) => {
            fetchQuestions(amount, difficulty);
            setScreen("quiz");
          }}
        />
      )}

      {screen === "quiz" &&
        (loading ? (
          <p>Loading questions...</p>
        ) : (
          <QuestionCard
            questionData={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            handleAnswer={handleAnswer}
          />
        ))}

      {screen === "results" && (
        <ScoreSummary
          score={score}
          totalQuestions={questions.length}
          restartQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
