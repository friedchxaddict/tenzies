import { useState } from 'react';
import { nanoid } from 'nanoid';
import Die from './Die';
import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  let diceElement = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} />
  ));

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <>
      <main>
        <div className="container">{diceElement}</div>
        <button className="die-button" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
