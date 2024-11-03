import { useState } from "react";
import words from "./wordList.json";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="main">
      <div className="result-text-container">Lose Win</div>
      <Drawing />
      <Word />
      <div className="keyboard-container">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
