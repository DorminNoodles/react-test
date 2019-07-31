import React from 'react';


class Container01 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			txt: 'In State',
		};
	}

	render() {
		return (
			<div>
				{this.state.txt}
			</div>
		);
	}

}

export default Container01;
