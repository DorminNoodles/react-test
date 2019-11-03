import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext } from "react-beautiful-dnd";
import initialData from './InitialData';
import Column from './column';

class App extends React.Component {
	state = initialData;

	onDragEnd = result => {
		//TODO reorder list
	}


	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				{this.state.columnOrder.map((columnId) => {
					const column = this.state.columns[columnId];
					const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

					return <Column key={column.id} column={column} tasks={tasks} />;
				})}
			</DragDropContext>
		);

	}
}

export default App;
