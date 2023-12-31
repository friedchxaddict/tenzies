//import React from 'react';
import './App.css';

function Die(prop) {
  const styles = { backgroundColor: prop.isHeld ? '#59E391' : 'white' };

  return (
    <div className="die-box" style={styles} onClick={prop.holdDice}>
      {/*<h2 className="die-num">{prop.value}</h2>*/}
      <img src={`/img/dieFace${prop.value}.png`}></img>
    </div>
  );
}

export default Die;
