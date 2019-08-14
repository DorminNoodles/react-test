import React, { useState, useEffect } from 'react';

function UseStateWithoutDiff(){

	const [click, setClick] = useState(0);

	useEffect(() => {
		console.log("03 UseStateWithoutDiff : UseEffect !")
	})

	return (
		<div>
			<h2>03 UseStateWithoutDiff</h2>
			<p>{click}</p>
			<button onClick={() => setClick(42)}>Click</button>
			<p>No Rerender !</p>
		</div>
	);

}

export default UseStateWithoutDiff;
