import { useState, useEffect } from "react";
import Die from "./Die";
import "./styles.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSizes } from "react-use-window-sizes";

export default function App() {
  const [nums, setNums] = useState(getNewDice());
  const [endGame, setEndGame] = useState(false);
  const { width, height } = useWindowSizes();

  useEffect(() => {
    const allHeld = nums.every((num) => num.isHeld);
    const firstNum = nums[0].value;
    const allSameNum = nums.every((num) => num.value === firstNum);
    if (allHeld && allSameNum) {
      setEndGame(true);
      console.log("You won");
    }
  }, [nums]);

  function getNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      const dieNum = Math.floor(Math.ceil(Math.random() * 6));
      arr.push({ value: dieNum, isHeld: false, id: nanoid() });
    }
    return arr;
  }

  function rollDice() {
    if (endGame === true) {
      setNums(getNewDice());
      setEndGame(false);
    } else {
      setNums((prevState) =>
        prevState.map((num) => {
          const dieNum = Math.floor(Math.ceil(Math.random() * 6));
          return num.isHeld === false ? { ...num, value: dieNum } : num;
        })
      );
    }
  }

  function holdNum(id) {
    setNums((prevState) =>
      prevState.map((num) => {
        return num.id === id ? { ...num, isHeld: !num.isHeld } : num;
      })
    );
  }
  return (
    <div>
      <main>
        {endGame ? <Confetti width={width} height={height} /> : ""}
        <div className="info">
          <h1>Tenzies</h1>
          <p>
            Roll untill all dice are the same. Click each die to freeze as its
            current value between rolls
          </p>
        </div>
        <div className="dice">
          {nums.map((num) => (
            <Die
              value={num.value}
              held={num.isHeld}
              hold={() => holdNum(num.id)}
              key={num.id}
            />
          ))}
        </div>
        <div className="btn">
          <button onClick={rollDice}>
            {endGame ? "New Game" : "Roll Dice"}
          </button>
        </div>
      </main>
    </div>
  );
}
