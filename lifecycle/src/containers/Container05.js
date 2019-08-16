import React from 'react';


class Foo extends React.Component {

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		if (nextProps.name != this.props.name)
			return true;
		else
			return false;
	}

	render() {
		console.log('Foo render !')
		return(
			<div>
				{this.props.name}
			</div>
		);
	}
}


class Container05 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
		}
	}

	handleClick = (event) => {
		this.setState({
			name: 'tarzan',
		})
	}

	render() {
		return (
			<div>
				<div onClick={this.handleClick}>
					ShouldComponentUpdate
				</div>
				<div>
					<Foo name={this.state.name}/>
				</div>
			</div>
		);
	}
}

export default Container05;
