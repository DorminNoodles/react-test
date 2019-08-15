import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container01 from './containers/Container01';


function App() {

	const HandleRender = () => {
		console.log('hello');

	}

	return (
		<div className="App">
			<Container01 />
		</div>
	);
}

export default App;
