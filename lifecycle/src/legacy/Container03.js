import React from 'react';


class Container03 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			txt: 'In State',
		};
	}

	componentWillMount() {
		console.log('container03 : componentWillMount');
		this.setState({
			txt: 'componentWillMount'
		})
	}

	componentDidMount() {
		console.log('container03 : componentDidMount');
		this.setState({
			txt: 'componentDidMount'
		})
	}

	render() {
		return (
			<div>
				{this.state.txt}
			</div>
		);
	}

}

export default Container03;
