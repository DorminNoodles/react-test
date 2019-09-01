import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/styles';



function CustomCheckbox() {
	// const classes = useStyles();

	return (
		<Checkbox
			defaultChecked
		/>
	);
}

const ThemeProvider_01 = () => {
	return(
		<div>
			<Checkbox />
		</div>
	);
}

export default ThemeProvider_01;
