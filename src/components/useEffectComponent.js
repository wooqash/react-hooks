import { useState, useEffect } from 'react';

export default function UseEffectComponent() {
	const [resourceType, setResourceType] = useState('posts');
	const [items, setItems] = useState([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function handleResize() {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		console.log('render');
	}, [resourceType]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then(response => response.json())
			.then(json => setItems(json));
	}, [resourceType]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			//clean up function is called out before every useEffect invoked
			window.removeEventListener('resize', handleResize); //to avoid memory leaks
		};
	}, []);
	return (
		<>
			{' '}
			<h2>useEffect</h2>
			<button onClick={() => setResourceType('posts')}>Posts</button>
			<button onClick={() => setResourceType('users')}>Users</button>
			<button onClick={() => setResourceType('comments')}>Comments</button>
			<p>Window width: {windowWidth}</p>
			{items.map(item => (
				<pre key={item.id}>{JSON.stringify(item)}</pre>
			))}
		</>
	);
}
