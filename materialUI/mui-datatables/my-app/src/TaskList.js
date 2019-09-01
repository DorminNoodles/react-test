import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';


import Task from './Task';


// const TaskList = (props) => {
//
// 	return (
// 		<div style={{padding: '25px'}}>
// 			<Droppable droppableId={1}>
// 			{(provided, snapshot) => (
// 				<div>
// 					{console.log()}
// 				</div>
// 			)}
//
// 			</Droppable>
//
// 		</div>
// 	)
// }


class TaskList extends React.Component {
  onBeforeDragStart = () => {
    /*...*/
  };

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = () => {
    // the only one that is required
  };

	render() {
		return (
			<DragDropContext
				onBeforeDragStart={this.onBeforeDragStart}
				onDragStart={this.onDragStart}
				onDragUpdate={this.onDragUpdate}
				onDragEnd={this.onDragEnd}
			>
				<div>Hello world</div>
			</DragDropContext>
		);
	}
}


export default TaskList;
