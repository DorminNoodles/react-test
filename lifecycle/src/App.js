import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import Container01 from './containers/Container01';
<<<<<<< HEAD
// import Container02 from './containers/Container02';
// import Container03 from './containers/Container03';
// import Container04 from './containers/Container04';
// import Container05 from './containers/Container05';
import UseEffect from './01_UseEffect';
import Classes from './02_class';
=======
import UseEffect from './01_UseEffect';
>>>>>>> 9f93b62adb5f2b1cd860baf91abe1feb45990b56


function App() {

	const [effectOn, setEffectOn] = useState(null);
<<<<<<< HEAD
	const [classOn, setClassOn] = useState(null);
=======
>>>>>>> 9f93b62adb5f2b1cd860baf91abe1feb45990b56

	const HandleClick = () => {
		console.log("click");
		setEffectOn(!effectOn);
<<<<<<< HEAD
	}

	const HandleClass = () => {
		setClassOn(!classOn);
=======
>>>>>>> 9f93b62adb5f2b1cd860baf91abe1feb45990b56
	}

	return (
		<div className="App">
			<h1>01 UseEffect</h1>
			{ effectOn && <UseEffect />}
			<button onClick={HandleClick}>On/Off</button>
<<<<<<< HEAD
			<h2>Classes</h2>
			{classOn && <Classes txt="Hello" />}
			<button onClick={HandleClass}>Mount/Dismount</button>

=======
>>>>>>> 9f93b62adb5f2b1cd860baf91abe1feb45990b56
		</div>
	);
}

export default App;
