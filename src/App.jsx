import { useState } from "react";
import QuizStart from "./components/QuizStart";

function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <div>
      {screen === "landing" && (
        <QuizStart
          startQuiz={(amount, difficulty) => {
            console.log(amount, difficulty);
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
