import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';
import Die from './Die';
import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [counter, setCounter] = useState(0);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('You won and testing!');
    }
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((OldDice) =>
        OldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <>
      <main>
        {tenzies && <ReactConfetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <h3>Rolls: {counter}</h3>
        <div className="container">{diceElement}</div>
        <button
          className="die-button"
          onClick={() => {
            rollDice();
            setCounter(counter + 1);
          }}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </main>
    </>
  );
}

export default App;
