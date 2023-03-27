// susikuriam komponenta
import React, { useState, useEffect } from 'react';
import Card from './ui/card/Card';

function Counter() {
  const [count, setCount] = useState(0);
  const [colorClass, setColorClass] = useState('black');
  let style = {
    color: colorClass,
  };
  // style.color = count > 5 ? 'green' : 'black';
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
      // setCount((prevCount) => prevCount + 1);
    }, 5000);
  }, []);
  // efektas vyksta priklausomai nuo count
  useEffect(() => {
    console.log('pasikeite count', count);
    switch (true) {
      case count < 5:
        setColorClass('black');
        break;
      case count < 7:
        setColorClass('blue');
        break;
      case count < 11:
        setColorClass('red');
        break;
    }
  }, [count]);

  return (
    <Card center>
      <h2 style={style}>{count}</h2>
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
