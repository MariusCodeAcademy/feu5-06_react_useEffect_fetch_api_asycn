import React, { useState, useEffect } from 'react';
import Card from './card/Card';

function Timer() {
  console.log('Timer mounted');
  const [timerValue, setTimerValue] = useState(0);
  // let timerValue = 0;

  // useEffect(() => {}, [priklausomybiu masyvas])
  // useEffect(() => {}, []) - toks efektas pasileidzia
  // tik viena karta susikurus komponentui

  useEffect(() => {
    console.log('useEffect ivyko');
    setTimeout(() => {
      setTimerValue(timerValue + 3);
      // console.log('timerValue', timerValue);
    }, 3000);
  }, []);

  // setTimerValue(timerValue + 3);
  console.log('just Before jsx mounted');
  return (
    <Card>
      <h2>Timer</h2>
      <h2>{timerValue}</h2>
    </Card>
  );
}

export default Timer;
