import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#882233',
		color: 'white',
	}
});

const HookApi_01 = () => {
	const classes = useStyles();

	return(
		<div>
			<div className={classes.root}>
				HookAPI_01
			</div>
		</div>
	)
}

export default HookApi_01;
