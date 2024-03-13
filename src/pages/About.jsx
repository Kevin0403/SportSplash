import React, { useState } from "react";

const About = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const onStart = () => {
    setIsRunning(true);
  };

  const onStop = () => {
    setIsRunning(false);
  };

  const onReset = () => {
    setTimer(0);
  };

  return (
    <div className="mt-5">
      <h1>Stopwatch</h1>
      <p>{timer}</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default About;