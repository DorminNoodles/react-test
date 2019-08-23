import React from 'react';


class Container02 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			txt: 'In State',
		};
	}

	componentWillMount() {
		console.log('componentWillMount');
		this.setState({
			txt: 'componentWillMount'
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

export default Container02;
