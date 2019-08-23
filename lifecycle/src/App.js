import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import UseEffect from './01_UseEffect';


function App() {

	const [effectOn, setEffectOn] = useState(null);

	const HandleClick = () => {
		console.log("click");
		setEffectOn(!effectOn);
	}

	return (
		<div className="App">
			<h1>01 UseEffect</h1>
			{ effectOn && <UseEffect />}
			<button onClick={HandleClick}>On/Off</button>
		</div>
	);
}

export default App;
