//import { useState } from 'react'
import Die from './Die';
import './App.css';

function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  console.log(allNewDice());

  return (
    <>
      <main>
        <div className="container">
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
        </div>
      </main>
    </>
  );
}

export default App;
