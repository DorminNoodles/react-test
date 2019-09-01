import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


export default class Task extends React.Component {

	render() {
		return (
			<Draggable draggableId={this.props.index} index={this.props.index}>
				{provided =>(
					<div
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						innerRef={provided.innerRef}
					>
						<div style={{border: '1px solid', margin: '5px'}}>
							<h3>{this.props.title}</h3>
						</div>
					</div>
				)}
			</Draggable>
		);
	}
}
