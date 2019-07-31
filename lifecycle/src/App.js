import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container01 from './containers/Container01/Container01';
import Container02 from './containers/Container02/Container02';
import Container03 from './containers/Container03/Container03';
import Container04 from './containers/Container04/Container04';
import Container05 from './containers/Container05/Container05';


function App() {

	const HandleRender = () => {
		console.log('hello');

	}

	return (
		<div className="App">
			<Container01 />
			<Container02 />
			<Container03 />
			<Container04 text="WillReceiveProps" func={HandleRender} />
			<Container05 />
		</div>
	);
}

export default App;
