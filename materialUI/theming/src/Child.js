import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';


const theme = createMuiTheme({
	palette: {
		secondary: {
			main: "#00FF00",
		}
	}
})


const SliderTemp = () => {
	return(
		<div style={{width: '200px'}}>
			<Typography id="discrete-slider" gutterBottom>
			  Temperature
			</Typography>
			<Slider
			  defaultValue={30}
			  aria-labelledby="discrete-slider"
			  valueLabelDisplay="auto"
			  step={10}
			  marks
			  min={10}
			  max={110}
			/>
		</div>
	);
}

const DeepChild = () => {
	// console.log(theme);
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Checkbox />
				<SliderTemp />
				<Button variant="contained" color="primary">
					Default
				</Button>
				<Typography component="div" variant="body1">
					<Box color="primary.main">primary.main</Box>
					<Box color="secondary.main">secondary.main</Box>
					<Box color="error.main">error.main</Box>
					<Box color="text.primary">text.primary</Box>
					<Box color="text.secondary">text.secondary</Box>
					<Box color="text.disabled">text.disabled</Box>
					<Box color="text.hint">text.hint</Box>
				</Typography>
			</div>
		</ThemeProvider>
	);
}

const Child = () => {
	// console.log(theme);
	return (
		<div>
			<DeepChild />
		</div>
	);
}


export default Child;
