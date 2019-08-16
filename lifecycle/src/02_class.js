import React from 'react';


class Classes extends React.Component {

	constructor(props) {
		super();

		this.state = {};
		console.log("01_constructor");
		console.log(props);
	}

	static getDerivedStateFromProps(props) {
		console.log('02_getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('03_componentDidMount');
	}

	shouldComponentUpdate() {
		console.log('UPDATE : 01_shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("UPDATE : 02_getSnapshotBeforeUpdate");
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("UPDATE : 03_componentDidUpdate");
		return null;
	}

	componentWillUnmount() {
		console.log("DISMOUNT : 01_componentWillUnmount");
	}

	handle = () => {
		this.setState({});
	}

	render() {
		return (
			<div>
				<h3>The Component</h3>
				<button onClick={this.handle}>Update</button>
			</div>
		)
	}

}

export default Classes;
