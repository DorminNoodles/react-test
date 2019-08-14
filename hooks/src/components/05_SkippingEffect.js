//Hum deprecated ?

import React, { useState, useEffect } from 'react';

function SkippingEffect(){

	const [click, setClick] = useState(0);

	useEffect(() => {
		console.log("05 SkippingEffect : UseEffect !");
	}, [click])

	return (
		<div>
			<h2>05 SkippingEffect</h2>
			<button onClick={() => setClick(click)}>Click</button>
		</div>
	);

}

export default SkippingEffect;
