import React from 'react';



const Hello = class extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		console.log('NextProps -> ', nextProps);
		console.log('componentWillReceiveProps');
	}

	render() {
		return(
			<div>
				{this.props.name}
			</div>
		);
	}

}


class Container04 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name : '',
		};
	}

	handleChange = (event) => {
		this.setState({ name: event.currentTarget.value});
	}

	handleClick = (event) => {//une arrow function parce qu elle ne crée pas son propre this
		this.setState({
			name: 'Choux',
		});
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				click here
				<Hello name={this.state.name} />
			</div>
		);
	}
}

export default Container04;
