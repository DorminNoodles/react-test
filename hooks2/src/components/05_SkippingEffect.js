//Hum deprecated ?

import React, { useState, useEffect } from 'react';

function SkippingEffect(){

	const [click, setClick] = useState(0);

	useEffect(() => {
		console.log("05 SkippingEffect : UseEffect !");
	}, [click])

	return (
		<div>
			<h1>05 SkippingEffect</h1>
			<button onClick={() => setClick(click)}>Click</button>
		</div>
	);

}

export default SkippingEffect;
