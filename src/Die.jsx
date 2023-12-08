//import React from 'react';
import './App.css';

function Die(prop) {
  return (
    <div className="die-box">
      <h2 className="die-num">{prop.value}</h2>
    </div>
  );
}

export default Die;
