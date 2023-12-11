//import React from 'react';
import './App.css';

function Die(prop) {
  console.log(prop);
  const styles = { backgroundColor: prop.isHeld ? '#59E391' : 'white' };

  return (
    <div className="die-box" style={styles} onClick={prop.holdDice}>
      <h2 className="die-num">{prop.value}</h2>
    </div>
  );
}

export default Die;
