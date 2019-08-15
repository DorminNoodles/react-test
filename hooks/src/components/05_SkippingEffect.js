//Hum deprecated ?

import React, { useState, useEffect } from 'react';

function SkippingEffect(){

	const [click, setClick] = useState(0);
	const [hello, setHello] = useState(0);

	useEffect(() => {
		console.log("05 SkippingEffect : UseEffect !");
	}, [click])

	return (
		<div>
			<h2>05 SkippingEffect</h2>
			<button onClick={() => setHello(hello + 1)}>Hello</button>{/*if click here change only hello but no change for click, useEffect will not be called*/}
			<button onClick={() => setClick(click + 1)}>Click</button> {/*if click here change click so useEffect will be called*/}
		</div>
	);

}

export default SkippingEffect;
