import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  function reset(){
    setCounter(counter-counter)
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  <button onClick={reset}>⏹️</button>
  </div>;
}



export default Counter;
