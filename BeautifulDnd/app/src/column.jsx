import React from 'react';
import Task from './task';

export default class Column extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.column.title}</p>
				<p>Task go here
					{this.props.tasks.map(task => <Task key={task.id} task={task} />)}
				</p>
			</div>

		)
	}
}
