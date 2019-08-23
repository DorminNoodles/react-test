import React, { useEffect } from 'react';


const UseEffect = () => {

	useEffect(() => {
		console.log("02 USE EFFECT");
		return () => {console.log("03 UNMOUNT");}
	})

	return(
		<div>
		{console.log("01 RENDER")}
			<h3>Hello World</h3>
		</div>
	);
}

export default UseEffect;
