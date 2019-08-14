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
			<h2>02 UseEffectMultiple</h2>
			<button onClick={() => setClick(click + 1)}>useState</button>
		</div>
	);

}

export default UseEffectMultiple;
