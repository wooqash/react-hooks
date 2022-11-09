import React, { useState } from 'react';
import './App.css';

 // below function can be used to speed up compute initial state
 //
// function countInitial() {
//   console.log('run function');
//   return 4
// }

function App() {
  // const [count, setCount] = useState(countInitial);
  // const [count, setCount] = useState(() => {
  //   console.log('run function');
  //   return 4
  // });
  
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
