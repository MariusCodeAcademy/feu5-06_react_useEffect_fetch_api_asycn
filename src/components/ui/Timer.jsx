import React, { useState } from 'react';
import Card from './card/Card';

function Timer() {
  console.log('Timer mounted');
  const [timerValue, setTimerValue] = useState(0);
  // let timerValue = 0;

  setTimeout(() => {
    setTimerValue(timerValue + 3);
    // console.log('timerValue', timerValue);
  }, 3000);

  // setTimerValue(timerValue + 3);

  return (
    <Card>
      <h2>Timer</h2>
      <h2>{timerValue}</h2>
    </Card>
  );
}

export default Timer;
