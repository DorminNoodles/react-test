import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CallApi() {

	const [users, setUsers] = useState(0);


	useEffect(() => {

		console.log("UseEffect Ping");

		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
					console.log(res);
					setUsers(res);
				})
	},[setUsers])


	// console.log(users);

	return (
		<div>

		</div>
	)

}

export default CallApi;
