import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import Container01 from './containers/Container01';
// import Container02 from './containers/Container02';
// import Container03 from './containers/Container03';
// import Container04 from './containers/Container04';
// import Container05 from './containers/Container05';
import UseEffect from './01_UseEffect';
import Classes from './02_class';


function App() {

	const [effectOn, setEffectOn] = useState(null);
	const [classOn, setClassOn] = useState(null);

	const HandleClick = () => {
		console.log("click");
		setEffectOn(!effectOn);
	}

	const HandleClass = () => {
		setClassOn(!classOn);
	}

	return (
		<div className="App">
			<h1>01 UseEffect</h1>
			{ effectOn && <UseEffect />}
			<button onClick={HandleClick}>On/Off</button>
			<h2>Classes</h2>
			{classOn && <Classes txt="Hello" />}
			<button onClick={HandleClass}>Mount/Dismount</button>

		</div>
	);
}

export default App;
