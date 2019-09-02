import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, useTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Child from './Child';


function CustomCheckbox() {
	// const classes = useStyles();

	return (
	<Checkbox
	defaultChecked
	/>
	);
}


// const theme = createMuiTheme({
// 	palette: {
// 	  secondary: {
// 		main: "#0011FF",
// 	  },
// 	  primary: {
// 		  main: "#880000",
// 	  },
// 	  type: 'dark',
// 	},
// });

const theme = createMuiTheme({
	palette: {
		secondary: {
			main:
		}
		type: "light"
	},
});

// console.log(theme.palette.text.primary)


const ThemeProvider_01 = () => {
	return(
	<div>
	<ThemeProvider theme={theme}>
		<Child />
	</ThemeProvider>
	</div>
	);
}

export default ThemeProvider_01;
