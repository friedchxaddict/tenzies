import { useState } from 'react';
import Die from './Die';
import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  let diceElement = dice.map((die) => <Die value={die} />);

  console.log(allNewDice());

  return (
    <>
      <main>
        <div className="container">{diceElement}</div>
      </main>
    </>
  );
}

export default App;
