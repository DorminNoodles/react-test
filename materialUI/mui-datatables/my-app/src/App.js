import React from 'react';
import logo from './logo.svg';
import './App.css';

import { DragDropContext } from 'react-beautiful-dnd';
import MUIDataTable from "mui-datatables";
import Draggable from 'react-draggable';

import DraggableTable from './draggableTable';



import TaskList from './TaskList';



const data = [
	{
		title: 'task 1',
		text: 'manger des crepes au nutella',
	},
	{
		title: 'task 2',
		text: 'lorem ipsum des choses voila'
	},
	{
		title: 'task 3',
		text: 'lorem ipsum des choses voila'
	}
]


const onDragEnd = (result) => {

}


const FancyButton = React.forwardRef((props, ref) => (
	<button ref={ref} className="FancyButton" onClick={props.cb}>
		{props.children}
	</button>
));

// You can now get a ref directly to the DOM button:


// const App = () => {
// 	const ref = React.createRef();
//
// 	const HelloRef = () => {
// 		console.log(ref);
// 		ref.current.style.backgroundColor = "red";
// 	}
//
// 	return (
// 		<div className="App">
// 			<FancyButton ref={ref} cb={HelloRef}>Click me!</FancyButton>
// 		</div>
// 	);
// }

const App = () => {
	return (
		<div className="App">
			<TaskList />
		</div>
	);
}

export default App;
