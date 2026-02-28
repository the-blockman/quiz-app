import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <div>
      {screen === "landing" && (
        <div>
          <h1>Quiz App</h1>
          <button onClick={() => setScreen("quiz")}>Start Quiz</button>
        </div>
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
