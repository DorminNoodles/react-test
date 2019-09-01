import React from 'react';


const Button = (props) => {
	console.log(props);
	return (
		<div className={props.className}>
			{props.children}
		</div>
	)
}

export default Button;
