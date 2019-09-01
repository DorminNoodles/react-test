import React, {Component} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';


// class Editable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       columns: [
//         { title: 'Name', field: 'name' },
//         { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
//         { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//         {
//           title: 'Birth Place',
//           field: 'birthCity',
//           lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//       ],
//       data: [
//         { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//         { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//       ]
//     }
//   }
//
//   render() {
//     return (
//       <MaterialTable
//         title="Editable Preview"
//         columns={this.state.columns}
//         data={this.state.data}
// 		options={{ selection: true }}
// 		actions={[
// 			{
// 				tooltip: 'Remove All Selected Users',
// 				icon: 'delete',
// 				onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
// 				}
// 			]}
//         editable={{
//           onRowAdd: newData =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 {
//                   const data = this.state.data;
//                   data.push(newData);
//                   this.setState({ data }, () => resolve());
//                 }
//                 resolve()
//               }, 1000)
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 {
//                   const data = this.state.data;
//                   const index = data.indexOf(oldData);
//                   data[index] = newData;
//                   this.setState({ data }, () => resolve());
//                 }
//                 resolve()
//               }, 1000)
//             }),
//           onRowDelete: oldData =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 {
//                   let data = this.state.data;
//                   const index = data.indexOf(oldData);
//                   data.splice(index, 1);
//                   this.setState({ data }, () => resolve());
//                 }
//                 resolve()
//               }, 1000)
//             }),
//         }}
//       />
//     )
//   }
// }



// editable prop that has onRowAdd, onRowUpdate, onRowDelete


class BasicSelection extends React.Component {
	render() {

		// onRowAdd =

		return (
		  <MaterialTable
			title="Basic Selection Preview"
			columns={[
			  { title: 'Name', field: 'name' },
			  { title: 'Surname', field: 'surname' },
			  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
			  {
				title: 'Birth Place',
				field: 'birthCity',
				lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
			  },
			]}
			data={[
			  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
			  { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
			]}
			options={{
			  selection: true
			}}
			editable={{
				isEditable: rowData => rowData.name === "a"
			}}
		  />
		)
  }
}

class Editable extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		editRow: false,
		columns: [
			{ title: 'Name', field: 'name' },
			{
				title: 'Birth Place',
				field: 'birthCity',
				lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
			},
		],
		data: [
			{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
			{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
		],
		selection: true
	}
  }

	handleSelection = (e) => {
		console.log("HandleSelection !");
		console.log(e.length);
		// (e.length > 1 ? this.setState() : )
	}

render() {



	return (
	  <MaterialTable
		title="Editable Preview"
		onSelectionChange={this.handleSelection}
		columns={this.state.columns}
		data={this.state.data}
		options={{
		  selection: this.state.selection
		}}
		editable={{
		  onRowAdd: newData =>
			new Promise((resolve, reject) => {
			  setTimeout(() => {
				{
				  const data = this.state.data;
				  data.push(newData);
				  this.setState({ data }, () => resolve());
				}
				resolve()
			  }, 1000)
			}),
		  onRowUpdate: (newData, oldData) =>
			new Promise((resolve, reject) => {
			  setTimeout(() => {
				{
				  const data = this.state.data;
				  const index = data.indexOf(oldData);
				  data[index] = newData;
				  this.setState({ data }, () => resolve());
				}
				resolve()
			  }, 1000)
			}),
		  onRowDelete: oldData =>
			new Promise((resolve, reject) => {
			  setTimeout(() => {
				{
				  let data = this.state.data;
				  const index = data.indexOf(oldData);
				  data.splice(index, 1);
				  this.setState({ data }, () => resolve());
				}
				resolve()
			  }, 1000)
			}),
		}}
	  />
	)
  }
}

class FreeAction extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editRow: false,
			selection: true,
		}
	}

  render() {
	  console.log(this.state.editRow);
	return (
	  <MaterialTable
		title="Free Action Preview"
		columns={[
		  { title: 'Name', field: 'name' },
		  { title: 'Surname', field: 'surname' },
		  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
		  {
			title: 'Birth Place',
			field: 'birthCity',
			lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
		  },
		]}
		data={[
		  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
		  { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
		]}
		actions={[
			{
				icon: 'edit',
				tooltip: 'Add User',
				isFreeAction: true,
				onClick: (event) => alert("You want to add a new row")
			},
			{
				icon: 'select',
				tooltip: 'Add User',
				isFreeAction: true,
				onClick: (event) => alert("You want to add a new row")
			}
		]}

		editable={{
			onRowUpdate: (newData, oldData) =>
			   new Promise((resolve, reject) => {
				 setTimeout(() => {
				   {
					 const data = this.state.data;
					 const index = data.indexOf(oldData);
					 data[index] = newData;
					 this.setState({ data }, () => resolve());
				   }
				   resolve()
				 }, 1000)
		   })
		}}

		options={{
		  selection: this.state.selection,
		}}
		onRowClick={
			(e, data) => {
				console.log("here >");
				console.log(data.tableData.id);
				this.setState({selection : !this.state.selection});
			}
		}
	  />
	)
  }
}

export default FreeAction;
