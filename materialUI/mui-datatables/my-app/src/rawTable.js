import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const columns = [
 {
  name: "Name",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Company",
  options: {
   filter: true,
   sort: false
  }
 },
 {
  name: "City",
  options: {
   filter: true,
   sort: false
  }
 },
];


// ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
];

const options = {
  filterType: 'checkbox',
  pagination: false,
  selectableRowsOnClick: false,
  responsive: 'scroll',
  filter: false,
  search: false,
  print: false,
  download: false,
  viewColumns: false,
};


const RawTable = (props) => {

	console.log("props.data >>", props.data);

	const getMuiTheme = () => createMuiTheme({
		overrides: {
      		MuiTableHead: {
				root: {
					display: 'none',
					backgroundColor: "#FF0000"
				}
			}
		}
	})

	return(
		<MuiThemeProvider theme={getMuiTheme()}>
			<MUIDataTable
			  data={[props.data]}
			  columns={columns}
			  options={options}
			/>
		</MuiThemeProvider>
	)
}

export default RawTable;
