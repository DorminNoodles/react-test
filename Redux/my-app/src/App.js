import React from 'react';
import logo from './logo.svg';
import './App.css';

import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));

function App() {
	return (
		<div className="App">
			<h1 onClick={() => {store.dispatch({ type: 'INCREMENT' })}}>Hello</h1>
			<div>
				{store.getState().counter}
			</div>
		</div>
	);
}

export default App;
