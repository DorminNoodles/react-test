import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers} from 'redux';
import allReducers from './reducers';
import todoApp from './reducers/todosReducer';

import {
	addTodo,
	toggleTodo,
	setVisibilityFilter,
} from './actions/actions';


const store = createStore(combineReducers({
	allReducers,
	todoApp
}));

// const store = createStore(todoApp);
// store.subscribe(() => console.log(store.getState()));

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));

console.log(store.getState());

function App() {
	return (
		<div className="App">
			<h1 onClick={() => {store.dispatch({ type: 'INCREMENT' })}}>Hello</h1>
			<div>
				{store.getState().allReducers.counter}
			</div>
		</div>
	);
}

export default App;
