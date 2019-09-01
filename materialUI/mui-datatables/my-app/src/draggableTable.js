import React from 'react';

import MUIDataTable from "mui-datatables";
import { TableBody } from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Draggable from 'react-draggable';

import MyRows from './MyRows'


const columns = ["Name", "Company", "City", "State"];

const options = {
	filterType: 'checkbox',
	responsive: 'scroll',
	fixedHeader: 'false',
	customToolbar: () => {
		return;
	}
};

class DraggableTable extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			columns: ["Name", "Company", "City", "State"],
			data:
			[
				["Joe James", "Test Corp", "Yonkers", "NY"],
				["John Walsh", "Test Corp", "Hartford", "CT"],
				["Bob Herm", "Test Corp", "Tampa", "FL"],
				["James Houston", "Test Corp", "Dallas", "TX"],
			],
			startDraggable: false
		}

		this.screenPos = {
			x: 0,
			y: 0
		}
	}



	handleRowClick = (rowData, rowMeta) => {
		console.log('Hey');
		// console.log('H', rowMeta);
		this.setState({startDraggable: true})
		//first delete data row
		// console.log(rowData);
		// console.log(rowMeta);

	}

	onMove = (e) => {
		// console.log("move ", e.nativeEvent);
		// this.setState({
		// 	screenX: e.nativeEvent.screenX,
		// 	screenY: e.nativeEvent.screenY
		// });
		this.screenPos.x = e.nativeEvent.clientX;
		this.screenPos.y = e.nativeEvent.clientY;
	}


	render () {

		const getMuiTheme = () => createMuiTheme({
		  overrides: {
			MUIDataTable: {
				responsiveStacked: {
					overflow: "visible",
					overflowX: "visible",
					overflowY: "visible",
				},
				root: {
					overflow: "visible",
					overflowX: "visible",
					overflowY: "visible",
			  	},
				root: {
				  overflow: "visible",
				  overflowX: "visible",
				  overflowY: "visible",
				}
			}
		  }
		})

		const draggableStyle = {
			position: "fixed",
			top: this.screenPos.y,
			left: this.screenPos.x,
		}

		const options = {
			responsive: 'scroll',
			onRowClick : this.handleRowClick,
			// customRowRender: (data, dataIndex, rowIndex) => {
			// 	return <MyRows key={rowIndex} data={data} dataIndex={dataIndex} rowIndex={rowIndex}/>
			// }
		}

		const tableBodyOptions = {
			serverSide: false,

		}
		let controlledPosition = {
			x: this.screenPos.x,
			y: this.screenPos.y,
		};

		console.log(' controlled pos : ', controlledPosition);

		return (
			<div>
				<MuiThemeProvider theme={getMuiTheme()}>
					<div onMouseMove={this.onMove} onMouseDown={() => console.log("OnMouseDown")}>
						<MUIDataTable

							title={"Employee List"}
							data={this.state.data}
							columns={this.state.columns}
							options={options}
						/>
					</div>
				</MuiThemeProvider>

				{this.state.startDraggable &&
					<div style={draggableStyle}>
						HELLO
					</div>
				}

			</div>
		)
	}
}

export default DraggableTable;
