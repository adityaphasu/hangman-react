const Word = () => {
  const word = "Test";
  const guessedLetters = ["e", "s"];

  return (
    <div className="word">
      {word.split("").map((letter, idx) => (
        <span className="letter" key={idx}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
            }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default Word;
