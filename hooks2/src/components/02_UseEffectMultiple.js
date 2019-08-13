import React, { useState, useEffect } from 'react';


function UseEffectMultiple(){

	const [click, setClick] = useState(0);

	useEffect(() => {
		console.log("Hello")
	})

	useEffect(() => {
		console.log("World")
	})


	return (
		<div>
			<h1>02 UseEffectMultiple</h1>
			<button onClick={() => setClick(click + 1)}>useState</button>
		</div>
	);

}

export default UseEffectMultiple;
