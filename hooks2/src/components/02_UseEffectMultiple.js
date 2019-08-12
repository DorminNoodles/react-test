import React, { useState, useEffect } from 'react';


function UseEffectMultiple(){

	useEffect(() => {
		console.log("Hello")
	})

	useEffect(() => {
		console.log("World")
	})


	return (
		<div>

		</div>
	);

}

export default UseEffectMultiple;
