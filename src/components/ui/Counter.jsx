// susikuriam komponenta
import React, { useState, useEffect } from 'react';
import Card from './card/Card';

function Counter() {
  const [count, setCount] = useState(0);
  // su setTimeout pakeisti title po 3sek
  // pakeista.
  setTimeout(() => {
    document.title = 'pakeista';
  }, 3000);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }
  //efektas pasileidzia tik susikurus komponentui
  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 5000);
  }, []);

  return (
    <Card center>
      <h2>{count}</h2>
      <button onClick={increase}>Plus</button>
    </Card>
  );
}

export default Counter;

// sukurti state, ir mygtuka kurio paspaudimu didinsim state
// state atvizduosim jsx
// state tadas butu zalias jei reiksme daugiau uz 5
// state tadas butu melynas jei reiksme daugiau uz 7
// state tadas butu raudonas jei reiksme daugiau uz 10
