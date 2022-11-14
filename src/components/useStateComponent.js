import { useState } from 'react';

// below function can be used to speed up compute initial state
//
// function countInitial() {
//   console.log('run function');
//   return 4
// }

export default function StateComponent() {
	// const [count, setCount] = useState(countInitial);
	// const [count, setCount] = useState(() => {
	//   console.log('run function');
	//   return 4
	// });

	const [count, setCount] = useState(4);
	function decrementCount() {
		setCount(prevCount => prevCount - 1);
	}
	function incrementCount() {
		setCount(prevCount => prevCount + 1);
	}
	return (
		<>
			<h2>useState</h2>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</>
	);
}
