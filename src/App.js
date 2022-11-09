
import {useState,  useEffect } from 'react';
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
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    console.log('render');
  }, [resourceType]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { //clean up function is called out before every useEffect invoked
      window.removeEventListener('resize', handleResize); //to avoid memory leaks
    }
  }, [])

  return (
    <>
      <h1>React HOOKS</h1>
      <h2>useState</h2>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <br />
      <br />
      <hr />
      <h2>useEffect</h2>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <p>Window width: {windowWidth}</p>
      {items.map(item => (<pre key={item.id}>{JSON.stringify(item)}</pre>))}
    </>
  );
}

export default App;
