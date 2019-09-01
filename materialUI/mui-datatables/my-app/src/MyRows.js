import React from 'react';

import Draggable from 'react-draggable';
import { TableBodyRow } from "mui-datatables";


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import RawTable from './rawTable';

const useStyles = makeStyles(theme => ({
	tableRow: {
		backgroundColor: '#99CCFF',
	}
}));


const MyRows = (props) => {

	const classes = useStyles();
	console.log(props);

	const handleStart = (e) => {
		console.log("DRAG START");
		// console.log(e);
		console.log(this);
	}

	return (
		<React.Fragment>
			<Draggable
				onStart={handleStart(this)}
			>
				<TableRow key={props.rowIndex} className={classes.tableRow} key={props.rowIndex}>
					<TableCell>{}</TableCell>
					<TableCell>{props.data[0]}</TableCell>
					<TableCell>{props.data[1]}</TableCell>
					<TableCell>{props.data[2]}</TableCell>
					<TableCell>{props.data[3]}</TableCell>
				</TableRow>
			</Draggable>
		</React.Fragment>
	);
}

export default MyRows;
